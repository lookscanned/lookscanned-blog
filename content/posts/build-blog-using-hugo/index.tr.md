---
title: "Hugo Kullanarak Look Scanned Blogu Kurulumu"
date: 2025-01-17
description: "Statik site oluşturucu Hugo ile modern bir blog kurmanın ayrıntılı rehberi. Kurulumdan yayına kadar tüm adımlar, yapılandırma ve özelleştirme seçenekleri - başlangıç ve ileri seviye geliştiriciler için."
---

## Look Scanned Nedir?

[Look Scanned](https://lookscanned.io), PDF belgelerinize taranmış efekti veren hafif bir web uygulamasıdır. Gizlilik öncelikli olarak tasarlanan uygulama, geliştiricilerin, tasarımcıların ve son kullanıcıların gerçek bir yazıcı veya tarayıcıya ihtiyaç duymadan taranmış görünümlü PDF'ler oluşturmasını sağlar.

## Neden Hugo'yu Tercih Ettik?

Look Scanned blogu için birçok statik site oluşturucuyu değerlendirdik ve Hugo'yu şu özelliklerinden dolayı seçtik:

1. **Yüksek Performans** - Go diliyle yazıldığı için çok hızlı derleme süresi
2. **Kolay Kullanım** - Basit kurulum ve kademeli öğrenme süreci
3. **Tema Zenginliği** - Çok sayıda şık ve özelleştirilebilir tema seçeneği
4. **Canlı Topluluk** - Anında destek ve kapsamlı belgelendirme
5. **Çoklu Dil** - Hazır çoklu dil desteği

## Başlarken

### Hugo'yu Yükleme

macOS'ta (Homebrew kullanarak):

```bash
brew install hugo
```

Windows'ta (Chocolatey kullanarak):

```bash
choco install hugo-extended
```

Linux kullanıcıları için [yükleme kılavuzu](https://gohugo.io/installation/linux/).

### Siteyi Oluşturma

Şu komutları sırasıyla çalıştırın:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Tema Yükleme

PaperMod temasını Git alt modülü olarak projeye ekleyin:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

`config.toml` dosyasına şunu ekleyin:

```toml
theme = "PaperMod"
```

### Çoklu Dil Ayarları

`config.toml` dosyasında dil ayarlarını yapın:

```toml
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false

[params]
  displayFullLangName = true

[languages]
  [languages.en]
    languageCode = 'en'
    languageName = 'English'
    title = 'Look Scanned Blog'
  [languages.zh]
    languageName = '简体中文'
    title = 'Look Scanned 博客'
  [languages.zh-tw]
    languageCode = 'zh-TW'
    languageName = '繁體中文'
    title = 'Look Scanned 部落格'
  # Diğer diller...
```

### İçerik Ekleme

İlk blog yazınızı oluşturun:

```bash
hugo new posts/build-blog-using-hugo/index.tr.md
```

### Geliştirme Sunucusu

Yerel geliştirme sunucusunu başlatın:

```bash
hugo server -D
```

[http://localhost:1313](http://localhost:1313) adresinden sitenizi görüntüleyin.

## Yayına Alma

GitHub Actions ile otomatik yayınlama süreci:

1. **GitHub Pages Üzerinde Yayınlama**

   - GitHub'da yeni bir repo oluşturun
   - Kodları repoya gönderin
   - GitHub Pages'i aktifleştirin
   - Otomatik yayınlamayı kurun

2. **Cloudflare Pages Üzerinde Yayınlama**
   - GitHub reponuzu bağlayın
   - Derleme komutu olarak `hugo`'yu belirleyin
   - Yayın klasörü olarak `public`'i seçin

## Özelleştirmeler

Kullanıcı deneyimini geliştirmek için üst menüden dil seçiciyi kaldırdık. Tema üzerinde yaptığımız değişiklikleri [bu bağlantıdan](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html) inceleyebilirsiniz.

## Son Söz

Hugo, kişisel blog oluşturmak için ideal bir araçtır. Yüksek performansı, esnek yapılandırması ve detaylı belgelendirmesi sayesinde her seviyeden geliştiricinin kullanımına uygundur. Kullandıkça yeni özellikler keşfedecek ve kendinize özgü bir blog oluşturabileceksiniz.

## Yararlı Bağlantılar

- [Hugo Belgeleri](https://gohugo.io/documentation/)
- [PaperMod Teması](https://github.com/adityatelange/hugo-PaperMod)
