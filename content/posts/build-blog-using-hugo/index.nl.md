---
title: "Look Scanned Blog Opzetten met Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Uitgebreide handleiding voor het opzetten van een moderne blog met Hugo, de statische sitegenerator. Van installatie tot deployment, inclusief configuratie en customization - voor developers van elk niveau."
tags: ["hugo", "blog", "web", "statische-site", "handleiding"]
---

## Over Look Scanned

[Look Scanned](https://lookscanned.io) is een lichte webapplicatie waarmee je PDF-documenten een gescande look kunt geven. De app is ontwikkeld met privacy voorop en stelt developers, designers en gebruikers in staat om PDF's te maken die er gescand uitzien, zonder dat ze een echte printer of scanner nodig hebben.

## Waarom Kozen We voor Hugo?

Na verschillende statische sitegenerators te hebben vergeleken voor de Look Scanned blog, kozen we voor Hugo vanwege:

1. **Snelheid** - Gebouwd in Go, wat zorgt voor razendsnel builden
2. **Gebruiksvriendelijkheid** - Simpele setup met een prettige leercurve
3. **Themakeuze** - Grote verzameling mooie en aanpasbare thema's
4. **Levendige Community** - Direct hulp en goede docs
5. **i18n Support** - Ingebouwde ondersteuning voor meerdere talen

## Getting Started

### Hugo Installeren

Op macOS (met Homebrew):

```bash
brew install hugo
```

Op Windows (met Chocolatey):

```bash
choco install hugo-extended
```

Linux-gebruikers kunnen [hier](https://gohugo.io/installation/linux/) de installatie-instructies vinden.

### Project Opzetten

Run deze commands:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Thema Toevoegen

Voeg PaperMod toe als Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

In `config.toml`:

```toml
theme = "PaperMod"
```

### Taalinstellingen

Configureer de talen in `config.toml`:

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
  # Extra talen...
```

### Content Toevoegen

Maak je eerste post:

```bash
hugo new posts/build-blog-using-hugo/index.nl.md
```

### Development Server

Start de lokale dev server:

```bash
hugo server -D
```

Check je site op [http://localhost:1313](http://localhost:1313).

## Deployment

Automatisch deployen met GitHub Actions:

1. **Deployen naar GitHub Pages**

   - Maak een nieuwe GitHub repo aan
   - Push je code
   - Zet GitHub Pages aan
   - Stel automatische deployment in

2. **Deployen naar Cloudflare Pages**
   - Link je GitHub repo
   - Zet `hugo` als build command
   - Kies `public` als output directory

## Customization

Voor een betere UX hebben we de language switcher uit de header gehaald. De thema-aanpassingen vind je [hier](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Conclusie

Hugo is een top tool voor het maken van een persoonlijke blog. Door de snelheid, flexibiliteit en goede documentatie is het geschikt voor developers van elk niveau. Hoe meer je ermee werkt, hoe meer mogelijkheden je ontdekt om je eigen unieke blog te bouwen.

## Links

- [Hugo Docs](https://gohugo.io/documentation/)
- [PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)
