# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual Astro-based blog for Look Scanned (https://lookscanned.io), a privacy-first browser-based PDF scanning tool. The blog publishes technical content about web development, PDF processing, and privacy-focused tools in 32 languages.

## Development Commands

### Local Development
```bash
# Install deps (first time / after pulling)
npm ci

# Start the dev server (http://localhost:4321)
npm run dev

# Type check
npm run check
```

### Build
```bash
# Production build: Astro static output + Pagefind index
npm run build

# Astro only (skip the Pagefind step — useful when iterating fast)
npm run build:astro
```

Astro emits to `dist/`. The Pagefind step writes `dist/_pagefind/`.

## Architecture

### Multilingual Structure

32 languages, English as the default (no `/en/` URL prefix; English lives at `/`).

Each locale has one JSON file at `src/i18n/locales/<code>.json` containing
everything for that language — routing meta (`code`, `weight`, `hreflang`,
`dir`), site copy (`title`, `description`, `homeTitle`, `menu`), and UI
strings (`ui.prev_page`, `ui.theme_*`, …). Adding a new locale = dropping
a new JSON file in that directory.

`src/i18n/index.ts` loads them all via `import.meta.glob` and exports the
typed `LOCALES`, `DEFAULT_LOCALE`, `getLocale()`, `localizedPath()`, etc.
`astro.config.ts` reads the same directory via `fs` at config-load time
(Vite isn't running yet) to populate the i18n + sitemap integration
configs.

RTL languages: `ar`, `he`, `ur` (each JSON's `dir: "rtl"`).

### Content Layout

```
src/content/posts/<slug>/index.<lang>.md
```

Each post directory holds 32 files: `index.en.md`, `index.zh.md`, `index.ar.md`, etc.

The Content Collection (`src/content.config.ts`) reads them with a custom `generateId` that produces `<locale>/<slug>` IDs — necessary because Astro's default ID generator would mangle `index.zh-tw.md` by stripping its dots.

### Post Front Matter

YAML, double-quoted strings (handles apostrophes in French, Portuguese, etc.):

```yaml
---
date: "2025-01-20T15:30:00+08:00"
draft: false
title: "Post Title"
summary: "Brief summary"
description: "Brief summary"
tags: ["tag1", "tag2"]
# slug: "custom-url-slug"   # optional override of the directory name
---
```

`summary` and `description` are typically the same. `slug` is optional — one
existing post (`black-bars-arent-redaction-epstein-files-look-scanned`) uses
it to override the URL.

### Routing

- `/`                                 — English home
- `/<lang>/`                          — locale home
- `/posts/<slug>/`                    — English post detail
- `/<lang>/posts/<slug>/`             — locale post detail
- `/archives/` + `/<lang>/archives/`  — chronological archive
- `/tags/` + `/<lang>/tags/`          — tag index
- `/tags/<tag>/` + locale variants    — single-tag listing
- `/search/` + `/<lang>/search/`      — Pagefind UI
- `/rss.xml` + `/<lang>/rss.xml`      — 32 feeds
- `/sitemap-index.xml`                — multi-locale sitemap

URLs always end with a trailing slash (Astro config: `trailingSlash: "always"`).

### Components & Layouts

- `src/layouts/BaseLayout.astro` — html/head, header, footer, dark-mode init script, hreflang alternates, speculation rules
- `src/layouts/PostLayout.astro` — prose body, reading time, translations row, prev/next nav
- `src/components/Header.astro` — site title, menu, LangDropdown, ThemeToggle
- `src/components/LangDropdown.astro` — `<details>`-based dropdown of locale options

### Styling

Tailwind v4 via `@tailwindcss/vite`. Configuration lives entirely in `src/styles/global.css` (CSS-first via `@theme`). `@tailwindcss/typography` powers the `prose` classes used on post bodies. Font stack is `system-ui` with CJK / RTL fallbacks — zero font downloads.

### Static Assets

`static/` (Astro's `publicDir`) holds:
- `_headers` — Cloudflare Pages cache rules
- `_redirects` — catches Hugo-era URLs and 301s them to their Astro equivalents
- favicons + robots.txt

## Creating New Blog Posts

See [.claude/commands/new-post.md](.claude/commands/new-post.md) for the full workflow. Short version: 32 markdown files, one per locale, all with the same `date` and the same body structure.

## Deployment

GitHub Actions (`.github/workflows/ci.yml`):

- **On pull requests**: build + deploy preview to Cloudflare Pages staging
- **On push to `main`**: build + deploy to Cloudflare Pages production (`https://blog.lookscanned.io`) and GitHub Pages

The build job runs:
1. `npm ci`
2. `npm run check` (Astro type check)
3. `npm run build` (Astro + Pagefind)

## Git Commit Conventions

Conventional Commits. Standard types: `feat`, `fix`, `docs`, `perf`, `refactor`, `chore`, `ci`. Custom type `post:` for new blog post additions.

```bash
git commit -m "post: How to Make PDFs Look Scanned"
git commit -m "feat: add dark mode to the post detail page"
git commit -m "fix(i18n): correct Filipino menu translation for tags"
```

Pull request titles use the same format.

## Important Conventions

1. **Content focus**: Look Scanned, web development, PDF processing, privacy-first tools.
2. **Language consistency**: all 32 languages must be synchronized when updating any post.
3. **Front matter**: YAML, double-quoted strings.
4. **Components**: prefer adding `.astro` components under `src/components/` instead of inlining markup into pages.
5. **i18n changes**: edit the per-locale file at `src/i18n/locales/<code>.json` — one file is the single source of truth for that language (routing meta + site copy + UI strings).
