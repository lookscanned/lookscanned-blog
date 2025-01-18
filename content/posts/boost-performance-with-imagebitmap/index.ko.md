+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'ImageBitmap 적용으로 Look Scanned 성능 60% 개선'
summary = 'ImageBitmap을 활용한 비동기 디코딩과 효율적인 렌더링으로 Look Scanned의 성능을 최적화하고, 레거시 브라우저와의 호환성도 확보한 구현 방법을 소개합니다.'
description = 'ImageBitmap을 활용한 비동기 디코딩과 효율적인 렌더링으로 Look Scanned의 성능을 최적화하고, 레거시 브라우저와의 호환성도 확보한 구현 방법을 소개합니다.'
tags = ['성능 최적화', 'imagebitmap', '이미지 처리', '웹 개발']
+++

[Look Scanned](https://lookscanned.io)와 같은 모던 웹 애플리케이션 개발에서 성능 최적화는 가장 중요한 과제 중 하나입니다. 특히 이미지 처리 영역에서는 그 중요성이 더욱 두드러집니다. `ImageBitmap` 인터페이스는 아직 널리 활용되지는 않았지만, 획기적인 성능 향상을 실현할 수 있는 강력한 도구입니다. 이 글에서는 `ImageBitmap`의 핵심 기능, 장점, 그리고 Look Scanned에서의 구현 사례를 상세히 설명하겠습니다.

## ImageBitmap 소개

`ImageBitmap`은 효율적인 이미지 처리를 위해 설계된 HTML5 인터페이스입니다. 가장 큰 특징은 메인 스레드 외부에서 이미지 디코딩과 처리가 가능하다는 점입니다. 이를 통해 렌더링 부하를 크게 줄이고 애플리케이션의 전반적인 반응성을 개선할 수 있습니다. 생성된 `ImageBitmap` 객체는 Canvas 2D나 WebGL 같은 렌더링 컨텍스트에서 바로 사용할 수 있어, 이미지를 많이 다루는 애플리케이션에 이상적인 선택입니다.

## ImageBitmap 도입 배경

기존 Look Scanned는 처리 함수 간 이미지 데이터 전달에 `Blob`을 사용했습니다. 그러나 `Blob`은 사용할 때마다 인코딩과 디코딩이 필요해 성능상 제약이 있었습니다. 반면 `ImageBitmap`은 이미지 데이터에 직접 접근할 수 있어, 이러한 불필요한 작업을 제거함으로써 렌더링 성능을 획기적으로 개선할 수 있습니다.

## 구현 방식

레거시 브라우저와의 호환성 유지가 필요하여, 완전한 `ImageBitmap` 전환은 현실적이지 않았습니다. 따라서 폭넓은 브라우저 호환성을 보장하는 하이브리드 접근 방식을 선택했습니다. 호환성 상세 정보는 [caniuse.com](https://caniuse.com/createimagebitmap)에서 확인하실 수 있습니다. 또한, Safari의 Canvas 지원 제약으로 인해 이미지 처리에 WebAssembly (WASM)를 활용하며, 이는 입력 형식으로 `Blob`이 필요합니다.

이러한 환경을 고려하여 `Blob`과 `ImageBitmap`을 모두 지원하는 점진적인 하이브리드 솔루션을 개발했습니다. 주요 구현 내용은 다음과 같습니다:

### 이미지 로딩 및 디코딩 처리

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Blob 방식으로 대체
  return blob;
}
```

### WebAssembly 연동

고도화된 처리를 위해 `ImageBitmap` 미지원 브라우저에서도 동작하도록 `Blob`을 WASM 모듈로 전달합니다. 이 과정에서 먼저 이미지를 Canvas에 렌더링한 후 `canvas.toBlob`을 통해 필요한 `Blob` 객체를 생성합니다.

### 대체 렌더링 구현

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

## 성능 개선 효과

`ImageBitmap` 도입으로 Look Scanned의 이미지 처리 시간이 이미지당 50ms에서 20ms로 대폭 단축되었습니다. 이러한 개선으로 특히 스캔 문서 처리 시 훨씬 더 빠르고 쾌적한 사용자 경험을 제공할 수 있게 되었습니다.

## 주목할 만한 발견 사항

구현 과정에서 흥미로운 점을 발견했습니다. Web Worker로 전송하기 전에 새로운 `ImageBitmap` 복사본을 생성하는 것이 원본 객체를 직접 전송하는 것보다 더 우수한 성능을 보였습니다. 이는 브라우저의 전송 가능 객체에 대한 내부 최적화 메커니즘 때문인 것으로 분석됩니다.

## 브라우저 지원 상태

현재 `ImageBitmap`은 Chrome, Firefox, Edge, Safari 등 주요 모던 브라우저에서 광범위하게 지원됩니다. 자세한 지원 현황은 [caniuse.com의 `createImageBitmap` 문서](https://caniuse.com/createimagebitmap)에서 확인하실 수 있습니다.

## 결론 및 향후 계획

Look Scanned에 `ImageBitmap`을 도입함으로써 성능이 획기적으로 개선되었을 뿐만 아니라, 비동기 디코딩, 효율적인 렌더링, Web Workers와의 원활한 연동도 실현했습니다. 레거시 브라우저를 위한 `Blob` 지원은 당분간 유지해야 하지만, `ImageBitmap`으로의 점진적인 전환은 장기적으로 큰 가치를 창출할 것으로 확신합니다.

[Look Scanned](https://lookscanned.io)에서 직접 개선된 성능을 경험해보세요!
