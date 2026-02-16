import type { Metadata } from "next";
import GalleryPageContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Explorez nos créations culinaires et événements d'exception en images.",
};

export default function GaleriePage() {
  return <GalleryPageContent />;
}
