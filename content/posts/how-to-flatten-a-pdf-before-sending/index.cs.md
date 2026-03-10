---
date: "2026-03-10T15:30:00+08:00"
draft: false
title: "Jak před odesláním zploštit PDF"
summary: "Podívejte se, co flatten PDF skutečně dělá, kdy stačí a v jakých případech je lepší poslat PDF se scan-style vzhledem."
description: "Podívejte se, co flatten PDF skutečně dělá, kdy stačí a v jakých případech je lepší poslat PDF se scan-style vzhledem."
tags: ["pdf", "flatten pdf", "workflow dokumentů", "odeslání", "formuláře"]
keywords:
  - "jak zploštit pdf"
  - "flatten pdf před odesláním"
  - "flatten pdf vs naskenované pdf"
  - "odstranit pole formuláře z pdf před odesláním"
  - "flatten pdf pro email"
---

Viděl jsem stejný problém znovu a znovu u smluv, faktur, formulářů i schvalovacích dokumentů.

Soubor *vypadá* finálně. Jenže druhá strana ho otevře a pořád může klikat do polí, označovat text, posouvat anotace nebo číst komentáře, které už dávno neměly být součástí odeslané verze.

V tu chvíli si lidé často řeknou: "Neměl bych to raději rovnou převést na naskenované PDF?"

Někdy je to správný krok. Jenže v mnoha situacích je to víc, než je potřeba. Pokud je vaším skutečným cílem jen to, aby PDF působilo jako finální a ne jako živý pracovní soubor, flatten bývá čistší řešení.

## Krátká odpověď

Flatten PDF obvykle spojí formulářová pole, podpisy, komentáře a anotace přímo se stránkou, takže se soubor přestane chovat jako živý pracovní dokument. V mnoha případech zůstane zachovaná textová vrstva, takže v PDF lze dál vyhledávat.

Pokud potřebujete jen pevnou finální kopii před odesláním, flatten bývá často úplně dostačující.

Pokud příjemce výslovně chce sken nebo chcete, aby finální soubor vypadal jako skutečný scan, vytvořte scan-style verzi až ve chvíli, kdy je dokument opravdu hotový. Jestli právě mezi těmito možnostmi vybíráte, nejdřív se hodí článek [Naskenované PDF nebo upravitelné PDF: co poslat?](../scanned-pdf-vs-editable-pdf/).

## Co flatten PDF skutečně dělá

Výrazy "upravitelné PDF", "flatten PDF" a "naskenované PDF" se často používají, jako by znamenaly totéž. Neznamenají.

Upravitelné PDF je běžný digitální dokument. Může obsahovat živá formulářová pole, vrstvy komentářů, markup, podpisy a prohledávatelný text.

Flatten PDF je naopak PDF, ve kterém jsou některé nebo všechny tyto živé prvky "zapečené" do stránky. Podle použitého nástroje může flatten ovlivnit:

- formulářová pole
- podpisy
- komentáře
- anotace
- razítka

Co flatten obvykle **neznamená**:

- skutečnou redakci citlivých údajů
- šifrování nebo řízení přístupu
- vzhled naskenovaného dokumentu
- záruku, že už dokument nikdo nikdy neupraví

Přesný výsledek závisí na nástroji. Některé aplikace flattenují jen formulářová pole a komentáře nechají být. Jiné zapečou i anotace. Proto je lepší brát slovo "flattened" jako výsledek, který je potřeba ověřit, ne jako kouzelnou formulku.

## Kdy je flatten správný krok

Pokud je vaším skutečným cílem "finální, ale ne živý", bývá před odesláním PDF flatten nejlepší volbou.

Typické situace:

- Vyplnili jste formulář a nechcete, aby příjemce dál klikal do prázdných nebo upravitelných polí.
- Podepsali jste PDF a chcete odeslat čistou finální kopii místo pokračování podpisového workflow.
- Chcete, aby se komentáře a markup přestaly chovat jako pohyblivé objekty.
- Potřebujete zafixovat layout, ale nechcete celý soubor převádět na těžké obrázky.
- Pořád chcete, aby dokument po odeslání zůstal prohledávatelný.

Spousta lidí zbytečně rasterizuje PDF, i když by flatten vyřešil skutečný problém s mnohem menším třením.

## Kdy flatten nestačí

Flatten řeší konkrétní problém v dokumentovém workflow. Neřeší všechno.

Flatten **nestačí**, pokud:

- potřebujete skutečnou redakci citlivých údajů
- potřebujete reálné bezpečnostní řízení
- chcete, aby finální soubor vypadal jako papírový scan
- chcete snížit snadné kopírování tím, že stránky převedete na obrázky

Na tom rozdílu záleží.

Jestli je potřeba z dokumentu odstranit citlivé informace, řešte to přímo. Flatten není náhrada za redakci. Pokud je to součást vašeho workflow, podívejte se i na [Černé pruhy nejsou redakce](../black-bars-arent-redaction-pdf-redaction-checklist/).

Pokud cílová strana skutečně čeká finální soubor se scan vzhledem, flatten je jen část cesty. V takovém případě nejdřív dokončete dokument a až pak vytvořte scan-style verzi. Přesně tam navazuje [Jak udělat, aby PDF vypadalo jako naskenované](../make-pdf-look-scanned/).

## Jak před odesláním zploštit PDF

Nejbezpečnější způsob, jak zploštit PDF, nezačíná samotným flatten. Začíná tím, že ochráníte pracovní kopii.

### 1. Ponechte si upravitelný master

Než začnete flattenovat, uložte si původní soubor.

Zní to samozřejmě, ale právě tady vzniká spousta zbytečných problémů. Po odeslání pevné kopie ještě můžete potřebovat živou verzi - na opravy, vytahování textu nebo pozdější úpravu překlepu.

Pomáhají jednoduché názvy souborů:

- `agreement-v3-working.pdf`
- `agreement-final-flat.pdf`
- `agreement-final-scanned.pdf`

### 2. Nejprve dokument dokončete

Ujistěte se, že je soubor opravdu připraven k odeslání.

To znamená:

- vyplnit potřebná pole
- odstranit komentáře, které nechcete sdílet
- dokončit podpisy
- potvrdit pořadí stránek
- zkontrolovat data, jména a částky

Příliš brzký flatten obvykle znamená druhé kolo zbytečné práce.

### 3. Použijte PDF nástroj, který umí flatten polí nebo anotací

Různé aplikace to označují různě. Hledejte možnosti jako:

- Flatten
- Flatten form fields
- Flatten annotations
- Print or export as a new PDF

U poslední možnosti je potřeba trochu opatrnosti. V některých aplikacích tisk do PDF vytvoří pevnou kopii, která se chová skoro jako flattened PDF. V jiných ne. Nepředpokládejte automaticky, že "Print to PDF" a "Flatten PDF" jsou totéž.

Pokud dokument obsahuje jak formulářová pole, tak komentáře, ověřte si, jestli váš nástroj umí oboje. Některé flattenují jen jednu kategorii.

### 4. Exportujte pevnou kopii

Uložte flattened PDF jako samostatný soubor. Nepřepisujte zdroj, pokud si nejste opravdu jistí, že živou verzi už nikdy nebudete potřebovat.

Právě tuto kopii se chystáte odeslat.

### 5. Otevřete exportovaný soubor znovu a otestujte ho

Právě tady se profesionálové vyhnou trapným e-mailům navíc.

Otevřete flattened PDF znovu a otestujte ho tak, jako byste byli příjemce:

- Lze ještě klikat do polí formuláře?
- Jsou pořád vidět komentáře nebo poznámky?
- Vypadá podpis správně?
- Dá se v textu vyhledávat?
- Otevře se soubor správně i v jiném prohlížeči?

Tuhle kontrolu nepřeskakujte jen proto, že nástroj oznámil úspěšný export.

## Co zkontrolovat před odesláním souboru

Ne každý výsledek flatten je stejně použitelný. Krátká kontrola zachytí většinu problémů.

Tohle je checklist, který bych skutečně použil:

- PDF se už nechová jako živý formulář, pokud to nebylo záměrem.
- Komentáře, poznámky a markup zmizely nebo jsou zapečené přesně tak, jak jste čekali.
- Text zůstává prohledávatelný, pokud na tom příjemci záleží.
- Velikost souboru je pořád rozumná pro e-mail nebo upload do portálu.
- Vizuální layout se po exportu neposunul.
- Z názvu souboru je jasné, která kopie je určena k odeslání.

Pokud soubor pořád působí jako draft, nejspíš jste neflattenovali správné prvky.

## Flattened PDF vs naskenované PDF

Právě tohle srovnání bývá nejčastějším kamenem úrazu:

| Typ | Nejlépe se hodí pro | Prohledávatelný text | Živá pole/komentáře | Vizuální dojem |
| --- | --- | --- | --- | --- |
| Editable PDF | Revizi, spolupráci, extrakci dat | Obvykle ano | Obvykle ano | Digitální pracovní soubor |
| Flattened PDF | Finální, ale pořád praktické odeslání | Často ano | Obvykle ne | Zafixovaný digitální soubor |
| Scanned PDF | Finální vizuální artefakt nebo scan-style odeslání | Někdy ano, pokud je OCR | Ne | Připomíná obrázek nebo scan |

Jestli je váš jediný problém to, že PDF pořád působí "živě", udělejte flatten.

Jestli ale opravdu potřebujete, aby to vypadalo jako scan kopie, flatten sám o sobě stačit nebude. Přesně tady dává smysl [Look Scanned](https://lookscanned.io): až po dokončení obsahu, ne uprostřed procesu.

## Jednoduché workflow, které obvykle způsobí méně problémů

Pokud chcete variantu s co nejmenším třením, držel bych se tohoto postupu:

1. Ponechte zdrojový soubor upravitelný.
2. Exportujte běžné digitální PDF pro revizi nebo schválení.
3. Flatten PDF ve chvíli, kdy cílem je pevná finální kopie.
4. Scan-style verzi vytvářejte jen tehdy, když z ní cílové použití skutečně těží.
5. Posílejte správný soubor pro správný úkol.

Ten poslední bod je důležitější, než se zdá. Nejlepší PDF není to, které vypadá nejoficiálněji. Je to to, které vytváří nejméně tření pro dalšího člověka.

## Běžné situace

Takto bych o flatten uvažoval v praxi:

- **Podepsaná smlouva, která jde druhé straně:** Flatten obvykle dává smysl. Chcete pevnou finální kopii, ale pořád může být užitečné, aby text zůstal prohledávatelný.
- **Faktura posílaná účetnímu oddělení:** Začněte čistým digitálním PDF, pokud výslovně nechtějí sken. Flatten pomůže, pokud soubor stále obsahuje živé prvky, které nechcete odesílat.
- **Formulář nahrávaný do portálu:** Flatten bývá správný poslední krok, aby pole po odeslání zůstala na svém místě.
- **Interní draft k revizi:** Neflattenujte příliš brzy. Pokud lidé ještě potřebují komentovat, zmrazíte dokument dřív, než práce skončí.

## FAQ

### Je flattened PDF totéž co naskenované PDF?

Ne. Flattened PDF často ponechá textovou vrstvu a zůstává prohledávatelné. Naskenované PDF se chová spíš jako obrázek stránky.

### Odstraňuje flatten citlivá data?

Ne. Flatten není redakce. Pokud je opravdu potřeba data odstranit, použijte řádný redaction workflow a výsledek ověřte.

### Zůstane flattened PDF prohledávatelné?

Často ano, ale ne vždy. Záleží na tom, jak bylo původní PDF vytvořeno a co váš software při exportu přesně dělá. Právě proto je důležité soubor znovu otevřít a zkontrolovat.

### Je tisk do PDF to samé jako flatten?

Někdy je výsledek podobný, někdy ne. Různé aplikace se chovají různě. Ověřte skutečný výsledek, místo abyste věřili jen názvu volby.

## Závěr

Většina lidí nepotřebuje naskenované PDF jen proto, že chtějí, aby soubor přestal působit jako draft.

Pokud je vaší skutečnou potřebou "pevný, čistý a finální" dokument, flatten často úplně stačí. Ponechte si upravitelný master, zplošťte kopii určenou k odeslání a scan-style verzi vytvářejte jen tehdy, když je takový vizuální formát opravdu užitečný.
