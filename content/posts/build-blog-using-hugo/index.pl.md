---
title: "Tworzenie bloga Look Scanned z Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Kompletny przewodnik po budowaniu nowoczesnego bloga przy użyciu generatora stron statycznych Hugo. Od instalacji po wdrożenie, wraz z konfiguracją i dostosowaniem - odpowiedni dla programistów na każdym poziomie."
summary: "Kompletny przewodnik po budowaniu nowoczesnego bloga przy użyciu generatora stron statycznych Hugo. Od instalacji po wdrożenie, wraz z konfiguracją i dostosowaniem - odpowiedni dla programistów na każdym poziomie."
tags: ["hugo", "blog", "web", "strona-statyczna", "poradnik"]
---

## Czym jest Look Scanned?

[Look Scanned](https://lookscanned.io) to lekka aplikacja webowa, która nadaje dokumentom PDF wygląd zeskanowanych. Stworzona z myślą o prywatności, pozwala programistom, projektantom i użytkownikom tworzyć PDF-y wyglądające jak zeskanowane bez potrzeby posiadania drukarki czy skanera.

## Dlaczego wybraliśmy Hugo?

Po przetestowaniu różnych generatorów stron statycznych dla bloga Look Scanned, zdecydowaliśmy się na Hugo z następujących powodów:

1. **Wydajność** - Napisany w Go, zapewnia błyskawiczną kompilację
2. **Prostota** - Łatwa konfiguracja i przyjazna krzywa uczenia
3. **Bogactwo motywów** - Duży wybór eleganckich i konfigurowalnych szablonów
4. **Aktywna społeczność** - Szybka pomoc i obszerna dokumentacja
5. **Wsparcie wielojęzyczności** - Wbudowana obsługa internacjonalizacji

## Pierwsze kroki

### Instalacja Hugo

Na macOS (przez Homebrew):

```bash
brew install hugo
```

Na Windows (przez Chocolatey):

```bash
choco install hugo-extended
```

Użytkownicy Linuxa znajdą [instrukcję instalacji tutaj](https://gohugo.io/installation/linux/).

### Tworzenie projektu

Wykonaj następujące polecenia:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Instalacja motywu

Dodaj motyw PaperMod jako submoduł Git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

W pliku `config.toml`:

```toml
theme = "PaperMod"
```

### Konfiguracja języków

Skonfiguruj obsługę języków w `config.toml`:

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
  # Inne języki...
```

### Tworzenie treści

Utwórz pierwszy wpis:

```bash
hugo new posts/build-blog-using-hugo/index.pl.md
```

### Środowisko deweloperskie

Uruchom serwer lokalny:

```bash
hugo server -D
```

Zobacz stronę pod adresem [http://localhost:1313](http://localhost:1313).

## Wdrożenie

Automatyczne wdrażanie z GitHub Actions:

1. **Wdrożenie na GitHub Pages**

   - Utwórz nowe repozytorium na GitHubie
   - Wypchnij kod
   - Włącz GitHub Pages
   - Skonfiguruj automatyczne wdrażanie

2. **Wdrożenie na Cloudflare Pages**
   - Połącz repozytorium GitHub
   - Ustaw `hugo` jako komendę budowania
   - Wybierz `public` jako katalog wyjściowy

## Dostosowanie

Aby poprawić UX, usunęliśmy przełącznik języków z nagłówka. Zmiany w motywie możesz zobaczyć [tutaj](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Podsumowanie

Hugo to świetne narzędzie do tworzenia blogów osobistych. Dzięki swojej szybkości, elastyczności i dobrej dokumentacji sprawdza się u programistów na każdym poziomie. Im więcej z nim pracujesz, tym więcej odkrywasz możliwości tworzenia unikalnego bloga.

## Przydatne linki

- [Dokumentacja Hugo](https://gohugo.io/documentation/)
- [Motyw PaperMod](https://github.com/adityatelange/hugo-PaperMod)
