---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrace dokumentace Look Scanned How-To na VitePress s vylepšeným zabezpečením"
summary: "Objevte, jak Look Scanned upgradoval svou infrastrukturu dokumentace migrací z Vue + Vite na VitePress, zatímco implementoval npm Trusted Publishers s OIDC pro bezpečná vydání balíčků bez tokenů."
description: "Objevte, jak Look Scanned upgradoval svou infrastrukturu dokumentace migrací z Vue + Vite na VitePress, zatímco implementoval npm Trusted Publishers s OIDC pro bezpečná vydání balíčků bez tokenů."
tags: ["vitepress", "dokumentace", "zabezpečení", "cicd", "npm"]
---

V [Look Scanned](https://lookscanned.io) neustále vylepšujeme naši infrastrukturu, abychom poskytovali lepší dokumentaci a bezpečnější vývojové postupy. Dnes jsme rádi, že můžeme sdílet podrobnosti o významném upgradu našich stránek dokumentace How-To: migraci z vlastní aplikace Vue + Vite na VitePress, zatímco zároveň vylepšujeme naše zabezpečení CI/CD pomocí npm Trusted Publishers.

## 📚 Proč jsme migrovali na VitePress

Naše stránky dokumentace How-To ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) slouží jako komplexní průvodce použitím pro Look Scanned. Přestože naše předchozí nastavení Vue + Vite fungovalo dobře, uznali jsme, že VitePress by byl lepší volbou pro webové stránky dokumentace zaměřené na obsah.

### Co je VitePress?

VitePress je generátor statických webů speciálně navržený pro dokumentaci. Postavený na Vite a Vue 3, kombinuje to nejlepší z obou světů: bleskově rychlou vývojovou zkušenost s výkonnými funkcemi dokumentace ihned po instalaci.

### Klíčové výhody migrace

**🎯 Lepší architektura pro dokumentaci**
- **Směrování založené na souborech**: Každý soubor markdown se automaticky stane stránkou, což činí organizaci obsahu intuitivní
- **Vestavěné funkce dokumentace**: Obsah, vyhledávání, internacionalizace a další jsou předkonfigurovány
- **Generování statického webu**: Předrenderované HTML poskytuje vynikající SEO a okamžité načítání stránek

**⚡ Vylepšená zkušenost vývojáře**
- **Okamžité hot reload**: Změny se objevují okamžitě během vývoje
- **Markdown na prvním místě**: Zaměřte se na obsah, ne na lešení komponent
- **Podpora komponent Vue**: Když je potřeba, stále můžeme používat vlastní komponenty Vue v markdown

**🔧 Jednodušší údržba**
- **Jasnější struktura**: Dokumentace následuje konvence, což snižuje kognitivní zátěž přispěvatelů
- **Stabilnější buildy**: Názorová struktura VitePress vede k reprodukovatelnějším buildům
- **Lepší spolupráce**: Členové týmu mohou přispívat k dokumentaci bez hlubokých znalostí Vue

## 🔒 Vylepšené zabezpečení s npm Trusted Publishers

Společně s migrací VitePress jsme implementovali kritické vylepšení zabezpečení: **npm Trusted Publishers pomocí ověřování OIDC**.

### Problém s tradičními npm tokeny

Dříve publikování balíčků do npm vyžadovalo ukládání dlouhodobého `NPM_TOKEN` v tajemstvích repozitáře. Tento přístup má několik nevýhod:

- **Bezpečnostní riziko**: Tokeny mohou být náhodně odhaleny nebo kompromitovány
- **Režijní náklady na správu**: Tokeny vyžadují manuální rotaci a aktualizace
- **Výzvy auditu**: Obtížné sledovat, kdo publikoval co a kdy

### Řešení: Důvěryhodné publikování založené na OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) využívá OpenID Connect (OIDC) k umožnění bezpečného publikování bez tokenů přímo z GitHub Actions. Zde je, jak to funguje:

1. **Žádná uložená tajemství**: Místo ukládání tokenů GitHub Actions požaduje krátkodobé přihlašovací údaje z npm
2. **Ověření identity**: npm ověřuje, že požadavek na publikování přišel z autorizovaného GitHub repozitáře
3. **Automatická správa přihlašovacích údajů**: Přihlašovací údaje jsou automaticky vydávány a rychle vypršují

### Výhody v reálném světě

Tato změna přináší okamžitá vylepšení našeho vývojového pracovního postupu:

- ✅ **Žádná další správa tokenů**: Není potřeba vytvářet, ukládat nebo rotovat npm tokeny
- ✅ **Snížený útočný povrch**: Krátkodobé přihlašovací údaje minimalizují riziko odhalení
- ✅ **Lepší auditovatelnost**: Každá akce publikování je spojena s konkrétním spuštěním GitHub Actions
- ✅ **Moderní osvědčené postupy**: Sladí se s principy zabezpečení nulové důvěry

**Technická poznámka**: Pro podporu npm Trusted Publishers jsme aktualizovali naši konfiguraci CI tak, aby používala Node.js `lts/*`, což zajišťuje, že máme nejnovější verzi npm potřebnou pro ověřování OIDC.

## 📦 Časová osa vydání

Migrace byla dokončena prostřednictvím tří vydání 19. prosince 2025:

- **v2.0.0**: Základní migrace z Vue + Vite na VitePress (zásadní změna)
- **v2.0.1**: Oprava CI pro podporu npm Trusted Publishers s vhodnou verzí Node.js
- **v2.0.2**: Vylepšení výkonu přesunutím `@fontsource/noto-mono` do devDependencies

## 🌍 Pokračující vícejazyčná podpora

Důležitá poznámka: naše dokumentace How-To generuje vícejazyčné PDF, které byly vždy používány jako ukázkové soubory v hlavní aplikaci Look Scanned (k dispozici na [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Tato migrace VitePress tuto funkcionalitu nemění—pouze poskytuje lepší základ pro údržbu a vylepšování naší infrastruktury dokumentace.

## 💡 Co to znamená pro uživatele

Pokud používáte dokumentaci Look Scanned:

- **Stejný přístup, lepší zkušenost**: Dokumentace zůstává na stejné URL s vylepšeným načítáním a navigací
- **Spolehlivější**: Generování statického webu znamená rychlejší načítání a lepší stabilitu
- **Lepší vyhledávání a objevování**: Vestavěné vyhledávání VitePress vám pomůže najít odpovědi rychleji
- **Pokračující podpora PDF**: Generování vícejazyčných PDF pokračuje jako dříve

## 🚀 Co dál

S dokončeným upgradem infrastruktury se zaměřujeme na vylepšení obsahu:

- **Rozšířené případy použití**: Více praktických příkladů a průvodců krok za krokem
- **Vylepšení konzistence**: Vylepšování vícejazyčné terminologie pro jasnost
- **Vylepšený export PDF**: Zlepšování zkušenosti s generováním PDF napříč prohlížeči

## Vyzkoušejte Look Scanned ještě dnes

Look Scanned poskytuje efekty skenování PDF založené na prohlížeči, s ohledem na soukromí, aniž byste museli své soubory nahrávat kamkoliv. Vylepšená dokumentace usnadňuje začátek více než kdy dříve.

👉 **Navštivte [lookscanned.io](https://lookscanned.io) a zažijte rychlé, bezpečné skenování dokumentů ve vašem prohlížeči.**
