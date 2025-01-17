---
title: "Come Realizzare il Blog di Look Scanned con Hugo"
date: 2025-01-17
description: "Una guida completa alla creazione di un blog moderno utilizzando Hugo. Dall'installazione alla messa online, incluse configurazione e personalizzazione - adatta a sviluppatori di qualsiasi esperienza."
tags: ["hugo", "blog", "web", "sito-statico", "tutorial"]
---

## Che cos'è Look Scanned?

[Look Scanned](https://lookscanned.io) è un'applicazione web snella che riproduce l'effetto di documenti PDF scansionati. Realizzata ponendo particolare attenzione alla privacy, consente a sviluppatori, designer e utenti di ottenere PDF dall'aspetto scansionato senza necessità di stampanti o scanner.

## Perché abbiamo scelto Hugo?

Dopo un'attenta analisi di vari generatori di siti statici, la nostra scelta è ricaduta su Hugo per questi motivi:

1. **Prestazioni Eccezionali** - Realizzato in Go, offre una velocità di generazione sorprendente
2. **Semplicità d'Uso** - Setup immediato e apprendimento progressivo
3. **Ricchezza di Temi** - Ampia collezione di temi raffinati e personalizzabili
4. **Community Vivace** - Supporto attivo e documentazione approfondita
5. **I18n di Serie** - Gestione multilingua nativa e ben strutturata

## Procedura d'Installazione

### Installare Hugo

Su macOS (via Homebrew):

```bash
brew install hugo
```

Su Windows (via Chocolatey):

```bash
choco install hugo-extended
```

Su Linux, consulta la guida all'installazione [qui](https://gohugo.io/installation/linux/).

### Creare il Sito

Digita questi comandi per iniziare:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Installare il Tema

Aggiungi PaperMod come sottomodulo Git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Modifica il `config.toml`:

```toml
theme = "PaperMod"
```

### Gestione Multilingua

Inserisci la configurazione multilingua nel `config.toml`:

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
  # Altre lingue...
```

### Scrivere Contenuti

Crea il tuo primo post:

```bash
hugo new posts/build-blog-using-hugo/index.it.md
```

### Ambiente di Sviluppo

Avvia il server locale:

```bash
hugo server -D
```

Vai su [http://localhost:1313](http://localhost:1313) per vedere l'anteprima.

## Messa Online

Pubblica il blog facilmente tramite GitHub Actions:

1. **GitHub Pages**

   - Crea un repository su GitHub
   - Carica il tuo codice
   - Abilita GitHub Pages dalle impostazioni
   - Imposta il deploy automatico con GitHub Actions

2. **Cloudflare Pages**
   - Collega il repository GitHub
   - Usa `hugo` come comando di build
   - Imposta `public` come cartella di output

## Personalizzazioni

Abbiamo semplificato l'interfaccia rimuovendo il selettore della lingua dall'intestazione. Trovi le nostre modifiche al tema [qui](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Per Concludere

Hugo fornisce delle ottime fondamenta per il tuo blog. Grazie alla sua velocità, flessibilità e documentazione dettagliata, si adatta perfettamente a sviluppatori di ogni livello. Con il tempo, scoprirai funzionalità sempre più avanzate per creare un blog davvero su misura.

## Riferimenti

- [Documentazione Hugo](https://gohugo.io/documentation/)
- [Tema PaperMod](https://github.com/adityatelange/hugo-PaperMod)
