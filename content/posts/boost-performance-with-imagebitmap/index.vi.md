+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned tăng hiệu năng 60% nhờ ImageBitmap'
summary = 'Khám phá cách Look Scanned tối ưu hóa hiệu năng thông qua giải mã bất đồng bộ và render hiệu quả với ImageBitmap, đồng thời vẫn đảm bảo tương thích với các trình duyệt cũ.'
description = 'Khám phá cách Look Scanned tối ưu hóa hiệu năng thông qua giải mã bất đồng bộ và render hiệu quả với ImageBitmap, đồng thời vẫn đảm bảo tương thích với các trình duyệt cũ.'
tags = ['tối ưu hiệu năng', 'imagebitmap', 'xử lý ảnh', 'lập trình web']
+++

Trong quá trình phát triển các ứng dụng web hiện đại như [Look Scanned](https://lookscanned.io), tối ưu hóa hiệu năng luôn là ưu tiên hàng đầu. Điều này đặc biệt quan trọng trong lĩnh vực xử lý hình ảnh. Giao diện `ImageBitmap`, dù chưa được sử dụng phổ biến, là một công cụ mạnh mẽ có khả năng cải thiện hiệu năng đáng kể. Trong bài viết này, chúng tôi sẽ giới thiệu các tính năng chính của `ImageBitmap`, những ưu điểm của nó và chia sẻ kinh nghiệm triển khai tại Look Scanned.

## ImageBitmap là gì?

`ImageBitmap` là một giao diện HTML5 được thiết kế chuyên biệt cho việc xử lý hình ảnh hiệu quả. Ưu điểm nổi bật nhất của nó là khả năng thực hiện giải mã và xử lý hình ảnh ở ngoài luồng chính, giúp giảm thiểu đáng kể tải render và cải thiện tốc độ phản hồi tổng thể của ứng dụng. Một đối tượng `ImageBitmap` sau khi được tạo có thể sử dụng trực tiếp trong các ngữ cảnh render như Canvas 2D hoặc WebGL, khiến nó trở thành lựa chọn tối ưu cho các ứng dụng cần xử lý nhiều hình ảnh.

## Tại sao chúng tôi lựa chọn ImageBitmap?

Ban đầu, Look Scanned sử dụng `Blob` để truyền dữ liệu hình ảnh giữa các hàm xử lý. Tuy nhiên, `Blob` đòi hỏi phải mã hóa và giải mã mỗi lần sử dụng, gây ảnh hưởng đến hiệu năng. Ngược lại, `ImageBitmap` cho phép truy cập trực tiếp vào dữ liệu hình ảnh, loại bỏ các bước xử lý trung gian và cải thiện đáng kể hiệu năng render.

## Chi tiết triển khai

Do cần duy trì khả năng tương thích với các trình duyệt cũ, việc chuyển hoàn toàn sang `ImageBitmap` là không khả thi. Do đó, chúng tôi đã áp dụng giải pháp lai để đảm bảo tính tương thích rộng rãi. Thông tin chi tiết về khả năng hỗ trợ có thể tham khảo tại [caniuse.com](https://caniuse.com/createimagebitmap). Ngoài ra, do Safari có một số hạn chế với Canvas, chúng tôi sử dụng WebAssembly (WASM) cho việc xử lý hình ảnh, điều này yêu cầu `Blob` làm định dạng đầu vào.

Với những yếu tố trên, chúng tôi đã phát triển một giải pháp lai từng bước hỗ trợ cả `Blob` và `ImageBitmap`. Dưới đây là các chi tiết triển khai chính:

### Tải và giải mã hình ảnh

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Dùng lại Blob khi không có ImageBitmap
  return blob;
}
```

### Tích hợp WebAssembly

Đối với xử lý nâng cao, chúng tôi truyền `Blob` đến module WASM, đảm bảo chức năng hoạt động trên các trình duyệt không hỗ trợ `ImageBitmap`. Trong quá trình này, trước tiên chúng tôi render hình ảnh lên Canvas, sau đó sử dụng `canvas.toBlob` để tạo đối tượng `Blob` cần thiết.

### Hệ thống render dự phòng

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

## Kết quả đạt được

Việc triển khai `ImageBitmap` đã giúp giảm thời gian xử lý hình ảnh trong Look Scanned từ 50ms xuống còn 20ms cho mỗi hình ảnh. Sự cải thiện này đặc biệt rõ rệt khi xử lý các tài liệu được quét, mang lại trải nghiệm người dùng mượt mà và nhanh chóng hơn rất nhiều.

## Phát hiện thú vị

Trong quá trình triển khai, chúng tôi đã có một phát hiện đáng chú ý: việc tạo một bản sao mới của `ImageBitmap` trước khi gửi đến Web Worker cho hiệu năng tốt hơn so với việc gửi trực tiếp đối tượng gốc. Điều này có thể là nhờ cơ chế tối ưu hóa nội bộ của trình duyệt đối với các đối tượng có thể chuyển giao.

## Hỗ trợ trình duyệt

Hiện nay, `ImageBitmap` được hỗ trợ rộng rãi trên tất cả các trình duyệt hiện đại chính, bao gồm các phiên bản mới nhất của Chrome, Firefox, Edge và Safari. Thông tin chi tiết về tính tương thích có thể tham khảo trong [tài liệu `createImageBitmap` trên caniuse.com](https://caniuse.com/createimagebitmap).

## Kết luận và triển vọng

Việc triển khai `ImageBitmap` trong Look Scanned không chỉ mang lại cải thiện đáng kể về hiệu năng mà còn cho phép giải mã bất đồng bộ, render hiệu quả và tích hợp tốt hơn với Web Workers. Mặc dù vẫn cần duy trì hỗ trợ `Blob` cho các trình duyệt cũ, việc chuyển đổi dần sang `ImageBitmap` sẽ tiếp tục đem lại những lợi ích quan trọng trong tương lai.

Hãy trải nghiệm ngay những cải tiến về hiệu năng tại [Look Scanned](https://lookscanned.io)!
