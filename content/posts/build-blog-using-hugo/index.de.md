---
title: "Erstellen eines Look Scanned Blogs mit Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Eine umfassende Anleitung zum Erstellen eines modernen Blogs mit dem Hugo Static Site Generator - von Installation über Konfiguration bis hin zu Deployment und Anpassung, geeignet für Einsteiger und erfahrene Entwickler."
tags: ["hugo", "blog", "web", "static-site", "anleitung"]
---

## Was ist Look Scanned?

[Look Scanned](https://lookscanned.io) ist eine schlanke, browserbasierte Anwendung zur Simulation von PDF-Scan-Effekten. Die Anwendung wurde mit besonderem Fokus auf Datenschutz entwickelt und ermöglicht es Entwicklern, Designern und anderen Nutzern, authentische Scan-Effekte zu PDFs hinzuzufügen – ganz ohne Scanner oder Drucker.

## Warum Hugo?

Nach sorgfältiger Prüfung verschiedener Static Site Generators für den Look Scanned Blog haben wir uns aus folgenden Gründen für Hugo entschieden:

1. **Blitzschnell** - Dank der Go-Implementierung bietet Hugo beeindruckende Build-Geschwindigkeiten
2. **Entwicklerfreundlich** - Unkomplizierte Konfiguration mit flacher Lernkurve
3. **Vielfältige Themes** - Große Auswahl an ansprechenden, anpassbaren Themes
4. **Aktive Community** - Hilfreiche Community und ausführliche Dokumentation
5. **Erstklassiges I18n** - Hervorragende Unterstützung für Mehrsprachigkeit

## Schritt-für-Schritt Anleitung

### Hugo installieren

Für macOS-Nutzer (über Homebrew):

```bash
brew install hugo
```

Für Windows-Nutzer (über Chocolatey):

```bash
choco install hugo-extended
```

Für Linux-Nutzer finden Sie die Installationsanleitung [hier](https://gohugo.io/installation/linux/).

### Neue Website erstellen

Erstellen Sie Ihre Hugo-Website mit diesen Befehlen:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Theme einrichten

Installieren Sie das PaperMod-Theme als Git-Submodul:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Passen Sie Ihre `config.toml` an:

```toml
theme = "PaperMod"
```

### Mehrsprachigkeit konfigurieren

Fügen Sie die Sprachunterstützung in Ihrer `config.toml` hinzu:

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
  # Weitere Sprachen...
```

### Inhalte erstellen

Erstellen Sie Ihren ersten Blogbeitrag:

```bash
hugo new posts/build-blog-using-hugo/index.de.md
```

### Entwicklungsserver starten

Starten Sie den lokalen Entwicklungsserver:

```bash
hugo server -D
```

Öffnen Sie [http://localhost:1313](http://localhost:1313) im Browser, um Ihre Website zu prüfen.

## Deployment-Optionen

Veröffentlichen Sie Ihren Hugo-Blog einfach mit GitHub Actions:

1. **GitHub Pages**

   - GitHub-Repository anlegen
   - Hugo-Website hochladen
   - GitHub Pages in den Repository-Einstellungen aktivieren
   - GitHub Actions für automatisches Deployment einrichten

2. **Cloudflare Pages**
   - GitHub-Repository verknüpfen
   - Build-Befehl auf `hugo` setzen
   - Veröffentlichungsverzeichnis auf `public` festlegen

## Theme-Anpassungen

Zur Optimierung der Benutzeroberfläche haben wir den Sprachumschalter aus der Kopfzeile entfernt. Die angepassten Theme-Dateien finden Sie [hier](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Fazit

Hugo bietet eine ausgezeichnete Grundlage für einen persönlichen Blog. Die Kombination aus Geschwindigkeit, Flexibilität und umfassender Dokumentation macht es zur idealen Wahl für Entwickler aller Erfahrungsstufen. Mit zunehmender Hugo-Erfahrung werden Sie weitere leistungsstarke Funktionen entdecken, um Ihren Blog einzigartig zu gestalten.

## Ressourcen

- [Hugo Dokumentation](https://gohugo.io/documentation/)
- [Hugo PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)
