import { LOCALES, DEFAULT_LOCALE } from "./locales.config.mjs";
import { LOCALE_DATA, type LocaleData, type MenuItem } from "./locales";
import { UI, type UIStrings } from "./ui";

export { LOCALES, DEFAULT_LOCALE, LOCALE_DATA, UI };
export type { LocaleData, MenuItem, UIStrings };

export interface LocaleMeta {
  code: string;
  hreflang: string;
  dir: "ltr" | "rtl";
  weight: number;
  data: LocaleData;
  ui: UIStrings;
}

const META_BY_CODE = new Map<string, LocaleMeta>(
  LOCALES.map((l) => [
    l.code,
    {
      code: l.code,
      hreflang: l.hreflang,
      dir: l.dir as "ltr" | "rtl",
      weight: l.weight,
      data: LOCALE_DATA[l.code],
      ui: UI[l.code],
    },
  ]),
);

export function getLocale(code: string): LocaleMeta {
  const meta = META_BY_CODE.get(code);
  if (!meta) throw new Error(`Unknown locale: ${code}`);
  return meta;
}

export function listLocales(): LocaleMeta[] {
  return [...META_BY_CODE.values()].sort((a, b) => a.weight - b.weight);
}

/** Build a URL path for a route within the given locale. */
export function localizedPath(locale: string, path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
  if (!clean) return base;
  return `${base}${clean}${clean.endsWith("/") ? "" : "/"}`;
}

/** Read the active locale from a URL pathname. */
export function localeFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return DEFAULT_LOCALE;
  const first = segments[0].toLowerCase();
  return META_BY_CODE.has(first) && first !== DEFAULT_LOCALE
    ? first
    : DEFAULT_LOCALE;
}

/**
 * getStaticPaths for routes under `src/pages/[locale]/*` — one entry per
 * non-default locale. The English variant lives at the un-prefixed root,
 * so the `en` code is intentionally excluded.
 */
export function localeStaticPaths() {
  return LOCALES
    .filter((l) => l.code !== DEFAULT_LOCALE)
    .map((l) => ({ params: { locale: l.code }, props: { locale: l.code } }));
}

/** Pluralized "{n} min" using PaperMod's one/other forms. */
export function formatReadingTime(locale: string, minutes: number): string {
  const ui = getLocale(locale).ui;
  const template = minutes === 1 ? ui.read_time_one : ui.read_time_other;
  return template.replace(/\{\{\s*\.Count\s*\}\}/g, String(minutes));
}
