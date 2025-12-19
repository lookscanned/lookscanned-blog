---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrarea documentației Look Scanned How-To la VitePress cu securitate îmbunătățită"
summary: "Descoperiți cum Look Scanned a actualizat infrastructura sa de documentație prin migrarea de la Vue + Vite la VitePress, implementând în același timp npm Trusted Publishers cu OIDC pentru lansări de pachete sigure, fără token."
description: "Descoperiți cum Look Scanned a actualizat infrastructura sa de documentație prin migrarea de la Vue + Vite la VitePress, implementând în același timp npm Trusted Publishers cu OIDC pentru lansări de pachete sigure, fără token."
tags: ["vitepress", "documentație", "securitate", "cicd", "npm"]
---

La [Look Scanned](https://lookscanned.io), îmbunătățim continuu infrastructura noastră pentru a oferi o documentație mai bună și practici de dezvoltare mai sigure. Astăzi, suntem încântați să împărtășim detalii despre o actualizare semnificativă a site-ului nostru de documentație How-To: migrarea de la o aplicație Vue + Vite personalizată la VitePress, îmbunătățind în același timp securitatea CI/CD cu npm Trusted Publishers.

## 📚 De ce am migrat la VitePress

Site-ul nostru de documentație How-To ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) servește ca ghid complet de utilizare pentru Look Scanned. Deși configurația noastră anterioară Vue + Vite funcționa bine, am recunoscut că VitePress ar fi o alegere mai bună pentru un site de documentație orientat spre conținut.

### Ce este VitePress?

VitePress este un generator de site-uri statice conceput special pentru documentație. Construit pe Vite și Vue 3, combină ce e mai bun din ambele lumi: experiență de dezvoltare ultra-rapidă cu funcționalități puternice de documentație gata de utilizare.

### Beneficii cheie ale migrării

**🎯 Arhitectură mai bună pentru documentație**
- **Rutare bazată pe fișiere**: Fiecare fișier markdown devine automat o pagină, făcând organizarea conținutului intuitivă
- **Funcționalități de documentație incorporate**: Cuprins, căutare, internaționalizare și multe altele vin preconfigurat
- **Generare de site static**: HTML pre-randat oferă SEO excelent și încărcări instantanee ale paginii

**⚡ Experiență de dezvoltator îmbunătățită**
- **Reîncărcare la cald instantanee**: Modificările apar imediat în timpul dezvoltării
- **Markdown pe primul loc**: Concentrați-vă pe conținut, nu pe scheletul componentelor
- **Suport pentru componente Vue**: Când este necesar, putem folosi în continuare componente Vue personalizate în markdown

**🔧 Întreținere mai ușoară**
- **Structură mai clară**: Documentația urmează convenții, reducând sarcina cognitivă pentru colaboratori
- **Build-uri mai stabile**: Structura cu opinii a VitePress duce la build-uri mai reproductibile
- **Colaborare mai bună**: Membrii echipei pot contribui la documentație fără cunoștințe profunde de Vue

## 🔒 Securitate îmbunătățită cu npm Trusted Publishers

Alături de migrarea VitePress, am implementat o îmbunătățire critică a securității: **npm Trusted Publishers folosind autentificare OIDC**.

### Problema cu token-urile npm tradiționale

Anterior, publicarea pachetelor pe npm necesita stocarea unui `NPM_TOKEN` de lungă durată în secretele repository-ului. Această abordare are mai multe dezavantaje:

- **Risc de securitate**: Token-urile pot fi expuse accidental sau compromise
- **Overhead de gestionare**: Token-urile necesită rotație și actualizări manuale
- **Provocări de audit**: Dificil de urmărit cine a publicat ce și când

### Soluția: Publicare de încredere bazată pe OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) valorifică OpenID Connect (OIDC) pentru a permite publicarea sigură, fără token, direct din GitHub Actions. Iată cum funcționează:

1. **Niciun secret stocat**: În loc să salveze token-uri, GitHub Actions solicită credențiale de scurtă durată de la npm
2. **Verificare de identitate**: npm verifică că cererea de publicare a venit din repository-ul GitHub autorizat
3. **Gestionare automată a credențialelor**: Credențialele sunt emise automat și expiră rapid

### Beneficii în lumea reală

Această schimbare aduce îmbunătățiri imediate fluxului nostru de lucru de dezvoltare:

- ✅ **Nu mai este nevoie de gestionarea token-urilor**: Nu este nevoie să creați, să stocați sau să rotați token-uri npm
- ✅ **Suprafață de atac redusă**: Credențialele de scurtă durată minimizează riscul de expunere
- ✅ **Auditabilitate mai bună**: Fiecare acțiune de publicare este legată de o execuție specifică GitHub Actions
- ✅ **Practici moderne optime**: Se aliniază cu principiile de securitate zero-trust

**Notă tehnică**: Pentru a suporta npm Trusted Publishers, am actualizat configurația CI să folosească Node.js `lts/*`, asigurându-ne că avem cea mai recentă versiune npm necesară pentru autentificarea OIDC.

## 📦 Cronologie de lansare

Migrarea a fost completată prin trei lansări pe 19 decembrie 2025:

- **v2.0.0**: Migrare de bază de la Vue + Vite la VitePress (schimbare breaking)
- **v2.0.1**: Remediere CI pentru a suporta npm Trusted Publishers cu versiunea adecvată de Node.js
- **v2.0.2**: Îmbunătățire a performanței prin mutarea `@fontsource/noto-mono` în devDependencies

## 🌍 Suport multilingv continuu

O notă importantă: documentația noastră How-To generează PDF-uri multilingve care au fost întotdeauna utilizate ca fișiere exemplu în aplicația principală Look Scanned (disponibile la [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Această migrare VitePress nu schimbă acea funcționalitate—oferă pur și simplu o bază mai bună pentru întreținerea și îmbunătățirea infrastructurii noastre de documentație.

## 💡 Ce înseamnă acest lucru pentru utilizatori

Dacă utilizați documentația Look Scanned:

- **Același acces, experiență mai bună**: Documentația rămâne la același URL cu încărcare și navigare îmbunătățite
- **Mai fiabil**: Generarea de site static înseamnă încărcări mai rapide și stabilitate mai bună
- **Căutare și descoperire mai bună**: Căutarea integrată VitePress vă ajută să găsiți răspunsuri mai rapid
- **Suport continuu pentru PDF**: Generarea de PDF-uri multilingve continuă ca înainte

## 🚀 Ce urmează

Cu actualizarea infrastructurii finalizată, ne concentrăm pe îmbunătățiri de conținut:

- **Cazuri de utilizare extinse**: Mai multe exemple practice și ghiduri pas cu pas
- **Îmbunătățiri de consistență**: Rafinarea terminologiei multilingve pentru claritate
- **Export PDF îmbunătățit**: Îmbunătățirea experienței de generare PDF cross-browser

## Încercați Look Scanned astăzi

Look Scanned oferă efecte de scanare PDF bazate pe browser, cu prioritate pentru confidențialitate, fără a vă încărca fișierele nicăieri. Documentația îmbunătățită face ca începerea să fie mai ușoară ca niciodată.

👉 **Vizitați [lookscanned.io](https://lookscanned.io) pentru a experimenta scanarea rapidă și sigură a documentelor în browserul dvs.**
