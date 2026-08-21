/**
 * Módulo Especializado: SINTESIS SENIOR TECH — Ingeniería y Arquitectura (40-60 años)
 * Manos Abiertas · Hospitalet
 */

export interface SeniorTechModule {
  code: string;
  title: string;
  targetAudience: string;
  description: string;
  units: {
    unitNumber: number;
    title: string;
    objectives: string[];
    contentSummary: string;
    aiPromptTip?: string;
  }[];
}

export const seniorTechCourse: SeniorTechModule = {
  code: "SENIOR-TECH-ENG-01",
  title: "Transición Digital y Asistentes de IA para Ingenieros y Arquitectos Senior",
  targetAudience: "Profesionales con sólida experiencia técnica (40-60 años) en busca de actualización en software moderno y herramientas de IA gratuitas.",
  description: "Itinerario práctico desde nivel cero hasta la integración fluida de modelado digital, IA generativa para presupuestos, redacción de memorias técnicas y modernización del CV profesional.",
  units: [
    {
      unitNumber: 1,
      title: "Nivel 0: Fundamentos de Entornos Digitales Modernos y Nube",
      objectives: [
        "Perder el miedo a las interfaces modernas y sistemas en la nube.",
        "Organización de archivos de obra y proyectos con copias de seguridad automáticas.",
        "Uso seguro de credenciales y firmas digitales."
      ],
      contentSummary: "Introducción amigable al ecosistema digital actual. Diferencias entre almacenamiento local y en la nube. Configuración básica de entornos seguros de trabajo sin fricción.",
      aiPromptTip: "Actúa como tutor técnico paciente. Explícame paso a paso cómo organizar carpetas compartidas para un proyecto de obra en la nube sin tecnicismos complejos."
    },
    {
      unitNumber: 2,
      title: "BIM, CAD Colaborativo y Visualización Ligera (Nivel Usuario)",
      objectives: [
        "Comprender el flujo BIM y su impacto en mediciones y presupuestos.",
        "Uso de visores web gratuitos para planos IFC y DWG sin necesidad de licencias costosas.",
        "Colaboración en tiempo real con equipos jóvenes y subcontratas."
      ],
      contentSummary: "Cómo revisar, acotar y comentar planos digitales en visores multiplataforma gratuitos. Exportación de datos para presupuestos y control de cambios en el portafolio técnico.",
      aiPromptTip: "Genera una lista de comprobación (checklist) para revisar un archivo IFC antes de enviarlo a la dirección facultativa."
    },
    {
      unitNumber: 3,
      title: "Inteligencia Artificial Gratuita para Redacción de Memorias y Pliegos",
      objectives: [
        "Uso ético y eficiente de IAs gratuitas (ChatGPT, Claude, Gemini) en el sector técnico.",
        "Redacción estructurada de pliegos de condiciones, informes periciales y actas de reunión.",
        "Corrección de estilo y formalización técnica en castellano."
      ],
      contentSummary: "Estrategias de 'prompt engineering' adaptadas a la ingeniería y arquitectura. Cómo evitar alucinaciones de la IA contrastando normativas y datos reales de proyecto.",
      aiPromptTip: "Redacta un borrador formal de acta de recepción de obra para un proyecto de reforma en Hospitalet, incluyendo plazos y salvedades técnicas."
    },
    {
      unitNumber: 4,
      title: "Actualización de CV Senior y Posicionamiento Profesional",
      objectives: [
        "Transformar una trayectoria clásica de 20-30 años en un perfil híbrido muy cotizado.",
        "Destacar la experiencia de gestión de obra frente a la mera ejecución digital.",
        "Optimización del CV para sistemas de filtrado automático (ATS) y LinkedIn."
      ],
      contentSummary: "Estructura del currículo moderno para perfiles senior. Cómo poner en valor la capacidad de resolución de crisis, liderazgo de equipos y solvencia técnica combinada con nuevas herramientas.",
      aiPromptTip: "Reescribe mi experiencia de 20 años como arquitecto director de ejecución resaltando liderazgo, gestión de presupuestos y adaptabilidad tecnológica."
    }
  ]
};
