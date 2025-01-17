# Look Scanned Blog

[![Build and Deploy](https://github.com/lookscanned/lookscanned-blog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/lookscanned/lookscanned-blog/actions/workflows/ci.yml)

This repository contains the source code for the Look Scanned Blog, built using Hugo and deployed to both Cloudflare Pages and GitHub Pages.

[blog.lookscanned.io](https://blog.lookscanned.io)

## Features

- Built with Hugo static site generator
- Multi-language support
- Automatic deployments to:
  - Cloudflare Pages (Primary)
  - GitHub Pages (Secondary)
- CI/CD using GitHub Actions

## Local Development

To run this site locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/lookscanned-blog
cd lookscanned-blog

# Update submodules (themes)
git submodule update --init --recursive

# Start Hugo server
hugo server -D
```

The site will be available at `http://localhost:1313`

## Deployment

The site automatically deploys to both Cloudflare Pages and GitHub Pages when changes are pushed to the main branch. Pull requests trigger preview deployments on Cloudflare Pages.

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
