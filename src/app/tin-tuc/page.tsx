import type { Metadata } from "next";

import { CaseIndex } from "@/components/CaseIndex";
import { PageHero } from "@/components/PageHero";
import { CASES } from "@/data/cases";

export const metadata: Metadata = {
  title: "Tin tức — FIS247",
  description:
    "Các dự án FIS247 đã triển khai cho ngân hàng, cơ quan nhà nước và doanh nghiệp: bối cảnh, bài toán, giải pháp và kết quả.",
};

export default function TinTucPage() {
  return (
    <>
      <PageHero
        eyebrow="Tin tức"
        title="Tin tức"
        lead={`${CASES.length} dự án đã triển khai cho ngân hàng, cơ quan nhà nước và doanh nghiệp — kèm bài toán, giải pháp và kết quả cụ thể.`}
        image="/images/subbanner2.jpg"
        imageAlt="Trung tâm điều hành FIS247"
        compact
      />
      <CaseIndex />
    </>
  );
}
