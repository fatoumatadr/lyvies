// ══════════════════════════════════════════════
// LYVIES — Gallery Item
// Item éditorial avec hover narratif (minimaliste)
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { imageZoom, fadeUp } from "@/lib/animations";
import type { GalleryItem as GalleryItemType } from "@/lib/data";

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
}

const aspectClasses = {
  portrait: "row-span-2",
  landscape: "col-span-2",
  square: "",
};

export default function GalleryItem({ item, index }: GalleryItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index * 0.1}
      className={`group relative overflow-hidden cursor-pointer ${aspectClasses[item.aspect]}`}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative w-full h-full min-h-[280px]"
      >
        {/* Image */}
        <motion.div variants={imageZoom} className="absolute inset-0">
          <div
            className="w-full h-full bg-noir-900"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-noir-900/0 group-hover:bg-noir-900/60 transition-all duration-700" />

        {/* Contenu hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
          <span className="text-caption uppercase tracking-[0.25em] font-jost font-medium text-sable/70 mb-3">
            {item.category}
          </span>
          <p className="font-jost font-light text-xl text-sable text-center italic">
            {item.caption}
          </p>
        </div>

        {/* Badge catégorie (toujours visible) */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-noir-900/60 backdrop-blur-sm">
          <span className="text-[9px] uppercase tracking-[0.2em] font-jost font-medium text-sable/70">
            {item.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
