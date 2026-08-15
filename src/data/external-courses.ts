// Manos Abiertas - External Courses Database (100 courses)
// Real courses from Google Actívate, SEPE, Miríadax, Coursera, edX, etc.

export type CourseCategory =
  | 'digital-skills' | 'employment' | 'office' | 'ai-ml'
  | 'languages' | 'business' | 'health' | 'hospitality'
  | 'construction' | 'finance' | 'marketing' | 'programming'
  | 'soft-skills' | 'legal' | 'education';

export interface ExternalCourse {
  id: string;
  title: string;
  description: string;
  provider: string;
  providerType: 'government' | 'university' | 'platform' | 'ngo' | 'private';
  url: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: CourseCategory;
  language: string;
  certification: boolean;
  free: boolean;
  emoji: string;
  tags: string[];
  skills: string[];
}

export const COURSE_CATEGORIES: { value: CourseCategory; label: string; emoji: string; color: string }[] = [
  { value: 'digital-skills', label: 'Competencias Digitales', emoji: '💻', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' },
  { value: 'employment', label: 'Empleo', emoji: '💼', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' },
  { value: 'office', label: 'Ofimática', emoji: '📊', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  { value: 'ai-ml', label: 'Inteligencia Artificial', emoji: '🤖', color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300' },
  { value: 'languages', label: 'Idiomas', emoji: '🗣️', color: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300' },
  { value: 'business', label: 'Empresa', emoji: '🏢', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' },
  { value: 'health', label: 'Salud', emoji: '🏥', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' },
  { value: 'hospitality', label: 'Hostelería', emoji: '🍽️', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300' },
  { value: 'construction', label: 'Construcción', emoji: '🏗️', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300' },
  { value: 'finance', label: 'Finanzas', emoji: '💰', color: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' },
  { value: 'marketing', label: 'Marketing', emoji: '📈', color: 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300' },
  { value: 'programming', label: 'Programación', emoji: '⌨️', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300' },
  { value: 'soft-skills', label: 'Habilidades Blandas', emoji: '🤝', color: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300' },
  { value: 'legal', label: 'Legal', emoji: '⚖️', color: 'bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300' },
  { value: 'education', label: 'Educación', emoji: '🎓', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' },
];

const g = (id: string, title: string, desc: string, url: string, dur: string, level: ExternalCourse['level'], cat: CourseCategory, skills: string[], emoji = '📘'): ExternalCourse => ({
  id, title, description: desc, provider: 'Google Actívate', providerType: 'platform', url, duration: dur, level, category: cat, language: 'Español', certification: true, free: true, emoji, tags: [cat], skills,
});

const s = (id: string, title: string, desc: string, url: string, dur: string, level: ExternalCourse['level'], cat: CourseCategory, skills: string[], emoji = '📋'): ExternalCourse => ({
  id, title, description: desc, provider: 'SEPE / Fundae', providerType: 'government', url, duration: dur, level, category: cat, language: 'Español', certification: true, free: true, emoji, tags: [cat], skills,
});

const m = (id: string, title: string, desc: string, url: string, dur: string, level: ExternalCourse['level'], cat: CourseCategory, skills: string[], emoji = '🎓'): ExternalCourse => ({
  id, title, description: desc, provider: 'Coursera', providerType: 'university', url, duration: dur, level, category: cat, language: 'Español', certification: true, free: true, emoji, tags: [cat], skills,
});

const c = (id: string, title: string, desc: string, url: string, dur: string, level: ExternalCourse['level'], cat: CourseCategory, skills: string[], provider: string, lang = 'Español', emoji = '🌐'): ExternalCourse => ({
  id, title, description: desc, provider, providerType: 'platform', url, duration: dur, level, category: cat, language: lang, certification: true, free: true, emoji, tags: [cat], skills,
});

const a = (id: string, title: string, desc: string, url: string, dur: string, level: ExternalCourse['level'], cat: CourseCategory, skills: string[], emoji = '📚'): ExternalCourse => ({
  id, title, description: desc, provider: 'AulaFácil', providerType: 'platform', url, duration: dur, level, category: cat, language: 'Español', certification: false, free: true, emoji, tags: [cat], skills,
});

export const EXTERNAL_COURSES: ExternalCourse[] = [
  // === GOOGLE ACTÍVATE (15) ===
  g('gc-1', 'Fundamentos del Marketing Digital', 'Aprende los conceptos básicos del marketing digital: SEO, SEM, redes sociales, email marketing y analítica.', 'https://learndigital.withgoogle.com/activate/course/digital-marketing', '40 horas', 'beginner', 'marketing', ['SEO', 'SEM', 'Redes sociales', 'Email marketing', 'Google Analytics'], '📈'),
  g('gc-2', 'Análisis de Datos con Google', 'Domina Google Analytics 4 y aprende a tomar decisiones basadas en datos.', 'https://learndigital.withgoogle.com/activate/course/data-analytics', '30 horas', 'intermediate', 'digital-skills', ['Google Analytics', 'Interpretación de datos', 'Informes', 'KPIs'], '📊'),
  g('gc-3', 'Desarrollo Web Básico', 'Introducción al desarrollo web: HTML, CSS y JavaScript desde cero.', 'https://learndigital.withgoogle.com/activate/course/web-development', '20 horas', 'beginner', 'programming', ['HTML', 'CSS', 'JavaScript básico'], '🌐'),
  g('gc-4', 'Comercio Electrónico', 'Aprende a crear y gestionar una tienda online, pagos y logística.', 'https://learndigital.withgoogle.com/activate/course/ecommerce', '15 horas', 'beginner', 'business', ['E-commerce', 'Google Merchant', 'Pasarelas de pago'], '🛒'),
  g('gc-5', 'Productividad con Google Workspace', 'Maximiza tu productividad con Gmail, Docs, Sheets, Slides y Drive.', 'https://learndigital.withgoogle.com/activate/course/productivity', '10 horas', 'beginner', 'office', ['Gmail', 'Google Docs', 'Google Sheets', 'Google Drive'], '📋'),
  g('gc-6', 'Cloud Computing Fundamentos', 'Conceptos básicos de la nube: IaaS, PaaS, SaaS y Google Cloud.', 'https://learndigital.withgoogle.com/activate/course/cloud', '15 horas', 'beginner', 'digital-skills', ['Cloud computing', 'Google Cloud', 'Almacenamiento en la nube'], '☁️'),
  g('gc-7', 'Introducción a la Inteligencia Artificial', 'Comprende qué es la IA, cómo funciona y sus aplicaciones prácticas.', 'https://learndigital.withgoogle.com/activate/course/ai', '15 horas', 'beginner', 'ai-ml', ['IA conceptual', 'Machine Learning', 'Aplicaciones de IA'], '🤖'),
  g('gc-8', 'Marketing de Contenidos', 'Crea contenido que atrae y convierte: blogs, video, copywriting.', 'https://learndigital.withgoogle.com/activate/course/content-marketing', '20 horas', 'intermediate', 'marketing', ['Copywriting', 'Blogging', 'Estrategia de contenido'], '✍️'),
  g('gc-9', 'Redes Sociales para Empresas', 'Gestiona redes sociales profesionalmente: estrategia, contenido y métricas.', 'https://learndigital.withgoogle.com/activate/course/social-media', '15 horas', 'beginner', 'marketing', ['Instagram', 'Facebook', 'LinkedIn', 'Twitter'], '📱'),
  g('gc-10', 'Competencias Digitales para el Empleo', 'Habilidades digitales esenciales: búsqueda de empleo online, identidad digital, productividad.', 'https://learndigital.withgoogle.com/activate/course/digital-skills', '20 horas', 'beginner', 'employment', ['Búsqueda de empleo', 'Email profesional', 'Identidad digital'], '💼'),
  g('gc-11', 'Android Development Básico', 'Crea tu primera aplicación Android con Kotlin.', 'https://learndigital.withgoogle.com/activate/course/android', '30 horas', 'intermediate', 'programming', ['Kotlin', 'Android Studio', 'UI móvil'], '📱'),
  g('gc-12', 'Introducción a Python', 'Aprende programación con Python: sintaxis, variables, bucles y funciones.', 'https://learndigital.withgoogle.com/activate/course/python', '20 horas', 'beginner', 'programming', ['Python', 'Sintaxis', 'Funciones', 'Bucles'], '🐍'),
  g('gc-13', 'Seguridad Digital', 'Protege tu información online: contraseñas, phishing, privacidad.', 'https://learndigital.withgoogle.com/activate/course/online-safety', '5 horas', 'beginner', 'digital-skills', ['Seguridad online', 'Contraseñas', 'Phishing'], '🔒'),
  g('gc-14', 'Google Ads para Principiantes', 'Crea campañas publicitarias en Google: búsqueda, display y shopping.', 'https://learndigital.withgoogle.com/activate/course/google-ads', '15 horas', 'intermediate', 'marketing', ['Google Ads', 'PPC', 'Campañas publicitarias'], '🎯'),
  g('gc-15', 'Google My Business', 'Gestiona la presencia de tu negocio en Google Maps y Búsqueda.', 'https://learndigital.withgoogle.com/activate/course/google-my-business', '5 horas', 'beginner', 'business', ['Google Business Profile', 'SEO local', 'Reseñas'], '📍'),

  // === SEPE / FUNDAE (15) ===
  s('sp-1', 'Ofimática Básica: Word, Excel, PowerPoint', 'Domina las herramientas ofimáticas más demandadas: crear documentos, hojas de cálculo y presentaciones.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '60 horas', 'beginner', 'office', ['Word', 'Excel', 'PowerPoint', 'Ofimática'], '📊'),
  s('sp-2', 'Competencias Digitales Básicas', 'Alfabetización digital: uso del ordenador, internet, email y seguridad.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '50 horas', 'beginner', 'digital-skills', ['Navegación web', 'Email', 'Seguridad digital'], '💻'),
  s('sp-3', 'Búsqueda Activa de Empleo 2.0', 'Técnicas modernas de búsqueda: CV digital, LinkedIn, portales de empleo.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '30 horas', 'beginner', 'employment', ['CV digital', 'LinkedIn', 'Entrevistas', 'InfoJobs'], '💼'),
  s('sp-4', 'Prevención de Riesgos Laborales (Básico)', 'Conceptos básicos de seguridad y salud en el trabajo.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '50 horas', 'beginner', 'health', ['PRL', 'Seguridad laboral', 'Riesgos'], '🦺'),
  s('sp-5', 'Atención al Cliente', 'Técnicas de atención y comunicación con clientes: teléfono, presencial y online.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '40 horas', 'beginner', 'soft-skills', ['Comunicación', 'Empatía', 'Resolución de conflictos'], '🤝'),
  s('sp-6', 'Inglés Profesional Básico', 'Inglés para el entorno laboral: presentaciones, emails, reuniones.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '80 horas', 'beginner', 'languages', ['Inglés profesional', 'Emailing', 'Conversación'], '🇬🇧'),
  s('sp-7', 'Excel Avanzado: Fórmulas y Macros', 'Lleva Excel al siguiente nivel: VLOOKUP, tablas dinámicas, macros VBA.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '60 horas', 'advanced', 'office', ['Excel avanzado', 'BUSCARV', 'Macros', 'VBA'], '📈'),
  s('sp-8', 'Gestión de Redes Sociales', 'Planificación, creación y análisis de contenido en redes sociales.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '50 horas', 'intermediate', 'marketing', ['Social media', 'Contenido', 'Analítica social'], '📱'),
  s('sp-9', 'Manipulación de Alimentos', 'Higiene alimentaria para hostelería: APPCC, contaminación, conservación.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '10 horas', 'beginner', 'hospitality', ['Higiene alimentaria', 'APPCC', 'Seguridad alimentaria'], '🍽️'),
  s('sp-10', 'Carnet de Carretillero', 'Formación para operar carretillas elevadoras en almacén y logística.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '20 horas', 'beginner', 'construction', ['Carretilla elevadora', 'Logística', 'Almacén'], '🚛'),
  s('sp-11', 'Atención Sociosanitaria a Personas Dependientes', 'Cuidados básicos a personas mayores y dependientes en el domicilio.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '200 horas', 'intermediate', 'health', ['Cuidados', 'Personas mayores', 'Higiene', 'Alimentación'], '👵'),
  s('sp-12', 'Mecanografía y Digitación', 'Mejora tu velocidad y precisión escribiendo en el teclado.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '30 horas', 'beginner', 'office', ['Mecanografía', 'Velocidad', 'Precisión'], '⌨️'),
  s('sp-13', 'Creación de Páginas Web con WordPress', 'Crea y gestiona sitios web con WordPress sin programar.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '60 horas', 'beginner', 'programming', ['WordPress', 'CMS', 'Diseño web'], '🌐'),
  s('sp-14', 'Finanzas Personales y Ahorro', 'Gestión del dinero, presupuesto familiar, ahorro y inversión básica.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '20 horas', 'beginner', 'finance', ['Presupuesto', 'Ahorro', 'Inversión básica'], '💰'),
  s('sp-15', 'Habilidades de Comunicación Efectiva', 'Comunicación asertiva, escucha activa y presentación en público.', 'https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion', '30 horas', 'beginner', 'soft-skills', ['Comunicación', 'Escucha activa', 'Oratoria'], '🗣️'),

  // === MIRÍADX (10) ===
  m('mx-1', 'Iniciación a la Contabilidad Financiera', 'Conceptos básicos de contabilidad: balance, cuenta de resultados, IVA.', 'https://www.coursera.org/learn/contabilidad-financiera', '6 semanas', 'beginner', 'finance', ['Contabilidad', 'Balance', 'IVA'], '📊'),
  m('mx-2', 'Aprende a Aprender: Técnicas de Estudio', 'Estrategias de aprendizaje, memoria, concentración y motivación.', 'https://www.coursera.org/learn/learning-how-to-learn', '4 semanas', 'beginner', 'education', ['Técnicas de estudio', 'Memoria', 'Concentración'], '🧠'),
  m('mx-3', 'Introducción al Big Data', 'Fundamentos del análisis de grandes volúmenes de datos.', 'https://www.coursera.org/learn/big-data-introduction', '5 semanas', 'intermediate', 'digital-skills', ['Big Data', 'Análisis de datos', 'Estadística'], '📦'),
  m('mx-4', 'Gestión de Proyectos con Metodologías Ágiles', 'Scrum, Kanban y gestión ágil de proyectos.', 'https://www.coursera.org/learn/agile-project-management', '4 semanas', 'intermediate', 'business', ['Scrum', 'Kanban', 'Gestión de proyectos'], '📋'),
  m('mx-5', 'Educación Financiera para No Financieros', 'Comprende estados financieros, flujos de caja y rentabilidad.', 'https://www.coursera.org/learn/finanzas-personales', '4 semanas', 'beginner', 'finance', ['Estados financieros', 'Flujo de caja', 'Rentabilidad'], '💰'),
  m('mx-6', 'Tecnologías para la Inclusión Digital', 'Herramientas y estrategias para la inclusión tecnológica.', 'https://www.coursera.org/learn/tecnologia-accesible-para-la-inclusion', '3 semanas', 'beginner', 'digital-skills', ['Inclusión digital', 'Accesibilidad', 'Tecnología social'], '🤝'),
  m('mx-7', 'Marca Personal y Empleabilidad', 'Construye tu marca personal para mejorar tu empleabilidad.', 'https://www.coursera.org/learn/desarrollo-marca-personal', '4 semanas', 'beginner', 'employment', ['Marca personal', 'LinkedIn', 'Networking'], '👤'),
  m('mx-8', 'Introducción a la Ciberseguridad', 'Protege tu identidad digital y comprende las amenazas cibernéticas.', 'https://www.coursera.org/learn/introduccin-a-la-ciberseguridad-para-usuarios', '5 semanas', 'beginner', 'digital-skills', ['Ciberseguridad', 'Privacidad', 'Amenazas digitales'], '🛡️'),
  m('mx-9', 'Sostenibilidad y Economía Circular', 'Conceptos de sostenibilidad, ODS y economía circular aplicada.', 'https://www.coursera.org/learn/abc-sostenibilidad', '3 semanas', 'beginner', 'business', ['Sostenibilidad', 'ODS', 'Economía circular'], '🌱'),
  m('mx-10', 'Competencias Docentes Digitales', 'Herramientas digitales para la enseñanza y el e-learning.', 'https://www.coursera.org/learn/tecnologas-para-la-innovacin-educativa', '5 semanas', 'intermediate', 'education', ['E-learning', 'Herramientas educativas', 'Docencia digital'], '🎓'),

  // === COURSERA (10) ===
  c('co-1', 'Excel Skills for Business', 'Domina Excel para negocios: desde fórmulas básicas hasta dashboards avanzados.', 'https://www.coursera.org/specializations/excel', '6 meses', 'beginner', 'office', ['Excel', 'Dashboards', 'Fórmulas', 'Análisis de datos'], 'Macquarie University', 'Inglés', '📊'),
  c('co-2', 'Google Data Analytics', 'Conviértete en analista de datos: SQL, R, Tableau, visualización.', 'https://www.coursera.org/professional-certificates/google-data-analytics', '6 meses', 'beginner', 'digital-skills', ['Análisis de datos', 'SQL', 'Tableau', 'R'], 'Google', 'Inglés', '📈'),
  c('co-3', 'Learning How to Learn', 'Técnicas potentes para aprender cualquier materia de forma eficaz.', 'https://www.coursera.org/learn/learning-how-to-learn', '4 semanas', 'beginner', 'education', ['Aprendizaje', 'Memoria', 'Enfoque'], 'McMaster University', 'Inglés', '🧠'),
  c('co-4', 'Financial Markets', 'Comprende los mercados financieros globales: acciones, bonos, seguros.', 'https://www.coursera.org/learn/financial-markets', '7 semanas', 'beginner', 'finance', ['Mercados financieros', 'Inversiones', 'Banca'], 'Yale University', 'Inglés', '💹'),
  c('co-5', 'Programming for Everybody (Python)', 'Aprende Python desde cero, sin experiencia previa.', 'https://www.coursera.org/learn/python', '8 semanas', 'beginner', 'programming', ['Python', 'Programación básica', 'Variables'], 'University of Michigan', 'Inglés', '🐍'),
  c('co-6', 'English for Career Development', 'Inglés para la búsqueda de empleo: CV, cartas, entrevistas en inglés.', 'https://www.coursera.org/learn/careerdevelopment', '5 semanas', 'beginner', 'languages', ['Inglés', 'CV en inglés', 'Entrevistas'], 'University of Pennsylvania', 'Inglés', '🇬🇧'),
  c('co-7', 'AI For Everyone', 'Comprende la IA sin programar: qué es, qué puede hacer y su impacto.', 'https://www.coursera.org/learn/ai-for-everyone', '6 semanas', 'beginner', 'ai-ml', ['IA conceptual', 'Ética de IA', 'Aplicaciones'], 'DeepLearning.AI', 'Inglés', '🤖'),
  c('co-8', 'Social Media Marketing', 'Estrategia de marketing en redes sociales: contenido, métricas, publicidad.', 'https://www.coursera.org/learn/social-media-marketing', '5 semanas', 'beginner', 'marketing', ['Social media', 'Contenido', 'Analítica'], 'Meta', 'Inglés', '📱'),
  c('co-9', 'Successful Negotiation', 'Técnicas de negociación eficaz en el trabajo y la vida.', 'https://www.coursera.org/learn/negotiation', '9 semanas', 'beginner', 'soft-skills', ['Negociación', 'Comunicación', 'Resolución de conflictos'], 'University of Michigan', 'Inglés', '🤝'),
  c('co-10', 'First Steps in TensorFlow', 'Introducción al machine learning con TensorFlow.', 'https://www.coursera.org/learn/introduction-tensorflow', '4 semanas', 'intermediate', 'ai-ml', ['TensorFlow', 'Machine Learning', 'Redes neuronales'], 'DeepLearning.AI', 'Inglés', '🧠'),

  // === EDX (5) ===
  c('ex-1', 'CS50x: Introduction to Computer Science', 'El curso de introducción a la programación más famoso del mundo.', 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x', '12 semanas', 'beginner', 'programming', ['C', 'Python', 'SQL', 'HTML/CSS'], 'Harvard University', 'Inglés', '💻'),
  c('ex-2', 'Data Science: R Basics', 'Fundamentos de R para ciencia de datos.', 'https://www.edx.org/course/data-science-r-basics', '8 semanas', 'beginner', 'digital-skills', ['R', 'Estadística', 'Visualización'], 'Harvard University', 'Inglés', '📊'),
  c('ex-3', 'Principles of Economics', 'Principios de microeconomía y macroeconomía.', 'https://www.edx.org/course/principles-of-economics', '8 semanas', 'beginner', 'finance', ['Microeconomía', 'Macroeconomía', 'Mercados'], 'MIT', 'Inglés', '💹'),
  c('ex-4', 'English Grammar and Style', 'Mejora tu gramática y estilo en inglés escrito.', 'https://www.edx.org/learn/grammar/the-university-of-queensland-english-grammar-and-style', '8 semanas', 'intermediate', 'languages', ['Gramática inglesa', 'Escritura', 'Estilo'], 'UQx', 'Inglés', '✍️'),
  c('ex-5', 'Introduction to Python Programming', 'Python desde cero: sintaxis, estructuras de datos, funciones.', 'https://www.edx.org/learn/python', '5 semanas', 'beginner', 'programming', ['Python', 'Programación', 'Algoritmos'], 'Microsoft', 'Inglés', '🐍'),

  // === UNED ABIERTA (5) ===
  c('un-1', 'Introducción a la Estadística Básica', 'Conceptos fundamentales de estadística descriptiva e inferencia.', 'https://ocw.cursosvirtuales.uned.es', '8 semanas', 'beginner', 'digital-skills', ['Estadística', 'Probabilidad', 'Media, mediana'], 'UNED', 'Español', '📊'),
  c('un-2', 'Historia del Arte Español', 'Recorrido por el arte español desde la Edad Media hasta el siglo XX.', 'https://ocw.cursosvirtuales.uned.es', '10 semanas', 'beginner', 'education', ['Arte español', 'Historia', 'Cultura'], 'UNED', 'Español', '🎨'),
  c('un-3', 'Derecho Constitucional Español', 'Estructura del Estado español, Constitución y derechos fundamentales.', 'https://ocw.cursosvirtuales.uned.es', '12 semanas', 'intermediate', 'legal', ['Constitución', 'Derechos', 'Estado español'], 'UNED', 'Español', '⚖️'),
  c('un-4', 'Geografía de España', 'Geografía física y humana de las regiones españolas.', 'https://ocw.cursosvirtuales.uned.es', '8 semanas', 'beginner', 'education', ['Geografía', 'España', 'Comunidades autónomas'], 'UNED', 'Español', '🗺️'),
  c('un-5', 'Psicología del Aprendizaje', 'Teorías del aprendizaje y su aplicación en la educación.', 'https://ocw.cursosvirtuales.uned.es', '6 semanas', 'intermediate', 'education', ['Aprendizaje', 'Psicología', 'Educación'], 'UNED', 'Español', '🧠'),

  // === AULAFÁCIL (10) ===
  a('af-1', 'Curso de Excel 2010', 'Excel desde cero: celdas, fórmulas, gráficos, impresión.', 'https://www.aulafacil.com/cursos/excel-word-powerpoint-access/excel-2010-t904', 'Self-paced', 'beginner', 'office', ['Excel', 'Fórmulas', 'Gráficos'], '📊'),
  a('af-2', 'Curso de Word 2010', 'Crea documentos profesionales: formato, tablas, imágenes, estilos.', 'https://www.aulafacil.com/cursos/excel-word-powerpoint-access/word-2010-t2511', 'Self-paced', 'beginner', 'office', ['Word', 'Formateo', 'Tablas'], '📄'),
  a('af-3', 'Curso de PowerPoint 2010', 'Diseña presentaciones atractivas: diapositivas, animaciones, transiciones.', 'https://www.aulafacil.com/cursos/excel-word-powerpoint-access/powerpoint-2010-t2442', 'Self-paced', 'beginner', 'office', ['PowerPoint', 'Presentaciones', 'Animaciones'], '📽️'),
  a('af-4', 'Curso de Inglés Básico', 'Inglés para principiantes: gramática, vocabulario, pronunciación.', 'https://www.aulafacil.com/cursos/ingles/a1-t1135', 'Self-paced', 'beginner', 'languages', ['Inglés', 'Gramática', 'Vocabulario'], '🇬🇧'),
  a('af-5', 'Curso de Español para Extranjeros', 'Aprende español: gramática, vocabulario y cultura española.', 'https://www.aulafacil.com/cursos/espanol/gratis-t3269', 'Self-paced', 'beginner', 'languages', ['Español', 'Gramática', 'Vocabulario'], '🇪🇸'),
  a('af-6', 'Curso de Contabilidad Básica', 'Fundamentos de contabilidad: asientos, balance, cuenta de resultados.', 'https://www.aulafacil.com/cursos/contabilidad/basica-logica-contable-t3925', 'Self-paced', 'beginner', 'finance', ['Contabilidad', 'Balance', 'Asientos'], '📊'),
  a('af-7', 'Curso de Marketing Digital', 'Introducción al marketing online: SEO, redes sociales, email.', 'https://www.aulafacil.com/cursos/marketing-digital/negocios-en-internet-marketing-digital-y-comercio-electronico-t3982', 'Self-paced', 'beginner', 'marketing', ['SEO', 'Redes sociales', 'Email marketing'], '📈'),
  a('af-8', 'Curso de Photoshop Básico', 'Edición de imágenes con Photoshop: capas, retoque, composición.', 'https://www.aulafacil.com/cursos/diseno-grafico-cad/photoshop-cs-t849', 'Self-paced', 'beginner', 'digital-skills', ['Photoshop', 'Edición de imágenes', 'Capas'], '🎨'),
  c('af-9', 'Curso de Mecanografía', 'Aprende a escribir rápido y sin mirar el teclado.', 'https://www.mecanografia-online.com/', 'Self-paced', 'beginner', 'office', ['Mecanografía', 'Velocidad', 'Precisión'], 'Mecanografía Online', 'Español', '⌨️'),
  a('af-10', 'Curso de Access 2010', 'Bases de datos con Access: tablas, consultas, formularios.', 'https://www.aulafacil.com/cursos/excel-word-powerpoint-access/access-2000-basico-t846', 'Self-paced', 'intermediate', 'office', ['Access', 'Bases de datos', 'Consultas'], '🗄️'),

  // === KHAN ACADEMY (5) ===
  c('ka-1', 'Matemáticas Básicas', 'Operaciones fundamentales: suma, resta, multiplicación, división, fracciones.', 'https://es.khanacademy.org/math/arithmetic', 'Self-paced', 'beginner', 'education', ['Matemáticas', 'Aritmética', 'Fracciones'], 'Khan Academy', 'Español', '🔢'),
  c('ka-2', 'Álgebra Básica', 'Ecuaciones, variables y pensamiento algebraico.', 'https://es.khanacademy.org/math/algebra', 'Self-paced', 'beginner', 'education', ['Álgebra', 'Ecuaciones', 'Variables'], 'Khan Academy', 'Español', '📐'),
  c('ka-3', 'Estadística y Probabilidad', 'Conceptos de estadística descriptiva, probabilidad e inferencia.', 'https://es.khanacademy.org/math/statistics-probability', 'Self-paced', 'intermediate', 'digital-skills', ['Estadística', 'Probabilidad', 'Análisis'], 'Khan Academy', 'Español', '📊'),
  c('ka-4', 'Computación: Programación', 'Introducción a la programación con JavaScript y dibujo.', 'https://es.khanacademy.org/computing/computer-programming', 'Self-paced', 'beginner', 'programming', ['JavaScript', 'Programación', 'Algoritmos'], 'Khan Academy', 'Español', '💻'),
  c('ka-5', 'Finanzas Personales', 'Presupuesto, ahorro, crédito, inversiones y planificación financiera.', 'https://es.khanacademy.org/college-careers-more/personal-finance', 'Self-paced', 'beginner', 'finance', ['Presupuesto', 'Ahorro', 'Crédito', 'Inversión'], 'Khan Academy', 'Español', '💰'),

  // === CISCO NETWORKING ACADEMY (5) ===
  c('ci-1', 'Introduction to Cybersecurity', 'Fundamentos de ciberseguridad: amenazas, ataques y defensas.', 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity', '6 horas', 'beginner', 'digital-skills', ['Ciberseguridad', 'Amenazas', 'Defensas'], 'Cisco', 'Español', '🛡️'),
  c('ci-2', 'Cybersecurity Essentials', 'Conceptos esenciales de seguridad de redes y sistemas.', 'https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials', '30 horas', 'intermediate', 'digital-skills', ['Seguridad de redes', 'Criptografía', 'Firewalls'], 'Cisco', 'Inglés', '🔐'),
  c('ci-3', 'Introduction to IoT', 'Internet de las Cosas: conceptos, arquitectura y aplicaciones.', 'https://www.netacad.com/courses/iot/introduction-iot', '20 horas', 'beginner', 'digital-skills', ['IoT', 'Sensores', 'Conectividad'], 'Cisco', 'Español', '📡'),
  c('ci-4', 'Python Essentials 1', 'Programación en Python: sintaxis, estructuras de datos, algoritmos.', 'https://www.netacad.com/courses/programming/python-essentials-1', '70 horas', 'beginner', 'programming', ['Python', 'Programación', 'Algoritmos'], 'Cisco', 'Inglés', '🐍'),
  c('ci-5', 'Networking Essentials', 'Fundamentos de redes: TCP/IP, routers, switches, protocolos.', 'https://www.netacad.com/courses/networking/networking-essentials', '70 horas', 'beginner', 'digital-skills', ['Redes', 'TCP/IP', 'Routers'], 'Cisco', 'Inglés', '🌐'),

  // === FREECODECAMP (5) ===
  c('fc-1', 'Responsive Web Design', 'HTML, CSS, Flexbox, Grid y diseño web responsive.', 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', '300 horas', 'beginner', 'programming', ['HTML', 'CSS', 'Flexbox', 'Responsive design'], 'freeCodeCamp', 'Inglés', '🌐'),
  c('fc-2', 'JavaScript Algorithms', 'JavaScript moderno, ES6, algoritmos y estructuras de datos.', 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', '300 horas', 'beginner', 'programming', ['JavaScript', 'ES6', 'Algoritmos', 'Data structures'], 'freeCodeCamp', 'Inglés', '🟨'),
  c('fc-3', 'Front End Development Libraries', 'React, Redux, Bootstrap, jQuery, Sass.', 'https://www.freecodecamp.org/learn/front-end-development-libraries/', '300 horas', 'intermediate', 'programming', ['React', 'Redux', 'Bootstrap', 'Sass'], 'freeCodeCamp', 'Inglés', '⚛️'),
  c('fc-4', 'Data Analysis with Python', 'Análisis de datos con Python: NumPy, Pandas, Matplotlib, Seaborn.', 'https://www.freecodecamp.org/learn/data-analysis-with-python/', '300 horas', 'intermediate', 'ai-ml', ['Python', 'NumPy', 'Pandas', 'Matplotlib'], 'freeCodeCamp', 'Inglés', '📊'),
  c('fc-5', 'Machine Learning with Python', 'Introducción al ML: regresión, clasificación, redes neuronales.', 'https://www.freecodecamp.org/learn/machine-learning-with-python/', '300 horas', 'intermediate', 'ai-ml', ['Machine Learning', 'TensorFlow', 'Regresión', 'Clasificación'], 'freeCodeCamp', 'Inglés', '🤖'),

  // === MICROSOFT LEARN (5) ===
  c('ms-1', 'Microsoft Excel - Formatos y Fórmulas', 'Formateo de celdas, fórmulas básicas y gráficos en Excel.', 'https://support.microsoft.com/es-es/excel/get-started/overview-of-formulas-in-excel', '4 horas', 'beginner', 'office', ['Excel', 'Formatos', 'Fórmulas'], 'Microsoft', 'Español', '📊'),
  c('ms-2', 'Azure Fundamentos (AZ-900)', 'Conceptos de cloud computing y servicios de Microsoft Azure.', 'https://learn.microsoft.com/es-es/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/', '6 horas', 'beginner', 'digital-skills', ['Azure', 'Cloud computing', 'IaaS', 'PaaS'], 'Microsoft', 'Español', '☁️'),
  c('ms-3', 'Power BI para Análisis de Datos', 'Crea dashboards interactivos y informes con Power BI.', 'https://learn.microsoft.com/es-es/training/powerplatform/power-bi', '8 horas', 'beginner', 'digital-skills', ['Power BI', 'Dashboards', 'Visualización'], 'Microsoft', 'Español', '📈'),
  c('ms-4', 'Introducción a GitHub', 'Control de versiones con Git y GitHub: repositorios, commits, ramas.', 'https://learn.microsoft.com/es-es/training/github/', '3 horas', 'beginner', 'programming', ['Git', 'GitHub', 'Control de versiones'], 'Microsoft', 'Español', '🐙'),
  c('ms-5', 'Microsoft 365 Fundamentos', 'Conceptos de productividad con Microsoft 365: Teams, SharePoint, OneDrive.', 'https://learn.microsoft.com/es-es/training/m365', '6 horas', 'beginner', 'office', ['Microsoft 365', 'Teams', 'SharePoint', 'OneDrive'], 'Microsoft', 'Español', '🏢'),

  // === AWS SKILL BUILDER (3) ===
  c('aw-1', 'AWS Cloud Practitioner Essentials', 'Conceptos fundamentales de AWS Cloud: servicios, precios, arquitectura.', 'https://aws.amazon.com/training/learn-about/cloud-practitioner/', '6 horas', 'beginner', 'digital-skills', ['AWS', 'Cloud computing', 'Servicios cloud'], 'Amazon Web Services', 'Inglés', '☁️'),
  c('aw-2', 'Machine Learning Foundations', 'Introducción al ML en AWS: SageMaker, modelos, entrenamiento.', 'https://aws.amazon.com/training/learn-about/machine-learning/', '8 horas', 'intermediate', 'ai-ml', ['AWS SageMaker', 'Machine Learning', 'Modelos'], 'Amazon Web Services', 'Inglés', '🤖'),
  c('aw-3', 'AWS Cloud Quest: Cloud Practitioner', 'Aprende AWS de forma gamificada con misiones interactivas.', 'https://explore.skillbuilder.aws/learn/courses/11458/aws-cloud-quest-cloud-practitioner', '20 horas', 'beginner', 'digital-skills', ['AWS', 'Cloud', 'Gamificación'], 'Amazon Web Services', 'Inglés', '🎮'),

  // === INSTITUTO CERVANTES (3) ===
  c('ic-1', 'Español para Extranjeros (A1-A2)', 'Curso de español para principiantes: gramática, vocabulario, conversación.', 'https://cervantes.es', 'Self-paced', 'beginner', 'languages', ['Español', 'Gramática', 'Conversación'], 'Instituto Cervantes', 'Español', '🇪🇸'),
  c('ic-2', 'DELE B1: Preparación', 'Prepárate para el examen oficial de español DELE nivel B1.', 'https://cervantes.es', '40 horas', 'intermediate', 'languages', ['DELE B1', 'Español intermedio', 'Examen oficial'], 'Instituto Cervantes', 'Español', '📜'),
  c('ic-3', 'Cultura Española Contemporánea', 'Cultura, historia y sociedad española del siglo XX y XXI.', 'https://cervantes.es', '20 horas', 'intermediate', 'education', ['Cultura española', 'Historia', 'Sociedad'], 'Instituto Cervantes', 'Español', '🎨'),

  // === ADDITIONAL COURSES (19) ===
  c('ad-1', 'Hostelería: Servicio de Restaurante', 'Técnicas de servicio en restaurante: atención, emplatado, factura.', 'https://www.sepe.es', '40 horas', 'beginner', 'hospitality', ['Servicio de mesa', 'Atención al cliente', 'Emplatado'], 'Fundae', 'Español', '🍽️'),
  c('ad-2', 'Cocina Profesional Básica', 'Fundamentos de cocina: técnicas, higiene, manipulación de alimentos.', 'https://www.sepe.es', '60 horas', 'beginner', 'hospitality', ['Cocina', 'Técnicas culinarias', 'Higiene alimentaria'], 'Fundae', 'Español', '👨‍🍳'),
  c('ad-3', 'Construcción: Albañilería Básica', 'Técnicas básicas de albañilería: muros, revestimientos, materiales.', 'https://www.sepe.es', '50 horas', 'beginner', 'construction', ['Albañilería', 'Muros', 'Revestimientos'], 'Fundae', 'Español', '🧱'),
  c('ad-4', 'Fontanería Básica', 'Instalaciones de fontanería: tuberías, grifería, reparaciones.', 'https://www.sepe.es', '40 horas', 'beginner', 'construction', ['Fontanería', 'Tuberías', 'Reparaciones'], 'Fundae', 'Español', '🔧'),
  c('ad-5', 'Electricidad Básica', 'Fundamentos de electricidad: circuitos, instalaciones, seguridad.', 'https://www.sepe.es', '50 horas', 'beginner', 'construction', ['Electricidad', 'Circuitos', 'Instalaciones eléctricas'], 'Fundae', 'Español', '⚡'),
  c('ad-6', 'Cuidados de Enfermería Básicos', 'Atención básica de enfermería: higiene, movilización, constantes.', 'https://www.sepe.es', '60 horas', 'beginner', 'health', ['Enfermería', 'Cuidados básicos', 'Higiene'], 'Fundae', 'Español', '💉'),
  c('ad-7', 'Primeros Auxilios y RCP', 'Soporte vital básico: RCP, hemorragias, traumatismos, obstrucción vía aérea.', 'https://www.cruzroja.es', '10 horas', 'beginner', 'health', ['Primeros auxilios', 'RCP', 'Emergencias'], 'Cruz Roja', 'Español', '🚑'),
  c('ad-8', 'Gestión del Tiempo y Productividad', 'Técnicas para gestionar tu tiempo: prioridades, delegación, enfoque.', 'https://www.coursera.org', '3 horas', 'beginner', 'soft-skills', ['Gestión del tiempo', 'Productividad', 'Prioridades'], 'Coursera', 'Inglés', '⏰'),
  c('ad-9', 'Liderazgo y Gestión de Equipos', 'Habilidades de liderazgo: motivación, feedback, resolución de conflictos.', 'https://www.coursera.org', '4 semanas', 'intermediate', 'business', ['Liderazgo', 'Gestión de equipos', 'Motivación'], 'Coursera', 'Inglés', '👔'),
  c('ad-10', 'Derechos Laborales en España', 'Conoce tus derechos: contrato, salario, vacaciones, despido, paro.', 'https://www.sepe.es', '10 horas', 'beginner', 'legal', ['Derechos laborales', 'Contrato', 'Despido', 'Paro'], 'SEPE', 'Español', '⚖️'),
  c('ad-11', 'Iniciación al Emprendimiento', 'Cómo crear tu negocio en España: idea, plan de negocio, trámites.', 'https://learndigital.withgoogle.com', '15 horas', 'beginner', 'business', ['Emprendimiento', 'Plan de negocio', 'Autónomo'], 'Google', 'Español', '🚀'),
  c('ad-12', 'Francés para Principiantes', 'Francés básico: saludos, números, presentaciones, vocabulario esencial.', 'https://www.aulafacil.com', 'Self-paced', 'beginner', 'languages', ['Francés', 'Vocabulario', 'Gramática'], 'AulaFácil', 'Español', '🇫🇷'),
  c('ad-13', 'Árabe para Hispanohablantes', 'Árabe básico: alfabeto, saludos, frases útiles para inmigrantes.', 'https://www.aulafacil.com', 'Self-paced', 'beginner', 'languages', ['Árabe', 'Alfabeto árabe', 'Conversación'], 'AulaFácil', 'Español', '🇸🇦'),
  c('ad-14', 'Técnicas de Venta', 'Habilidades comerciales: prospección, cierre, fidelización de clientes.', 'https://www.sepe.es', '30 horas', 'beginner', 'business', ['Ventas', 'Prospección', 'Cierre de ventas'], 'Fundae', 'Español', '💰'),
  c('ad-15', 'Logística y Almacén', 'Gestión de almacén: recepción, almacenamiento, picking, envío.', 'https://www.sepe.es', '40 horas', 'beginner', 'business', ['Logística', 'Almacén', 'Inventario'], 'Fundae', 'Español', '📦'),
  c('ad-16', 'Diseño Gráfico con Canva', 'Crea diseños profesionales con Canva: redes sociales, presentaciones, logos.', 'https://www.canva.com/designschool/', '5 horas', 'beginner', 'marketing', ['Canva', 'Diseño gráfico', 'Redes sociales'], 'Canva', 'Español', '🎨'),
  c('ad-17', 'Inteligencia Emocional', 'Gestiona tus emociones: autoconocimiento, empatía, autocontrol.', 'https://www.coursera.org', '4 semanas', 'beginner', 'soft-skills', ['Inteligencia emocional', 'Empatía', 'Autocontrol'], 'Coursera', 'Inglés', '💛'),
  c('ad-18', 'Gmail para Profesionales', 'Configura y domina Gmail: filtros, etiquetas, firmas, atajos.', 'https://learndigital.withgoogle.com', '3 horas', 'beginner', 'office', ['Gmail', 'Email profesional', 'Productividad'], 'Google', 'Español', '📧'),
  c('ad-19', 'Instalación de Paneles Solares', 'Energía solar fotovoltaica: instalación, conexión, mantenimiento.', 'https://www.sepe.es', '60 horas', 'intermediate', 'construction', ['Energía solar', 'Fotovoltaica', 'Instalación'], 'Fundae', 'Español', '☀️'),
];

export function getCourseStats() {
  const byCategory: Record<string, number> = {};
  const byLevel: Record<string, number> = { beginner: 0, intermediate: 0, advanced: 0 };
  let withCert = 0;
  EXTERNAL_COURSES.forEach((c) => {
    byCategory[c.category] = (byCategory[c.category] || 0) + 1;
    byLevel[c.level]++;
    if (c.certification) withCert++;
  });
  return { total: EXTERNAL_COURSES.length, byCategory, byLevel, withCert, free: EXTERNAL_COURSES.filter((c) => c.free).length };
}

console.log('External courses:', EXTERNAL_COURSES.length);
