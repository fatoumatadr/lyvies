// ══════════════════════════════════════════════
// LYVIES — Card Expérience
// Carte avec image, overlay et hover (minimaliste)
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { cardHover, imageZoom, fadeUp } from "@/lib/animations";
import type { Experience } from "@/lib/data";

interface CardExperienceProps {
  experience: Experience;
  index: number;
}

export default function CardExperience({ experience, index }: CardExperienceProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index * 0.15}
      className="group relative cursor-pointer"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative overflow-hidden aspect-[3/4]"
      >
        {/* Image avec zoom au hover */}
        <motion.div variants={imageZoom} className="absolute inset-0">
          <div
            className="w-full h-full bg-noir"
            style={{
              backgroundImage: `url(${experience.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

        {/* Contenu bas */}
        <div className="absolute inset-x-0 bottom-0 p-8">
          <span className="text-caption uppercase tracking-[0.25em] font-jost font-medium text-sable/70 mb-2 block">
            {experience.subtitle}
          </span>

          <h3 className="font-jost font-medium text-display-sm uppercase tracking-normal text-sable mb-3">
            {experience.title}
          </h3>

          {/* Description — visible au hover */}
          <p className="font-jost text-body-sm font-light text-sable/70 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-out">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}
