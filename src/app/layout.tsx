import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-bvp",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE = "FIS247 — Hạ tầng CNTT & Robot dịch vụ";
const MOTA =
  "FIS247 cung cấp dịch vụ hạ tầng Công nghệ thông tin, thiết bị chuyên dụng ngân hàng và robot dịch vụ, vận hành không gián đoạn 24/7.";

export const metadata: Metadata = {
  // Thẻ og:image phải là đường dẫn tuyệt đối. Vercel cấp sẵn VERCEL_URL cho mỗi
  // lần deploy; khi có tên miền thật thì đặt NEXT_PUBLIC_SITE_URL để đè lên.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  ),
  title: SITE,
  description: MOTA,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "FIS247",
    title: SITE,
    description: MOTA,
  },
  twitter: { card: "summary_large_image", title: SITE, description: MOTA },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
