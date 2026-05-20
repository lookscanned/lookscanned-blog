# Repository Guidelines

## Project Structure & Module Organization
- `src/content/posts/<slug>/`: Each post lives in one folder with language files like `index.en.md`, `index.zh.md`, `index.fr.md` (32 per slug).
- `src/i18n/locales/<code>.json`: One JSON per language — single source of truth for routing meta, site copy, and UI strings.
- `src/i18n/index.ts`: Loads the JSON files and exports the typed public API (`LOCALES`, `getLocale`, `localizedPath`, …).
- `src/layouts/`: `BaseLayout.astro` and `PostLayout.astro`.
- `src/components/`: All UI building blocks (Header, Footer, LangDropdown, PostCard, Search, etc.).
- `src/pages/`: File-based routing. English routes at the root; other locales under `[locale]/`.
- `src/styles/global.css`: Tailwind v4 entry + theme tokens.
- `static/`: Public static files (`favicon*`, `robots.txt`, `_headers`, `_redirects`).
- `scripts/`: Currently empty; build-time hooks live as Astro integrations in `astro.config.ts` (e.g. `flattenLocale404`).

## Build, Test, and Development Commands
Run these from the repository root:

```bash
npm ci                                          # Install dependencies
npm run dev                                     # Local dev (http://localhost:4321)
npm run check                                   # Astro type check
npm run build:astro                             # Astro build → dist/
npm run build                                   # Astro + Pagefind (production)
```

## Coding Style & Naming Conventions
- Post front matter: YAML, `---` delimiters, double-quoted strings.
- Required post keys: `date`, `draft`, `title`, `summary`, `description`, `tags`.
- Keep `summary` and `description` aligned unless there is a strong reason to diverge.
- Use kebab-case slugs (`src/content/posts/make-pdf-look-scanned/`).
- Language files must use `index.<lang>.md` naming.
- Keep content on-topic: Look Scanned, PDF workflows, web engineering, privacy-first tooling.
- Components in `src/components/` are PascalCase `.astro` files.

## Content & i18n Workflow
- Create English first as `src/content/posts/<slug>/index.en.md`.
- Translate all 31 other languages with the same date and structure.
- RTL languages (`ar`, `he`, `ur`) use plain markdown — direction comes from `<html dir>` in the layout.
- Site-wide copy and UI strings live in `src/i18n/locales/<code>.json`. One file per language, hand-edited; the JSON is the single source of truth.

## Validation Checklist
- `npm run check` must pass (no type errors).
- `npm run build` must succeed and produce `dist/`.
- For content/UI changes, spot-check one English page, one CJK locale (`zh`), and one RTL locale (`ar`).

## Commit & Pull Request Guidelines
- Follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `perf:`, `ci:`, `refactor:`.
- Use `post:` for new article commits (e.g., `post: How to Make PDF Look Scanned`).
- PR titles use the same format.
- Keep each commit focused on one logical change.
- PRs should include a concise summary, linked issues when applicable, and confirmation that the build passed locally.
- For post updates, list which languages were updated and whether the full 32-language sync is complete.

## Deployment, Security, and Configuration Notes
- CI behavior: all pushes/PRs run build; PR/non-main branches deploy to Cloudflare staging; `main` deploys to Cloudflare production and GitHub Pages.
- Never commit secrets or API tokens. Deployment credentials stay in GitHub/Cloudflare secret stores.
- Coordinate before changing analytics, SEO, or header behavior in `astro.config.ts`, `src/layouts/BaseLayout.astro`, or `static/_headers` / `static/_redirects` — these affect all languages and environments.
