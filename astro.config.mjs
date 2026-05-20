import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/locales.config.mjs";

const localeCodes = LOCALES.map((l) => l.code);

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
        locales: Object.fromEntries(LOCALES.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
