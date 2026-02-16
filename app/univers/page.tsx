// ══════════════════════════════════════════════
// LYVIES — Page Univers
// Scroll storytelling avec parallax
// ══════════════════════════════════════════════

import type { Metadata } from "next";
import UniversContent from "./UniversContent";

export const metadata: Metadata = {
  title: "Univers Lyvies",
  description: "Découvrez l'histoire, l'inspiration culturelle et la philosophie culinaire de Lyvies Traiteur.",
};

export default function UniversPage() {
  return <UniversContent />;
}
