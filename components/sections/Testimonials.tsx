// ══════════════════════════════════════════════
// LYVIES — Section Témoignages
// Slider animé minimaliste
// ══════════════════════════════════════════════

"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { fadeUp, easeLuxe } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: easeLuxe },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.5, ease: easeLuxe },
  }),
};

export default function Testimonials() {
  const [ref, inView] = useInViewAnimation(0.2);
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir: number) => {
      setCurrent([
        (current + dir + testimonials.length) % testimonials.length,
        dir,
      ]);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[current];

  return (
    <Section id="temoignages" bg="dark">
      <div ref={ref}>
        <Heading
          surtitre="Témoignages"
          titre="Ils nous ont fait confiance"
          className="mb-20"
        />

        <div className="relative max-w-4xl mx-auto min-h-[320px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
            >
              <blockquote className="font-jost font-light text-xl md:text-2xl lg:text-3xl italic text-noir-900 leading-relaxed mb-10 max-w-3xl">
                « {t.quote} »
              </blockquote>

              <p className="font-jost font-medium text-lg text-noir-900">{t.name}</p>
              <p className="text-caption uppercase tracking-[0.2em] font-jost font-medium text-noir-900/40 mt-1">
                {t.role}
              </p>
              <p className="text-[10px] tracking-[0.15em] font-jost text-gum/60 mt-2">
                {t.event}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 flex items-center justify-center text-noir-900/30 hover:text-noir-900 transition-all duration-500"
            aria-label="Précédent"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M16 6H2M2 6L7 1M2 6L7 11" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                className={`rounded-full transition-all duration-700 ${
                  i === current
                    ? "w-2 h-2 bg-noir-900"
                    : "w-1.5 h-1.5 bg-noir-900/20 hover:bg-noir-900/40"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 flex items-center justify-center text-noir-900/30 hover:text-noir-900 transition-all duration-500"
            aria-label="Suivant"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
