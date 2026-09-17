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

export const metadata: Metadata = {
  title: "FIS247 — Hạ tầng CNTT & Robot dịch vụ",
  description:
    "FIS247 cung cấp dịch vụ hạ tầng Công nghệ thông tin, thiết bị chuyên dụng ngân hàng và robot dịch vụ, vận hành không gián đoạn 24/7.",
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
