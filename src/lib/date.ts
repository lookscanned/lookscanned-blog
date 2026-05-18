import { getLocale } from "../i18n";

/**
 * Human-readable date for the given locale (e.g. "May 16, 2026", "2026年5月16日").
 * Uses the locale's hreflang for `Intl.DateTimeFormat` since that's the
 * BCP-47 tag the standard library expects.
 */
export function formatDate(locale: string, date: Date): string {
  const tag = getLocale(locale).hreflang;
  try {
    return new Intl.DateTimeFormat(tag, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}
