---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migracja dokumentacji Look Scanned How-To do VitePress z poprawioną bezpieczeństwem"
summary: "Odkryj, jak Look Scanned ulepszył swoją infrastrukturę dokumentacji, migrując z Vue + Vite do VitePress, jednocześnie wdrażając npm Trusted Publishers z OIDC dla bezpiecznych wydań pakietów bez tokenów."
description: "Odkryj, jak Look Scanned ulepszył swoją infrastrukturę dokumentacji, migrując z Vue + Vite do VitePress, jednocześnie wdrażając npm Trusted Publishers z OIDC dla bezpiecznych wydań pakietów bez tokenów."
tags: ["vitepress", "dokumentacja", "bezpieczeństwo", "cicd", "npm"]
---

W [Look Scanned](https://lookscanned.io) nieustannie ulepszamy naszą infrastrukturę, aby zapewnić lepszą dokumentację i bezpieczniejsze praktyki programistyczne. Dzisiaj z radością dzielimy się szczegółami dotyczącymi znaczącej aktualizacji naszej strony dokumentacji How-To: migracji z niestandardowej aplikacji Vue + Vite do VitePress, jednocześnie wzmacniając nasze bezpieczeństwo CI/CD za pomocą npm Trusted Publishers.

## 📚 Dlaczego przenieśliśmy się do VitePress

Nasza strona dokumentacji How-To ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) służy jako kompleksowy przewodnik użytkownika dla Look Scanned. Chociaż nasze poprzednie ustawienie Vue + Vite działało dobrze, uznaliśmy, że VitePress będzie lepszym wyborem dla strony dokumentacji zorientowanej na treść.

### Czym jest VitePress?

VitePress to generator statycznych stron specjalnie zaprojektowany dla dokumentacji. Zbudowany na bazie Vite i Vue 3, łączy w sobie to, co najlepsze z obu światów: błyskawiczne doświadczenie programistyczne z potężnymi funkcjami dokumentacji dostępnymi od razu.

### Główne korzyści z migracji

**🎯 Lepsza architektura dla dokumentacji**
- **Routing oparty na plikach**: Każdy plik markdown automatycznie staje się stroną, czyniąc organizację treści intuicyjną
- **Wbudowane funkcje dokumentacji**: Spis treści, wyszukiwanie, internacjonalizacja i więcej jest wstępnie skonfigurowanych
- **Generowanie statycznej strony**: Wstępnie renderowany HTML zapewnia doskonałe SEO i natychmiastowe ładowanie stron

**⚡ Ulepszone doświadczenie programisty**
- **Natychmiastowe przeładowanie na gorąco**: Zmiany pojawiają się natychmiast podczas programowania
- **Markdown na pierwszym miejscu**: Skup się na treści, a nie na szkielecie komponentów
- **Wsparcie dla komponentów Vue**: Gdy jest to potrzebne, nadal możemy używać niestandardowych komponentów Vue w markdown

**🔧 Łatwiejsza konserwacja**
- **Jaśniejsza struktura**: Dokumentacja podąża za konwencjami, zmniejszając obciążenie poznawcze dla współtwórców
- **Bardziej stabilne buildy**: Zdecydowana struktura VitePress prowadzi do bardziej powtarzalnych buildów
- **Lepsza współpraca**: Członkowie zespołu mogą przyczyniać się do dokumentacji bez głębokiej wiedzy o Vue

## 🔒 Zwiększone bezpieczeństwo dzięki npm Trusted Publishers

Wraz z migracją VitePress wdrożyliśmy krytyczne ulepszenie bezpieczeństwa: **npm Trusted Publishers wykorzystujące uwierzytelnianie OIDC**.

### Problem z tradycyjnymi tokenami npm

Wcześniej publikowanie pakietów do npm wymagało przechowywania długowiecznego `NPM_TOKEN` w sekretach repozytorium. To podejście ma kilka wad:

- **Ryzyko bezpieczeństwa**: Tokeny mogą zostać przypadkowo ujawnione lub skompromitowane
- **Narzut zarządzania**: Tokeny wymagają ręcznej rotacji i aktualizacji
- **Wyzwania audytowe**: Trudno śledzić, kto co i kiedy opublikował

### Rozwiązanie: Zaufane publikowanie oparte na OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) wykorzystuje OpenID Connect (OIDC), aby umożliwić bezpieczne publikowanie bez tokenów bezpośrednio z GitHub Actions. Oto jak to działa:

1. **Brak przechowywanych sekretów**: Zamiast zapisywać tokeny, GitHub Actions żąda krótkotrwałych poświadczeń od npm
2. **Weryfikacja tożsamości**: npm weryfikuje, że żądanie publikacji pochodziło z autoryzowanego repozytorium GitHub
3. **Automatyczne zarządzanie poświadczeniami**: Poświadczenia są automatycznie wydawane i szybko wygasają

### Korzyści w prawdziwym świecie

Ta zmiana przynosi natychmiastowe ulepszenia naszego przepływu pracy programistycznej:

- ✅ **Koniec z zarządzaniem tokenami**: Nie ma potrzeby tworzenia, przechowywania lub rotacji tokenów npm
- ✅ **Zmniejszona powierzchnia ataku**: Krótkotrwałe poświadczenia minimalizują ryzyko ekspozycji
- ✅ **Lepsza możliwość audytu**: Każda akcja publikacji jest powiązana z konkretnym uruchomieniem GitHub Actions
- ✅ **Nowoczesne najlepsze praktyki**: Zgodne z zasadami bezpieczeństwa zero-trust

**Uwaga techniczna**: Aby obsługiwać npm Trusted Publishers, zaktualizowaliśmy naszą konfigurację CI, aby używać Node.js `lts/*`, zapewniając, że mamy najnowszą wersję npm wymaganą do uwierzytelniania OIDC.

## 📦 Harmonogram wydań

Migracja została ukończona poprzez trzy wydania 19 grudnia 2025:

- **v2.0.0**: Główna migracja z Vue + Vite do VitePress (breaking change)
- **v2.0.1**: Poprawka CI wspierająca npm Trusted Publishers z odpowiednią wersją Node.js
- **v2.0.2**: Poprawa wydajności poprzez przeniesienie `@fontsource/noto-mono` do devDependencies

## 🌍 Ciągłe wsparcie wielojęzyczne

Ważna uwaga: nasza dokumentacja How-To generuje wielojęzyczne PDF-y, które zawsze były używane jako pliki przykładowe w głównej aplikacji Look Scanned (dostępne na [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Ta migracja VitePress nie zmienia tej funkcjonalności—po prostu zapewnia lepszą podstawę do utrzymywania i ulepszania naszej infrastruktury dokumentacji.

## 💡 Co to oznacza dla użytkowników

Jeśli korzystasz z dokumentacji Look Scanned:

- **Ten sam dostęp, lepsze doświadczenie**: Dokumentacja pozostaje pod tym samym adresem URL z ulepszonym ładowaniem i nawigacją
- **Bardziej niezawodna**: Generowanie statycznej strony oznacza szybsze ładowanie i lepszą stabilność
- **Lepsze wyszukiwanie i odkrywanie**: Wbudowane wyszukiwanie VitePress pomaga szybciej znaleźć odpowiedzi
- **Kontynuacja wsparcia PDF**: Generowanie wielojęzycznych PDF-ów trwa jak wcześniej

## 🚀 Co dalej

Po zakończeniu modernizacji infrastruktury skupiamy się na ulepszeniach treści:

- **Rozszerzone przypadki użycia**: Więcej praktycznych przykładów i przewodników krok po kroku
- **Ulepszenia spójności**: Dopracowywanie wielojęzycznej terminologii dla przejrzystości
- **Ulepszony eksport PDF**: Poprawa doświadczenia generowania PDF w różnych przeglądarkach

## Wypróbuj Look Scanned już dziś

Look Scanned zapewnia oparte na przeglądarce, priorytetowo traktujące prywatność efekty skanowania PDF bez przesyłania plików gdziekolwiek. Ulepszona dokumentacja sprawia, że rozpoczęcie pracy jest łatwiejsze niż kiedykolwiek.

👉 **Odwiedź [lookscanned.io](https://lookscanned.io), aby doświadczyć szybkiego, bezpiecznego skanowania dokumentów w przeglądarce.**
