// ══════════════════════════════════════════════
// LYVIES — Footer
// Design minimaliste, fond sombre
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useInViewAnimation } from "@/lib/hooks";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  explorer: [
    { label: "Univers Lyvies", href: "/univers" },
    { label: "Expériences", href: "/experiences" },
    { label: "Galerie", href: "/galerie" },
    { label: "Journal", href: "/journal" },
  ],
  decouvrir: [
    { label: "Contact & Devis", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
  ],
};

const socials = [
  { label: "Instagram", href: "https://instagram.com/lyviestraiteur", icon: "IG" },
  { label: "Pinterest", href: "https://pinterest.com/lyviestraiteur", icon: "PI" },
  { label: "LinkedIn", href: "https://linkedin.com/company/lyviestraiteur", icon: "LI" },
];

export default function Footer() {
  const [ref, inView] = useInViewAnimation(0.1);

  return (
    <footer ref={ref} className="relative bg-noir-900">
      <div className="container-lyvies py-24 lg:py-32">
        {/* ── Section supérieure : Logo + Newsletter ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20"
        >
          {/* Logo grand format */}
          <motion.div variants={staggerItem}>
            <Image
              src="/images/logo-full.svg"
              alt="Lyvies Traiteur"
              width={240}
              height={72}
              className="h-16 lg:h-20 w-auto brightness-0 invert opacity-80"
            />
            <p className="font-garamond italic text-body-sm text-sable/50 mt-4 max-w-sm">
              L'art culinaire sublimé pour vos événements d'exception.
            </p>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={staggerItem} className="w-full lg:w-auto">
            <p className="text-caption uppercase tracking-[0.25em] font-jost font-medium text-sable/80 mb-4">
              Restez inspiré
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="bg-transparent border border-sable/15 border-r-0 px-6 py-3 text-body-sm font-jost font-light text-sable placeholder:text-sable/30 outline-none focus:border-sable/40 transition-colors duration-500 w-full lg:w-72"
              />
              <button className="px-6 py-3 bg-sable text-noir-900 text-[10px] uppercase tracking-[0.2em] font-jost font-medium hover:bg-sable/80 transition-colors duration-500 whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Colonnes liens ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20"
        >
          {/* Explorer */}
          <motion.div variants={staggerItem}>
            <h4 className="text-caption uppercase tracking-[0.3em] font-jost font-medium text-sable/80 mb-6">
              Explorer
            </h4>
            <ul className="space-y-3">
              {footerLinks.explorer.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-jost font-light text-sable/40 hover:text-sable transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Découvrir */}
          <motion.div variants={staggerItem}>
            <h4 className="text-caption uppercase tracking-[0.3em] font-jost font-medium text-sable/80 mb-6">
              Découvrir
            </h4>
            <ul className="space-y-3">
              {footerLinks.decouvrir.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-jost font-light text-sable/40 hover:text-sable transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="text-caption uppercase tracking-[0.3em] font-jost font-medium text-sable/80 mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-body-sm font-jost font-light text-sable/40">
              <p>Paris, Île-de-France</p>
              <p>
                <a href="tel:+33600000000" className="hover:text-sable transition-colors">
                  +33 6 00 00 00 00
                </a>
              </p>
              <p>
                <a href="mailto:contact@lyvies-traiteur.fr" className="hover:text-sable transition-colors">
                  contact@lyvies-traiteur.fr
                </a>
              </p>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div variants={staggerItem}>
            <h4 className="text-caption uppercase tracking-[0.3em] font-jost font-medium text-sable/80 mb-6">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-jost font-medium tracking-wider text-sable/40 hover:text-sable transition-all duration-500"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] font-garamond italic text-sable/20">
            © {new Date().getFullYear()} Lyvies Traiteur. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-garamond italic text-sable/20 hover:text-sable/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
