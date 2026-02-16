// ══════════════════════════════════════════════
// LYVIES — Hooks Utilitaires
// ══════════════════════════════════════════════

"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import { useScroll, useTransform, useInView, MotionValue } from "framer-motion";

/* ── Détection viewport pour animations au scroll ── */
export function useInViewAnimation(
  threshold: number = 0.2,
  once: boolean = true
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { amount: threshold, once });
  return [ref, isInView];
}

/* ── Parallax sur un élément ── */
export function useParallax(
  offset: number = 50
): [RefObject<HTMLDivElement>, MotionValue<number>] {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return [ref, y];
}

/* ── Media Query responsive ── */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/* ── Détection scroll pour navbar ── */
export function useScrolled(threshold: number = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}

/* ── Smooth scroll vers un ID ── */
export function useSmoothScroll() {
  return (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}
