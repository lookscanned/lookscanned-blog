+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned, ImageBitmap kullanımıyla performansını %60 artırdı'
summary = "Look Scanned'ın ImageBitmap teknolojisiyle asenkron kod çözme ve verimli görüntü işleme kullanarak performansını nasıl optimize ettiğini ve eski tarayıcılarla uyumluluğu nasıl koruduğunu keşfedin."
description = "Look Scanned'ın ImageBitmap teknolojisiyle asenkron kod çözme ve verimli görüntü işleme kullanarak performansını nasıl optimize ettiğini ve eski tarayıcılarla uyumluluğu nasıl koruduğunu keşfedin."
tags = ['performans optimizasyonu', 'imagebitmap', 'görüntü işleme', 'web geliştirme']
+++

[Look Scanned](https://lookscanned.io) gibi modern web uygulamalarının geliştirilmesinde performans optimizasyonu en önemli önceliklerden biridir. Bu özellikle görüntü işleme söz konusu olduğunda kritik bir önem taşır. `ImageBitmap` arayüzü, henüz yaygın olarak benimsenmemiş olsa da, performansta önemli iyileştirmeler sağlayabilen güçlü bir teknolojidir. Bu yazıda, `ImageBitmap`'in temel özelliklerini, avantajlarını ve Look Scanned'daki uygulama deneyimimizi detaylı olarak ele alacağız.

## ImageBitmap Nedir?

`ImageBitmap`, verimli görüntü işleme için özel olarak tasarlanmış bir HTML5 arayüzüdür. En önemli özelliği, görüntü kod çözme ve işleme işlemlerini ana iş parçacığının dışında gerçekleştirebilmesidir. Bu sayede render yükünü önemli ölçüde azaltır ve uygulamanın genel yanıt hızını artırır. Oluşturulan bir `ImageBitmap` nesnesi, Canvas 2D veya WebGL gibi render bağlamlarında doğrudan kullanılabilir, bu da onu çok sayıda görüntü işleyen uygulamalar için ideal bir çözüm haline getirir.

## Neden ImageBitmap'i Tercih Ettik?

Başlangıçta Look Scanned, işleme fonksiyonları arasında görüntü verisi aktarımı için `Blob` kullanıyordu. Ancak `Blob`, her kullanımda kodlama ve kod çözme gerektirdiğinden performans sorunlarına yol açıyordu. Buna karşılık, `ImageBitmap` görüntü verisine doğrudan erişim sağlayarak bu fazladan işlemleri ortadan kaldırır ve render performansında önemli iyileştirmeler sunar.

## Uygulama Ayrıntıları

Eski tarayıcılarla uyumluluğu koruma gerekliliği nedeniyle, tamamen `ImageBitmap`'e geçiş mümkün değildi. Bu nedenle, geniş uyumluluk sağlayan karma bir yaklaşım benimsedik. Destek ayrıntıları [caniuse.com](https://caniuse.com/createimagebitmap) adresinde bulunabilir. Ayrıca, Safari'nin Canvas kısıtlamaları nedeniyle, görüntü işleme için WebAssembly (WASM) kullanıyoruz, bu da giriş formatı olarak `Blob` gerektiriyor.

Bu faktörleri göz önünde bulundurarak, hem `Blob` hem de `ImageBitmap` desteği sunan aşamalı bir karma çözüm geliştirdik. İşte temel uygulama ayrıntıları:

### Görüntü Yükleme ve Kod Çözme

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Blob kullanımına geri dön
  return blob;
}
```

### WebAssembly Entegrasyonu

Gelişmiş işleme için, `Blob`'u WASM modülüne aktarıyoruz, bu da `ImageBitmap` desteği olmayan tarayıcılarda işlevselliği sağlıyor. Bu süreçte, önce görüntüyü Canvas üzerine render ediyoruz ve ardından gerekli `Blob` nesnesini oluşturmak için `canvas.toBlob` kullanıyoruz.

### Alternatif Render Sistemi

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

## Elde Edilen Sonuçlar

`ImageBitmap` uygulaması, Look Scanned'da görüntü işleme süresini görüntü başına 50ms'den 20ms'ye düşürmeyi başardı. Bu iyileştirme özellikle taranan belgelerin işlenmesinde belirgin bir fark yaratıyor ve kullanıcılara çok daha akıcı ve hızlı bir deneyim sunuyor.

## Önemli Bulgular

Uygulama sürecinde ilginç bir keşifte bulunduk: Web Worker'a göndermeden önce `ImageBitmap`'in yeni bir kopyasını oluşturmak, orijinal nesneyi doğrudan göndermekten daha iyi performans sağlıyor. Bu muhtemelen tarayıcının aktarılabilir nesneler için sahip olduğu dahili optimizasyonlardan kaynaklanıyor.

## Tarayıcı Desteği

Şu anda `ImageBitmap`, Chrome, Firefox, Edge ve Safari'nin en son sürümleri dahil olmak üzere başlıca modern tarayıcılarda geniş destek görüyor. Uyumluluk hakkında ayrıntılı bilgi [caniuse.com'daki `createImageBitmap` dokümantasyonunda](https://caniuse.com/createimagebitmap) bulunabilir.

## Sonuç ve Gelecek Perspektifi

Look Scanned'da `ImageBitmap` uygulaması sadece performansta önemli iyileştirme sağlamakla kalmadı, aynı zamanda asenkron kod çözme, verimli render ve Web Workers ile daha iyi entegrasyon olanağı da sundu. Eski tarayıcılar için `Blob` desteği hala gerekli olsa da, `ImageBitmap`'e kademeli geçiş uzun vadede önemli avantajlar sağlamaya devam edecek.

[Look Scanned](https://lookscanned.io)'ı ziyaret ederek performans iyileştirmelerini kendiniz deneyimleyin!
