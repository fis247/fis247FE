import { Alliances } from "@/components/Alliances";
import { ContactCTA } from "@/components/ContactCTA";
import { Customers } from "@/components/Customers";
import { Hero } from "@/components/Hero";
import { IntroStats } from "@/components/IntroStats";
import { PhotoMosaic } from "@/components/PhotoMosaic";
import { RobotLineup } from "@/components/RobotLineup";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoMosaic />
      <RobotLineup />
      <Alliances />
      <IntroStats />
      <Customers />
      <ContactCTA />
    </>
  );
}
