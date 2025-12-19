---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Kuhamisha nyaraka za Look Scanned How-To kwenda VitePress na usalama ulioboreshwa"
summary: "Gundua jinsi Look Scanned ilivyoboresha miundombinu yake ya nyaraka kwa kuhamisha kutoka Vue + Vite kwenda VitePress, huku ikitekeleza npm Trusted Publishers na OIDC kwa utoaji salama wa vifurushi bila tokeni."
description: "Gundua jinsi Look Scanned ilivyoboresha miundombinu yake ya nyaraka kwa kuhamisha kutoka Vue + Vite kwenda VitePress, huku ikitekeleza npm Trusted Publishers na OIDC kwa utoaji salama wa vifurushi bila tokeni."
tags: ["vitepress", "nyaraka", "usalama", "cicd", "npm"]
---

Katika [Look Scanned](https://lookscanned.io), tunaboresha miundombinu yetu mara kwa mara ili kutoa nyaraka bora na mazoea salama zaidi ya maendeleo. Leo, tunafurahi kushiriki maelezo kuhusu uboreshaji mkubwa wa tovuti yetu ya nyaraka za How-To: kuhamisha kutoka programu ya kawaida ya Vue + Vite kwenda VitePress, huku tukiimarisha usalama wetu wa CI/CD kwa npm Trusted Publishers.

## 📚 Kwa nini tulihamia VitePress

Tovuti yetu ya nyaraka za How-To ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) inatumika kama mwongozo mkamilifu wa matumizi ya Look Scanned. Ingawa usanidi wetu wa awali wa Vue + Vite ulifanya kazi vizuri, tulikubali kwamba VitePress ingekuwa chaguo bora zaidi kwa tovuti ya nyaraka inayoongozwa na maudhui.

### VitePress ni nini?

VitePress ni kizalishaji cha tovuti tuli kilichoundwa hasa kwa nyaraka. Imejengwa juu ya Vite na Vue 3, inachanganya bora zaidi kutoka kwa ulimwengu wote: uzoefu wa maendeleo wa kasi ya umeme na vipengele vyenye nguvu vya nyaraka tayari kutoka sandukuni.

### Faida kuu za uhamiaji

**🎯 Usanifu bora zaidi kwa nyaraka**
- **Utaratibu unaotegemea faili**: Kila faili la markdown linakuwa ukurasa moja kiotomatiki, kufanya mpangilio wa maudhui kuwa wa kimsingi
- **Vipengele vya nyaraka vilivyojengwa ndani**: Jedwali la yaliyomo, utafutaji, kimataifa, na zaidi vinakuja vimesanidiwa awali
- **Uzalishaji wa tovuti tuli**: HTML iliyokwisha kujengwa inatoa SEO nzuri na upakiaji wa ukurasa wa papo hapo

**⚡ Uzoefu ulioboreshwa wa wasanidi programu**
- **Upakiaji upya wa papo hapo**: Mabadiliko yanaonekana mara moja wakati wa maendeleo
- **Markdown kwanza**: Zingatia maudhui, si usanifu wa vipengele
- **Msaada wa vipengele vya Vue**: Inapohitajika, bado tunaweza kutumia vipengele vya Vue vya kawaida ndani ya markdown

**🔧 Matengenezo rahisi**
- **Muundo ulio wazi zaidi**: Nyaraka zinafuata mila, kupunguza mzigo wa utambuzi kwa wachangiaji
- **Ujenzi thabiti zaidi**: Muundo wenye maoni wa VitePress husababisha ujenzi unaoweza kurudishwa zaidi
- **Ushirikiano bora**: Wanachama wa timu wanaweza kuchangia kwenye nyaraka bila maarifa ya kina ya Vue

## 🔒 Usalama ulioboreshwa na npm Trusted Publishers

Pamoja na uhamiaji wa VitePress, tulitekeleza uboreshaji muhimu wa usalama: **npm Trusted Publishers kwa kutumia uthibitishaji wa OIDC**.

### Tatizo na tokeni za npm za jadi

Hapo awali, kuchapisha vifurushi kwa npm kulihitaji kuhifadhi `NPM_TOKEN` ya muda mrefu katika siri za hifadhi. Mbinu hii ina hasara kadhaa:

- **Hatari ya usalama**: Tokeni zinaweza kufichuliwa kwa bahati mbaya au kuharibiwa
- **Gharama za usimamizi**: Tokeni zinahitaji mzunguko na masasisho ya mikono
- **Changamoto za ukaguzi**: Ni vigumu kufuatilia ni nani alichapisha nini na lini

### Suluhisho: Uchapishaji unaaminika unaolingana na OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) inatumia OpenID Connect (OIDC) ili kuwezesha uchapishaji salama, bila tokeni moja kwa moja kutoka GitHub Actions. Hivi ndivyo inavyofanya kazi:

1. **Hakuna siri zilizohifadhiwa**: Badala ya kuhifadhi tokeni, GitHub Actions inaomba vyeti vya muda mfupi kutoka npm
2. **Uthibitishaji wa kitambulisho**: npm inathibitisha kwamba ombi la uchapishaji lilitoka kwa hifadhi ya GitHub iliyoidhinishwa
3. **Usimamizi wa vyeti otomatiki**: Vyeti vinatolewa kiotomatiki na kuisha mara kwa mara

### Faida za ulimwengu halisi

Mabadiliko haya yanaleta maboresho ya papo hapo kwa mtiririko wetu wa kazi ya maendeleo:

- ✅ **Hakuna usimamizi wa tokeni tena**: Hakuna haja ya kuunda, kuhifadhi, au kuzungusha tokeni za npm
- ✅ **Eneo lililopunguzwa la mashambulizi**: Vyeti vya muda mfupi vinapunguza hatari ya ufichuaji
- ✅ **Ukaguzi bora zaidi**: Kila kitendo cha uchapishaji kimeunganishwa na mwendo mahususi wa GitHub Actions
- ✅ **Mazoea ya kisasa bora**: Inaoana na kanuni za usalama wa imani sifuri

**Kumbuka kiufundi**: Ili kusaidia npm Trusted Publishers, tulisasisha usanidi wetu wa CI kutumia Node.js `lts/*`, ikihakikisha tuna toleo jipya la npm linalohitajika kwa uthibitishaji wa OIDC.

## 📦 Ratiba ya utoaji

Uhamiaji ulikamilika kupitia utoaji wa tatu tarehe 19 Desemba 2025:

- **v2.0.0**: Uhamiaji wa msingi kutoka Vue + Vite kwenda VitePress (mabadiliko makubwa)
- **v2.0.1**: Marekebisho ya CI kusaidia npm Trusted Publishers na toleo sahihi la Node.js
- **v2.0.2**: Uboreshaji wa utendaji kwa kuhamisha `@fontsource/noto-mono` kwenda devDependencies

## 🌍 Msaada unaoendelea wa lugha nyingi

Kumbuka muhimu: nyaraka zetu za How-To zinazalisha PDF za lugha nyingi ambazo zimekuwa zikitumika kama faili za mfano katika programu kuu ya Look Scanned (inapatikana katika [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Uhamiaji huu wa VitePress haubadilishi utendaji kazi huo—unatoa tu msingi bora wa kudumisha na kuboresha miundombinu ya nyaraka zetu.

## 💡 Hii inamaanisha nini kwa watumiaji

Ikiwa unatumia nyaraka za Look Scanned:

- **Ufikiaji sawa, uzoefu bora**: Nyaraka zinabaki kwenye URL sawa na upakiaji na urambazaji ulioboreshwa
- **Kuaminika zaidi**: Uzalishaji wa tovuti tuli unamaanisha upakiaji wa haraka na uimara bora
- **Utafutaji na ugunduzi bora**: Utafutaji uliojengwa ndani wa VitePress unakusaidia kupata majibu haraka
- **Msaada unaoendelea wa PDF**: Uzalishaji wa PDF za lugha nyingi unaendelea kama awali

## 🚀 Nini kinafuata

Baada ya kumaliza uboreshaji wa miundombinu, tunazingatia maboresho ya maudhui:

- **Matumizi yaliyopanuliwa**: Mifano zaidi ya vitendo na miongozo ya hatua kwa hatua
- **Maboresho ya uthabiti**: Kuboreka kwa istilahi za lugha nyingi kwa uwazi
- **Usafirishaji ulioboreshwa wa PDF**: Kuboresha uzoefu wa uzalishaji wa PDF kati ya vivinjari

## Jaribu Look Scanned leo

Look Scanned inatoa athari za uskani wa PDF zinazotegemea kivinjari, zinazotanguliza faragha bila kupakia faili zako popote. Nyaraka zilizoimarishwa zinafanya kuanza kuwa rahisi zaidi kuliko hapo awali.

👉 **Tembelea [lookscanned.io](https://lookscanned.io) ili kupata uzoefu wa uskani wa haraka, salama wa hati katika kivinjari chako.**
