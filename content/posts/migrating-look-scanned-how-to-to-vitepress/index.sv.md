---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrera Look Scanned How-To-dokumentation till VitePress med förbättrad säkerhet"
summary: "Upptäck hur Look Scanned uppgraderade sin dokumentationsinfrastruktur genom att migrera från Vue + Vite till VitePress, samtidigt som npm Trusted Publishers implementerades med OIDC för säkra, tokenfria paketreleaser."
description: "Upptäck hur Look Scanned uppgraderade sin dokumentationsinfrastruktur genom att migrera från Vue + Vite till VitePress, samtidigt som npm Trusted Publishers implementerades med OIDC för säkra, tokenfria paketreleaser."
tags: ["vitepress", "dokumentation", "säkerhet", "cicd", "npm"]
---

På [Look Scanned](https://lookscanned.io) förbättrar vi ständigt vår infrastruktur för att tillhandahålla bättre dokumentation och säkrare utvecklingsmetoder. Idag är vi glada att dela detaljer om en betydande uppgradering av vår How-To-dokumentationswebbplats: migrering från en anpassad Vue + Vite-applikation till VitePress, samtidigt som vi förbättrar vår CI/CD-säkerhet med npm Trusted Publishers.

## 📚 Varför vi migrerade till VitePress

Vår How-To-dokumentationswebbplats ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) fungerar som den omfattande användarguiden för Look Scanned. Även om vår tidigare Vue + Vite-installation fungerade bra, insåg vi att VitePress skulle vara ett bättre val för en innehållsdriven dokumentationswebbplats.

### Vad är VitePress?

VitePress är en statisk webbplatsgenerator särskilt utformad för dokumentation. Byggd ovanpå Vite och Vue 3, kombinerar den det bästa av båda världarna: blixtsnabb utvecklingsupplevelse med kraftfulla dokumentationsfunktioner direkt ur lådan.

### Viktiga fördelar med migreringen

**🎯 Bättre arkitektur för dokumentation**
- **Filbaserad routing**: Varje markdown-fil blir automatiskt en sida, vilket gör innehållsorganisation intuitiv
- **Inbyggda dokumentationsfunktioner**: Innehållsförteckning, sökning, internationalisering och mer kommer förkonfigurerade
- **Statisk webbplatsgenerering**: Förrenderad HTML ger utmärkt SEO och omedelbara sidladdningar

**⚡ Förbättrad utvecklarupplevelse**
- **Omedelbar varm omladdning**: Ändringar visas omedelbart under utveckling
- **Markdown först**: Fokusera på innehåll, inte komponentbyggnadsställning
- **Vue-komponentstöd**: Vid behov kan vi fortfarande använda anpassade Vue-komponenter inom markdown

**🔧 Enklare underhåll**
- **Tydligare struktur**: Dokumentation följer konventioner, vilket minskar kognitiv belastning för bidragsgivare
- **Mer stabila byggen**: VitePress åsiktade struktur leder till mer reproducerbara byggen
- **Bättre samarbete**: Teammedlemmar kan bidra till dokumentation utan djup Vue-kunskap

## 🔒 Förbättrad säkerhet med npm Trusted Publishers

Tillsammans med VitePress-migreringen implementerade vi en kritisk säkerhetsförbättring: **npm Trusted Publishers med OIDC-autentisering**.

### Problemet med traditionella npm-tokens

Tidigare krävde publicering av paket till npm att man lagrade en långlivad `NPM_TOKEN` i förrådshemligheter. Detta tillvägagångssätt har flera nackdelar:

- **Säkerhetsrisk**: Tokens kan av misstag exponeras eller komprometteras
- **Hanteringskostnader**: Tokens kräver manuell rotation och uppdateringar
- **Granskningsutmaningar**: Svårt att spåra vem som publicerade vad och när

### Lösningen: OIDC-baserad betrodd publicering

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) utnyttjar OpenID Connect (OIDC) för att möjliggöra säker, tokenfri publicering direkt från GitHub Actions. Så här fungerar det:

1. **Inga lagrade hemligheter**: Istället för att spara tokens begär GitHub Actions kortlivade uppgifter från npm
2. **Identitetsverifiering**: npm verifierar att publiceringsbegäran kom från det auktoriserade GitHub-förrådshuset
3. **Automatisk autentiseringshantering**: Autentiseringsuppgifter utfärdas automatiskt och löper ut snabbt

### Verkliga fördelar

Denna förändring ger omedelbara förbättringar till vårt utvecklingsarbetsflöde:

- ✅ **Ingen tokenhantering längre**: Inget behov av att skapa, lagra eller rotera npm-tokens
- ✅ **Minskad attackyta**: Kortlivade autentiseringsuppgifter minimerar exponeringsrisken
- ✅ **Bättre granskningsbarhet**: Varje publiceringsåtgärd är kopplad till en specifik GitHub Actions-körning
- ✅ **Moderna bästa praxis**: Anpassar sig till zero-trust säkerhetsprinciper

**Teknisk anmärkning**: För att stödja npm Trusted Publishers uppdaterade vi vår CI-konfiguration för att använda Node.js `lts/*`, vilket säkerställer att vi har den senaste npm-versionen som krävs för OIDC-autentisering.

## 📦 Släpptidslinje

Migreringen slutfördes genom tre versioner den 19 december 2025:

- **v2.0.0**: Kärnmigrering från Vue + Vite till VitePress (brytande förändring)
- **v2.0.1**: CI-fix för att stödja npm Trusted Publishers med lämplig Node.js-version
- **v2.0.2**: Prestandaförbättring genom att flytta `@fontsource/noto-mono` till devDependencies

## 🌍 Fortsatt flerspråkigt stöd

En viktig anmärkning: vår How-To-dokumentation genererar flerspråkiga PDF:er som alltid har använts som exempelfiler i huvudapplikationen Look Scanned (tillgänglig på [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Denna VitePress-migrering ändrar inte den funktionaliteten—den ger helt enkelt en bättre grund för att underhålla och förbättra vår dokumentationsinfrastruktur.

## 💡 Vad detta betyder för användare

Om du använder Look Scanneds dokumentation:

- **Samma åtkomst, bättre upplevelse**: Dokumentationen finns kvar på samma URL med förbättrad laddning och navigering
- **Mer tillförlitlig**: Statisk webbplatsgenerering innebär snabbare laddningar och bättre stabilitet
- **Bättre sökning och upptäckt**: VitePress inbyggda sökning hjälper dig hitta svar snabbare
- **Fortsatt PDF-stöd**: Flerspråkig PDF-generering fortsätter som tidigare

## 🚀 Vad kommer härnäst

Med infrastrukturuppgraderingen klar fokuserar vi på innehållsförbättringar:

- **Utökade användningsfall**: Fler praktiska exempel och steg-för-steg-guider
- **Konsekvensförbättringar**: Förfining av flerspråkig terminologi för tydlighet
- **Förbättrad PDF-export**: Förbättring av webbläsaröverskridande PDF-genereringsupplevelse

## Prova Look Scanned idag

Look Scanned tillhandahåller webbläsarbaserade, integritetsinriktade PDF-skanningseffekter utan att ladda upp dina filer någonstans. Den förbättrade dokumentationen gör det enklare än någonsin att komma igång.

👉 **Besök [lookscanned.io](https://lookscanned.io) för att uppleva snabb, säker dokumentskanning i din webbläsare.**
