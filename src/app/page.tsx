import { Alliances } from "@/components/Alliances";
import { Capabilities } from "@/components/Capabilities";
import { ContactCTA } from "@/components/ContactCTA";
import { Customers } from "@/components/Customers";
import { Hero } from "@/components/Hero";
import { IntroStats } from "@/components/IntroStats";
import { PhotoMosaic } from "@/components/PhotoMosaic";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoMosaic />
      <Capabilities />
      <Alliances />
      <IntroStats />
      <Customers />
      <ContactCTA />
    </>
  );
}
