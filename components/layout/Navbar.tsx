// ══════════════════════════════════════════════
// LYVIES — Navbar
// Transparente → sticky au scroll
// Menu burger mobile avec overlay plein écran
// ══════════════════════════════════════════════

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/lib/hooks";
import { navigationLinks } from "@/lib/data";
import { staggerContainer, staggerItem, fadeIn } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const burgerColor = menuOpen ? "#DCDAD0" : scrolled ? "#B0987C" : "#DCDAD0";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled
            ? "bg-sable/95 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-lyvies flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-[110]">
            <Image
              src="/images/logo-monogram.svg"
              alt="Lyvies Traiteur"
              width={40}
              height={50}
              className="h-10 w-auto"
              style={{ filter: menuOpen ? "brightness(10)" : "none" }}
            />
          </Link>

          {/* Liens desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] tracking-[0.3em] uppercase font-jost font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-noir-900/50 hover:text-noir-900"
                    : "text-sable/60 hover:text-sable"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`text-[10px] tracking-[0.25em] uppercase font-jost font-medium px-8 py-3 border transition-all duration-500 ${
                scrolled
                  ? "border-oak text-noir-900 hover:bg-oak"
                  : "border-sable/40 text-sable hover:bg-sable/10"
              }`}
            >
              Devis
            </Link>
          </div>

          {/* Burger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-7 h-px"
              style={{ backgroundColor: burgerColor }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-5 h-px"
              style={{ backgroundColor: burgerColor }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-7 h-px"
              style={{ backgroundColor: burgerColor }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Menu Mobile Plein Écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[105] bg-noir-900/98 backdrop-blur-2xl flex items-center justify-center"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navigationLinks.map((link) => (
                <motion.div key={link.href} variants={staggerItem}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-jost font-medium text-3xl md:text-4xl uppercase tracking-[0.05em] text-sable hover:text-oak transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={staggerItem} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-12 py-4 border border-oak text-oak text-[11px] uppercase tracking-[0.3em] font-jost font-medium hover:bg-oak hover:text-noir-900 transition-all duration-500"
                >
                  Demander un devis
                </Link>
              </motion.div>

              <motion.div
                variants={fadeIn}
                custom={0.8}
                className="mt-12 text-center"
              >
                <p className="text-caption tracking-[0.2em] text-sable/30 font-jost">
                  Paris · Île-de-France
                </p>
                <p className="text-caption tracking-[0.15em] text-sable/20 font-jost mt-2">
                  contact@lyvies-traiteur.fr
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Sticky Mobile */}
      <AnimatePresence>
        {scrolled && !menuOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed bottom-0 left-0 w-full z-[90] bg-sable/95 backdrop-blur-xl p-4"
          >
            <Link
              href="/contact"
              className="block w-full text-center py-3.5 bg-oak text-noir-900 text-[11px] uppercase tracking-[0.25em] font-jost font-medium"
            >
              Demander un devis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
