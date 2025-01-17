---
title: "Bikin Blog Look Scanned Pakai Hugo"
date: 2025-01-17
description: "Tutorial lengkap bikin blog kekinian dengan Hugo static site generator. Dari instalasi sampai deploy, plus konfigurasi dan kustomisasi - cocok buat developer pemula sampai pro."
tags: ["hugo", "blog", "web", "situs-statis", "tutorial"]
---

## Apa itu Look Scanned?

[Look Scanned](https://lookscanned.io) adalah web app ringan yang bikin dokumen PDF kamu terlihat seperti hasil scan. Dibuat dengan fokus ke privasi, aplikasi ini membantu developer, desainer, dan user bikin PDF yang kelihatan seperti hasil scan tanpa perlu printer atau scanner beneran.

## Kenapa Pilih Hugo?

Setelah nyoba beberapa static site generator buat blog Look Scanned, akhirnya kita pilih Hugo karena:

1. **Super Cepat** - Dibuat pakai Go, buildnya kilat
2. **Gampang** - Setup simpel, cepet dipahami
3. **Tema Banyak** - Banyak tema keren yang bisa dimodif
4. **Komunitas Oke** - Support cepet, docs lengkap
5. **Support Multi Bahasa** - Udah ada fitur i18n

## Getting Started

### Install Hugo

Di macOS (lewat Homebrew):

```bash
brew install hugo
```

Di Windows (lewat Chocolatey):

```bash
choco install hugo-extended
```

Pengguna Linux bisa cek [cara install di sini](https://gohugo.io/installation/linux/).

### Bikin Project

Jalanin command ini:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Pasang Theme

Tambahin PaperMod sebagai Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Masukin ke `config.toml`:

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

### Bikin Konten

Buat post pertama:

```bash
hugo new posts/build-blog-using-hugo/index.id.md
```

### Dev Server

Jalanin server lokal:

```bash
hugo server -D
```

Buka web di [http://localhost:1313](http://localhost:1313).

## Deploy

Auto-deploy pake GitHub Actions:

1. **Deploy ke GitHub Pages**

   - Bikin repo baru di GitHub
   - Push code
   - Nyalain GitHub Pages
   - Setting auto-deploy

2. **Deploy ke Cloudflare Pages**
   - Connect repo GitHub
   - Set `hugo` jadi build command
   - Pilih folder `public` buat output

## Kustomisasi

Buat UX yang lebih enak, kita udah hapus language switcher dari header. Cek perubahan themenya [di sini](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Kesimpulan

Hugo itu tools keren buat bikin blog pribadi. Karena cepet, fleksibel, dan docs-nya bagus, cocok buat developer level berapapun. Makin sering dipake, makin banyak trik yang bisa dipelajari buat bikin blog yang unik.

## Link Penting

- [Docs Hugo](https://gohugo.io/documentation/)
- [Theme PaperMod](https://github.com/adityatelange/hugo-PaperMod)
