---
date: "2026-04-22T15:00:00+08:00"
draft: false
title: "Cách ký PDF sao cho trông như bạn đã in, ký, rồi scan"
summary: "Chỉ thêm chữ ký số là chưa đủ khi người nhận mong đợi một bản ký trông giống bản scan. Đây là quy trình hai bước mô phỏng diện mạo in-ký-scan mà không cần máy in, và khi nào cách làm này là lựa chọn sai."
description: "Chỉ thêm chữ ký số là chưa đủ khi người nhận mong đợi một bản ký trông giống bản scan. Đây là quy trình hai bước mô phỏng diện mạo in-ký-scan mà không cần máy in, và khi nào cách làm này là lựa chọn sai."
tags: ["pdf", "chữ ký", "pdf scan", "quy trình tài liệu", "hợp đồng"]
keywords:
  - "cách ký pdf trông như scan"
  - "ký pdf giống bản in và scan"
  - "ký pdf không cần máy in"
  - "làm chữ ký trông như scan"
  - "pdf scan ký giả"
  - "chữ ký số trông như viết tay"
  - "thay thế in ký scan"
---

Hợp đồng đến lúc 11 giờ đêm. Email của người gửi lịch sự và rõ ràng: "Vui lòng in ra, ký, và gửi lại bản scan."

Tôi đang ở phòng khách sạn tại một thành phố tôi không sống ở đó, sáng hôm sau có chuyến bay. Tiệm in gần nhất đóng cửa lúc 10 giờ. Tôi chỉ có mỗi cái laptop.

Tôi đã rơi vào đúng tình huống này đủ nhiều lần để biết phần lớn người ta sẽ làm gì tiếp theo. Họ thêm một chữ ký vào Preview hoặc Adobe Reader, xuất PDF, gửi lại, và hy vọng bên kia không để ý. Đôi khi bên kia không để ý. Đôi khi file quay lại với ghi chú "vui lòng nộp bản scan, không phải chữ ký số," và cả cuộc trao đổi mất thêm một ngày.

Có một cách tốt hơn để xử lý việc này, và nó chẳng liên quan gì đến máy in.

## Câu trả lời ngắn

Nếu có ai yêu cầu bạn một PDF "đã in, ký, và scan," bạn cần hai bước, không phải một:

1. Thêm chữ ký vào PDF.
2. Áp hiệu ứng scan lên toàn bộ tài liệu đã ký.

Bước thứ hai là bước người ta hay bỏ qua. Nó cũng là bước tạo ra khác biệt giữa một file được chấp nhận và một file bị trả lại.

Lý do đơn giản. Một chữ ký số dán lên PDF số sắc nét thì nhìn ra là dán vào. Bản thân chữ ký có thể trông thật, nhưng nó nằm trên một nền không có bất kỳ dấu vết nào mà máy scan thật tạo ra. Chính sự không ăn khớp này khiến file lộ.

Nếu chữ ký và phần còn lại của trang cùng chia sẻ cùng một loại nhiễu, cùng một độ nghiêng nhẹ, cùng một cạnh mờ đi, thì file được đọc là "đã được in, ký, và scan" — dù thực tế chẳng có chuyện nào trong ba chuyện đó xảy ra.

## Vì sao "chỉ thêm chữ ký số thôi" không qua được

Hầu hết các trình chỉnh sửa PDF cho phép bạn thả chữ ký lên trang trong chưa đầy một phút. Vấn đề không phải tốc độ. Vấn đề là phần hoàn thiện.

Một quy trình chữ ký số điển hình tạo ra:

- **Một chữ ký sắc nét, đã khử răng cưa.** Mọi đường cong đều mượt. Mực không bao giờ bị lem. Không có kết cấu giấy bên dưới.
- **Một nền cũng sắc nét tương tự.** Chữ trong tài liệu thẳng hàng hoàn hảo. Không một chút nhiễu. Trang trắng tinh.
- **Một chữ ký nổi lên trên.** Khi phóng to, đôi khi bạn thấy chữ ký nằm như một lớp riêng với kiểu nén riêng, hơi khác với chữ xung quanh.

Một bản scan thật không bao giờ trông như vậy. Một bản scan thật có:

- Nhiễu li ti trên toàn trang, gồm cả vùng chữ ký
- Xoay nhẹ, thường lệch một hoặc hai độ
- Cạnh chữ bị mềm đi do cảm biến và giảm độ phân giải
- Màu giấy lệch đi, không bao giờ trắng tinh
- Dấu vết nén được áp đồng đều lên cả mực lẫn giấy

Chữ ký là một phần của trang. Máy scan không biết đó là chữ ký. Nó đối xử với mực và chữ in như nhau.

Chính sự đồng nhất đó là thứ mắt người nhận bắt được, ngay cả khi họ không diễn đạt được lý do. Một công chức đang duyệt hồ sơ visa, một nhân viên HR đang duyệt thư mời nhận việc, một chủ nhà đang duyệt hợp đồng thuê — họ đã xem hàng nghìn tài liệu scan và vài trăm PDF chữ ký dán. Khả năng nhận dạng mẫu của họ đã được huấn luyện.

## Ba cách người ta ký PDF hiện nay

Trước khi đi vào quy trình, cần làm rõ các lựa chọn và thực sự mỗi lựa chọn đạt được gì.

| Cách tiếp cận | Trông giống scan thật | Hiệu lực pháp lý | Thời gian | Cần máy in/scan |
| --- | --- | --- | --- | --- |
| DocuSign / Adobe Sign | Không (rõ ràng là số) | Mạnh (eIDAS / ESIGN) | ~2 phút | Không |
| Chữ ký gõ hoặc vẽ trong Preview/Acrobat | Không hẳn | Giống mọi chữ ký viết tay khác | ~5 phút | Không |
| In → ký tay → scan | Có | Giống mọi chữ ký viết tay khác | 10-20 phút | Có |
| Thêm chữ ký + áp hiệu ứng scan | Có | Giống mọi chữ ký viết tay khác | ~2 phút | Không |

Hàng thứ tư chính là quy trình mà bài viết này nói tới. Nó cho bạn kết quả hình ảnh của hàng thứ ba mà không cần máy in và máy scan.

Cần đọc bảng này cho đúng. PDF ký kiểu scan không tự dưng mạnh hơn một PDF ký thường. Hiệu lực pháp lý của nó giống mọi chữ ký dựa trên hình ảnh khác. Mục đích không phải là chế ra trọng lượng pháp lý. Mục đích là khớp với diện mạo mà người nhận mong đợi.

## Vì sao người nhận lại mong đợi diện mạo "in-ký-scan" ngay từ đầu

Người ta yêu cầu "bản scan" một phần vì thói quen, một phần vì quy trình.

Phần thói quen có trước cả chữ ký số. Suốt nhiều thập kỷ, cách duy nhất để truyền một tài liệu đã ký là ký trên giấy rồi fax hoặc scan. Các dấu hiệu thị giác của một bản scan — nghiêng nhẹ, nhiễu, cạnh mềm — trở thành tín hiệu rằng "một con người thật đã chạm vào tài liệu này." Các tổ chức xử lý nhiều giấy tờ đã nội hóa tín hiệu đó. Biểu mẫu của họ vẫn đòi như thế dù hạ tầng pháp lý đã tiến xa.

Phần quy trình là quán tính quan liêu. Rất nhiều biểu mẫu được viết ra khi chữ ký số chưa phổ biến, và việc cập nhật hướng dẫn chưa bao giờ leo lên đầu hàng đợi của ai cả. Người đang xem file có thể chẳng quan tâm nó có phải là bản scan hay không. Người đã viết hướng dẫn năm năm trước thì giả định rằng nó sẽ là bản scan.

Bạn sẽ thấy điều này thường nhất ở:

- Hồ sơ visa và lãnh sự
- Thủ tục nhập cư và cư trú
- Biểu mẫu của cơ quan nhà nước cấp địa phương
- Các hãng luật và kế toán truyền thống
- Hợp đồng xuyên biên giới, khi bên kia không có sẵn DocuSign
- Hồ sơ onboarding HR tại các công ty có quy trình tuân thủ kiểu cũ
- Hồ sơ yêu cầu bồi thường bảo hiểm
- Một số biểu mẫu tài khoản ngân hàng và vay vốn

Ở tất cả những trường hợp trên, con đường ít trở lực nhất là đưa cho họ thứ họ đã yêu cầu ở đúng định dạng họ mong đợi. Cãi lại chỉ dẫn hiếm khi có lợi. Chiều theo thì chỉ mất vài phút.

## Quy trình

Công cụ tôi dùng cho việc này là [Look Scanned](https://lookscanned.io), vì nó làm cả hai bước trong cùng một lượt. Chữ ký và hiệu ứng scan được áp cùng lúc, đó là thứ giữ cho chữ ký không trông như dán vào.

### 1. Chuẩn bị phiên bản cuối của PDF

Đừng ký trên bản nháp. Mọi chỉnh sửa sau khi ký đều có nghĩa là làm lại từ đầu. Nếu trong file còn bình luận, trường form hay thay đổi được theo dõi, hãy flatten trước. [Cách flatten PDF trước khi gửi](../how-to-flatten-a-pdf-before-sending/) đề cập bước đó.

### 2. Mở Look Scanned và tải file lên

Kéo PDF vào. File được xử lý cục bộ trong trình duyệt. Không có gì được tải lên máy chủ, điều này quan trọng nếu tài liệu chứa dữ liệu cá nhân, điều khoản hợp đồng, hay bất kỳ thứ gì thuộc NDA. [Có an toàn khi dùng công cụ PDF online cho tài liệu nhạy cảm?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) giải thích vì sao sự khác biệt này không phải chỉ ở bề mặt.

### 3. Thêm chữ ký

Trong công cụ có ba cách để tạo chữ ký:

- **Tải lên ảnh** của một chữ ký có sẵn. Đây là lựa chọn chân thực nhất nếu bạn đã lưu một bản scan sạch chữ ký viết tay từ tài liệu trước.
- **Gõ tên** và để công cụ render bằng font kiểu chữ ký. Hữu ích khi bạn cần thứ gì đó trông như chữ ký nhưng không có ảnh đã lưu.
- **Vẽ chữ ký** trên bảng ký bằng chuột, trackpad hoặc màn hình cảm ứng. Cách này cho kết quả tự nhiên nhất vì nét vẽ có độ không đều thật sự của con người.

Cách vẽ là mặc định của tôi trên tablet hoặc trackpad. Ảnh tải lên là mặc định trên desktop khi tôi có sẵn một cái.

Khi chữ ký đã vào, đặt nó lên dòng ký. Chỉnh kích thước cho khớp với cỡ một chữ ký thật ở tỉ lệ đó. Chữ ký quá nhỏ hoặc nằm căn giữa quá hoàn hảo cũng là một dấu hiệu lộ.

### 4. Áp hiệu ứng scan

Đây là bước làm việc thật sự.

Các thiết lập tôi hay chọn theo thứ tự này:

- **Grayscale hoặc một chút sắc sepia.** Nền trắng tinh là chỉ báo lộ. Một bản scan thật gần như không bao giờ cho ra trang trắng tinh.
- **Xoay khoảng 0,5 đến 1,5 độ.** Hơn thế trông cẩu thả. Ít hơn trông dựng. Nếu tài liệu nhiều trang, bật ngẫu nhiên hóa độ xoay theo từng trang để các trang không cùng nghiêng giống nhau.
- **Nhiễu thấp, không phải nhiễu cao.** Máy scan hiện đại rất êm. Nhiễu dày là thứ mà các công cụ nhìn ra là giả sẽ tạo ra. Một hạt nhẹ là đủ.
- **Làm mờ nhẹ.** Độ mềm của cảm biến rất tinh tế. Bạn không muốn chữ trở nên không đọc được; bạn chỉ muốn nó mất cái cạnh vector số hoàn hảo.
- **DPI quanh 150-200.** DPI cao hơn không có nghĩa là chân thực hơn. Máy scan văn phòng thật gần như luôn xuất ra 150 hoặc 200 DPI theo mặc định. Một "bản scan" 600 DPI đã đáng nghi tự thân nó.

Ý của các giá trị mặc định này là sự kiềm chế. Hầu hết các bản scan giả thất bại vì hiệu ứng bị chỉnh lên quá cao, chứ không phải quá thấp.

### 5. Tải về và kiểm tra kết quả

Trước khi gửi, mở file bằng một trình xem khác trình bạn đã dùng để tạo. Phóng to vào chữ ký. Chữ ký phải có cùng kết cấu nhiễu như chữ xung quanh. Nếu chữ ký vẫn sắc nét trong khi phần còn lại đã mềm đi, hiệu ứng scan đã không áp lên lớp chữ ký và bạn cần xuất lại.

Thử chọn chữ trong trang. Lẽ ra bạn không chọn được. Nếu file vẫn còn một lớp chữ chọn được, nó chưa thực sự được rasterize, và một người nhận cẩn thận có thể nhận ra.

Bước xác minh đó bắt được nhiều lỗi hơn người ta tưởng.

## Khi nào quy trình này là lựa chọn sai

Có những tình huống mà PDF ký kiểu scan tệ hơn một chữ ký số thông thường, chứ không tốt hơn.

**Khi trọng lượng pháp lý quan trọng hơn diện mạo.** Chữ ký số được bảo chứng bởi DocuSign, Adobe Sign, hay bất kỳ nhà cung cấp đủ điều kiện theo eIDAS nào đều mang theo bằng chứng mã hóa về danh tính người ký và tính toàn vẹn của tài liệu. PDF kiểu scan không mang theo gì trong số đó. Với bất cứ thứ gì có rủi ro pháp lý cao — sáp nhập, thỏa thuận tài chính lớn, hợp đồng chịu quy định — hãy dùng lựa chọn mã hóa. [PDF scan so với PDF chỉnh sửa được: nên gửi cái nào?](../scanned-pdf-vs-editable-pdf/) đi sâu vào việc chọn định dạng.

**Khi công ty bạn có quy trình bắt buộc.** Nếu nơi bạn làm dùng DocuSign cho hợp đồng, thì dùng DocuSign. Một PDF kiểu scan sẽ không tích hợp được với audit trail của họ, và việc nộp một file như vậy trong khi quy trình mong đợi một phong bì đã ký sẽ tạo ma sát.

**Khi người nhận yêu cầu rõ ràng là chữ ký số.** Một số tổ chức đã đi theo hướng ngược lại và giờ từ chối ảnh scan. Hãy đọc hướng dẫn. Nếu họ yêu cầu PDF được ký bằng mã hóa, file kiểu scan là câu trả lời sai.

**Khi tài liệu sẽ được máy xử lý.** Nếu hệ thống nhận chạy OCR, rút trường dữ liệu, hoặc đưa file vào một quy trình mong đợi chữ chọn được, PDF kiểu scan đã rasterize sẽ phá vỡ pipeline đó. Trường hợp đó, hãy gửi PDF chỉnh sửa được cùng một chữ ký số sạch.

Quy tắc ngón tay cái: ký kiểu scan dành cho việc con người duyệt giấy tờ do con người đọc. Nó không phải phương án thay thế phổ quát.

## FAQ

### Người nhận có thực sự phân biệt được giữa bản scan thật và PDF kiểu scan không?

Đôi khi, và điều đó phụ thuộc vào việc hiệu ứng được áp cẩn thận đến đâu. Với các thiết lập vừa phải và một chữ ký thật (vẽ hoặc tải lên, không phải gõ), kết quả không thể phân biệt được với bản scan thật đối với người duyệt thông thường. Giám định pháp y là chuyện khác, và với bất kỳ tình huống nào mà việc đó quan trọng, quy trình này không phù hợp.

### Việc này có hợp pháp không?

Một PDF ký kiểu scan có cùng hiệu lực pháp lý như bất kỳ chữ ký viết tay đã scan nào khác, vốn được chấp nhận rộng rãi ở hầu hết các khu vực pháp lý đối với hợp đồng thông thường. Nó không tương đương với chữ ký điện tử đủ điều kiện (eIDAS) hay chữ ký số theo ESIGN Act, vốn mang theo các bảo đảm mã hóa mạnh hơn. Với tài liệu đòi hỏi mức độ đảm bảo đó, hãy dùng nhà cung cấp chữ ký điện tử đủ điều kiện.

### Tôi đã có DocuSign rồi. Có cần cái này không?

Nếu người nhận chấp nhận phong bì DocuSign, hãy dùng DocuSign. Lý do để dùng quy trình này chỉ đúng trong trường hợp người nhận muốn một PDF ký trông giống scan và không có gì khác làm họ hài lòng.

### Tôi có dùng cái này cho hồ sơ visa, nhập cư hay lãnh sự được không?

Trên thực tế, nhiều người nộp đơn có dùng, vì những hồ sơ đó thường yêu cầu bản scan và không cung cấp đường dẫn chữ ký số. Hãy làm đúng điều hồ sơ yêu cầu. Nếu hướng dẫn yêu cầu cụ thể là phải ký gốc trước mặt công chứng viên, thì không có quy trình số nào thay được.

### Có cần máy scan vật lý không?

Không. Đó mới là điểm mấu chốt. Toàn bộ quy trình chạy trong trình duyệt. Đầu vào duy nhất là một PDF số và một chữ ký, đầu ra là một PDF trông như đã đi qua máy scan.

### Chữ ký có chỉnh sửa được trong PDF cuối cùng không?

Không. Sau khi hiệu ứng scan được áp, toàn bộ trang đã được rasterize thành ảnh. Chữ ký trở thành một phần của trang giống hệt như khi bạn đã in, ký rồi scan thật sự. Không thể chọn, di chuyển hay chỉnh sửa nó sau thời điểm đó. Nếu sau này bạn cần một bản chỉnh sửa được sạch, hãy giữ phiên bản trước khi áp scan.

## Lời kết

Người ở đầu kia email này thường không đang kiểm tra bạn. Họ đang làm theo một quy trình do ai đó viết ra trước khi việc ký số trở nên bình thường. Họ muốn một file khớp với thứ họ quen duyệt, và họ muốn tiếp tục công việc trong ngày của mình.

Đưa cho họ file trông đúng như thứ họ đã yêu cầu, kiểm tra trước khi gửi, và giữ bản gốc chỉnh sửa được cho riêng bạn.

Thường thì đó là toàn bộ công việc.
