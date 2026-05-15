import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export interface PostMeta {
  entry: PostEntry;
  /** URL slug (frontmatter `slug` if set, otherwise directory name). */
  slug: string;
  /** Source directory name — used to group translations across locales. */
  dirSlug: string;
  locale: string;
}

// IDs are produced by `generateId` in src/content.config.ts as "<lang>/<slug>".
export function parsePostId(id: string): { slug: string; locale: string } | null {
  const idx = id.indexOf("/");
  if (idx <= 0 || idx === id.length - 1) return null;
  return { locale: id.slice(0, idx), slug: id.slice(idx + 1) };
}

let cache: PostMeta[] | null = null;

export async function getAllPosts(): Promise<PostMeta[]> {
  if (cache) return cache;
  const entries = await getCollection("posts");
  cache = entries.flatMap((entry) => {
    const parsed = parsePostId(entry.id);
    if (!parsed) {
      console.warn(`[posts] unable to parse id: ${entry.id}`);
      return [];
    }
    const slug = entry.data.slug ?? parsed.slug;
    return [{ entry, slug, dirSlug: parsed.slug, locale: parsed.locale }];
  });
  return cache;
}

export async function getPostsByLocale(locale: string): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all
    .filter((p) => p.locale === locale && !p.entry.data.draft)
    .sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime());
}

export async function getPostBySlug(
  slug: string,
  locale: string,
): Promise<PostMeta | null> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug && p.locale === locale) ?? null;
}

export async function getTranslations(dirSlug: string): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.dirSlug === dirSlug);
}

export async function getAllTagsByLocale(
  locale: string,
): Promise<Map<string, PostMeta[]>> {
  const posts = await getPostsByLocale(locale);
  const tags = new Map<string, PostMeta[]>();
  for (const post of posts) {
    for (const tag of post.entry.data.tags) {
      const list = tags.get(tag) ?? [];
      list.push(post);
      tags.set(tag, list);
    }
  }
  return tags;
}
