import { Alliances } from "@/components/Alliances";
import { Capabilities } from "@/components/Capabilities";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroStats } from "@/components/IntroStats";
import { PhotoMosaic } from "@/components/PhotoMosaic";
import { SuccessStories } from "@/components/SuccessStories";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PhotoMosaic />
        <Capabilities />
        <Alliances />
        <IntroStats />
        <SuccessStories />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
