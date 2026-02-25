// ══════════════════════════════════════════════
// LYVIES — CTA Final
// Bloc contrasté plein largeur avec parallax
// ══════════════════════════════════════════════

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Button from "@/components/ui/Button";

export default function CTAFinal() {
  const [ref, inView] = useInViewAnimation(0.2);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={parallaxRef}
      className="relative py-section-sm lg:py-section overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="w-full h-[130%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cta-bg.jpg')",
            backgroundColor: "#3B2218",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-noir/80" />

      <div ref={ref} className="relative z-[5] container-lyvies text-center py-16 lg:py-24">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-caption uppercase tracking-[0.3em] font-jost font-medium text-or mb-6 block"
        >
          Prochaine étape
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.15}
          className="font-jost font-medium uppercase text-sable mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 0.95, letterSpacing: "-0.01em" }}
        >
          Créons ensemble
          <br />
          votre événement
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
          className="max-w-lg mx-auto font-jost text-body-lg font-light text-sable/60 leading-relaxed mb-12"
        >
          Partagez-nous votre vision. Notre équipe composera une expérience
          gastronomique à la hauteur de vos ambitions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="filled" size="lg" href="/contact">
            Demander un devis
          </Button>
          <Button variant="ghost" size="md" href="tel:+33600000000" className="!text-sable/50 hover:!text-sable">
            +33 6 00 00 00 00
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
