+++
date = '2025-01-17T21:11:58+08:00'
draft = false
title = 'Elegante Sprachauswahl für Hugo PaperMod mit Dropdown-Menü'
summary = 'Eine Anleitung zur Implementierung einer eleganten Sprachauswahl im Hugo PaperMod Theme mittels Dropdown-Menü. Durch ein intuitives Icon und übersichtliches Design wird die Navigationsleiste mehrsprachiger Websites optimal strukturiert'
description = 'Eine Anleitung zur Implementierung einer eleganten Sprachauswahl im Hugo PaperMod Theme mittels Dropdown-Menü. Durch ein intuitives Icon und übersichtliches Design wird die Navigationsleiste mehrsprachiger Websites optimal strukturiert'
tags = ['hugo', 'papermod', 'anleitung', 'mehrsprachigkeit', 'html', 'i18n', 'css', 'webentwicklung']
+++

## Warum eine verbesserte Sprachauswahl?

Das Hugo PaperMod Theme bietet standardmäßig eine Sprachauswahl an, die alle verfügbaren Sprachen nebeneinander in der Kopfzeile darstellt. Bei Websites mit wenigen Sprachen funktioniert dieser Ansatz gut, aber für Projekte wie Look Scanned mit über 20 unterstützten Sprachen wird die Kopfzeile dadurch schnell unübersichtlich. Als Lösung haben wir eine elegantere Variante mit Dropdown-Menü entwickelt.

![Standardmäßige Sprachauswahl im PaperMod Theme](./old-language-select.webp)

## Umsetzung

### Ausgangspunkt: Das Original-Layout

Die Sprachauswahl ist im PaperMod Theme in der Datei `themes/PaperMod/layouts/partials/header.html` implementiert. Für unsere Anpassung erstellen wir eine neue Version unter `layouts/partials/header.html`. Der ursprüngliche Code sieht wie folgt aus:

```html
{{- $lang := .Lang}} {{- $separator := or $label_text (not
site.Params.disableThemeToggle)}} {{- with site.Home.Translations }}
<ul class="lang-switch">
  {{- if $separator }}
  <li>|</li>
  {{ end }} {{- range . -}} {{- if ne $lang .Lang }}
  <li>
    <a
      href="{{- .Permalink -}}"
      title="{{ .Language.Params.languageAltTitle | default (.Language.LanguageName | emojify) | default (.Lang | title) }}"
      aria-label="{{ .Language.LanguageName | default (.Lang | title) }}"
    >
      {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
      {{- .Language.LanguageName | emojify -}} {{- else }} {{- .Lang | title -}}
      {{- end -}}
    </a>
  </li>
  {{- end -}} {{- end}}
</ul>
{{- end }}
```

### Implementierung des Dropdown-Menüs

Für die neue Version verwenden wir ein Sprach-Icon aus der ionicons5-Bibliothek. Dieses dient als Schaltfläche und zeigt beim Darüberfahren mit der Maus alle verfügbaren Sprachen in einem Dropdown-Menü an:

```html
{{- $lang := .Lang }}
{{- $separator := or $label_text (not site.Params.disableThemeToggle)}}
{{- with site.Home.Translations }}
{{- if $separator }}<span class="nav-separator">|</span>{{ end }}
<div class="lang-select-dropdown">
    <!-- Sprachauswahl-Schaltfläche -->
    <button class="lang-select-dropdown-trigger" aria-label="{{- i18n "translations" | default "Translations" }}" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="18"><path d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z" fill="currentColor"></path><path d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z" fill="currentColor"></path></svg>
    </button>
    <!-- Sprachauswahl-Menü -->
    <div class="lang-select-dropdown-content">
        {{- range . -}}
        {{- if ne $lang .Lang }}
        <a lang="{{ .Lang }}" href="{{- .Permalink -}}" title="{{ .Language.Params.languageAltTitle | default (.Language.LanguageName | emojify) | default (.Lang | title) }}"
            aria-label="{{ .Language.LanguageName | default (.Lang | title) }}">
            {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
            {{- .Language.LanguageName | emojify -}}
            {{- else }}
            {{- .Lang | title -}}
            {{- end -}}
        </a>
        {{- end -}}
        {{- end}}
    </div>
</div>
{{- end }}
```

### Gestaltung mit CSS

Für eine ansprechende Darstellung und flüssige Animation des Dropdown-Menüs verwenden wir folgende CSS-Definitionen:

```css
.lang-select-dropdown {
  position: relative;
  display: inline-block;
}

.lang-select-dropdown-content {
  top: 50px;
  display: none;
  position: absolute;
  background-color: var(--entry);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: calc(min(20em, 100vh - 100px));
  overflow-y: auto;
  overflow-x: hidden;
}

.lang-select-dropdown-content a {
  font-size: 14px;
  font-weight: inherit;
  line-height: 1;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  transition: background-color 0.1s ease-in-out;
}

.lang-select-dropdown-content a:hover {
  background-color: #f1f1f1;
}

.lang-select-dropdown:hover .lang-select-dropdown-content {
  display: block;
}

.lang-select-dropdown-trigger {
  height: 100%;
  font-size: 26px;
  margin: auto 4px;
}

.nav-separator {
  margin: auto 4px;
}
```

So sieht das Endergebnis aus. Beim Darüberfahren mit der Maus über das Sprach-Icon öffnet sich ein übersichtliches Dropdown-Menü:

![Neue Sprachauswahl mit Dropdown-Menü](./custom-language-select.webp)

Den vollständigen Quellcode finden Sie in diesem [GitHub-Repository](https://github.com/lookscanned/lookscanned-blog/commit/a47f5c2be887ab3ae198d1967f328d3683504ff0).

## Weiterführende Dokumentation

- [PaperMod Theme - Offizielle Dokumentation](https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/#bundling-custom-css-with-themes-assets)
