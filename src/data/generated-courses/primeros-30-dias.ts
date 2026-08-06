export type GeneratedQuestion = {
  q: string;
  options: string[];
  correct: number;
  explain: string;
};

export type GeneratedLesson = {
  id: string;
  courseId: string;
  title: string;
  level: 0 | 1 | 2 | 3;
  summary: string;
  content: string;
  slides?: string[];
  audio: boolean;
  sources: { title: string; url: string; license: string }[];
  quiz: GeneratedQuestion[];
  xp: number;
};

export type GeneratedCourse = {
  id: string;
  title: string;
  description: string;
  level: 0 | 1 | 2 | 3;
  category: string;
  language: string;
  estimatedMinutes: number;
  objectives: string[];
  lessons: GeneratedLesson[];
};

export const primeros30Dias: GeneratedCourse = {
  id: "primeros-30-dias",
  title: "Tus primeros 30 días en España",
  description:
    "Guía práctica para tus primeros 30 días en España. Cada lección tiene pasos claros y la lista de documentos que necesitas. Trámites oficiales explicados con palabras sencillas.",
  level: 0,
  category: "Integración",
  language: "es",
  estimatedMinutes: 200,
  objectives: [
    "Empadronarte en tu ayuntamiento",
    "Tramitar el NIE y tus documentos",
    "Sacar la tarjeta sanitaria",
    "Matricular a tus hijos en la escuela",
    "Abrir una cuenta de banco",
    "Conocer tus derechos básicos",
  ],
  lessons: [
    {
      id: "p30-l1",
      courseId: "primeros-30-dias",
      title: "Empadronarse (el primer paso)",
      level: 0,
      summary:
        "El padrón es el registro de tu vivienda. Es gratuito y abre todas las puertas.",
      content:
        "El padrón es el registro de tu vivienda en el ayuntamiento. Es gratuito y es tu primer paso en España. Con el padrón consigues la tarjeta sanitaria. Con el padrón matriculas a tus hijos en la escuela. Pasos para empadronarte:\n1. Busca la oficina del padrón de tu ciudad.\n2. Pide cita por internet o por teléfono.\n3. Lleva tu pasaporte en vigor.\n4. Lleva un contrato de alquiler o una carta del dueño.\n5. Recoge tu certificado de empadronamiento.\nGuarda el certificado: lo usarás muchas veces.",
      audio: true,
      sources: [
        {
          title: "Ayuntamiento de Madrid: Padrón municipal",
          url: "https://www.madrid.es/portales/munimadrid/es/Inicio/Ayuntamiento/Padron/",
          license: "público",
        },
        {
          title: "Ministerio de Inclusión: Migraciones",
          url: "https://www.inclusion.gob.es/web/migraciones/inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué es empadronarse?",
          options: ["Registrar tu vivienda en el ayuntamiento", "Comprar una casa nueva", "Pagar impuestos por adelantado", "Inscribirte en un colegio"],
          correct: 0,
          explain:
            "La lección dice que el padrón es el registro de tu vivienda en el ayuntamiento. Fuente: Ayuntamiento de Madrid, padrón municipal.",
        },
        {
          q: "¿Cuánto cuesta empadronarse?",
          options: ["Es gratuito", "Cuesta 50 euros", "Cuesta 200 euros", "Depende del barrio"],
          correct: 0,
          explain:
            "La lección dice que empadronarse es gratuito. Es un derecho de todas las personas que viven en el municipio.",
        },
        {
          q: "¿Qué documentos llevas al padrón?",
          options: ["Pasaporte y contrato de alquiler", "Billete de bus", "Lista de la compra", "Foto de la familia"],
          correct: 0,
          explain:
            "La lección pide tu pasaporte en vigor y un contrato de alquiler o carta del dueño.",
        },
        {
          q: "¿Para qué sirve el certificado de empadronamiento?",
          options: ["Para la tarjeta sanitaria y la escuela", "Para viajar en avión", "Para comprar comida", "Para ver la tele"],
          correct: 0,
          explain:
            "La lección dice que con el padrón consigues la tarjeta sanitaria y matriculas a tus hijos.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l2",
      courseId: "primeros-30-dias",
      title: "El NIE y tus papeles",
      level: 0,
      summary:
        "El NIE es tu número de identidad. Así lo pides paso a paso.",
      content:
        "El NIE es tu número de identidad en España. Lo necesitas para trabajar, abrir un banco o alquilar. Lo pide la oficina de extranjería. Pasos para pedir el NIE:\n1. Pide cita en la oficina de extranjería.\n2. Rellena el formulario EX-15.\n3. Paga la tasa y guarda el justificante.\n4. Lleva tu pasaporte en vigor.\n5. Entrega los papeles el día de la cita.\n6. Recoge tu tarjeta cuando esté lista.\nEmpieza pronto: el trámite puede tardar varios meses.",
      audio: true,
      sources: [
        {
          title: "Ministerio de Inclusión: Extranjería y NIE",
          url: "https://www.inclusion.gob.es/web/migraciones/extranjeria",
          license: "público",
        },
        {
          title: "Sede electrónica de la Administración General del Estado",
          url: "https://sede.administracionespublicas.gob.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué es el NIE?",
          options: ["El número de identidad de las personas extranjeras", "Un número de teléfono", "Un tipo de visa", "Un código del banco"],
          correct: 0,
          explain:
            "La lección dice que el NIE es tu número de identidad en España. Fuente: Ministerio de Inclusión, extranjería.",
        },
        {
          q: "¿Para qué necesitas el NIE?",
          options: ["Trabajar y abrir un banco", "Caminar por la calle", "Comprar fruta", "Mirar la televisión"],
          correct: 0,
          explain:
            "La lección dice que lo necesitas para trabajar, abrir un banco o alquilar.",
        },
        {
          q: "¿Qué formulario rellenas para pedir el NIE?",
          options: ["El formulario EX-15", "El formulario de la compra", "El formulario de la escuela", "El formulario del bus"],
          correct: 0,
          explain:
            "La lección indica el formulario EX-15. Fuente: sede de la Administración General del Estado.",
        },
        {
          q: "¿Por qué debes empezar el trámite pronto?",
          options: ["Porque puede tardar varios meses", "Porque es barato", "Porque es divertido", "Porque no hace falta cita"],
          correct: 0,
          explain:
            "La lección dice que el trámite puede tardar varios meses.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l3",
      courseId: "primeros-30-dias",
      title: "La tarjeta sanitaria",
      level: 0,
      summary:
        "La tarjeta sanitaria te da acceso a la sanidad pública gratis.",
      content:
        "La tarjeta sanitaria te da acceso a la sanidad pública. La sanidad pública en España es gratis. El primer paso es empadronarte. Pasos para la tarjeta sanitaria:\n1. Empadronate en tu ayuntamiento.\n2. Pide cita en tu centro de salud.\n3. Lleva tu pasaporte y el certificado de empadronamiento.\n4. Lleva tu número de la seguridad social.\n5. Recoge tu tarjeta sanitaria.\nCon la tarjeta puedes ir al médico y a urgencias. Tu tarjeta también sirve para tus hijos.",
      audio: true,
      sources: [
        {
          title: "Seguridad Social: Derechos sanitarios",
          url: "https://www.seg-social.es/wps/portal/wss/internet/Inicio",
          license: "público",
        },
        {
          title: "Ayuntamiento de Madrid: Servicios de salud",
          url: "https://www.madrid.es/portales/munimadrid/es/Inicio/Ayuntamiento/",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué necesitas antes de pedir la tarjeta sanitaria?",
          options: ["Estar empadronado", "Tener un coche", "Comprar una casa", "Pagar una cuota"],
          correct: 0,
          explain:
            "La lección dice que el primer paso es empadronarte.",
        },
        {
          q: "¿Dónde pides la tarjeta sanitaria?",
          options: ["En tu centro de salud", "En el supermercado", "En la estación", "En el colegio"],
          correct: 0,
          explain:
            "La lección dice: pide cita en tu centro de salud.",
        },
        {
          q: "¿Qué llevas al centro de salud?",
          options: ["Pasaporte y empadronamiento", "El ticket de la compra", "Una carta para un amigo", "Un dibujo"],
          correct: 0,
          explain:
            "La lección pide pasaporte, certificado de empadronamiento y tu número de la seguridad social.",
        },
        {
          q: "¿Para qué sirve la tarjeta sanitaria?",
          options: ["Ir al médico y a urgencias", "Viajar gratis", "Comprar con descuento", "Aparcar el coche"],
          correct: 0,
          explain:
            "La lección dice que con la tarjeta puedes ir al médico y a urgencias. Fuente: Seguridad Social.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l4",
      courseId: "primeros-30-dias",
      title: "La escuela de tus hijos",
      level: 0,
      summary:
        "Cómo matricular a tu hijo en la escuela, con la lista de papeles.",
      content:
        "En España la escuela es obligatoria y gratuita. Tu hijo puede empezar en cualquier momento del año. Para matricular a tu hijo:\n1. Busca el colegio más cercano a tu casa.\n2. Pide información en la secretaría.\n3. Lleva el certificado de empadronamiento.\n4. Lleva el pasaporte o el libro de familia.\n5. Lleva la cartilla de vacunas del niño.\n6. Pregunta por el comedor y el autobús.\nSi no hablas bien español, pide ayuda para los papeles. La escuela no puede negar la plaza a tu hijo.",
      audio: true,
      sources: [
        {
          title: "Ayuntamiento de Madrid: Escolarización",
          url: "https://www.madrid.es/portales/munimadrid/es/Inicio/",
          license: "público",
        },
        {
          title: "Ministerio de Inclusión: Familias migrantes",
          url: "https://www.inclusion.gob.es/web/migraciones/inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Cuándo puede empezar tu hijo en la escuela?",
          options: ["En cualquier momento del año", "Solo en septiembre", "Solo en enero", "Nunca"],
          correct: 0,
          explain:
            "La lección dice que tu hijo puede empezar en cualquier momento del año.",
        },
        {
          q: "¿Qué documento demuestra dónde vives?",
          options: ["El certificado de empadronamiento", "El billete de bus", "La lista de la compra", "El horario de cine"],
          correct: 0,
          explain:
            "La lección pide el certificado de empadronamiento para matricular a tu hijo.",
        },
        {
          q: "No hablas bien español. ¿Qué haces en el colegio?",
          options: ["Pido ayuda para los papeles", "Me voy sin matricular", "Grito más fuerte", "Pago una multa"],
          correct: 0,
          explain:
            "La lección dice: si no hablas bien español, pide ayuda para los papeles.",
        },
        {
          q: "¿Es obligatoria la escuela en España?",
          options: ["Sí, es obligatoria y gratuita", "No, es opcional", "Solo para niños con dinero", "Solo por la tarde"],
          correct: 0,
          explain:
            "La lección dice que la escuela es obligatoria y gratuita.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l5",
      courseId: "primeros-30-dias",
      title: "Abrir una cuenta en el banco",
      level: 0,
      summary:
        "Una cuenta de banco te sirve para cobrar y pagar. Así la abres.",
      content:
        "Una cuenta de banco te sirve para cobrar y pagar. Muchos bancos piden el NIE para abrirla. Pasos para abrir una cuenta:\n1. Elige un banco cerca de tu casa.\n2. Pide cita en la oficina.\n3. Lleva tu pasaporte y tu NIE.\n4. Lleva el certificado de empadronamiento.\n5. Pregunta si la cuenta tiene comisiones.\n6. Firma los papeles de la cuenta.\nPregunta cómo funciona la aplicación del banco. Con pocos ingresos, pregunta por la cuenta social. Toda persona tiene derecho a una cuenta básica.",
      audio: true,
      sources: [
        {
          title: "Directiva de cuentas de pago (Unión Europea)",
          url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32014L0092",
          license: "público",
        },
        {
          title: "Ministerio de Inclusión: Inclusión financiera",
          url: "https://www.inclusion.gob.es/web/migraciones/inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué documentos necesitas para abrir una cuenta?",
          options: ["Pasaporte, NIE y empadronamiento", "Solo una foto", "El contrato de trabajo", "Nada"],
          correct: 0,
          explain:
            "La lección pide pasaporte, NIE y certificado de empadronamiento.",
        },
        {
          q: "¿Qué preguntas antes de firmar?",
          options: ["Si la cuenta tiene comisiones", "Si hace calor", "Si hay parking", "Si hay wifi gratis"],
          correct: 0,
          explain:
            "La lección dice: pregunta si la cuenta tiene comisiones.",
        },
        {
          q: "Tienes pocos ingresos. ¿Qué puedes pedir?",
          options: ["Información sobre la cuenta social", "Un préstamo grande", "Dinero gratis", "Una tarjeta roja"],
          correct: 0,
          explain:
            "La lección dice: con pocos ingresos, pregunta por la cuenta social.",
        },
        {
          q: "¿Qué derecho tiene toda persona en la Unión Europea?",
          options: ["A una cuenta de pago básica", "A no pagar nunca", "A no presentar papeles", "A abrir veinte cuentas"],
          correct: 0,
          explain:
            "La ley europea garantiza una cuenta básica. Fuente: Directiva de cuentas de pago, eur-lex.europa.eu.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l6",
      courseId: "primeros-30-dias",
      title: "El móvil y el internet",
      level: 0,
      summary:
        "Cómo elegir compañía, comparar precios y evitar sorpresas.",
      content:
        "El móvil y el internet te conectan con todo. Para tener línea en tu casa:\n1. Compara las ofertas de las compañías.\n2. Pregunta si el servicio llega a tu zona.\n3. Elige el plan según lo que necesitas.\n4. Pregunta cuánto cuesta cada mes.\n5. Pregunta si hay permanencia.\n6. Pide la portabilidad si cambias de compañía.\nGuarda tus facturas cada mes. Pregunta si existen ayudas para internet. Hay ayudas para hogares con pocos ingresos.",
      audio: true,
      sources: [
        {
          title: "Unión Europea: Comunicaciones y roaming",
          url: "https://europa.eu/european-union/topics/telecoms_es",
          license: "público",
        },
        {
          title: "Ministerio de Inclusión: Bono social digital",
          url: "https://www.inclusion.gob.es/web/migraciones/inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué haces antes de elegir compañía?",
          options: ["Comparo las ofertas", "Firmo lo primero", "Pago sin mirar", "Pido prestado"],
          correct: 0,
          explain:
            "La lección dice: compara las ofertas de las compañías.",
        },
        {
          q: "Cambias de compañía y quieres conservar tu número. ¿Qué pides?",
          options: ["La portabilidad", "Un número nuevo", "Una tarjeta", "Un descuento"],
          correct: 0,
          explain:
            "La lección dice: pide la portabilidad si cambias de compañía.",
        },
        {
          q: "¿Qué preguntas antes de firmar un contrato de móvil?",
          options: ["Cuánto cuesta cada mes y si hay permanencia", "El color del móvil", "La hora de apertura", "El nombre del dependiente"],
          correct: 0,
          explain:
            "La lección dice que preguntes cuánto cuesta cada mes y si hay permanencia.",
        },
        {
          q: "¿Qué ayudas pueden existir para internet?",
          options: ["Ayudas para hogares con pocos ingresos", "Ayudas para quien tiene coche", "Ayudas para quien no tiene móvil", "No existen ayudas"],
          correct: 0,
          explain:
            "La lección menciona ayudas para internet en hogares con pocos ingresos.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l7",
      courseId: "primeros-30-dias",
      title: "Buscar trabajo",
      level: 0,
      summary:
        "Cómo apuntarte al paro, preparar tu currículum y usar el SEPE.",
      content:
        "Para buscar trabajo en España, apuntate al paro. El SEPE gestiona el empleo y las ayudas. Pasos para buscar trabajo:\n1. Apuntate en la oficina del SEPE.\n2. Consigue tu número de demandante de empleo.\n3. Prepara un currículum sencillo.\n4. Apuntate en portales de trabajo.\n5. Pregunta en tiendas y restaurantes.\n6. Pide tu informe de vida laboral.\nEl SEPE ofrece cursos gratuitos. La vida laboral muestra tus trabajos y cotizaciones. Guarda tu número de demandante de empleo.",
      audio: true,
      sources: [
        {
          title: "SEPE: Servicio Público de Empleo",
          url: "https://www.sepe.es/HomeSepe/",
          license: "público",
        },
        {
          title: "Seguridad Social: Vida laboral",
          url: "https://www.seg-social.es/wps/portal/wss/internet/Inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Dónde te apuntas para buscar empleo?",
          options: ["En el SEPE", "En el mercado", "En el colegio", "En la farmacia"],
          correct: 0,
          explain:
            "La lección dice: apuntate en la oficina del SEPE.",
        },
        {
          q: "¿Qué te da el SEPE al apuntarte?",
          options: ["Un número de demandante de empleo", "Una casa", "Un coche", "Una beca de estudios"],
          correct: 0,
          explain:
            "La lección dice: consigue tu número de demandante de empleo.",
        },
        {
          q: "¿Qué es la vida laboral?",
          options: ["Un informe de tus trabajos y cotizaciones", "Un contrato de alquiler", "Una lista de la compra", "Un plan de viaje"],
          correct: 0,
          explain:
            "La lección dice que la vida laboral muestra tus trabajos y cotizaciones. Fuente: Seguridad Social.",
        },
        {
          q: "¿Qué más ofrece el SEPE?",
          options: ["Cursos gratuitos", "Viviendas gratis", "Comida gratis", "Viajes gratis"],
          correct: 0,
          explain:
            "La lección dice: el SEPE ofrece cursos gratuitos.",
        },
      ],
      xp: 25,
    },
    {
      id: "p30-l8",
      courseId: "primeros-30-dias",
      title: "Conocer tus derechos básicos",
      level: 0,
      summary:
        "Los derechos que tienes por vivir en España y dónde pedir ayuda.",
      content:
        "Toda persona que vive en España tiene derechos. Tienes derecho a la sanidad de urgencia. Tus hijos tienen derecho a la escuela gratuita. Tienes derecho a no recibir trato desigual. Si trabajas, tienes derecho a un contrato. Tienes derecho a un salario mínimo. Tienes derecho a información en un idioma que entiendas. Si no respetan tus derechos, pide ayuda a una asociación.",
      audio: true,
      sources: [
        {
          title: "Directiva de igualdad de trato (Unión Europea)",
          url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32000L0078",
          license: "público",
        },
        {
          title: "Ministerio de Inclusión: Derechos de migrantes",
          url: "https://www.inclusion.gob.es/web/migraciones/inicio",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "¿Qué derechos tiene toda persona que vive en España?",
          options: ["Sanidad, escuela y trato igual", "Viajar gratis siempre", "No pagar impuestos", "Vivir sin documentos"],
          correct: 0,
          explain:
            "La lección dice que todos tienen derecho a sanidad, escuela y trato igual. Fuente: normativa europea, eur-lex.europa.eu.",
        },
        {
          q: "Trabajas sin contrato. ¿Qué te corresponde?",
          options: ["Un contrato de trabajo", "Un premio", "Trabajar más horas", "No cobrar"],
          correct: 0,
          explain:
            "La lección dice: si trabajas, tienes derecho a un contrato.",
        },
        {
          q: "En el trabajo te tratan mal por tu origen. ¿Qué es eso?",
          options: ["Discriminación, y no está permitida", "Normal", "Un error tuyo", "Algo legal"],
          correct: 0,
          explain:
            "La lección dice que tienes derecho a no recibir trato desigual.",
        },
        {
          q: "No entiendes un trámite. ¿Qué puedes pedir?",
          options: ["Información en un idioma que entiendas", "Que te dejen solo", "Pagar más", "Nada"],
          correct: 0,
          explain:
            "La lección dice que tienes derecho a información en un idioma que entiendas.",
        },
      ],
      xp: 25,
    },
  ],
};

export default primeros30Dias;
