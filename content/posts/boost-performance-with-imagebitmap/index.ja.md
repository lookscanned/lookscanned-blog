+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'ImageBitmap導入によりLook Scannedのパフォーマンスが60%向上'
summary = 'ImageBitmapによる非同期デコードと効率的なレンダリングを活用し、Look Scannedのパフォーマンスを最適化。レガシーブラウザとの互換性も確保した実装方法をご紹介します。'
description = 'ImageBitmapによる非同期デコードと効率的なレンダリングを活用し、Look Scannedのパフォーマンスを最適化。レガシーブラウザとの互換性も確保した実装方法をご紹介します。'
tags = ['パフォーマンス最適化', 'imagebitmap', '画像処理', 'Web技術']
+++

[Look Scanned](https://lookscanned.io)のようなモダンな Web アプリケーションの開発において、パフォーマンスの最適化は最重要課題の一つです。特に画像処理においては、その重要性が際立ちます。`ImageBitmap`インターフェースは、まだ広く普及していないものの、大幅なパフォーマンス向上を実現できる強力なツールです。本記事では、`ImageBitmap`の主要機能、その利点、そして Look Scanned への実装方法について詳しくご説明します。

## ImageBitmap の概要

`ImageBitmap`は、効率的な画像処理を実現するための HTML5 インターフェースです。最大の特徴は、メインスレッド外での画像デコードと処理が可能な点です。これにより、レンダリングの負荷が大幅に軽減され、アプリケーション全体の応答性が向上します。作成された`ImageBitmap`オブジェクトは、Canvas 2D や WebGL などのレンダリングコンテキストで直接利用できるため、画像処理を多用するアプリケーションに最適な選択肢となります。

## ImageBitmap 採用の理由

従来、Look Scanned では処理関数間の画像データの受け渡しに`Blob`を使用していました。しかし、`Blob`は使用の度にエンコード・デコードが必要となり、パフォーマンス面での課題がありました。一方、`ImageBitmap`は画像データへの直接アクセスを提供し、これらの冗長な処理を省くことで、レンダリングパフォーマンスを大幅に改善することができます。

## 実装の詳細

レガシーブラウザとの互換性維持が必要なため、完全な`ImageBitmap`への移行は現実的ではありません。そこで、幅広いブラウザ互換性を確保するハイブリッドアプローチを採用しています。互換性の詳細は[caniuse.com](https://caniuse.com/createimagebitmap)でご確認いただけます。また、Safari の Canvas 対応に制限があるため、画像処理には WebAssembly (WASM)を使用しており、その入力形式として`Blob`が必要となっています。

このような背景から、`Blob`と`ImageBitmap`の両方をサポートする段階的なハイブリッドソリューションを開発しました。以下が主要な実装詳細です：

### 画像のロードとデコード処理

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Blob形式へのフォールバック
  return blob;
}
```

### WebAssembly 連携

高度な処理に対応するため、`ImageBitmap`非対応ブラウザでも動作するよう、`Blob`を WASM モジュールに受け渡しています。具体的には、まず画像を Canvas に描画し、その後`canvas.toBlob`を使用して必要な`Blob`オブジェクトを生成します。

### 代替レンダリング機能

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

## パフォーマンス改善の成果

`ImageBitmap`の導入により、Look Scanned の画像処理時間は 1 枚あたり 50ms から 20ms へと劇的に短縮されました。この改善により、特にスキャン文書の処理において、より快適で高速な操作性を実現しています。

## 注目すべき知見

実装を進める中で、興味深い発見がありました。Web Worker への転送前に新しい`ImageBitmap`コピーを作成することで、元のオブジェクトを直接転送する場合よりも優れたパフォーマンスが得られることが判明しました。これは、ブラウザの転送可能オブジェクトに対する内部最適化によるものと推測されます。

## ブラウザ対応状況

現在、`ImageBitmap`は Chrome、Firefox、Edge、Safari など、主要なモダンブラウザの最新版で広くサポートされています。詳細な対応状況については、[caniuse.com の`createImageBitmap`に関するドキュメント](https://caniuse.com/createimagebitmap)をご参照ください。

## まとめと展望

Look Scanned への`ImageBitmap`実装は、パフォーマンスの大幅な向上に加え、非同期デコード、効率的なレンダリング、Web Workers との優れた連携を実現しました。レガシーブラウザ向けの`Blob`サポートは当面必要となりますが、`ImageBitmap`への段階的な移行は、長期的な観点で大きな価値をもたらすと確信しています。

ぜひ[Look Scanned](https://lookscanned.io)をお試しいただき、パフォーマンスの向上を体感してください！
