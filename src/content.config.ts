import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Post files live at `src/content/posts/<slug>/index.<lang>.md`. The default
// glob ID generator strips dots from the filename, which mangles the locale
// segment. Build a deterministic `<lang>/<slug>` ID instead so helpers can
// split it trivially.
const posts = defineCollection({
  loader: glob({
    pattern: "*/index.*.md",
    base: "./src/content/posts",
    generateId: ({ entry }) => {
      const m = entry.match(/^(.+)\/index\.([a-z][a-z0-9-]*)\.md$/i);
      if (!m) throw new Error(`Unexpected post path: ${entry}`);
      return `${m[2].toLowerCase()}/${m[1]}`;
    },
  }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    title: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
