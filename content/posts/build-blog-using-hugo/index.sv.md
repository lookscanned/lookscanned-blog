---
title: "Bygg en Look Scanned-blogg med Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "En komplett guide för att bygga en modern blogg med Hugo som statisk sidgenerator. Vi går igenom allt från installation till driftsättning, med konfiguration och anpassningar - perfekt för både nybörjare och erfarna utvecklare."
tags: ["hugo", "blogg", "webb", "statisk-webbplats", "guide"]
---

## Om Look Scanned

[Look Scanned](https://lookscanned.io) är en smidig webbapp som ger dina PDF:er ett skannat utseende. Med fokus på integritet låter appen utvecklare, designers och andra användare skapa PDF:er som ser skannade ut - helt utan fysisk skrivare eller skanner.

## Därför valde vi Hugo

Efter att ha testat flera olika statiska sidgeneratorer för Look Scanned-bloggen föll valet på Hugo av dessa anledningar:

1. **Snabbhet** - Skriven i Go, vilket ger blixtsnabb byggtid
2. **Enkelhet** - Lätt att komma igång med och behaglig inlärningskurva
3. **Många teman** - Gott om snygga teman som går att anpassa
4. **Stark community** - Snabb hjälp och gedigen dokumentation
5. **Flerspråksstöd** - Inbyggt stöd för internationalisering

## Komma igång

### Installera Hugo

För macOS (via Homebrew):

```bash
brew install hugo
```

För Windows (via Chocolatey):

```bash
choco install hugo-extended
```

Linux-användare hittar [installationsguiden här](https://gohugo.io/installation/linux/).

### Sätt upp projektet

Kör följande kommandon:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Installera tema

Lägg till PaperMod som Git-submodul:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Lägg till i `config.toml`:

```toml
theme = "PaperMod"
```

### Språkhantering

Ställ in språkstöd i `config.toml`:

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
  # Fler språk...
```

### Skapa innehåll

Skapa ditt första blogginlägg:

```bash
hugo new posts/build-blog-using-hugo/index.sv.md
```

### Utvecklingsmiljö

Starta lokal server:

```bash
hugo server -D
```

Titta på sidan på [http://localhost:1313](http://localhost:1313).

## Driftsättning

Automatisk driftsättning med GitHub Actions:

1. **Publicera på GitHub Pages**

   - Skapa ett GitHub-repo
   - Pusha koden
   - Slå på GitHub Pages
   - Fixa automatisk driftsättning

2. **Publicera på Cloudflare Pages**
   - Koppla GitHub-repot
   - Ange `hugo` som byggkommando
   - Välj `public` som utmapp

## Anpassning

För bättre användarupplevelse har vi tagit bort språkväljaren från sidhuvudet. Kolla in ändringarna i temat [här](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Slutord

Hugo är ett superbra verktyg för personliga bloggar. Med sin snabbhet, flexibilitet och bra dokumentation passar den utvecklare oavsett erfarenhetsnivå. Ju mer du jobbar med Hugo, desto fler möjligheter hittar du för att skapa din egen unika blogg.

## Resurser

- [Hugo-dokumentation](https://gohugo.io/documentation/)
- [PaperMod-temat](https://github.com/adityatelange/hugo-PaperMod)
