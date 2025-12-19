---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Look Scanned How-To dokumentasie na VitePress migreer met verbeterde sekuriteit"
summary: "Ontdek hoe Look Scanned sy dokumentasie-infrastruktuur opgegradeer het deur van Vue + Vite na VitePress te migreer, terwyl npm Trusted Publishers met OIDC geïmplementeer is vir veilige, token-vrye pakketvrystellings."
description: "Ontdek hoe Look Scanned sy dokumentasie-infrastruktuur opgegradeer het deur van Vue + Vite na VitePress te migreer, terwyl npm Trusted Publishers met OIDC geïmplementeer is vir veilige, token-vrye pakketvrystellings."
tags: ["vitepress", "dokumentasie", "sekuriteit", "cicd", "npm"]
---

By [Look Scanned](https://lookscanned.io) verbeter ons voortdurend ons infrastruktuur om beter dokumentasie en veiliger ontwikkelingspraktyke te verskaf. Vandag is ons opgewonde om besonderhede te deel oor 'n beduidende opgradering van ons How-To dokumentasiewebwerf: die migrasie van 'n pasgemaakte Vue + Vite-toepassing na VitePress, terwyl ons terselfdertyd ons CI/CD-sekuriteit met npm Trusted Publishers verbeter.

## 📚 Hoekom ons na VitePress gemigreer het

Ons How-To dokumentasiewebwerf ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) dien as die omvattende gebruiksgids vir Look Scanned. Alhoewel ons vorige Vue + Vite-opstelling goed gewerk het, het ons besef dat VitePress 'n beter keuse sou wees vir 'n inhoud-gedrewe dokumentasiewebwerf.

### Wat is VitePress?

VitePress is 'n statiese werf-generator wat spesifiek vir dokumentasie ontwerp is. Gebou bo-op Vite en Vue 3, kombineer dit die beste van beide wêrelde: weerlig-vinnige ontwikkelingservaring met kragtige dokumentasie-funksies uit die boks.

### Sleutelvoordele van die migrasie

**🎯 Beter argitektuur vir dokumentasie**
- **Lêer-gebaseerde roetevorming**: Elke markdown-lêer word outomaties 'n bladsy, wat inhoud-organisasie intuïtief maak
- **Ingeboude dokumentasie-funksies**: Inhoudsopgawe, soektog, internasionalisering, en meer kom vooraf gekonfigureer
- **Statiese werf-generasie**: Vooraf-gerenderde HTML bied uitstekende SEO en kitssig bladsy-ladings

**⚡ Verbeterde ontwikkelaarservaring**
- **Kitssig warm herlaai**: Veranderinge verskyn onmiddellik tydens ontwikkeling
- **Markdown eerste**: Fokus op inhoud, nie op komponent-steierwerk nie
- **Vue-komponent ondersteuning**: Wanneer nodig, kan ons steeds pasgemaakte Vue-komponente binne markdown gebruik

**🔧 Makliker onderhoud**
- **Duideliker struktuur**: Dokumentasie volg konvensies, wat kognitiewe las vir bydraers verminder
- **Meer stabiele bous**: VitePress se geopinieerde struktuur lei tot meer reproduseerbare bous
- **Beter samewerking**: Spanlede kan bydra tot dokumentasie sonder diep Vue-kennis

## 🔒 Verbeterde sekuriteit met npm Trusted Publishers

Saam met die VitePress-migrasie het ons 'n kritieke sekuriteitsverbetering geïmplementeer: **npm Trusted Publishers met behulp van OIDC-verifikasie**.

### Die probleem met tradisionele npm-tokens

Voorheen het die publisering van pakkette na npm vereis dat 'n langdurige `NPM_TOKEN` in repository-geheime gestoor word. Hierdie benadering het verskeie nadele:

- **Sekuriteitsrisiko**: Tokens kan per ongeluk blootgestel of gekompromitteer word
- **Bestuursoorghoof**: Tokens benodig handmatige rotasie en opdaterings
- **Oudit-uitdagings**: Moeilik om by te hou wie wat wanneer gepubliseer het

### Die oplossing: OIDC-gebaseerde betroubare publisering

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) benut OpenID Connect (OIDC) om veilige, token-vrye publisering direk vanaf GitHub Actions moontlik te maak. Hier is hoe dit werk:

1. **Geen gestoorde geheime nie**: In plaas van om tokens te stoor, versoek GitHub Actions kortdurige geloofsbriewe by npm
2. **Identiteitsverifikasie**: npm verifieer dat die publiseringsversoek van die gemagtigde GitHub-bewaarplek gekom het
3. **Outomatiese geloofsbriewe-bestuur**: Geloofsbriewe word outomaties uitgereik en verval vinnig

### Werklike wêreld voordele

Hierdie verandering bring onmiddellike verbeteringe na ons ontwikkelingswerkstroom:

- ✅ **Geen token-bestuur meer nie**: Geen behoefte om npm-tokens te skep, te stoor of te roteer nie
- ✅ **Verminderde aanvalsoppervlak**: Kortdurige geloofsbriewe minimaliseer blootstellingsrisiko
- ✅ **Beter ouditbaarheid**: Elke publiseringsaksie is gekoppel aan 'n spesifieke GitHub Actions-lopie
- ✅ **Moderne beste praktyke**: Belyn met zero-trust sekuriteitsbeginsels

**Tegniese nota**: Om npm Trusted Publishers te ondersteun, het ons ons CI-konfigurasie opgedateer om Node.js `lts/*` te gebruik, wat verseker dat ons die nuutste npm-weergawe het wat vir OIDC-verifikasie vereis word.

## 📦 Vrystellings-tydlyn

Die migrasie is voltooi deur drie vrystellings op 19 Desember 2025:

- **v2.0.0**: Kern-migrasie van Vue + Vite na VitePress (brekende verandering)
- **v2.0.1**: CI-regstelling om npm Trusted Publishers met behoorlike Node.js-weergawe te ondersteun
- **v2.0.2**: Prestasieverbetering deur `@fontsource/noto-mono` na devDependencies te skuif

## 🌍 Voortgesette meertalige ondersteuning

'n Belangrike nota: ons How-To dokumentasie genereer meertalige PDF's wat altyd as voorbeeldlêers in die hoof Look Scanned-toepassing gebruik is (beskikbaar by [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Hierdie VitePress-migrasie verander nie daardie funksionaliteit nie—dit verskaf bloot 'n beter grondslag vir die instandhouding en verbetering van ons dokumentasie-infrastruktuur.

## 💡 Wat dit vir gebruikers beteken

As jy Look Scanned se dokumentasie gebruik:

- **Dieselfde toegang, beter ervaring**: Dokumentasie bly by dieselfde URL met verbeterde laai en navigasie
- **Meer betroubaar**: Statiese werf-generasie beteken vinniger ladings en beter stabiliteit
- **Beter soek en ontdekking**: VitePress se ingeboude soektog help jou om vinniger antwoorde te vind
- **Voortgesette PDF-ondersteuning**: Meertalige PDF-generasie gaan voort soos voorheen

## 🚀 Wat kom volgende

Met die infrastruktuur-opgradering voltooi, fokus ons op inhoudsverbeteringe:

- **Uitgebreide gebruiksgevalle**: Meer praktiese voorbeelde en stap-vir-stap gidse
- **Konsekwentheidsverbeteringe**: Verfyning van meertalige terminologie vir duidelikheid
- **Verbeterde PDF-uitvoer**: Verbetering van kruis-blaaier PDF-generasie-ervaring

## Probeer Look Scanned vandag

Look Scanned bied blaaier-gebaseerde, privaatheid-eerste PDF-skandeer-effekte sonder om jou lêers êrens op te laai. Die verbeterde dokumentasie maak dit makliker as ooit om te begin.

👉 **Besoek [lookscanned.io](https://lookscanned.io) om vinnige, veilige dokument-skandering in jou blaaier te ervaar.**
