import type { Metadata } from "next";
import JournalContent from "./JournalContent";

export const metadata: Metadata = {
  title: "Journal",
  description: "Inspirations culinaires, coulisses et tendances événementielles par Lyvies Traiteur.",
};

export default function JournalPage() {
  return <JournalContent />;
}
