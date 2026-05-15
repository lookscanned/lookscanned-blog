import type { APIRoute } from "astro";
import { LOCALES, DEFAULT_LOCALE } from "../../i18n/locales.config.mjs";
import { buildRssResponse } from "../../lib/rss";

export function getStaticPaths() {
  return LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({
    params: { locale: l.code },
    props: { locale: l.code },
  }));
}

export const GET: APIRoute = ({ props, site }) => {
  if (!site) throw new Error("astro.config `site` is required for RSS");
  return buildRssResponse(props.locale as string, site);
};
