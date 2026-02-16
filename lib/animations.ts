// ══════════════════════════════════════════════
// LYVIES — Bibliothèque Animations Framer Motion
// ══════════════════════════════════════════════

import { Variants } from "framer-motion";

/* ── Ease signatures ─────────────────────────── */
export const easeLuxe = [0.22, 1, 0.36, 1] as const;
export const easeSmooth = [0.4, 0, 0.2, 1] as const;

/* ── Fade Up (sections, titres) ──────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easeLuxe,
    },
  }),
};

/* ── Fade In simple ──────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay, ease: easeSmooth },
  }),
};

/* ── Scale In (images, cards) ────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: easeLuxe },
  }),
};

/* ── Slide depuis la droite ──────────────────── */
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: easeLuxe },
  }),
};

/* ── Slide depuis la gauche ──────────────────── */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: easeLuxe },
  }),
};

/* ── Stagger container (enfants séquentiels) ─── */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/* ── Item pour stagger ───────────────────────── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeLuxe },
  },
};

/* ── Reveal horizontal (séparateurs) ─────────── */
export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: easeLuxe },
  },
};

/* ── Parallax scroll transform ───────────────── */
export const parallaxSlow = {
  y: ["-5%", "5%"],
  transition: { duration: 0 }, // contrôlé par useScroll
};

/* ── Hover card premium ──────────────────────── */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeLuxe },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { duration: 0.5, ease: easeLuxe },
  },
};

/* ── Hover image zoom ────────────────────────── */
export const imageZoom = {
  rest: { scale: 1, transition: { duration: 0.7, ease: easeSmooth } },
  hover: { scale: 1.08, transition: { duration: 0.7, ease: easeSmooth } },
};

/* ── Lettre par lettre (titres héro) ─────────── */
export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.04,
      ease: easeLuxe,
    },
  }),
};

/* ── Mask reveal (images cinématiques) ───────── */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.2, ease: easeLuxe },
  },
};

/* ── Page transition ─────────────────────────── */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeLuxe },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: easeSmooth },
  },
};
