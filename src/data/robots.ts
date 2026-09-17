// Dữ liệu 19 robot, lấy từ các trang sản phẩm trên fis247.fpt.com.
// Ảnh đã tải về và chuyển WebP trong /public/images/robots (33MB -> 1,5MB).

export type RobotCat = "nang-ha" | "xe-nang" | "giao-hang" | "ve-sinh" | "le-tan" | "khu-khuan";

export const ROBOT_CATS: { id: RobotCat; label: string }[] = [
  { id: "nang-ha", label: "Nâng hạ công nghiệp" },
  { id: "xe-nang", label: "Xe nâng công nghiệp" },
  { id: "giao-hang", label: "Giao hàng" },
  { id: "ve-sinh", label: "Vệ sinh" },
  { id: "le-tan", label: "Lễ tân" },
  { id: "khu-khuan", label: "Khử khuẩn" },
];

export type RobotSpec = { label: string; value: string; note: string };
export type RobotFeature = { title: string; desc: string };

export type Robot = {
  slug: string;
  /** Mã model ngắn, dùng làm chữ khổng lồ viền rỗng sau lưng robot */
  code: string;
  name: string;
  cat: RobotCat;
  /** Dòng sản phẩm (AX–8114...), null với model không thuộc dòng nào */
  series: string | null;
  /** Các góc chụp, xếp theo thứ tự xoay: trước -> nghiêng -> sau.
      15/19 model có từ 2 góc trở lên nên kéo xoay được; số còn lại chỉ có một
      ảnh và sẽ hiển thị tĩnh. */
  images: string[];
  chips: string[];
  /** Model nào cũng đúng 6 thông số */
  specs: RobotSpec[];
  /** 6 khối tính năng (một model chỉ có 5) */
  features: RobotFeature[];
  source: string;
};

export const ROBOTS: Robot[] = [
  {
    slug: "robot-nang-ha-cong-nghiep-ax8114-s150",
    code: "S150",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8114 (S150)",
    cat: "nang-ha",
    series: "AX–8114",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax8114-s150-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s150-side.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s150-back.webp"],
    chips: ["Tải trọng nâng 150 kg", "Khung gầm chịu tải 300 kg", "V-SLAM", "2× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "150 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "2", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 150 kg • nâng hạ vững chắc", desc: "Khung gầm chịu tải 300 kg, giảm chấn thông minh, kiểm soát phanh giúp vận hành ổn định trên đường dốc và bề mặt gồ ghề." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot hoạt động đồng thời, tránh va chạm, tối ưu nhiệm vụ theo lịch trình để dây chuyền vận hành liên tục." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích xe trolley/khung theo tiêu chuẩn hoặc thiết kế riêng; API/SDK mở tích hợp WMS/WCS/ERP." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Ứng dụng điều khiển thân thiện, linh hoạt điểm-điểm/khu vực-khu vực, tối ưu nguồn lực và hiệu suất vận hành." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 2 LiDAR 360° cho định vị chính xác, quét bản đồ tới 100.000 m²; tích hợp thang máy, cửa điện, scan…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Triển khai từ xa, tạo bản đồ tức thì; vận hành được ngoài trời và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax8114-s150"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax8114-s300",
    code: "S300",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8114 (S300)",
    cat: "nang-ha",
    series: "AX–8114",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300-side.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300-back.webp"],
    chips: ["Tải trọng nâng 300 kg", "Khung gầm chịu tải 300 kg", "V-SLAM", "2× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "2", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • nâng hạ vững chắc", desc: "Khung gầm chịu tải 300 kg, giảm chấn thông minh, kiểm soát phanh giúp vận hành ổn định trên đường dốc và bề mặt gồ ghề." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích với nhiều loại khung, xe hàng, xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng của nhà máy. API/SDK nguồn mở có thể tích hợp WMS, WCS, ERP trong logistics, sản xuất và vận chuyển nội bộ." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Ứng dụng điều khiển robot dễ thao tác, chế độ giao hàng linh hoạt: từ điểm sang điểm, từ khu vực sang khu vực,… tùy theo nhu cầu giúp tối ưu nguồn lực và nâng hiệu suất vận hành." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 2 LiDAR 360° cho định vị chính xác, quét bản đồ tới 100.000 m²; tích hợp thang máy, cửa điện, nút gọi, máy scan…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Hỗ trợ triển khai từ xa, tạo bản đồ tức thì; vận hành được ngoài trời và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax8114-s300"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax8114-s300e",
    code: "S300E",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8114 (S300E)",
    cat: "nang-ha",
    series: "AX–8114",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300e-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300e-side.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s300e-back.webp"],
    chips: ["Tải trọng nâng 300 kg", "Khung gầm chịu tải 300 kg", "V-SLAM", "2× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "2", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • nâng hạ vững chắc", desc: "Hệ thống khung gầm chịu tải trọng nặng 300 kg, giảm chấn thông minh, kiểm soát phanh giúp vận hành ổn định trên đường dốc và bề mặt gồ ghề." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích với nhiều loại khung, xe hàng, xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng; API/SDK mở tích hợp WMS/WCS/ERP." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Ứng dụng điều khiển robot dễ thao tác, giao hàng linh hoạt: điểm–điểm / khu vực–khu vực,… tối ưu nguồn lực và hiệu suất vận hành." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 2 LiDAR 360° cho định vị chính xác, quét bản đồ tới 100.000 m²; tích hợp thang máy, cửa điện, nút gọi, máy scan…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Hỗ trợ triển khai từ xa, tạo bản đồ tức thì; vận hành được ngoài trời và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax8114-s300e"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax8114-s600",
    code: "S600",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8114 (S600)",
    cat: "nang-ha",
    series: "AX–8114",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax8114-s600-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s600-side.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8114-s600-back.webp"],
    chips: ["Tải trọng nâng 600 kg", "Khung gầm chịu tải 600 kg", "V-SLAM", "2× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "600 kg", note: "Nâng hạ nặng" },
      { label: "Hoạt động liên tục", value: "8 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "2", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 600 kg • nâng hạ vững chắc", desc: "Khung gầm chịu tải 600 kg, giảm chấn thông minh, kiểm soát phanh giúp vận hành ổn định trên đường dốc và bề mặt gồ ghề." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích nhiều loại khung/xe trolley theo tiêu chuẩn hoặc thiết kế riêng; API/SDK mở tích hợp WMS/WCS/ERP." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Điều khiển dễ thao tác, giao hàng linh hoạt: điểm–điểm / khu vực–khu vực,… tối ưu nguồn lực và hiệu suất vận hành." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 2 LiDAR 360° định vị chính xác; quét bản đồ tới 100.000 m²; tích hợp thang máy, cửa điện, nút gọi, máy scan…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Triển khai từ xa, tạo bản đồ tức thì; vận hành được ngoài trời và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax8114-s600"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax8112-l150",
    code: "L150",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8112 (L150)",
    cat: "nang-ha",
    series: "AX–8112",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax8112-l150-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax8112-l150-back.webp"],
    chips: ["Tải trọng nâng 150 kg", "Khung gầm chịu tải 150 kg", "V-SLAM", "1× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "150 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 150 kg • nâng hạ vững chắc", desc: "Khung gầm chịu tải 150 kg, hỗ trợ giảm chấn thông minh và kiểm soát tốc độ ổn định. Robot vận hành êm ái trên bề mặt gồ ghề, đường dốc và khu vực hẹp trong dây chuyền sản xuất." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích với nhiều loại khung, xe hàng, xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng. API/SDK tích hợp WMS/WCS/ERP cho logistics, sản xuất và vận chuyển nội bộ." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Trang bị màn hình 10.1 inch theo dõi tiến độ. Chế độ giao hàng linh hoạt: điểm-điểm, khu vực-khu vực… tối ưu nguồn lực và hiệu suất." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 1 LiDAR 360° định vị chính xác, quét bản đồ đến 100.000m². Tích hợp IoT: thang máy, cửa điện, nút gọi, máy scan…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Triển khai từ xa, xây dựng bản đồ tức thì. Vận hành ngoài trời trên bề mặt không bằng phẳng và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax8112-l150"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax-8112-l300",
    code: "L300",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8112 (L300)",
    cat: "nang-ha",
    series: "AX–8112",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l300-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l300-back.webp"],
    chips: ["Tải trọng nâng 300 kg", "Khung gầm chịu tải 300 kg", "V-SLAM", "1× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • nâng hạ vững chắc", desc: "Hệ thống nâng hạ cùng với khung gầm chịu tải 300 kg cho phép robot vận hành êm ái trên bề mặt gồ ghề, đường dốc và khu vực hẹp trong dây chuyền sản xuất, hỗ trợ giảm chấn thông minh và kiểm soát tốc độ ổn định." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích với nhiều loại khung, xe hàng, xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng của nhà máy. API/SDK có thể tích hợp WMS, WCS, ERP trong logistics, sản xuất và vận chuyển nội bộ." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Robot trang bị màn hình 10.1 inch có thể điều khiển và theo dõi tiến độ giao hàng. Chế độ giao hàng linh hoạt: điểm-điểm, khu vực-khu vực… tối ưu nguồn lực và hiệu suất." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM + 1 LiDAR 360° định vị chính xác, quét bản đồ đến 100.000m². Tích hợp thiết bị IoT như thang máy, cửa điện, nút gọi, máy scan,…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Hỗ trợ triển khai từ xa, xây dựng bản đồ tức thì. Khả năng vận hành ngoài trời trên bề mặt không bằng phẳng và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax-8112-l300"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax-8112-l300e",
    code: "L300E",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8112 (L300E)",
    cat: "nang-ha",
    series: "AX–8112",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l300e-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l300e-back.webp"],
    chips: ["Tải trọng nâng 300 kg", "Khung gầm chịu tải 300 kg", "V-SLAM", "1× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • nâng hạ vững chắc", desc: "Hệ thống nâng hạ cùng với khung gầm chịu tải 300 kg cho phép robot vận hành êm ái trên bề mặt gồ ghề, đường dốc và khu vực hẹp trong dây chuyền sản xuất, hỗ trợ giảm chấn thông minh và kiểm soát tốc độ ổn định." },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Phần khay được thiết kế rộng hơn có thể áp dụng với nhiều loại khung, xe hàng, xe trolley theo thiết kế riêng của nhà máy. Tích hợp với WMS, WCS, ERP trong logistics, sản xuất và vận chuyển nội bộ." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Robot trang bị màn hình 10.1 inch có thể điều khiển và theo dõi tiến độ giao hàng. Chế độ giao hàng linh hoạt: điểm-điểm, khu vực-khu vực… tối ưu nguồn lực và hiệu suất." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "V-SLAM (camera RGB) + LiDAR 360° định vị chính xác, quét bản đồ đến 100.000m². Tích hợp dễ dàng thiết bị IoT như thang máy, cửa điện, nút gọi, máy scan,…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Hỗ trợ triển khai từ xa, xây dựng bản đồ tức thì. Khả năng vận hành ngoài trời trên bề mặt không bằng phẳng và trong môi trường độc hại." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax-8112-l300e"
  },
  {
    slug: "robot-nang-ha-cong-nghiep-ax-8112-l600",
    code: "L600E",
    name: "Robot Nâng Hạ Công Nghiệp AX – 8113 (L600E)",
    cat: "nang-ha",
    series: "AX–8113",
    images: ["/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l600-front.webp", "/images/robots/robot-nang-ha-cong-nghiep-ax-8112-l600-back.webp"],
    chips: ["Tải trọng nâng 600 kg", "Khung gầm chịu tải 600 kg", "V-SLAM", "2× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "600 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "8 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "2", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 600 kg • nâng hạ vững chắc", desc: "Hệ thống nâng hạ cùng với khung gầm chịu tải 600 kg cho phép robot vận hành êm ái trên bề mặt gồ ghề, đường dốc và khu vực hẹp trong dây chuyền sản xuất, hỗ trợ giảm chấn thông minh và kiểm soát tốc độ ổn định" },
      { title: "Đồng bộ đa robot • điều phối chính xác", desc: "Nhiều robot có thể hoạt động cùng lúc nhờ hệ thống đồng bộ hóa, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn. Dung lượng pin được tích hợp sạc nhanh trong vòng 1,1 tiếng là có thể hoạt động liên tục 24/7." },
      { title: "Tùy chỉnh kệ/khung • phù hợp logistics", desc: "Tương thích với nhiều loại khung, xe hàng, xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng của nhà máy. Hệ thống API/SDK nguồn mở có thể tích hợp với hệ thống WMS, WCS, ERP trong logistics, sản xuất và vận chuyển nội bộ của nhà máy." },
      { title: "Chế độ giao hàng linh hoạt", desc: "Robot trang bị màn hình 10.1 inch có thể điều khiển và theo dõi tiến độ giao hàng. Chế độ giao hàng linh hoạt: từ điểm sang điểm, từ khu vực sang khu vực ,… tùy theo nhu cầu của khách hàng giúp tối ưu nguồn lực và nâng hiệu suất vận hành." },
      { title: "Định vị chính xác • tích hợp IoT", desc: "Được trang bị công nghệ V-SLAM với 2 cảm biến LiDAR 360° định vị chính xác và cùng với thuật toán trong robot cho phép quét bản đồ lên đến 100,000m2 . Tích hợp dễ dàng với các thiết bị IOT như thang máy, cửa điện, nút gọi, máy scan,…" },
      { title: "Triển khai vài phút • dùng cả ngoài trời", desc: "Hỗ trợ triển khai từ xa, xây dựng bản đồ tức thì. Khả năng vận hành đáp ứng trong khu vực ngoài trời trên các bề mặt không bằng phẳng và trong môi trường độc hại,." }
    ],
    source: "https://fis247.fpt.com/robot-nang-ha-cong-nghiep-ax-8112-l600"
  },
  {
    slug: "robot-xe-nang-cong-nghiep-ft2000",
    code: "FT2000",
    name: "Robot Xe Nâng Công Nghiệp (Forklift) FT2000",
    cat: "xe-nang",
    series: null,
    images: ["/images/robots/robot-xe-nang-cong-nghiep-ft2000-front.webp", "/images/robots/robot-xe-nang-cong-nghiep-ft2000-back.webp"],
    chips: ["Tải trọng nâng 2 tấn", "Khung gầm chịu 2 tấn", "V-SLAM", "1× LiDAR 360°", "Quét bản đồ 100.000 m²", "API/SDK tích hợp WMS/WCS/ERP", "Tích hợp IoT"],
    specs: [
      { label: "Tải trọng tối đa", value: "2000 kg", note: "Nâng hạ nhẹ" },
      { label: "Hoạt động liên tục", value: "8 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,5 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "2200 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 2 tấn • nâng hạ vững chắc", desc: "Hệ thống khung gầm được thiết kế đặc biệt chịu tải trọng nặng 2 tấn, hỗ trợ giảm chấn thông minh, khả năng kiểm soát phanh giúp robot đạt tốc độ ổn định khi di chuyển. vận hành êm ái trên bề mặt gồ ghề, đường dốc (5°) và khu vực trong dây chuyền sản xuất." },
      { title: "Hệ thống lập lịch cho phép nhiều robot trong khu vực– tích hợp sạc nhanh", desc: "Khả năng thông minh vượt trội cho phép nhiều robot hoạt đồng cùng lúc, quản lí đa thiết bị, điều phối robot làm tác vụ, tránh va chạm và tối ưu nhiệm vụ theo lịch trình. Đảm bảo dòng sản xuất vận hành liên tục, chính xác và an toàn. Dung lượng pin được tích hợp sạc nhanh trong vòng 2,5 tiếng là có thể hoạt động liên tục 24/7." },
      { title: "Tùy chỉnh khung/pallet linh hoạt – tích hợp mọi hệ thống trong nhà máy", desc: "Khả năng thích ứng cao cho phép robot có thể nhận dạng các khung/kệ/pallet/xe hàng/xe trolley theo tiêu chuẩn hoặc theo thiết kế riêng của nhà máy. Hệ thống API/SDK nguồn mở có thể tích hợp với hệ thống WMS, WCS, ERP trong logistics, sản xuất và vận chuyển nội bộ của nhà máy." },
      { title: "Giao diện thân thiện, chế độ giao hàng linh hoạt,", desc: "Ứng dụng điều khiển robot dễ thao tác, chế độ giao hàng linh hoạt: từ điểm sang điểm, từ khu vực sang khu vực ,… tùy theo nhu cầu của khách hàng giúp tối ưu nguồn lực và nâng hiệu suất vận hành." },
      { title: "Khả định vị chính xác, tương thích với các thiết bị IOT", desc: "Được trang bị công nghệ V-SLAM với nhiều cảm biến + cảm biến LiDAR 360° định vị chính xác và cùng với thuật toán trong robot cho phép quét bản đồ lên đến 100,000m2 . Tích hợp dễ dàng với các thiết bị IOT như thang máy, cửa điện, nút gọi, máy scan,…" },
      { title: "Triển khai trong vài phút, vận hành trong cả môi trường ngoài trời", desc: "Hỗ trợ triển khai từ xa, xây dựng bản đồ tức thì. Khả năng vận hành đạt chuẩn IP 65 và IP 66 đáp ứng trong khu vực ngoài trời trên các bề mặt không bằng phẳng và trong môi trường độc hại. Mức độ an toàn cao, bảo vệ an toàn toàn diện, đạt nhiều chứng nhận quốc tế." }
    ],
    source: "https://fis247.fpt.com/robot-xe-nang-cong-nghiep-ft2000"
  },
  {
    slug: "robot-van-chuyen-cong-nghiep-ax-6112-d80",
    code: "D80",
    name: "Robot Vận Chuyển Công Nghiệp AX – 6112 (D80)",
    cat: "giao-hang",
    series: "AX–6112",
    images: ["/images/robots/robot-van-chuyen-cong-nghiep-ax-6112-d80-front.webp", "/images/robots/robot-van-chuyen-cong-nghiep-ax-6112-d80-back.webp"],
    chips: ["Tải trọng 80 kg", "RCS (LAN + Cloud)", "V-SLAM (không QR)", "RGB + LiDAR 360°", "Tùy chỉnh khay", "Quản trị Cloud", "OTA toàn đội"],
    specs: [
      { label: "Tải trọng tối đa", value: "80 kg", note: "Phù hợp khu vực hẹp" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Di chuyển linh hoạt" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5(mm)/±1(°)", note: "" }
    ],
    features: [
      { title: "80 kg • nhỏ gọn • phù hợp không gian hẹp", desc: "Thiết kế tối ưu khu vực hẹp, điều khiển tốc độ chính xác, khởi động/phanh êm, vận hành ổn định." },
      { title: "RCS • đa robot • thang máy & cửa tự động", desc: "Lập lịch LAN + cloud; robot tự đồng bộ, tránh va chạm; tự gọi thang máy, đi qua cửa, tích hợp IoT." },
      { title: "Tùy chỉnh khay • nhiều chế độ giao hàng", desc: "Thay đổi tầng khay/kích thước theo nhu cầu. Dễ cấu hình tuyến đường, quy trình giao nhận và lịch sạc." },
      { title: "V-SLAM • tránh vật cản vượt trội (không QR)", desc: "Camera RGB + LiDAR 360° nhận diện vật cản treo/thấp/bất thường, đảm bảo an toàn trong môi trường phức tạp." },
      { title: "Triển khai nhanh • quản trị cloud • OTA", desc: "Triển khai từ xa nhanh, không giới hạn diện tích bản đồ. Giám sát realtime và nâng cấp phần mềm toàn đội qua OTA." },
      { title: "Tối ưu vận hành • trực quan hoá dữ liệu", desc: "Dữ liệu lưu trữ/hiển thị trên cloud, hỗ trợ theo dõi vận hành theo thời gian thực và tối ưu đội robot." }
    ],
    source: "https://fis247.fpt.com/robot-van-chuyen-cong-nghiep-ax-6112-d80"
  },
  {
    slug: "robot-van-chuyen-cong-nghiep-ax-6112-d150",
    code: "D150",
    name: "Robot Vận Chuyển Công Nghiệp AX – 6113 (D150)",
    cat: "giao-hang",
    series: "AX–6113",
    images: ["/images/robots/robot-van-chuyen-cong-nghiep-ax-6112-d150-front.webp", "/images/robots/robot-van-chuyen-cong-nghiep-ax-6112-d150-back.webp"],
    chips: ["Tải trọng 150 kg", "RCS (LAN + Cloud)", "V-SLAM (không QR)", "RGB + LiDAR 360°", "Tùy chỉnh khay", "Quản trị Cloud", "OTA toàn đội"],
    specs: [
      { label: "Tải trọng tối đa", value: "150 kg", note: "Vận chuyển vật liệu" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Di chuyển linh hoạt" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5(mm)/±1(°)", note: "" }
    ],
    features: [
      { title: "150 kg • nhỏ gọn • phù hợp không gian hẹp", desc: "Thiết kế tối ưu khu vực hẹp, điều khiển tốc độ chính xác, khởi động/phanh êm, vận hành ổn định." },
      { title: "RCS • đa robot • thang máy & cửa tự động", desc: "Lập lịch LAN + cloud; robot tự đồng bộ, tránh va chạm; tự gọi thang máy, đi qua cửa, tích hợp IoT." },
      { title: "Tùy chỉnh khay • nhiều chế độ giao hàng", desc: "Thay đổi tầng khay/kích thước theo nhu cầu. Dễ cấu hình tuyến đường, quy trình giao nhận và lịch sạc." },
      { title: "V-SLAM • tránh vật cản vượt trội (không QR)", desc: "Camera RGB + LiDAR 360° nhận diện vật cản treo/thấp/bất thường, đảm bảo an toàn trong môi trường phức tạp." },
      { title: "Triển khai nhanh • quản trị cloud • OTA", desc: "Triển khai từ xa nhanh, không giới hạn diện tích bản đồ. Giám sát realtime và nâng cấp phần mềm toàn đội qua OTA." },
      { title: "Tối ưu vận hành • trực quan hoá dữ liệu", desc: "Dữ liệu lưu trữ/hiển thị trên cloud, hỗ trợ theo dõi vận hành theo thời gian thực và tối ưu đội robot." }
    ],
    source: "https://fis247.fpt.com/robot-van-chuyen-cong-nghiep-ax-6112-d150"
  },
  {
    slug: "robot-van-chuyen-cong-nghiep-ax-6113-d300",
    code: "D300",
    name: "Robot Vận Chuyển Công Nghiệp AX – 6113 (D300)",
    cat: "giao-hang",
    series: "AX–6113",
    images: ["/images/robots/robot-van-chuyen-cong-nghiep-ax-6113-d300-front.webp"],
    chips: ["Tải trọng 300 kg", "RCS (LAN + Cloud)", "V-SLAM (không QR)", "RGB + LiDAR 360°", "Tùy chỉnh khay", "Quản trị Cloud", "OTA toàn đội"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Phù hợp vật liệu nặng" },
      { label: "Hoạt động liên tục", value: "14 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhà xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • vận hành mượt", desc: "Thiết kế linh hoạt cho không gian hạn chế; điều khiển tốc độ chính xác, tăng/giảm tốc êm và ổn định trong nhà máy." },
      { title: "RCS • đa robot • thang máy & cửa tự động", desc: "Lập lịch qua mạng cục bộ + cloud; robot tự đồng bộ, tránh va chạm. Tự gọi thang máy, đi qua cửa tự động, tích hợp IoT." },
      { title: "Tùy chỉnh khay • nhiều chế độ giao hàng", desc: "Thay đổi tầng khay/kích thước theo nhu cầu. Dễ cấu hình tuyến đường, quy trình giao nhận và lịch sạc tự động." },
      { title: "V-SLAM • tránh chướng ngại vật (không QR)", desc: "RGB + LiDAR 360° nhận diện vật cản treo/thấp/hình dạng bất thường, đảm bảo an toàn tuyệt đối trong môi trường phức tạp." },
      { title: "Triển khai nhanh • quản trị cloud • OTA", desc: "Triển khai từ xa chỉ trong vài phút, không giới hạn diện tích bản đồ; giám sát theo thời gian thực và nâng cấp toàn đội qua OTA." },
      { title: "Tối ưu dây chuyền • thay thế công đoạn nặng", desc: "Kích thước lớn hơn giúp tối ưu vận chuyển trong dây chuyền, giảm nhân công cho các công đoạn di chuyển hàng nặng." }
    ],
    source: "https://fis247.fpt.com/robot-van-chuyen-cong-nghiep-ax-6113-d300"
  },
  {
    slug: "robot-van-chuyen-cong-nghiep-ax-6114-d300e",
    code: "D300E",
    name: "Robot Vận Chuyển Công Nghiệp AX–6114 (D300E)",
    cat: "giao-hang",
    series: "AX–6114",
    images: ["/images/robots/robot-van-chuyen-cong-nghiep-ax-6114-d300e-front.webp"],
    chips: ["RCS (LAN + Cloud)", "V‑SLAM (không QR)", "RGB + LiDAR 360°", "Tùy chỉnh khay", "Quản trị Cloud", "OTA toàn đội"],
    specs: [
      { label: "Tải trọng tối đa", value: "300 kg", note: "Phù hợp vật liệu nặng" },
      { label: "Hoạt động liên tục", value: "14 h", note: "Tối ưu vận hành" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "Điều khiển chính xác" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp xưởng" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Tải trọng 300 kg • vận hành mượt", desc: "Thiết kế tối ưu vận chuyển vật liệu nặng; điều khiển tốc độ chính xác, tăng/giảm tốc êm và ổn định trong nhà máy." },
      { title: "RCS • đa robot • thang máy & cửa tự động", desc: "Lập lịch qua mạng cục bộ + cloud; tự đồng bộ, tránh va chạm. Tự gọi thang máy, đi qua cửa tự động, tích hợp thiết bị IoT." },
      { title: "Tùy chỉnh khay • nhiều chế độ giao hàng", desc: "Thay đổi tầng khay/kích thước theo nhu cầu. Dễ cấu hình tuyến đường, quy trình giao nhận và lịch sạc tự động." },
      { title: "V‑SLAM • tránh vật cản vượt trội (không QR)", desc: "RGB + LiDAR 360° nhận diện vật cản treo/thấp/hình dạng bất thường, đảm bảo an toàn trong môi trường phức tạp." },
      { title: "Triển khai nhanh • quản trị cloud • OTA", desc: "Triển khai từ xa trong vài phút, không giới hạn diện tích bản đồ. Giám sát realtime, nâng cấp phần mềm toàn đội robot qua OTA." },
      { title: "Vượt địa hình • an toàn nhà xưởng", desc: "Vận hành ổn định trên thảm dày/sàn gỗ/dốc nhẹ; phù hợp không gian hạn chế và yêu cầu an toàn trong dây chuyền sản xuất." }
    ],
    source: "https://fis247.fpt.com/robot-van-chuyen-cong-nghiep-ax-6114-d300e"
  },
  {
    slug: "robot-giao-hang-ax-2112",
    code: "AX-2112",
    name: "Robot Giao hàng AX-2112",
    cat: "giao-hang",
    series: "AX–2112",
    images: ["/images/robots/robot-giao-hang-ax-2112-angle.webp", "/images/robots/robot-giao-hang-ax-2112-cabin.webp", "/images/robots/robot-giao-hang-ax-2112-close.webp"],
    chips: ["4 khoang bảo mật", "Màn hình 10.1\"", "RCS điều phối đa robot", "Tự gọi thang máy/cửa điện", "V-SLAM (không cần QR)", "Camera RGB + LiDAR 360°", "IP65 / IP66", "Cloud + OTA"],
    specs: [
      { label: "Tải trọng tối đa", value: "40 kg", note: "4 khoang" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Vận hành 24/7" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp hành lang" },
      { label: "Số lượng LiDAR", value: "1", note: "360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "V-SLAM + cảm biến" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "" }
    ],
    features: [
      { title: "Hộp đựng riêng tư • bảo mật an toàn", desc: "4 khoang đựng đồ, tổng tải tối đa 40 kg. Có thể thay đổi không gian khoang theo nhu cầu giao nhận trong khách sạn/nhà hàng." },
      { title: "RCS • tự động thang máy & cửa điện", desc: "Giao tiếp đa robot, tự đồng bộ tránh va chạm. Tự gọi thang máy, đi qua cửa tự động, tích hợp IoT: cổng điện, nút gọi…" },
      { title: "Giao diện thân thiện • nhiều chế độ giao", desc: "Màn hình 10.1 inch cho khách nhập mật khẩu khi nhận hàng. Tùy chỉnh tuyến đường, quy trình giao nhận, lịch sạc tự động." },
      { title: "Điều hướng ổn định • tránh vật cản vượt trội", desc: "V-SLAM với camera RGB + LiDAR 360° nhận diện vật cản treo/thấp/bất thường, an toàn trong môi trường đông người (không cần dán QR)." },
      { title: "Quản trị cloud • trực quan hóa • OTA", desc: "Triển khai từ xa trong vài phút, không giới hạn diện tích bản đồ. Giám sát thời gian thực và nâng cấp toàn đội robot qua OTA." },
      { title: "Vận hành êm • phù hợp hành lang khách sạn", desc: "Di chuyển ổn định qua thảm dày, gờ và hành lang hẹp, hạn chế tiếng ồn, phù hợp môi trường yêu cầu yên tĩnh." }
    ],
    source: "https://fis247.fpt.com/robot-giao-hang-ax-2112"
  },
  {
    slug: "robot-giao-hang-mars",
    code: "MARS",
    name: "Robot Giao hàng MARS",
    cat: "giao-hang",
    series: null,
    images: ["/images/robots/robot-giao-hang-mars-front.webp", "/images/robots/robot-giao-hang-mars-angle.webp", "/images/robots/robot-giao-hang-mars-back.webp"],
    chips: ["4 khay thông minh", "Tránh giao nhầm món", "Màn hình 10.1\" + AI biểu cảm", "Màn hình quảng cáo độc lập", "RCS • đa robot", "V-SLAM (không cần QR)", "Camera RGB + LiDAR 360°", "Follow-me", "Cloud + OTA"],
    specs: [
      { label: "Tải trọng tối đa", value: "40 kg", note: "4 khay" },
      { label: "Hoạt động liên tục", value: "12 h", note: "Tối ưu ca làm" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp F&B" },
      { label: "Số lượng LiDAR", value: "1", note: "360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "V-SLAM + cảm biến" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "" }
    ],
    features: [
      { title: "4 khay thông minh • tránh giao nhầm", desc: "4 khay tổng tải 40 kg; mỗi khay gắn với một điểm giao. Khách lấy món đúng khay, giảm nhầm lẫn khi phục vụ đông." },
      { title: "Điều hướng ổn định • không cần QR", desc: "V-SLAM + camera RGB + LiDAR 360° nhận diện vật cản treo/thấp/bất thường, an toàn trong môi trường đông người." },
      { title: "Lập lịch thông minh • đa robot • IoT", desc: "Lập lịch qua LAN + Cloud, robot tự đồng bộ, tránh va chạm. Tích hợp thang máy/cửa điện/cổng điện/nút gọi." },
      { title: "Giao diện thân thiện • AI biểu cảm", desc: "Màn hình 10.1\" tương tác kèm biểu cảm & giọng nói AI. Màn hình quảng cáo độc lập phát video signature/ưu đãi." },
      { title: "Follow-me • hỗ trợ nhân viên", desc: "Chế độ “Follow-me” đi theo nhân viên để giao món, thu dọn chén dĩa dơ… giúp giảm tải công việc giờ cao điểm." },
      { title: "Triển khai nhanh • Cloud • OTA", desc: "Triển khai từ xa trong vài phút, không giới hạn bản đồ. Giám sát thời gian thực và nâng cấp toàn đội robot qua OTA." }
    ],
    source: "https://fis247.fpt.com/robot-giao-hang-mars"
  },
  {
    slug: "robot-ve-sinh-tu-dong-tn10pro",
    code: "TN10",
    name: "Robot Vệ sinh TN10",
    cat: "ve-sinh",
    series: null,
    images: ["/images/robots/robot-ve-sinh-tu-dong-tn10pro-front.webp"],
    chips: ["4-in-1: Quét • Chà • Hút • Gạt", "Nhỏ gọn • linh hoạt", "Điều khiển thủ công", "LiDAR 360° + TOF", "Lập bản đồ & lập lịch", "Trạm sạc/workstation"],
    specs: [
      { label: "Tải trọng tối đa", value: "25 kg", note: "(10L nước + 15L nước bẩn)" },
      { label: "Hoạt động liên tục", value: "3 – 4 h", note: "Tối ưu theo ca" },
      { label: "Tốc độ tối đa", value: "0,7 m/s", note: "Vận hành ổn định" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Phù hợp không gian hẹp" },
      { label: "Số lượng LiDAR", value: "1", note: "Quét 360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "" }
    ],
    features: [
      { title: "Làm sạch đa năng 4 trong 1", desc: "Quét, chà và hút bụi trong 1 lần chạy; chổi cạnh sát tường, chổi đôi + gạt nước bám mặt sàn giúp xử lý rác khô, bụi mịn và vết bẩn." },
      { title: "Nhỏ gọn • linh hoạt không gian phức tạp", desc: "Di chuyển tốt trong hành lang hẹp, khu vực bàn ghế dày hoặc nhiều chướng ngại vật; AI định vị – dẫn đường giúp làm sạch chính xác." },
      { title: "Điều khiển thủ công linh hoạt", desc: "Hỗ trợ chế độ thủ công với tay cầm kéo dài, tiện can thiệp nhanh hoặc vệ sinh khu vực đặc thù; dễ tinh chỉnh đường đi để tối ưu." },
      { title: "Lập bản đồ chi tiết • tự động hóa quy trình", desc: "LiDAR 360° + TOF + cảm biến cạnh nhận diện vật cản thấp/mép tường; lập lịch dọn theo khu vực đến 5000m² và báo cáo theo thời gian thực." },
      { title: "Trạm sạc/workstation • vận hành êm ái", desc: "Tự quay về sạc khi pin yếu và tiếp tục nhiệm vụ sau khi sạc đầy; workstation hỗ trợ sạc + cấp/xả nước (tùy cấu hình), phù hợp nhiều ca/ngày." }
    ],
    source: "https://fis247.fpt.com/robot-ve-sinh-tu-dong-tn10pro"
  },
  {
    slug: "robot-lau-don-tu-dong-tn-70-pro",
    code: "TN70",
    name: "Robot Vệ sinh TN70",
    cat: "ve-sinh",
    series: null,
    images: ["/images/robots/robot-lau-don-tu-dong-tn-70-pro-front.webp", "/images/robots/robot-lau-don-tu-dong-tn-70-pro-side.webp", "/images/robots/robot-lau-don-tu-dong-tn-70-pro-back.webp"],
    chips: ["Điều hướng thế hệ mới", "Tự về trạm sạc", "Làm sạch mạnh mẽ", "Tránh vật cản thông minh", "Lịch chạy ngày/tuần", "Chứng nhận FCC/CE/TUV/RoHS/IEC"],
    specs: [
      { label: "Tải trọng tối đa", value: "120 kg", note: "(70L nước + 50L nước bẩn)" },
      { label: "Hoạt động liên tục", value: "3 – 3,5 h", note: "Tự về trạm sạc" },
      { label: "Chiều rộng lối đi", value: "800 mm", note: "Phù hợp nhiều không gian" },
      { label: "Góc quét LiDAR", value: "30 m", note: "Quét & nhận diện" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "Điều hướng ổn định" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "" }
    ],
    features: [
      { title: "Công nghệ điều hướng tiên tiến", desc: "Thuật toán điều hướng thế hệ mới giúp di chuyển chính xác, lập bản đồ hiệu quả và làm sạch toàn diện trong môi trường phức tạp." },
      { title: "Hệ thống làm sạch mạnh mẽ", desc: "Bộ làm sạch hiệu suất cao xử lý bụi bẩn, rác khô và mảnh vụn, duy trì chất lượng vệ sinh ổn định theo từng chu kỳ." },
      { title: "Phát hiện chướng ngại thông minh", desc: "Cảm biến + thuật toán nhận diện giúp tránh vật cản mượt mà, giảm gián đoạn và đảm bảo an toàn khi vận hành." },
      { title: "Hoạt động theo lịch 24/7", desc: "Thiết lập lịch vệ sinh theo ngày/tuần. Hệ thống cảm biến dự phòng và chứng nhận an toàn quốc tế cho vận hành tin cậy." },
      { title: "Tự quay về trạm sạc", desc: "Khi pin yếu, robot tự động quay về trạm sạc. Trạm sạc tự động giúp TN70 Pro thực hiện nhiều nhiệm vụ mỗi ngày." },
      { title: "UI trực quan • dễ quản lý", desc: "Theo dõi trạng thái nhanh, thao tác đơn giản, tích hợp liền mạch vào quy trình vận hành vệ sinh của doanh nghiệp." }
    ],
    source: "https://fis247.fpt.com/robot-lau-don-tu-dong-tn-70-pro"
  },
  {
    slug: "robot-le-tan-greeting-nova",
    code: "NOVA",
    name: "Robot Lễ Tân Thông Minh GREETING NOVA",
    cat: "le-tan",
    series: null,
    images: ["/images/robots/robot-le-tan-greeting-nova-front.webp", "/images/robots/robot-le-tan-greeting-nova-side.webp", "/images/robots/robot-le-tan-greeting-nova-back.webp"],
    chips: ["AI đón tiếp + tư vấn dịch vụ", "Giọng nói tự nhiên (ChatGPT)", "LiDAR 3D 240° + SLAM", "Màn hình 14\" độ phân giải cao", "Tự quay về sạc < 10%", "Cloud đồng bộ dữ liệu", "Tuỳ biến kịch bản theo mô hình", "Quảng bá thương hiệu"],
    specs: [
      { label: "Ngôn ngữ thiết lập", value: "≤ 30", note: "Đa ngôn ngữ" },
      { label: "Hoạt động liên tục", value: "14 h", note: "Tự quay về sạc" },
      { label: "Chiều rộng lối đi", value: "700 mm", note: "Tối ưu di chuyển" },
      { label: "Số lượng LiDAR", value: "1", note: "LiDAR 3D • 240°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "SLAM ổn định" },
      { label: "Tốc độ tối đa", value: "1,2 m/s", note: "" }
    ],
    features: [
      { title: "Tư vấn & đón tiếp lễ tân thông minh", desc: "Chào mừng, đề xuất dịch vụ, lời chào tuỳ chỉnh theo ngữ cảnh. Tích hợp ChatGPT, phản hồi nhanh câu hỏi phổ biến." },
      { title: "Khung gầm & dẫn hướng nâng cấp", desc: "LiDAR 3D góc nhìn 240° + SLAM, phát hiện nhanh vật cản thấp và tránh né chính xác trong môi trường đông người." },
      { title: "Trải nghiệm tương tác sống động", desc: "Màn hình 14\" độ phân giải cao hỗ trợ nội dung truyền thông/marketing tuỳ chỉnh, thu hút và làm hài lòng người dùng." },
      { title: "Tự động sạc pin • 14 giờ liên tục", desc: "Khi pin dưới 10%, robot tự quay về đế sạc. Sạc đầy hoạt động liên tục ~14 giờ, đảm bảo dịch vụ không gián đoạn." },
      { title: "Quản lý tập trung • Cloud đồng bộ", desc: "Dữ liệu đồng bộ lên đám mây, hỗ trợ giám sát hoạt động, quản lý tập trung và cảnh báo tình huống bất thường." },
      { title: "Tuỳ chỉnh chức năng • quảng bá thương hiệu", desc: "Tuỳ biến theo kịch bản: khách sạn, văn phòng, bệnh viện, trung tâm thương mại… giúp truyền thông thương hiệu hiệu quả." }
    ],
    source: "https://fis247.fpt.com/robot-le-tan-greeting-nova"
  },
  {
    slug: "robot-khu-khuan-thong-minh-d42",
    code: "D42",
    name: "Robot Khử Khuẩn Thông Minh D42",
    cat: "khu-khuan",
    series: null,
    images: ["/images/robots/robot-khu-khuan-thong-minh-d42-front.webp"],
    chips: ["Phun sương ≤10μm", "4 đầu phun", "UV-C hỗ trợ diệt khuẩn", "LiDAR 360°", "V-SLAM định vị real-time", "Cảm biến siêu âm", "Tự gọi thang máy đa tầng", "Cloud + Camera giám sát", "OTA nâng cấp"],
    specs: [
      { label: "Khử khuẩn", value: "≤ 610 g", note: "Bạn có thể sửa lại đúng spec" },
      { label: "Hoạt động liên tục", value: "4 h", note: "Tự quay về sạc" },
      { label: "Thể tích bình nước", value: "16 L", note: "Bao phủ diện rộng" },
      { label: "Số lượng LiDAR", value: "1", note: "360°" },
      { label: "Định vị chính xác", value: "±5 mm / ±1°", note: "V-SLAM + cảm biến" },
      { label: "Đường kính hạt sương", value: "≤10 μm", note: "" }
    ],
    features: [
      { title: "Khử khuẩn 360° • hiệu suất tối đa", desc: "Phun sương siêu mịn ≤10μm (4 đầu phun) kết hợp UV-C, hỗ trợ loại bỏ đến 99,99% vi khuẩn/virus. Bình 16L, năng suất 3200m²/giờ." },
      { title: "Điều hướng chính xác • tự động hóa", desc: "LiDAR 360° + V-SLAM định vị thời gian thực + siêu âm giúp di chuyển ổn định, tránh vật cản tốt, tự gọi thang máy và tự sạc khi pin yếu." },
      { title: "Điều khiển linh hoạt • giám sát từ xa", desc: "Quản lý/điều phối qua điện thoại, tablet, PAD hoặc cloud. Theo dõi trạng thái, lịch sử, khu vực đã khử khuẩn theo thời gian thực." },
      { title: "Vận hành êm • phù hợp nhiều môi trường", desc: "Giảm xóc tiên tiến giúp chạy êm trên gạch, thảm dày, sàn gỗ; lý tưởng cho bệnh viện, trường học, khách sạn, sân bay, khu đông người." },
      { title: "Triển khai nhanh • Cloud • OTA", desc: "Triển khai từ xa trong vài phút, không giới hạn diện tích bản đồ. Lưu trữ/ trực quan hoá dữ liệu trên cloud, nâng cấp toàn đội qua OTA." },
      { title: "Camera giám sát • cảnh báo bất thường", desc: "Giám sát từ xa qua camera, theo dõi khu vực đã khử khuẩn và cảnh báo tình huống bất thường để vận hành an toàn, liên tục." }
    ],
    source: "https://fis247.fpt.com/robot-khu-khuan-thong-minh-d42"
  }
];
