// Manos Abiertas - FAQ & Testimonials data

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'ai' | 'cv' | 'rights' | 'technical';
}

export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  flag: string;
  role: string;
  story: string;
  avatar: string; // emoji
  rating: number;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Manos Abiertas es realmente gratis?',
    answer: 'Sí, 100% gratis. No necesitas registrarte ni pagar nada. Toda la plataforma es de acceso libre: cursos, CV builder, recursos y guía de derechos. No recogemos tus datos personales.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: '¿Necesito saber informática para usar esto?',
    answer: 'No. Si sabes usar WhatsApp y Google, puedes usar Manos Abiertas. Todo está diseñado para personas que se inician en la tecnología, con explicaciones paso a paso y en tu idioma.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: '¿En qué idiomas está disponible?',
    answer: 'Puedes elegir entre 39 idiomas en el selector (parte superior derecha). 26 están totalmente traducidos: español, catalán, portugués, inglés, alemán, italiano, francés, chino, hindi, árabe, ruso, ucraniano, polaco, rumano, búlgaro, neerlandés, griego, turco, urdu, persa, bengalí, tagalo, suajili, vietnamita, quechua. Los que aún estamos completando muestran español como respaldo.',
  },
  {
    id: 'faq-4',
    category: 'ai',
    question: '¿Qué inteligencia artificial debo aprender primero?',
    answer: 'Te recomendamos empezar con ChatGPT (gratis y fácil) o Microsoft Copilot (gratis e integrado en Windows). Después puedes explorar Gemini (de Google) y DeepSeek (muy buena para razonamiento).',
  },
  {
    id: 'faq-5',
    category: 'ai',
    question: '¿Las IA son seguras? ¿Pueden robar mis datos?',
    answer: 'Las IA principales (ChatGPT, Gemini, Copilot) son seguras si NO compartes datos sensibles (DNI, contraseñas, cuentas bancarias). Nunca pongas información privada en un chat de IA. Lee la lección de privacidad de cada curso.',
  },
  {
    id: 'faq-6',
    category: 'cv',
    question: '¿El CV que creo aquí sirve para buscar trabajo en España?',
    answer: 'Sí. El formato sigue el estándar europeo (Europass) y es compatible con los sistemas de selección (ATS) de InfoJobs, LinkedIn y empresas españolas. Puedes descargarlo en PDF e imprimirlo.',
  },
  {
    id: 'faq-7',
    category: 'cv',
    question: '¿La IA que genera mi CV guarda mis datos?',
    answer: 'No. La IA genera el texto solo en ese momento y no se guarda en ningún servidor. Tu información permanece en tu navegador. Cuando cierras la página, los datos se borran.',
  },
  {
    id: 'faq-8',
    category: 'rights',
    question: '¿La información legal está actualizada?',
    answer: 'Sí, está verificada con datos oficiales de 2024-2025 (SMI, leyes de extranjería, reformas). Pero las leyes cambian: siempre confirma con la fuente oficial (enlace incluido en cada artículo) o consulta con un abogado.',
  },
  {
    id: 'faq-9',
    category: 'rights',
    question: '¿Puedo recibir asesoramiento legal personalizado aquí?',
    answer: 'No damos asesoramiento legal personalizado, pero te conectamos con recursos gratuitos: abogado de oficio (justicia gratuita), ONGs (Cruz Roja, CEAR, ACCEM) y servicios sociales de tu ayuntamiento. Mira la sección "Derechos y Ayudas".',
  },
  {
    id: 'faq-10',
    category: 'technical',
    question: '¿Puedo usar Manos Abiertas en mi móvil?',
    answer: 'Sí, está diseñado para funcionar perfectamente en móviles, tablets y ordenadores. No necesitas instalar ninguna app: abre la web en tu navegador. También puedes añadirla a tu pantalla de inicio.',
  },
  {
    id: 'faq-11',
    category: 'technical',
    question: '¿Necesito conexión a internet?',
    answer: 'Para la primera visita necesitas internet. Después, algunas partes se guardan en tu navegador y funcionan sin conexión. Pero para usar la IA del CV o abrir enlaces externos, necesitas internet.',
  },
  {
    id: 'faq-12',
    category: 'technical',
    question: '¿Cómo guardo mi progreso en los cursos?',
    answer: 'Tu progreso se guarda automáticamente en tu navegador (localStorage). Si usas el mismo dispositivo y navegador, retomarás donde lo dejaste. Para guardar en la nube, usa tu cuenta de Google al iniciar sesión en las IA que aprendes.',
  },
  {
    id: 'faq-13',
    category: 'cv',
    question: '¿Qué es el análisis ATS y por qué me conviene?',
    answer: 'Muchas empresas españolas filtran currículos con programas informáticos (ATS) antes de leerlos. El Análisis ATS revisa tu CV comparándolo con la oferta de empleo: te da una puntuación del 0 al 100, te dice qué palabras clave le faltan a tu perfil y cómo mejorar cada sección para que tu CV no sea descartado.',
  },
  {
    id: 'faq-14',
    category: 'ai',
    question: '¿Qué puedo preguntarle al tutor de IA de Manos Abiertas?',
    answer: 'Puedes hacerle preguntas sobre cualquier tema de la web: cómo usar una IA, cómo redactar un correo, qué significa un término legal, cómo resolver un trámite o dudas de los cursos. Responde en tu idioma, de forma sencilla y sin registrarte.',
  },
  {
    id: 'faq-15',
    category: 'technical',
    question: '¿Se borran mis datos si cierro la página?',
    answer: 'Tu CV y tus respuestas se guardan solo en tu dispositivo (navegador), nunca en nuestros servidores. Puedes borrarlos tú mismo desde los ajustes o vaciando los datos del navegador. No pedimos registro ni correo electrónico.',
  },
  {
    id: 'faq-16',
    category: 'rights',
    question: 'Soy autónomo o busco regularizarme. ¿La guía de derechos me sirve?',
    answer: 'Sí. La guía cubre extranjería (arraigo, NIE, empadronamiento), trabajo (contratos, convenios, SMI), vivienda, salud y autónomos. Cada artículo enlaza a la fuente oficial para que confirmes tu caso concreto con la administración o un abogado.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  flag: string;
  role: string;
  story: string;
  avatar: string; // emoji
  rating: number;
  outcome?: string; // what they achieved
  timeline?: string; // how long it took
  section?: string; // which section helped most
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aminata',
    origin: 'Senegal',
    flag: '🇸🇳',
    role: 'Cuidadora de mayores',
    story: 'Llegué a Madrid sin saber usar el ordenador. Aprendí ChatGPT aquí y ahora lo uso para traducir documentos y escribir correos al colegio de mis hijos. Conseguí trabajo en 2 meses.',
    avatar: '👩🏿',
    rating: 5,
    outcome: 'Conseguió trabajo en 2 meses',
    timeline: '2 meses',
    section: 'Aprende IA',
  },
  {
    id: 't2',
    name: 'Mihai',
    origin: 'Rumanía',
    flag: '🇷🇴',
    role: 'Conductor y repartidor',
    story: 'Hice mi CV con la IA en 15 minutos. Lo descargué en PDF y lo envié por InfoJobs. Me llamaron al día siguiente. La sección de derechos me ayudó a entender mi contrato.',
    avatar: '👨🏼',
    rating: 5,
    outcome: 'Trabajo encontrado en 1 día',
    timeline: '1 día',
    section: 'Crea tu CV',
  },
  {
    id: 't3',
    name: 'Wei',
    origin: 'China',
    flag: '🇨🇳',
    role: 'Cocinera',
    story: 'El curso de Excel me cambió la vida. Ahora llevo la contabilidad del restaurante donde trabajo. Todo en español, paso a paso, con ejemplos prácticos. ¡Gracias Manos Abiertas!',
    avatar: '👩🏻',
    rating: 5,
    outcome: 'Ascendida a encargada',
    timeline: '3 meses',
    section: 'Office Pack',
  },
  {
    id: 't4',
    name: 'Rocío',
    origin: 'Colombia',
    flag: '🇨🇴',
    role: 'Auxiliar administrativa',
    story: 'Los recursos sobre extranjería me salvaron. Encontré el formulario EX-15 para mi NIE y los teléfonos de mi consulado. Todo verificado y en un solo lugar. Increíble.',
    avatar: '👩🏽',
    rating: 5,
    outcome: 'NIE tramitado sin abogado',
    timeline: '1 mes',
    section: 'Derechos y Ayudas',
  },
  {
    id: 't5',
    name: 'Oksana',
    origin: 'Ucrania',
    flag: '🇺🇦',
    role: 'Profesora de idiomas',
    story: 'Aprendí a usar Copilot y Gemini para preparar mis clases. La web está en ucraniano, lo que me hizo sentir en casa. El soporte para tantos idiomas es único.',
    avatar: '👩🏼‍🦰',
    rating: 5,
    outcome: 'Convalidó su título',
    timeline: '4 meses',
    section: 'Aprende IA',
  },
  {
    id: 't6',
    name: 'Abdul',
    origin: 'Marruecos',
    flag: '🇲🇦',
    role: 'Estudiante de FP',
    story: 'El curso de Office completo me dio la confianza para matricularme en FP de Informática. Los profesores no creían que supiera tanto Excel. ¡Lo aprendí todo gratis aquí!',
    avatar: '👨🏽',
    rating: 5,
    outcome: 'Matriculado en FP Informática',
    timeline: '6 meses',
    section: 'Office Pack',
  },
  {
    id: 't7',
    name: 'Fatima',
    origin: 'Marruecos',
    flag: '🇲🇦',
    role: 'Costurera',
    story: 'Con el conversor de moneda puedo calcular cuánto enviar a mi familia. El checklist de documentos me ayudó a no olvidar nada para renovar mi permiso. Muy práctica la web.',
    avatar: '👩🏽',
    rating: 5,
    outcome: 'Permiso renovado a tiempo',
    timeline: '3 semanas',
    section: 'Herramientas',
  },
  {
    id: 't8',
    name: 'Vladimir',
    origin: 'Venezuela',
    flag: '🇻🇪',
    role: 'Ingeniero electricista',
    story: 'La carta de presentación con IA me abrió puertas. Tras 5 meses buscando, conseguí entrevistas en 2 semanas. La plantilla profesional marcó la diferencia.',
    avatar: '👨🏻',
    rating: 5,
    outcome: '5 entrevistas en 2 semanas',
    timeline: '2 semanas',
    section: 'Crea tu CV',
  },
  {
    id: 't9',
    name: 'Priya',
    origin: 'India',
    flag: '🇮🇳',
    role: 'Técnica de laboratorio',
    story: 'El glosario legal me ayudó a entender términos que no conocía. Ahora sé qué es el IRPF, el convenio colectivo y mis derechos laborales. Me siento más segura.',
    avatar: '👩🏽',
    rating: 5,
    outcome: 'Conoce sus derechos laborales',
    timeline: '1 mes',
    section: 'Derechos y Ayudas',
  },
  {
    id: 't10',
    name: 'Karim',
    origin: 'Pakistán',
    flag: '🇵🇰',
    role: 'Dependiente de comercio',
    story: 'La web está en urdu, por fin una página que entiendo de verdad. Hice el CV con IA y el análisis ATS me dijo qué palabras le faltaban. Lo corregí y en dos semanas empecé a recibir llamadas.',
    avatar: '👨🏽',
    rating: 5,
    outcome: 'Primer trabajo estable en 2 semanas',
    timeline: '2 semanas',
    section: 'Crea tu CV',
  },
  {
    id: 't11',
    name: 'Ludmila',
    origin: 'Bulgaria',
    flag: '🇧🇬',
    role: 'Limpieza y cuidados',
    story: 'Nunca había usado un ordenador. Empecé por el curso de Office en búlgaro y luego aprendí a preguntarle al tutor de IA cualquier duda. Me siento mucho más segura para buscar trabajo.',
    avatar: '👩🏼',
    rating: 5,
    outcome: 'Terminó el curso de Word completo',
    timeline: '1 mes',
    section: 'Office Pack',
  },
  {
    id: 't12',
    name: 'Duygu',
    origin: 'Turquía',
    flag: '🇹🇷',
    role: 'Camarera',
    story: 'La guía de derechos en turco me explicó qué es el SMI y cómo leer mi nómina. Antes no entendía por qué me pagaban esa cantidad. Ahora reviso mi contrato antes de firmar.',
    avatar: '👩🏽',
    rating: 5,
    outcome: 'Aumento de sueldo reclamado con éxito',
    timeline: '3 semanas',
    section: 'Derechos y Ayudas',
  },
  {
    id: 't13',
    name: 'Marta',
    origin: 'Filipinas',
    flag: '🇵🇭',
    role: 'Enfermera',
    story: 'El análisis ATS fue un antes y un después. No sabía que las máquinas leen los CV antes que las personas. Ajusté mi CV a las ofertas de hospital y conseguí dos entrevistas la primera semana.',
    avatar: '👩🏽',
    rating: 5,
    outcome: '2 entrevistas de hospital en 1 semana',
    timeline: '1 semana',
    section: 'Crea tu CV',
  },
  {
    id: 't14',
    name: 'Issa',
    origin: 'Senegal',
    flag: '🇸🇳',
    role: 'Mensajero',
    story: 'Descubrí que la web también funciona en suajili. Uso el conversor de moneda cada día para enviar dinero a casa y el checklist de documentos para no perder plazos. Muy útil.',
    avatar: '👨🏿',
    rating: 5,
    outcome: 'Permiso renovado sin errores',
    timeline: '1 mes',
    section: 'Herramientas',
  },
  {
    id: 't15',
    name: 'Yasmina',
    origin: 'Argelia',
    flag: '🇩🇿',
    role: 'Costurera',
    story: 'El tutor de IA me ayudó a escribir mi primera solicitud de cita en la seguridad social. Paso a paso, en árabe, sin equivocarme. Ya no tengo miedo de los trámites.',
    avatar: '👩🏽',
    rating: 5,
    outcome: 'Cita de seguridad social conseguida',
    timeline: '2 semanas',
    section: 'Tutor de IA',
  },
];
