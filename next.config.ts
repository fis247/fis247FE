import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ẩn huy hiệu Next.js Devtools ở góc màn hình khi chạy `next dev`.
  // Lỗi biên dịch và lỗi runtime vẫn hiện bình thường.
  devIndicators: false,

  images: {
    // Next 16 chỉ cho phép [75] nếu không khai báo; ảnh banner hero dùng 85.
    qualities: [75, 85],
  },
};

export default nextConfig;
