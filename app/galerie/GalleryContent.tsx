"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import GalleryItemComponent from "@/components/ui/GalleryItem";

const categories = [
  { key: "all", label: "Tout voir" },
  { key: "mariages", label: "Mariages" },
  { key: "corporate", label: "Corporate" },
  { key: "prive", label: "Événements privés" },
  { key: "signature", label: "Signature" },
];

export default function GalleryPageContent() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/galerie-hero.jpg')", backgroundColor: "#3B2218" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/20" />
        <div className="relative z-10 container-lyvies pb-16">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Heading surtitre="Portfolio" titre="Galerie" align="left" light />
          </motion.div>
        </div>
      </section>

      <Section bg="dark">
        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] font-jost font-medium transition-all duration-500 ${
                filter === cat.key
                  ? "bg-noir text-sable"
                  : "bg-transparent text-charbon/40 hover:text-charbon"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[300px]">
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
                  item.aspect === "portrait" ? "row-span-2" : item.aspect === "landscape" ? "col-span-2" : ""
                }
              >
                <GalleryItemComponent item={item} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
