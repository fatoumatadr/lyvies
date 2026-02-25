"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ArticleContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero article */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')`, backgroundColor: "#3B2218" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/20" />
        <div className="relative z-10 container-lyvies pb-16">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/journal" className="text-[10px] uppercase tracking-[0.2em] font-jost text-or/60 hover:text-or transition-colors">
                Journal
              </Link>
              <span className="text-or/30">/</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-jost text-charbon/30">
                {post.category}
              </span>
            </div>

            <h1
              className="font-jost font-medium uppercase text-sable max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-6">
              <span className="text-caption tracking-[0.15em] font-jost text-charbon/40">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-or/30" />
              <span className="text-caption tracking-[0.15em] font-jost text-charbon/40">
                {post.readTime} min de lecture
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corps article */}
      <Section bg="warm">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Contenu placeholder — à remplacer par du contenu CMS */}
          <div className="prose-lyvies space-y-6">
            <p className="font-jost text-body-lg font-light text-charbon/70 leading-[1.9] first-letter:text-5xl first-letter:font-jost first-letter:font-medium first-letter:text-or first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {post.excerpt} Cet article explore les inspirations, les techniques et la philosophie qui guident notre approche culinaire au quotidien.
            </p>

            <p className="font-jost text-body-md font-light text-charbon/60 leading-[1.8]">
              Dans notre cuisine, chaque geste est porteur de sens. Les épices que nous sélectionnons voyagent depuis les meilleurs terroirs du monde pour rejoindre nos plans de travail parisiens. Ce voyage porte en lui des siècles de tradition culinaire.
            </p>

            <blockquote className="border-l-2 border-cacao/10 pl-8 my-10">
              <p className="font-jost font-medium text-xl italic text-charbon/70 leading-relaxed">
                La cuisine est un dialogue entre le passé et le présent, entre la terre et l'assiette.
              </p>
            </blockquote>

            <p className="font-jost text-body-md font-light text-charbon/60 leading-[1.8]">
              Notre approche se distingue par cette volonté constante de sublimer sans dénaturer. La maîtrise des cuissons, la précision du dressage : les techniques de la haute gastronomie viennent servir des saveurs authentiques, jamais les remplacer.
            </p>

            <p className="font-jost text-body-md font-light text-charbon/60 leading-[1.8]">
              C'est cet équilibre qui fait de chaque événement Lyvies une expérience unique, un pont entre les traditions culinaires du monde et la gastronomie contemporaine.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-20 pt-10 border-t border-sable/30 flex justify-between items-center">
            <Link href="/journal" className="flex items-center gap-3 text-caption uppercase tracking-[0.2em] font-jost text-or/60 hover:text-or transition-colors">
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none">
                <path d="M14 3.5H2M2 3.5L5.5 0.5M2 3.5L5.5 6.5" stroke="currentColor" strokeWidth="0.7" />
              </svg>
              Retour au journal
            </Link>
            <Button variant="outline" size="sm" href="/contact">
              Nous contacter
            </Button>
          </div>
        </motion.article>
      </Section>
    </>
  );
}
