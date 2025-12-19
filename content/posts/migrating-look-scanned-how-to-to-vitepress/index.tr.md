---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Look Scanned How-To Belgelerini Gelişmiş Güvenlikle VitePress'e Taşımak"
summary: "Look Scanned'in Vue + Vite'tan VitePress'e geçiş yaparak dokümantasyon altyapısını nasıl yükselttiğini ve güvenli, token-free paket yayınları için OIDC ile npm Trusted Publishers'ı nasıl uyguladığını keşfedin."
description: "Look Scanned'in Vue + Vite'tan VitePress'e geçiş yaparak dokümantasyon altyapısını nasıl yükselttiğini ve güvenli, token-free paket yayınları için OIDC ile npm Trusted Publishers'ı nasıl uyguladığını keşfedin."
tags: ["vitepress", "dokümantasyon", "güvenlik", "cicd", "npm"]
---

[Look Scanned](https://lookscanned.io)'de, daha iyi dokümantasyon ve daha güvenli geliştirme uygulamaları sağlamak için altyapımızı sürekli iyileştiriyoruz. Bugün, How-To dokümantasyon sitemizin önemli bir yükseltmesi hakkında ayrıntıları paylaşmaktan heyecan duyuyoruz: özel Vue + Vite uygulamasından VitePress'e geçiş yaparken, aynı anda npm Trusted Publishers ile CI/CD güvenliğimizi artırma.

## 📚 Neden VitePress'e Geçiş Yaptık

How-To dokümantasyon sitemiz ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) Look Scanned için kapsamlı kullanım kılavuzu görevi görür. Önceki Vue + Vite kurulumumuz iyi çalışsa da, içerik odaklı bir dokümantasyon sitesi için VitePress'in daha iyi bir seçim olacağını fark ettik.

### VitePress Nedir?

VitePress, özellikle dokümantasyon için tasarlanmış statik bir site oluşturucudur. Vite ve Vue 3'ün üzerine inşa edilmiş olarak, her iki dünyanın en iyisini birleştirir: hazır güçlü dokümantasyon özellikleriyle yıldırım hızında geliştirme deneyimi.

### Geçişin Ana Faydaları

**🎯 Dokümantasyon için Daha İyi Mimari**
- **Dosya tabanlı yönlendirme**: Her markdown dosyası otomatik olarak bir sayfa olur, içerik organizasyonunu sezgisel hale getirir
- **Yerleşik dokümantasyon özellikleri**: İçindekiler tablosu, arama, uluslararasılaştırma ve daha fazlası önceden yapılandırılmıştır
- **Statik site oluşturma**: Önceden işlenmiş HTML, mükemmel SEO ve anında sayfa yüklemeleri sağlar

**⚡ İyileştirilmiş Geliştirici Deneyimi**
- **Anında hot reload**: Değişiklikler geliştirme sırasında hemen görünür
- **Markdown öncelikli**: Bileşen iskeleti değil, içeriğe odaklanın
- **Vue bileşen desteği**: Gerektiğinde markdown içinde özel Vue bileşenleri kullanabiliriz

**🔧 Daha Kolay Bakım**
- **Daha net yapı**: Dokümantasyon konvansiyonları takip eder, katkıda bulunanlar için bilişsel yükü azaltır
- **Daha kararlı derlemeler**: VitePress'in görüşlü yapısı daha tekrarlanabilir derlemelere yol açar
- **Daha iyi işbirliği**: Ekip üyeleri derin Vue bilgisi olmadan dokümantasyona katkıda bulunabilir

## 🔒 npm Trusted Publishers ile Geliştirilmiş Güvenlik

VitePress geçişinin yanı sıra, kritik bir güvenlik iyileştirmesi uyguladık: **OIDC kimlik doğrulaması kullanan npm Trusted Publishers**.

### Geleneksel npm Token'larının Sorunu

Önceden, npm'e paket yayınlamak, depo sırlarında uzun ömürlü bir `NPM_TOKEN` saklamayı gerektiriyordu. Bu yaklaşımın birkaç dezavantajı var:

- **Güvenlik riski**: Token'lar yanlışlıkla açığa çıkabilir veya tehlikeye girebilir
- **Yönetim yükü**: Token'ların manuel rotasyon ve güncellemelere ihtiyacı vardır
- **Denetim zorlukları**: Kimin ne zaman neyi yayınladığını takip etmek zor

### Çözüm: OIDC Tabanlı Güvenilir Yayımlama

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/), GitHub Actions'tan doğrudan güvenli, token-free yayımlamayı etkinleştirmek için OpenID Connect (OIDC) kullanır. Nasıl çalışır:

1. **Saklanan sır yok**: Token'ları kaydetmek yerine, GitHub Actions npm'den kısa ömürlü kimlik bilgileri ister
2. **Kimlik doğrulama**: npm, yayımlama isteğinin yetkili GitHub deposundan geldiğini doğrular
3. **Otomatik kimlik bilgisi yönetimi**: Kimlik bilgileri otomatik olarak verilir ve hızla sona erer

### Gerçek Dünya Faydaları

Bu değişiklik, geliştirme iş akışımıza anında iyileştirmeler getirir:

- ✅ **Artık token yönetimi yok**: npm token'larını oluşturmaya, saklamaya veya döndürmeye gerek yok
- ✅ **Azaltılmış saldırı yüzeyi**: Kısa ömürlü kimlik bilgileri maruz kalma riskini en aza indirir
- ✅ **Daha iyi denetlenebilirlik**: Her yayımlama eylemi belirli bir GitHub Actions çalıştırmasına bağlıdır
- ✅ **Modern en iyi uygulamalar**: Sıfır güven güvenlik ilkeleriyle uyumludur

**Teknik not**: npm Trusted Publishers'ı desteklemek için, OIDC kimlik doğrulaması için gereken en son npm sürümüne sahip olduğumuzdan emin olmak için CI yapılandırmamızı Node.js `lts/*` kullanacak şekilde güncelledik.

## 📦 Yayın Zaman Çizelgesi

Geçiş, 19 Aralık 2025'te üç sürüm aracılığıyla tamamlandı:

- **v2.0.0**: Vue + Vite'tan VitePress'e temel geçiş (önemli değişiklik)
- **v2.0.1**: Uygun Node.js sürümüyle npm Trusted Publishers'ı desteklemek için CI düzeltmesi
- **v2.0.2**: `@fontsource/noto-mono`'yu devDependencies'e taşıyarak performans iyileştirmesi

## 🌍 Devam Eden Çok Dilli Destek

Önemli bir not: How-To dokümantasyonumuz, ana Look Scanned uygulamasında ([lookscanned.io/en/scan](https://lookscanned.io/en/scan)'de mevcut) her zaman örnek dosya olarak kullanılan çok dilli PDF'ler üretir. Bu VitePress geçişi bu işlevselliği değiştirmez—sadece dokümantasyon altyapımızı korumak ve geliştirmek için daha iyi bir temel sağlar.

## 💡 Bu Kullanıcılar İçin Ne Anlama Geliyor

Look Scanned dokümantasyonunu kullanıyorsanız:

- **Aynı erişim, daha iyi deneyim**: Dokümantasyon, gelişmiş yükleme ve gezinme ile aynı URL'de kalır
- **Daha güvenilir**: Statik site oluşturma, daha hızlı yüklemeler ve daha iyi istikrar anlamına gelir
- **Daha iyi arama ve keşif**: VitePress'in yerleşik araması, cevapları daha hızlı bulmanıza yardımcı olur
- **Devam eden PDF desteği**: Çok dilli PDF oluşturma eskiden olduğu gibi devam ediyor

## 🚀 Sırada Ne Var

Altyapı yükseltmesi tamamlanınca, içerik iyileştirmelerine odaklanıyoruz:

- **Genişletilmiş kullanım örnekleri**: Daha fazla pratik örnek ve adım adım kılavuzlar
- **Tutarlılık iyileştirmeleri**: Netlik için çok dilli terminolojiyi rafine etme
- **Geliştirilmiş PDF dışa aktarma**: Çapraz tarayıcı PDF oluşturma deneyimini iyileştirme

## Look Scanned'i Bugün Deneyin

Look Scanned, dosyalarınızı hiçbir yere yüklemeden tarayıcı tabanlı, gizlilik öncelikli PDF tarama efektleri sağlar. İyileştirilmiş dokümantasyon, başlamayı her zamankinden daha kolay hale getirir.

👉 **Tarayıcınızda hızlı, güvenli belge taramayı deneyimlemek için [lookscanned.io](https://lookscanned.io)'yu ziyaret edin.**
