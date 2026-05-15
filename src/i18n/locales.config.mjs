// Minimal locale catalog consumed by astro.config.mjs. Full per-locale UI data
// lives in ./locales.ts. Keep these two in sync — `code` (used as the URL
// segment under Astro's i18n routing) must match exactly.

export const DEFAULT_LOCALE = "en";

export const LOCALES = [
  { code: "en", weight: 1, hreflang: "en", dir: "ltr" },
  { code: "zh", weight: 2, hreflang: "zh-CN", dir: "ltr" },
  { code: "zh-tw", weight: 3, hreflang: "zh-TW", dir: "ltr" },
  { code: "es", weight: 4, hreflang: "es", dir: "ltr" },
  { code: "hi", weight: 5, hreflang: "hi", dir: "ltr" },
  { code: "ar", weight: 6, hreflang: "ar", dir: "rtl" },
  { code: "fr", weight: 7, hreflang: "fr", dir: "ltr" },
  { code: "pt", weight: 8, hreflang: "pt", dir: "ltr" },
  { code: "ja", weight: 9, hreflang: "ja", dir: "ltr" },
  { code: "de", weight: 10, hreflang: "de", dir: "ltr" },
  { code: "ru", weight: 11, hreflang: "ru", dir: "ltr" },
  { code: "id", weight: 12, hreflang: "id", dir: "ltr" },
  { code: "ko", weight: 13, hreflang: "ko", dir: "ltr" },
  { code: "it", weight: 14, hreflang: "it", dir: "ltr" },
  { code: "tr", weight: 15, hreflang: "tr", dir: "ltr" },
  { code: "pl", weight: 16, hreflang: "pl", dir: "ltr" },
  { code: "nl", weight: 17, hreflang: "nl", dir: "ltr" },
  { code: "vi", weight: 18, hreflang: "vi", dir: "ltr" },
  { code: "th", weight: 19, hreflang: "th", dir: "ltr" },
  { code: "sv", weight: 20, hreflang: "sv", dir: "ltr" },
  { code: "ms", weight: 21, hreflang: "ms", dir: "ltr" },
  { code: "he", weight: 22, hreflang: "he", dir: "rtl" },
  { code: "cs", weight: 23, hreflang: "cs", dir: "ltr" },
  { code: "hu", weight: 24, hreflang: "hu", dir: "ltr" },
  { code: "ro", weight: 25, hreflang: "ro", dir: "ltr" },
  { code: "el", weight: 26, hreflang: "el", dir: "ltr" },
  { code: "uk", weight: 27, hreflang: "uk", dir: "ltr" },
  { code: "fil", weight: 28, hreflang: "fil", dir: "ltr" },
  { code: "bn", weight: 29, hreflang: "bn", dir: "ltr" },
  { code: "ur", weight: 30, hreflang: "ur", dir: "rtl" },
  { code: "sw", weight: 31, hreflang: "sw", dir: "ltr" },
  { code: "af", weight: 32, hreflang: "af", dir: "ltr" },
];
