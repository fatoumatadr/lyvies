// ══════════════════════════════════════════════
// LYVIES — Hero Section
// Fullscreen cinématique, minimaliste
// ══════════════════════════════════════════════

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroContent } from "@/lib/data";
import { letterReveal, fadeUp, fadeIn, easeLuxe } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

  const titleLines = heroContent.titre.split("\n");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundColor: "#3B2218",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/40 to-noir/90" />
      </motion.div>

      <div className="relative z-[5] container-lyvies text-center flex flex-col items-center">
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-caption uppercase tracking-[0.4em] font-jost font-medium text-or mb-8"
        >
          {heroContent.surtitre}
        </motion.span>

        <div className="mb-10">
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden">
              <motion.h1
                className="font-jost font-medium uppercase text-sable"
                style={{
                  fontSize: "clamp(2.4rem, 6.5vw, 6rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                {line.split("").map((char, i) => (
                  <motion.span
                    key={`${lineIndex}-${i}`}
                    variants={letterReveal}
                    initial="hidden"
                    animate="visible"
                    custom={lineIndex * line.length * 0.04 + i}
                    className="inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="max-w-xl font-jost text-body-lg font-light text-sable/70 leading-relaxed mb-12"
        >
          {heroContent.sousTitre}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Button variant="filled" size="lg" href="/contact">
            {heroContent.ctaPrimaire}
          </Button>
          <Button variant="outline-light" size="lg" href="/univers">
            {heroContent.ctaSecondaire}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5]"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-jost font-medium text-taupe/50">
          Défiler
        </span>
      </motion.div>
    </section>
  );
}
