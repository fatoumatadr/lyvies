// ══════════════════════════════════════════════
// LYVIES — Section Wrapper
// Container réutilisable pour chaque section
// ══════════════════════════════════════════════

"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "dark" | "warm" | "surface" | "light";
  fullWidth?: boolean;
  noPadding?: boolean;
}

const bgClasses: Record<string, string> = {
  dark: "bg-sable",
  warm: "bg-sable",
  surface: "bg-sable",
  light: "bg-noir",
};

export default function Section({
  children,
  id,
  className = "",
  bg = "dark",
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${bgClasses[bg]}
        ${noPadding ? "" : "py-section"}
        ${className}
      `}
    >
      <div className={fullWidth ? "" : "container-lyvies"}>
        {children}
      </div>
    </section>
  );
}
