+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned aumenta performance em 60% utilizando ImageBitmap'
summary = 'Saiba como o Look Scanned otimiza sua performance através de decodificação assíncrona e renderização eficiente com ImageBitmap, mantendo compatibilidade com navegadores antigos.'
description = 'Saiba como o Look Scanned otimiza sua performance através de decodificação assíncrona e renderização eficiente com ImageBitmap, mantendo compatibilidade com navegadores antigos.'
tags = ['otimização de performance', 'imagebitmap', 'processamento de imagens', 'desenvolvimento web']
+++

No desenvolvimento de aplicações web modernas como o [Look Scanned](https://lookscanned.io), a otimização de performance é uma prioridade essencial. Isso se torna ainda mais crítico no processamento de imagens. A interface `ImageBitmap`, apesar de ainda não ser amplamente utilizada, é uma ferramenta poderosa capaz de proporcionar ganhos expressivos de performance. Neste artigo, abordaremos os principais recursos do `ImageBitmap`, suas vantagens e nossa experiência ao implementá-lo no Look Scanned.

## O que é o ImageBitmap?

O `ImageBitmap` é uma interface HTML5 desenvolvida para processamento eficiente de imagens. Seu principal diferencial é a capacidade de realizar a decodificação e o processamento de imagens fora da thread principal, reduzindo consideravelmente a carga de renderização e melhorando a responsividade geral da aplicação. Um objeto `ImageBitmap` pode ser utilizado diretamente em contextos de renderização como Canvas 2D ou WebGL, sendo ideal para aplicações que trabalham intensivamente com imagens.

## Por que adotamos o ImageBitmap?

Anteriormente, o Look Scanned utilizava `Blob` para transferência de dados de imagem entre funções de processamento. Entretanto, o `Blob` necessita de codificação e decodificação a cada utilização, o que impõe limitações de performance. Já o `ImageBitmap` oferece acesso direto aos dados da imagem, eliminando estas operações redundantes e melhorando significativamente a performance da renderização.

## Detalhes da implementação

Devido à necessidade de manter compatibilidade com navegadores antigos, uma migração completa para `ImageBitmap` não seria viável. Assim, optamos por uma abordagem híbrida que garante ampla compatibilidade. Informações detalhadas sobre suporte podem ser consultadas em [caniuse.com](https://caniuse.com/createimagebitmap). Além disso, devido às limitações do Safari com Canvas, utilizamos WebAssembly (WASM) para processamento de imagens, que requer `Blob` como formato de entrada.

Considerando estes fatores, desenvolvemos uma solução híbrida progressiva que suporta tanto `Blob` quanto `ImageBitmap`. Veja os principais aspectos da implementação:

### Carregamento e decodificação de imagens

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Alternativa usando Blob
  return blob;
}
```

### Integração com WebAssembly

Para processamento avançado, enviamos o `Blob` para o módulo WASM, garantindo funcionalidade em navegadores sem suporte ao `ImageBitmap`. Neste processo, primeiro renderizamos a imagem em um Canvas e em seguida utilizamos `canvas.toBlob` para gerar o objeto `Blob` necessário.

### Sistema de renderização alternativo

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

## Resultados alcançados

A implementação do `ImageBitmap` possibilitou reduzir o tempo de processamento de imagens no Look Scanned de 50ms para 20ms por imagem. Esta melhoria é especialmente perceptível ao processar documentos digitalizados, proporcionando uma experiência significativamente mais fluida e ágil aos usuários.

## Descobertas relevantes

Durante a implementação, fizemos uma descoberta interessante: criar uma nova cópia do `ImageBitmap` antes de transferi-la para um Web Worker resulta em melhor performance do que transferir o objeto original diretamente. Isto provavelmente está relacionado a otimizações internas do navegador para objetos transferíveis.

## Suporte dos navegadores

Atualmente, o `ImageBitmap` conta com amplo suporte nos principais navegadores modernos, incluindo as versões mais recentes do Chrome, Firefox, Edge e Safari. Informações detalhadas sobre compatibilidade estão disponíveis na [documentação do `createImageBitmap` no caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusão e perspectivas futuras

A implementação do `ImageBitmap` no Look Scanned não apenas melhorou significativamente a performance, como também possibilitou implementar decodificação assíncrona, renderização eficiente e melhor integração com Web Workers. Embora o suporte ao `Blob` para navegadores antigos ainda seja necessário, a migração gradual para `ImageBitmap` continuará trazendo benefícios substanciais a longo prazo.

Venha experimentar as melhorias de performance no [Look Scanned](https://lookscanned.io)!
