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

export const ciberseguridad: GeneratedCourse = {
  id: "ciberseguridad",
  title: "No te estafen: ciberseguridad básica",
  description:
    "Aprende a reconocer las estafas más comunes que llegan por teléfono, mensaje o correo. Con ejemplos de la vida real y pasos sencillos para protegerte y para actuar si te han estafado.",
  level: 1,
  category: "Seguridad digital",
  language: "es",
  estimatedMinutes: 90,
  objectives: [
    "Reconocer las señales de una estafa de empleo",
    "Detectar SMS y correos falsos",
    "Crear contraseñas seguras",
    "Saber qué hacer si te han estafado",
  ],
  lessons: [
    {
      id: "cib-01",
      courseId: "ciberseguridad",
      title: "Las estafas de empleo",
      level: 1,
      summary:
        "Te ofrecen trabajo y te piden dinero. Así funcionan y cómo detectarlas.",
      content:
        "Muchas estafas empiezan con una oferta de trabajo falsa. Te escriben por WhatsApp, por correo o por redes sociales. Te ofrecen un sueldo bueno sin hacer entrevista. Si el trato es muy bueno para ser verdad, desconfía. Un trabajo de verdad nunca te pide dinero. Tampoco te pide pagar por el contrato, el visado o los papeles. Un empleador honesto paga la formación y el material. Si te piden dinero, es una estafa. Habla con una persona de confianza antes de pagar nada.",
      audio: true,
      sources: [
        {
          title: "INCIBE: Avisos y campañas para ciudadanía",
          url: "https://www.incibe.es/ciudadania/avisos",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "Cisco Networking Academy: Introduction to Cybersecurity",
          url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Te ofrecen un trabajo por WhatsApp con un sueldo muy alto. Para firmar el contrato te piden 100 euros. ¿Qué haces?",
          options: [
            "Pago, es normal pagar por los papeles",
            "No pago y corto el contacto. Un trabajo de verdad no pide dinero",
            "Pago la mitad para probar",
            "Envío mis datos del banco por si acaso",
          ],
          correct: 1,
          explain:
            "Un trabajo de verdad nunca pide dinero. Si te piden pagar por el contrato o por los papeles, es una estafa. Corta el contacto y no des tus datos.",
        },
        {
          q: "Un amigo te cuenta que consiguió trabajo pagando 50 euros para el curso de la empresa. ¿Qué piensas?",
          options: [
            "Es normal, voy a hacer lo mismo",
            "Le pido el número para pagar yo también",
            "Le advierto que puede ser una estafa y le aconsejo verificar la empresa",
            "Pago 50 euros por mi cuenta a la misma persona",
          ],
          correct: 2,
          explain:
            "Pagar para conseguir trabajo es una señal de alarma. Las ofertas que piden dinero suelen ser estafas. Aconseja a tu amigo que verifique la empresa por su cuenta.",
        },
        {
          q: "Una oferta de trabajo te pide tu número de cuenta y tu DNI por WhatsApp antes de conocerte. ¿Qué haces?",
          options: [
            "Se los mando, me los piden para pagarme",
            "No los doy. Primero verifico que la empresa exista",
            "Doy el DNI pero no el número de cuenta",
            "Mando los datos de mi hijo",
          ],
          correct: 1,
          explain:
            "No envíes documentos personales a desconocidos. Verifica que la empresa exista por internet y por teléfono antes de dar ningún dato.",
        },
      ],
      xp: 25,
    },
    {
      id: "cib-02",
      courseId: "ciberseguridad",
      title: "El SMS falso del paquete (smishing)",
      level: 1,
      summary:
        "Un mensaje dice que tu paquete está retenido y te pide pagar. Cómo reconocerlo.",
      content:
        "Otro truco es el mensaje del paquete falso. Te llega un SMS que dice que tienes un paquete retenido. Te piden pagar un euro para recibirlo. El mensaje incluye un enlace. No toques el enlace. Las empresas de correo no piden dinero por SMS. Tampoco te piden contraseñas por mensaje. Mira el remitente: suelen ser números raros o textos con errores. Si esperas un paquete, entra en la web oficial de la empresa. Borra el mensaje sospechoso.",
      audio: true,
      sources: [
        {
          title: "INCIBE: Estafas por SMS (smishing)",
          url: "https://www.incibe.es/ciudadania/avisos",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "Cisco Networking Academy: Cybersecurity Essentials",
          url: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Recibes un SMS: Tu paquete está en la aduana. Paga 1 euro y da tus datos en este enlace. ¿Qué haces?",
          options: [
            "Toco el enlace y pago el euro",
            "Mando mis datos por si es verdad",
            "No toco el enlace y borro el mensaje",
            "Reenvío el mensaje a todos mis contactos",
          ],
          correct: 2,
          explain:
            "No toques enlaces de mensajes sospechosos. Las empresas de correo no piden dinero por SMS. Entra siempre por la web oficial.",
        },
        {
          q: "Quieres saber si de verdad tienes un paquete. ¿Qué haces?",
          options: [
            "Entro en la web oficial de la empresa de correos y busco mi envío",
            "Escribo mis contraseñas en el enlace del mensaje",
            "Llamo al número que aparece en el SMS",
            "Nada, es imposible saberlo",
          ],
          correct: 0,
          explain:
            "La web oficial es el camino seguro. No uses los datos que vienen en el mensaje sospechoso.",
        },
        {
          q: "El mensaje del paquete tiene errores de ortografía y un enlace con letras raras. ¿Qué significa?",
          options: [
            "Que es verdadero, los mensajes de empresas no son perfectos",
            "Que es probablemente una estafa",
            "Que me van a dar un regalo",
            "Que debo contestar rápido",
          ],
          correct: 1,
          explain:
            "Los errores de ortografía y los enlaces raros son señales de estafa. Los mensajes falsos suelen tener fallos.",
        },
      ],
      xp: 25,
    },
    {
      id: "cib-03",
      courseId: "ciberseguridad",
      title: "El correo del banco (phishing)",
      level: 1,
      summary:
        "Un correo que parece de tu banco te pide la contraseña. Cómo detectarlo.",
      content:
        "El phishing es un correo que parece de tu banco. Dice que tu cuenta está bloqueada. Te pide entrar en un enlace y poner tu contraseña. El banco nunca te pide la contraseña por correo. Tampoco por SMS ni por teléfono. Mira bien el remitente: suelen ser direcciones raras. No toques enlaces ni archivos adjuntos. Si tienes dudas, llama al número que está en tu tarjeta. Tu banco solo te pide datos dentro de su aplicación o su web oficial.",
      audio: true,
      sources: [
        {
          title: "INCIBE: El phishing y cómo evitarlo",
          url: "https://www.incibe.es/ciudadania/campanas",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "Cisco Networking Academy: Introduction to Cybersecurity",
          url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "Recibes un correo de tu banco: Tu cuenta está bloqueada. Entra aquí y pon tu contraseña. ¿Qué haces?",
          options: [
            "Entro y pongo la contraseña rápido",
            "Reviso el remitente. Si es raro, no toco nada y borro el correo",
            "Respondo con todos mis datos",
            "Guardo el correo y mando la contraseña por WhatsApp",
          ],
          correct: 1,
          explain:
            "Un banco nunca pide tu contraseña por correo. Revisa el remitente y no toques el enlace.",
        },
        {
          q: "Para asegurarte de que tu banco funciona bien, ¿qué haces?",
          options: [
            "Llamo al número que está en mi tarjeta bancaria",
            "Uso el enlace del correo sospechoso",
            "Pido ayuda a la persona que me escribió",
            "Espero a que me bloqueen la cuenta",
          ],
          correct: 0,
          explain:
            "Usa siempre el número oficial de tu tarjeta. No uses los datos que vienen en el mensaje sospechoso.",
        },
        {
          q: "Un correo tiene el logo de tu banco pero la dirección es soporte@banco-seguridad.com. ¿Qué piensas?",
          options: [
            "Es del banco, tiene el logo",
            "Es falso. La dirección no es la oficial",
            "Es una oferta buena",
            "Debo contestar cuanto antes",
          ],
          correct: 1,
          explain:
            "El logo no es una prueba. La dirección del correo es lo importante. Si no es la oficial, es una estafa.",
        },
      ],
      xp: 25,
    },
    {
      id: "cib-04",
      courseId: "ciberseguridad",
      title: "Las contraseñas seguras",
      level: 1,
      summary:
        "Cómo crear contraseñas largas y distintas para cada cuenta.",
      content:
        "Las contraseñas abren tus cuentas. Una contraseña segura es larga. Usa tres palabras sin relación y añade números. Por ejemplo: silla luna 7 rana. No uses tu nombre ni tu fecha de nacimiento. Cada cuenta necesita una contraseña distinta. Si usas la misma en todas, una estafa te afecta a todas. No escribas tus contraseñas en papel junto al móvil. Puedes usar un gestor de contraseñas. Es una aplicación que las guarda de forma segura. Cambia la contraseña si crees que alguien la conoce.",
      audio: true,
      sources: [
        {
          title: "INCIBE: Cómo crear contraseñas seguras",
          url: "https://www.incibe.es/ciudadania/campanas",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "Cisco Networking Academy: Introduction to Cybersecurity",
          url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
          license: "gratuito",
        },
      ],
      quiz: [
        {
          q: "¿Cuál de estas contraseñas es la más segura?",
          options: [
            "123456",
            "Tu nombre y tu año de nacimiento",
            "silla luna 7 rana",
            "hola",
          ],
          correct: 2,
          explain:
            "Una contraseña larga con palabras sin relación y números es difícil de adivinar. No uses datos personales.",
        },
        {
          q: "Usas la misma contraseña en tu correo y en tu banco. ¿Por qué es un problema?",
          options: [
            "No es un problema, es más fácil recordarla",
            "Si alguien la descubre, entra en las dos cuentas",
            "Es una buena idea para no olvidarla",
            "Solo importa en el banco",
          ],
          correct: 1,
          explain:
            "Usa contraseñas distintas en cada cuenta. Así, si una cae, las demás están a salvo.",
        },
        {
          q: "Crees que alguien ha visto tu contraseña. ¿Qué haces?",
          options: [
            "Nada, seguro que no pasa nada",
            "La cambio cuanto antes y reviso mis cuentas",
            "Se la digo a la persona que la vio",
            "La escribo en un papel pegado al móvil",
          ],
          correct: 1,
          explain:
            "Si sospechas, cambia la contraseña y revisa tus cuentas. Nunca compartas contraseñas.",
        },
      ],
      xp: 25,
    },
    {
      id: "cib-05",
      courseId: "ciberseguridad",
      title: "Las videollamadas falsas y las llamadas de tu banco",
      level: 1,
      summary:
        "Estafadores que dicen ser de tu banco y caras falsas en videollamadas.",
      content:
        "Hay estafadores que llaman y dicen que son de tu banco. Suenan muy seguros y conocen tus datos. Dicen que hay un cargo raro y que necesitan un código. Ese código llega a tu móvil. Si lo dices, entran en tu cuenta. Un banco nunca te pide el código por teléfono. Tampoco te pide hacer transferencias por seguridad. Con las videollamadas también pueden imitar caras con programas. Si dudas, cuelga y llama al número de tu tarjeta. Es mejor parar y comprobar.",
      audio: true,
      sources: [
        {
          title: "INCIBE: Llamadas y videollamadas falsas",
          url: "https://www.incibe.es/ciudadania/avisos",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "INCIBE: Canal de YouTube",
          url: "https://www.youtube.com/@INCIBE",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Te llaman y dicen que son de tu banco. Te piden el código que te ha llegado al móvil. ¿Qué haces?",
          options: [
            "Se lo digo, es del banco",
            "Cuelgo. Un banco nunca pide códigos por teléfono",
            "Se lo mando por mensaje",
            "Lo repito en voz alta",
          ],
          correct: 1,
          explain:
            "Nadie que te llama puede pedirte códigos. Cuelga y llama al número de tu tarjeta para comprobar.",
        },
        {
          q: "Un agente por teléfono te pide mover tu dinero a otra cuenta por seguridad. ¿Qué haces?",
          options: [
            "Lo hago, es para protegerme",
            "No lo hago y cuelgo. Nadie te pide mover dinero por seguridad",
            "Muevo una parte para probar",
            "Le doy mi tarjeta",
          ],
          correct: 1,
          explain:
            "Es un truco clásico. Tu banco nunca te pide mover dinero por teléfono. Es una estafa.",
        },
        {
          q: "Te hacen una videollamada con la cara de una persona conocida que pide dinero urgente. ¿Qué piensas?",
          options: [
            "Es esa persona, la veo y la oigo",
            "Puede ser falsa. Las caras se imitan con programas. Compruebo por otro medio",
            "Envío el dinero ya",
            "Comparto la videollamada en mis redes",
          ],
          correct: 1,
          explain:
            "Los programas pueden imitar caras y voces. Si te piden dinero urgente, verifica con esa persona por otro medio.",
        },
      ],
      xp: 25,
    },
    {
      id: "cib-06",
      courseId: "ciberseguridad",
      title: "Qué hacer si ya te han estafado",
      level: 1,
      summary:
        "Pasos claros para actuar rápido y recuperar el control.",
      content:
        "Si te han estafado, no te sientas culpable. Les pasa a muchas personas. Lo primero es cortar los pagos. Llama a tu banco y pide anular la transferencia o bloquear la tarjeta. Cambia las contraseñas de tus cuentas. Guarda los mensajes, capturas y datos del estafador. Eso sirve como prueba. Denuncia ante la Policía Nacional o la Guardia Civil. Puedes avisar también al INCIBE, el centro de ciberseguridad. Cuanto antes actúes, más posibilidades de recuperar el dinero.",
      audio: true,
      sources: [
        {
          title: "INCIBE: Qué hacer si te han estafado",
          url: "https://www.incibe.es/ciudadania/campanas",
          license: "público",
        },
        {
          title: "INCIBE: Línea de ayuda en ciberseguridad",
          url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad",
          license: "público",
        },
        {
          title: "Policía Nacional: denuncias en línea",
          url: "https://www.policia.es",
          license: "público",
        },
      ],
      quiz: [
        {
          q: "Descubres que te han estafado y has enviado dinero. ¿Cuál es el primer paso?",
          options: [
            "Esperar una semana a ver si vuelve",
            "Llamar al banco y pedir anular el pago o bloquear la tarjeta",
            "Pagar más dinero para recuperarlo",
            "No contarlo a nadie",
          ],
          correct: 1,
          explain:
            "Llama al banco enseguida. Cuanto antes actúes, más posibilidades de recuperar el dinero.",
        },
        {
          q: "Guardar mensajes y capturas del estafador sirve para...",
          options: [
            "Nada, no hacen falta",
            "Usarlos como prueba en la denuncia",
            "Reenviarlos a otros contactos",
            "Borrarlos rápido",
          ],
          correct: 1,
          explain:
            "Las capturas y los mensajes son pruebas para la denuncia. Guárdalas bien.",
        },
        {
          q: "Después de la estafa, también debes...",
          options: [
            "Cambiar tus contraseñas",
            "Seguir usando las mismas contraseñas",
            "Dar tu contraseña al estafador",
            "No hacer nada más",
          ],
          correct: 0,
          explain:
            "Cambia las contraseñas de tus cuentas y denuncia. Cuidar tu información te protege de nuevas estafas.",
        },
      ],
      xp: 25,
    },
  ],
};

export default ciberseguridad;
