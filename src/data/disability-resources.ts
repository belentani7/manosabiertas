/**
 * Disability Resources & Accessible Learning Platforms
 * Recursos para personas con discapacidad
 *
 * Platform: Manos Abiertas
 * For immigrants 40+ with disabilities seeking job reintegration support
 */

export interface DisabilityResource {
  id: string;
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  category: 'visual' | 'hearing' | 'motor' | 'cognitive' | 'mental' | 'multiple' | 'legal';
  accessibility_features: string[];
  url?: string;
  country?: 'ES' | 'EU' | 'International';
  cost: 'free' | 'paid' | 'mixed';
  languages: string[];
  contact_email?: string;
  contact_phone?: string;
}

export const DISABILITY_RESOURCES: DisabilityResource[] = [
  // Spanish Legal Support
  {
    id: 'cermi-es',
    title_es: 'CERMI - Comité Español de Representantes de Personas con Discapacidad',
    title_en: 'CERMI - Spanish Committee of Representatives of Persons with Disabilities',
    description_es: 'Organización que defiende los derechos de personas con discapacidad en España. Proporciona asesoramiento legal, recursos y apoyo.',
    description_en: 'Organization defending the rights of persons with disabilities in Spain. Provides legal advice, resources and support.',
    category: 'legal',
    accessibility_features: ['website_accessible', 'phone_support', 'email_support', 'video_interpreters'],
    url: 'https://www.cermi.es',
    country: 'ES',
    cost: 'free',
    languages: ['es', 'en'],
    contact_phone: '+34 917 019 935'
  },

  // Visual Disability Resources
  {
    id: 'joblister-blind',
    title_es: 'Joblist - Plataforma para personas con discapacidad visual',
    title_en: 'Joblist - Platform for visually impaired persons',
    description_es: 'Plataforma de empleo con cursos de formación adaptados para personas con discapacidad visual.',
    description_en: 'Job platform with training courses adapted for visually impaired persons.',
    category: 'visual',
    accessibility_features: ['screen_reader_compatible', 'high_contrast_mode', 'keyboard_navigation', 'audio_courses'],
    url: 'https://www.once.es',
    country: 'ES',
    cost: 'free',
    languages: ['es'],
  },

  // Hearing Disability Resources
  {
    id: 'coordipres-deaf',
    title_es: 'COORDIPRES - Formación para personas sordas',
    title_en: 'COORDIPRES - Training for deaf persons',
    description_es: 'Centro de formación especializado en capacitación para personas sordas con intérpretes de lengua de signos.',
    description_en: 'Specialized training center for deaf persons with sign language interpreters.',
    category: 'hearing',
    accessibility_features: ['sign_language_interpreters', 'video_captions', 'written_materials', 'visual_alerts'],
    url: 'https://www.coordipres.es',
    country: 'ES',
    cost: 'mixed',
    languages: ['es', 'sign_language'],
    contact_email: 'info@coordipres.es'
  },

  // Motor Disability Resources
  {
    id: 'fundacion-aenor',
    title_es: 'AENOR - Accesibilidad para discapacidad motriz',
    title_en: 'AENOR - Accessibility for motor disability',
    description_es: 'Normas y certificaciones de accesibilidad. Cursos sobre derechos de accesibilidad en el trabajo.',
    description_en: 'Accessibility standards and certifications. Courses on accessibility rights in the workplace.',
    category: 'motor',
    accessibility_features: ['voice_control', 'switch_access', 'eye_tracking_support', 'ergonomic_design'],
    url: 'https://www.aenor.com',
    country: 'ES',
    cost: 'paid',
    languages: ['es', 'en'],
  },

  // Cognitive & Learning Disability Resources
  {
    id: 'down-españa',
    title_es: 'Down España - Apoyo para personas con discapacidad intelectual',
    title_en: 'Down España - Support for intellectual disabilities',
    description_es: 'Programas de formación laboral adaptados, mentoría y apoyo en la búsqueda de empleo.',
    description_en: 'Adapted vocational training programs, mentoring and job search support.',
    category: 'cognitive',
    accessibility_features: ['simplified_language', 'visual_supports', 'one_on_one_support', 'job_coaching'],
    url: 'https://www.downespana.org',
    country: 'ES',
    cost: 'free',
    languages: ['es'],
    contact_phone: '+34 914 350 900'
  },

  // Mental Health & Psychosocial Disability
  {
    id: 'feafes-salud-mental',
    title_es: 'FEAFES - Federación de Salud Mental',
    title_en: 'FEAFES - Mental Health Federation',
    description_es: 'Programas de integración laboral, formación y apoyo psicosocial para personas con discapacidad mental.',
    description_en: 'Job integration programs, training and psychosocial support for persons with mental disabilities.',
    category: 'mental',
    accessibility_features: ['peer_support', 'flexible_scheduling', 'stress_management', 'mental_health_resources'],
    url: 'https://www.feafes.org',
    country: 'ES',
    cost: 'free',
    languages: ['es'],
    contact_email: 'info@feafes.org'
  },

  // European Accessible Platforms
  {
    id: 'eun-accessibility',
    title_es: 'EUN - Educación Inclusiva Europea',
    title_en: 'EUN - European Inclusive Education',
    description_es: 'Plataforma europea con recursos educativos accesibles para personas con todas las discapacidades.',
    description_en: 'European platform with accessible educational resources for persons with all disabilities.',
    category: 'multiple',
    accessibility_features: ['wcag_compliant', 'multilingual', 'alt_text', 'transcripts', 'easy_read_versions'],
    url: 'https://www.eun.org',
    country: 'EU',
    cost: 'free',
    languages: ['es', 'en', 'fr', 'de', 'it', 'pt'],
  },

  // International Platforms
  {
    id: 'coursera-accessibility',
    title_es: 'Coursera - Cursos accesibles en línea',
    title_en: 'Coursera - Accessible online courses',
    description_es: 'Plataforma de educación en línea con características de accesibilidad para subtítulos, transcripciones y controles de reproducción.',
    description_en: 'Online education platform with accessibility features for captions, transcripts and playback controls.',
    category: 'multiple',
    accessibility_features: ['captions', 'transcripts', 'downloadable_materials', 'adjustable_playback_speed'],
    url: 'https://www.coursera.org',
    country: 'International',
    cost: 'mixed',
    languages: ['es', 'en', 'fr', 'de', 'pt', 'zh'],
  },

  // Specific Accessibility Features Explanation
  {
    id: 'accessibility-guide',
    title_es: 'Guía de características de accesibilidad digital',
    title_en: 'Guide to digital accessibility features',
    description_es: 'Guía completa sobre cómo usar las características de accesibilidad en dispositivos y navegadores web.',
    description_en: 'Complete guide on how to use accessibility features on devices and web browsers.',
    category: 'multiple',
    accessibility_features: ['tutorial_videos', 'step_by_step_guides', 'troubleshooting', 'device_specific'],
    url: 'https://www.a11y-101.com',
    country: 'International',
    cost: 'free',
    languages: ['es', 'en', 'fr', 'de'],
  },

  // Employment Support for Disabled Persons
  {
    id: 'etpd-españa',
    title_es: 'ETPD - Empresa de Trabajo Protegido Digital',
    title_en: 'ETPD - Protected Digital Work Company',
    description_es: 'Empresas que emplean y capacitan a personas con discapacidad en teletrabajos accesibles.',
    description_en: 'Companies that employ and train persons with disabilities in accessible remote work.',
    category: 'multiple',
    accessibility_features: ['remote_work', 'flexible_hours', 'adaptive_technology', 'job_coaching'],
    url: 'https://www.etpd.es',
    country: 'ES',
    cost: 'free',
    languages: ['es'],
    contact_phone: '+34 913 248 999'
  },

  // Technology Assistive Devices
  {
    id: 'fundacion-tecnologia-accesible',
    title_es: 'Fundación de Tecnología Accesible',
    title_en: 'Foundation for Accessible Technology',
    description_es: 'Proveedores de tecnología asistida: lectores de pantalla, ampliadores de texto, teclados adaptados.',
    description_en: 'Providers of assistive technology: screen readers, text magnifiers, adapted keyboards.',
    category: 'multiple',
    accessibility_features: ['screen_readers', 'magnification_software', 'adapted_keyboards', 'voice_recognition'],
    url: 'https://www.fundacionunaops.org',
    country: 'ES',
    cost: 'paid',
    languages: ['es', 'en'],
  },
];

// Category Descriptions for Manos Abiertas
export const DISABILITY_CATEGORIES = {
  visual: {
    emoji: '👁️',
    name_es: 'Discapacidad Visual',
    name_en: 'Visual Disability',
    description_es: 'Ceguera y baja visión',
    description_en: 'Blindness and low vision',
  },
  hearing: {
    emoji: '👂',
    name_es: 'Discapacidad Auditiva',
    name_en: 'Hearing Disability',
    description_es: 'Sordera e hipoacusia',
    description_en: 'Deafness and hearing loss',
  },
  motor: {
    emoji: '🦽',
    name_es: 'Discapacidad Motriz',
    name_en: 'Motor Disability',
    description_es: 'Limitaciones en la movilidad y destreza',
    description_en: 'Mobility and dexterity limitations',
  },
  cognitive: {
    emoji: '🧠',
    name_es: 'Discapacidad Cognitiva',
    name_en: 'Cognitive Disability',
    description_es: 'Dificultades de aprendizaje e intelectuales',
    description_en: 'Learning and intellectual difficulties',
  },
  mental: {
    emoji: '💭',
    name_es: 'Discapacidad Mental/Psicosocial',
    name_en: 'Mental/Psychosocial Disability',
    description_es: 'Trastornos mentales, depresión, ansiedad',
    description_en: 'Mental disorders, depression, anxiety',
  },
  multiple: {
    emoji: '🔗',
    name_es: 'Discapacidades Múltiples',
    name_en: 'Multiple Disabilities',
    description_es: 'Combinación de varias discapacidades',
    description_en: 'Combination of multiple disabilities',
  },
  legal: {
    emoji: '⚖️',
    name_es: 'Derechos Legales',
    name_en: 'Legal Rights',
    description_es: 'Información sobre derechos y ayudas',
    description_en: 'Information on rights and benefits',
  },
};

// Accessibility Features Explained
export const ACCESSIBILITY_FEATURES_GUIDE = {
  screen_reader_compatible: {
    name_es: 'Compatible con lectores de pantalla',
    name_en: 'Screen reader compatible',
    tools: ['NVDA (free)', 'JAWS', 'VoiceOver (Mac)', 'Narrator (Windows)'],
  },
  high_contrast_mode: {
    name_es: 'Modo de alto contraste',
    name_en: 'High contrast mode',
    description: 'Better visibility for low vision users',
  },
  keyboard_navigation: {
    name_es: 'Navegación por teclado',
    name_en: 'Keyboard navigation',
    description: 'Full functionality without mouse',
  },
  captions: {
    name_es: 'Subtítulos',
    name_en: 'Captions',
    description: 'For deaf and hard of hearing users',
  },
  transcripts: {
    name_es: 'Transcripciones',
    name_en: 'Transcripts',
    description: 'Text version of audio content',
  },
  sign_language_interpreters: {
    name_es: 'Intérpretes de lengua de signos',
    name_en: 'Sign language interpreters',
    description: 'For deaf community members',
  },
  voice_control: {
    name_es: 'Control por voz',
    name_en: 'Voice control',
    description: 'Hands-free operation',
  },
  simplified_language: {
    name_es: 'Lenguaje simplificado',
    name_en: 'Simplified language',
    description: 'Easy to read format for cognitive disabilities',
  },
  visual_supports: {
    name_es: 'Apoyos visuales',
    name_en: 'Visual supports',
    description: 'Pictures, diagrams, and symbols',
  },
  flexible_scheduling: {
    name_es: 'Horarios flexibles',
    name_en: 'Flexible scheduling',
    description: 'Work at your own pace',
  },
};
