// ══════════════════════════════════════════════
// LYVIES — Page Contact / Devis
// Formulaire premium haute couture
// ══════════════════════════════════════════════

import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis",
  description:
    "Demandez un devis personnalisé pour votre événement. Traiteur haut de gamme, gastronomie contemporaine.",
};

export default function ContactPage() {
  return <ContactForm />;
}
