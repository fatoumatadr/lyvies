import type { Metadata } from "next";
import ExperiencesContent from "./ExperiencesContent";

export const metadata: Metadata = {
  title: "Expériences Culinaires",
  description: "Mariages, événements corporate, soirées privées et expériences signature. Découvrez nos prestations sur mesure.",
};

export default function ExperiencesPage() {
  return <ExperiencesContent />;
}
