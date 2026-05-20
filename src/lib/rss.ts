import rss from "@astrojs/rss";
import { getPostsByLocale } from "./posts";
import { getLocale, localizedPath } from "../i18n";

export async function buildRssResponse(locale: string, site: URL | string) {
  const meta = getLocale(locale);
  const posts = await getPostsByLocale(locale);
  return rss({
    title: meta.title,
    description: meta.description,
    site,
    items: posts.map((post) => ({
      title: post.entry.data.title,
      pubDate: post.entry.data.date,
      description: post.entry.data.summary ?? post.entry.data.description ?? "",
      link: localizedPath(locale, `posts/${post.slug}`),
      categories: post.entry.data.tags,
    })),
    customData: `<language>${meta.hreflang}</language>`,
  });
}
