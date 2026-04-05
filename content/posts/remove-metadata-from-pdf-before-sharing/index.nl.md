---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "Hoe u metadata uit een PDF verwijdert voordat u deze deelt"
summary: "Uw PDF kan verborgen metadata bevatten die onthult wie u bent, welke software u hebt gebruikt en wanneer u eraan hebt gewerkt. Hier leest u wat u moet controleren, hoe u metadata verwijdert en wanneer het converteren naar een scanachtige PDF grondiger is dan welke metadata-editor dan ook."
description: "Uw PDF kan verborgen metadata bevatten die onthult wie u bent, welke software u hebt gebruikt en wanneer u eraan hebt gewerkt. Hier leest u wat u moet controleren, hoe u metadata verwijdert en wanneer het converteren naar een scanachtige PDF grondiger is dan welke metadata-editor dan ook."
tags: ["PDF", "privacy", "metadata", "documentbeveiliging", "gevoelige documenten"]
keywords:
  - "how to remove metadata from pdf"
  - "pdf metadata privacy risk"
  - "remove pdf metadata before sharing"
  - "check pdf metadata"
  - "hidden data in pdf"
  - "pdf metadata removal tool"
---

Vorige week controleerde ik de metadata van een PDF die ik op het punt stond te versturen. Het bestand bevatte nog steeds mijn volledige naam, het interne bestandspad van mijn bedrijf en het exacte tijdstempel van elke revisie die ik de afgelopen maand had gemaakt.

De pagina zag er schoon uit. Het bestand was dat niet.

De meeste mensen openen nooit het eigenschappenpaneel van een PDF voordat ze deze delen. De zichtbare inhoud krijgt alle aandacht. Maar het bestand zelf kan veel meer zeggen dan wat op de pagina staat, en die verborgen laag is waar dit artikel over gaat.

## Het korte antwoord

PDF-metadata kan uw naam bevatten, de software die u hebt gebruikt, aanmaak- en wijzigingstijdstempels, revisiegeschiedenis, opmerkingen en zelfs GPS-coordinaten van ingesloten afbeeldingen.

Om deze te verwijderen hebt u een paar opties:

- gebruik een metadata-editor of opschoningstool om specifieke velden te verwijderen
- gebruik een opdrachtregeltool zoals exiftool voor volledige controle
- converteer de PDF naar een scanachtig, op afbeeldingen gebaseerd bestand, dat de gehele documentstructuur vervangt en alle verborgen gegevens in een keer verwijdert

Als het document definitief is en uw organisatie verlaat, is die laatste optie de meest grondige enkele stap die u kunt nemen.

## Wat PDF-metadata daadwerkelijk bevat

Een PDF kan drie informatielagen bevatten naast wat u op de pagina ziet.

De eerste laag zijn **documenteigenschappen**. Dit is de metadata waar de meeste mensen aan denken: auteursnaam, titel, onderwerp, aanmaakdatum, wijzigingsdatum en de software die het bestand heeft gemaakt. Open een willekeurige PDF in een viewer, controleer Bestand > Eigenschappen, en u zult waarschijnlijk velden zien zoals "Auteur: Jan Jansen" en "Producent: Microsoft Word 2021." Die informatie reist met het bestand mee, waar het ook naartoe gaat.

De tweede laag is **XMP en ingesloten metadata**. Deze is minder zichtbaar maar vaak onthullender. Als uw PDF ingesloten afbeeldingen bevat, kunnen die afbeeldingen nog hun originele EXIF-gegevens bevatten, inclusief cameramodel, tijdstempels en GPS-coordinaten. XMP-metadata kan ook bewerkingsgeschiedenis, aangepaste tags en lettertypelicentie-informatie bevatten. De meeste mensen weten niet dat deze laag bestaat, omdat standaard PDF-viewers deze niet tonen.

De derde laag zijn **verborgen structurele gegevens**. Afhankelijk van hoe de PDF is gemaakt en bewerkt, kan het bestand revisiegeschiedenis bevatten, verwijderde-maar-herstelbare tekst, opmerkingen, annotaties, standaardwaarden van formuliervelden, verborgen lagen, JavaScript en ingesloten bestandsbijlagen. Dit is de laag die de meeste schade veroorzaakt wanneer deze uitlekt, omdat deze inhoud kan bevatten waarvan de auteur dacht dat die was verwijderd.

Als u al hebt nagedacht over dit soort verborgen gegevens in de context van het uploaden van bestanden naar webtools, behandelt [Is het veilig om online PDF-tools te gebruiken voor gevoelige documenten?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) het bredere vertrouwensmodel.

## Waarom dit belangrijker is dan mensen denken

Metadatalekken zijn niet dramatisch. Ze zijn stil, specifiek en moeilijk ongedaan te maken zodra het bestand is gedeeld.

**Auteuridentificatie wanneer anonimiteit ertoe doet.** Als de PDF door een specifieke persoon is gemaakt, kan het auteurveld of het interne bestandspad naar hen terugverwijzen. Dit is relevant voor klokkenluiders, anonieme rapporten, gelekte documenten of elke situatie waarin de identiteit van de afzender buiten het bestand moet blijven.

**Revisiegeschiedenis onthult onderhandelingsstrategie.** Een contract-PDF die nog bijgehouden wijzigingen of revisiemetadata bevat, kan uw uitganspositie onthullen, wat u hebt verwijderd en wat u hebt afgezwakt voordat u de definitieve versie verstuurde. De andere partij hoeft niet technisch onderlegd te zijn om hierop te stuiten. Sommige PDF-viewers tonen revisiegegevens automatisch.

**Tijdstempels onthullen gevoelige timing.** Aanmaak- en wijzigingsdatums vertellen iemand wanneer het document is gestart, wanneer het voor het laatst is gewijzigd en hoe vaak het is aangeraakt. In juridische, compliance- of concurrentiecontexten kan dit soort timinginformatie belangrijker zijn dan de inhoud zelf.

**GPS-coordinaten van ingesloten afbeeldingen.** Als u een foto in de PDF hebt geplakt en die foto nog EXIF-locatiegegevens bevat, zijn de GPS-coordinaten van waar de afbeelding is gemaakt nu ingebed in het bestand. De meeste mensen denken hier niet aan omdat de metadata in het afbeeldingsobject leeft, niet in het PDF-eigenschappenpaneel.

**Softwareversies onthullen interne tools.** Velden zoals "Producent: Adobe Acrobat Pro DC 24.1.30225" of "Maker: Microsoft Word voor Microsoft 365" vertellen iemand welke tools en versies uw organisatie gebruikt. Voor de meeste documenten is dit triviaal. In gevoelige contexten is het een onnodig informatielek.

Niets hiervan is hypothetisch. Dit zijn de saaie metadatalekken die daadwerkelijk gebeuren.

## Hoe u controleert welke metadata uw PDF bevat

Voordat u iets verwijdert, bekijk wat er daadwerkelijk in het bestand zit.

**Eigenschappendialoog van de PDF-viewer.** In de meeste PDF-readers toont Bestand > Eigenschappen of Documenteigenschappen de basisvelden: auteur, titel, onderwerp, aanmaakdatum, wijzigingsdatum en producenttoepassing. Dit vangt de eerste laag op maar mist bijna al het andere.

**exiftool op de opdrachtregel.** Het uitvoeren van `exiftool document.pdf` toont u alles: documenteigenschappen, XMP-gegevens, ingesloten afbeeldings-EXIF en aangepaste velden. Dit is de meest complete inspectiemethode, maar vereist vertrouwdheid met een terminal. Als u het nog nooit hebt gebruikt, is het de moeite waard om het te installeren, alleen al om te zien wat een enkele PDF kan bevatten.

**Online metadata-viewers.** Sommige websites laten u een PDF uploaden om de metadata te inspecteren. Als de reden voor uw metadatacontrole privacy is, is het uploaden van het bestand naar een dienst van derden om het te inspecteren een twijfelachtige stap. U probeert erachter te komen of het bestand informatie lekt, en de eerste stap is het naar een vreemde sturen.

Zodra u weet wat er in het bestand zit, is de vraag hoe u het verwijdert.

## Methoden voor het verwijderen van PDF-metadata

Er is geen enkele beste methode. De juiste keuze hangt af van wat u moet bewaren en hoe grondig u moet zijn.

### Adobe Acrobat (Document opschonen)

Acrobat Pro bevat de functies "Verborgen informatie verwijderen" en "Document opschonen" die metadata, verborgen tekst, opmerkingen, formuliergegevens, bijlagen en andere niet-zichtbare inhoud kunnen verwijderen. Dit is een van de meest complete benaderingen als u de tekstlaag intact en het bestand doorzoekbaar moet houden.

De beperking is dat een betaalde Acrobat Pro-licentie vereist is. Als u die al hebt, is dit een sterke optie. Als u die niet hebt, is dit niet het soort probleem dat het abonnement op zichzelf rechtvaardigt.

### exiftool en andere CLI-tools

exiftool kan chirurgisch specifieke metadatavelden verwijderen of alles uit een PDF strippen in een enkele opdracht. Het is gratis, draait op elk platform en geeft precieze controle over wat er precies wordt verwijderd.

De beperking is de technische drempel. Het richt zich ook op metadatavelden in plaats van structurele verborgen gegevens. Als de PDF revisiegeschiedenis, verborgen lagen of ingesloten objecten bevat, zal exiftool deze niet opvangen. Het is uitstekend in wat het doet, maar dekt niet elke laag.

### Online tools voor metadataverwijdering

Verschillende websites laten u een PDF uploaden, de metadata verwijderen en de opgeschoonde versie downloaden. De workflow is eenvoudig en vereist geen software-installatie.

De beperking zou duidelijk moeten zijn. U uploadt een document naar een server van een derde partij om een privacyprobleem op te lossen. Dat is een beetje alsof u uw dagboek aan een vreemde geeft zodat die de pagina met uw adres eruit kan scheuren.

Als het bestand een laag risico heeft, kan dat een acceptabele afweging zijn. Als u metadata verwijdert omdat het document gevoelig is, introduceert deze aanpak precies het soort blootstelling dat u probeert te vermijden. Voor meer over die afweging behandelt [Is het veilig om online PDF-tools te gebruiken voor gevoelige documenten?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) dit in detail.

### Afdrukken naar PDF

Het opnieuw afdrukken van een PDF via een virtuele printer maakt een nieuw bestand dat vaak sommige metadata verwijdert en bepaalde elementen afvlakt. Het is gratis en ingebouwd in de meeste besturingssystemen.

De resultaten zijn inconsistent. Sommige virtuele printers voegen hun eigen metadata toe aan de uitvoer. Sommige verwijderen XMP-gegevens, andere niet. Ingesloten afbeeldings-EXIF kan de retourvlucht al dan niet overleven. Als u deze methode gebruikt, verifieer dan altijd het resultaat in plaats van aan te nemen dat het schoon is.

### Converteren naar een scanachtige PDF

Deze aanpak converteert elke pagina van de PDF naar een afbeelding en verpakt die afbeeldingen vervolgens in een nieuwe PDF. Omdat de gehele documentstructuur wordt vervangen, worden alle verborgen gegevens verwijderd: metadata, tekstlagen, opmerkingen, revisiegeschiedenis, ingesloten bestanden, formuliervelden, JavaScript, alles. De uitvoer is een nieuwe PDF die alleen gerenderde pagina-afbeeldingen bevat.

De afweging is dat het bestand niet langer tekstdoorzoekbaar is. Het gedraagt zich als een afbeelding van elke pagina. Voor documenten die definitief zijn en uw organisatie verlaten, is die afweging vaak de moeite waard. Voor documenten die nog doorzocht, geciteerd of bewerkt moeten worden, is dat niet het geval.

Dat is precies wat [Look Scanned](https://lookscanned.io) doet. Het converteert de PDF lokaal in uw browser naar een scanachtige versie, zodat het bestand uw apparaat nooit verlaat. Het resultaat is een schone, op afbeeldingen gebaseerde PDF zonder verborgen gegevens, zonder tekstlagen, zonder metadata van het origineel en zonder serververwerking om u zorgen over te maken.

## Vergelijking

| Methode | Verwijdert documenteigenschappen | Verwijdert verborgen lagen | Verwijdert afbeeldings-EXIF | Behoudt tekstdoorzoekbaarheid | Vereist upload | Kosten |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Opschonen) | Ja | Ja | Afhankelijk van instellingen | Ja | Nee | Betaald |
| exiftool / CLI | Ja | Gedeeltelijk | Ja | Ja | Nee | Gratis |
| Online metadata-tools | Meestal | Meestal niet | Soms | Ja | Ja | Gratis |
| Afdrukken naar PDF | Gedeeltelijk | Gedeeltelijk | Soms | Meestal | Nee | Gratis |
| Scanconversie (bijv. Look Scanned) | Ja | Ja | Ja | Nee | Nee (lokale browser) | Gratis |

Geen enkele rij is perfect voor elke situatie. De vraag is altijd welke afwegingen belangrijk zijn voor dit specifieke bestand.

## Wanneer elke aanpak zinvol is

**Het document wordt nog bewerkt.** Verwijder metadata met Acrobat of exiftool. Behoud de tekstlaag. Metadataverwijdering is in deze fase huishoudelijk werk, niet de hoofdzaak.

**Het document is definitief en verlaat uw organisatie.** Als doorzoekbaarheid niet kritiek is, is een scanconversie de meest grondige enkele stap. Het verwijdert alles in een keer. Als het bestand nog doorzoekbaar moet zijn, gebruik dan in plaats daarvan de opschonenfunctie van Acrobat en verifieer het resultaat.

**Het document is zeer gevoelig.** Combineer benaderingen. Handel eerst de juiste redactie af, dan de metadataopschoning en vervolgens een laatste scanconversie. Elke stap dekt een andere laag. Als redactie deel uitmaakt van uw workflow, legt [Zwarte balken zijn geen redactie](../black-bars-arent-redaction-pdf-redaction-checklist/) uit waarom visuele maskering niet voldoende is.

**U weet niet zeker wat er in het bestand zit.** Controleer eerst met exiftool of het eigenschappenpaneel. Beslis vervolgens op basis van wat u vindt en waar het bestand naartoe gaat. Een verwijderingsmethode kiezen voordat u begrijpt wat er verwijderd moet worden, leidt tot ofwel overdreven aanpak ofwel gemiste gegevens.

Als u afweegt of een scanachtige PDF het juiste formaat is voor uw situatie, behandelt [Gescande PDF vs. bewerkbare PDF: welke moet u versturen?](../scanned-pdf-vs-editable-pdf/) die beslissing breder.

## De workflow die ik daadwerkelijk gebruik

1. Eerst de documentinhoud afronden. Schoon geen metadata op bij een bestand dat nog verandert.
2. Controleer de metadata van de definitieve export. Minimaal Bestand > Eigenschappen. exiftool als het ertoe doet.
3. Verwijder of schoon op op basis van wat ik heb gevonden en hoe gevoelig de bestemming is.
4. Als het bestand naar buiten gaat en niet doorzoekbaar hoeft te zijn, converteer ik het naar een scanachtige PDF. [Look Scanned](https://lookscanned.io) handelt die stap af in de browser zonder het bestand te uploaden.
5. Open het resultaat in een schone viewer en verifieer. Controleer eigenschappen, probeer tekst te selecteren, zoek naar termen die verdwenen zouden moeten zijn.

Die laatste stap vangt meer overgebleven gegevens op dan mensen verwachten.

Als afvlakken voldoende is voor uw situatie en u de volledige scanconversie niet nodig hebt, behandelt [Hoe u een PDF afvlakt voordat u deze verstuurt](../how-to-flatten-a-pdf-before-sending/) dat middenpad.

## FAQ

### Verwijdert het converteren naar een gescande PDF alle metadata?

Ja. Het converteren naar een op afbeeldingen gebaseerde PDF vervangt de gehele bestandsstructuur. Het resultaat bevat geen tekstlaag, geen verborgen objecten, geen documenteigenschappen van het origineel en geen ingesloten bestandsmetadata. De uitvoer is een nieuwe PDF die alleen gerenderde pagina-afbeeldingen bevat.

### Kan iemand metadata herstellen uit een scanachtige PDF?

Niet uit de PDF zelf. De originele structuur is verdwenen. De enige metadata in het nieuwe bestand is wat het conversietool schrijft, zoals zijn eigen producenttag. Als de conversie lokaal in de browser plaatsvindt, bestaat er ook geen kopie aan de serverzijde.

### Is het verwijderen van metadata hetzelfde als redactie?

Nee. Metadataverwijdering verwijdert verborgen eigenschappen en gegevens op documentniveau. Redactie verwijdert zichtbare inhoud van de pagina. Als u namen, nummers of tekst van de pagina zelf moet verwijderen, is dat een afzonderlijke stap die voor de metadataopschoning moet plaatsvinden. [Zwarte balken zijn geen redactie](../black-bars-arent-redaction-pdf-redaction-checklist/) legt uit waarom visuele maskering alleen niet voldoende is.

### Moet ik metadata uit elke PDF verwijderen die ik verstuur?

Niet per se. Voor routinedocumenten die al openbaar of laagrisico zijn, is metadata onschadelijk. De vraag wordt belangrijk wanneer het document gevoelig is, de ontvanger extern is of de auteuridentiteit buiten het bestand moet blijven.

## Tot slot

De meeste mensen controleren nooit wat hun PDF over hen zegt voordat ze het versturen.

Het bestand kan schoon zijn. Of het kan uw naam bevatten, uw revisiegeschiedenis en de GPS-coordinaten van het cafe waar u het afgelopen dinsdag hebt bewerkt.

Als het document belangrijk genoeg is om zorgvuldig te delen, is het belangrijk genoeg om te controleren. En als die controle meer onthult dan verwacht, zijn er eenvoudige manieren om het te verhelpen voordat u op verzenden drukt.
