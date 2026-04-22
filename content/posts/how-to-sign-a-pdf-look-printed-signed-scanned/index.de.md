---
date: "2026-04-22T15:00:00+08:00"
draft: false
title: "Wie man ein PDF so unterschreibt, dass es aussieht, als hätte man es gedruckt, unterschrieben und gescannt"
summary: "Eine digitale Signatur reicht nicht, wenn der Empfänger eine gescannt wirkende, unterschriebene Kopie erwartet. Hier ist der Zwei-Schritt-Workflow, der die Print-Sign-Scan-Ästhetik ohne Drucker trifft – und wann dieser Ansatz die falsche Wahl ist."
description: "Eine digitale Signatur reicht nicht, wenn der Empfänger eine gescannt wirkende, unterschriebene Kopie erwartet. Hier ist der Zwei-Schritt-Workflow, der die Print-Sign-Scan-Ästhetik ohne Drucker trifft – und wann dieser Ansatz die falsche Wahl ist."
tags: ["pdf", "unterschrift", "gescanntes pdf", "dokumenten-workflow", "verträge"]
keywords:
  - "pdf so unterschreiben dass es gescannt aussieht"
  - "pdf wie gedruckt und gescannt unterschreiben"
  - "pdf ohne drucker unterschreiben"
  - "unterschrift wie gescannt aussehen lassen"
  - "gefälschtes unterschriebenes scan pdf"
  - "digitale unterschrift handschriftlich wirken"
  - "drucken unterschreiben scannen alternative"
---

Der Vertrag kam um 23 Uhr. Die Mail des Absenders war höflich und eindeutig: „Bitte drucken, unterschreiben und eine gescannte Kopie zurückschicken."

Ich saß in einem Hotelzimmer in einer Stadt, in der ich nicht wohnte, mit einem Flug am nächsten Morgen. Der nächste Copyshop hatte um 22 Uhr zugemacht. Ich hatte nur meinen Laptop dabei.

Ich war in genau dieser Situation oft genug, um zu wissen, was die meisten Leute danach tun. Sie fügen in Preview oder Adobe Reader eine Unterschrift ein, exportieren das PDF, schicken es zurück und hoffen, dass die Gegenseite es nicht merkt. Manchmal merkt sie es nicht. Manchmal kommt die Datei mit dem Vermerk „bitte eine gescannte Kopie einreichen, keine digitale Signatur" zurück, und der ganze Austausch kostet einen weiteren Tag.

Es gibt einen besseren Weg, das zu lösen, und er hat nichts mit Druckern zu tun.

## Die kurze Antwort

Wenn jemand Sie um ein „gedrucktes, unterschriebenes und gescanntes" PDF bittet, brauchen Sie zwei Schritte, nicht einen:

1. Fügen Sie Ihre Unterschrift in das PDF ein.
2. Wenden Sie einen Scan-Effekt auf das gesamte unterschriebene Dokument an.

Den zweiten Schritt überspringen die Leute. Er ist aber auch derjenige, der den Unterschied macht zwischen einer Datei, die durchgeht, und einer, die zurückkommt.

Der Grund ist einfach. Eine digitale Signatur, die auf ein knackig scharfes, digitales PDF gepappt wird, sieht gepappt aus. Die Unterschrift an sich mag realistisch sein, sitzt aber auf einem Hintergrund, der keine der Artefakte hat, die ein echter Scanner erzeugt. Diese Diskrepanz verrät die Datei.

Wenn Unterschrift und der Rest der Seite dasselbe Rauschen, denselben leichten Schiefstand, dieselben weich gezeichneten Kanten teilen, liest sich die Datei als „das wurde gedruckt, unterschrieben und gescannt" – auch wenn keiner dieser Schritte wirklich passiert ist.

## Warum „einfach eine digitale Signatur draufsetzen" nicht durchgeht

Die meisten PDF-Editoren lassen Sie eine Unterschrift in unter einer Minute auf eine Seite setzen. Das Problem ist nicht die Geschwindigkeit. Das Problem ist die Anmutung.

Ein typischer digitaler Signatur-Workflow erzeugt:

- **Eine scharfe, kantengeglättete Unterschrift.** Jede Kurve ist sauber. Die Tinte verläuft nie. Darunter liegt keine Papierstruktur.
- **Einen genauso scharfen Hintergrund.** Der Dokumenttext ist perfekt ausgerichtet. Es gibt null Rauschen. Die Seite ist reinweiß.
- **Eine Unterschrift, die obenauf schwebt.** Wenn man hineinzoomt, sieht man manchmal, dass die Unterschrift als separate Ebene mit eigener Kompression sitzt, leicht anders als der Text drumherum.

Ein echter Scan sieht nie so aus. Ein echter Scan hat:

- Dezentes Rauschen über die gesamte Seite, inklusive Unterschrift
- Leichte Rotation, meist ein bis zwei Grad
- Durch Sensor und Downsampling weich gezeichnete Buchstabenkanten
- Leichte Papierfarbverschiebung, nie reinweiß
- Kompressionsartefakte, die auf Tinte und Papier gleichermaßen wirken

Die Unterschrift ist Teil der Seite. Der Scanner weiß nicht, dass es eine Unterschrift ist. Er behandelt Tinte und gedruckten Text gleich.

Genau diese Einheitlichkeit ist es, was das Auge des Empfängers aufschnappt, auch wenn er nicht benennen kann, warum. Ein Beamter, der Visumsunterlagen prüft, eine HR-Person, die Angebotsschreiben sichtet, ein Vermieter, der einen Mietvertrag durchsieht – sie haben Tausende gescannter Dokumente und einige Hundert PDFs mit aufgeklebter Unterschrift gesehen. Die Mustererkennung ist trainiert.

## Die drei Arten, wie heute ein PDF unterschrieben wird

Bevor wir den Workflow durchgehen, lohnt es sich, die Optionen und das, was jede wirklich erreicht, klar zu benennen.

| Ansatz | Sieht wie ein echter Scan aus | Rechtswirkung | Zeit | Drucker/Scanner nötig |
| --- | --- | --- | --- | --- |
| DocuSign / Adobe Sign | Nein (offensichtlich digital) | Stark (eIDAS / ESIGN) | ~2 Min | Nein |
| Getippte oder gezeichnete Unterschrift in Preview/Acrobat | Nicht wirklich | Wie jede handschriftliche Unterschrift | ~5 Min | Nein |
| Drucken → von Hand unterschreiben → scannen | Ja | Wie jede handschriftliche Unterschrift | 10-20 Min | Ja |
| Unterschrift einfügen + Scan-Effekt anwenden | Ja | Wie jede handschriftliche Unterschrift | ~2 Min | Nein |

Die vierte Zeile ist der Workflow, um den es in diesem Beitrag geht. Er liefert das visuelle Ergebnis der dritten Zeile ohne Drucker und Scanner.

Es ist wichtig, diese Tabelle richtig zu lesen. Ein PDF in Scan-Optik ist nicht auf magische Weise rechtlich kräftiger als ein normal unterschriebenes PDF. Es hat dieselbe Rechtswirkung wie jede bildbasierte Unterschrift. Es geht nicht darum, rechtliches Gewicht zu fabrizieren. Es geht darum, eine Ästhetik zu treffen, die der Empfänger erwartet.

## Warum Empfänger überhaupt den „Print-Sign-Scan"-Look erwarten

Leute verlangen eine „gescannte Kopie" teils aus Gewohnheit und teils aus Prozess.

Der Gewohnheitsteil ist älter als digitale Signaturen. Jahrzehntelang war der einzige Weg, ein unterschriebenes Dokument zu übermitteln, es auf Papier zu unterschreiben und es dann per Fax oder Scan zu schicken. Die visuellen Artefakte eines Scans – leichte Neigung, Rauschen, weiche Kanten – wurden zum Signal „hier hat ein echter Mensch das Dokument angefasst". Organisationen, die viel Papier verarbeiten, haben dieses Signal internalisiert. Ihre Formulare fragen weiter danach, auch wenn die rechtliche Infrastruktur längst weiter ist.

Der Prozessteil ist bürokratische Trägheit. Viele Formulare entstanden, als digitales Unterschreiben nicht weit verbreitet war, und das Aktualisieren der Anweisungen schaffte es nie an die Spitze einer To-do-Liste. Dem, der die Akte prüft, ist unter Umständen egal, ob sie gescannt wurde. Derjenige, der die Anweisung vor fünf Jahren schrieb, ging davon aus, dass sie es ist.

Am häufigsten sehen Sie das bei:

- Visa- und konsularischen Anträgen
- Einwanderungs- und Aufenthaltsunterlagen
- Formularen kommunaler Behörden
- Traditionellen Anwalts- und Steuerberaterbüros
- Grenzüberschreitenden Verträgen, bei denen die Gegenseite nicht auf DocuSign eingerichtet ist
- HR-Onboarding-Unterlagen in Firmen mit älteren Compliance-Workflows
- Versicherungsschadenmeldungen
- Manchen Bankkonto- und Kreditformularen

In all diesen Fällen ist der Weg des geringsten Widerstands, ihnen zu geben, was sie im erwarteten Format verlangt haben. Gegen die Anweisung zu kämpfen zahlt sich selten aus. Sie zu erfüllen kostet ein paar Minuten.

## Der Workflow

Das Tool, das ich dafür benutze, ist [Look Scanned](https://lookscanned.io), weil es beide Schritte in einem Durchgang macht. Unterschrift und Scan-Effekt werden zusammen angewendet, und genau das verhindert, dass die Unterschrift aufgeklebt aussieht.

### 1. Bereiten Sie die finale Version des PDFs vor

Unterschreiben Sie keinen Entwurf. Jede Bearbeitung nach der Unterschrift bedeutet von vorne anfangen. Wenn die Datei Kommentare, Formularfelder oder verfolgte Änderungen enthält, flachen Sie sie zuerst ab. [Wie man ein PDF vor dem Versenden flach zieht](../how-to-flatten-a-pdf-before-sending/) behandelt diesen Schritt.

### 2. Öffnen Sie Look Scanned und laden Sie die Datei hoch

Ziehen Sie das PDF hinein. Die Datei wird lokal im Browser verarbeitet. Nichts wird auf einen Server hochgeladen, was wichtig ist, wenn das Dokument persönliche Daten, Vertragsklauseln oder irgendetwas unter NDA enthält. [Ist es sicher, Online-PDF-Tools für sensible Dokumente zu nutzen?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) erklärt, warum dieser Unterschied nicht kosmetisch ist.

### 3. Fügen Sie Ihre Unterschrift hinzu

Es gibt drei Wege, im Tool eine Unterschrift zu erzeugen:

- **Ein Bild hochladen** einer vorhandenen Unterschrift. Das ist die realistischste Option, wenn Sie bereits einen sauberen Scan Ihrer handschriftlichen Unterschrift aus einem früheren Dokument gespeichert haben.
- **Ihren Namen tippen** und das Tool ihn in einer unterschriftsartigen Schrift rendern lassen. Nützlich, wenn Sie etwas brauchen, das wie eine Unterschrift aussieht, aber kein gespeichertes Bild haben.
- **Ihre Unterschrift zeichnen** auf dem Signaturfeld – mit Maus, Trackpad oder Touchscreen. Das liefert das natürlichste Ergebnis, weil der Strich echte menschliche Ungleichmäßigkeit hat.

Die Zeichenmethode ist meine Standardwahl auf Tablet oder Trackpad. Das hochgeladene Bild ist meine Standardwahl am Desktop, wenn ich eines gespeichert habe.

Sobald die Unterschrift drin ist, positionieren Sie sie über der Signaturlinie. Skalieren Sie sie so, wie eine echte Unterschrift in diesem Maßstab aussehen würde. Unterschriften, die zu klein oder zu perfekt mittig sind, sind ein weiteres Erkennungszeichen.

### 4. Wenden Sie den Scan-Effekt an

Das ist der Schritt, der die eigentliche Arbeit macht.

Die Einstellungen, die ich in dieser Reihenfolge angehe:

- **Graustufen oder leichter Sepia-Ton.** Reinweiße Hintergründe sind ein Verräter. Ein echter Scan erzeugt fast nie eine reinweiße Seite.
- **Rotation um 0,5 bis 1,5 Grad.** Alles darüber wirkt schludrig. Alles darunter wirkt gestellt. Bei mehrseitigen Dokumenten aktivieren Sie die seitenweise Zufallsrotation, damit nicht alle Seiten identisch schief liegen.
- **Wenig Rauschen, nicht viel.** Moderne Scanner sind leise. Starkes Rauschen produzieren die Tools, die „offensichtlich fake" aussehen. Eine leichte Körnung reicht.
- **Leichte Unschärfe.** Sensorweichheit ist subtil. Der Text soll nicht unleserlich werden; er soll nur die perfekte digitale Vektor-Kante verlieren.
- **DPI um 150-200.** Höhere DPI ist nicht realistischer. Echte Bürogeräte geben standardmäßig fast immer 150 oder 200 DPI aus. Ein 600-DPI-„Scan" ist für sich schon verdächtig.

Der Sinn dieser Voreinstellungen ist Zurückhaltung. Die meisten Fälschungen scheitern, weil die Effekte zu hoch, nicht zu niedrig gedreht sind.

### 5. Herunterladen und Ergebnis prüfen

Öffnen Sie die Datei vor dem Versenden in einem anderen Viewer als dem, mit dem Sie sie erstellt haben. Zoomen Sie auf die Unterschrift. Die Unterschrift sollte dieselbe Rauschtextur haben wie der umgebende Text. Wenn die Unterschrift weiterhin knackig aussieht, während der Rest der Seite weich ist, hat der Scan-Effekt die Signatur-Ebene nicht erwischt und Sie müssen neu exportieren.

Versuchen Sie, Text auf der Seite zu markieren. Das sollte nicht gehen. Wenn die Datei noch eine markierbare Textebene hat, wurde sie nicht wirklich rasterisiert, und ein sorgfältiger Empfänger könnte das sehen.

Dieser Prüfschritt fängt mehr Probleme ab, als man erwartet.

## Wann dieser Workflow die falsche Wahl ist

Es gibt Situationen, in denen ein PDF in Scan-Optik schlechter ist als eine reguläre digitale Signatur, nicht besser.

**Wenn rechtliches Gewicht mehr zählt als Optik.** Digitale Signaturen, die von DocuSign, Adobe Sign oder einem nach eIDAS qualifizierten Anbieter gestützt werden, tragen kryptografische Nachweise zur Unterzeichneridentität und Dokumentintegrität. Ein PDF in Scan-Optik trägt davon nichts. Für alles mit hoher rechtlicher Relevanz – Übernahmen, große Finanzvereinbarungen, regulierte Verträge – nehmen Sie die kryptografische Option. [Gescanntes PDF vs. editierbares PDF: Welches solltest du schicken?](../scanned-pdf-vs-editable-pdf/) geht auf die Formatwahl ein.

**Wenn Ihr Unternehmen einen vorgeschriebenen Workflow hat.** Wenn Ihr Arbeitgeber für Verträge DocuSign nutzt, nutzen Sie DocuSign. Ein PDF in Scan-Optik wird sich nicht in deren Audit-Trail einfügen, und eines einzureichen, wenn der Prozess einen signierten Envelope erwartet, erzeugt Reibung.

**Wenn der Empfänger ausdrücklich eine digitale Signatur verlangt hat.** Manche Organisationen sind in die andere Richtung unterwegs und lehnen gescannte Bilder inzwischen ab. Lesen Sie die Anweisungen. Wenn sie ein kryptografisch signiertes PDF wollen, ist eine Datei in Scan-Optik die falsche Antwort.

**Wenn das Dokument maschinell verarbeitet wird.** Wenn das Empfangssystem OCR fährt, Felder extrahiert oder die Datei in einen Workflow einspielt, der markierbaren Text erwartet, wird ein rasterisiertes PDF in Scan-Optik diese Pipeline sprengen. Schicken Sie in dem Fall das editierbare PDF mit einer sauberen digitalen Signatur.

Daumenregel: Unterschreiben in Scan-Optik ist für die menschliche Prüfung menschenlesbarer Unterlagen. Es ist kein universeller Ersatz.

## FAQ

### Können Empfänger wirklich einen echten Scan von einem PDF in Scan-Optik unterscheiden?

Manchmal, und es hängt davon ab, wie sorgfältig die Effekte eingestellt wurden. Mit moderaten Einstellungen und einer echten Unterschrift (gezeichnet oder hochgeladen, nicht getippt) ist das Ergebnis für einen normalen Prüfer von einem echten Scan nicht zu unterscheiden. Forensische Untersuchung ist eine andere Frage, und für jede Situation, in der das zählt, ist dieser Workflow nicht geeignet.

### Ist das legal?

Ein unterschriebenes PDF in Scan-Optik hat dieselbe Rechtswirkung wie jede andere gescannte handschriftliche Unterschrift, die in den meisten Rechtsordnungen für gewöhnliche Verträge weithin anerkannt ist. Sie ist nicht gleichwertig zu einer qualifizierten elektronischen Signatur (eIDAS) oder einer digitalen Signatur nach dem ESIGN Act, die stärkere kryptografische Garantien bieten. Für Dokumente, die dieses Maß an Gewissheit verlangen, nutzen Sie einen qualifizierten E-Signatur-Anbieter.

### Ich habe schon DocuSign. Brauche ich das?

Wenn der Empfänger DocuSign-Envelopes annimmt, nehmen Sie DocuSign. Dieser Workflow ist genau für den Fall da, dass der Empfänger ein unterschriebenes PDF in Scan-Optik will und sonst nichts ihn zufriedenstellt.

### Kann ich das für Visum, Einwanderung oder konsularische Anträge nutzen?

In der Praxis tun viele Antragsteller das, weil solche Anträge typischerweise eine gescannte Kopie verlangen und keinen Pfad für digitale Signatur anbieten. Richten Sie sich nach dem, was der Antrag verlangt. Wenn die Anweisungen ausdrücklich verlangen, dass das Original vor einem Notar persönlich unterschrieben wird, ersetzt kein digitaler Workflow das.

### Braucht das einen physischen Scanner?

Nein. Das ist der Punkt. Der gesamte Workflow läuft im Browser. Die einzige Eingabe ist ein digitales PDF und eine Unterschrift, die Ausgabe ist ein PDF, das aussieht, als wäre es durch einen Scanner gelaufen.

### Wird die Unterschrift im finalen PDF editierbar sein?

Nein. Nachdem der Scan-Effekt angewendet wurde, wird die gesamte Seite zu einem Bild rasterisiert. Die Unterschrift wird Teil der Seite, genauso, als hätten Sie sie gedruckt, unterschrieben und gescannt. Sie lässt sich danach nicht mehr auswählen, verschieben oder bearbeiten. Wenn Sie später eine saubere, editierbare Kopie brauchen, heben Sie die Version vor dem Scan auf.

## Schlussgedanke

Die Person auf der anderen Seite dieser Mail testet Sie normalerweise nicht. Sie folgt einem Prozess, den jemand aufgeschrieben hat, bevor digitales Unterschreiben normal war. Sie will eine Datei, die zu dem passt, was sie zu prüfen gewohnt ist, und will mit ihrem Tag weitermachen.

Geben Sie ihr die Datei, die so aussieht, wie sie es verlangt hat, prüfen Sie sie vor dem Versenden, und behalten Sie den editierbaren Master für sich.

Das ist meistens die ganze Arbeit.
