---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Di chuyển tài liệu Look Scanned How-To sang VitePress với bảo mật nâng cao"
summary: "Khám phá cách Look Scanned nâng cấp cơ sở hạ tầng tài liệu bằng cách di chuyển từ Vue + Vite sang VitePress, đồng thời triển khai npm Trusted Publishers với OIDC để phát hành gói an toàn không cần token."
description: "Khám phá cách Look Scanned nâng cấp cơ sở hạ tầng tài liệu bằng cách di chuyển từ Vue + Vite sang VitePress, đồng thời triển khai npm Trusted Publishers với OIDC để phát hành gói an toàn không cần token."
tags: ["vitepress", "tài liệu", "bảo mật", "cicd", "npm"]
---

Tại [Look Scanned](https://lookscanned.io), chúng tôi liên tục cải thiện cơ sở hạ tầng để cung cấp tài liệu tốt hơn và các phương pháp phát triển an toàn hơn. Hôm nay, chúng tôi rất vui được chia sẻ chi tiết về một nâng cấp quan trọng cho trang tài liệu How-To của chúng tôi: di chuyển từ ứng dụng Vue + Vite tùy chỉnh sang VitePress, đồng thời nâng cao bảo mật CI/CD với npm Trusted Publishers.

## 📚 Tại sao chúng tôi di chuyển sang VitePress

Trang tài liệu How-To của chúng tôi ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) phục vụ như hướng dẫn sử dụng toàn diện cho Look Scanned. Mặc dù cấu hình Vue + Vite trước đây của chúng tôi hoạt động tốt, chúng tôi nhận ra rằng VitePress sẽ là lựa chọn tốt hơn cho một trang tài liệu hướng đến nội dung.

### VitePress là gì?

VitePress là trình tạo trang tĩnh được thiết kế đặc biệt cho tài liệu. Được xây dựng trên Vite và Vue 3, nó kết hợp điểm mạnh của cả hai thế giới: trải nghiệm phát triển cực nhanh với các tính năng tài liệu mạnh mẽ sẵn có ngay từ đầu.

### Lợi ích chính của việc di chuyển

**🎯 Kiến trúc tốt hơn cho tài liệu**
- **Định tuyến dựa trên file**: Mỗi file markdown tự động trở thành một trang, làm cho việc tổ chức nội dung trở nên trực quan
- **Tính năng tài liệu tích hợp**: Mục lục, tìm kiếm, quốc tế hóa và nhiều hơn nữa đều được cấu hình trước
- **Tạo trang tĩnh**: HTML được render trước cung cấp SEO tuyệt vời và tải trang tức thì

**⚡ Trải nghiệm nhà phát triển được cải thiện**
- **Reload nóng tức thì**: Thay đổi xuất hiện ngay lập tức trong quá trình phát triển
- **Markdown trước tiên**: Tập trung vào nội dung, không phải cấu trúc component
- **Hỗ trợ component Vue**: Khi cần thiết, chúng tôi vẫn có thể sử dụng các component Vue tùy chỉnh trong markdown

**🔧 Bảo trì dễ dàng hơn**
- **Cấu trúc rõ ràng hơn**: Tài liệu tuân theo các quy ước, giảm tải nhận thức cho người đóng góp
- **Build ổn định hơn**: Cấu trúc có quan điểm của VitePress dẫn đến các bản build có thể tái tạo hơn
- **Cộng tác tốt hơn**: Các thành viên trong nhóm có thể đóng góp tài liệu mà không cần kiến thức Vue sâu

## 🔒 Bảo mật nâng cao với npm Trusted Publishers

Cùng với việc di chuyển VitePress, chúng tôi đã triển khai một cải tiến bảo mật quan trọng: **npm Trusted Publishers sử dụng xác thực OIDC**.

### Vấn đề với token npm truyền thống

Trước đây, việc xuất bản gói lên npm yêu cầu lưu trữ `NPM_TOKEN` tồn tại lâu dài trong secrets của repository. Phương pháp này có một số nhược điểm:

- **Rủi ro bảo mật**: Token có thể bị lộ hoặc bị xâm phạm do vô tình
- **Chi phí quản lý**: Token cần xoay vòng và cập nhật thủ công
- **Thách thức kiểm toán**: Khó theo dõi ai đã xuất bản cái gì và khi nào

### Giải pháp: Xuất bản tin cậy dựa trên OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) tận dụng OpenID Connect (OIDC) để cho phép xuất bản an toàn không cần token trực tiếp từ GitHub Actions. Đây là cách nó hoạt động:

1. **Không có secrets được lưu trữ**: Thay vì lưu token, GitHub Actions yêu cầu thông tin xác thực ngắn hạn từ npm
2. **Xác minh danh tính**: npm xác minh yêu cầu xuất bản đến từ repository GitHub được ủy quyền
3. **Quản lý thông tin xác thực tự động**: Thông tin xác thực được cấp tự động và hết hạn nhanh chóng

### Lợi ích thực tế

Thay đổi này mang lại cải thiện ngay lập tức cho quy trình phát triển của chúng tôi:

- ✅ **Không còn quản lý token**: Không cần tạo, lưu trữ hoặc xoay vòng token npm
- ✅ **Giảm bề mặt tấn công**: Thông tin xác thực ngắn hạn giảm thiểu rủi ro phơi bày
- ✅ **Khả năng kiểm toán tốt hơn**: Mỗi hành động xuất bản được liên kết với một lần chạy GitHub Actions cụ thể
- ✅ **Thực hành tốt nhất hiện đại**: Phù hợp với các nguyên tắc bảo mật zero-trust

**Lưu ý kỹ thuật**: Để hỗ trợ npm Trusted Publishers, chúng tôi đã cập nhật cấu hình CI để sử dụng Node.js `lts/*`, đảm bảo chúng tôi có phiên bản npm mới nhất cần thiết cho xác thực OIDC.

## 📦 Lịch trình phát hành

Quá trình di chuyển được hoàn thành qua ba lần phát hành vào ngày 19 tháng 12 năm 2025:

- **v2.0.0**: Di chuyển cốt lõi từ Vue + Vite sang VitePress (thay đổi quan trọng)
- **v2.0.1**: Sửa lỗi CI để hỗ trợ npm Trusted Publishers với phiên bản Node.js phù hợp
- **v2.0.2**: Cải thiện hiệu suất bằng cách di chuyển `@fontsource/noto-mono` sang devDependencies

## 🌍 Hỗ trợ đa ngôn ngữ liên tục

Một lưu ý quan trọng: tài liệu How-To của chúng tôi tạo ra các PDF đa ngôn ngữ luôn được sử dụng làm tệp ví dụ trong ứng dụng Look Scanned chính (có sẵn tại [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Việc di chuyển VitePress này không thay đổi chức năng đó—nó chỉ đơn giản là cung cấp nền tảng tốt hơn để duy trì và cải thiện cơ sở hạ tầng tài liệu của chúng tôi.

## 💡 Điều này có ý nghĩa gì đối với người dùng

Nếu bạn sử dụng tài liệu của Look Scanned:

- **Cùng quyền truy cập, trải nghiệm tốt hơn**: Tài liệu vẫn ở cùng URL với tải và điều hướng được cải thiện
- **Đáng tin cậy hơn**: Tạo trang tĩnh có nghĩa là tải nhanh hơn và ổn định tốt hơn
- **Tìm kiếm và khám phá tốt hơn**: Tìm kiếm tích hợp của VitePress giúp bạn tìm câu trả lời nhanh hơn
- **Hỗ trợ PDF liên tục**: Tạo PDF đa ngôn ngữ tiếp tục như trước

## 🚀 Tiếp theo là gì

Với việc nâng cấp cơ sở hạ tầng hoàn tất, chúng tôi đang tập trung vào cải thiện nội dung:

- **Mở rộng trường hợp sử dụng**: Nhiều ví dụ thực tế và hướng dẫn từng bước hơn
- **Cải thiện tính nhất quán**: Tinh chỉnh thuật ngữ đa ngôn ngữ để rõ ràng hơn
- **Xuất PDF được cải thiện**: Cải thiện trải nghiệm tạo PDF đa trình duyệt

## Dùng thử Look Scanned ngay hôm nay

Look Scanned cung cấp hiệu ứng quét PDF dựa trên trình duyệt, ưu tiên quyền riêng tư mà không cần tải tệp của bạn lên bất kỳ đâu. Tài liệu được cải thiện giúp bắt đầu dễ dàng hơn bao giờ hết.

👉 **Truy cập [lookscanned.io](https://lookscanned.io) để trải nghiệm quét tài liệu nhanh chóng, an toàn trong trình duyệt của bạn.**
