"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { fadeUp, slideFromRight, maskReveal, staggerContainer, staggerItem } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

const services = [
  {
    titre: "Conception de menu",
    description: "Chaque menu est composé selon votre histoire, vos origines et vos envies. Tout est créé sur mesure, de l'amuse-bouche au dessert.",
  },
  {
    titre: "Scénographie & décoration",
    description: "Art de la table, scénographie florale, éclairage d'ambiance. Un univers visuel cohérent qui met en valeur chaque plat.",
  },
  {
    titre: "Service & personnel",
    description: "Nos équipes sont formées à l'excellence discrète. Chaque geste est calibré pour que vos invités se sentent privilégiés.",
  },
  {
    titre: "Live cooking",
    description: "Nos chefs cuisinent devant vos invités, transformant la préparation en performance. Une dimension théâtrale unique.",
  },
];

/* ── Composant réutilisable par expérience ── */
function ExperienceBlock({
  id,
  title,
  subtitle,
  description,
  image,
  features,
  reverse = false,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
}) {
  const [ref, inView] = useInViewAnimation(0.15);

  return (
    <div ref={ref} id={id} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
      {/* Image */}
      <motion.div
        variants={maskReveal}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`relative aspect-[4/5] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')`, backgroundColor: "#38261C" }}
        />
      </motion.div>

      {/* Contenu */}
      <div className={reverse ? "lg:order-1" : ""}>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-caption uppercase tracking-[0.3em] font-jost text-oak mb-3 block"
        >
          {subtitle}
        </motion.span>

        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="font-jost font-medium text-display-md uppercase tracking-normal text-noir-900 mb-6"
        >
          {title}
        </motion.h3>


        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
          className="font-jost text-body-lg font-light text-noir-900/70 leading-[1.8] mb-8"
        >
          {description}
        </motion.p>

        {/* Points clés */}
        <div className="space-y-3 mb-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3 + i * 0.08}
              className="flex items-center gap-4"
            >
              <span className="font-jost text-body-sm font-light text-noir-900/30 flex-shrink-0">–</span>
              <span className="font-jost text-body-sm font-light text-noir-900/50">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.6}>
          <Button variant="outline" href="/contact">
            Demander un devis
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Données enrichies ── */
const experienceDetails = [
  {
    ...experiences[0],
    features: [
      "Menu dégustation personnalisé selon vos origines",
      "Cocktail dînatoire ou dîner assis",
      "Pièce montée signature",
      "Service et personnel dédié",
      "Coordination avec votre wedding planner",
    ],
  },
  {
    ...experiences[1],
    features: [
      "Formats cocktail, buffet ou dîner de gala",
      "Branding culinaire sur mesure",
      "Options dietary-friendly complètes",
      "Service discret et professionnel",
      "Facturation entreprise simplifiée",
    ],
  },
  {
    ...experiences[2],
    features: [
      "Anniversaires, baptêmes, réunions familiales",
      "Menu adaptable de 10 à 150 convives",
      "Service à domicile ou en lieu privatisé",
      "Décoration et scénographie en option",
      "Formules tout compris disponibles",
    ],
  },
  {
    ...experiences[3],
    features: [
      "Voyage gastronomique multi-sensoriel",
      "Scénographie immersive sur mesure",
      "Accord mets et vins d'exception",
      "Performance culinaire live",
      "Expérience limitée à 50 convives maximum",
    ],
  },
];

export default function ExperiencesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/experiences-hero.jpg')", backgroundColor: "#38261C" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/50 to-noir-900/30" />
        <div className="relative z-10 container-lyvies pb-16">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Heading surtitre="Nos prestations" titre="Expériences culinaires" align="left" />
          </motion.div>
        </div>
      </section>

      {/* Sections détaillées */}
      {experienceDetails.map((exp, i) => (
        <Section key={exp.id} bg={i % 2 === 0 ? "dark" : "warm"}>
          <ExperienceBlock
            id={exp.id}
            title={exp.title}
            subtitle={exp.subtitle}
            description={exp.description}
            image={exp.image}
            features={exp.features}
            reverse={i % 2 !== 0}
          />
        </Section>
      ))}

      {/* Services */}
      <Section bg="dark">
        <Heading surtitre="Nos services" titre="Un accompagnement complet" className="mb-16" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {services.map((service) => (
            <motion.div key={service.titre} variants={staggerItem}>
              <h3 className="font-jost font-medium text-xl uppercase tracking-normal text-noir-900 mb-4">
                {service.titre}
              </h3>
              <p className="font-jost text-body-md font-light text-noir-900/60 leading-[1.8]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA final */}
      <Section bg="dark" className="text-center">
        <Heading surtitre="Sur mesure" titre="Votre événement mérite l'exception" className="mb-12" />
        <Button variant="filled" size="lg" href="/contact">Demander un devis personnalisé</Button>
      </Section>
    </>
  );
}
