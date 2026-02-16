// ══════════════════════════════════════════════
// LYVIES — Section Galerie
// Grille masonry éditoriale
// ══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import GalleryItemComponent from "@/components/ui/GalleryItem";
import Button from "@/components/ui/Button";

const categories = [
  { key: "all", label: "Tout" },
  { key: "mariages", label: "Mariages" },
  { key: "corporate", label: "Corporate" },
  { key: "prive", label: "Privé" },
  { key: "signature", label: "Signature" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <Section id="galerie" bg="warm">
      <Heading
        surtitre="Galerie"
        titre="Instants d'exception"
        sousTitre="Chaque image raconte une histoire de saveurs, d'élégance et de partage."
        className="mb-16"
      />

      {/* Filtres */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`
              px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] font-jost font-medium
              transition-all duration-500
              ${
                activeFilter === cat.key
                  ? "bg-noir-900 text-sable"
                  : "bg-transparent text-noir-900/50 hover:text-noir-900"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille masonry */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[280px]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={
                item.aspect === "portrait"
                  ? "row-span-2"
                  : item.aspect === "landscape"
                  ? "col-span-2"
                  : ""
              }
            >
              <GalleryItemComponent item={item} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA vers page galerie */}
      <div className="flex justify-center mt-16">
        <Button variant="outline" href="/galerie">
          Voir la galerie complète
        </Button>
      </div>
    </Section>
  );
}
