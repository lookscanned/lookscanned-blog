---
title: "Buat Blog Look Scanned Guna Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Panduan lengkap buat blog moden guna Hugo sebagai static site generator. Dari install sampai deploy, termasuk config dan customize - sesuai untuk developer apa tahap pun."
tags: ["hugo", "blog", "web", "laman-statik", "tutorial"]
---

## Apa itu Look Scanned?

[Look Scanned](https://lookscanned.io) ialah web app ringan yang buat dokumen PDF nampak macam dah diimbas. App ni dibina dengan fokus pada privasi, membolehkan developer, designer, dan pengguna biasa buat PDF yang nampak macam diimbas tanpa perlu printer atau scanner sebenar.

## Kenapa Hugo?

Selepas cuba beberapa static site generator untuk blog Look Scanned, kami pilih Hugo sebab:

1. **Laju Gila** - Ditulis guna Go, build super pantas
2. **Senang Guna** - Setup simple, cepat nak belajar
3. **Tema Banyak** - Koleksi tema cantik yang boleh customize
4. **Komuniti Best** - Support laju dan docs lengkap
5. **Support Multi Bahasa** - Dah ada sistem i18n

## Jom Mula

### Install Hugo

Untuk macOS (guna Homebrew):

```bash
brew install hugo
```

Untuk Windows (guna Chocolatey):

```bash
choco install hugo-extended
```

Pengguna Linux boleh check [cara install kat sini](https://gohugo.io/installation/linux/).

### Setup Project

Run command ni:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Pasang Theme

Add PaperMod sebagai Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Tambah dalam `config.toml`:

```toml
theme = "PaperMod"
```

### Setting Bahasa

Edit `config.toml`:

```toml
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false

[params]
  displayFullLangName = true

[languages]
  [languages.en]
    languageCode = 'en'
    languageName = 'English'
    title = 'Look Scanned Blog'
  [languages.zh]
    languageName = '简体中文'
    title = 'Look Scanned 博客'
  [languages.zh-tw]
    languageCode = 'zh-TW'
    languageName = '繁體中文'
    title = 'Look Scanned 部落格'
  # Bahasa lain...
```

### Buat Content

Buat post pertama:

```bash
hugo new posts/build-blog-using-hugo/index.ms.md
```

### Dev Server

Run local server:

```bash
hugo server -D
```

Bukak web kat [http://localhost:1313](http://localhost:1313).

## Deploy

Auto-deploy guna GitHub Actions:

1. **Deploy ke GitHub Pages**

   - Buat repo baru kat GitHub
   - Push code
   - On-kan GitHub Pages
   - Setup auto-deploy

2. **Deploy ke Cloudflare Pages**
   - Connect repo GitHub
   - Set `hugo` sebagai build command
   - Pilih folder `public` untuk output

## Customize

Untuk improve UX, kita dah buang language switcher dari header. Boleh check perubahan theme [kat sini](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Kesimpulan

Hugo ni tool yang power untuk buat blog sendiri. Sebab dia laju, fleksibel, dan docs dia bagus, sesuai untuk developer semua level. Makin banyak guna, makin banyak trick yang boleh jumpa untuk buat blog yang unik.

## Link Penting

- [Docs Hugo](https://gohugo.io/documentation/)
- [Theme PaperMod](https://github.com/adityatelange/hugo-PaperMod)
