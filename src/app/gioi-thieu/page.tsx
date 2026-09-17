import type { Metadata } from "next";

import { AboutIdentity } from "@/components/AboutIdentity";
import { AboutParent } from "@/components/AboutParent";
import { AboutPurpose } from "@/components/AboutPurpose";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Giới thiệu — FIS247",
  description:
    "FIS247 là đơn vị chuyên trách của Công ty TNHH FPT IS về dịch vụ hạ tầng CNTT, thiết bị chuyên dụng ngân hàng và robot dịch vụ, với hơn 20 năm kinh nghiệm.",
};

export default function GioiThieuPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Giới thiệu"
        lead="Hơn 20 năm giữ cho hệ thống của ngân hàng và doanh nghiệp Việt Nam vận hành không gián đoạn."
        image="/images/subbanner3.jpg"
        imageAlt="Buổi làm việc của đội ngũ FIS247"
        compact
      />
      <AboutIdentity />
      <AboutParent />
      <AboutPurpose />
    </>
  );
}
