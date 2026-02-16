// ══════════════════════════════════════════════
// LYVIES — Section ADN Marque
// Split screen image / texte avec parallax
// ══════════════════════════════════════════════

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { adnContent } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem, maskReveal } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function ADN() {
  const [ref, inView] = useInViewAnimation(0.15);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Section id="adn" bg="warm">
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          ref={parallaxRef}
          variants={maskReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <div
              className="w-full h-[120%] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/adn-heritage.jpg')",
                backgroundColor: "#38261C",
              }}
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col">
          <Heading
            surtitre={adnContent.surtitre}
            titre={adnContent.titre}
            align="left"
            className="mb-10"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            className="font-jost text-body-lg font-light text-noir-900/70 leading-[1.8] mb-10"
          >
            {adnContent.texte}
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="relative mb-12"
          >
            <p className="font-jost font-normal text-xl lg:text-2xl italic text-noir-900/80 leading-relaxed">
              {adnContent.citation}
            </p>
            <cite className="block mt-3 text-caption uppercase tracking-[0.2em] font-jost font-medium text-oak not-italic">
              {adnContent.auteurCitation}
            </cite>
          </motion.blockquote>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-3 gap-8 pt-10"
          >
            {adnContent.stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center lg:text-left">
                <span className="font-jost font-medium text-3xl lg:text-4xl text-noir-900">
                  {stat.nombre}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] font-jost font-medium text-gum mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
