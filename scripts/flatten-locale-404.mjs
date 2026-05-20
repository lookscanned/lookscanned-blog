#!/usr/bin/env node
// Flatten dist/<locale>/404/index.html → dist/<locale>/404.html.
//
// Astro special-cases the root `src/pages/404.astro` and emits it as
// `dist/404.html`. Nested dynamic routes (`src/pages/[locale]/404.astro`)
// obey `trailingSlash: "always"` and land at `dist/<locale>/404/`.
// Cloudflare Pages only walks the tree looking for literal
// `<dir>/404.html`, so the wrapper directory has to go.

import { readdir, rename, rmdir } from "node:fs/promises";
import { join } from "node:path";

const flatten = async (dir) => {
  const nestedDir = join("dist", dir, "404");
  try {
    await rename(join(nestedDir, "index.html"), join("dist", dir, "404.html"));
    await rmdir(nestedDir);
    return 1;
  } catch (err) {
    if (err.code === "ENOENT") return 0;
    throw err;
  }
};

const entries = await readdir("dist", { withFileTypes: true });
const counts = await Promise.all(
  entries.filter((e) => e.isDirectory()).map((e) => flatten(e.name)),
);
const renamed = counts.reduce((a, b) => a + b, 0);

console.log(`[flatten-locale-404] flattened ${renamed} locale 404 page(s)`);
