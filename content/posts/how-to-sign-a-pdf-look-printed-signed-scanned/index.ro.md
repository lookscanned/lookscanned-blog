---
date: "2026-04-22T22:00:00+08:00"
draft: false
title: "Cum să semnezi un PDF ca să arate ca și cum l-ai fi printat, semnat și scanat"
summary: "Adăugarea unei semnături digitale nu e suficientă atunci când destinatarul așteaptă o copie semnată cu aspect scanat. Iată fluxul în doi pași care reproduce estetica print-semnează-scanează fără imprimantă și când această abordare este alegerea greșită."
description: "Adăugarea unei semnături digitale nu e suficientă atunci când destinatarul așteaptă o copie semnată cu aspect scanat. Iată fluxul în doi pași care reproduce estetica print-semnează-scanează fără imprimantă și când această abordare este alegerea greșită."
tags: ["pdf", "semnătură", "pdf scanat", "flux de documente", "contracte"]
keywords:
  - "cum să semnezi un pdf să pară scanat"
  - "semnare pdf ca și cum ar fi printat și scanat"
  - "semnare pdf fără imprimantă"
  - "să faci semnătura să pară scanată"
  - "pdf semnat fals scanat"
  - "semnătură digitală care pare scrisă de mână"
  - "alternativă la print semnează scanează"
---

Contractul a venit la ora 11 seara. E-mailul expeditorului era politicos și precis: „Vă rog să printați, semnați și returnați o copie scanată."

Eram într-o cameră de hotel, într-un oraș în care nu locuiam, cu un zbor a doua zi dimineață. Cel mai apropiat magazin de printare se închidea la ora 10. Laptopul era tot ce aveam la dispoziție.

Am fost în exact aceeași situație de suficient de multe ori încât să știu ce fac majoritatea oamenilor după aceea. Adaugă o semnătură în Preview sau Adobe Reader, exportă PDF-ul, îl trimit înapoi și speră că partea cealaltă nu observă. Uneori nu observă. Uneori fișierul se întoarce cu mențiunea „vă rugăm să trimiteți o copie scanată, nu o semnătură digitală", iar tot schimbul mai costă o zi.

Există o modalitate mai bună de a gestiona asta și nu are nicio legătură cu imprimantele.

## Răspunsul scurt

Dacă cineva îți cere un PDF „printat, semnat și scanat", ai nevoie de doi pași, nu de unul:

1. Adaugă semnătura ta la PDF.
2. Aplică un efect de scanare pe întregul document semnat.

Al doilea pas e cel pe care oamenii îl sar. E și cel care face diferența între un fișier care trece și unul care e întors.

Motivul e simplu. O semnătură digitală lipită peste un PDF digital clar arată lipită. Semnătura în sine poate fi realistă, dar stă peste un fundal care nu are niciunul dintre artefactele pe care le produce un scanner real. Această nepotrivire e ceea ce trădează fișierul.

Dacă semnătura și restul paginii împart același zgomot, aceeași ușoară înclinare, aceleași margini atenuate, fișierul se citește ca „acesta a fost printat, semnat și scanat", chiar dacă nimic din toate acestea nu s-a întâmplat.

## De ce „doar adaugă o semnătură digitală" nu trece

Majoritatea editoarelor PDF îți permit să arunci o semnătură pe o pagină în mai puțin de un minut. Problema nu e viteza. Problema e finisajul.

Un flux tipic de semnătură digitală produce:

- **O semnătură clară, cu anti-aliasing.** Fiecare curbă e netedă. Cerneala nu se întinde niciodată. Nu există textură de hârtie dedesubt.
- **Un fundal la fel de clar.** Textul documentului este aliniat perfect. Zero zgomot. Pagina e alb pur.
- **O semnătură care plutește deasupra.** Când dai zoom, uneori vezi semnătura ca un strat separat, cu propria compresie, ușor diferită de textul din jur.

O scanare reală nu arată niciodată așa. O scanare reală are:

- Zgomot subtil pe toată pagina, inclusiv pe semnătură
- O ușoară rotație, de obicei unul sau două grade
- Margini de litere atenuate de senzor și de subeșantionare
- O deplasare de culoare a hârtiei, niciodată alb pur
- Artefacte de compresie care se aplică uniform pe cerneală și hârtie

Semnătura face parte din pagină. Scanner-ul nu știe că e o semnătură. Tratează cerneala și textul tipărit în același fel.

Uniformitatea aceasta e ceea ce prinde ochiul destinatarului, chiar dacă nu poate explica de ce. Un funcționar care verifică acte de viză, un om de resurse umane care verifică oferte de angajare, un proprietar care verifică un contract de închiriere — au văzut mii de documente scanate și câteva sute de PDF-uri cu semnătură lipită. Recunoașterea tiparelor e antrenată.

## Cele trei moduri în care oamenii semnează un PDF astăzi

Înainte de a parcurge fluxul, merită să fim clari despre opțiuni și despre ce obține de fapt fiecare.

| Abordare | Arată ca o scanare reală | Efect legal | Timp | Are nevoie de imprimantă/scanner |
| --- | --- | --- | --- | --- |
| DocuSign / Adobe Sign | Nu (evident digital) | Puternic (eIDAS / ESIGN) | ~2 min | Nu |
| Semnătură tastată sau desenată în Preview/Acrobat | Nu chiar | La fel ca orice semnătură de mână | ~5 min | Nu |
| Print → semnat cu mâna → scanat | Da | La fel ca orice semnătură de mână | 10-20 min | Da |
| Adăugare semnătură + aplicare efect scanare | Da | La fel ca orice semnătură de mână | ~2 min | Nu |

Al patrulea rând e fluxul despre care e vorba în acest articol. Îți dă rezultatul vizual al celui de-al treilea rând fără imprimantă și scanner.

E important să citești tabelul corect. Un PDF semnat cu aspect scanat nu e magic mai puternic decât un PDF semnat obișnuit. Are același efect legal ca orice semnătură bazată pe imagine. Scopul nu e fabricarea unei greutăți legale. Scopul e potrivirea cu estetica pe care o așteaptă destinatarul.

## De ce destinatarii așteaptă în general aspectul „print-semnează-scanează"

Oamenii cer o „copie scanată" parțial din obișnuință și parțial din proces.

Partea de obișnuință e mai veche decât semnăturile digitale. Timp de decenii, singura modalitate de a transmite un document semnat era să semnezi hârtia și fie să o trimiți prin fax, fie să o scanezi. Artefactele vizuale ale unei scanări — ușoara înclinare, zgomotul, marginile atenuate — au devenit semnalul că „un om real a atins acest document". Organizațiile care procesează multe hârtii și-au internalizat acel semnal. Formularele lor încă îl cer, chiar dacă infrastructura legală a evoluat.

Partea de proces e inerția birocratică. Multe formulare au fost scrise când semnarea digitală nu era încă răspândită, iar actualizarea instrucțiunilor nu a ajuns niciodată în capul listei nimănui. Persoana care verifică fișierul s-ar putea să nu-i pese dacă a fost sau nu scanat. Persoana care a scris instrucțiunile acum cinci ani a presupus că va fi.

Vezi asta cel mai des la:

- Cereri de viză și formalități consulare
- Acte de imigrare și rezidență
- Formulare guvernamentale la nivel local
- Firme tradiționale de avocatură și contabilitate
- Contracte transfrontaliere unde contrapartea nu are DocuSign
- Documente de onboarding HR la companii cu fluxuri de conformitate mai vechi
- Depuneri de daune la asigurări
- Unele formulare pentru conturi bancare și împrumuturi

În toate acestea, calea cu cea mai mică rezistență e să le dai ce au cerut în formatul la care se așteptau. Lupta cu instrucțiunea rareori merită. Adaptarea la ea durează câteva minute.

## Fluxul

Instrumentul pe care îl folosesc pentru asta e [Look Scanned](https://lookscanned.io), pentru că face ambii pași într-o singură trecere. Semnătura și efectul de scanare sunt aplicate împreună, ceea ce împiedică semnătura să pară lipită.

### 1. Pregătește versiunea finală a PDF-ului

Nu semna o ciornă. Orice editare după semnare înseamnă să o iei de la capăt. Dacă există comentarii, câmpuri de formular sau modificări urmărite în fișier, aplatizează-le mai întâi. [Cum să aplatizezi un PDF înainte de a-l trimite](../how-to-flatten-a-pdf-before-sending/) acoperă acest pas.

### 2. Deschide Look Scanned și încarcă fișierul

Trage PDF-ul înăuntru. Fișierul e procesat local în browser. Nu se încarcă nimic pe un server, ceea ce contează dacă documentul conține date personale, termeni de contract sau orice altceva sub NDA. [Este sigur să folosești instrumente PDF online pentru documente sensibile?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) explică de ce această distincție nu e cosmetică.

### 3. Adaugă semnătura ta

Există trei moduri de a crea o semnătură în instrument:

- **Încarcă o imagine** a unei semnături existente. Aceasta e cea mai realistă opțiune dacă ai deja o scanare curată a semnăturii tale de mână salvată dintr-un document anterior.
- **Tastează-ți numele** și lasă instrumentul să-l redeze într-un font de tip semnătură. Util când ai nevoie de ceva care arată a semnătură, dar nu ai o imagine salvată.
- **Desenează-ți semnătura** pe pad-ul de semnătură cu mouse-ul, trackpad-ul sau ecranul tactil. Asta dă cel mai natural rezultat, pentru că trăsătura are inconsecvența umană reală în ea.

Metoda desenată e alegerea mea implicită pe tabletă sau trackpad. Imaginea încărcată e alegerea mea implicită pe desktop când am una salvată.

Odată ce semnătura e în loc, poziționeaz-o peste linia de semnătură. Redimensioneaz-o ca să se potrivească cu cum ar arăta o semnătură reală la scara respectivă. Semnăturile prea mici sau prea perfect centrate sunt un alt indiciu.

### 4. Aplică efectul de scanare

Acesta e pasul care face treaba propriu-zisă.

Setările pe care le ajustez în această ordine:

- **Scală de gri sau o ușoară nuanță sepia.** Fundalurile alb pur te dau de gol. O scanare reală aproape niciodată nu produce o pagină alb pur.
- **Rotație în jur de 0,5 până la 1,5 grade.** Mai mult pare neglijent. Mai puțin pare forțat. Dacă documentul are mai multe pagini, activează randomizarea rotației per pagină, ca să nu se încline toate paginile identic.
- **Zgomot redus, nu zgomot ridicat.** Scanerele moderne sunt tăcute. Zgomotul puternic e ce produc instrumentele care arată fals. O granulație ușoară e suficientă.
- **Blur ușor.** Moliciunea senzorului e subtilă. Nu vrei ca textul să fie ilizibil; vrei să piardă marginea vectorială digitală perfectă.
- **DPI în jur de 150-200.** DPI-ul mai mare nu e mai realist. Scanerele de birou reale aproape întotdeauna scot 150 sau 200 DPI ca valoare implicită. O „scanare" la 600 DPI e suspectă prin ea însăși.

Ideea acestor valori implicite e reținerea. Cele mai multe scanări false eșuează pentru că efectele sunt reglate prea sus, nu prea jos.

### 5. Descarcă și verifică rezultatul

Înainte să trimiți, deschide fișierul într-un vizualizator diferit de cel pe care l-ai folosit ca să-l creezi. Dă zoom pe semnătură. Semnătura ar trebui să aibă aceeași textură de zgomot ca textul din jur. Dacă semnătura pare încă clară în timp ce restul paginii e atenuat, efectul de scanare nu s-a aplicat pe stratul semnăturii și trebuie să reexporti.

Încearcă să selectezi text pe pagină. N-ar trebui să poți. Dacă fișierul încă are un strat de text selectabil, nu a fost cu adevărat rasterizat, iar un destinatar atent și-ar putea da seama.

Pasul acesta de verificare prinde mai multe probleme decât se așteaptă oamenii.

## Când acest flux este alegerea greșită

Există situații în care un PDF semnat cu aspect scanat e mai prost decât o semnătură digitală obișnuită, nu mai bun.

**Când greutatea legală contează mai mult decât aspectul.** Semnăturile digitale susținute de DocuSign, Adobe Sign sau orice furnizor calificat eIDAS poartă dovada criptografică a identității semnatarului și a integrității documentului. Un PDF cu aspect scanat nu poartă nimic din toate astea. Pentru orice are mize legale mari — fuziuni, acorduri financiare mari, contracte reglementate — folosește opțiunea criptografică. [PDF scanat vs PDF editabil: pe care ar trebui să-l trimiți?](../scanned-pdf-vs-editable-pdf/) intră în alegerea formatului.

**Când compania ta are un flux obligatoriu.** Dacă angajatorul tău folosește DocuSign pentru contracte, folosește DocuSign. Un PDF cu aspect scanat nu se va integra cu pista lor de audit, iar trimiterea unuia când procesul așteaptă un plic semnat va cauza frecare.

**Când destinatarul a cerut explicit o semnătură digitală.** Unele organizații s-au mișcat în direcția opusă și acum refuză imagini scanate. Citește instrucțiunile. Dacă cer un PDF semnat criptografic, un fișier cu aspect scanat e răspunsul greșit.

**Când documentul va fi procesat de o mașină.** Dacă sistemul destinatar rulează OCR, extrage câmpuri sau trimite fișierul într-un flux care așteaptă text selectabil, un PDF rasterizat cu aspect scanat va strica acea conductă. În acest caz, trimite PDF-ul editabil cu o semnătură digitală curată.

Regula generală: semnarea cu aspect scanat e pentru verificare umană a unor acte citibile de oameni. Nu e un înlocuitor universal.

## Întrebări frecvente

### Pot destinatarii să facă de fapt diferența între o scanare reală și un PDF cu aspect scanat?

Uneori, și depinde de cât de atent au fost aplicate efectele. Cu setări modeste și o semnătură reală (desenată sau încărcată, nu tastată), rezultatul e indistinguibil de o scanare reală pentru un verificator obișnuit. Examinarea forensică e altă întrebare, iar pentru orice situație în care aceasta contează, acest flux nu e potrivit.

### E legal?

Un PDF semnat cu aspect scanat are același efect legal ca orice altă semnătură de mână scanată, care e acceptată pe scară largă în majoritatea jurisdicțiilor pentru contracte obișnuite. Nu e echivalent cu o semnătură electronică calificată (eIDAS) sau o semnătură digitală în baza ESIGN Act, care poartă garanții criptografice mai puternice. Pentru documente care necesită acest nivel de asigurare, folosește un furnizor de semnătură electronică calificat.

### Am deja DocuSign. Am nevoie de asta?

Dacă destinatarul acceptă plicuri DocuSign, folosește DocuSign. Motivul pentru a folosi acest flux e specific atunci când destinatarul vrea un PDF semnat cu aspect scanat și nimic altceva nu-l va mulțumi.

### Pot folosi asta pentru cereri de viză, imigrare sau consulare?

În practică, mulți solicitanți o fac, pentru că aceste cereri solicită de obicei o copie scanată și nu oferă o cale pentru semnătură digitală. Adaptează-te la ce cere cererea. Dacă instrucțiunile cer explicit ca originalul să fie semnat fizic în fața unui notar, niciun flux digital nu înlocuiește asta.

### Asta necesită un scanner fizic?

Nu. Asta e ideea. Întregul flux rulează într-un browser. Singurul input e un PDF digital și o semnătură, iar output-ul e un PDF care arată ca și cum ar fi trecut printr-un scanner.

### Va fi semnătura editabilă în PDF-ul final?

Nu. După ce efectul de scanare e aplicat, întreaga pagină e rasterizată într-o imagine. Semnătura devine parte din pagină în același fel în care ar fi fost dacă ai fi printat, semnat și scanat. Nu poate fi selectată, mutată sau editată după acel punct. Dacă mai târziu ai nevoie de o copie curată editabilă, păstrează versiunea de dinainte de scanare.

## Un gând final

Persoana de pe cealaltă parte a acestui e-mail de obicei nu te testează. Urmează un proces pe care cineva l-a scris înainte ca semnarea digitală să fie obișnuită. Vrea un fișier care se potrivește cu ce e obișnuit să verifice și vrea să treacă mai departe cu ziua lui.

Dă-i fișierul care arată ca ce a cerut, verifică-l înainte să-l trimiți și păstrează pentru tine masterul editabil.

De obicei, asta e toată treaba.
