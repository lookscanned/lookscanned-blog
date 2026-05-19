#!/usr/bin/env node
// Move dist/<locale>/404/index.html → dist/<locale>/404.html.
//
// We ship a per-locale 404 page (src/pages/[locale]/404.astro) so that
// Cloudflare Pages can serve a localized "page not found" for any
// unmatched URL under /zh/, /ja/, etc. Pages walks up the directory
// tree looking for the nearest 404.html.
//
// Astro emits the root `src/pages/404.astro` as `dist/404.html` as a
// special case, but nested dynamic routes obey `trailingSlash: "always"`
// and land at `dist/<locale>/404/index.html`. Cloudflare doesn't look
// inside `404/`, so we have to flatten them ourselves.

import { readdir, rename, rmdir, stat } from "node:fs/promises";
import { join } from "node:path";

const DIST = "dist";

const entries = await readdir(DIST, { withFileTypes: true });

let renamed = 0;
for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const localeDir = join(DIST, entry.name);
  const nestedDir = join(localeDir, "404");
  const nestedHtml = join(nestedDir, "index.html");
  try {
    const s = await stat(nestedHtml);
    if (!s.isFile()) continue;
  } catch {
    continue; // no 404/index.html here, skip
  }
  await rename(nestedHtml, join(localeDir, "404.html"));
  await rmdir(nestedDir);
  renamed++;
}

console.log(`[flatten-locale-404] flattened ${renamed} locale 404 page(s)`);
