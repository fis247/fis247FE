import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 chỉ cho phép [75] nếu không khai báo; ảnh banner hero dùng 85.
    qualities: [75, 85],
  },
};

export default nextConfig;
