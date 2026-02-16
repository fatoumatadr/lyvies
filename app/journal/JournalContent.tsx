"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem, imageZoom } from "@/lib/animations";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function JournalContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/journal-hero.jpg')", backgroundColor: "#38261C" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/50 to-noir-900/20" />
        <div className="relative z-10 container-lyvies pb-16">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Heading surtitre="Inspirations" titre="Journal" align="left" />
          </motion.div>
        </div>
      </section>

      <Section bg="dark">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogPosts.map((post) => (
            <motion.article key={post.slug} variants={staggerItem} className="group">
              <Link href={`/journal/${post.slug}`}>
                {/* Image */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative aspect-[16/10] overflow-hidden mb-6"
                >
                  <motion.div variants={imageZoom} className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center bg-noir-900"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-noir-900/0 group-hover:bg-noir-900/30 transition-all duration-500" />
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-noir-900/70 backdrop-blur-sm">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-jost text-oak">
                      {post.category}
                    </span>
                  </div>
                </motion.div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.15em] font-jost text-noir-900/30">
                    {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-oak/30" />
                  <span className="text-[10px] tracking-[0.15em] font-jost text-noir-900/30">
                    {post.readTime} min
                  </span>
                </div>

                {/* Titre */}
                <h3 className="font-jost font-medium text-xl lg:text-2xl text-noir-900 group-hover:text-oak transition-colors duration-500 mb-3">
                  {post.title}
                </h3>

                {/* Extrait */}
                <p className="font-jost text-body-sm font-light text-noir-900/40 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Lien */}
                <span className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-[0.3em] font-jost text-oak/60 group-hover:text-oak transition-colors duration-500">
                  Lire
                  <svg width="14" height="7" viewBox="0 0 14 7" fill="none">
                    <path d="M0 3.5H12M12 3.5L8.5 0.5M12 3.5L8.5 6.5" stroke="currentColor" strokeWidth="0.7" />
                  </svg>
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
