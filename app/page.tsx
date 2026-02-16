// ══════════════════════════════════════════════
// LYVIES — Homepage
// Page d'accueil immersive premium
// ══════════════════════════════════════════════

import Hero from "@/components/sections/Hero";
import ADN from "@/components/sections/ADN";
import Experiences from "@/components/sections/Experiences";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ADN />
      <Experiences />
      <Gallery />
      <Testimonials />
      <CTAFinal />
    </>
  );
}
