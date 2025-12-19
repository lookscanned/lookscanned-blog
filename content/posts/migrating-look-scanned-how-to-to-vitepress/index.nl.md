---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Look Scanned How-To documentatie migreren naar VitePress met verbeterde beveiliging"
summary: "Ontdek hoe Look Scanned zijn documentatie-infrastructuur heeft geüpgraded door te migreren van Vue + Vite naar VitePress, terwijl npm Trusted Publishers met OIDC werd geïmplementeerd voor veilige, tokenvrije pakketreleases."
description: "Ontdek hoe Look Scanned zijn documentatie-infrastructuur heeft geüpgraded door te migreren van Vue + Vite naar VitePress, terwijl npm Trusted Publishers met OIDC werd geïmplementeerd voor veilige, tokenvrije pakketreleases."
tags: ["vitepress", "documentatie", "beveiliging", "cicd", "npm"]
---

Bij [Look Scanned](https://lookscanned.io) verbeteren we voortdurend onze infrastructuur om betere documentatie en veiligere ontwikkelingspraktijken te bieden. Vandaag zijn we verheugd om details te delen over een belangrijke upgrade van onze How-To documentatiesite: migreren van een aangepaste Vue + Vite applicatie naar VitePress, terwijl we tegelijkertijd onze CI/CD-beveiliging verbeteren met npm Trusted Publishers.

## 📚 Waarom we naar VitePress migreerden

Onze How-To documentatiesite ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) dient als uitgebreide gebruikershandleiding voor Look Scanned. Hoewel onze eerdere Vue + Vite setup goed werkte, erkenden we dat VitePress een betere keuze zou zijn voor een contentgestuurde documentatiesite.

### Wat is VitePress?

VitePress is een statische site generator speciaal ontworpen voor documentatie. Gebouwd bovenop Vite en Vue 3, combineert het het beste van beide werelden: bliksemsnelle ontwikkelervaring met krachtige documentatiefuncties out of the box.

### Belangrijkste voordelen van de migratie

**🎯 Betere architectuur voor documentatie**
- **Bestandsgebaseerde routing**: Elk markdown-bestand wordt automatisch een pagina, waardoor inhoudsorganisatie intuïtief wordt
- **Ingebouwde documentatiefuncties**: Inhoudsopgave, zoeken, internationalisatie en meer zijn vooraf geconfigureerd
- **Statische site generatie**: Vooraf gerenderde HTML biedt uitstekende SEO en directe paginalaadtijden

**⚡ Verbeterde ontwikkelaarservaring**
- **Direct hot reload**: Wijzigingen verschijnen direct tijdens ontwikkeling
- **Markdown eerst**: Focus op inhoud, niet op componentopbouw
- **Vue component ondersteuning**: Wanneer nodig kunnen we nog steeds aangepaste Vue-componenten gebruiken binnen markdown

**🔧 Eenvoudiger onderhoud**
- **Duidelijkere structuur**: Documentatie volgt conventies, waardoor de cognitieve belasting voor bijdragers wordt verminderd
- **Stabielere builds**: VitePress's meeningsvormende structuur leidt tot meer reproduceerbare builds
- **Betere samenwerking**: Teamleden kunnen bijdragen aan documentatie zonder diepgaande Vue-kennis

## 🔒 Verbeterde beveiliging met npm Trusted Publishers

Naast de VitePress-migratie implementeerden we een cruciale beveiligingsverbetering: **npm Trusted Publishers met OIDC-authenticatie**.

### Het probleem met traditionele npm-tokens

Voorheen vereiste het publiceren van pakketten naar npm het opslaan van een langdurige `NPM_TOKEN` in repository secrets. Deze aanpak heeft verschillende nadelen:

- **Beveiligingsrisico**: Tokens kunnen per ongeluk worden blootgesteld of gecompromitteerd
- **Beheersoverhead**: Tokens vereisen handmatige rotatie en updates
- **Audit-uitdagingen**: Moeilijk bij te houden wie wat wanneer heeft gepubliceerd

### De oplossing: OIDC-gebaseerde vertrouwde publicatie

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) maakt gebruik van OpenID Connect (OIDC) om veilige, tokenvrije publicatie rechtstreeks vanuit GitHub Actions mogelijk te maken. Zo werkt het:

1. **Geen opgeslagen secrets**: In plaats van tokens op te slaan, vraagt GitHub Actions kortlevende referenties aan bij npm
2. **Identiteitsverificatie**: npm verifieert dat het publicatieverzoek afkomstig is van de geautoriseerde GitHub-repository
3. **Automatisch referentiebeheer**: Referenties worden automatisch uitgegeven en verlopen snel

### Voordelen in de echte wereld

Deze wijziging brengt directe verbeteringen aan onze ontwikkelworkflow:

- ✅ **Geen tokenbeheer meer**: Geen noodzaak om npm-tokens te creëren, op te slaan of te roteren
- ✅ **Verminderd aanvalsoppervlak**: Kortlevende referenties minimaliseren het blootstellingsrisico
- ✅ **Betere controleerbaarheid**: Elke publicatieactie is gekoppeld aan een specifieke GitHub Actions-run
- ✅ **Moderne best practices**: Sluit aan bij zero-trust beveiligingsprincipes

**Technische opmerking**: Om npm Trusted Publishers te ondersteunen, hebben we onze CI-configuratie bijgewerkt om Node.js `lts/*` te gebruiken, waardoor we de nieuwste npm-versie hebben die vereist is voor OIDC-authenticatie.

## 📦 Release tijdlijn

De migratie werd voltooid via drie releases op 19 december 2025:

- **v2.0.0**: Kernmigratie van Vue + Vite naar VitePress (breaking change)
- **v2.0.1**: CI-fix ter ondersteuning van npm Trusted Publishers met de juiste Node.js-versie
- **v2.0.2**: Prestatieverbetering door `@fontsource/noto-mono` naar devDependencies te verplaatsen

## 🌍 Voortdurende meertalige ondersteuning

Een belangrijke opmerking: onze How-To documentatie genereert meertalige PDF's die altijd zijn gebruikt als voorbeeldbestanden in de hoofd Look Scanned applicatie (beschikbaar op [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Deze VitePress-migratie verandert die functionaliteit niet—het biedt simpelweg een betere basis voor het onderhouden en verbeteren van onze documentatie-infrastructuur.

## 💡 Wat dit betekent voor gebruikers

Als u de documentatie van Look Scanned gebruikt:

- **Dezelfde toegang, betere ervaring**: Documentatie blijft op dezelfde URL met verbeterd laden en navigatie
- **Betrouwbaarder**: Statische site generatie betekent snellere laadtijden en betere stabiliteit
- **Betere zoek- en ontdekkingsmogelijkheden**: VitePress's ingebouwde zoekfunctie helpt u sneller antwoorden te vinden
- **Voortdurende PDF-ondersteuning**: Meertalige PDF-generatie gaat door zoals voorheen

## 🚀 Wat komt er hierna

Met de infrastructuurupgrade voltooid, richten we ons op inhoudverbeteringen:

- **Uitgebreide use cases**: Meer praktische voorbeelden en stapsgewijze handleidingen
- **Consistentieverbeteringen**: Verfijning van meertalige terminologie voor duidelijkheid
- **Verbeterde PDF-export**: Verbetering van cross-browser PDF-generatie-ervaring

## Probeer Look Scanned vandaag

Look Scanned biedt browsergebaseerde, privacy-first PDF-scaneffecten zonder uw bestanden ergens te uploaden. De verbeterde documentatie maakt het makkelijker dan ooit om aan de slag te gaan.

👉 **Bezoek [lookscanned.io](https://lookscanned.io) om snelle, veilige documentscanning in uw browser te ervaren.**
