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

export const emprende: GeneratedCourse = {
  id: "emprende",
  title: "Emprende en España",
  description:
    "Aprende paso a paso a montar tu propio negocio en España: desde saber si es buena idea hasta darse de alta como autónomo, los impuestos, las facturas y las ayudas disponibles.",
  level: 1,
  category: "Empleo y emprendimiento",
  language: "es",
  estimatedMinutes: 105,
  objectives: [
    "Decidir con cabeza si emprender es para ti",
    "Conocer los trámites para darse de alta como autónomo",
    "Entender los impuestos básicos y las facturas",
    "Saber dónde buscar ayudas y evitar errores comunes",
  ],
  lessons: [
    {
      id: "emp-01",
      courseId: "emprende",
      title: "¿Es buena idea para ti? (test de autoevaluación)",
      level: 1,
      summary:
        "Antes de emprender, piensa en tus fuerzas, tu dinero y tu tiempo.",
      content:
        "Emprender es trabajar para ti mismo. Tiene cosas buenas y cosas difíciles. Antes de empezar, pregúntate: ¿me gusta vender y hablar con la gente? ¿Puedo vivir sin sueldo fijo unos meses? ¿Tengo tiempo para aprender los trámites? ¿Tengo un pequeño dinero para empezar? Si dices que sí a casi todo, puedes intentarlo. Si no estás seguro, habla con otros autónomos. También puedes empezar a media jornada. Una decisión pensada es una mejor decisión.",
      audio: true,
      sources: [
        {
          title: "Agencia Tributaria: información para autónomos",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "SEPE: empleo y formación",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Eures: portal europeo de empleo",
          url: "https://eures.europa.eu",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Antes de emprender, lo más importante es...",
          options: [
            "Saber qué necesitas y qué riesgos asumes",
            "Pedir dinero a todos tus amigos",
            "Renunciar al trabajo en un día",
            "Esconder la idea a todo el mundo",
          ],
          correct: 0,
          explain:
            "Piensa con calma en gastos, ingresos y tiempo. Una decisión pensada tiene más éxito.",
        },
        {
          q: "No tienes ahorros y nadie te va a pagar por dos meses. ¿Qué es lo prudente?",
          options: [
            "Empezar igual y preocuparse luego",
            "Esperar a tener un pequeño ahorro o empezar a media jornada",
            "Pedir un préstamo muy alto",
            "Vender cosas de la familia",
          ],
          correct: 1,
          explain:
            "Un pequeño ahorro y una entrada gradual reducen el riesgo. No empieces sin red de seguridad.",
        },
        {
          q: "Un amigo autónomo te cuenta cómo empezó. Eso te sirve para...",
          options: [
            "Nada, él no sabe de mi negocio",
            "Aprender de su experiencia y evitar errores",
            "Copiar su negocio exacto",
            "Discutir con él",
          ],
          correct: 1,
          explain:
            "Hablar con quien ya pasó el camino es de gran ayuda. Aprovecha su experiencia.",
        },
        {
          q: "Emprender en un negocio que no te gusta, aunque dé dinero, suele ser...",
          options: [
            "La mejor opción siempre",
            "Difícil de mantener con el tiempo",
            "Lo que recomiendan todos",
            "Imposible",
          ],
          correct: 1,
          explain:
            "El negocio debe gustarte, porque le dedicarás muchas horas. La motivación ayuda a seguir.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-02",
      courseId: "emprende",
      title: "Tu idea y tu plan simple",
      level: 1,
      summary:
        "Convierte tu idea en un plan sencillo con precios, gastos y clientes.",
      content:
        "Tu idea debe resolver un problema. Pregunta a posibles clientes si lo pagarían. Un plan simple tiene pocas partes: qué vendes, a quién, a qué precio y cómo lo das a conocer. Escribe los gastos del primer mes. Suma los ingresos que esperas. Si los gastos son más que los ingresos, ajusta. Prueba tu idea con un cliente antes de gastar dinero. Empieza pequeño y crece con los resultados.",
      audio: true,
      sources: [
        {
          title: "SEPE: orientación para emprendedores",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Agencia Tributaria: información para autónomos",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "Fundae: formación para trabajar",
          url: "https://www.fundae.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Antes de montar tu negocio, lo primero es...",
          options: [
            "Gastar en publicidad cara",
            "Comprobar que tu idea resuelve un problema real y que alguien la pagaría",
            "Alquilar un local grande",
            "Comprar material para cinco años",
          ],
          correct: 1,
          explain:
            "La idea debe tener clientes. Pregunta antes de gastar dinero.",
        },
        {
          q: "Un plan simple debe tener...",
          options: [
            "Qué vendes, a quién, a qué precio y cómo darlo a conocer",
            "Solo el nombre del negocio",
            "Solo un logo",
            "Palabras difíciles",
          ],
          correct: 0,
          explain:
            "Con esas cuatro partes ya tienes un plan útil para empezar.",
        },
        {
          q: "Los gastos del primer mes son más altos que los ingresos previstos. ¿Qué haces?",
          options: [
            "No pasa nada, ignoro los números",
            "Ajusto: reduzco gastos o subo el precio",
            "Pido otro préstamo",
            "Cierro sin probar",
          ],
          correct: 1,
          explain:
            "Compara gastos e ingresos y ajusta tu plan antes de empezar.",
        },
        {
          q: "La mejor forma de probar tu idea es...",
          options: [
            "Vender a un primer cliente pequeño",
            "Esperar diez años",
            "No vender nunca",
            "Hacer anuncios de televisión",
          ],
          correct: 0,
          explain:
            "Un primer cliente te dice si la idea funciona de verdad. Prueba pequeño y mejora.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-03",
      courseId: "emprende",
      title: "Darse de alta como autónomo",
      level: 1,
      summary:
        "Los pasos para darte de alta en la Seguridad Social y en Hacienda.",
      content:
        "Para trabajar por tu cuenta en España, hay que darse de alta como autónomo. Se hace en la Seguridad Social. Puedes darte de alta por internet. También hay oficinas con cita previa. Al darte de alta, pagas una cuota cada mes. En los primeros años hay una cuota reducida. Si tienes local, pide la licencia de apertura. También tienes que darte de alta en Hacienda con tu actividad. Empieza con la cuota reducida para probar. Pregunta en una oficina si tienes dudas.",
      audio: true,
      sources: [
        {
          title: "Seguridad Social: altas y trámites",
          url: "https://www.seg-social.es",
          license: "público",
        },
        {
          title: "Agencia Tributaria: alta de actividad",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "SEPE: empleo y emprendimiento",
          url: "https://www.sepe.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para trabajar por tu cuenta en España, necesitas...",
          options: [
            "Nada, solo cobrar",
            "Darte de alta como autónomo en la Seguridad Social",
            "Comprar un coche",
            "Esperar a que te llamen",
          ],
          correct: 1,
          explain:
            "El alta de autónomo es obligatorio para trabajar por tu cuenta en España.",
        },
        {
          q: "Los primeros años, la cuota de autónomo suele ser...",
          options: [
            "La más alta de todas",
            "Reducida, para ayudar a empezar",
            "Igual siempre",
            "No existe cuota",
          ],
          correct: 1,
          explain:
            "Hay una cuota reducida de arranque. Pregunta en la Seguridad Social por ella.",
        },
        {
          q: "Para darte de alta, puedes...",
          options: [
            "Hacerlo por internet o pedir cita en una oficina",
            "Solo en papel y por correo",
            "Pedirle a un cliente que lo haga",
            "No hace falta hacerlo",
          ],
          correct: 0,
          explain:
            "Internet y las oficinas con cita previa son las dos vías válidas.",
        },
        {
          q: "Además de la Seguridad Social, también debes darte de alta en...",
          options: [
            "Ningún sitio más",
            "Hacienda, con tu actividad",
            "La piscina municipal",
            "Tu antigua empresa",
          ],
          correct: 1,
          explain:
            "Hacienda necesita conocer tu actividad. Son dos altas: Seguridad Social y Hacienda.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-04",
      courseId: "emprende",
      title: "Los impuestos básicos (IRPF e IVA)",
      level: 1,
      summary:
        "Qué son el IRPF y el IVA y cuándo se presentan.",
      content:
        "Como autónomo tienes que pagar impuestos. Los dos básicos son IRPF e IVA. El IRPF es el impuesto sobre lo que ganas. Hacienda se queda una parte de tu beneficio. El IVA es un impuesto que añades a cada factura. Si vendes por 100 euros, sumas el IVA. Esa parte la guardas y la pagas a Hacienda cada tres meses. Tienes que presentar los impuestos cada trimestre. Lleva un control de tus gastos y facturas. Con buena organización, pagar impuestos es fácil. Si dudas, busca un gestor o la ayuda de Hacienda.",
      audio: true,
      sources: [
        {
          title: "Agencia Tributaria: IRPF e IVA",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "SEPE: empleo y formación",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Eures: portal europeo de empleo",
          url: "https://eures.europa.eu",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "El IVA es un impuesto que...",
          options: [
            "Te lo quita el banco cada mes",
            "Añades a tus facturas y pagas a Hacienda",
            "Solo pagan los empleados",
            "No existe para autónomos",
          ],
          correct: 1,
          explain:
            "El IVA va en cada factura y se entrega a Hacienda cada trimestre.",
        },
        {
          q: "El IRPF es el impuesto...",
          options: [
            "Sobre lo que ganas como autónomo",
            "Sobre la gasolina",
            "Que pagan solo los niños",
            "Sobre los regalos",
          ],
          correct: 0,
          explain:
            "El IRPF es el impuesto sobre los ingresos del autónomo.",
        },
        {
          q: "¿Cada cuánto se presentan los impuestos básicos del autónomo?",
          options: [
            "Cada diez años",
            "Cada tres meses (trimestre)",
            "Nunca",
            "Todos los días",
          ],
          correct: 1,
          explain:
            "El autónomo presenta sus impuestos cada trimestre. Guarda las fechas.",
        },
        {
          q: "Para pagar impuestos bien, debes...",
          options: [
            "Guardar los recibos de gastos y las facturas",
            "Tirar los recibos",
            "Pagar solo en efectivo",
            "No guardar nada",
          ],
          correct: 0,
          explain:
            "Con recibos y facturas guardados, declarar es fácil y sin errores.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-05",
      courseId: "emprende",
      title: "Cómo cobrar a tus clientes (facturas)",
      level: 1,
      summary:
        "Qué debe llevar una factura y cómo cobrar con claridad.",
      content:
        "Cuando vendes algo, entregas una factura. La factura dice quién eres, quién compra, qué vendes, la fecha y el precio. Debe llevar tu NIF y los datos del cliente. Se hace por cada venta o por cada mes. Guarda una copia de todas tus facturas. Cobra de forma clara: indica cuándo debe pagarse. Si un cliente no paga, avísale por escrito. Una factura simple se puede hacer con una plantilla. También hay programas que la hacen por ti.",
      audio: true,
      sources: [
        {
          title: "Agencia Tributaria: facturación",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "SEPE: empleo y emprendimiento",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Fundae: formación para trabajar",
          url: "https://www.fundae.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Una factura debe incluir...",
          options: [
            "Quién eres, quién compra, qué vendes, la fecha y el precio",
            "Solo el precio",
            "Solo tu nombre",
            "El color de tu coche",
          ],
          correct: 0,
          explain:
            "La factura es el documento de la venta y debe estar completa.",
        },
        {
          q: "Después de emitir una factura, debes...",
          options: [
            "Guardar una copia",
            "Quemarla",
            "Borrarla del móvil",
            "Olvidarla",
          ],
          correct: 0,
          explain:
            "Guarda las copias: las necesitas para los impuestos y para cobrar.",
        },
        {
          q: "Un cliente te paga tarde. ¿Qué haces?",
          options: [
            "Le avisas por escrito y recordáis la fecha de pago",
            "Le gritas por teléfono",
            "No haces nada",
            "Le regalas más trabajo",
          ],
          correct: 0,
          explain:
            "Avisar por escrito es el primer paso correcto para cobrar.",
        },
        {
          q: "Para hacer facturas sencillas, puedes...",
          options: [
            "Usar una plantilla o un programa",
            "Inventar los números",
            "Escribirlas en un papel sin datos",
            "Pedirle al cliente que las haga",
          ],
          correct: 0,
          explain:
            "Las plantillas y los programas hacen facturas correctas sin complicarse.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-06",
      courseId: "emprende",
      title: "Ayudas y subvenciones",
      level: 1,
      summary:
        "Dónde buscar ayudas oficiales y cómo reconocer los fraudes.",
      content:
        "Hay ayudas para autónomos y nuevos negocios. Algunas sirven para pagar la cuota. Otras dan dinero para formación o para comprar material. Las ayudas cambian según la comunidad y el año. Busca en las páginas oficiales de tu comunidad. En la Agencia Tributaria encuentras información sobre impuestos. En el SEPE hay ayudas para el empleo. En Fundae hay cursos gratis para trabajadores. En Eures encuentras información de trabajo en Europa. Pide cita o pregunta en oficinas públicas. Las ayudas no se regalan a cualquiera: hay que cumplir requisitos. Lee bien las condiciones antes de pedir.",
      audio: true,
      sources: [
        {
          title: "SEPE: ayudas al empleo",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Fundae: formación bonificada y gratuita",
          url: "https://www.fundae.es",
          license: "público",
        },
        {
          title: "Eures: portal europeo de empleo",
          url: "https://eures.europa.eu",
          license: "público",
        },
        {
          title: "Agencia Tributaria: información para autónomos",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Para encontrar ayudas para tu negocio, busca en...",
          options: [
            "Las páginas oficiales de tu comunidad y organismos públicos",
            "Mensajes de desconocidos",
            "Anuncios en la calle",
            "Solo en redes sociales de famosos",
          ],
          correct: 0,
          explain:
            "Las ayudas oficiales están en webs oficiales. No pagues a nadie para conseguirlas.",
        },
        {
          q: "Si alguien te cobra para tramitar una ayuda que en realidad es gratuita...",
          options: [
            "Es normal, así funciona",
            "Desconfía. Las ayudas públicas no requieren pagar",
            "Paga rápido",
            "Le das tu tarjeta",
          ],
          correct: 1,
          explain:
            "Nadie cobra por tramitar ayudas públicas. Es una señal de estafa.",
        },
        {
          q: "Antes de pedir una ayuda, debes...",
          options: [
            "Leer bien los requisitos",
            "Firmar sin leer",
            "Pedirla varias veces",
            "No comprobar nada",
          ],
          correct: 0,
          explain:
            "Leer los requisitos evita errores y rechazos.",
        },
        {
          q: "La cuota de autónomo al empezar puede tener...",
          options: [
            "Una tarifa reducida",
            "Un precio doble",
            "Un descuento para clientes",
            "Ninguna opción",
          ],
          correct: 0,
          explain:
            "Existe la cuota reducida de arranque. Pregunta en tu oficina de la Seguridad Social.",
        },
      ],
      xp: 30,
    },
    {
      id: "emp-07",
      courseId: "emprende",
      title: "Errores comunes de quien empieza",
      level: 1,
      summary:
        "Los fallos más frecuentes y cómo evitarlos desde el primer día.",
      content:
        "Muchos negocios nuevos fallan por errores fáciles de evitar. Mezclar el dinero del negocio con el personal es uno. Usa una cuenta separada. No poner precios claros es otro error. Define tus precios desde el primer día. Gastar en cosas que no son necesarias también es común. Compra solo lo imprescindible. No guardar facturas o recibos trae problemas. No prometas más de lo que puedes cumplir. Y no abandones el plan a la primera dificultad. Aprende del error y sigue adelante.",
      audio: true,
      sources: [
        {
          title: "Agencia Tributaria: información para autónomos",
          url: "https://sede.agenciatributaria.gob.es",
          license: "público",
        },
        {
          title: "SEPE: empleo y emprendimiento",
          url: "https://www.sepe.es",
          license: "público",
        },
        {
          title: "Eures: portal europeo de empleo",
          url: "https://eures.europa.eu",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "El error más común es...",
          options: [
            "Mezclar el dinero del negocio con el personal",
            "Tener una cuenta separada",
            "Anotar los gastos",
            "Poner precios claros",
          ],
          correct: 0,
          explain:
            "Separa tu dinero personal del negocio desde el primer día.",
        },
        {
          q: "Comprar material que no necesitas al empezar...",
          options: [
            "Es recomendable",
            "Gasta dinero que podrías necesitar",
            "No tiene importancia",
            "Es obligatorio",
          ],
          correct: 1,
          explain:
            "Compra solo lo imprescindible y crece con los resultados.",
        },
        {
          q: "Ante una dificultad en el negocio, lo mejor es...",
          options: [
            "Cerrar al momento",
            "Aprender del error y ajustar el plan",
            "Esconder el problema",
            "Pagar a quien no te debe nada",
          ],
          correct: 1,
          explain:
            "Los errores son lecciones. Ajusta y sigue con paciencia.",
        },
        {
          q: "Prometer a un cliente más de lo que puedes cumplir...",
          options: [
            "Es buena estrategia",
            "Genera problemas y desconfianza",
            "No pasa nada",
            "Es obligatorio",
          ],
          correct: 1,
          explain:
            "Cumple lo que prometes. La confianza del cliente es tu mejor publicidad.",
        },
      ],
      xp: 30,
    },
  ],
};

export default emprende;
