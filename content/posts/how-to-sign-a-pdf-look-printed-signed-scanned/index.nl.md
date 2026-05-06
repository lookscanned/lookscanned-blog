---
date: "2026-04-22T15:00:00+08:00"
draft: false
title: "Hoe je een PDF ondertekent zodat het lijkt alsof je hem hebt geprint, ondertekend en gescand"
summary: "Een digitale handtekening toevoegen is niet genoeg als de ontvanger een gescand ogende ondertekende kopie verwacht. Dit is de workflow in twee stappen die de print-sign-scan-esthetiek raakt zonder printer, en wanneer deze aanpak de verkeerde keuze is."
description: "Een digitale handtekening toevoegen is niet genoeg als de ontvanger een gescand ogende ondertekende kopie verwacht. Dit is de workflow in twee stappen die de print-sign-scan-esthetiek raakt zonder printer, en wanneer deze aanpak de verkeerde keuze is."
tags: ["pdf", "handtekening", "gescande pdf", "documentworkflow", "contracten"]
keywords:
  - "pdf ondertekenen zodat het gescand lijkt"
  - "pdf ondertekenen als geprint en gescand"
  - "pdf ondertekenen zonder printer"
  - "handtekening er gescand uit laten zien"
  - "nep gescande ondertekende pdf"
  - "digitale handtekening handgeschreven laten lijken"
  - "print sign scan alternatief"
---

Het contract kwam om 23.00 uur binnen. De mail van de verzender was beleefd en specifiek: "Graag printen, ondertekenen en een gescande kopie terugsturen."

Ik zat in een hotelkamer in een stad waar ik niet woonde, met een vlucht de volgende ochtend. De dichtstbijzijnde printshop was om 22.00 uur dichtgegaan. Mijn laptop was het enige wat ik had.

Ik heb in precies die situatie vaak genoeg gezeten om te weten wat de meeste mensen daarna doen. Ze voegen een handtekening toe in Preview of Adobe Reader, exporteren de PDF, sturen hem terug en hopen dat de andere kant het niet merkt. Soms merkt de andere kant het niet. Soms komt het bestand terug met de melding "stuur graag een gescande kopie, geen digitale handtekening," en kost de hele uitwisseling nog een dag.

Er is een betere manier om hiermee om te gaan, en die heeft niets met printers te maken.

## Het korte antwoord

Als iemand je vraagt om een "geprinte, ondertekende en gescande" PDF, heb je twee stappen nodig, niet één:

1. Voeg je handtekening toe aan de PDF.
2. Pas een scaneffect toe op het hele ondertekende document.

De tweede stap is degene die mensen overslaan. Het is ook degene die het verschil maakt tussen een bestand dat erdoorheen komt en een bestand dat wordt teruggestuurd.

De reden is eenvoudig. Een digitale handtekening op een scherpe digitale PDF ziet er geplakt uit. De handtekening kan op zichzelf realistisch zijn, maar hij zit op een achtergrond die geen van de artefacten heeft die een echte scanner produceert. Die mismatch verraadt het bestand.

Als de handtekening en de rest van de pagina dezelfde ruis, dezelfde lichte kanteling, dezelfde verzachte randen delen, leest het bestand als "dit is geprint, ondertekend en gescand" ook al is niets daarvan gebeurd.

## Waarom "gewoon een digitale handtekening toevoegen" er niet doorheen komt

Bij de meeste PDF-editors kun je in minder dan een minuut een handtekening op een pagina neerzetten. Het probleem is niet de snelheid. Het probleem is de afwerking.

Een typische digitale handtekeningworkflow produceert:

- **Een scherpe, anti-aliased handtekening.** Elke curve is glad. De inkt vloeit nooit uit. Er zit geen papiertextuur onder.
- **Een even scherpe achtergrond.** De documenttekst is perfect uitgelijnd. Er is nul ruis. De pagina is zuiver wit.
- **Een handtekening die erbovenop zweeft.** Als je inzoomt, zie je soms dat de handtekening als een aparte laag zit met zijn eigen compressie, net iets anders dan de tekst eromheen.

Een echte scan ziet er nooit zo uit. Een echte scan heeft:

- Subtiele ruis over de hele pagina, inclusief de handtekening
- Lichte rotatie, meestal één of twee graden scheef
- Verzachte letterranden door de sensor en downsampling
- Papierkleurverschuiving, nooit zuiver wit
- Compressieartefacten die gelijkmatig op inkt en papier worden toegepast

De handtekening is onderdeel van de pagina. De scanner weet niet dat het een handtekening is. Hij behandelt inkt en geprinte tekst hetzelfde.

Die uniformiteit is wat het oog van de ontvanger oppikt, zelfs als ze niet kunnen verwoorden waarom. Een ambtenaar die visumdocumenten nakijkt, een HR-medewerker die offertes beoordeelt, een verhuurder die een huurcontract doorleest – ze hebben duizenden gescande documenten gezien en een paar honderd PDF's met erop geplakte handtekening. De patroonherkenning is getraind.

## De drie manieren waarop mensen tegenwoordig een PDF ondertekenen

Voordat we de workflow doorlopen, is het handig om de opties helder te hebben en wat elk daarvan echt oplevert.

| Aanpak | Ziet eruit als een echte scan | Juridisch effect | Tijd | Printer/scanner nodig |
| --- | --- | --- | --- | --- |
| DocuSign / Adobe Sign | Nee (duidelijk digitaal) | Sterk (eIDAS / ESIGN) | ~2 min | Nee |
| Getypte of getekende handtekening in Preview/Acrobat | Niet echt | Hetzelfde als elke handgeschreven handtekening | ~5 min | Nee |
| Printen → met de hand ondertekenen → scannen | Ja | Hetzelfde als elke handgeschreven handtekening | 10-20 min | Ja |
| Handtekening toevoegen + scaneffect toepassen | Ja | Hetzelfde als elke handgeschreven handtekening | ~2 min | Nee |

De vierde rij is de workflow waar deze post over gaat. Hij levert het visuele resultaat van de derde rij zonder printer en scanner.

Het is belangrijk om deze tabel goed te lezen. Een PDF in scanstijl is niet op magische wijze juridisch sterker dan een gewone ondertekende PDF. Hij heeft hetzelfde juridisch effect als elke op een beeld gebaseerde handtekening. Het doel is niet om juridisch gewicht te fabriceren. Het doel is om te voldoen aan een esthetiek die de ontvanger verwacht.

## Waarom ontvangers überhaupt de "print-sign-scan"-look verwachten

Mensen vragen om een "gescande kopie" deels uit gewoonte en deels door het proces.

Het gewoontedeel is ouder dan digitale handtekeningen. Decennialang was de enige manier om een ondertekend document te versturen om het papier te tekenen en het vervolgens te faxen of te scannen. De visuele artefacten van een scan – lichte kanteling, ruis, verzachte randen – werden het signaal van "er heeft een echt mens dit document aangeraakt". Organisaties die veel papierwerk verwerken, hebben dat signaal geïnternaliseerd. Hun formulieren vragen er nog steeds om, ook al is de juridische infrastructuur verder gegaan.

Het procesdeel is bureaucratische traagheid. Veel formulieren zijn opgesteld toen digitaal ondertekenen nog niet breed beschikbaar was, en het updaten van de instructies is nooit bovenaan iemands lijstje gekomen. De persoon die het bestand nakijkt, maakt zich er misschien helemaal niet druk om of het gescand is. De persoon die vijf jaar geleden de instructies schreef, ging ervan uit dat het zo zou zijn.

Je ziet dit het vaakst bij:

- Visum- en consulaire aanvragen
- Immigratie- en verblijfspapieren
- Overheidsformulieren op lokaal niveau
- Traditionele advocaten- en accountantskantoren
- Grensoverschrijdende contracten waarbij de tegenpartij niet is ingericht voor DocuSign
- HR-onboardingpapieren bij bedrijven met oudere complianceworkflows
- Verzekeringsclaims
- Sommige bankrekening- en leningsformulieren

In al deze gevallen is de weg van de minste weerstand om hun te geven wat ze vroegen in het formaat dat ze verwachtten. Tegen de instructie ingaan loont zelden. Eraan voldoen kost een paar minuten.

## De workflow

De tool die ik hiervoor gebruik is [Look Scanned](https://lookscanned.io), omdat die beide stappen in één keer doet. Handtekening en scaneffect worden samen toegepast, en dat is wat voorkomt dat de handtekening er geplakt uitziet.

### 1. Bereid de definitieve versie van de PDF voor

Onderteken geen concept. Elke bewerking na de handtekening betekent opnieuw beginnen. Als er opmerkingen, formuliervelden of bijgehouden wijzigingen in het bestand zitten, maak die dan eerst plat. [Hoe je een PDF plat maakt voordat je hem verstuurt](../how-to-flatten-a-pdf-before-sending/) behandelt die stap.

### 2. Open Look Scanned en upload het bestand

Sleep de PDF erin. Het bestand wordt lokaal in de browser verwerkt. Er wordt niets naar een server geüpload, wat ertoe doet als het document persoonsgegevens, contractvoorwaarden of iets onder NDA bevat. [Is het veilig om online PDF-tools te gebruiken voor gevoelige documenten?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) legt uit waarom dit onderscheid geen cosmetische kwestie is.

### 3. Voeg je handtekening toe

Er zijn drie manieren om een handtekening in de tool aan te maken:

- **Een afbeelding uploaden** van een bestaande handtekening. Dit is de meest realistische optie als je al een schone scan van je handgeschreven handtekening hebt opgeslagen uit een eerder document.
- **Je naam typen** en de tool laten renderen in een handtekeningachtig lettertype. Handig als je iets nodig hebt dat op een handtekening lijkt, maar geen opgeslagen afbeelding hebt.
- **Je handtekening tekenen** op het handtekeningvlak met een muis, trackpad of touchscreen. Dit geeft het meest natuurlijke resultaat, omdat de streek echte menselijke onregelmatigheden bevat.

De getekende methode is mijn standaard op een tablet of trackpad. De geüploade afbeelding is mijn standaard op een desktop wanneer ik er een heb opgeslagen.

Zodra de handtekening erin zit, plaats je hem boven de handtekeningregel. Schaal hem zo dat hij overeenkomt met hoe een echte handtekening er op die schaal uit zou zien. Handtekeningen die te klein of te perfect gecentreerd zijn, vormen nog zo'n aanwijzing.

### 4. Pas het scaneffect toe

Dit is de stap die het eigenlijke werk doet.

De instellingen die ik in deze volgorde aanpak:

- **Grijswaarden of een lichte sepiatoon.** Zuiver witte achtergronden verraden je. Een echte scan levert vrijwel nooit een zuiver witte pagina op.
- **Rotatie rond de 0,5 tot 1,5 graad.** Meer ziet er slordig uit. Minder ziet er geposeerd uit. Als het document meerdere pagina's heeft, activeer je rotatie-randomisatie per pagina, zodat de pagina's niet allemaal identiek scheef liggen.
- **Weinig ruis, geen hoge ruis.** Moderne scanners zijn stil. Zware ruis is wat tools produceren die er nep uitzien. Een lichte korrel is genoeg.
- **Lichte vervaging.** Sensorzachtheid is subtiel. Je wilt de tekst niet onleesbaar maken; je wilt dat hij de perfecte digitale-vectorrand verliest.
- **DPI rond de 150-200.** Hogere DPI is niet realistischer. Echte kantoor­scanners geven bijna altijd 150 of 200 DPI als standaard uit. Een "scan" van 600 DPI is op zich al verdacht.

De bedoeling van deze standaardinstellingen is terughoudendheid. De meeste nepscans falen omdat de effecten te hoog, niet te laag, staan.

### 5. Download en controleer het resultaat

Open het bestand voordat je het verstuurt in een andere viewer dan de viewer waarmee je het hebt gemaakt. Zoom in op de handtekening. De handtekening moet dezelfde ruistextuur hebben als de tekst eromheen. Als de handtekening er nog scherp uitziet terwijl de rest van de pagina verzacht is, is het scaneffect niet op de handtekeninglaag toegepast en moet je opnieuw exporteren.

Probeer tekst op de pagina te selecteren. Dat zou niet moeten lukken. Als het bestand nog een selecteerbare tekstlaag heeft, is het niet echt gerasterd en kan een zorgvuldige ontvanger dat merken.

Die verificatiestap vangt meer problemen op dan mensen verwachten.

## Wanneer deze workflow de verkeerde keuze is

Er zijn situaties waarin een ondertekende PDF in scanstijl slechter is dan een gewone digitale handtekening, niet beter.

**Wanneer juridisch gewicht meer telt dan uiterlijk.** Digitale handtekeningen ondersteund door DocuSign, Adobe Sign of een andere eIDAS-gekwalificeerde aanbieder dragen cryptografisch bewijs van de identiteit van de ondertekenaar en de integriteit van het document. Een PDF in scanstijl draagt daar niets van. Voor alles met grote juridische belangen – fusies, grote financiële overeenkomsten, gereguleerde contracten – gebruik je de cryptografische optie. [Gescande PDF versus bewerkbare PDF: welke moet je versturen?](../scanned-pdf-vs-editable-pdf/) gaat dieper in op de formaatkeuze.

**Wanneer je bedrijf een voorgeschreven workflow heeft.** Als je werkgever DocuSign gebruikt voor contracten, gebruik dan DocuSign. Een PDF in scanstijl zal niet integreren met hun audit trail en er een indienen terwijl het proces een ondertekende envelope verwacht, zorgt voor frictie.

**Wanneer de ontvanger expliciet om een digitale handtekening heeft gevraagd.** Sommige organisaties bewegen de andere kant op en weigeren inmiddels gescande afbeeldingen. Lees de instructies. Als ze een cryptografisch ondertekende PDF vragen, is een bestand in scanstijl het verkeerde antwoord.

**Wanneer het document machinaal verwerkt wordt.** Als het ontvangende systeem OCR draait, velden eruit haalt of het bestand in een workflow voert die selecteerbare tekst verwacht, breekt een gerasterde PDF in scanstijl die pipeline. Stuur in dat geval de bewerkbare PDF met een schone digitale handtekening.

De vuistregel: ondertekenen in scanstijl is voor menselijke beoordeling van door mensen leesbare papieren. Het is geen universele vervanging.

## FAQ

### Kunnen ontvangers echt het verschil zien tussen een echte scan en een PDF in scanstijl?

Soms, en het hangt af van hoe zorgvuldig de effecten zijn toegepast. Met bescheiden instellingen en een echte handtekening (getekend of geüpload, niet getypt) is het resultaat voor een normale beoordelaar niet te onderscheiden van een echte scan. Forensisch onderzoek is een ander verhaal, en voor elke situatie waarin dat ertoe doet, is deze workflow niet geschikt.

### Is dit legaal?

Een ondertekende PDF in scanstijl heeft hetzelfde juridisch effect als elke andere gescande handgeschreven handtekening, die in de meeste rechtsgebieden breed wordt geaccepteerd voor gewone contracten. Hij is niet gelijkwaardig aan een gekwalificeerde elektronische handtekening (eIDAS) of een digitale handtekening onder de ESIGN Act, die sterkere cryptografische garanties bieden. Voor documenten die dat niveau van zekerheid vereisen, gebruik je een gekwalificeerde e-handtekeningaanbieder.

### Ik heb al DocuSign. Heb ik dit nodig?

Als de ontvanger DocuSign-envelopes accepteert, gebruik dan DocuSign. De reden om deze workflow te gebruiken is specifiek wanneer de ontvanger een gescand ogende ondertekende PDF wil en niets anders hen tevreden zal stellen.

### Kan ik dit gebruiken voor visum-, immigratie- of consulaire aanvragen?

In de praktijk doen veel aanvragers dat, omdat zulke aanvragen doorgaans om een gescande kopie vragen en geen pad voor een digitale handtekening bieden. Richt je naar wat de aanvraag vraagt. Als de instructies uitdrukkelijk eisen dat het origineel fysiek voor een notaris wordt ondertekend, vervangt geen enkele digitale workflow dat.

### Heeft dit een fysieke scanner nodig?

Nee. Dat is juist het punt. De hele workflow draait in een browser. De enige input is een digitale PDF en een handtekening, en de output is een PDF die eruitziet alsof hij door een scanner is gegaan.

### Is de handtekening bewerkbaar in de uiteindelijke PDF?

Nee. Nadat het scaneffect is toegepast, wordt de hele pagina gerasterd tot een afbeelding. De handtekening wordt onderdeel van de pagina op dezelfde manier als wanneer je hem zou hebben geprint, ondertekend en gescand. Hij kan daarna niet meer geselecteerd, verplaatst of bewerkt worden. Als je later een schone bewerkbare kopie nodig hebt, bewaar dan de versie van vóór de scan.

## Slotgedachte

De persoon aan de andere kant van deze mail test je meestal niet. Die volgt een proces dat iemand heeft opgeschreven voordat digitaal ondertekenen gewoon was. Hij wil een bestand dat past bij wat hij gewend is te beoordelen, en wil weer verder met zijn dag.

Geef hem het bestand dat eruitziet zoals hij heeft gevraagd, controleer het voordat je het verstuurt, en houd de bewerkbare master voor jezelf.

Dat is meestal het hele werk.
