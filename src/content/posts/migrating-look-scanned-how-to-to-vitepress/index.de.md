---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migration der Look Scanned How-To-Dokumentation zu VitePress mit verbesserter Sicherheit"
summary: "Erfahren Sie, wie Look Scanned seine Dokumentationsinfrastruktur durch Migration von Vue + Vite zu VitePress aktualisiert hat, während gleichzeitig npm Trusted Publishers mit OIDC für sichere, token-freie Paketveröffentlichungen implementiert wurden."
description: "Erfahren Sie, wie Look Scanned seine Dokumentationsinfrastruktur durch Migration von Vue + Vite zu VitePress aktualisiert hat, während gleichzeitig npm Trusted Publishers mit OIDC für sichere, token-freie Paketveröffentlichungen implementiert wurden."
tags: ["vitepress", "dokumentation", "sicherheit", "cicd", "npm"]
---

Bei [Look Scanned](https://lookscanned.io) verbessern wir ständig unsere Infrastruktur, um bessere Dokumentation und sicherere Entwicklungspraktiken bereitzustellen. Heute freuen wir uns, Details über ein bedeutendes Upgrade unserer How-To-Dokumentationsseite zu teilen: die Migration von einer benutzerdefinierten Vue + Vite-Anwendung zu VitePress, während gleichzeitig unsere CI/CD-Sicherheit mit npm Trusted Publishers verbessert wird.

## 📚 Warum wir zu VitePress migriert sind

Unsere How-To-Dokumentationsseite ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) dient als umfassender Nutzungsleitfaden für Look Scanned. Obwohl unser vorheriges Vue + Vite-Setup gut funktionierte, erkannten wir, dass VitePress eine bessere Wahl für eine inhaltsorientierte Dokumentationsseite wäre.

### Was ist VitePress?

VitePress ist ein statischer Site-Generator, der speziell für Dokumentation entwickelt wurde. Aufbauend auf Vite und Vue 3 kombiniert es das Beste aus beiden Welten: blitzschnelle Entwicklungserfahrung mit leistungsstarken Dokumentationsfunktionen out of the box.

### Hauptvorteile der Migration

**🎯 Bessere Architektur für Dokumentation**
- **Dateibasiertes Routing**: Jede Markdown-Datei wird automatisch zu einer Seite, wodurch die Inhaltsorganisation intuitiv wird
- **Integrierte Dokumentationsfunktionen**: Inhaltsverzeichnis, Suche, Internationalisierung und mehr sind vorkonfiguriert
- **Statische Site-Generierung**: Vorgerendertes HTML bietet hervorragendes SEO und sofortige Seitenladevorgänge

**⚡ Verbesserte Entwicklererfahrung**
- **Sofortiges Hot Reload**: Änderungen erscheinen sofort während der Entwicklung
- **Markdown zuerst**: Fokus auf Inhalt, nicht auf Komponenten-Scaffolding
- **Vue-Komponenten-Unterstützung**: Bei Bedarf können wir immer noch benutzerdefinierte Vue-Komponenten innerhalb von Markdown verwenden

**🔧 Einfachere Wartung**
- **Klarere Struktur**: Dokumentation folgt Konventionen, reduziert kognitive Belastung für Mitwirkende
- **Stabilere Builds**: VitePress' meinungsstarke Struktur führt zu reproduzierbareren Builds
- **Bessere Zusammenarbeit**: Teammitglieder können ohne tiefes Vue-Wissen zur Dokumentation beitragen

## 🔒 Verbesserte Sicherheit mit npm Trusted Publishers

Neben der VitePress-Migration haben wir eine kritische Sicherheitsverbesserung implementiert: **npm Trusted Publishers mit OIDC-Authentifizierung**.

### Das Problem mit traditionellen npm-Token

Früher erforderte das Veröffentlichen von Paketen in npm das Speichern eines langlebigen `NPM_TOKEN` in Repository-Secrets. Dieser Ansatz hat mehrere Nachteile:

- **Sicherheitsrisiko**: Token können versehentlich offengelegt oder kompromittiert werden
- **Verwaltungsaufwand**: Token benötigen manuelle Rotation und Updates
- **Audit-Herausforderungen**: Schwierig nachzuvollziehen, wer was und wann veröffentlicht hat

### Die Lösung: OIDC-basierte vertrauenswürdige Veröffentlichung

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) nutzt OpenID Connect (OIDC), um sichere, token-freie Veröffentlichung direkt von GitHub Actions zu ermöglichen. So funktioniert es:

1. **Keine gespeicherten Secrets**: Anstatt Token zu speichern, fordert GitHub Actions kurzlebige Anmeldeinformationen von npm an
2. **Identitätsüberprüfung**: npm überprüft, dass die Veröffentlichungsanfrage vom autorisierten GitHub-Repository kam
3. **Automatische Anmeldeinformationsverwaltung**: Anmeldeinformationen werden automatisch ausgestellt und laufen schnell ab

### Reale Vorteile

Diese Änderung bringt sofortige Verbesserungen für unseren Entwicklungsworkflow:

- ✅ **Keine Token-Verwaltung mehr**: Keine Notwendigkeit, npm-Token zu erstellen, zu speichern oder zu rotieren
- ✅ **Reduzierte Angriffsfläche**: Kurzlebige Anmeldeinformationen minimieren das Expositionsrisiko
- ✅ **Bessere Nachvollziehbarkeit**: Jede Veröffentlichungsaktion ist mit einem bestimmten GitHub Actions-Lauf verknüpft
- ✅ **Moderne Best Practices**: Entspricht Zero-Trust-Sicherheitsprinzipien

**Technischer Hinweis**: Um npm Trusted Publishers zu unterstützen, haben wir unsere CI-Konfiguration aktualisiert, um Node.js `lts/*` zu verwenden, um sicherzustellen, dass wir die neueste npm-Version haben, die für OIDC-Authentifizierung erforderlich ist.

## 📦 Release-Zeitplan

Die Migration wurde am 19. Dezember 2025 durch drei Releases abgeschlossen:

- **v2.0.0**: Kernmigration von Vue + Vite zu VitePress (Breaking Change)
- **v2.0.1**: CI-Fix zur Unterstützung von npm Trusted Publishers mit geeigneter Node.js-Version
- **v2.0.2**: Leistungsverbesserung durch Verschieben von `@fontsource/noto-mono` zu devDependencies

## 🌍 Fortgesetzte mehrsprachige Unterstützung

Ein wichtiger Hinweis: Unsere How-To-Dokumentation generiert mehrsprachige PDFs, die immer als Beispieldateien in der Haupt-Look-Scanned-Anwendung verwendet wurden (verfügbar unter [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Diese VitePress-Migration ändert diese Funktionalität nicht – sie bietet einfach eine bessere Grundlage für die Wartung und Verbesserung unserer Dokumentationsinfrastruktur.

## 💡 Was das für Benutzer bedeutet

Wenn Sie die Dokumentation von Look Scanned verwenden:

- **Gleicher Zugriff, bessere Erfahrung**: Dokumentation bleibt unter derselben URL mit verbessertem Laden und Navigation
- **Zuverlässiger**: Statische Site-Generierung bedeutet schnellere Ladevorgänge und bessere Stabilität
- **Bessere Suche und Entdeckung**: Die integrierte Suche von VitePress hilft Ihnen, Antworten schneller zu finden
- **Fortgesetzte PDF-Unterstützung**: Mehrsprachige PDF-Generierung wird wie zuvor fortgesetzt

## 🚀 Was kommt als Nächstes

Mit abgeschlossenem Infrastruktur-Upgrade konzentrieren wir uns auf Inhaltsverbesserungen:

- **Erweiterte Anwendungsfälle**: Mehr praktische Beispiele und Schritt-für-Schritt-Anleitungen
- **Konsistenzverbesserungen**: Verfeinerung mehrsprachiger Terminologie für mehr Klarheit
- **Verbesserter PDF-Export**: Verbesserung der browserübergreifenden PDF-Generierungserfahrung

## Probieren Sie Look Scanned heute aus

Look Scanned bietet browserbasierte, datenschutzorientierte PDF-Scan-Effekte, ohne Ihre Dateien irgendwo hochzuladen. Die verbesserte Dokumentation macht den Einstieg einfacher als je zuvor.

👉 **Besuchen Sie [lookscanned.io](https://lookscanned.io), um schnelles, sicheres Dokumenten-Scannen in Ihrem Browser zu erleben.**
