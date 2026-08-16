import type { Metadata } from "next";
import { AcademyPageContent } from "@/components/academy/academy-page-content";

export const metadata: Metadata = {
  title: "Academia Abierta | Cursos gratuitos de CV, IA y Office",
  description:
    "Formación profesional gratuita y abierta para crear un CV, usar inteligencia artificial con criterio y dominar Office.",
  alternates: {
    canonical: "/es/academy",
  },
  openGraph: {
    title: "Academia Abierta",
    description:
      "Cursos gratuitos de CV, inteligencia artificial y Office para aprender a tu ritmo.",
    type: "website",
    url: "/es/academy",
  },
};

export default function AcademyPage() {
  return <AcademyPageContent locale="es" />;
}
