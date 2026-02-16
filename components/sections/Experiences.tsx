// ══════════════════════════════════════════════
// LYVIES — Section Expériences Culinaires
// Grille de cards avec animations
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { staggerContainer } from "@/lib/animations";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import CardExperience from "@/components/ui/CardExperience";
import Button from "@/components/ui/Button";

export default function Experiences() {
  return (
    <Section id="experiences" bg="dark">
      <Heading
        surtitre="Nos prestations"
        titre="Expériences culinaires"
        sousTitre="Chaque format d'événement mérite une orchestration unique. Nous composons des expériences sur mesure, de l'intime au grandiose."
        className="mb-20"
      />

      {/* Grille cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {experiences.map((exp, i) => (
          <CardExperience key={exp.id} experience={exp} index={i} />
        ))}
      </motion.div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <Button variant="outline" href="/experiences">
          Toutes nos expériences
        </Button>
      </div>
    </Section>
  );
}
