+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned poprawia wydajność o 60% dzięki ImageBitmap'
summary = 'Dowiedz się, jak Look Scanned optymalizuje swoją wydajność poprzez asynchroniczne dekodowanie i efektywne renderowanie z wykorzystaniem ImageBitmap, zachowując przy tym kompatybilność ze starszymi przeglądarkami.'
description = 'Dowiedz się, jak Look Scanned optymalizuje swoją wydajność poprzez asynchroniczne dekodowanie i efektywne renderowanie z wykorzystaniem ImageBitmap, zachowując przy tym kompatybilność ze starszymi przeglądarkami.'
tags = ['optymalizacja wydajności', 'imagebitmap', 'przetwarzanie obrazów', 'rozwój aplikacji webowych']
+++

Podczas tworzenia nowoczesnych aplikacji webowych, takich jak [Look Scanned](https://lookscanned.io), optymalizacja wydajności stanowi kluczowy priorytet. Jest to szczególnie istotne w kontekście przetwarzania obrazów. Interfejs `ImageBitmap`, choć nie jest jeszcze powszechnie stosowany, stanowi potężne narzędzie umożliwiające znaczącą poprawę wydajności. W tym artykule omawiamy główne funkcje `ImageBitmap`, jego zalety oraz nasze doświadczenia z wdrożenia w Look Scanned.

## Czym jest ImageBitmap?

`ImageBitmap` to interfejs HTML5 stworzony z myślą o wydajnym przetwarzaniu obrazów. Jego kluczową zaletą jest możliwość wykonywania dekodowania i przetwarzania obrazów poza głównym wątkiem, co znacząco redukuje obciążenie podczas renderowania i poprawia ogólną responsywność aplikacji. Utworzony obiekt `ImageBitmap` może być bezpośrednio wykorzystywany w kontekstach renderowania, takich jak Canvas 2D czy WebGL, co sprawia, że jest idealnym rozwiązaniem dla aplikacji operujących na dużej liczbie obrazów.

## Dlaczego zdecydowaliśmy się na ImageBitmap?

Początkowo w Look Scanned wykorzystywaliśmy `Blob` do przekazywania danych obrazów między funkcjami przetwarzającymi. Niestety, `Blob` wymaga kodowania i dekodowania przy każdym użyciu, co negatywnie wpływa na wydajność. Z kolei `ImageBitmap` zapewnia bezpośredni dostęp do danych obrazu, eliminując te dodatkowe operacje i znacząco poprawiając wydajność renderowania.

## Szczegóły wdrożenia

Ze względu na konieczność zachowania kompatybilności ze starszymi przeglądarkami, całkowite przejście na `ImageBitmap` nie wchodziło w grę. Dlatego opracowaliśmy hybrydowe podejście zapewniające szeroką kompatybilność. Szczegółowe informacje o wsparciu można znaleźć na [caniuse.com](https://caniuse.com/createimagebitmap). Dodatkowo, z powodu ograniczeń Safari w obsłudze Canvas, wykorzystujemy WebAssembly (WASM) do przetwarzania obrazów, co wymaga użycia `Blob` jako formatu wejściowego.

Uwzględniając te uwarunkowania, stworzyliśmy stopniowe rozwiązanie hybrydowe obsługujące zarówno `Blob`, jak i `ImageBitmap`. Oto kluczowe elementy implementacji:

### Ładowanie i dekodowanie obrazów

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Fallback do Blob
  return blob;
}
```

### Integracja z WebAssembly

W przypadku zaawansowanego przetwarzania, przekazujemy `Blob` do modułu WASM, co zapewnia funkcjonalność w przeglądarkach bez obsługi `ImageBitmap`. W tym procesie najpierw renderujemy obraz na Canvas, a następnie wykorzystujemy `canvas.toBlob` do utworzenia wymaganego obiektu `Blob`.

### Alternatywny system renderowania

```typescript
async function renderImage(canvas, imageUrl) {
  const ctx = canvas.getContext("2d");
  const image = await loadImage(imageUrl);
  if (image instanceof ImageBitmap) {
    ctx.drawImage(image, 0, 0);
  } else {
    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.onload = () => ctx.drawImage(img, 0, 0);
  }
}
```

## Uzyskane rezultaty

Wdrożenie `ImageBitmap` pozwoliło skrócić czas przetwarzania obrazów w Look Scanned z 50 ms do 20 ms na obraz. Poprawa jest szczególnie widoczna przy przetwarzaniu skanowanych dokumentów, zapewniając znacznie płynniejsze i szybsze działanie aplikacji.

## Ciekawe spostrzeżenia

Podczas wdrożenia dokonaliśmy interesującego odkrycia: utworzenie nowej kopii `ImageBitmap` przed przekazaniem jej do Web Workera zapewnia lepszą wydajność niż bezpośrednie przekazanie oryginalnego obiektu. Najprawdopodobniej wynika to z wewnętrznych optymalizacji przeglądarki dla obiektów przenośnych.

## Wsparcie w przeglądarkach

Obecnie `ImageBitmap` jest szeroko wspierany we wszystkich głównych nowoczesnych przeglądarkach, włączając najnowsze wersje Chrome, Firefox, Edge i Safari. Szczegółowe informacje o kompatybilności znajdują się w [dokumentacji `createImageBitmap` na caniuse.com](https://caniuse.com/createimagebitmap).

## Podsumowanie i perspektywy

Wdrożenie `ImageBitmap` w Look Scanned nie tylko przyniosło znaczącą poprawę wydajności, ale również umożliwiło asynchroniczne dekodowanie, efektywne renderowanie i lepszą integrację z Web Workers. Choć wsparcie dla `Blob` pozostaje niezbędne dla starszych przeglądarek, stopniowe przechodzenie na `ImageBitmap` będzie przynosić coraz większe korzyści w dłuższej perspektywie.

Wypróbuj ulepszenia wydajności na własną rękę na [Look Scanned](https://lookscanned.io)!
