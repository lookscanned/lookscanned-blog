---
title: "Construirea blogului Look Scanned cu Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Ghid comprehensiv pentru construirea unui blog modern folosind generatorul de site-uri statice Hugo, acoperind instalarea, configurarea, implementarea și sfaturi de personalizare pentru dezvoltatori începători și experimentați."
summary: "Ghid comprehensiv pentru construirea unui blog modern folosind generatorul de site-uri statice Hugo, acoperind instalarea, configurarea, implementarea și sfaturi de personalizare pentru dezvoltatori începători și experimentați."
tags: ["hugo", "blog", "web", "site-static", "tutorial"]
---

## Ce este Look Scanned?

[Look Scanned](https://lookscanned.io) este o aplicație ușoară, bazată pe browser, care simulează efecte de PDF scanat. Este proiectată cu gândul la confidențialitate, permițând dezvoltatorilor, designerilor și oricui să adauge efecte autentice de scanare la PDF-uri fără necesitatea hardware-ului fizic.

## De ce Hugo?

După evaluarea mai multor generatoare de site-uri statice pentru blogul Look Scanned, am ales Hugo din aceste motive convingătoare:

1. **Fulgerător** - Construit cu Go, Hugo oferă viteze de build incredibile
2. **Prietenos cu dezvoltatorii** - Configurare simplă cu o curbă de învățare intuitivă
3. **Ecosistem bogat de teme** - Colecție extinsă de teme frumoase, personalizabile
4. **Comunitate vibrantă** - Suport activ al comunității și documentație comprehensivă
5. **I18n de primă clasă** - Suport pentru internaționalizare încorporat

## Ghid de configurare pas cu pas

### Instalarea Hugo

Pentru utilizatorii macOS (prin Homebrew):

```bash
brew install hugo
```

Pentru utilizatorii Windows (prin Chocolatey):

```bash
choco install hugo-extended
```

Pentru utilizatorii Linux, verificați ghidul de instalare [aici](https://gohugo.io/installation/linux/).

### Crearea unui site nou

Configurați site-ul Hugo cu aceste comenzi:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Adăugarea unei teme

Instalați tema PaperMod ca submodul git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Actualizați `config.toml`:

```toml
theme = "PaperMod"
```

### Configurarea internaționalizării

Adăugați suport multilingv la `config.toml`:

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
  # Limbi suplimentare...
```

### Crearea conținutului

Creați prima postare de blog:

```bash
hugo new posts/build-blog-using-hugo/index.ro.md
```

### Rularea serverului de dezvoltare

Porniți serverul local de dezvoltare:

```bash
hugo server -D
```

Vizitați [http://localhost:1313](http://localhost:1313) pentru a previzualiza site-ul.

## Opțiuni de implementare

Implementați site-ul Hugo fără efort folosind GitHub Actions:

1. **GitHub Pages**

   - Creați un repository GitHub
   - Încărcați site-ul Hugo
   - Activați GitHub Pages în setările repository-ului
   - Configurați GitHub Actions pentru implementare automată

2. **Cloudflare Pages**
   - Conectați repository-ul GitHub
   - Setați comanda de build la `hugo`
   - Configurați directorul de publicare ca `public`

## Personalizarea temei

Am simplificat interfața utilizatorului prin eliminarea comutatorului de limbă din headerul site-ului. Puteți găsi fișierele noastre modificate ale temei [aici](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Concluzie

Hugo oferă o fundație excepțională pentru construirea unui blog personal. Combinația sa de viteză, flexibilitate și documentație comprehensivă îl face o alegere excelentă pentru dezvoltatori la orice nivel de competență. Pe măsură ce vă familiarizați mai mult cu Hugo, veți descoperi funcții puternice pentru a crea o experiență de blogging cu adevărat unică.

## Resurse

- [Documentația Hugo](https://gohugo.io/documentation/)
- [Tema Hugo PaperMod](https://github.com/adityatelange/hugo-PaperMod)