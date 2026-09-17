// 13 hồ sơ dự án, lấy từ mục "Câu chuyện thành công" trên fis247.fpt.com.
// Trang gốc liệt kê 14 thẻ nhưng một bài xuất hiện hai lần, nên chỉ còn 13.
// Ảnh đã tải về và chuyển WebP trong /public/images/cases (5,5MB -> 1,0MB).

export const CASE_CATS: { id: string; label: string }[] = [
  { id: "baohanh", label: "Bảo hành" },
  { id: "baotri", label: "Bảo trì, bảo dưỡng" },
  { id: "suachua", label: "Sửa chữa, thay thế linh kiện" },
  { id: "dichuyen", label: "Di chuyển trung tâm dữ liệu" },
  { id: "tuvan", label: "Tư vấn ITSM" },
  { id: "trienkhai", label: "Triển khai thiết bị chuyên dụng" },
  { id: "chothue", label: "Cho thuê nguồn lực & thiết bị" },
  { id: "aka247", label: "ServiceDesk AKA247" },
  { id: "atmguard", label: "FPT ATM Guard" },
  { id: "idreader", label: "FPT IDReader" },
  { id: "kiosk", label: "FPT Kiosk" },
  { id: "smartaudio", label: "FPT Smart Audio Receiver" }
];

export type CaseStudy = {
  slug: string;
  cat: string;
  title: string;
  image: string;
  /** Đoạn giới thiệu khách hàng, luôn ẩn danh trong bài gốc */
  khachHang: string;
  tenDuAn: string;
  baiToan: string[];
  giaiPhap: string[];
  ketQua: string[];
  source: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "cung-cap-ha-tang-va-dich-vu-cho-he-thong-xo-so-dien-toan",
    cat: "baohanh",
    title: "Cung cấp Hạ tầng và Dịch vụ Cho Hệ thống Xổ số Điện toán",
    image: "/images/cases/cung-cap-ha-tang-va-dich-vu-cho-he-thong-xo-so-dien-toan.webp",
    khachHang: "Khách hàng là một doanh nghiệp có vốn đầu tư nước ngoài, chuyên kinh doanh xổ số điện toán tại Việt Nam. Đơn vị chịu trách nhiệm triển khai, vận hành và phát triển hệ thống kỹ thuật phục vụ hàng triệu giao dịch mỗi ngày, với yêu cầu cao về tính ổn định, tốc độ và bảo mật.",
    tenDuAn: "Cung cấp thiết bị, triển khai, bảo hành và bảo trì hệ thống xổ số điện toán",
    baiToan: [
      "Triển khai nhanh và ổn định hệ thống máy chủ xổ số điện toán, đảm bảo sẵn sàng 24/7.",
      "Mở rộng mạng lưới điểm bán hàng (POS) liên tục tại các tỉnh, thành phố lớn và tiến tới phủ sóng toàn quốc.",
      "Đào tạo và chuyển giao công nghệ cho đội ngũ kỹ thuật nội bộ, đảm bảo vận hành bền vững sau khi bàn giao."
    ],
    giaiPhap: [
      "FPT IS đồng hành từ khâu thiết kế, cung cấp đến vận hành – bảo trì toàn diện:",
      "Thuê và vận hành hạ tầng DC/DR",
      "Cung cấp trung tâm dữ liệu chính (DC) và dự phòng (DR) với dịch vụ cho thuê máy chủ, lưu trữ và kết nối mạng.",
      "Trang bị thiết bị CNTT chuyên dụng",
      "Thiết bị định tuyến, tường lửa, bộ lưu điện (UPS) và hệ thống giám sát an toàn thông tin.",
      "Triển khai hạ tầng kết nối POS",
      "Mạng 3G và FTTH tùy theo vị trí, đảm bảo đường truyền ổn định cho điểm bán.",
      "Xây dựng và cấu hình hệ thống POS",
      "Cài đặt phần cứng, phần mềm tại từng điểm bán, kết nối về trung tâm giám sát.",
      "Bảo hành & Bảo trì định kỳ",
      "Hỗ trợ 24/7, thực hiện bảo trì định kỳ cho thiết bị POS và đường truyền, đảm bảo độ sẵn sàng trên 99,9%."
    ],
    ketQua: [
      "14.000+ điểm bán hàng POS đã được triển khai tại 50+ tỉnh, thành.",
      "5.000+ điểm POS đang được duy trì hoạt động ổn định với dịch vụ bảo trì, hạ tầng 3G/FTTH do FPT IS cung cấp.",
      "Hệ thống hoạt động liên tục, đáp ứng cao điểm phát hành và quay số, góp phần nâng cao trải nghiệm khách hàng và hiệu quả kinh doanh cho đối tác."
    ],
    source: "https://fis247.fpt.com/cung-cap-ha-tang-va-dich-vu-cho-he-thong-xo-so-dien-toan/"
  },
  {
    slug: "dich-vu-bao-hanh-bao-tri-he-thon",
    cat: "baohanh",
    title: "Dịch vụ Bảo hành & Bảo trì Hệ thống Mạng Thanh toán Diện rộng cho Khách hàng Ngành Tài chính – Ngân hàng",
    image: "/images/cases/dich-vu-bao-hanh-bao-tri-he-thon.webp",
    khachHang: "Khách hàng là một cơ quan nhà nước hoạt động trong lĩnh vực ngân hàng – tài chính, với hệ thống công nghệ thông tin trải dài khắp 63 tỉnh thành trên cả nước. Đây là hệ thống đóng vai trò huyết mạch trong việc đảm bảo hoạt động lưu thông tiền tệ quốc gia, yêu cầu cao về tính ổn định, liên tục và bảo mật.",
    tenDuAn: "Cung cấp Dịch vụ Bảo hành & Bảo trì Hệ thống Mạng Thanh toán Diện rộng",
    baiToan: [
      "Do tính chất đặc biệt quan trọng của hệ thống, khách hàng yêu cầu:",
      "Đảm bảo vận hành liên tục 24/7.",
      "Giảm thiểu tối đa thời gian gián đoạn khi xảy ra sự cố.",
      "Đảm bảo an toàn thông tin và bảo mật mạng nhiều lớp.",
      "Hạ tầng công nghệ thông tin tại thời điểm triển khai bao gồm:",
      "Trung tâm dữ liệu (DC) và Trung tâm dữ liệu dự phòng (DR).",
      "Các trung tâm vùng và chi nhánh tại 63 tỉnh thành.",
      "Thiết bị mạng chuyên dụng như:",
      "Hệ thống Cisco ONS.",
      "Thiết bị chuyển mạch lõi Cisco.",
      "Router Cisco tại tất cả các điểm kết nối.",
      "Thiết bị an ninh bảo mật nhiều lớp: Checkpoint, Impeva, v.v."
    ],
    giaiPhap: [
      "Công ty FPT IS đã cung cấp dịch vụ bảo hành – bảo trì toàn diện nhằm duy trì hoạt động ổn định cho hệ thống mạng thanh toán quốc gia, bao gồm:",
      "1. Bảo trì định kỳ và hỗ trợ kỹ thuật chuyên sâu",
      "Kiểm tra tổng thể hàng ngày nhằm đảm bảo hệ thống luôn trong trạng thái sẵn sàng.",
      "Bảo trì tại chỗ định kỳ 2 tháng/lần tại DC, DR và các Trung tâm vùng.",
      "Bảo trì từ xa định kỳ 2 tháng/lần tại các đầu mối quan trọng.",
      "Bảo trì hàng quý cho các chi nhánh tại 63 tỉnh thành.",
      "2. Hỗ trợ sự cố 24/7",
      "Đảm bảo thời gian phản hồi nhanh chóng:",
      "Tối đa 2 giờ cho DC, DR và Trung tâm vùng.",
      "Từ 4 đến 24 giờ cho các địa phương còn lại.",
      "Luôn có đội ngũ kỹ sư trực sẵn sàng xử lý sự cố mọi thời điểm.",
      "3. Cập nhật & tối ưu hệ thống",
      "Báo cáo hiệu suất định kỳ, cập nhật bản vá bảo mật và phần mềm mới.",
      "Tối ưu hóa hệ thống theo lộ trình đánh giá định kỳ.",
      "Chuyển giao công nghệ và đào tạo cho đội ngũ kỹ thuật của khách hàng.",
      "4. Dịch vụ chính hãng",
      "Toàn bộ thiết bị đều được bảo trì theo tiêu chuẩn chính hãng, đảm bảo chất lượng, hiệu suất và bảo mật cao nhất."
    ],
    ketQua: [
      "Trong suốt 05 năm triển khai dịch vụ, hệ thống mạng của khách hàng:",
      "Vận hành ổn định liên tục, không để xảy ra gián đoạn nghiêm trọng.",
      "100% sự cố được xử lý đúng thời hạn theo cam kết SLA.",
      "Được cập nhật đầy đủ bản vá bảo mật và phần mềm, đảm bảo tính an toàn và hiệu quả.",
      "Khách hàng hoàn toàn tin tưởng vào dịch vụ hỗ trợ kỹ thuật 24/7 do FPT IS cung cấp."
    ],
    source: "https://fis247.fpt.com/dich-vu-bao-hanh-bao-tri-he-thon/"
  },
  {
    slug: "dich-vu-bao-duong-tb-chuyen-dung",
    cat: "baotri",
    title: "Dịch vụ Bảo dưỡng thiết bị chuyên dụng",
    image: "/images/cases/dich-vu-bao-duong-tb-chuyen-dung.webp",
    khachHang: "Một trong những ngân hàng thương mại Nhà nước lớn nhất tại Việt Nam Là ngân hàng đóng vai trò trụ cột trong hệ thống tài chính quốc gia, đặc biệt trong các lĩnh vực giao dịch đối ngoại và thanh toán quốc tế, ngân hàng này không ngừng tiên phong trong việc ứng dụng công nghệ nhằm nâng cao chất lượng dịch vụ khách hàng.",
    tenDuAn: "Dịch vụ bảo trì trọn gói cho hệ thống máy rút/ nộp tiền tự động ATM (Automated Teller Machine)/ CRM (Cash Recycling Machine) toàn quốc",
    baiToan: [
      "Với vị thế là một trong những ngân hàng đầu tiên đầu tư hệ thống ATM/ CRM hiện đại phủ khắp cả nước, khách hàng sở hữu:",
      "Hơn 2.500 thiết bị ATM/ CRM",
      "Mạng lưới rộng khắp với hơn 600 chi nhánh/phòng giao dịch tại 60+ tỉnh thành",
      "Trong bối cảnh đó, bài toán đặt ra là làm thế nào để đảm bảo hệ thống ATM/CRM hoạt động ổn định, liên tục và hiệu quả, phục vụ khách hàng 24/7, đồng thời tuân thủ quy định khắc phục sự cố trong vòng 24 giờ theo Thông tư 31/VBHN-NHNN của Ngân hàng Nhà nước."
    ],
    giaiPhap: [
      "Với kinh nghiệm triển khai nhiều dự án lớn trong lĩnh vực tài chính – ngân hàng, FPT IS đã thiết kế và cung cấp gói dịch vụ bảo trì trọn gói cho toàn bộ hệ thống ATM/CRM, bao gồm:",
      "1. Dịch vụ triển khai và bảo hành thiết bị",
      "Cung cấp và triển khai thiết bị ATM/CRM theo tiêu chuẩn khắt khe của nhà sản xuất và yêu cầu từ ngân hàng.",
      "2. Dịch vụ bảo trì – bảo dưỡng toàn diện",
      "Bảo dưỡng định kỳ nhằm duy trì thiết bị luôn trong trạng thái tối ưu.",
      "Phòng ngừa rủi ro hỏng hóc thông qua việc phát hiện sớm và thay thế các linh kiện có dấu hiệu suy giảm chất lượng.",
      "Xử lý sự cố 24/7, đảm bảo thiết bị sẵn sàng phục vụ khách hàng mọi lúc, mọi nơi.",
      "3. Dịch vụ giám sát an ninh thiết bị",
      "Triển khai các giải pháp cảnh báo an ninh, tăng cường bảo vệ hệ thống ATM/CRM trước nguy cơ mất an toàn."
    ],
    ketQua: [
      "Hệ thống ATM/CRM vận hành ổn định, không ghi nhận sự cố lớn ảnh hưởng đến toàn hệ thống.",
      "Sự cố được xử lý nhanh chóng, đúng cam kết thời gian, giúp nâng cao trải nghiệm người dùng.",
      "Tăng độ tin cậy và an toàn hệ thống, nhờ vào việc kiểm tra định kỳ và chủ động thay thế linh kiện có nguy cơ hư hỏng.",
      "FPT IS đã góp phần giúp ngân hàng:",
      "Tối ưu hóa chi phí vận hành",
      "Nâng cao hiệu quả quản lý hệ thống thiết bị",
      "Khẳng định chất lượng dịch vụ và uy tín thương hiệu trong mắt khách hàng"
    ],
    source: "https://fis247.fpt.com/dich-vu-bao-duong-tb-chuyen-dung/"
  },
  {
    slug: "dich-vu-bao-duong-bao-tri-trung-tam-du-lieu",
    cat: "baotri",
    title: "Dịch vụ Bảo dưỡng, bảo trì Trung tâm dữ liệu",
    image: "/images/cases/dich-vu-bao-duong-bao-tri-trung-tam-du-lieu.webp",
    khachHang: "Một ngân hàng thương mại cổ phần có vốn nhà nước chi phối, giữ vai trò nòng cốt trong hệ thống tài chính – ngân hàng Việt Nam. Tổ chức này có quy mô lớn, đặc biệt nổi bật trong các lĩnh vực thanh toán, ngoại hối và dịch vụ ngân hàng bán lẻ.",
    tenDuAn: "Dịch vụ trọn gói Bảo hành, Bảo trì và Bảo dưỡng thiết bị hạ tầng phòng máy chủ (DC/DR)",
    baiToan: [
      "Là một tổ chức tài chính trọng yếu với yêu cầu duy trì hoạt động ổn định 24/7, khách hàng cần một giải pháp bảo trì chuyên nghiệp để đảm bảo không xảy ra gián đoạn hệ thống, đặc biệt trong các tình huống khẩn cấp. Tại thời điểm triển khai, hệ thống bao gồm:",
      "01 Trung tâm Dữ liệu chính (DC) với khoảng 50 tủ rack",
      "01 Trung tâm Dữ liệu dự phòng (DR) với khoảng 30 tủ rack",
      "Hạ tầng tại các trung tâm dữ liệu gồm nhiều hệ thống thiết yếu:",
      "Hệ thống điện: UPS, máy phát điện, tủ điện cấp nguồn và phân phối",
      "Hệ thống làm mát: Điều hòa chính xác, dân dụng phụ trợ, hệ thống giải nhiệt bằng nước (bơm, dàn giải nhiệt, đường ống…)",
      "Hệ thống PCCC: Cảnh báo cháy sớm Vesda, hệ thống chữa cháy khí FM200",
      "Hệ thống giám sát môi trường: Cảm biến rò rỉ chất lỏng (Waterleak), giám sát nhiệt độ, độ ẩm",
      "Hệ thống kiểm soát truy cập: Access Control"
    ],
    giaiPhap: [
      "FPT IS triển khai dịch vụ bảo trì hạ tầng CNTT trọn gói, đáp ứng toàn diện các yêu cầu khắt khe của khách hàng:",
      "Hỗ trợ kỹ thuật 24/7 tại cả hai địa điểm DC và DR",
      "Bảo trì định kỳ hàng tháng tại chỗ cho toàn bộ hệ thống",
      "Báo cáo chi tiết trước và sau bảo trì cho từng nhóm thiết bị",
      "Khắc phục sự cố 24/7, thời gian đáp ứng chỉ 2 giờ",
      "Dịch vụ chính hãng: Linh kiện và thiết bị thay thế từ nhà sản xuất, đảm bảo thời gian xử lý lỗi dưới 4 giờ, hoặc tối đa 12 giờ khi cần thay thế",
      "Đánh giá & tối ưu hóa hệ thống định kỳ, đảm bảo hệ thống luôn ở trạng thái tốt nhất"
    ],
    ketQua: [
      "Trong suốt 03 năm triển khai dịch vụ, hệ thống hạ tầng CNTT của khách hàng đã đạt được các kết quả ấn tượng:",
      "Hoạt động ổn định, liên tục 24/7, không gián đoạn",
      "100% sự cố được xử lý đúng hạn",
      "Không phát sinh lỗi nghiêm trọng làm gián đoạn dịch vụ hoặc ảnh hưởng đến vận hành ngân hàng",
      "🔍 Kết luận",
      "Dự án đã khẳng định năng lực triển khai dịch vụ bảo trì chuyên sâu của FPT IS, đồng thời góp phần giúp khách hàng đảm bảo sự ổn định, an toàn và hiệu suất tối ưu cho hạ tầng trung tâm dữ liệu – yếu tố then chốt trong hoạt động ngân hàng hiện đại."
    ],
    source: "https://fis247.fpt.com/dich-vu-bao-duong-bao-tri-trung-tam-du-lieu/"
  },
  {
    slug: "dich-vu-sua-chua-cntt",
    cat: "suachua",
    title: "Dịch vụ Sửa chữa Thiết bị CNTT & UPS cho Tập đoàn Đầu tư Đa Ngành",
    image: "/images/cases/dich-vu-sua-chua-cntt.webp",
    khachHang: "Khách hàng là một tập đoàn đa ngành có vốn đầu tư nước ngoài, hoạt động tại Việt Nam trong nhiều lĩnh vực như bất động sản, tài chính, dịch vụ và tiêu dùng. Với quy mô rộng khắp và hệ thống vận hành phức tạp, doanh nghiệp yêu cầu các dịch vụ kỹ thuật có tính ổn định, phản ứng nhanh và tối ưu chi phí.",
    tenDuAn: "Dịch vụ sửa chữa thiết bị CNTT (Thiết bị định tuyến, chuyển mạch) và bộ lưu điện (UPS)",
    baiToan: [
      "Khách hàng hiện đang vận hành hơn 6.000 hệ thống máy bán hàng trải rộng trên toàn quốc. Trong quá trình hoạt động, phát sinh hai nhu cầu chính:",
      "Hỗ trợ kỹ thuật kịp thời khi xảy ra lỗi hoặc hỏng hóc thiết bị để tránh gián đoạn kinh doanh.",
      "Giải pháp sửa chữa và bảo dưỡng định kỳ cho số lượng lớn thiết bị CNTT và bộ lưu điện (UPS) đã qua sử dụng nhằm giảm thiểu chi phí so với việc thay mới toàn bộ."
    ],
    giaiPhap: [
      "FPT IS triển khai một mô hình dịch vụ sửa chữa chuyên biệt và linh hoạt, đáp ứng đầy đủ các yêu cầu về thời gian, chất lượng và tối ưu chi phí:",
      "Dự trữ sẵn thiết bị thay thế tại các Trung tâm Dịch vụ trên toàn quốc, đảm bảo xử lý lỗi kịp thời và duy trì vận hành liên tục cho hệ thống bán hàng.",
      "Thiết bị hỏng sau khi thay thế được chuyển về Trung tâm sửa chữa, nơi FPT IS sở hữu hệ thống máy móc hiện đại và đội ngũ kỹ thuật chuyên sâu.",
      "Linh kiện sử dụng trong sửa chữa được nhập từ các nhà cung cấp uy tín, đảm bảo chất lượng và độ tin cậy sau phục hồi.",
      "Thiết bị sau khi sửa chữa đều được kiểm tra kỹ lưỡng, chạy thử nghiệm trước khi tái sử dụng, và được bảo hành từ 3 đến 6 tháng theo yêu cầu của khách hàng."
    ],
    ketQua: [
      "Hệ thống máy bán hàng của khách hàng được duy trì ổn định, nhờ có thiết bị dự phòng thay thế nhanh luôn sẵn sàng tại chỗ.",
      "Chi phí vận hành giảm đáng kể so với việc sử dụng dịch vụ thay thế chính hãng hoặc mua mới.",
      "Tuổi thọ thiết bị được kéo dài, tận dụng tối đa giá trị tài sản hiện có cho đến khi được thay thế bằng sản phẩm mới.",
      "🔍 Kết luận",
      "Dịch vụ sửa chữa thiết bị CNTT và UPS do FPT IS cung cấp không chỉ giúp khách hàng giảm thiểu rủi ro gián đoạn hoạt động kinh doanh, mà còn mang lại giá trị tối ưu về chi phí đầu tư và hiệu quả khai thác thiết bị. Đây là giải pháp phù hợp cho các doanh nghiệp có hệ thống vận hành lớn và phân tán tại nhiều địa điểm."
    ],
    source: "https://fis247.fpt.com/dich-vu-sua-chua-cntt/"
  },
  {
    slug: "dich-vu-di-chuyen-trung-tam-du-lieu",
    cat: "dichuyen",
    title: "Dịch vụ Di chuyển Trung tâm Dữ liệu",
    image: "/images/cases/dich-vu-di-chuyen-trung-tam-du-lieu.webp",
    khachHang: "Khách hàng là ngân hàng thương mại cổ phần đầu tiên được thành lập tại Việt Nam, ra đời trong thời kỳ kinh tế mở cửa và phát triển của Việt Nam. Với hệ thống vận hành trải rộng từ Bắc đến Nam, ngân hàng đóng vai trò quan trọng trong việc hiện đại hóa dịch vụ tài chính và chuyển đổi số trong lĩnh vực ngân hàng.",
    tenDuAn: "Di chuyển thiết bị CNTT tại Trung tâm dữ liệu (DC) và Trung tâm dữ liệu dự phòng (DR)",
    baiToan: [
      "Ngân hàng đang vận hành song song một trung tâm dữ liệu chính (DC) và hai trung tâm dữ liệu dự phòng (DR) tại Hà Nội và TP. Hồ Chí Minh. Trước yêu cầu chiến lược về tối ưu vận hành và nâng cao tiêu chuẩn an toàn – bảo mật, ngân hàng quyết định chuyển đổi mô hình từ tự vận hành sang thuê chỗ đặt trung tâm dữ liệu chuyên nghiệp.",
      "Bài toán đặt ra bao gồm:",
      "Di dời toàn bộ thiết bị hạ tầng CNTT từ DC và DR hiện tại tại Hà Nội và TP.HCM đến địa điểm thuê mới tại Hà Nội.",
      "Đảm bảo an toàn tuyệt đối cho dữ liệu và thiết bị trong suốt quá trình di chuyển.",
      "Đảm bảo hệ thống vận hành liên tục, không ảnh hưởng đến dịch vụ ngân hàng sau khi hoàn tất."
    ],
    giaiPhap: [
      "FPT IS triển khai dịch vụ di chuyển phòng máy chủ toàn diện, tuân thủ quy trình 19 bước chuyên biệt, bao gồm các hạng mục:",
      "🔹 Phạm vi công việc:",
      "Di chuyển 27 racks từ DC tại Hà Nội",
      "Di chuyển 22 racks từ DR tại Hà Nội",
      "Di chuyển các thiết bị từ DR tại TP. Hồ Chí Minh ra địa điểm mới tại Hà Nội",
      "🔹 Nội dung triển khai:",
      "Khảo sát hiện trạng, thiết kế lại layout và lắp đặt tại địa điểm mới",
      "Lập kế hoạch chi tiết, đánh giá rủi ro và xây dựng các phương án phòng ngừa",
      "Thực hiện di chuyển trọn gói: sao lưu cấu hình, ngắt kết nối, vận chuyển, lắp đặt, đấu nối và chạy thử",
      "Cung cấp thiết bị dự phòng nóng, sẵn sàng thay thế trong trường hợp phát sinh lỗi",
      "Bảo hành và bảo hiểm thiết bị trong quá trình di chuyển",
      "Hỗ trợ kỹ thuật sau triển khai, đảm bảo hệ thống ổn định vận hành trở lại ngay lập tức"
    ],
    ketQua: [
      "Hoàn tất di chuyển 49 racks từ Hà Nội và TP.HCM về địa điểm thuê ngoài tại Hà Nội",
      "Tỷ lệ lỗi phát sinh cực thấp (<0,1%), tất cả thiết bị hỏng hóc được thay thế đúng cam kết",
      "Không có sự cố gián đoạn nghiêm trọng, toàn bộ hệ thống hoạt động ổn định sau di chuyển",
      "Toàn bộ dự án được triển khai thần tốc trong vòng 6 tháng, đảm bảo tiến độ chiến lược chuyển đổi mô hình vận hành của ngân hàng",
      "🔍 Kết luận",
      "Với năng lực kỹ thuật cao, quy trình triển khai bài bản và kinh nghiệm thực tiễn, FPT IS đã đồng hành cùng ngân hàng trong một dự án di chuyển trung tâm dữ liệu quy mô lớn và phức tạp, đảm bảo tính liên tục, an toàn và tối ưu chi phí vận hành."
    ],
    source: "https://fis247.fpt.com/dich-vu-di-chuyen-trung-tam-du-lieu/"
  },
  {
    slug: "fpt-is-dong-hanh-cung-ngan-hang-so-1-viet-nam-xay-dung-he-thong-itsm-hien-dai",
    cat: "tuvan",
    title: "FPT IS đồng hành cùng Ngân hàng số 1 Việt Nam xây dựng hệ thống ITSM hiện đại",
    image: "/images/cases/fpt-is-dong-hanh-cung-ngan-hang-so-1-viet-nam-xay-dung-he-thong-itsm-hien-dai.webp",
    khachHang: "Ngân hàng số 1 tại Việt Nam – Top 100 ngân hàng lớn nhất khu vực Châu Á Là một trong những tổ chức tài chính hàng đầu, khách hàng không ngừng đổi mới và đầu tư vào công nghệ nhằm nâng cao chất lượng dịch vụ và tối ưu hóa hoạt động vận hành. Với hệ thống CNTT quy mô lớn và phức tạp, yêu cầu đặt ra là phải có nền tảng quản lý dịch vụ hiệu quả, minh bạch và chuyên nghiệp.",
    tenDuAn: "Tư vấn thiết kế quy trình và triển khai nền tảng quản lý dịch vụ CNTT theo chuẩn ITIL/ITSM",
    baiToan: [
      "Trong quá trình mở rộng và số hóa mạnh mẽ, ngân hàng phải đối mặt với những vấn đề:",
      "Hệ thống vận hành CNTT gồm nhiều quy trình, nhưng chưa được chuẩn hóa và đồng bộ trên toàn bộ khối CNTT.",
      "Việc theo dõi, xử lý yêu cầu dịch vụ và sự cố vẫn chủ yếu thủ công, phân tán, thiếu tính minh bạch và khó kiểm soát.",
      "Cần nâng cao chất lượng dịch vụ CNTT, cải thiện trải nghiệm người dùng nội bộ và đảm bảo thực thi SLA đúng chuẩn.",
      "Mục tiêu của khách hàng: Xây dựng nền tảng quản lý dịch vụ CNTT hiện đại, bài bản, hướng tới chiến lược chuyển đổi số toàn diện và tự động hóa vận hành."
    ],
    giaiPhap: [
      "FPT IS đã triển khai giải pháp quản lý dịch vụ CNTT toàn diện, dựa trên khung quản trị ITIL, bao gồm:",
      "1. Tư vấn và thiết kế quy trình theo ITIL",
      "Đánh giá toàn diện hiện trạng vận hành",
      "Xây dựng 09 quy trình ITIL cốt lõi, phù hợp với đặc thù hoạt động của ngân hàng",
      "2. Triển khai nền tảng ITSM",
      "Lựa chọn và triển khai BMC Remedy (Service Management Suite & Digital Workplace Advanced)",
      "Hệ thống hóa và tự động hóa toàn bộ quy trình xử lý yêu cầu, sự cố, thay đổi, v.v.",
      "3. Tích hợp công cụ giám sát ITOM",
      "Kết nối các hệ thống giám sát như BMC Discovery, BMC TrueSight Operations, SolarWinds NPM, MicroFocus Silk",
      "Đảm bảo giám sát 24/7, cảnh báo và phản ứng kịp thời với các vấn đề tiềm ẩn",
      "4. Xây dựng và đồng bộ Cơ sở dữ liệu quản lý cấu hình (CMDB)",
      "Quản lý tập trung tài sản CNTT và các thành phần cấu hình (CI)",
      "Tăng khả năng kiểm soát, hỗ trợ phân tích nguyên nhân và ra quyết định",
      "5. Tích hợp toàn diện hệ sinh thái vận hành",
      "Liên kết chặt chẽ giữa ITSM – ITOM – CMDB",
      "Đảm bảo luồng dữ liệu xuyên suốt, phục vụ hiệu quả cho vận hành và cải tiến dịch vụ"
    ],
    ketQua: [
      "Dự án được triển khai thành công trong vòng 12 tháng, trở thành dự án ITSM – ITOM – CMDB lớn nhất tại Việt Nam trong lĩnh vực tài chính – ngân hàng.",
      "Một số kết quả nổi bật:",
      "Chuẩn hóa và đồng bộ 09 quy trình vận hành CNTT:",
      "Quản lý yêu cầu hỗ trợ",
      "Quản lý sự cố",
      "Quản lý thay đổi",
      "Quản lý vấn đề",
      "Quản lý danh mục dịch vụ",
      "Quản lý SLA",
      "Quản lý cấu hình dịch vụ",
      "Quản lý sự kiện",
      "Quản lý kiểm thử và đánh giá dịch vụ",
      "Hệ thống giám sát hoạt động 24/7, đảm bảo:",
      "Phát hiện sớm sự cố",
      "Giảm thiểu thời gian khắc phục",
      "Duy trì tính sẵn sàng và ổn định cao",
      "Tăng cường năng lực quản lý tài sản CNTT:",
      "CMDB luôn được cập nhật",
      "Hỗ trợ phân tích nguyên nhân gốc (RCA)",
      "Tối ưu chi phí và nguồn lực quản trị",
      "Giải pháp đã tạo ra nền tảng vững chắc cho khách hàng trong quá trình chuyển đổi số, giúp:",
      "Chuẩn hóa vận hành theo chuẩn quốc tế",
      "Tăng hiệu quả quản lý dịch vụ CNTT",
      "Mở rộng khả năng tích hợp và tự động hóa trong tương lai",
      "FPT IS tự hào đồng hành cùng khách hàng trong hành trình nâng cao năng lực vận hành CNTT, xây dựng hệ thống quản trị dịch vụ hiện đại, hiệu quả và bền vững."
    ],
    source: "https://fis247.fpt.com/fpt-is-dong-hanh-cung-ngan-hang-so-1-viet-nam-xay-dung-he-thong-itsm-hien-dai/"
  },
  {
    slug: "dich-vu-it-outsourcing-cho-tap-doan-my-pham-cao-cap",
    cat: "chothue",
    title: "Dịch vụ IT Outsourcing cho Tập đoàn Mỹ phẩm cao cấp",
    image: "/images/cases/dich-vu-it-outsourcing-cho-tap-doan-my-pham-cao-cap.webp",
    khachHang: "Một doanh nghiệp nước ngoài chuyên sản xuất và phân phối các sản phẩm trong lĩnh vực chăm sóc sắc đẹp cao cấp. Tại Việt Nam, doanh nghiệp duy trì hệ thống gian hàng tại các trung tâm thương mại hạng sang ở các thành phố lớn như Hà Nội và TP. Hồ Chí Minh.",
    tenDuAn: "Cung cấp dịch vụ IT Outsourcing",
    baiToan: [
      "Hỗ trợ từ xa (Remote Support)",
      "365 ngày/năm",
      "Đảm bảo độ sẵn sàng 100%",
      "Giao tiếp song ngữ Việt/Anh",
      "Hỗ trợ tại chỗ (Onsite Support)",
      "Nhân sự chuyên trách tại văn phòng (HCM/ HN)",
      "5 ngày/tuần, khung giờ 9h–18h",
      "Tiếng Việt và tiếng Anh",
      "Hỗ trợ người dùng theo yêu cầu",
      "7 ngày/tuần, khung giờ 8h–22h",
      "Triển khai và support tại các cửa hàng, quầy bán và sự kiện (bắt buộc giao tiếp tiếng Anh)",
      "Bảo trì hạ tầng CNTT theo yêu cầu",
      "Thiết bị: máy tính, POS, máy in, điện thoại IP, cảm biến, màn hình, thiết bị A/V",
      "7 ngày/tuần, song ngữ Việt/Anh",
      "Triển khai dự án",
      "Quản lý dự án APAC, lập tài liệu, kiểm kê thiết bị",
      "Hỗ trợ nâng cấp hệ thống, cài đặt phần mềm, đào tạo người dùng",
      "Lắp đặt, di dời thiết bị tại nhiều địa điểm"
    ],
    giaiPhap: [
      "Đội ngũ đa nhiệm, đều có chứng chỉ hoặc được đào tạo về ITIL: ba vị trí chuyên trách với các vai trò khác nhau nhưng linh hoạt luân phiên, thành thạo tiếng Việt và tiếng Anh, đảm bảo mọi khung giờ và yêu cầu dự án.",
      "Quản lý ticket chuyên nghiệp: triển khai ServiceNow cho toàn bộ vòng đời yêu cầu — từ ghi nhận đến đóng ticket, đảm bảo minh bạch và báo cáo chi tiết.",
      "Nguồn lực sẵn sàng: đội kỹ thuật được bố trí linh hoạt, sẵn sàng chi viện sự kiện, xử lý sự cố khẩn cấp và đáp ứng tất cả các yêu cầu đặc thù của khách hàng."
    ],
    ketQua: [
      "Chất lượng dịch vụ vượt kỳ vọng: Khách hàng đánh giá “hoàn toàn đáp ứng hiệu quả công việc, nâng cao hiệu suất và tính ổn định.”",
      "Xử lý thành công các sự kiện: Hỗ trợ IT cho chuỗi sự kiện của khách hàng tại HN và HCM diễn ra suôn sẻ, không gián đoạn.",
      "Hoàn thành các dự án nâng cấp: Phối hợp chặt chẽ với bộ phận IT vùng, triển khai kịp tiến độ các dự án cài đặt mới và nâng cấp hệ thống.",
      "🔍 Kết luận",
      "Với mô hình đa nhiệm, công cụ quản lý hiện đại và đội ngũ song ngữ chuyên sâu, FPT IS đã đồng hành hiệu quả cùng doanh nghiệp chăm sóc sắc đẹp cao cấp, đảm bảo liên tục — nhanh chóng — chất lượng trong"
    ],
    source: "https://fis247.fpt.com/dich-vu-it-outsourcing-cho-tap-doan-my-pham-cao-cap/"
  },
  {
    slug: "cong-cu-hoa-quy-trinh-van-hanh-dich-vu-cntt-bang-giai-phap-service-desk-aka247",
    cat: "aka247",
    title: "Công cụ hóa quy trình vận hành dịch vụ CNTT bằng giải pháp Service Desk AKA247",
    image: "/images/cases/cong-cu-hoa-quy-trinh-van-hanh-dich-vu-cntt-bang-giai-phap-service-desk-aka247.webp",
    khachHang: "Một trong những doanh nghiệp sản xuất và phân phối ô tô hàng đầu tại Việt Nam, trực thuộc tập đoàn ô tô toàn cầu với hiện diện tại hơn 170 quốc gia. Doanh nghiệp sở hữu mạng lưới đại lý ủy quyền trên toàn quốc và liên tục giữ vị thế dẫn đầu thị trường nhờ cam kết về chất lượng sản phẩm, dịch vụ hậu mãi và chiến lược chuyển đổi số toàn diện.",
    tenDuAn: "",
    baiToan: [
      "Bài toán đặt ra là cần một nền tảng quản lý dịch vụ CNTT chuyên nghiệp giúp:",
      "Ghi nhận, phân loại và xử lý tập trung các yêu cầu/sự cố CNTT theo thời gian thực.",
      "Tự động phân công công việc đến đúng nhóm kỹ thuật phụ trách.",
      "Theo dõi toàn trình xử lý yêu cầu, đảm bảo cam kết về thời gian phản hồi (SLA).",
      "Cung cấp hệ thống báo cáo trực quan, đa chiều phục vụ việc giám sát và cải tiến dịch vụ.",
      "Tích hợp thư viện tri thức hỗ trợ giảm tải khối lượng công việc lặp lại cho đội ngũ IT."
    ],
    giaiPhap: [
      "FPT IS đã tư vấn và triển khai giải pháp AKA247 Service Desk trên nền tảng Cloud với các hạng mục chính:",
      "1. Tư vấn quy trình theo chuẩn ITIL",
      "Đánh giá thực trạng quản trị dịch vụ CNTT của doanh nghiệp.",
      "Tư vấn mô hình vận hành phù hợp với đặc thù ngành sản xuất.",
      "Xây dựng cấu trúc phân quyền và quy tắc xử lý linh hoạt theo nhóm chức năng.",
      "2. Công cụ hóa quy trình quản lý dịch vụ",
      "Quản lý yêu cầu (Request Management):",
      "Cho phép người dùng gửi yêu cầu từ nhiều kênh: cổng thông tin nội bộ, email, điện thoại.",
      "Tự động phân loại, phân công người xử lý, theo dõi tiến độ thực hiện theo thời gian thực.",
      "Quản lý sự cố (Incident Management):",
      "Ghi nhận sự cố kịp thời và phân quyền xử lý theo từng nhóm kỹ thuật.",
      "Tích hợp SLA giúp kiểm soát thời gian phản hồi, đánh giá chất lượng dịch vụ theo KPI cụ thể.",
      "Thư viện tri thức dùng chung (Knowledge Base):",
      "Lưu trữ và chia sẻ các tình huống xử lý phổ biến, giúp giảm số lượng yêu cầu lặp lại và hỗ trợ người dùng tự phục vụ (self-service).",
      "Hệ thống báo cáo & dashboard trực quan:",
      "Thống kê hiệu suất làm việc, tỉ lệ giải quyết sự cố, mức độ tuân thủ SLA… theo phòng ban, nhóm kỹ thuật, loại dịch vụ…"
    ],
    ketQua: [
      "Chỉ sau 1 tháng triển khai, hệ thống Service Desk đã đi vào hoạt động ổn định tại Trung tâm CNTT của doanh nghiệp với sự tham gia vận hành của gần 30 cán bộ kỹ thuật.",
      "Kết quả nổi bật:",
      "80% quy trình tiếp nhận và xử lý yêu cầu CNTT đã được tự động hóa hoàn toàn.",
      "Giảm đáng kể thời gian phản hồi và xử lý sự cố; nâng cao mức độ hài lòng của người dùng nội bộ.",
      "Cung cấp nền tảng dữ liệu đầy đủ cho quản lý và ra quyết định chiến lược về vận hành CNTT.",
      "Giảm tải áp lực cho đội ngũ IT, đồng thời thiết lập tiêu chuẩn hóa trong công tác hỗ trợ kỹ thuật."
    ],
    source: "https://fis247.fpt.com/cong-cu-hoa-quy-trinh-van-hanh-dich-vu-cntt-bang-giai-phap-service-desk-aka247/"
  },
  {
    slug: "tang-cuong-an-ninh-he-thong-atm-cho-mot-trong-nhung-ngan-hang-thuong-mai-hang-dau-viet-nam",
    cat: "atmguard",
    title: "Tăng cường an ninh hệ thống ATM cho một trong những ngân hàng thương mại hàng đầu Việt Nam",
    image: "/images/cases/tang-cuong-an-ninh-he-thong-atm-cho-mot-trong-nhung-ngan-hang-thuong-mai-hang-dau-viet-nam.webp",
    khachHang: "Một ngân hàng thương mại cổ phần uy tín, trụ sở tại TP.HCM, với mạng lưới ATM rộng khắp toàn quốc, phục vụ hàng triệu lượt giao dịch mỗi ngày.",
    tenDuAn: "Triển khai hệ thống giám sát và bảo vệ an ninh chuyên dụng cho toàn bộ hệ thống máy rút tiền tự động (ATM).",
    baiToan: [
      "Với quy mô hơn 12.000 máy ATM trải dài trên 63 tỉnh, thành phố, ngân hàng đặt mục tiêu xây dựng một hệ thống giám sát an ninh toàn diện, nhằm đảm bảo an toàn tuyệt đối cho tài sản và dữ liệu. Các yêu cầu cụ thể bao gồm:",
      "Phát hiện chính xác các hành vi xâm nhập vật lý: cạy phá, khoan cắt, di dời máy ATM.",
      "Cảnh báo tức thời thông qua nhiều kênh: còi hú tại chỗ, cuộc gọi tự động, tin nhắn SMS.",
      "Quản lý tập trung thời gian thực toàn bộ thiết bị ATM trên toàn hệ thống.",
      "Điều khiển và cấu hình thiết bị từ xa qua nhiều phương thức (Server, SMS, Bluetooth).",
      "Khả năng mở rộng linh hoạt để tích hợp thêm các tính năng như phát hiện dòng rò, giám sát môi trường, chống skimming."
    ],
    giaiPhap: [
      "FPT IS đã thiết kế, sản xuất và triển khai giải pháp FPT ATM Guard – hệ thống báo động chuyên biệt được phát triển dành riêng cho ATM, kết hợp với nền tảng phần mềm giám sát trung tâm F.RIMS nhằm đáp ứng toàn diện các yêu cầu về bảo mật và vận hành.",
      "Các thành phần chính của giải pháp",
      "1. Thiết bị FPT ATM Guard",
      "Kết nối linh hoạt: Hỗ trợ cả Ethernet TCP/IP và mạng di động 3G/4G, đảm bảo duy trì liên lạc liên tục ngay cả trong môi trường khắc nghiệt.",
      "Phát hiện sự cố đa lớp:",
      "Tấn công vật lý: cạy phá, khoan két, đập phá máy.",
      "Rung lắc, di chuyển bất thường.",
      "Mở cửa trái phép, mất điện, cắt dây nguồn.",
      "Cảnh báo cháy: phát hiện khói và nhiệt độ bất thường.",
      "Cảnh báo dòng rò: phát hiện hiện tượng rò rỉ điện vượt ngưỡng cho phép.",
      "Cảnh báo tại chỗ mạnh mẽ: Còi hú công suất 110 dB, tùy chọn đèn nháy LED hỗ trợ cảnh báo trực quan.",
      "2. Phần mềm quản lý F.RIMS",
      "Theo dõi thời gian thực trạng thái hoạt động của toàn bộ thiết bị ATM.",
      "Quản lý người dùng bảo mật cao với phân quyền rõ ràng, xác thực đa lớp.",
      "Cấu hình và điều khiển từ xa, linh hoạt qua Server, SMS hoặc Bluetooth.",
      "Tính mở rộng cao: Sẵn sàng tích hợp với các hệ thống giám sát môi trường, thiết bị chống skimming và nền tảng an ninh hiện hữu.",
      "Tính năng nổi bật",
      "Giải pháp được thiết kế để hoạt động ổn định trong nhiều điều kiện triển khai khác nhau – từ môi trường trong nhà, ngoài trời đến các khu vực có rủi ro an ninh cao."
    ],
    ketQua: [
      "✅ Giám sát tập trung – kiểm soát toàn diện: Cho phép bộ phận quản trị theo dõi trạng thái từng thiết bị ATM mọi lúc, mọi nơi thông qua một nền tảng quản lý duy nhất.",
      "✅ Cảnh báo kịp thời – xử lý chủ động: Hệ thống phát hiện và cảnh báo nhanh chóng, giúp phản ứng tức thì với các tình huống nguy hiểm, đảm bảo an toàn tài sản và dữ liệu.",
      "✅ Phân quyền linh hoạt – vận hành hiệu quả: Quản lý theo khu vực, chi nhánh, đội ngũ kỹ thuật giúp tối ưu hóa tổ chức và giám sát vận hành.",
      "✅ Tiết kiệm chi phí và thời gian vận hành: Tự động hóa giám sát giúp ngân hàng giảm đến 80% khối lượng công việc quản lý hệ thống ATM so với trước đây.",
      "FPT IS – Đối tác tin cậy đồng hành cùng các ngân hàng trong hành trình nâng cao năng lực bảo vệ tài sản, hiện đại hóa vận hành và phát triển hạ tầng an ninh số toàn diện."
    ],
    source: "https://fis247.fpt.com/tang-cuong-an-ninh-he-thong-atm-cho-mot-trong-nhung-ngan-hang-thuong-mai-hang-dau-viet-nam/"
  },
  {
    slug: "trien-khai-thiet-bi-doc-the-cccd-tai-quay-giao-dich-giai-phap-dinh-danh-dien-tu-cho-ngan-hang-so-hang-dau-viet-nam",
    cat: "idreader",
    title: "Triển khai thiết bị đọc thẻ CCCD tại quầy giao dịch – Giải pháp định danh điện tử cho ngân hàng số hàng đầu Việt Nam",
    image: "/images/cases/trien-khai-thiet-bi-doc-the-cccd-tai-quay-giao-dich-giai-phap-dinh-danh-dien-tu-cho-ngan-hang-so-hang-dau-viet-nam.webp",
    khachHang: "Một trong những ngân hàng TMCP hàng đầu tại Việt Nam, tiên phong trong chiến lược chuyển đổi số, với định hướng mở rộng dịch vụ ngân hàng điện tử 24/7 và nâng cao trải nghiệm khách hàng thông qua việc ứng dụng công nghệ hiện đại vào mọi quy trình nghiệp vụ.",
    tenDuAn: "Trang bị thiết bị đọc thẻ Căn cước công dân (CCCD) tại quầy giao dịch cho toàn bộ hệ thống chi nhánh, đáp ứng yêu cầu định danh theo Thông tư 17 & 18 của Ngân hàng Nhà nước.",
    baiToan: [
      "Từ ngày 01/01/2025, theo quy định của Ngân hàng Nhà nước, mọi tài khoản ngân hàng tại Việt Nam bắt buộc phải được định danh sinh trắc học (dấu vân tay, khuôn mặt) để thực hiện các giao dịch tài chính trực tuyến. Đây là bước đi trọng tâm trong tiến trình chuyển đổi số quốc gia và đảm bảo an toàn bảo mật cho người dùng.",
      "Để đáp ứng yêu cầu này, ngân hàng cần triển khai thiết bị đọc thẻ CCCD chuyên dụng tại các điểm giao dịch, với tiêu chí:",
      "Đọc thẻ nhanh, chính xác và trích xuất đầy đủ thông tin từ chip CCCD.",
      "Thao tác đơn giản, tối ưu cho giao dịch viên – chỉ cần một bước duy nhất.",
      "Thiết kế hiện đại, phù hợp với không gian chuyên nghiệp của ngân hàng.",
      "Đáp ứng tiêu chuẩn kỹ thuật theo công văn 1091/QĐ-BTTTT của Bộ Thông tin & Truyền thông."
    ],
    giaiPhap: [
      "FPT IS đã cung cấp giải pháp thiết bị đọc thẻ CCCD chuyên dụng FPT IDReader – mã hiệu F.IDR01, được thiết kế riêng cho nhu cầu định danh điện tử tại quầy giao dịch tài chính.",
      "Tính năng nổi bật của FPT IDReader F.IDR01",
      "Công nghệ không tiếp xúc tần số 13,56 MHz cho tốc độ đọc nhanh và ổn định.",
      "Hỗ trợ đa chuẩn quốc tế: ISO 14443 Type A & B, MIFARE, FeliCa, NFC.",
      "Đọc mã OCR/MRZ, trích xuất dữ liệu tự động từ CCCD.",
      "Tương thích PC/SC, dễ dàng tích hợp với các phần mềm giao dịch hiện hữu.",
      "Kết nối USB tốc độ cao, tiện lợi trong triển khai và bảo trì.",
      "Chỉ cần một thao tác để thực hiện toàn bộ quy trình đọc – xác thực – trích xuất thông tin.",
      "Chứng nhận ISO 9001:2015 và hợp quy theo tiêu chuẩn Việt Nam, đảm bảo tính pháp lý và độ tin cậy trong ứng dụng thực tế.",
      "Thiết bị F.IDR01 không chỉ phục vụ ngành ngân hàng mà còn được ứng dụng rộng rãi trong các lĩnh vực như dịch vụ công, chứng thực điện tử, kiểm soát truy cập, vận tải công cộng…"
    ],
    ketQua: [
      "Vào tháng 5/2024, FPT đã hoàn tất cung cấp và triển khai hơn 400 thiết bị FPT IDReader tại hệ thống chi nhánh ngân hàng trên toàn quốc.",
      "✅ Rút ngắn 50% thời gian giao dịch tại quầy, tăng tốc độ phục vụ khách hàng.",
      "✅ Nâng cao trải nghiệm người dùng với quy trình hiện đại, chuyên nghiệp và liền mạch.",
      "✅ Tuân thủ đầy đủ yêu cầu định danh từ Ngân hàng Nhà nước, góp phần bảo vệ dữ liệu và tài sản của khách hàng.",
      "✅ Tăng hiệu quả vận hành, hỗ trợ ngân hàng trong lộ trình số hóa toàn diện hoạt động giao dịch tài chính.",
      "FPT IDReader – Cầu nối giữa an toàn giao dịch và trải nghiệm khách hàng vượt trội trong kỷ nguyên ngân hàng số."
    ],
    source: "https://fis247.fpt.com/trien-khai-thiet-bi-doc-the-cccd-tai-quay-giao-dich-giai-phap-dinh-danh-dien-tu-cho-ngan-hang-so-hang-dau-viet-nam/"
  },
  {
    slug: "trien-khai-smart-kiosk-giai-phap-so-hoa-trai-nghiem-dich-vu-cong-tai-trung-tam-hanh-chinh-cong-cap-quan",
    cat: "kiosk",
    title: "Triển khai Smart Kiosk – Giải pháp số hóa trải nghiệm dịch vụ công tại Trung tâm Hành chính công cấp quận",
    image: "/images/cases/trien-khai-smart-kiosk-giai-phap-so-hoa-trai-nghiem-dich-vu-cong-tai-trung-tam-hanh-chinh-cong-cap-quan.webp",
    khachHang: "Một đơn vị hành chính cấp quận tại Hà Nội – tiên phong trong việc ứng dụng công nghệ hiện đại nhằm cải cách thủ tục hành chính và nâng cao chất lượng phục vụ người dân.",
    tenDuAn: "Triển khai hệ thống Smart Kiosk tại Trung tâm Hành chính công",
    baiToan: [
      "Nhằm đáp ứng chủ trương số hóa thủ tục hành chính của Chính phủ và nhu cầu ngày càng cao từ người dân về chất lượng dịch vụ công, đơn vị đặt ra bài toán cần triển khai một hệ thống kiosk thông minh, với các yêu cầu cụ thể như sau:",
      "Hỗ trợ tiếp nhận và xử lý các thủ tục hành chính phổ biến ngay tại chỗ.",
      "Cho phép người dân dễ dàng tra cứu thông tin, hướng dẫn quy trình trực quan.",
      "Tích hợp khả năng định danh chính xác thông qua thẻ Căn cước công dân gắn chip.",
      "Giao diện thân thiện, dễ sử dụng cho mọi đối tượng; thiết kế hiện đại, phù hợp không gian công cộng.",
      "Hệ thống vận hành ổn định, có khả năng mở rộng tích hợp thêm nhiều dịch vụ số trong tương lai."
    ],
    giaiPhap: [
      "FPT IS đã cung cấp và triển khai thiết bị FPT KIOSK – F.IDK01 Series, một giải pháp phần cứng tích hợp cao được thiết kế dành riêng cho các trung tâm dịch vụ công, ngân hàng, bệnh viện, hải quan và các không gian công cộng.",
      "Cấu hình & đặc điểm nổi bật:",
      "Màn hình cảm ứng công nghiệp đa điểm, độ nhạy cao, chống bụi và chống nước – phù hợp cho môi trường sử dụng liên tục, mật độ cao.",
      "Bộ xử lý công nghiệp Intel, đảm bảo hiệu năng ổn định và độ bền vượt trội.",
      "Thiết kế khung chắc chắn, gia công bằng công nghệ CNC laser, phủ sơn tĩnh điện chống xước, chống han gỉ, đảm bảo độ an toàn và thẩm mỹ cao.",
      "Cơ chế an toàn chủ động: chống đổ ngã, tích hợp chống giật điện bảo vệ người dùng.",
      "Tùy biến linh hoạt với nhiều mô-đun chức năng:",
      "Máy in phiếu thứ tự",
      "Đầu đọc QR Code",
      "Đầu đọc và xác thực thẻ CCCD gắn chip",
      "Camera nhận diện khuôn mặt",
      "FPT KIOSK được thiết kế như một trạm dịch vụ công đa chức năng, cho phép:",
      "Tiếp nhận và xử lý thủ tục tại chỗ",
      "In phiếu hướng dẫn và thứ tự chờ",
      "Hướng dẫn quy trình qua giao diện trực quan",
      "Xác thực định danh điện tử nhanh chóng"
    ],
    ketQua: [
      "Sau khi triển khai hệ thống Smart Kiosk, đơn vị hành chính đã ghi nhận những cải thiện rõ rệt trong hiệu quả phục vụ và sự hài lòng của người dân:",
      "Rút ngắn 50% thời gian xử lý thủ tục, giảm đáng kể tình trạng xếp hàng, chờ đợi.",
      "Nâng cao trải nghiệm công dân, tiếp cận dịch vụ dễ dàng hơn, thân thiện hơn.",
      "Giảm tải công việc cho cán bộ hành chính, giúp tập trung vào xử lý chuyên môn, kiểm soát chất lượng dịch vụ.",
      "Tăng cường hình ảnh hiện đại, chuyên nghiệp, trở thành một hình mẫu chuyển đổi số hiệu quả cấp quận tại Hà Nội."
    ],
    source: "https://fis247.fpt.com/trien-khai-smart-kiosk-giai-phap-so-hoa-trai-nghiem-dich-vu-cong-tai-trung-tam-hanh-chinh-cong-cap-quan/"
  },
  {
    slug: "trien-khai-he-thong-truyen-thanh-thong-minh-cho-thanh-pho-du-lich-bien-mien-trung",
    cat: "smartaudio",
    title: "Triển khai Hệ thống Truyền thanh Thông minh cho Thành phố Du lịch biển miền Trung.",
    image: "/images/cases/trien-khai-he-thong-truyen-thanh-thong-minh-cho-thanh-pho-du-lich-bien-mien-trung.webp",
    khachHang: "Phòng Văn hóa Thông tin – Thành phố biển miền Trung đang phát triển mạnh về du lịch và hạ tầng, hướng đến hiện đại hóa hạ tầng truyền thanh nhằm đáp ứng yêu cầu chuyển đổi số cấp cơ sở.",
    tenDuAn: "Triển khai Hệ thống Truyền thanh Thông minh cho Thành phố",
    baiToan: [
      "Hệ thống truyền thanh hiện hữu của thành phố sử dụng công nghệ analog, đã lạc hậu, bộc lộ nhiều hạn chế:",
      "Chất lượng âm thanh không ổn định, dễ bị nhiễu sóng.",
      "Vận hành thủ công, không có cơ chế giám sát từ xa, gây khó khăn trong bảo trì.",
      "An ninh thông tin không đảm bảo, dễ bị can thiệp bởi các nguồn phát không hợp lệ.",
      "Địa phương đặt ra yêu cầu cấp thiết về một giải pháp truyền thanh số thông minh, có khả năng:",
      "Tự động hóa vận hành, giám sát tập trung.",
      "Dễ dàng mở rộng và phù hợp với điều kiện hạ tầng tại các thôn/xã.",
      "Đáp ứng định hướng chuyển đổi số tại địa phương."
    ],
    giaiPhap: [
      "FPT IS đã cung cấp giải pháp FPT Smart Audio Receiver – F.SAR01, thiết bị thu truyền thanh kỹ thuật số chuyên dụng, được triển khai tại các điểm phát thanh cơ sở như thôn, ấp, xã.",
      "Các tính năng nổi bật:",
      "Kết nối linh hoạt: Hỗ trợ SIM/ LAN của tất cả các nhà mạng, tối ưu cho điều kiện sóng yếu hoặc không ổn định tại vùng sâu vùng xa.",
      "Nhiều chế độ phát linh hoạt:",
      "Tiếp sóng trực tiếp từ các luồng truyền thanh số hóa chuẩn của trung ương/tỉnh/huyện/xã mà không cần thiết bị trung gian.",
      "Phát theo lịch trình từ các file ghi âm sẵn, hoặc kết hợp các chế độ phát.",
      "Phát khẩn cấp và ưu tiên cho các nội dung cảnh báo thiên tai, thông báo khẩn cấp,…",
      "Giám sát và điều khiển từ xa:",
      "Theo dõi tình trạng hoạt động của thiết bị và cụm loa mà không cần tới trực tiếp điểm lắp đặt.",
      "Dữ liệu hoạt động được đồng bộ và báo cáo về trung tâm điều hành.",
      "Bảo mật an toàn thông tin:",
      "Ghi nhận nhật ký hoạt động trên thẻ nhớ.",
      "Cảnh báo các truy cập bất thường về trung tâm xử lý.",
      "Hệ thống mã hóa đường truyền, xác thực và phân quyền truy cập nhằm ngăn chặn nguy cơ bị chiếm sóng từ bên ngoài."
    ],
    ketQua: [
      "Tháng 12/2023, FPT IS đã triển khai thành công 145 thiết bị Smart Audio F.SAR01 cho Phòng Văn hóa Thông tin Thành phố.",
      "Kết quả đạt được:",
      "Nâng cấp toàn bộ hệ thống truyền thanh từ analog lên nền tảng số hóa thông minh, vận hành tự động.",
      "Tiếp sóng trực tiếp ổn định từ các đài trung ương, địa phương đến các điểm phát thanh cấp xã, thôn.",
      "Giám sát tập trung và cảnh báo an ninh theo thời gian thực, giúp quản lý hiệu quả và tiết kiệm nguồn lực vận hành.",
      "Góp phần vào chiến lược chuyển đổi số cấp cơ sở, xây dựng đô thị thông minh và chính quyền số tại địa phương"
    ],
    source: "https://fis247.fpt.com/trien-khai-he-thong-truyen-thanh-thong-minh-cho-thanh-pho-du-lich-bien-mien-trung/"
  }
];

export const catLabel = (id: string) =>
  CASE_CATS.find((c) => c.id === id)?.label ?? id;
