"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, slideFromLeft, slideFromRight, maskReveal, staggerContainer, staggerItem, imageZoom } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import { teamMembers } from "@/lib/data";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

/* ── Section parallax réutilisable ── */
function StorySection({
  image,
  surtitre,
  titre,
  paragraphes,
  reverse = false,
}: {
  image: string;
  surtitre: string;
  titre: string;
  paragraphes: string[];
  reverse?: boolean;
}) {
  const [ref, inView] = useInViewAnimation(0.15);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "direction-rtl" : ""}`}>
      {/* Image */}
      <motion.div
        ref={parallaxRef}
        variants={reverse ? slideFromRight : slideFromLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`relative aspect-[4/5] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
        style={{ direction: "ltr" }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <div
            className="w-full h-[130%] bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')`, backgroundColor: "#3B2218" }}
          />
        </motion.div>
      </motion.div>

      {/* Texte */}
      <div className={reverse ? "lg:order-1" : ""} style={{ direction: "ltr" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
        >
          <span className="text-caption uppercase tracking-[0.3em] font-jost text-or mb-4 block">
            {surtitre}
          </span>
          <h2
            className="font-jost font-medium uppercase text-cacao tracking-normal mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1 }}
          >
            {titre}
          </h2>
        </motion.div>

        {paragraphes.map((p, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2 + i * 0.15}
            className="font-jost text-body-md font-light text-charbon/70 leading-[1.8] mb-6"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default function UniversContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/univers-hero.jpg')", backgroundColor: "#3B2218" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/30" />
        <div className="relative z-10 container-lyvies pb-16">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
            <Heading surtitre="Notre univers" titre="L'âme de Lyvies" align="left" light />
          </motion.div>
        </div>
      </section>

      {/* Section 1 : Histoire */}
      <Section bg="dark">
        <StorySection
          image="/images/univers-histoire.jpg"
          surtitre="Chapitre I"
          titre="Notre histoire"
          paragraphes={[
            "Lyvies est née d'une passion pour les saveurs et l'art de recevoir. D'un côté, les marchés du monde, les arômes rares et les ingrédients d'exception. De l'autre, les brigades parisiennes, la rigueur du dressage, l'art de la cuisson parfaite.",
            "Fondée en 2012 par Lyvie Ndongo, la maison a d'abord été un secret partagé entre initiés, des dîners intimes où chaque plat racontait un souvenir, un terroir, un voyage. Puis le bouche-à-oreille a fait son œuvre.",
            "Aujourd'hui, Lyvies est une référence du traiteur haut de gamme en France. Chaque événement est une nouvelle page de cette histoire que nous écrivons avec passion.",
          ]}
        />
      </Section>

      {/* Section 2 : Inspiration culturelle */}
      <Section bg="warm">
        <StorySection
          image="/images/univers-inspiration.jpg"
          surtitre="Chapitre II"
          titre="Nos inspirations"
          paragraphes={[
            "Le monde est une source infinie de textures, de couleurs et de goûts. Nos créations puisent dans cette diversité : le piquant du piment de Penja, la douceur des fruits exotiques, la chaleur du gingembre, la complexité des épices rares.",
            "Notre inspiration ne s'arrête pas aux saveurs. Les matières naturelles, les teintes terreuses, les jeux de lumière : tout cela nourrit notre scénographie, notre art de dresser, notre identité visuelle.",
            "Nous aimons revisiter les traditions culinaires du monde à travers le prisme de la haute gastronomie contemporaine.",
          ]}
          reverse
        />
      </Section>

      {/* Section 3 : Philosophie */}
      <Section bg="dark">
        <StorySection
          image="/images/univers-philosophie.jpg"
          surtitre="Chapitre III"
          titre="Philosophie culinaire"
          paragraphes={[
            "Notre cuisine est un dialogue entre tradition et modernité. Nous respectons les techniques classiques tout en les adaptant avec la précision de la gastronomie française. C'est cet équilibre qui rend chaque plat unique.",
            "Nous travaillons exclusivement avec des produits de saison, sourcés auprès de producteurs engagés. Le circuit court n'est pas un argument marketing, c'est notre éthique.",
            "Chaque plat doit raconter une histoire et créer une émotion. C'est notre promesse, événement après événement.",
          ]}
        />
      </Section>

      {/* Section 4 : Notre équipe */}
      <Section bg="warm">
        <Heading surtitre="Chapitre IV" titre="Notre équipe" className="mb-16" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member) => (
            <motion.article key={member.id} variants={staggerItem} className="group">
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative aspect-[3/4] overflow-hidden mb-8"
              >
                <motion.div variants={imageZoom} className="absolute inset-0">
                  <div
                    className="w-full h-full bg-cover bg-center bg-noir"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
              </motion.div>
              <h3 className="font-jost font-medium text-2xl uppercase tracking-normal text-cacao mb-1">
                {member.name}
              </h3>
              <span className="text-caption uppercase tracking-[0.25em] font-jost text-or block mb-4">
                {member.role}
              </span>
              <p className="font-jost text-body-sm font-light text-charbon/50 leading-relaxed">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section bg="dark" className="text-center">
        <Heading surtitre="Prochaine étape" titre="Entrez dans notre univers" className="mb-12" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="filled" href="/experiences">Nos expériences</Button>
          <Button variant="outline" href="/contact">Nous contacter</Button>
        </div>
      </Section>
    </>
  );
}
