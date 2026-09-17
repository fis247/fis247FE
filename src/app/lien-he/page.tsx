import type { Metadata } from "next";

import { AboutIntro } from "@/components/AboutIntro";
import { ContactCTA } from "@/components/ContactCTA";
import { Milestones } from "@/components/Milestones";
import { OfficeNetwork } from "@/components/OfficeNetwork";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Liên hệ — FIS247",
  description:
    "Liên hệ ngay để nhận tư vấn và hỗ trợ nhanh chóng từ đội ngũ chuyên gia FIS247 trên toàn quốc.",
};

export default function LienHePage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Liên hệ"
        lead="Liên hệ ngay để nhận tư vấn và hỗ trợ nhanh chóng từ đội ngũ chuyên gia FIS247 trên toàn quốc."
        image="/images/lienhe1.jpg"
        imageAlt="Đội ngũ FIS247"
      />
      <AboutIntro />
      <Milestones />
      <OfficeNetwork />
      <ContactCTA id="form-lien-he" />
    </>
  );
}
