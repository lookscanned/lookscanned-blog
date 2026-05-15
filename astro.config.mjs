import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { LOCALES, DEFAULT_LOCALE } from "./src/i18n/locales.config.mjs";

const localeCodes = LOCALES.map((l) => l.code);

export default defineConfig({
  site: "https://blog.lookscanned.io",
  trailingSlash: "always",
  build: { format: "directory" },
  publicDir: "./static",
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: localeCodes,
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
