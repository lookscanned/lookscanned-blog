---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "So entfernen Sie Metadaten aus einer PDF vor dem Teilen"
summary: "Ihre PDF kann versteckte Metadaten enthalten, die verraten, wer Sie sind, welche Software Sie verwendet haben und wann Sie daran gearbeitet haben. Hier erfahren Sie, was Sie prüfen sollten, wie Sie Metadaten entfernen und wann die Konvertierung in eine scan-artige PDF gründlicher ist als jeder Metadaten-Editor."
description: "Ihre PDF kann versteckte Metadaten enthalten, die verraten, wer Sie sind, welche Software Sie verwendet haben und wann Sie daran gearbeitet haben. Hier erfahren Sie, was Sie prüfen sollten, wie Sie Metadaten entfernen und wann die Konvertierung in eine scan-artige PDF gründlicher ist als jeder Metadaten-Editor."
tags: ["PDF", "Datenschutz", "Metadaten", "Dokumentensicherheit", "sensible Dokumente"]
keywords:
  - "how to remove metadata from pdf"
  - "pdf metadata privacy risk"
  - "remove pdf metadata before sharing"
  - "check pdf metadata"
  - "hidden data in pdf"
  - "pdf metadata removal tool"
---

Letzte Woche habe ich die Metadaten einer PDF überprüft, die ich gerade versenden wollte. Sie enthielt immer noch meinen vollständigen Namen, den internen Dateipfad meines Unternehmens und den exakten Zeitstempel jeder Überarbeitung, die ich im vergangenen Monat vorgenommen hatte.

Die Seite sah sauber aus. Die Datei war es nicht.

Die meisten Menschen öffnen nie das Eigenschaftsfenster einer PDF, bevor sie sie teilen. Der sichtbare Inhalt bekommt die ganze Aufmerksamkeit. Aber die Datei selbst kann viel mehr verraten als das, was auf der Seite steht, und genau um diese verborgene Ebene geht es in diesem Beitrag.

## Die kurze Antwort

PDF-Metadaten können Ihren Namen, die verwendete Software, Erstellungs- und Änderungszeitstempel, Überarbeitungshistorie, Kommentare und sogar GPS-Koordinaten aus eingebetteten Bildern enthalten.

Um sie zu entfernen, haben Sie mehrere Möglichkeiten:

- Verwenden Sie einen Metadaten-Editor oder ein Bereinigungstool, um bestimmte Felder zu entfernen
- Verwenden Sie ein Kommandozeilentool wie exiftool für volle Kontrolle
- Konvertieren Sie die PDF in eine scan-artige, bildbasierte Datei, die die gesamte Dokumentstruktur ersetzt und alle versteckten Daten auf einmal entfernt

Wenn das Dokument endgültig ist und Ihre Organisation verlässt, ist die letzte Option der gründlichste einzelne Schritt, den Sie unternehmen können.

## Was PDF-Metadaten tatsächlich enthalten

Eine PDF kann drei Informationsebenen jenseits des auf der Seite Sichtbaren enthalten.

Die erste Ebene sind **Dokumenteigenschaften**. Das sind die Metadaten, an die die meisten Menschen denken: Autorenname, Titel, Betreff, Erstellungsdatum, Änderungsdatum und die Software, die die Datei erstellt hat. Öffnen Sie eine beliebige PDF in einem Viewer, überprüfen Sie Datei > Eigenschaften, und Sie werden wahrscheinlich Felder wie "Autor: Jana Schmidt" und "Erzeuger: Microsoft Word 2021" sehen. Diese Informationen reisen mit der Datei, wohin sie auch geht.

Die zweite Ebene sind **XMP- und eingebettete Metadaten**. Diese sind weniger sichtbar, aber oft aufschlussreicher. Wenn Ihre PDF eingebettete Bilder enthält, können diese Bilder noch ihre originalen EXIF-Daten tragen, einschließlich Kameramodell, Zeitstempel und GPS-Koordinaten. XMP-Metadaten können auch Bearbeitungshistorie, benutzerdefinierte Tags und Schriftlizenzinformationen enthalten. Die meisten Menschen wissen nicht, dass diese Ebene existiert, weil Standard-PDF-Viewer sie nicht anzeigen.

Die dritte Ebene sind **versteckte Strukturdaten**. Je nachdem, wie die PDF erstellt und bearbeitet wurde, kann die Datei Überarbeitungshistorie, gelöschten-aber-wiederherstellbaren Text, Kommentare, Anmerkungen, Formularfeld-Standardwerte, versteckte Ebenen, JavaScript und eingebettete Dateianhänge enthalten. Dies ist die Ebene, die den größten Schaden anrichtet, wenn sie nach außen dringt, weil sie Inhalte enthalten kann, die der Autor für gelöscht hielt.

Wenn Sie bereits über diese Art versteckter Daten im Zusammenhang mit dem Hochladen von Dateien auf Web-Tools nachgedacht haben, behandelt [Ist es sicher, Online-PDF-Tools für sensible Dokumente zu verwenden?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) das umfassendere Vertrauensmodell.

## Warum das wichtiger ist, als die meisten denken

Metadaten-Lecks sind nicht dramatisch. Sie sind leise, spezifisch und schwer rückgängig zu machen, sobald die Datei geteilt wurde.

**Autorenidentifikation, wenn Anonymität wichtig ist.** Wenn die PDF von einer bestimmten Person erstellt wurde, kann das Autorenfeld oder der interne Dateipfad auf sie zurückführen. Das ist relevant für Whistleblower, anonyme Berichte, geleakte Dokumente oder jede Situation, in der die Identität des Absenders aus der Datei herausbleiben soll.

**Überarbeitungshistorie enthüllt Verhandlungsstrategie.** Eine Vertrags-PDF, die noch nachverfolgte Änderungen oder Überarbeitungsmetadaten enthält, kann Ihre Ausgangsposition offenlegen, was Sie gelöscht und was Sie abgemildert haben, bevor Sie die endgültige Version gesendet haben. Die Gegenseite muss nicht technisch versiert sein, um darauf zu stoßen. Manche PDF-Viewer zeigen Überarbeitungsdaten automatisch an.

**Zeitstempel enthüllen sensibles Timing.** Erstellungs- und Änderungsdaten verraten jemandem, wann das Dokument begonnen wurde, wann es zuletzt geändert wurde und wie oft es bearbeitet wurde. In rechtlichen, Compliance- oder Wettbewerbskontexten kann diese Art von Zeitinformation wichtiger sein als der Inhalt selbst.

**GPS-Koordinaten aus eingebetteten Bildern.** Wenn Sie ein Foto in die PDF eingefügt haben und dieses Foto noch EXIF-Standortdaten enthält, sind die GPS-Koordinaten des Aufnahmeorts nun in der Datei eingebettet. Die meisten Menschen denken nicht daran, weil die Metadaten im Bildobjekt leben und nicht im PDF-Eigenschaftsfenster.

**Softwareversionen verraten interne Tools.** Felder wie "Erzeuger: Adobe Acrobat Pro DC 24.1.30225" oder "Ersteller: Microsoft Word für Microsoft 365" verraten jemandem, welche Tools und Versionen Ihre Organisation verwendet. Für die meisten Dokumente ist das trivial. In sensiblen Kontexten ist es ein unnötiges Informationsleck.

Nichts davon ist hypothetisch. Das sind die langweiligen Metadaten-Lecks, die tatsächlich passieren.

## So überprüfen Sie, welche Metadaten Ihre PDF enthält

Bevor Sie etwas entfernen, schauen Sie sich an, was tatsächlich in der Datei steckt.

**Eigenschaftsdialog des PDF-Viewers.** In den meisten PDF-Readern zeigt Datei > Eigenschaften oder Dokumenteigenschaften die grundlegenden Felder: Autor, Titel, Betreff, Erstellungsdatum, Änderungsdatum und Erzeugeranwendung. Das erfasst die erste Ebene, verpasst aber fast alles andere.

**exiftool auf der Kommandozeile.** Wenn Sie `exiftool dokument.pdf` ausführen, sehen Sie alles: Dokumenteigenschaften, XMP-Daten, eingebettete Bild-EXIF-Daten und benutzerdefinierte Felder. Das ist die vollständigste Inspektionsmethode, erfordert aber Vertrautheit mit dem Terminal. Wenn Sie es noch nie benutzt haben, lohnt sich die Installation allein schon, um zu sehen, was eine einzelne PDF enthalten kann.

**Online-Metadaten-Viewer.** Einige Websites ermöglichen es Ihnen, eine PDF hochzuladen, um ihre Metadaten zu inspizieren. Wenn der Grund für Ihre Metadatenprüfung der Datenschutz ist, ist das Hochladen der Datei bei einem Drittanbieter zur Inspektion ein fragwürdiger Schritt. Sie versuchen herauszufinden, ob die Datei Informationen preisgibt, und der erste Schritt besteht darin, sie an einen Fremden zu senden.

Sobald Sie wissen, was in der Datei steckt, stellt sich die Frage, wie Sie es entfernen.

## Methoden zur Entfernung von PDF-Metadaten

Es gibt keine einzelne beste Methode. Die richtige Wahl hängt davon ab, was Sie behalten müssen und wie gründlich Sie sein müssen.

### Adobe Acrobat (Dokument bereinigen)

Acrobat Pro enthält die Funktionen "Versteckte Informationen entfernen" und "Dokument bereinigen", die Metadaten, versteckten Text, Kommentare, Formulardaten, Anhänge und andere nicht sichtbare Inhalte entfernen können. Das ist einer der vollständigsten Ansätze, wenn Sie die Textebene intakt und die Datei durchsuchbar halten müssen.

Die Einschränkung ist, dass eine kostenpflichtige Acrobat-Pro-Lizenz erforderlich ist. Wenn Sie diese bereits haben, ist das eine starke Option. Wenn nicht, ist dies nicht die Art von Problem, die das Abonnement allein rechtfertigt.

### exiftool und andere CLI-Tools

exiftool kann gezielt bestimmte Metadatenfelder entfernen oder alles aus einer PDF in einem einzigen Befehl strippen. Es ist kostenlos, läuft auf jeder Plattform und gibt präzise Kontrolle darüber, was genau entfernt wird.

Die Einschränkung ist die technische Hürde. Außerdem konzentriert es sich auf Metadatenfelder statt auf versteckte Strukturdaten. Wenn die PDF Überarbeitungshistorie, versteckte Ebenen oder eingebettete Objekte enthält, wird exiftool diese nicht erfassen. Es ist hervorragend in dem, was es tut, deckt aber nicht jede Ebene ab.

### Online-Tools zur Metadatenentfernung

Mehrere Websites ermöglichen es Ihnen, eine PDF hochzuladen, die Metadaten zu entfernen und die bereinigte Version herunterzuladen. Der Ablauf ist einfach und erfordert keine Softwareinstallation.

Die Einschränkung sollte offensichtlich sein. Sie laden ein Dokument auf einen Server eines Drittanbieters hoch, um ein Datenschutzproblem zu lösen. Das ist ein bisschen so, als würden Sie Ihr Tagebuch einem Fremden geben, damit er die Seite mit Ihrer Adresse herausreißen kann.

Wenn die Datei risikoarm ist, mag das ein akzeptabler Kompromiss sein. Wenn Sie Metadaten entfernen, weil das Dokument sensibel ist, führt dieser Ansatz genau die Art von Offenlegung ein, die Sie zu vermeiden versuchen. Mehr zu diesem Kompromiss finden Sie in [Ist es sicher, Online-PDF-Tools für sensible Dokumente zu verwenden?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/)

### Als PDF drucken

Das erneute Drucken einer PDF über einen virtuellen Drucker erstellt eine neue Datei, die oft einige Metadaten entfernt und bestimmte Elemente abflacht. Es ist kostenlos und in den meisten Betriebssystemen integriert.

Die Ergebnisse sind inkonsistent. Manche virtuellen Drucker fügen der Ausgabe ihre eigenen Metadaten hinzu. Manche entfernen XMP-Daten, andere nicht. Eingebettete Bild-EXIF-Daten können den Roundtrip überleben oder auch nicht. Wenn Sie diese Methode verwenden, überprüfen Sie immer das Ergebnis, anstatt anzunehmen, dass es sauber ist.

### Konvertierung in eine scan-artige PDF

Dieser Ansatz konvertiert jede Seite der PDF in ein Bild und verpackt diese Bilder dann in eine neue PDF. Da die gesamte Dokumentstruktur ersetzt wird, werden alle versteckten Daten entfernt: Metadaten, Textebenen, Kommentare, Überarbeitungshistorie, eingebettete Dateien, Formularfelder, JavaScript, alles. Die Ausgabe ist eine neue PDF, die nur gerenderte Seitenbilder enthält.

Der Kompromiss ist, dass die Datei nicht mehr textdurchsuchbar ist. Sie verhält sich wie ein Bild jeder Seite. Für Dokumente, die endgültig sind und Ihre Organisation verlassen, ist dieser Kompromiss oft lohnend. Für Dokumente, die noch durchsucht, zitiert oder nachbearbeitet werden müssen, ist er es nicht.

Genau das erledigt [Look Scanned](https://lookscanned.io). Es konvertiert die PDF lokal in Ihrem Browser in eine scan-artige Version, sodass die Datei Ihr Gerät nie verlässt. Das Ergebnis ist eine saubere, bildbasierte PDF ohne versteckte Daten, ohne Textebenen, ohne Metadaten des Originals und ohne serverseitige Verarbeitung, über die Sie sich Sorgen machen müssen.

## Vergleich

| Methode | Entfernt Dokumenteigenschaften | Entfernt versteckte Ebenen | Entfernt Bild-EXIF | Behält Textdurchsuchbarkeit | Erfordert Upload | Kosten |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Bereinigen) | Ja | Ja | Abhängig von Einstellungen | Ja | Nein | Kostenpflichtig |
| exiftool / CLI | Ja | Teilweise | Ja | Ja | Nein | Kostenlos |
| Online-Metadaten-Tools | Meistens | Meistens nicht | Manchmal | Ja | Ja | Kostenlos |
| Als PDF drucken | Teilweise | Teilweise | Manchmal | Meistens | Nein | Kostenlos |
| Scan-Konvertierung (z.B. Look Scanned) | Ja | Ja | Ja | Nein | Nein (lokaler Browser) | Kostenlos |

Keine einzelne Zeile ist perfekt für jede Situation. Die Frage ist immer, welche Kompromisse für diese spezifische Datei relevant sind.

## Wann welcher Ansatz sinnvoll ist

**Das Dokument wird noch bearbeitet.** Entfernen Sie Metadaten mit Acrobat oder exiftool. Behalten Sie die Textebene. Metadatenentfernung ist in dieser Phase Routinepflege, nicht die Hauptsache.

**Das Dokument ist endgültig und verlässt Ihre Organisation.** Wenn Durchsuchbarkeit nicht kritisch ist, ist eine Scan-Konvertierung der gründlichste einzelne Schritt. Sie entfernt alles in einem Durchgang. Wenn die Datei weiterhin durchsuchbar sein muss, verwenden Sie stattdessen die Bereinigungsfunktion von Acrobat und überprüfen Sie das Ergebnis.

**Das Dokument ist hochsensibel.** Kombinieren Sie Ansätze. Führen Sie zuerst eine ordnungsgemäße Schwärzung durch, dann die Metadatenbereinigung und dann eine abschließende Scan-Konvertierung. Jeder Schritt deckt eine andere Ebene ab. Wenn die Schwärzung Teil Ihres Workflows ist, erklärt [Schwarze Balken sind keine Schwärzung](../black-bars-arent-redaction-pdf-redaction-checklist/), warum visuelles Maskieren nicht ausreicht.

**Sie sind sich nicht sicher, was in der Datei steckt.** Überprüfen Sie zuerst mit exiftool oder dem Eigenschaftsfenster. Entscheiden Sie dann basierend auf dem, was Sie finden, und wohin die Datei geht. Eine Entfernungsmethode zu wählen, bevor man versteht, was entfernt werden muss, führt entweder zu Übertreibung oder zu übersehenen Daten.

Wenn Sie abwägen, ob eine scan-artige PDF das richtige Format für Ihre Situation ist, behandelt [Gescannte PDF vs. bearbeitbare PDF: Welche sollten Sie senden?](../scanned-pdf-vs-editable-pdf/) diese Entscheidung umfassender.

## Der Workflow, den ich tatsächlich verwende

1. Zuerst den Dokumentinhalt fertigstellen. Keine Metadaten bei einer Datei bereinigen, die sich noch ändert.
2. Die Metadaten des endgültigen Exports überprüfen. Mindestens Datei > Eigenschaften. exiftool, wenn es darauf ankommt.
3. Basierend auf dem Gefundenen und der Sensibilität des Ziels entfernen oder bereinigen.
4. Wenn die Datei nach außen geht und nicht durchsuchbar sein muss, konvertiere ich sie in eine scan-artige PDF. [Look Scanned](https://lookscanned.io) erledigt diesen Schritt im Browser, ohne die Datei hochzuladen.
5. Das Ergebnis in einem frischen Viewer öffnen und überprüfen. Eigenschaften prüfen, versuchen Text zu markieren, nach Begriffen suchen, die verschwunden sein sollten.

Dieser letzte Schritt fängt mehr übrig gebliebene Daten auf, als die meisten erwarten.

Wenn das Abflachen für Ihre Situation ausreicht und Sie die vollständige Scan-Konvertierung nicht benötigen, behandelt [Wie man eine PDF vor dem Senden abflacht](../how-to-flatten-a-pdf-before-sending/) diesen Mittelweg.

## FAQ

### Entfernt die Konvertierung in eine gescannte PDF alle Metadaten?

Ja. Die Konvertierung in eine bildbasierte PDF ersetzt die gesamte Dateistruktur. Das Ergebnis enthält keine Textebene, keine versteckten Objekte, keine Dokumenteigenschaften des Originals und keine eingebetteten Dateimetadaten. Die Ausgabe ist eine neue PDF, die nur gerenderte Seitenbilder enthält.

### Kann jemand Metadaten aus einer scan-artigen PDF wiederherstellen?

Nicht aus der PDF selbst. Die ursprüngliche Struktur ist weg. Die einzigen Metadaten in der neuen Datei sind das, was das Konvertierungstool schreibt, wie etwa sein eigenes Erzeuger-Tag. Wenn die Konvertierung lokal im Browser stattfindet, existiert auch keine serverseitige Kopie.

### Ist das Entfernen von Metadaten dasselbe wie Schwärzung?

Nein. Die Metadatenentfernung entfernt versteckte Eigenschaften und Daten auf Dokumentebene. Die Schwärzung entfernt sichtbare Inhalte von der Seite. Wenn Sie Namen, Nummern oder Text von der Seite selbst entfernen müssen, ist das ein separater Schritt, der vor der Metadatenbereinigung erfolgen muss. [Schwarze Balken sind keine Schwärzung](../black-bars-arent-redaction-pdf-redaction-checklist/) erklärt, warum visuelles Maskieren allein nicht ausreicht.

### Sollte ich Metadaten aus jeder PDF entfernen, die ich sende?

Nicht unbedingt. Bei routinemäßigen Dokumenten, die bereits öffentlich oder risikoarm sind, sind Metadaten harmlos. Die Frage wird wichtig, wenn das Dokument sensibel ist, der Empfänger extern ist oder die Autorenidentität aus der Datei herausbleiben soll.

## Abschließender Gedanke

Die meisten Menschen überprüfen nie, was ihre PDF über sie verrät, bevor sie sie senden.

Die Datei könnte sauber sein. Oder sie könnte Ihren Namen, Ihre Überarbeitungshistorie und die GPS-Koordinaten des Cafes enthalten, in dem Sie sie letzten Dienstag bearbeitet haben.

Wenn das Dokument wichtig genug ist, um sorgfältig geteilt zu werden, ist es wichtig genug, um es zu überprüfen. Und wenn die Überprüfung mehr enthüllt als erwartet, gibt es unkomplizierte Wege, es zu beheben, bevor Sie auf Senden klicken.
