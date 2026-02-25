"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

const eventTypes = [
  { value: "mariage", label: "Mariage" },
  { value: "corporate", label: "Événement corporate" },
  { value: "prive", label: "Événement privé" },
  { value: "signature", label: "Expérience Signature" },
  { value: "autre", label: "Autre" },
];

const guestRanges = [
  { value: "10-30", label: "10 – 30 convives" },
  { value: "30-80", label: "30 – 80 convives" },
  { value: "80-150", label: "80 – 150 convives" },
  { value: "150-300", label: "150 – 300 convives" },
  { value: "300+", label: "Plus de 300 convives" },
];

const ambiances = [
  { value: "intime-elegant", label: "Intime & Élégant" },
  { value: "festif-vibrant", label: "Festif & Vibrant" },
  { value: "contemporain-epure", label: "Contemporain & Épuré" },
  { value: "traditionnel-luxe", label: "Traditionnel & Luxe" },
  { value: "immersif-theatral", label: "Immersif & Théâtral" },
];

const budgets = [
  { value: "5000-10000", label: "5 000 € – 10 000 €" },
  { value: "10000-25000", label: "10 000 € – 25 000 €" },
  { value: "25000-50000", label: "25 000 € – 50 000 €" },
  { value: "50000+", label: "Plus de 50 000 €" },
  { value: "a-definir", label: "À définir ensemble" },
];

export default function ContactForm() {
  const [ref, inView] = useInViewAnimation(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero contact */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')", backgroundColor: "#3B2218" }}
        />
        <div className="absolute inset-0 bg-noir/75" />
        <div className="relative z-10 text-center container-lyvies">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <Heading
              surtitre="Contact"
              titre="Imaginons ensemble"
              sousTitre="Partagez-nous les contours de votre événement. Nous composerons une proposition sur mesure."
              light
            />
          </motion.div>
        </div>
      </section>

      {/* Formulaire */}
      <Section bg="warm">
        <div ref={ref} className="max-w-4xl mx-auto">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-16"
            >
              {/* Coordonnées */}
              <motion.div variants={staggerItem}>
                <h3 className="font-jost font-medium text-display-sm uppercase tracking-normal text-or mb-8">
                  Vos coordonnées
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <FormInput label="Prénom" name="prenom" required />
                  <FormInput label="Nom" name="nom" required />
                  <FormInput label="Email" name="email" type="email" required />
                  <FormInput label="Téléphone" name="telephone" type="tel" />
                </div>
              </motion.div>

              
              {/* Événement */}
              <motion.div variants={staggerItem}>
                <h3 className="font-jost font-medium text-display-sm uppercase tracking-normal text-or mb-8">
                  Votre événement
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <FormInput label="Type d'événement" name="type_evenement" type="select" options={eventTypes} required />
                  <FormInput label="Date souhaitée" name="date" type="text" placeholder="ex: Juin 2025" />
                  <FormInput label="Nombre d'invités" name="nombre_invites" type="select" options={guestRanges} required />
                  <FormInput label="Lieu de réception" name="lieu" placeholder="ex: Château, domaine…" />
                </div>
              </motion.div>

              
              {/* Ambiance & Budget */}
              <motion.div variants={staggerItem}>
                <h3 className="font-jost font-medium text-display-sm uppercase tracking-normal text-or mb-8">
                  Ambiance & Budget
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <FormInput label="Ambiance souhaitée" name="ambiance" type="select" options={ambiances} />
                  <FormInput label="Budget envisagé" name="budget" type="select" options={budgets} />
                </div>
              </motion.div>

              
              {/* Message */}
              <motion.div variants={staggerItem}>
                <h3 className="font-jost font-medium text-display-sm uppercase tracking-normal text-or mb-8">
                  Votre vision
                </h3>
                <FormInput
                  label="Décrivez votre événement idéal"
                  name="message"
                  type="textarea"
                  rows={6}
                  placeholder="Racontez-nous votre vision : thème, inspirations, attentes particulières…"
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={staggerItem} className="flex flex-col items-center gap-6 pt-8">
                <Button variant="filled" size="lg" type="submit">
                  Envoyer ma demande
                </Button>
                <p className="text-[10px] tracking-[0.1em] font-jost text-charbon/30 text-center">
                  Nous vous répondons sous 48 heures ouvrées avec une proposition personnalisée.
                </p>
              </motion.div>
            </motion.form>
          ) : (
            /* Confirmation */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 border border-cacao/15 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-2xl text-cacao">✓</span>
              </div>
              <h3 className="font-jost font-medium text-display-md uppercase text-cacao mb-4">
                Merci
              </h3>
              <p className="font-jost text-body-lg font-light text-charbon/70 max-w-md mx-auto">
                Votre demande a bien été envoyée. Notre équipe vous contactera dans les plus brefs délais pour composer votre expérience sur mesure.
              </p>
            </motion.div>
          )}
        </div>
      </Section>
    </>
  );
}
