---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrazione della documentazione Look Scanned How-To a VitePress con sicurezza migliorata"
summary: "Scopri come Look Scanned ha aggiornato la sua infrastruttura di documentazione migrando da Vue + Vite a VitePress, implementando al contempo npm Trusted Publishers con OIDC per rilasci di pacchetti sicuri senza token."
description: "Scopri come Look Scanned ha aggiornato la sua infrastruttura di documentazione migrando da Vue + Vite a VitePress, implementando al contempo npm Trusted Publishers con OIDC per rilasci di pacchetti sicuri senza token."
tags: ["vitepress", "documentazione", "sicurezza", "cicd", "npm"]
---

In [Look Scanned](https://lookscanned.io), miglioriamo costantemente la nostra infrastruttura per fornire una documentazione migliore e pratiche di sviluppo più sicure. Oggi siamo entusiasti di condividere i dettagli su un aggiornamento significativo del nostro sito di documentazione How-To: la migrazione da un'applicazione Vue + Vite personalizzata a VitePress, migliorando contemporaneamente la sicurezza CI/CD con npm Trusted Publishers.

## 📚 Perché siamo migrati a VitePress

Il nostro sito di documentazione How-To ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) funge da guida completa all'uso di Look Scanned. Sebbene la nostra precedente configurazione Vue + Vite funzionasse bene, abbiamo riconosciuto che VitePress sarebbe stata una scelta migliore per un sito di documentazione orientato ai contenuti.

### Cos'è VitePress?

VitePress è un generatore di siti statici progettato specificamente per la documentazione. Costruito su Vite e Vue 3, combina il meglio di entrambi i mondi: esperienza di sviluppo velocissima con potenti funzionalità di documentazione pronte all'uso.

### Principali vantaggi della migrazione

**🎯 Architettura migliore per la documentazione**
- **Routing basato su file**: Ogni file markdown diventa automaticamente una pagina, rendendo l'organizzazione dei contenuti intuitiva
- **Funzionalità di documentazione integrate**: Indice, ricerca, internazionalizzazione e altro sono preconfigurati
- **Generazione di siti statici**: HTML pre-renderizzato fornisce eccellente SEO e caricamenti di pagina istantanei

**⚡ Esperienza sviluppatore migliorata**
- **Ricaricamento a caldo istantaneo**: Le modifiche appaiono immediatamente durante lo sviluppo
- **Markdown prima di tutto**: Concentrati sul contenuto, non sull'impalcatura dei componenti
- **Supporto componenti Vue**: Quando necessario, possiamo ancora utilizzare componenti Vue personalizzati all'interno del markdown

**🔧 Manutenzione più semplice**
- **Struttura più chiara**: La documentazione segue le convenzioni, riducendo il carico cognitivo per i contributori
- **Build più stabili**: La struttura opinionata di VitePress porta a build più riproducibili
- **Migliore collaborazione**: I membri del team possono contribuire alla documentazione senza una conoscenza approfondita di Vue

## 🔒 Sicurezza migliorata con npm Trusted Publishers

Oltre alla migrazione di VitePress, abbiamo implementato un miglioramento critico della sicurezza: **npm Trusted Publishers utilizzando l'autenticazione OIDC**.

### Il problema con i token npm tradizionali

In precedenza, la pubblicazione di pacchetti su npm richiedeva la memorizzazione di un `NPM_TOKEN` di lunga durata nei segreti del repository. Questo approccio presenta diversi svantaggi:

- **Rischio per la sicurezza**: I token possono essere esposti accidentalmente o compromessi
- **Overhead di gestione**: I token richiedono rotazione e aggiornamenti manuali
- **Sfide di audit**: Difficile tracciare chi ha pubblicato cosa e quando

### La soluzione: Pubblicazione affidabile basata su OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) sfrutta OpenID Connect (OIDC) per abilitare la pubblicazione sicura senza token direttamente da GitHub Actions. Ecco come funziona:

1. **Nessun segreto memorizzato**: Invece di salvare token, GitHub Actions richiede credenziali a breve termine da npm
2. **Verifica dell'identità**: npm verifica che la richiesta di pubblicazione provenisse dal repository GitHub autorizzato
3. **Gestione automatica delle credenziali**: Le credenziali vengono emesse automaticamente e scadono rapidamente

### Vantaggi nel mondo reale

Questo cambiamento porta miglioramenti immediati al nostro flusso di lavoro di sviluppo:

- ✅ **Niente più gestione dei token**: Non è necessario creare, memorizzare o ruotare token npm
- ✅ **Superficie di attacco ridotta**: Le credenziali a breve termine riducono al minimo il rischio di esposizione
- ✅ **Migliore verificabilità**: Ogni azione di pubblicazione è legata a un'esecuzione specifica di GitHub Actions
- ✅ **Best practice moderne**: Si allinea con i principi di sicurezza zero-trust

**Nota tecnica**: Per supportare npm Trusted Publishers, abbiamo aggiornato la nostra configurazione CI per utilizzare Node.js `lts/*`, assicurandoci di avere l'ultima versione npm richiesta per l'autenticazione OIDC.

## 📦 Timeline dei rilasci

La migrazione è stata completata attraverso tre rilasci il 19 dicembre 2025:

- **v2.0.0**: Migrazione principale da Vue + Vite a VitePress (breaking change)
- **v2.0.1**: Correzione CI per supportare npm Trusted Publishers con la versione appropriata di Node.js
- **v2.0.2**: Miglioramento delle prestazioni spostando `@fontsource/noto-mono` in devDependencies

## 🌍 Supporto multilingue continuo

Una nota importante: la nostra documentazione How-To genera PDF multilingue che sono sempre stati utilizzati come file di esempio nell'applicazione principale Look Scanned (disponibile su [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Questa migrazione a VitePress non modifica tale funzionalità: fornisce semplicemente una base migliore per mantenere e migliorare la nostra infrastruttura di documentazione.

## 💡 Cosa significa per gli utenti

Se utilizzi la documentazione di Look Scanned:

- **Stesso accesso, esperienza migliore**: La documentazione rimane allo stesso URL con caricamento e navigazione migliorati
- **Più affidabile**: La generazione di siti statici significa caricamenti più veloci e migliore stabilità
- **Ricerca e scoperta migliori**: La ricerca integrata di VitePress ti aiuta a trovare risposte più velocemente
- **Supporto PDF continuo**: La generazione di PDF multilingue continua come prima

## 🚀 Cosa c'è dopo

Con l'aggiornamento dell'infrastruttura completato, ci stiamo concentrando sui miglioramenti dei contenuti:

- **Casi d'uso ampliati**: Più esempi pratici e guide passo-passo
- **Miglioramenti della coerenza**: Affinamento della terminologia multilingue per maggiore chiarezza
- **Esportazione PDF migliorata**: Miglioramento dell'esperienza di generazione PDF cross-browser

## Prova Look Scanned oggi

Look Scanned fornisce effetti di scansione PDF basati su browser e incentrati sulla privacy senza caricare i tuoi file da nessuna parte. La documentazione migliorata rende più facile che mai iniziare.

👉 **Visita [lookscanned.io](https://lookscanned.io) per sperimentare la scansione rapida e sicura dei documenti nel tuo browser.**
