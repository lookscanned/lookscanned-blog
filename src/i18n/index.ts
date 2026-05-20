// Public i18n API. Per-locale data lives in ./locales/<code>.json — each
// file is the single source of truth for that locale (meta + site data +
// UI strings). Adding a new locale is just dropping a new JSON file in
// ./locales/. astro.config.ts reads the same directory via fs at config
// time; everything else goes through this module.

export interface MenuItem {
  name: string;
  url: string;
  weight: number | null;
}

export interface UIStrings {
  prev_page: string;
  next_page: string;
  toc: string;
  translations: string;
  home: string;
  edit_post: string;
  code_copy: string;
  code_copied: string;
  read_time_one: string;
  read_time_other: string;
  words_one: string;
  words_other: string;
  browse_label: string;
  connect_label: string;
  try_cta: string;
  skip_to_content: string;
  theme: string;
  theme_system: string;
  theme_light: string;
  theme_dark: string;
  not_found: string;
  back_to_home: string;
}

/** Locale routing meta — the fields astro.config.ts needs at config-load. */
export interface RoutingMeta {
  code: string;
  weight: number;
  hreflang: string;
  dir: "ltr" | "rtl";
}

export interface LocaleData {
  languageName: string;
  title: string;
  description: string;
  homeTitle: string;
  menu: MenuItem[];
}

export interface LocaleMeta extends RoutingMeta {
  data: LocaleData;
  ui: UIStrings;
}

/** Shape of each src/i18n/locales/<code>.json file: flat. */
type LocaleJson = RoutingMeta & LocaleData & { ui: UIStrings };

const modules = import.meta.glob<{ default: LocaleJson }>(
  "./locales/*.json",
  { eager: true },
);

const META_BY_CODE = new Map<string, LocaleMeta>(
  Object.values(modules).map((mod) => {
    const j = mod.default;
    return [
      j.code,
      {
        code: j.code,
        weight: j.weight,
        hreflang: j.hreflang,
        dir: j.dir,
        data: {
          languageName: j.languageName,
          title: j.title,
          description: j.description,
          homeTitle: j.homeTitle,
          menu: j.menu,
        },
        ui: j.ui,
      },
    ];
  }),
);

// English never gets a URL prefix; everything else lives at /<code>/.
// Hardcoded here because astro.config.ts also pins this exact value when
// computing the Astro i18n integration config.
export const DEFAULT_LOCALE = "en";

export const LOCALES = [...META_BY_CODE.values()].sort(
  (a, b) => a.weight - b.weight,
);

export function getLocale(code: string): LocaleMeta {
  const meta = META_BY_CODE.get(code);
  if (!meta) throw new Error(`Unknown locale: ${code}`);
  return meta;
}

export function listLocales(): LocaleMeta[] {
  return LOCALES;
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
  return LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({
    params: { locale: l.code },
    props: { locale: l.code },
  }));
}

/** Pluralized "{n} min" using PaperMod's one/other forms. */
export function formatReadingTime(locale: string, minutes: number): string {
  const ui = getLocale(locale).ui;
  const template = minutes === 1 ? ui.read_time_one : ui.read_time_other;
  return template.replace(/\{\{\s*\.Count\s*\}\}/g, String(minutes));
}
