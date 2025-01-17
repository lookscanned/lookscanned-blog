---
title: "Xây dựng Blog Look Scanned với Hugo"
date: 2025-01-17
description: "Hướng dẫn chi tiết cách tạo blog hiện đại sử dụng Hugo - công cụ tạo trang tĩnh. Bao gồm đầy đủ các bước từ cài đặt, cấu hình, tùy biến đến triển khai - phù hợp cho mọi trình độ lập trình."
---

## Giới thiệu về Look Scanned

[Look Scanned](https://lookscanned.io) là ứng dụng web nhẹ giúp tạo hiệu ứng tài liệu quét cho PDF. Được phát triển với trọng tâm là bảo mật, ứng dụng giúp lập trình viên, nhà thiết kế và người dùng tạo PDF có vẻ như được quét mà không cần thiết bị thật.

## Lý do chọn Hugo

Sau khi thử nghiệm nhiều công cụ tạo trang tĩnh khác nhau, chúng tôi quyết định chọn Hugo vì:

1. **Tốc độ vượt trội** - Viết bằng Go, xây dựng siêu nhanh
2. **Đơn giản** - Dễ cài đặt, dễ làm quen
3. **Theme phong phú** - Nhiều theme đẹp và dễ tùy biến
4. **Cộng đồng sôi nổi** - Hỗ trợ nhanh, tài liệu đầy đủ
5. **Đa ngôn ngữ** - Hỗ trợ i18n sẵn có

## Bắt đầu

### Cài đặt Hugo

Với macOS (dùng Homebrew):

```bash
brew install hugo
```

Với Windows (dùng Chocolatey):

```bash
choco install hugo-extended
```

Người dùng Linux xem [hướng dẫn cài đặt](https://gohugo.io/installation/linux/).

### Khởi tạo dự án

Chạy lệnh:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Cài theme

Thêm PaperMod làm Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Thêm vào `config.toml`:

```toml
theme = "PaperMod"
```

### Cài đặt đa ngôn ngữ

Cấu hình trong `config.toml`:

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
  # Ngôn ngữ khác...
```

### Viết bài

Tạo bài đầu tiên:

```bash
hugo new posts/build-blog-using-hugo/index.vi.md
```

### Dev server

Chạy server local:

```bash
hugo server -D
```

Truy cập [http://localhost:1313](http://localhost:1313) để xem trang.

## Triển khai

Tự động hóa triển khai với GitHub Actions:

1. **Đưa lên GitHub Pages**

   - Tạo repo GitHub mới
   - Đẩy code lên
   - Kích hoạt GitHub Pages
   - Thiết lập tự động hóa

2. **Đưa lên Cloudflare Pages**
   - Liên kết repo GitHub
   - Dùng `hugo` làm lệnh build
   - Chọn thư mục `public` để xuất bản

## Tùy biến

Để tối ưu UX, chúng tôi đã bỏ nút chuyển ngôn ngữ ở header. Xem chi tiết thay đổi theme [tại đây](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Tổng kết

Hugo là công cụ tuyệt vời để làm blog cá nhân. Với ưu điểm về tốc độ, tính linh hoạt và tài liệu phong phú, nó phù hợp với mọi trình độ lập trình. Càng dùng nhiều, bạn càng khám phá được nhiều cách hay để tạo blog theo phong cách riêng.

## Tham khảo

- [Tài liệu Hugo](https://gohugo.io/documentation/)
- [Theme PaperMod](https://github.com/adityatelange/hugo-PaperMod)
