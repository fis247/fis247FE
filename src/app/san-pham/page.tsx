import type { Metadata } from "next";

import { AutoScrollTo } from "@/components/AutoScrollTo";
import { PageHero } from "@/components/PageHero";
import { RobotShowcase } from "@/components/RobotShowcase";

export const metadata: Metadata = {
  title: "Sản phẩm — FIS247",
  description:
    "Robot dịch vụ và thiết bị chuyên dụng do FIS247 cung cấp: robot nâng hạ, xe nâng, giao hàng, vệ sinh, lễ tân và khử khuẩn.",
};

export default async function SanPhamPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const { model } = await searchParams;

  return (
    <>
      <AutoScrollTo id="robot" />
      <PageHero
        eyebrow="Sản phẩm"
        title="Sản phẩm"
        lead="Robot dịch vụ và thiết bị chuyên dụng, triển khai cho ngân hàng, nhà máy và doanh nghiệp trên toàn quốc."
        video="/videos/robot-warehouse.mp4"
        image="/videos/robot-warehouse.webp"
        imageAlt="Cánh tay robot trong buồng sản xuất tự động"
        compact
      />
      <RobotShowcase initialModel={model} />
    </>
  );
}
