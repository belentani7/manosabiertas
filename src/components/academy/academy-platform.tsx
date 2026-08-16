import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  Check,
  FileText,
  GraduationCap,
  Laptop2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AI_COURSES } from "@/data/ai-courses";
import { CV_TEMPLATES, type CVTemplate } from "@/data/cv-templates";
import { OFFICE_MODULES } from "@/data/office-course";
import type { LanguageCode } from "@/i18n/languages";
import { getAcademyDestination, getAcademyPath } from "@/lib/academy-navigation";
import styles from "./academy-platform.module.css";

type TrackItem = {
  title: string;
  meta: string;
  description: string;
};

type Track = {
  id: "cv" | "ia" | "office";
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
  destination: "cv" | "ia" | "office";
  action: string;
  icon: LucideIcon;
  items: TrackItem[];
};

const layoutLabels: Record<CVTemplate["layout"], string> = {
  classic: "Clásico",
  modern: "Moderno",
  minimal: "Minimal",
  creative: "Creativo",
  professional: "Ejecutivo",
};

const levelLabels = {
  beginner: "Inicial",
  intermediate: "Intermedio",
  advanced: "Avanzado",
} as const;

const aiLessonCount = AI_COURSES.reduce(
  (total, course) => total + course.lessons.length,
  0,
);
const officeLessonCount = OFFICE_MODULES.reduce(
  (total, module) => total + module.lessons.length,
  0,
);

const tracks: Track[] = [
  {
    id: "cv",
    eyebrow: "Empleo y posicionamiento",
    title: "CV profesional",
    description:
      "Construye un currículum claro, adaptable y preparado para procesos de selección actuales.",
    metric: `${CV_TEMPLATES.length} plantillas disponibles`,
    destination: "cv",
    action: "Crear mi CV",
    icon: FileText,
    items: CV_TEMPLATES.slice(0, 4).map((template) => ({
      title: template.name,
      meta: layoutLabels[template.layout],
      description: template.description,
    })),
  },
  {
    id: "ia",
    eyebrow: "Criterio digital",
    title: "Inteligencia artificial",
    description:
      "Aprende a elegir asistentes, escribir mejores instrucciones y verificar resultados en tareas reales.",
    metric: `${aiLessonCount} lecciones prácticas`,
    destination: "ia",
    action: "Explorar IA",
    icon: Bot,
    items: AI_COURSES.slice(0, 4).map((course) => ({
      title: course.model,
      meta: `${course.lessons.length} lecciones · ${levelLabels[course.level]}`,
      description: course.tagline,
    })),
  },
  {
    id: "office",
    eyebrow: "Productividad diaria",
    title: "Office y documentos",
    description:
      "Domina documentos, hojas de cálculo, presentaciones y correo con ejercicios aplicados.",
    metric: `${officeLessonCount} lecciones paso a paso`,
    destination: "office",
    action: "Abrir Office",
    icon: Laptop2,
    items: OFFICE_MODULES.slice(0, 4).map((module) => ({
      title: module.title,
      meta: `${module.lessons.length} lecciones`,
      description: module.description,
    })),
  },
];

const roadmap = [
  {
    step: "01",
    title: "Presenta tu perfil",
    body: "Define logros, selecciona una plantilla y genera una versión de CV lista para adaptar.",
  },
  {
    step: "02",
    title: "Trabaja con soltura",
    body: "Practica Word, Excel, presentaciones y correo con tareas cercanas al trabajo diario.",
  },
  {
    step: "03",
    title: "Integra la IA",
    body: "Usa asistentes para investigar, redactar y revisar sin perder criterio ni privacidad.",
  },
];

export function AcademyPlatform({ locale = "es" }: { locale?: LanguageCode }) {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#contenido">
        Saltar al contenido
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link
            className={styles.brand}
            href={getAcademyPath(locale)}
            aria-label="Academia Abierta, inicio"
          >
            <span className={styles.brandMark} aria-hidden="true">
              <GraduationCap size={22} strokeWidth={1.8} />
            </span>
            <span>
              <strong>Academia Abierta</strong>
              <small>por Manos Abiertas</small>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Areas de la academia">
            <a href="#cv">CV</a>
            <a href="#ia">IA</a>
            <a href="#office">Office</a>
            <a href="#ruta">Ruta sugerida</a>
          </nav>

          <Button asChild size="sm" className={styles.headerAction}>
            <a href="#itinerarios">
              Ver cursos
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>

      <main id="contenido">
        <section className={styles.hero} aria-labelledby="academy-title">
          <div className={styles.shell}>
            <p className={styles.eyebrow}>
              <Sparkles size={17} aria-hidden="true" />
              Cursos online · acceso abierto · contenido en español
            </p>
            <h1 id="academy-title">Academia Abierta</h1>
            <p className={styles.heroLead}>
              Formación profesional gratuita en CV, inteligencia artificial y
              Office. Contenido práctico para estudiantes, profesionales,
              equipos y cualquier persona que quiera avanzar.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className={styles.primaryAction}>
                <a href="#itinerarios">
                  Explorar itinerarios
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={styles.secondaryAction}
              >
                <Link href={getAcademyDestination(locale, "cv")}>
                  <FileText aria-hidden="true" />
                  Crear un CV
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.proofBand} aria-label="Resumen de la oferta formativa">
          <div className={`${styles.shell} ${styles.statsGrid}`}>
            <div>
              <strong>0 EUR</strong>
              <span>Matrícula y acceso</span>
            </div>
            <div>
              <strong>{AI_COURSES.length}</strong>
              <span>Asistentes de IA</span>
            </div>
            <div>
              <strong>{OFFICE_MODULES.length}</strong>
              <span>Módulos de productividad</span>
            </div>
            <div>
              <strong>{CV_TEMPLATES.length}</strong>
              <span>Plantillas de CV</span>
            </div>
          </div>
        </section>

        <section
          className={styles.catalog}
          id="itinerarios"
          aria-labelledby="catalog-title"
        >
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p>Formación conectada</p>
              <h2 id="catalog-title">Tres itinerarios, una sola base</h2>
              <span>
                Empieza por el área que necesitas hoy y continúa con las demás
                cuando quieras. Todo el contenido es gratuito.
              </span>
            </div>

            <div className={styles.trackGrid}>
              {tracks.map((track) => {
                const TrackIcon = track.icon;

                return (
                  <article
                    className={styles.track}
                    data-tone={track.id}
                    id={track.id}
                    key={track.id}
                  >
                    <div className={styles.trackTopline}>
                      <span className={styles.trackIcon} aria-hidden="true">
                        <TrackIcon size={24} strokeWidth={1.8} />
                      </span>
                      <span className={styles.trackEyebrow}>{track.eyebrow}</span>
                    </div>
                    <h3>{track.title}</h3>
                    <p className={styles.trackDescription}>{track.description}</p>
                    <p className={styles.trackMetric}>
                      <BookOpenCheck size={17} aria-hidden="true" />
                      {track.metric}
                    </p>

                    <ul className={styles.moduleList}>
                      {track.items.map((item) => (
                        <li key={`${track.id}-${item.title}`}>
                          <span className={styles.check} aria-hidden="true">
                            <Check size={15} strokeWidth={2.2} />
                          </span>
                          <span>
                            <strong>{item.title}</strong>
                            <small>{item.meta}</small>
                            <p>{item.description}</p>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="outline" className={styles.trackAction}>
                      <Link href={getAcademyDestination(locale, track.destination)}>
                        {track.action}
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.roadmapSection} id="ruta" aria-labelledby="roadmap-title">
          <div className={styles.shell}>
            <div className={styles.roadmapIntro}>
              <p>Ruta sugerida</p>
              <h2 id="roadmap-title">Un recorrido para empezar con foco</h2>
              <span>
                Combina las tres áreas en un orden orientado a resultados
                profesionales concretos.
              </span>
            </div>

            <ol className={styles.roadmap}>
              {roadmap.map((item) => (
                <li key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={styles.shell}>
            <div className={styles.closingContent}>
              <ShieldCheck size={34} aria-hidden="true" />
              <div>
                <h2 id="closing-title">Aprender sin barreras de pago</h2>
                <p>
                  Los cursos, guías y herramientas de esta academia son
                  gratuitos. Elige una ruta y avanza a tu ritmo.
                </p>
              </div>
              <Button asChild size="lg" className={styles.closingAction}>
                <a href="#itinerarios">
                  Elegir itinerario
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <span>Academia Abierta</span>
          <p>Formación gratuita en CV, IA y Office.</p>
          <Link href={getAcademyDestination(locale, "home")}>Volver a Manos Abiertas</Link>
        </div>
      </footer>
    </div>
  );
}
