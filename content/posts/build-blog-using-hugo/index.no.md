---
title: "Sett opp en Look Scanned-blogg med Hugo"
date: 2025-01-17
description: "Full guide til å lage en moderne blogg med Hugo. Fra oppsett til deployment, inkludert konfig og tilpasninger - perfekt for utviklere uansett nivå."
---

## Hva er Look Scanned?

[Look Scanned](https://lookscanned.io) er en lett webapp som får PDF-er til å se ut som skannede dokumenter. Den er laget med personvern i fokus og lar utviklere, designere og andre lage PDF-er som ser skannede ut - uten behov for printer eller skanner.

## Hvorfor valgte vi Hugo?

Etter å ha prøvd flere static site generators til Look Scanned-bloggen, landet vi på Hugo fordi:

1. **Superrask** - Bygget i Go, kompilerer lynfort
2. **Enkel** - Kjapt oppsett og flat læringskurve
3. **Rik på temaer** - Massevis av fine themes å velge mellom
4. **Aktivt community** - Rask support og bra docs
5. **Språkstøtte** - Innebygget i18n

## Kom i gang

### Sett opp Hugo

På macOS (via Homebrew):

```bash
brew install hugo
```

På Windows (via Chocolatey):

```bash
choco install hugo-extended
```

Linux? Sjekk [installasjonsguiden her](https://gohugo.io/installation/linux/).

### Start prosjektet

Kjør disse kommandoene:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Installer theme

Legg til PaperMod som Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Legg til i `config.toml`:

```toml
theme = "PaperMod"
```

### Språkoppsett

Endre `config.toml`:

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
  # Flere språk...
```

### Lag innhold

Opprett første post:

```bash
hugo new posts/build-blog-using-hugo/index.no.md
```

### Dev-server

Start lokal utviklingsserver:

```bash
hugo server -D
```

Åpne [http://localhost:1313](http://localhost:1313) i nettleseren.

## Deploy

Automatisk deployment med GitHub Actions:

1. **Deploy til GitHub Pages**

   - Opprett nytt repo på GitHub
   - Push koden
   - Slå på GitHub Pages
   - Sett opp auto-deploy

2. **Deploy til Cloudflare Pages**
   - Koble til GitHub-repoet
   - Sett `hugo` som build command
   - Velg `public`-mappa som output

## Tilpasninger

For bedre brukeropplevelse har vi fjernet språkbytteren fra headeren. Se endringene i themet [her](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Oppsummering

Hugo er et knallbra verktøy for å lage personlige blogger. Den er rask, fleksibel og godt dokumentert - perfekt for utviklere på alle nivåer. Jo mer du bruker den, jo flere kule triks finner du for å gjøre bloggen din unik.

## Nyttige lenker

- [Hugo docs](https://gohugo.io/documentation/)
- [PaperMod theme](https://github.com/adityatelange/hugo-PaperMod)
