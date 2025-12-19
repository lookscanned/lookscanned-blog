---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "A Look Scanned How-To dokumentáció migrálása VitePress-re fokozott biztonsággal"
summary: "Fedezze fel, hogyan frissítette a Look Scanned a dokumentációs infrastruktúráját a Vue + Vite-ról VitePress-re való áttéréssel, miközben npm Trusted Publishers-t implementált OIDC-vel a biztonságos, token nélküli csomagkiadásokhoz."
description: "Fedezze fel, hogyan frissítette a Look Scanned a dokumentációs infrastruktúráját a Vue + Vite-ról VitePress-re való áttéréssel, miközben npm Trusted Publishers-t implementált OIDC-vel a biztonságos, token nélküli csomagkiadásokhoz."
tags: ["vitepress", "dokumentáció", "biztonság", "cicd", "npm"]
---

A [Look Scanned](https://lookscanned.io)-nál folyamatosan javítjuk infrastruktúránkat, hogy jobb dokumentációt és biztonságosabb fejlesztési gyakorlatokat biztosítsunk. Ma izgatottan osztjuk meg a részleteket a How-To dokumentációs oldalunk jelentős frissítéséről: áttérés egy egyedi Vue + Vite alkalmazásról VitePress-re, miközben egyidejűleg fokozzuk a CI/CD biztonságunkat npm Trusted Publishers segítségével.

## 📚 Miért tértünk át VitePress-re

A How-To dokumentációs oldalunk ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) átfogó használati útmutatóként szolgál a Look Scanned számára. Bár korábbi Vue + Vite beállításunk jól működött, felismertük, hogy a VitePress jobb választás lenne egy tartalomvezérelt dokumentációs oldal számára.

### Mi az a VitePress?

A VitePress egy statikus oldalgenerátor, amelyet kifejezetten dokumentációhoz terveztek. A Vite és Vue 3 tetejére építve mindkét világ legjobbját egyesíti: villámgyors fejlesztési élményt a használatra kész hatékony dokumentációs funkciókkal.

### A migráció kulcsfontosságú előnyei

**🎯 Jobb architektúra a dokumentációhoz**
- **Fájlalapú útválasztás**: Minden markdown fájl automatikusan oldallá válik, intuitívvá téve a tartalom szervezését
- **Beépített dokumentációs funkciók**: Tartalomjegyzék, keresés, nemzetköziesítés és még sok más előre konfigurálva jön
- **Statikus oldalgenerálás**: Az előre renderelt HTML kiváló SEO-t és azonnali oldalbetöltéseket biztosít

**⚡ Javított fejlesztői élmény**
- **Azonnali forró újratöltés**: A változások azonnal megjelennek fejlesztés közben
- **Markdown először**: Fókuszáljon a tartalomra, nem a komponens állványra
- **Vue komponens támogatás**: Szükség esetén továbbra is használhatunk egyedi Vue komponenseket a markdown-on belül

**🔧 Könnyebb karbantartás**
- **Világosabb struktúra**: A dokumentáció konvenciókat követ, csökkentve a közreműködők kognitív terhelését
- **Stabilabb buildek**: A VitePress véleményes struktúrája reprodukálhatóbb buildekhez vezet
- **Jobb együttműködés**: A csapattagok hozzájárulhatnak a dokumentációhoz mély Vue tudás nélkül

## 🔒 Fokozott biztonság npm Trusted Publishers-rel

A VitePress migrációval párhuzamosan implementáltunk egy kritikus biztonsági fejlesztést: **npm Trusted Publishers OIDC hitelesítéssel**.

### A probléma a hagyományos npm tokenekkel

Korábban a csomagok npm-re való közzététele hosszú élettartamú `NPM_TOKEN` tárolását igényelte a repository titkokban. Ennek a megközelítésnek számos hátránya van:

- **Biztonsági kockázat**: A tokenek véletlenül felfedhetők vagy veszélyeztethetők
- **Adminisztrációs többletmunka**: A tokenek manuális forgatást és frissítéseket igényelnek
- **Auditálási kihívások**: Nehéz nyomon követni, ki mikor mit publikált

### A megoldás: OIDC-alapú megbízható közzététel

Az [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) az OpenID Connect (OIDC) előnyeit használja a biztonságos, token nélküli közzétételhez közvetlenül a GitHub Actions-ből. Így működik:

1. **Nincsenek tárolt titkok**: A tokenek mentése helyett a GitHub Actions rövid élettartamú hitelesítő adatokat kér az npm-től
2. **Identitás ellenőrzés**: Az npm ellenőrzi, hogy a közzétételi kérés az engedélyezett GitHub repositoryból érkezett
3. **Automatikus hitelesítő adat kezelés**: A hitelesítő adatok automatikusan kerülnek kiadásra és gyorsan lejárnak

### Valós előnyök

Ez a változás azonnali fejlesztéseket hoz fejlesztési munkafolyamatunkba:

- ✅ **Nincs több token kezelés**: Nincs szükség npm tokenek létrehozására, tárolására vagy forgatására
- ✅ **Csökkentett támadási felület**: A rövid élettartamú hitelesítő adatok minimalizálják a kitettség kockázatát
- ✅ **Jobb auditálhatóság**: Minden közzétételi művelet egy adott GitHub Actions futtatáshoz van kötve
- ✅ **Modern legjobb gyakorlatok**: Összhangban van a zero-trust biztonsági elvekkel

**Technikai megjegyzés**: Az npm Trusted Publishers támogatásához frissítettük CI konfigurációnkat, hogy Node.js `lts/*`-ot használjon, biztosítva, hogy a legújabb npm verzióval rendelkezünk, amely szükséges az OIDC hitelesítéshez.

## 📦 Kiadási idővonal

A migráció három kiadáson keresztül fejeződött be 2025. december 19-én:

- **v2.0.0**: Alapvető migráció Vue + Vite-ról VitePress-re (breaking change)
- **v2.0.1**: CI javítás az npm Trusted Publishers támogatásához megfelelő Node.js verzióval
- **v2.0.2**: Teljesítményjavítás az `@fontsource/noto-mono` devDependencies-be való áthelyezésével

## 🌍 Folyamatos többnyelvű támogatás

Fontos megjegyzés: How-To dokumentációnk többnyelvű PDF-eket generál, amelyeket mindig is példafájlként használtak a fő Look Scanned alkalmazásban (elérhető a [lookscanned.io/en/scan](https://lookscanned.io/en/scan) címen). Ez a VitePress migráció nem változtatja meg ezt a funkcionalitást—egyszerűen jobb alapot biztosít dokumentációs infrastruktúránk karbantartásához és fejlesztéséhez.

## 💡 Mit jelent ez a felhasználók számára

Ha a Look Scanned dokumentációját használja:

- **Ugyanaz a hozzáférés, jobb élmény**: A dokumentáció ugyanazon az URL-en marad javított betöltéssel és navigációval
- **Megbízhatóbb**: A statikus oldalgenerálás gyorsabb betöltéseket és jobb stabilitást jelent
- **Jobb keresés és felfedezés**: A VitePress beépített keresése segít gyorsabban megtalálni a válaszokat
- **Folyamatos PDF támogatás**: A többnyelvű PDF generálás ugyanúgy folytatódik, mint korábban

## 🚀 Mi következik

Az infrastruktúra frissítésének befejezésével a tartalom fejlesztésére összpontosítunk:

- **Kibővített felhasználási esetek**: Több gyakorlati példa és lépésről-lépésre útmutatók
- **Konzisztencia fejlesztések**: A többnyelvű terminológia finomítása az egyértelműség érdekében
- **Továbbfejlesztett PDF export**: A böngészők közötti PDF generálási élmény javítása

## Próbálja ki a Look Scanned-et még ma

A Look Scanned böngészőalapú, adatvédelmet előtérbe helyező PDF szkennelési effektusokat biztosít anélkül, hogy fájljait bárhova feltöltené. A továbbfejlesztett dokumentáció megkönnyíti a kezdést, mint valaha.

👉 **Látogasson el a [lookscanned.io](https://lookscanned.io) címre, hogy megtapasztalja a gyors, biztonságos dokumentumszkennelést böngészőjében.**
