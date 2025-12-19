---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Paglipat ng Look Scanned How-To na dokumentasyon sa VitePress na may pinahusay na seguridad"
summary: "Tuklasin kung paano nag-upgrade ang Look Scanned ng kanyang infrastructure ng dokumentasyon sa pamamagitan ng paglipat mula sa Vue + Vite patungo sa VitePress, habang nagsasakatuparan ng npm Trusted Publishers gamit ang OIDC para sa ligtas na, walang token na paglalabas ng mga pakete."
description: "Tuklasin kung paano nag-upgrade ang Look Scanned ng kanyang infrastructure ng dokumentasyon sa pamamagitan ng paglipat mula sa Vue + Vite patungo sa VitePress, habang nagsasakatuparan ng npm Trusted Publishers gamit ang OIDC para sa ligtas na, walang token na paglalabas ng mga pakete."
tags: ["vitepress", "dokumentasyon", "seguridad", "cicd", "npm"]
---

Sa [Look Scanned](https://lookscanned.io), patuloy naming pinipinabuti ang aming infrastructure upang magbigay ng mas mahusay na dokumentasyon at mas ligtas na mga kasanayan sa pagbuo. Ngayon, nasasabik kaming ibahagi ang mga detalye tungkol sa isang makabuluhang pag-upgrade sa aming How-To documentation site: paglipat mula sa isang custom Vue + Vite application patungo sa VitePress, habang sabay na pinipinabuti ang aming CI/CD security gamit ang npm Trusted Publishers.

## 📚 Bakit kami lumipat sa VitePress

Ang aming How-To documentation site ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) ay nagsisilbing komprehensibong gabay sa paggamit para sa Look Scanned. Bagaman ang aming nakaraang Vue + Vite setup ay gumana nang maayos, nakilala namin na ang VitePress ay magiging mas mahusay na pagpili para sa isang content-driven documentation site.

### Ano ang VitePress?

Ang VitePress ay isang static site generator na partikular na dinisenyo para sa dokumentasyon. Binuo sa ibabaw ng Vite at Vue 3, pinagsasama nito ang pinakamahusay sa parehong mundo: napakabilis na karanasan sa pagbuo na may makapangyarihang mga feature ng dokumentasyon na handa na sa simula.

### Mga Pangunahing Benepisyo ng Paglipat

**🎯 Mas Mahusay na Arkitektura para sa Dokumentasyon**
- **File-based routing**: Bawat markdown file ay awtomatikong nagiging isang pahina, ginagawang intuitive ang organisasyon ng nilalaman
- **Built-in na mga feature ng dokumentasyon**: Table of contents, paghahanap, internationalization, at higit pa ay naka-pre-configure na
- **Static site generation**: Ang pre-rendered HTML ay nagbibigay ng mahusay na SEO at instant page loads

**⚡ Pinabuting Karanasan ng Developer**
- **Instant hot reload**: Ang mga pagbabago ay lumilitaw kaagad habang nagde-develop
- **Markdown muna**: Mag-focus sa nilalaman, hindi sa component scaffolding
- **Suporta sa Vue component**: Kapag kinakailangan, maaari pa rin tayong gumamit ng custom Vue components sa loob ng markdown

**🔧 Mas Madaling Maintenance**
- **Mas malinaw na istruktura**: Ang dokumentasyon ay sumusunod sa mga konbensyon, binabawasan ang cognitive load para sa mga kontributor
- **Mas matatag na mga build**: Ang opinionated structure ng VitePress ay humahantong sa mas reproducible na mga build
- **Mas mahusay na kolaborasyon**: Ang mga miyembro ng koponan ay maaaring mag-ambag sa dokumentasyon nang walang malalim na kaalaman sa Vue

## 🔒 Pinahusay na Seguridad gamit ang npm Trusted Publishers

Kasama ng VitePress migration, nagpatupad kami ng isang kritikal na pagpapabuti sa seguridad: **npm Trusted Publishers gamit ang OIDC authentication**.

### Ang Problema sa Tradisyonal na npm Tokens

Dati, ang paglalathala ng mga pakete sa npm ay nangangailangan ng pag-store ng long-lived `NPM_TOKEN` sa mga sekreto ng repository. Ang approach na ito ay may ilang disadvantages:

- **Security risk**: Ang mga token ay maaaring aksidenteng mailantad o makompromiso
- **Management overhead**: Ang mga token ay nangangailangan ng manual rotation at mga update
- **Audit challenges**: Mahirap subaybayan kung sino ang naglathala ng ano at kailan

### Ang Solusyon: OIDC-based Trusted Publishing

Ang [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) ay gumagamit ng OpenID Connect (OIDC) upang paganahin ang secure, token-free publishing direkta mula sa GitHub Actions. Narito kung paano ito gumagana:

1. **Walang naka-store na mga sekreto**: Sa halip na mag-save ng tokens, ang GitHub Actions ay humihiling ng short-lived credentials mula sa npm
2. **Identity verification**: Sinusuri ng npm na ang publishing request ay nanggaling sa authorized GitHub repository
3. **Automatic credential management**: Ang mga credentials ay awtomatikong inilalabas at mabilis na nag-expire

### Mga Benepisyo sa Tunay na Mundo

Ang pagbabagong ito ay nagdudulot ng agarang mga pagpapabuti sa aming development workflow:

- ✅ **Wala nang token management**: Hindi na kailangang lumikha, mag-store, o mag-rotate ng npm tokens
- ✅ **Nabawasan ang attack surface**: Ang short-lived credentials ay nagpapaliit ng panganib ng exposure
- ✅ **Mas mahusay na auditability**: Bawat publishing action ay konektado sa isang partikular na GitHub Actions run
- ✅ **Modernong best practices**: Nakaayon sa zero-trust security principles

**Technical note**: Upang suportahan ang npm Trusted Publishers, in-update namin ang aming CI configuration na gumamit ng Node.js `lts/*`, tinitiyak na mayroon kaming pinakabagong npm version na kinakailangan para sa OIDC authentication.

## 📦 Release Timeline

Ang migration ay nakumpleto sa pamamagitan ng tatlong releases noong Disyembre 19, 2025:

- **v2.0.0**: Core migration mula sa Vue + Vite patungo sa VitePress (breaking change)
- **v2.0.1**: CI fix upang suportahan ang npm Trusted Publishers na may tamang Node.js version
- **v2.0.2**: Performance improvement sa pamamagitan ng paglipat ng `@fontsource/noto-mono` sa devDependencies

## 🌍 Patuloy na Multilingual Support

Isang mahalagang tala: ang aming How-To documentation ay bumubuo ng multilingual PDFs na palaging ginagamit bilang mga halimbawa ng file sa pangunahing Look Scanned application (available sa [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Ang VitePress migration na ito ay hindi binabago ang functionality na iyon—ito ay nagbibigay lamang ng mas mahusay na pundasyon para sa pagpapanatili at pagpapabuti ng aming infrastructure ng dokumentasyon.

## 💡 Ano ang Ibig Sabihin Nito para sa mga User

Kung gumagamit ka ng dokumentasyon ng Look Scanned:

- **Parehong access, mas mahusay na karanasan**: Ang dokumentasyon ay nananatili sa parehong URL na may pinahusay na pag-load at navigation
- **Mas maaasahan**: Ang static site generation ay nangangahulugang mas mabilis na pag-load at mas mahusay na stability
- **Mas mahusay na paghahanap at pagtuklas**: Ang built-in search ng VitePress ay tumutulong sa iyong makahanap ng mga sagot nang mas mabilis
- **Patuloy na PDF support**: Ang multilingual PDF generation ay nagpapatuloy tulad ng dati

## 🚀 Ano ang Susunod

Sa nakumpleto ang infrastructure upgrade, nakatuon kami sa mga pagpapabuti sa nilalaman:

- **Pinalawak na mga use case**: Higit pang mga praktikal na halimbawa at step-by-step guides
- **Mga pagpapabuti sa consistency**: Pagpipino ng multilingual terminology para sa kalinawan
- **Pinahusay na PDF export**: Pagpapabuti ng cross-browser PDF generation experience

## Subukan ang Look Scanned Ngayon

Ang Look Scanned ay nagbibigay ng browser-based, privacy-first PDF scanning effects nang hindi ina-upload ang iyong mga file kahit saan. Ang pinahusay na dokumentasyon ay ginagawang mas madali kaysa dati ang pagsisimula.

👉 **Bisitahin ang [lookscanned.io](https://lookscanned.io) upang makaranas ng mabilis, ligtas na document scanning sa iyong browser.**
