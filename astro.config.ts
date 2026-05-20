import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Read the per-locale JSON files at config-load time. Vite's
// `import.meta.glob` isn't available here (config runs before the Vite
// pipeline), so we do plain fs. Each JSON carries `code/weight/hreflang/dir`
// — everything the Astro i18n + sitemap integrations need.
const LOCALE_DIR = "./src/i18n/locales";
const localeMeta = readdirSync(LOCALE_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(`${LOCALE_DIR}/${f}`, "utf8")) as {
    code: string;
    weight: number;
    hreflang: string;
    dir: "ltr" | "rtl";
  })
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
