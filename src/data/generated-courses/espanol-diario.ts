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

export const espanolDiario: GeneratedCourse = {
  id: "espanol-diario",
  title: "Español para la vida diaria",
  description:
    "Curso de español básico para la vida diaria. Frases cortas, situaciones reales y mucha práctica. Sin gramática difícil: aprenderás a comunicarte desde el primer día.",
  level: 0,
  category: "Idiomas",
  language: "es",
  estimatedMinutes: 150,
  objectives: [
    "Saludar y presentarte en español",
    "Comprar y pedir cosas en tiendas y supermercados",
    "Preguntar y entender en el bus, el metro y la calle",
    "Manejar citas, trámites y situaciones del día a día",
    "Usar frases útiles para la casa, la escuela y el trabajo",
  ],
  lessons: [
    {
      id: "es-l1",
      courseId: "espanol-diario",
      title: "Saludar y presentarte",
      level: 0,
      summary:
        "Aprende los saludos del día y a decir tu nombre con frases sencillas.",
      content:
        "Saludar es la primera palabra para conectar. Di «Hola» para saludar a un amigo. Di «Buenos días» por la mañana. Di «Buenas tardes» después del mediodía. Di «Buenas noches» cuando llega la noche. Para presentarte, di «Me llamo Ana». Pregunta a otra persona: «¿Cómo te llamas?». Cuando conoces a alguien, di «Mucho gusto».",
      slides: [
        "Di «Hola» para saludar.",
        "Di «Buenos días» por la mañana.",
        "Di «Buenas tardes» después del mediodía.",
        "Di «Buenas noches» por la noche.",
        "Para presentarte: «Me llamo Ana».",
        "Pregunta: «¿Cómo te llamas?»",
      ],
      audio: true,
      sources: [
        {
          title: "Language Transfer: Curso de español",
          url: "https://www.languagetransfer.org/complete-spanish",
          license: "gratuito",
        },
        {
          title: "Duolingo: Aprende español",
          url: "https://www.duolingo.com/course/es/es/Aprende-español",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "Son las 9 de la mañana. Conoces al vecino. ¿Qué saludo usas?",
          options: ["«Buenos días»", "«Buenas noches»", "«Buenas tardes»", "«Adiós»"],
          correct: 0,
          explain:
            "La lección dice que por la mañana se dice «Buenos días».",
        },
        {
          q: "Quieres decir tu nombre a una persona nueva. ¿Qué frase usas?",
          options: ["«Me llamo…»", "«¿Cómo te llamas?»", "«Mucho gusto»", "«¿Qué tal?»"],
          correct: 0,
          explain:
            "La lección enseña: para presentarte, di «Me llamo» y tu nombre.",
        },
        {
          q: "Conoces a una persona por primera vez. ¿Qué frase es educada?",
          options: ["«Mucho gusto»", "«Buenas noches»", "«Perdón»", "«Hasta mañana»"],
          correct: 0,
          explain:
            "La lección dice que cuando conoces a alguien, di «Mucho gusto».",
        },
        {
          q: "Son las 8 de la noche y entras en una tienda. ¿Qué dices?",
          options: ["«Buenas noches»", "«Buenos días»", "«Buenas tardes»", "«Hasta luego»"],
          correct: 0,
          explain:
            "La lección dice que por la noche se usa «Buenas noches».",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l2",
      courseId: "espanol-diario",
      title: "Pedir en el supermercado",
      level: 0,
      summary:
        "Cómo comprar en el supermercado: pedir, preguntar y pagar.",
      content:
        "Ve al supermercado para comprar comida. Coge un carro o una cesta en la entrada. Cada producto tiene una etiqueta con el precio. Para pedir algo, di «Quisiera» o «Quiero». Ejemplo: «Quisiera un kilo de manzanas». Si no encuentras algo, pregunta «¿Dónde está el pan?». Para pagar, ve a la caja. Al pagar, pregunta «¿Cuánto es todo?».",
      slides: [
        "Coge un carro o una cesta.",
        "Cada producto tiene su precio.",
        "Pide con «Quisiera…»",
        "Pregunta: «¿Dónde está el pan?»",
        "Paga en la caja.",
        "Pregunta: «¿Cuánto es todo?»",
      ],
      audio: true,
      sources: [
        {
          title: "Dreaming Spanish: Input comprensible",
          url: "https://www.dreamingspanish.com",
          license: "freemium",
        },
        {
          title: "Khan Academy en español",
          url: "https://es.khanacademy.org",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Estás en el supermercado y no encuentras el pan. ¿Qué preguntas?",
          options: ["«¿Dónde está el pan?»", "«¿Cuánto cuesta el pan?»", "«¿Qué es el pan?»", "«¿Puedo pagar?»"],
          correct: 0,
          explain:
            "La lección dice: si no encuentras algo, pregunta «¿Dónde está el pan?».",
        },
        {
          q: "Quieres comprar un kilo de manzanas. ¿Qué dices?",
          options: ["«Quisiera un kilo de manzanas»", "«Adiós, manzanas»", "«¿Cómo te llamas?»", "«Cuánto es el pan»"],
          correct: 0,
          explain:
            "La lección da el ejemplo «Quisiera un kilo de manzanas» para pedir.",
        },
        {
          q: "Terminaste de comprar. ¿Qué haces?",
          options: ["Voy a la caja a pagar", "Vuelvo a la entrada", "Busco el autobús", "Pregunto por el médico"],
          correct: 0,
          explain:
            "La lección dice: para pagar, ve a la caja.",
        },
        {
          q: "Quieres saber el precio de todo lo que compraste. ¿Qué dices en la caja?",
          options: ["«¿Cuánto es todo?»", "«¿Dónde está el carro?»", "«¿Qué hora es?»", "«¿Cómo te llamas?»"],
          correct: 0,
          explain:
            "La lección dice: al pagar, pregunta «¿Cuánto es todo?».",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l3",
      courseId: "espanol-diario",
      title: "El transporte público (bus y metro)",
      level: 0,
      summary:
        "Cómo viajar en bus y metro: subir, bajar y comprar el billete.",
      content:
        "Para viajar en bus, espera en la parada. Mira el número del bus antes de subir. Si dudas, pregunta: «¿Este bus va al centro?». Cuando se acerque tu parada, pulsa el botón. En el metro, compra el billete en la máquina. Un billete sencillo cuesta unos dos euros. La tarjeta de transporte es más barata. La tarjeta sirve para bus y metro.",
      slides: [
        "Espera el bus en la parada.",
        "Mira el número del bus.",
        "Pregunta: «¿Este bus va al centro?»",
        "Pulsa el botón para bajar.",
        "Compra el billete de metro en la máquina.",
        "La tarjeta de transporte es más barata.",
      ],
      audio: true,
      sources: [
        {
          title: "Forvo: Pronunciación en español",
          url: "https://forvo.com/languages/es/",
          license: "freemium",
        },
        {
          title: "Language Transfer: Curso de español",
          url: "https://www.languagetransfer.org/complete-spanish",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Estás en el bus y tu parada se acerca. ¿Qué haces?",
          options: ["Pulso el botón", "Grito al conductor", "Me bajo sin avisar", "Pregunto la hora"],
          correct: 0,
          explain:
            "La lección dice: cuando se acerque tu parada, pulsa el botón.",
        },
        {
          q: "No sabes si un bus va al centro. ¿Qué preguntas?",
          options: ["«¿Este bus va al centro?»", "«¿Cuánto cuesta?»", "«¿Qué hora es?»", "«¿Cómo te llamas?»"],
          correct: 0,
          explain:
            "La lección sugiere preguntar «¿Este bus va al centro?».",
        },
        {
          q: "¿Dónde compras el billete de metro?",
          options: ["En la máquina de la estación", "En la farmacia", "En el supermercado", "En el banco"],
          correct: 0,
          explain:
            "La lección dice: en el metro, compra el billete en la máquina.",
        },
        {
          q: "Viajas en bus y metro todos los días. ¿Qué te conviene?",
          options: ["La tarjeta de transporte", "Un billete sencillo", "Un taxi cada día", "Ir a pie siempre"],
          correct: 0,
          explain:
            "La lección dice que la tarjeta de transporte es más barata.",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l4",
      courseId: "espanol-diario",
      title: "La farmacia y el médico",
      level: 0,
      summary:
        "Cómo pedir cita, explicar tus síntomas y comprar medicina.",
      content:
        "Si estás enfermo, puedes ir al médico. Pide cita en tu centro de salud. Di en recepción: «Quisiera una cita con el médico». Cuenta tus síntomas con frases cortas. Di «Tengo fiebre» o «Me duele la cabeza». En la farmacia venden medicinas sin receta. La receta es un papel que da el médico. Si dudas, pregunta: «¿Cómo tomo esta medicina?».",
      slides: [
        "Pide cita en tu centro de salud.",
        "Di: «Quisiera una cita con el médico».",
        "Cuenta tus síntomas: «Tengo fiebre».",
        "Di: «Me duele la cabeza».",
        "La receta es un papel del médico.",
        "Pregunta: «¿Cómo tomo esta medicina?»",
      ],
      audio: true,
      sources: [
        {
          title: "Instituto Cervantes: Español",
          url: "https://www.cervantes.es/lengua_y_ensenanza/default.htm",
          license: "gratuito",
        },
        {
          title: "Forvo: Pronunciación en español",
          url: "https://forvo.com/languages/es/",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "Quieres ver al médico. ¿Qué haces primero?",
          options: ["Pido cita en el centro de salud", "Compro medicina en el supermercado", "Llamo a la policía", "Espero en la calle"],
          correct: 0,
          explain:
            "La lección dice: pide cita en tu centro de salud.",
        },
        {
          q: "Tienes dolor de cabeza. ¿Cómo lo dices?",
          options: ["«Me duele la cabeza»", "«Tengo hambre»", "«Estoy perdido»", "«Tengo prisa»"],
          correct: 0,
          explain:
            "La lección enseña a decir «Me duele la cabeza».",
        },
        {
          q: "¿Qué es una receta?",
          options: ["Un papel del médico para comprar la medicina", "Un billete de metro", "Una lista de precios", "Una tarjeta del banco"],
          correct: 0,
          explain:
            "La lección dice que la receta es un papel que da el médico.",
        },
        {
          q: "El farmacéutico te da una medicina nueva. ¿Qué preguntas?",
          options: ["«¿Cómo tomo esta medicina?»", "«¿Dónde está el pan?»", "«¿Qué hora es?»", "«¿Cuánto cuesta el bus?»"],
          correct: 0,
          explain:
            "La lección dice: si dudas, pregunta «¿Cómo tomo esta medicina?».",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l5",
      courseId: "espanol-diario",
      title: "El colegio de tus hijos",
      level: 0,
      summary:
        "Cómo matricular a tu hijo y comunicarte con la escuela.",
      content:
        "En España, la escuela es obligatoria y gratuita. Para matricular a tu hijo, ve al colegio. Lleva el certificado de empadronamiento. Lleva los papeles del niño. Pregunta en la secretaría: «¿Qué papeles necesito?». Si tienes dudas, habla con la maestra. Si lo necesitas, pide un intérprete. Pregunta: «¿A qué hora sale mi hijo?».",
      slides: [
        "La escuela es obligatoria y gratuita.",
        "Ve al colegio para matricular a tu hijo.",
        "Lleva el empadronamiento y los papeles.",
        "Pregunta: «¿Qué papeles necesito?»",
        "Habla con la maestra si tienes dudas.",
        "Puedes pedir un intérprete.",
      ],
      audio: true,
      sources: [
        {
          title: "Khan Academy en español",
          url: "https://es.khanacademy.org",
          license: "gratuito",
        },
        {
          title: "Dreaming Spanish: Input comprensible",
          url: "https://www.dreamingspanish.com",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "Quieres matricular a tu hijo. ¿A dónde vas?",
          options: ["Al colegio", "Al banco", "Al mercado", "A la estación"],
          correct: 0,
          explain:
            "La lección dice: para matricular a tu hijo, ve al colegio.",
        },
        {
          q: "¿Qué documento llevas para matricular a tu hijo?",
          options: ["El certificado de empadronamiento", "El billete de metro", "La lista de la compra", "La tarjeta del gimnasio"],
          correct: 0,
          explain:
            "La lección dice: lleva el certificado de empadronamiento.",
        },
        {
          q: "Tienes dudas sobre la escuela. ¿Con quién hablas?",
          options: ["Con la maestra", "Con el conductor", "Con el panadero", "Con el vecino"],
          correct: 0,
          explain:
            "La lección dice: si tienes dudas, habla con la maestra.",
        },
        {
          q: "Quieres saber a qué hora acaba la clase. ¿Qué preguntas?",
          options: ["«¿A qué hora sale mi hijo?»", "«¿Cuánto cuesta?»", "«¿Dónde está el pan?»", "«¿Qué es esto?»"],
          correct: 0,
          explain:
            "La lección enseña a preguntar «¿A qué hora sale mi hijo?».",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l6",
      courseId: "espanol-diario",
      title: "El supermercado y el precio",
      level: 0,
      summary:
        "Cómo leer precios, ver ofertas y guardar el ticket.",
      content:
        "Para ahorrar dinero, compara precios. El precio está en la etiqueta del producto. A veces el precio es por kilo. Mira bien la etiqueta antes de comprar. Los productos en oferta tienen un precio en rojo. Revisa la fecha de caducidad de la comida. Guarda el ticket después de pagar. El ticket sirve si quieres cambiar algo.",
      slides: [
        "Compara precios para ahorrar.",
        "El precio está en la etiqueta.",
        "A veces el precio es por kilo.",
        "Los productos en oferta tienen precio rojo.",
        "Mira la fecha de caducidad.",
        "Guarda el ticket.",
      ],
      audio: true,
      sources: [
        {
          title: "Duolingo: Aprende español",
          url: "https://www.duolingo.com/course/es/es/Aprende-español",
          license: "freemium",
        },
        {
          title: "Khan Academy en español",
          url: "https://es.khanacademy.org",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "¿Por qué es bueno comparar precios?",
          options: ["Para ahorrar dinero", "Para llegar tarde", "Para hablar más", "Para caminar menos"],
          correct: 0,
          explain:
            "La lección dice: para ahorrar dinero, compara precios.",
        },
        {
          q: "Compras fruta. ¿Cómo puede estar marcado el precio?",
          options: ["Por kilo", "Por horas", "Por personas", "Por colores"],
          correct: 0,
          explain:
            "La lección dice que a veces el precio es por kilo.",
        },
        {
          q: "¿Cómo sabes que un producto está en oferta?",
          options: ["Tiene un precio en rojo", "Tiene una fecha de caducidad", "Está en el carro", "Tiene un dibujo"],
          correct: 0,
          explain:
            "La lección dice: los productos en oferta tienen un precio en rojo.",
        },
        {
          q: "¿Por qué guardas el ticket?",
          options: ["Por si quieres cambiar algo", "Para decorar la casa", "Para el colegio", "Para tirar después"],
          correct: 0,
          explain:
            "La lección dice que el ticket sirve si quieres cambiar algo.",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l7",
      courseId: "espanol-diario",
      title: "Pedir ayuda y orientación",
      level: 0,
      summary:
        "Frases para pedir ayuda, preguntar direcciones y entender mejor.",
      content:
        "Si te pierdes, pide ayuda a una persona. Di: «Perdone, estoy perdido». Pregunta: «¿Cómo llego a la calle Mayor?». En las estaciones hay mostradores de información. La policía también te puede ayudar. Si no entiendes, di: «¿Puede repetir, por favor?». Si hablan muy rápido, di: «¿Puede hablar más despacio?». Agradece siempre con «Gracias».",
      slides: [
        "Pide ayuda si te pierdes.",
        "Di: «Perdone, estoy perdido».",
        "Pregunta: «¿Cómo llego a…?»",
        "En la estación hay información.",
        "Di: «¿Puede repetir, por favor?»",
        "Di: «¿Puede hablar más despacio?»",
      ],
      audio: true,
      sources: [
        {
          title: "Language Transfer: Curso de español",
          url: "https://www.languagetransfer.org/complete-spanish",
          license: "gratuito",
        },
        {
          title: "Instituto Cervantes: Español",
          url: "https://www.cervantes.es/lengua_y_ensenanza/default.htm",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Estás perdido en la calle. ¿Qué dices?",
          options: ["«Perdone, estoy perdido»", "«Adiós»", "«Buenas noches»", "«Tengo hambre»"],
          correct: 0,
          explain:
            "La lección dice: di «Perdone, estoy perdido».",
        },
        {
          q: "Quieres ir a la plaza pero no sabes el camino. ¿Qué preguntas?",
          options: ["«¿Cómo llego a la plaza?»", "«¿Qué hora es?»", "«¿Dónde está el pan?»", "«¿Cómo te llamas?»"],
          correct: 0,
          explain:
            "La lección enseña a preguntar «¿Cómo llego a…?».",
        },
        {
          q: "No entendiste lo que dijo la persona. ¿Qué dices?",
          options: ["«¿Puede repetir, por favor?»", "«Buenos días»", "«Mucho gusto»", "«Hasta luego»"],
          correct: 0,
          explain:
            "La lección dice: si no entiendes, di «¿Puede repetir, por favor?».",
        },
        {
          q: "La persona habla muy rápido. ¿Qué pides?",
          options: ["Que hable más despacio", "Que grite más", "Que hable en otro idioma", "Que se marche"],
          correct: 0,
          explain:
            "La lección dice: si hablan muy rápido, di «¿Puede hablar más despacio?».",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l8",
      courseId: "espanol-diario",
      title: "El banco y el cajero",
      level: 0,
      summary:
        "Cómo usar el cajero automático y proteger tu tarjeta.",
      content:
        "En el cajero automático puedes sacar dinero. Mete tu tarjeta en la máquina. Escribe tu número secreto, el PIN. Elige cuánto dinero quieres sacar. No digas tu PIN a nadie. Nadie debe verlo. Guarda el recibo después de operar. Si pierdes la tarjeta, avisa al banco rápido.",
      slides: [
        "En el cajero puedes sacar dinero.",
        "Mete tu tarjeta en la máquina.",
        "Escribe tu número secreto (PIN).",
        "Elige cuánto dinero quieres.",
        "No digas tu PIN a nadie.",
        "Si pierdes la tarjeta, avisa al banco.",
      ],
      audio: true,
      sources: [
        {
          title: "Forvo: Pronunciación en español",
          url: "https://forvo.com/languages/es/",
          license: "freemium",
        },
        {
          title: "Duolingo: Aprende español",
          url: "https://www.duolingo.com/course/es/es/Aprende-español",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "¿Qué haces primero en el cajero?",
          options: ["Meto mi tarjeta", "Pido cita", "Compro un billete", "Saludo en voz alta"],
          correct: 0,
          explain:
            "La lección dice: mete tu tarjeta en la máquina.",
        },
        {
          q: "¿Qué es el PIN?",
          options: ["El número secreto de la tarjeta", "El precio del bus", "El nombre del banco", "La dirección de casa"],
          correct: 0,
          explain:
            "La lección dice: escribe tu número secreto, el PIN.",
        },
        {
          q: "¿A quién puedes decir tu PIN?",
          options: ["A nadie", "A cualquier persona", "Al conductor del bus", "Al vendedor del mercado"],
          correct: 0,
          explain:
            "La lección dice: no digas tu PIN a nadie.",
        },
        {
          q: "Has perdido tu tarjeta. ¿Qué haces?",
          options: ["Aviso al banco rápido", "Espero a mañana", "Compro otra en el supermercado", "No hago nada"],
          correct: 0,
          explain:
            "La lección dice: si pierdes la tarjeta, avisa al banco rápido.",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l9",
      courseId: "espanol-diario",
      title: "La vivienda: alquilar un piso",
      level: 0,
      summary:
        "Qué preguntar y qué revisar antes de alquilar un piso.",
      content:
        "Para alquilar un piso, busca en portales y agencias. Visita el piso antes de pagar nada. Pregunta: «¿Cuánto cuesta el alquiler?». Pregunta: «¿Qué gastos hay además?». Normalmente pides una fianza. La fianza se devuelve al terminar el contrato. Lee el contrato antes de firmar. Si no entiendes, pregunta o pide ayuda.",
      slides: [
        "Busca un piso en portales y agencias.",
        "Visita el piso antes de pagar.",
        "Pregunta: «¿Cuánto cuesta el alquiler?»",
        "Pregunta por los gastos extras.",
        "La fianza se devuelve al final.",
        "Lee el contrato antes de firmar.",
      ],
      audio: true,
      sources: [
        {
          title: "Instituto Cervantes: Español",
          url: "https://www.cervantes.es/lengua_y_ensenanza/default.htm",
          license: "gratuito",
        },
        {
          title: "Dreaming Spanish: Input comprensible",
          url: "https://www.dreamingspanish.com",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "Antes de pagar por un piso, ¿qué haces?",
          options: ["Lo visito", "Lo imagino", "Lo pinto", "Lo anuncio"],
          correct: 0,
          explain:
            "La lección dice: visita el piso antes de pagar nada.",
        },
        {
          q: "¿Qué es la fianza?",
          options: ["Dinero que se devuelve al final", "Un precio que nunca vuelve", "Un tipo de contrato", "Un mueble de la casa"],
          correct: 0,
          explain:
            "La lección dice: la fianza se devuelve al terminar el contrato.",
        },
        {
          q: "Quieres saber el precio del piso. ¿Qué preguntas?",
          options: ["«¿Cuánto cuesta el alquiler?»", "«¿Qué hora es?»", "«¿Dónde está el pan?»", "«¿Cómo te llamas?»"],
          correct: 0,
          explain:
            "La lección enseña a preguntar «¿Cuánto cuesta el alquiler?».",
        },
        {
          q: "¿Qué haces antes de firmar el contrato?",
          options: ["Lo leo con calma", "Lo firmo sin mirar", "Lo tiro", "Lo doy a un amigo"],
          correct: 0,
          explain:
            "La lección dice: lee el contrato antes de firmar.",
        },
      ],
      xp: 20,
    },
    {
      id: "es-l10",
      courseId: "espanol-diario",
      title: "El trabajo: la entrevista",
      level: 0,
      summary:
        "Frases y preparación para una entrevista de trabajo.",
      content:
        "Para buscar trabajo, prepara tu currículum. El currículum cuenta qué sabes hacer. En la entrevista, llega con tiempo. Saluda con «Buenos días» o «Buenas tardes». Di tu nombre y lo que sabes hacer. Pregunta por el horario: «¿Cuál es el horario?». Pregunta por el salario: «¿Cuánto se cobra?». Pregunta si el contrato es por escrito.",
      slides: [
        "Prepara tu currículum.",
        "El currículum cuenta qué sabes hacer.",
        "Llega con tiempo a la entrevista.",
        "Saluda y di tu nombre.",
        "Pregunta por el horario.",
        "Pregunta cuánto se cobra.",
      ],
      audio: true,
      sources: [
        {
          title: "Language Transfer: Curso de español",
          url: "https://www.languagetransfer.org/complete-spanish",
          license: "gratuito",
        },
        {
          title: "Duolingo: Aprende español",
          url: "https://www.duolingo.com/course/es/es/Aprende-español",
          license: "freemium",
        },
      ],
      quiz: [
        {
          q: "¿Qué llevas a una entrevista de trabajo?",
          options: ["Tu currículum", "Tu cesta de la compra", "Un billete de bus", "Una receta"],
          correct: 0,
          explain:
            "La lección dice: prepara tu currículum.",
        },
        {
          q: "Quieres saber las horas de trabajo. ¿Qué preguntas?",
          options: ["«¿Cuál es el horario?»", "«¿Qué hora es?»", "«¿Cómo te llamas?»", "«¿Dónde está el pan?»"],
          correct: 0,
          explain:
            "La lección enseña a preguntar «¿Cuál es el horario?».",
        },
        {
          q: "Quieres saber cuánto vas a ganar. ¿Qué preguntas?",
          options: ["«¿Cuánto se cobra?»", "«¿Cuánto cuesta?»", "«¿Qué es esto?»", "«¿Estoy perdido?»"],
          correct: 0,
          explain:
            "La lección enseña a preguntar «¿Cuánto se cobra?».",
        },
        {
          q: "¿Qué debes hacer el día de la entrevista?",
          options: ["Llegar con tiempo", "Llegar tarde", "No saludar", "Hablar de otra persona"],
          correct: 0,
          explain:
            "La lección dice: en la entrevista, llega con tiempo.",
        },
      ],
      xp: 20,
    },
  ],
};

export default espanolDiario;
