// ══════════════════════════════════════════════
// LYVIES — Heading
// Titre avec surtitre, minimaliste
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";

interface HeadingProps {
  surtitre?: string;
  titre: string;
  sousTitre?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function Heading({
  surtitre,
  titre,
  sousTitre,
  align = "center",
  light = false,
  className = "",
}: HeadingProps) {
  const [ref, inView] = useInViewAnimation(0.3);

  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} ${className}`}>
      {/* Surtitre */}
      {surtitre && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className={`text-caption uppercase tracking-[0.3em] font-jost font-medium mb-6 ${
            light ? "text-sable/60" : "text-or"
          }`}
        >
          {surtitre}
        </motion.span>
      )}

      {/* Titre principal */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.15}
        className={`font-jost font-medium uppercase tracking-[-0.01em] leading-[0.95] ${
          light ? "text-sable" : "text-cacao"
        }`}
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
      >
        {titre}
      </motion.h2>

      {/* Sous-titre */}
      {sousTitre && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
          className={`mt-6 max-w-2xl font-jost font-light text-body-md leading-relaxed ${
            light ? "text-sable/70" : "text-charbon/60"
          }`}
        >
          {sousTitre}
        </motion.p>
      )}
    </div>
  );
}
