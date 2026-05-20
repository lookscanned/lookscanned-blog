import { readdirSync, readFileSync } from "node:fs";
import { readdir, rename, rmdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { defineConfig } from "astro/config";
import type { AstroIntegration } from "astro";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import * as pagefind from "pagefind";
import type { RoutingMeta } from "./src/i18n";

/**
 * Astro emits `src/pages/[locale]/404.astro` to `dist/<locale>/404/index.html`
 * under `trailingSlash: "always"`. Cloudflare Pages walks the tree looking
 * for the literal filename `<dir>/404.html`, so the wrapper directory has
 * to go. The root `src/pages/404.astro` is already special-cased by Astro
 * itself; nested dynamic routes are not.
 */
const flattenLocale404: AstroIntegration = {
  name: "flatten-locale-404",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const distDir = fileURLToPath(dir);
      const entries = await readdir(distDir, { withFileTypes: true });
      const renames = entries
        .filter((e) => e.isDirectory())
        .map(async (e) => {
          const nested = join(distDir, e.name, "404");
          try {
            await rename(join(nested, "index.html"), join(distDir, e.name, "404.html"));
            await rmdir(nested);
          } catch (err) {
            if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
          }
        });
      await Promise.all(renames);
    },
  },
};

/**
 * Build the Pagefind search index. Replaces the standalone CLI step
 * (`pagefind --site dist --output-subdir _pagefind`) so that everything
 * post-build lives inside Astro's pipeline. Set `SKIP_PAGEFIND=1` for a
 * fast `astro build` that omits the index (~3s saved when iterating).
 *
 * Must run AFTER `flatten-locale-404` so we don't index the throwaway
 * `<locale>/404/index.html` paths.
 */
const pagefindIndex: AstroIntegration = {
  name: "pagefind",
  hooks: {
    "astro:build:done": async ({ dir, logger }) => {
      if (process.env.SKIP_PAGEFIND) {
        logger.info("skipped (SKIP_PAGEFIND=1)");
        return;
      }
      const { index, errors: createErrors } = await pagefind.createIndex({});
      if (!index || createErrors.length) {
        throw new Error(`pagefind createIndex: ${createErrors.join(", ")}`);
      }
      const distDir = fileURLToPath(dir);
      const { errors: addErrors, page_count } = await index.addDirectory({ path: distDir });
      if (addErrors.length) throw new Error(`pagefind addDirectory: ${addErrors.join(", ")}`);
      await index.writeFiles({ outputPath: join(distDir, "_pagefind") });
      await pagefind.close();
      logger.info(`indexed ${page_count} pages`);
    },
  },
};

// Read the per-locale JSON files at config-load. Vite's `import.meta.glob`
// isn't available here (config runs before the Vite pipeline), so we do
// plain fs. The cast picks only the routing meta — anything else in the
// JSON (UI strings, menu, …) is invisible to TS here, by design.
const LOCALE_DIR = "./src/i18n/locales";
const localeMeta = readdirSync(LOCALE_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(`${LOCALE_DIR}/${f}`, "utf8")) as RoutingMeta)
  .sort((a, b) => a.weight - b.weight);

const DEFAULT_LOCALE = "en";
const localeCodes = localeMeta.map((l) => l.code);

export default defineConfig({
  site: "https://blog.lookscanned.io",
  trailingSlash: "always",
  build: { format: "directory" },
  publicDir: "./static",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  markdown: {
    shikiConfig: {
      // Dual themes: Shiki emits both color sets as CSS variables; the dark
      // one activates inside `<html class="dark">` via rules in global.css.
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      // Wrap long lines instead of horizontal-scroll — posts contain inline
      // SVG and Hugo templates with multi-hundred-char lines that get lost
      // off-screen otherwise.
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: localeCodes,
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    flattenLocale404,
    pagefindIndex,
    icon({
      // Only pull the iconify subsets we actually use; keeps the
      // build cache lean.
      iconDir: undefined,
      include: {
        lucide: [
          "search", "arrow-right", "arrow-up-right",
          "sun", "moon", "sun-moon",
          "x", "check", "languages",
          "menu",
        ],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(localeMeta.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
  // `tailwindcss()` ships its own bundled Vite types; cast around the
  // duplicate-module type mismatch with Astro's Vite copy.
  vite: { plugins: [tailwindcss() as never] },
});
