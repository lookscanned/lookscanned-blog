# Look Scanned Blog

[![Build and Deploy](https://github.com/lookscanned/lookscanned-blog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/lookscanned/lookscanned-blog/actions/workflows/ci.yml)

This repository contains the source for the Look Scanned Blog, built with Astro 5 + Tailwind v4 and deployed to both Cloudflare Pages and GitHub Pages.

[blog.lookscanned.io](https://blog.lookscanned.io)

## Features

- 32-language multilingual content (English at `/`, others under `/<lang>/`)
- Per-locale RSS feeds and a multi-locale sitemap with hreflang alternates
- Pagefind full-text search with per-locale indexes
- Giscus comments with the right Giscus locale per language
- Dark/light theme, RTL support for `ar` / `he` / `ur`
- Automatic deployments to Cloudflare Pages (primary) and GitHub Pages (secondary)

## Local Development

```bash
git clone https://github.com/lookscanned/lookscanned-blog
cd lookscanned-blog
npm ci
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Build

```bash
npm run build       # Astro + Pagefind index
```

Output: `dist/`.

## Deployment

Pull requests deploy a preview to Cloudflare Pages staging. Pushes to `main` deploy to production on both Cloudflare Pages and GitHub Pages.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (run `npm run check` and `npm run build` before opening a PR)
4. Submit a pull request

## License

MIT. See `LICENSE`.
