/**
 * URL parity check: diff the Hugo URL snapshot (scripts/hugo-urls.txt) against
 * the URLs produced by the current Astro `dist/`. Reports:
 *   - URLs present in Hugo but missing from Astro
 *   - URLs new in Astro
 *
 * Also classifies each missing URL into one of:
 *   - "covered by redirect" — handled in static/_redirects (won't 404 in prod)
 *   - "drop"               — accepted regression (Hugo-auto-generated cruft)
 *   - "fail"               — needs attention
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const SNAPSHOT = "scripts/hugo-urls.txt";

const hugo = new Set(
  readFileSync(SNAPSHOT, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean),
);

const astroPaths = execSync(
  "find dist -name 'index.html' -type f",
  { encoding: "utf8" },
)
  .split("\n")
  .filter(Boolean)
  .map((p) => p.replace(/^dist/, "").replace(/index\.html$/, ""));
// Ensure trailing slash and that root is "/".
const astro = new Set(astroPaths.map((p) => (p === "/" ? "/" : p)));

const missing = [...hugo].filter((u) => !astro.has(u)).sort();
const extra = [...astro].filter((u) => !hugo.has(u)).sort();

function categorize(url) {
  if (/^(\/[a-z][a-z0-9-]*)?\/page\/\d+\/$/.test(url)) return "home-pagination";
  if (/^(\/[a-z][a-z0-9-]*)?\/posts\/page\/\d+\/$/.test(url)) return "section-pagination";
  if (/^(\/[a-z][a-z0-9-]*)?\/posts\/$/.test(url)) return "section-index";
  if (/^(\/[a-z][a-z0-9-]*)?\/categories\/$/.test(url)) return "categories-empty";
  if (/^(\/[a-z][a-z0-9-]*)?\/tags\/[^/]+\/$/.test(url)) return "tag-detail";
  if (/^(\/[a-z][a-z0-9-]*)?\/tags\/$/.test(url)) return "tag-index";
  if (/^(\/[a-z][a-z0-9-]*)?\/archives\/$/.test(url)) return "archives";
  if (/^(\/[a-z][a-z0-9-]*)?\/search\/$/.test(url)) return "search";
  if (/^(\/[a-z][a-z0-9-]*)?\/posts\/[^/]+\/$/.test(url)) return "post";
  if (/^\/[a-z][a-z0-9-]*\/$/.test(url)) return "locale-home";
  if (url === "/") return "root";
  return "other";
}

// Each entry: { match: (url) => boolean, status: "redirect" | "drop" | "fail", note }
const HANDLERS = [
  { match: (u) => u === "/en/", status: "redirect", note: "/en/ → /" },
  { match: (u) => /^\/en\//.test(u), status: "redirect", note: "/en/* → /:splat" },
  { match: (u) => /^(\/[a-z][a-z0-9-]*)?\/page\/\d+\/$/.test(u), status: "redirect", note: "home pagination" },
  { match: (u) => /^(\/[a-z][a-z0-9-]*)?\/posts\/$/.test(u), status: "redirect", note: "/posts/ → /archives/" },
  { match: (u) => /^(\/[a-z][a-z0-9-]*)?\/posts\/page\/\d+\/$/.test(u), status: "redirect", note: "section pagination" },
  { match: (u) => /^(\/[a-z][a-z0-9-]*)?\/categories\/$/.test(u), status: "redirect", note: "categories → home" },
  { match: (u) => /^\/fr\/tags\/traitement-dimages\//.test(u), status: "redirect", note: "apostrophe slug remap (fr)" },
  { match: (u) => /^\/pt\/tags\/marca-dágua\//.test(u), status: "redirect", note: "apostrophe slug remap (pt)" },
];

function classify(u) {
  for (const h of HANDLERS) if (h.match(u)) return h;
  return { status: "fail", note: "uncovered" };
}

function tally(set, label) {
  const cats = {};
  for (const u of set) {
    const c = categorize(u);
    cats[c] = (cats[c] ?? 0) + 1;
  }
  console.log(`\n${label} (${set.length})`);
  for (const k of Object.keys(cats).sort()) {
    console.log(`  ${cats[k].toString().padStart(5)}  ${k}`);
  }
}

console.log(`Hugo URLs: ${hugo.size}`);
console.log(`Astro URLs: ${astro.size}`);
tally(missing, "MISSING in Astro (raw)");
tally(extra, "NEW in Astro");

const statusCounts = { redirect: 0, drop: 0, fail: 0 };
const failures = [];
for (const u of missing) {
  const c = classify(u);
  statusCounts[c.status]++;
  if (c.status === "fail") failures.push(u);
}
console.log("\nMissing URL coverage:");
console.log(`  ${statusCounts.redirect.toString().padStart(5)}  covered by static/_redirects`);
console.log(`  ${statusCounts.drop.toString().padStart(5)}  intentionally dropped`);
console.log(`  ${statusCounts.fail.toString().padStart(5)}  UNCOVERED`);

if (failures.length) {
  console.log("\nUncovered URLs (first 25):");
  for (const u of failures.slice(0, 25)) console.log("  -", u);
  process.exitCode = 1;
} else {
  console.log("\n✓ All missing URLs are accounted for.");
}
