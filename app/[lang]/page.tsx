import { getDictionary } from "./dictionaries";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BackgroundStars from "@/components/BackgroundStars";

type Props = {
  params: Promise<{ lang: "en" | "it" }>;
};

export default async function Home({ params }: Props) {
  // Attendere i parametri prima di usarli
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <>
      <BackgroundStars isTransitioning={false} />
      <main className="relative z-10">
        <HeroSection dict={dict.hero} />
        <ServicesSection dict={dict.services} />
        <ContactSection dict={dict.common.contact} />
      </main>
    </>
  );
}
