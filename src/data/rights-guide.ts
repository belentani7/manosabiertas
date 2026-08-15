/**
 * Manos Abiertas — Derechos, Ayudas y Guía de Supervivencia para Inmigrantes en España
 * ============================================================================
 * Datos prácticos, reales y verificados (vigentes 2024-2025).
 * Contenido en español (es), redactado para adultos con baja alfabetización digital.
 *
 * Fuentes principales:
 *  - Ministerio de Inclusión, Seguridad Social y Migraciones (inclusion.gob.es)
 *  - Ministerio de Sanidad (sanidad.gob.es)
 *  - SEPE (sepe.es)
 *  - Agencia Tributaria (agenciatributaria.gob.es)
 *  - Ministerio de Educación y Formación Profesional (educacion.gob.es)
 *  - Portal de Inmigración (extranjeros.inclusion.gob.es)
 *  - Instituto Nacional de Estadística (ine.es)
 *
 * NOTA: Las cifras y requisitos pueden cambiar. Verifique siempre con la fuente
 * oficial antes de presentar cualquier trámite. Última revisión: noviembre 2024.
 */

export type GuideCategory =
  | 'legal'
  | 'documentation'
  | 'health'
  | 'housing'
  | 'work'
  | 'education'
  | 'family'
  | 'emergency'
  | 'banking'
  | 'taxes';

export interface GuideArticle {
  id: string;
  category: GuideCategory;
  title: string;
  summary: string;
  content: string; // markdown, 200-500 palabras
  keyPoints?: string[];
  officialLinks?: { label: string; url: string }[];
  emergencyPhone?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  description: string;
  category: 'general' | 'health' | 'violence' | 'legal' | 'women' | 'children' | 'immigration';
  available24h: boolean;
  languages?: string[];
}

export interface CategoryInfo {
  id: GuideCategory;
  label: string;
  icon: string; // nombre de icono lucide-react
  color: string; // clase tailwind para badge
}

// ============================================================================
// CATEGORÍAS — para UI de filtros
// ============================================================================
export const RIGHTS_CATEGORIES: CategoryInfo[] = [
  { id: 'legal', label: 'Legal y Nacionalidad', icon: 'Scale', color: 'bg-blue-100 text-blue-700' },
  { id: 'documentation', label: 'Documentación y Extranjería', icon: 'FileText', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'health', label: 'Salud', icon: 'HeartPulse', color: 'bg-red-100 text-red-700' },
  { id: 'housing', label: 'Vivienda', icon: 'Home', color: 'bg-amber-100 text-amber-700' },
  { id: 'work', label: 'Trabajo y Empleo', icon: 'Briefcase', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'education', label: 'Educación', icon: 'GraduationCap', color: 'bg-purple-100 text-purple-700' },
  { id: 'family', label: 'Familia y Menores', icon: 'Users', color: 'bg-pink-100 text-pink-700' },
  { id: 'banking', label: 'Banca y Dinero', icon: 'Landmark', color: 'bg-teal-100 text-teal-700' },
  { id: 'taxes', label: 'Impuestos', icon: 'Receipt', color: 'bg-orange-100 text-orange-700' },
  { id: 'emergency', label: 'Emergencias', icon: 'Siren', color: 'bg-rose-100 text-rose-700' },
];

// ============================================================================
// ARTÍCULOS — mínimo 40
// ============================================================================
export const RIGHTS_ARTICLES: GuideArticle[] = [
  // ----------------------------------------------------------------------
  // LEGAL & DOCUMENTACIÓN (14 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'nie-que-es-como-solicitar',
    category: 'documentation',
    title: 'NIE: qué es y cómo solicitarlo',
    summary: 'El Número de Identidad de Extranjero (NIE) es obligatorio para casi cualquier trámite en España. Te explicamos cómo obtenerlo.',
    content: `El **NIE (Número de Identidad de Extranjero)** es un número personal, único y exclusivo que la Oficina de Extranjería asigna a los ciudadanos extranjeros. Es obligatorio para abrir una cuenta bancaria, firmar un contrato de alquiler, trabajar, pagar impuestos, compraventa de vehículos, etc.

## ¿Cómo se solicita?
Debes presentar el **formulario EX-15** ("Solicitud de NIE por motivos económicos, profesionales o sociales") en la Oficina de Extranjería, Comisaría de Policía Nacional o en el Consulado de España en tu país de origen.

## Documentación necesaria
- Pasaporte en vigor (y copia).
- Formulario **EX-15** firmado.
- Tasa **modelo 790 código 012** (10,71 € en 2024; puede abonarse en línea o en entidad bancaria colaboradora).
- Justificación del motivo (carta de admisión a estudios, oferta laboral, compraventa, apertura de cuenta, etc.).

## Dónde presentar
- **En España**: Comisaría General de Extranjería y Fronteras u Oficina de Extranjería de tu provincia. Cita previa obligatoria en **sede.administracionespublicas.gob.es**.
- **En el extranjero**: Consulado de España con jurisdicción en tu lugar de residencia.

El NIE se suele entregar en un plazo de **5 a 10 días hábiles**. Es un documento permanente: no caduca.`,
    keyPoints: [
      'NIE = número personal único para extranjeros en España',
      'Formulario EX-15 + tasa 790/012 (10,71 € en 2024)',
      'Cita previa obligatoria en sede.administracionespublicas.gob.es',
      'Plazo estimado: 5-10 días hábiles',
      'El NIE no caduca',
    ],
    officialLinks: [
      { label: 'Sede Electrónica — Cita previa Extranjería', url: 'https://sede.administracionespublicas.gob.es/icpplus/index.html' },
      { label: 'Formulario EX-15 (PDF)', url: 'https://www.inclusion.gob.es/web/migraciones/modelos-generales' },
      { label: 'Tasa 790/012', url: 'https://sede.policia.gob.es/' },
    ],
  },
  {
    id: 'tipos-autorizaciones-residencia',
    category: 'documentation',
    title: 'Tipos de autorizaciones de residencia',
    summary: 'Inicial, renovación, larga duración, comunitaria: conoce las diferencias y los requisitos de cada una.',
    content: `Existen distintos tipos de autorizaciones de residencia para extranjeros en España. Las más comunes son:

## 1. Autorización inicial (1 año)
Concedida por circunstancias excepcionales (arraigo, reagrupación, circunstancias excepcionales, etc.). No autoriza a trabajar salvo que se indique.

## 2. Renovación (2 años)
Se solicita dentro de los **60 días anteriores** a la fecha de caducidad o dentro de los 90 posteriores (sin perder derechos). Requiere acreditar medios económicos y, en su caso, continuidad laboral.

## 3. Residencia de larga duración (5 años)
Tras **5 años continuados** de residencia legal en España. Autoriza a vivir y trabajar en las mismas condiciones que los españoles. Se solicita con el formulario **EX-11**.

## 4. Residencia comunitaria
Para familiares de ciudadanos de la UE/EEE/Suiza. Se documenta con la **Tarjeta de familiar de ciudadano de la Unión** (formulario EX-19, válida 5 o 10 años).

## 5. Larga duración-UE (permanente)
Habilita también a residir y trabajar en otros Estados miembros de la UE, según la normativa de cada país.

## Formularios habituales
- **EX-01**: autorización de residencia-temporal no lucrativa.
- **EX-02**: autorización de residencia y trabajo por cuenta ajena.
- **EX-03**: autorización de residencia y trabajo por cuenta propia.
- **EX-07**: renovación de autorización de residencia y trabajo.
- **EX-11**: residencia de larga duración.
- **EX-18**: certificado de registro de ciudadano UE.
- **EX-19**: tarjeta de familiar de ciudadano UE.

Las tasas se abonan con el **modelo 790 código 052** (15,76 € por tarjeta en 2024).`,
    keyPoints: [
      'Inicial: 1 año | Renovación: 2 años | Larga duración: 5 años',
      'Renovar 60 días antes o 90 después del vencimiento',
      'Larga duración requiere 5 años continuados de residencia legal',
      'Modelo 790/052: 15,76 € por tarjeta (2024)',
    ],
    officialLinks: [
      { label: 'Portal de Inmigración — Modelos EX', url: 'https://www.inclusion.gob.es/web/migraciones/informacion-util/modelos-de-solicitud' },
      { label: 'Tasa 790/052', url: 'https://sede.policia.gob.es/' },
    ],
  },
  {
    id: 'asilo-refugio-proteccion-internacional',
    category: 'legal',
    title: 'Asilo y refugio: protección internacional',
    summary: 'Si huyes de tu país por persecución, guerra o violencia, España ofrece protección internacional. Cómo solicitar asilo.',
    content: `La **protección internacional** en España incluye dos figuras: el **estatuto de refugiado** (Convención de Ginebra de 1951) y la **protección subsidiaria** (riesgo grave de pena de muerte, tortura o amenaza directa a la vida por conflicto armado).

## ¿Quién puede solicitarla?
Cualquier persona no comunitaria que se encuentre en territorio español o en la frontera y tenga **fundados temores de persecución** por motivos de raza, religión, nacionalidad, opiniones políticas, pertenencia a un grupo social, género u orientación sexual.

## Cómo y dónde solicitar
- Presentando el **formulario de solicitud de asilo** en la Oficina de Asilo y Refugio (OAR), en cualquier comisaría de Policía Nacional, en un puesto fronterizo o en un Centro de Internamiento de Extranjeros (CIE).
- Plazo: **dentro de los 3 meses** siguientes a la entrada en España, aunque también puede solicitarse en caso de circunstancias excepcionales.
- El formulario es **gratuito**.

## Proceso
1. **Solicitud** y entrevista inicial.
2. Se te entrega un **documento acreditativo** (tarjeta roja) que te habilita a permanecer en España y a trabajar tras 6 meses.
3. **Entrevista sustantiva** con la OAR.
4. Resolución en un plazo máximo de **6 meses** (puede prorrogarse).

## Durante el proceso
- No puedes ser devuelto a tu país mientras dure el procedimiento (principio de *non-refoulement*).
- Tienes derecho a intérprete gratuito y a asistencia jurídica.
- Acceso a programas de acogida de ONG (CEAR, ACCEM, Cruz Roja).`,
    keyPoints: [
      'Dos figuras: estatuto de refugiado y protección subsidiaria',
      'Solicitar en OAR, Policía Nacional, frontera o CIE',
      'Plazo: 3 meses desde la entrada (con excepciones)',
      'Trámite gratuito | Tarjeta roja habilita a trabajar tras 6 meses',
      'Resolución: máximo 6 meses (prorrogable)',
    ],
    officialLinks: [
      { label: 'Oficina de Asilo y Refugio (OAR)', url: 'https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/oficina-de-asilo-y-refugio/' },
      { label: 'CEAR — Comisión Española de Ayuda al Refugiado', url: 'https://www.cear.es/' },
      { label: 'ACNUR España', url: 'https://www.acnur.org/es-es/espana' },
    ],
    emergencyPhone: '91 530 69 69',
  },
  {
    id: 'arraigo-laboral',
    category: 'documentation',
    title: 'Arraigo laboral: requisitos 2024',
    summary: 'Para quienes han trabajado en España sin autorización al menos 6 meses en los últimos 2 años.',
    content: `El **arraigo laboral** es una autorización de residencia temporal por circunstancias excepcionales dirigida a personas extranjeras que han mantenido una relación laboral en España.

## Requisitos (art. 124 Reglamento de Extranjería)
1. **No ser ciudadano de un Estado miembro de la UE.**
2. Carecer de antecedentes penales en España y en los países donde haya residido los últimos 5 años.
3. No tener prohibida la entrada en España.
4. Haber permanecido de forma continuada en España un mínimo de **2 años**.
5. Acreditar vínculos familiares o integración (informe del Ayuntamiento).
6. Acreditar relación laboral:
   - Con **resolución judicial firme** que reconozca la relación laboral (mínimo **6 meses**), o
   - Con **acta de conciliación** o resolución administrativa que reconozca **al menos 6 meses** de relación laboral.

## Documentación a presentar
- Formulario **EX-10**.
- Pasaporte en vigor.
- Certificado de penales.
- Resolución judicial / acta de conciliación.
- Contrato de trabajo firmado por un empleador (debe cubrir el periodo mínimo exigido).
- Informe de arraigo del Ayuntamiento.
- Tasa 790/052 (15,76 €).

## Vigencia
La autorización concede **residencia y trabajo por cuenta ajena** durante **1 año**. Posteriormente se renueva por 2 años (EX-07).`,
    keyPoints: [
      'Requiere 2 años de estancia continuada en España',
      'Acreditar 6+ meses de relación laboral reconocida judicialmente',
      'Formulario EX-10 + tasa 790/052',
      'Concede residencia y trabajo por 1 año',
    ],
    officialLinks: [
      { label: 'Arraigo laboral — Portal Inmigración', url: 'https://www.inclusion.gob.es/web/migraciones/situacion-excepcional-o-de-irregularidad' },
      { label: 'Formulario EX-10', url: 'https://www.inclusion.gob.es/web/migraciones/modelos-generales' },
    ],
  },
  {
    id: 'arraigo-social',
    category: 'documentation',
    title: 'Arraigo social: requisitos 2024',
    summary: 'La vía más habitual de regularización para quienes llevan 3 años en España con vínculos familiares o integración.',
    content: `El **arraigo social** es una autorización de residencia temporal por circunstancias excepcionales. Es la vía de regularización más solicitada en España.

## Requisitos principales (art. 123 Reglamento de Extranjería, reformado por RD 610/2024)
1. No ser ciudadano UE/EEE/Suiza.
2. Permanencia continuada en España durante un mínimo de **3 años** (10 meses si cumples con el nuevo supuesto por integración temprana).
3. Carecer de antecedentes penales en España y en los países de residencia de los últimos 5 años.
4. **Vínculos familiares** con otros extranjeros residentes, o **informe de inserción social** emitido por el Ayuntamiento.
5. Tener un **contrato de trabajo** firmado por un empleador que garantice un mínimo de 30 horas semanales y SMI, o bien:
   - Acreditar medios económicos propios (IPREM), o
   - Ser **estudiante** con formación reglada en vigor, o
   - Acreditar actividad empresarial.

## Novedades 2024 (RD 610/2024)
- **Arraigo por formación** (art. 125 bis): para personas con 2 años de estancia y compromiso de cursar formación profesional o certificados de profesionalidad. La autorización es de 12 meses prorrogables hasta 24.
- **Arraigo social para familiares de españoles**.
- **Arraigo por integración temprana** (jóvenes de 18 a 31 años formados en España).

## Formularios
- **EX-10**: solicitud.
- Tasas 790/052 (15,76 €).
- Informe de arraigo: solicitar en el Ayuntamiento del domicilio.`,
    keyPoints: [
      '3 años de estancia continuada (10 meses en casos por integración temprana)',
      'Contrato 30+ h/semana al SMI, o medios económicos, o estudiante',
      'Novedad 2024: arraigo por formación (12-24 meses)',
      'Formulario EX-10 + tasa 790/052',
    ],
    officialLinks: [
      { label: 'Portal Inmigración — Arraigo', url: 'https://www.inclusion.gob.es/web/migraciones/situacion-excepcional-o-de-irregularidad' },
      { label: 'RD 610/2024 — Reforma extranjería', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-10518' },
    ],
  },
  {
    id: 'arraigo-familiar',
    category: 'documentation',
    title: 'Arraigo familiar',
    summary: 'Para padres de menores españoles, hijos de padre/madre originariamente española, o cónyuge de residente.',
    content: `El **arraigo familiar** (art. 124 bis) reconoce el derecho a residir a personas extranjeras que tienen vínculos familiares con españoles o residentes.

## Supuestos
1. **Padre o madre de menor español**, o de menor con residencia permanente, que conviva con él o se haga cargo de él.
2. **Hijos de padre o madre que hubiera sido originariamente español** (aunque después perdiera la nacionalidad).
3. **Personas mayores de 18 años que se encuentren a cargo** de un ciudadano español o comunitario, o de residentes de larga duración.

## Requisitos comunes
- No ser ciudadano UE/EEE/Suiza.
- No tener antecedentes penales en España ni en países de residencia últimos 5 años.
- Acreditar el vínculo familiar mediante certificado de nacimiento, libro de familia u otra documentación oficial.
- En el supuesto de padre/madre de menor español: que el menor conviva o esté a cargo.

## Documentación
- Formulario **EX-10**.
- Pasaporte, certificado de penales, documentación familiar.
- Tasa 790/052 (15,76 €).

## Vigencia
- 5 años para padres/madres de menores españoles.
- 1 año (prorrogable) para otros supuestos.

No requiere estar residiendo en España durante un periodo mínimo previo (excepto en supuestos en los que se exija acreditar arraigo).`,
    keyPoints: [
      'Padre/madre de menor español: 5 años de residencia',
      'Hijos de persona originariamente española',
      'Mayores a cargo de español o residente larga duración',
      'No requiere periodo previo de estancia en algunos casos',
    ],
    officialLinks: [
      { label: 'Portal Inmigración — Arraigo familiar', url: 'https://www.inclusion.gob.es/web/migraciones/situacion-excepcional-o-de-irregularidad' },
      { label: 'Formulario EX-10', url: 'https://www.inclusion.gob.es/web/migraciones/modelos-generales' },
    ],
  },
  {
    id: 'nacionalidad-residencia',
    category: 'legal',
    title: 'Nacionalidad española por residencia',
    summary: 'Cómo obtener la nacionalidad española después de vivir en España durante un periodo legalmente establecido.',
    content: `La **nacionalidad española por residencia** exige haber residido en España de forma legal, continuada e inmediatamente anterior a la solicitud, durante los plazos siguientes:

## Plazos
- **10 años**: regla general.
- **5 años**: para personas que hayan obtenido **asilo** o **refugio**.
- **2 años**: para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial, Portugal, o sefardíes originarios de España.
- **1 año**:
  - Nacido en territorio español.
  - Casado con español y no separado legalmente.
  - Viudo de español si a la muerte no existía separación.
  - Nacido fuera de España de padre/madre/abuelo originariamente español.

## Requisitos
- Mayor de 18 años (o emancipado).
- Buena conducta cívica (certificado de penales).
- Suficiente grado de integración: **examen DELE A2** y **examen CCSE** (conocimientos constitucionales y socioculturales), salvo exenciones (mayores de 70, menores de 18, nacionales hispanohablantes, etc.).
- Medios de vida suficientes.

## Documentación
- Solicitud en el **Registro Civil** (desde 2022 también telemáticamente a través de sede electrónica del Ministerio de Justicia).
- Formulario normalizado.
- Certificado de nacimiento legalizado y traducido.
- Certificado de penales del país de origen y de los países donde haya residido.
- Empadronamiento histórico.
- Tasa **modelo 790 código 026** (100 € en 2024).

## Plazo de resolución
Hasta **2 años** desde la presentación (puede prorrogarse). Tras la resolución favorable, hay **180 días** para jurar/prometer fidelidad al Rey y obedecer la Constitución.`,
    keyPoints: [
      '10 años general | 5 años refugiados | 2 años iberoamericanos',
      '1 año: nacidos en España, casados con español, etc.',
      'Examen DELE A2 + CCSE (con exenciones)',
      'Tasa 790/026: 100 € (2024)',
      'Resolución: hasta 2 años',
    ],
    officialLinks: [
      { label: 'Sede electrónica — Nacionalidad por residencia', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad/que-es-nacionalidad/como-adquiere-nacionalidad/residencia' },
      { label: 'Cervantes — Examen DELE', url: 'https://examenes.cervantes.es/es/dele' },
      { label: 'CCSE — Instituto Cervantes', url: 'https://examenes.cervantes.es/es/ccse' },
    ],
  },
  {
    id: 'nacionalidad-iberoamericanos',
    category: 'legal',
    title: 'Nacionalidad para iberoamericanos (2 años)',
    summary: 'Los ciudadanos de países iberoamericanos pueden obtener la nacionalidad española en solo 2 años de residencia.',
    content: `España reduce a **2 años** el plazo de residencia necesario para solicitar la nacionalidad por residencia a los nacionales de países **iberoamericanos**, en virtud del principio de reciprocidad histórica y cultural.

## Países incluidos
Andorra, Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Cuba, Dominicana, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Portugal, Filipinas, Guinea Ecuatorial, Uruguay y Venezuela. También **sefardíes originarios de España**.

## Requisitos
1. **Residencia legal, continuada e inmediatamente anterior** a la solicitud, durante 2 años.
   - Salidas breves (vacaciones) no interrumpen la continuidad.
   - Cada ausencia no debe superar 3 meses, ni sumar más de 6 meses en el periodo.
2. Buena conducta cívica.
3. Suficiente integración:
   - **EXENCIONES para hispanohablantes**: no es necesario el examen DELE A2.
   - Sí se exige el examen **CCSE** (conocimientos constitucionales y socioculturales), salvo mayores de 70, menores de 18, personas con discapacidad ajustada, etc.
4. Medios de vida suficientes.
5. Certificado de nacimiento legalizado/apostillado y traducido si no está en español.

## Trámites
- Presentar solicitud en el **Registro Civil** o por sede electrónica del Ministerio de Justicia.
- Abonar tasa 790/026 (100 € en 2024).

## Tras la concesión
- Plazo de **180 días** para jurar/prometer fidelidad.
- Inscripción en el Registro Civil.
- Convalide su pasaporte y NIE en el nuevo DNI español.`,
    keyPoints: [
      'Plazo reducido a 2 años para iberoamericanos',
      'Exención del DELE A2 para hispanohablantes nativos',
      'CCSE obligatorio (salvo exenciones)',
      'Tasa 790/026: 100 €',
    ],
    officialLinks: [
      { label: 'Nacionalidad por residencia — Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad' },
      { label: 'CCSE — Convocatorias', url: 'https://examenes.cervantes.es/es/ccse' },
    ],
  },
  {
    id: 'nacionalidad-opcion',
    category: 'legal',
    title: 'Nacionalidad española por opción',
    summary: 'Para hijos de españoles, menores nacidos en España, o personas bajo tutela española.',
    content: `La **nacionalidad por opción** se dirige a personas que tienen un vínculo especial con España y no necesitan cumplir el plazo de residencia del régimen general.

## Personas que pueden optar
1. **Personas sujetas a la tutela de un ciudadano español**.
2. Aquellas cuyo **padre o madre hubiera sido originariamente español** (aunque luego perdiera la nacionalidad).
3. Aquellas **nacidas en España** de padres extranjeros si, al cumplir los 18 años, no han optado por la nacionalidad de origen de sus padres (plazo: 2 años desde la mayoría de edad).
4. **Adoptados mayores de 18 años** por un español.
5. **Mayores de 18 años** cuya filiación o nacimiento en España se determine después de los 18 (plazo: 2 años desde el reconocimiento).
6. **Personas que hayan estado sujetas a guarda o acogimiento** por un español o institución española durante 2 años consecutivos, aun continuando en esa situación.

## Requisitos
- Formulario de declaración de opción (Código Civil art. 20).
- Documentación: libro de familia, certificado de nacimiento del padre/madre español, etc.
- Para mayores de 14 años: **jurar/prometer fidelidad al Rey** y **obedecer la Constitución**.
- Para mayores de 18: **renunciar** a la nacionalidad anterior (salvo países iberoamericanos con convenio de doble nacionalidad).

## Tasa
- Modelo 790 código 026 (100 € en 2024), si es mayor de edad; gratuito si es menor.

## Plazo
El Registro Civil dispone de **6 meses** para resolver.`,
    keyPoints: [
      'No requiere plazo de residencia previo',
      'Hijos de originariamente españoles: derecho de opción',
      'Mayores de 18: renunciar a nacionalidad anterior (salvo convenio)',
      'Tasa 790/026 (100 €) si mayor de edad',
    ],
    officialLinks: [
      { label: 'Nacionalidad por opción — Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad/que-es-nacionalidad/como-adquiere-nacionalidad/opcion' },
    ],
  },
  {
    id: 'certificado-digital-clave',
    category: 'documentation',
    title: 'Certificado digital y Cl@ve',
    summary: 'Sin certificado digital o Cl@ve no puedes hacer casi ningún trámite online con la Administración española. Cómo obtenerlos.',
    content: `El **certificado digital** y el **sistema Cl@ve** son los dos métodos de identificación electrónica reconocidos por la Administración General del Estado para realizar trámites por internet.

## Certificado digital de persona física
- Lo emite la **Fábrica Nacional de Moneda y Timbre (FNMT-RCM)**.
- Es **gratuito**.
- Válido para casi todos los trámites (Hacienda, Seguridad Social, Extranjería, Justicia, etc.).

### Cómo obtenerlo
1. Entrar en **cert.fnmt.gob.es** y solicitar el certificado (precarga).
2. Acudir presencialmente a una **Oficina de Registro** de la FNMT o de la AEAT, con DNI/NIE y pasaporte, para validar la identidad. Las oficinas de Correos también pueden hacerlo (cita previa).
3. Descargar el certificado desde la web de la FNMT.

## Sistema Cl@ve
Es un sistema de identificación común para las administraciones públicas. Tiene tres modalidades:
- **Cl@ve PIN**: identificación puntual. Necesitas registrarte primero (presencial o con certificado digital) y luego generar un PIN en cada trámite.
- **Cl@ve Permanente**: sistema de doble factor (DNI/NIE + contraseña + código SMS). Ideal para uso frecuente.
- **Cl@ve para empresas**.

### Alta en Cl@ve
- Online si ya dispones de certificado digital.
- Presencial en oficinas de registro (cita previa), con DNI/NIE y teléfono móvil.

## Recomendaciones
- Anota en lugar seguro tu contraseña de Cl@ve.
- Mantén actualizado el teléfono móvil asociado.
- Descarga el certificado en un pendrive cifrado si vas a usarlo en varios ordenadores.`,
    keyPoints: [
      'Certificado digital FNMT: gratuito, válido para todos los trámites',
      'Alta presencial con DNI/NIE en oficina de registro',
      'Cl@ve PIN: identificación puntual',
      'Cl@ve Permanente: doble factor',
    ],
    officialLinks: [
      { label: 'Sede FNMT — Certificado digital', url: 'https://www.cert.fnmt.gob.es/' },
      { label: 'Cl@ve — Administración', url: 'https://clave.gob.es/clave_Home/clave.html' },
    ],
  },
  {
    id: 'empadronamiento',
    category: 'documentation',
    title: 'Empadronamiento: por qué es importante',
    summary: 'El padrón municipal es tu primer trámite tras llegar a España. Sin él, no puedes acceder a sanidad, ayudas, escolarización y otros servicios.',
    content: `El **empadronamiento** (inscripción en el Padrón Municipal de Habitantes) es el registro de las personas que viven en un municipio. Es **obligatorio** para toda persona que resida habitualmente en España (nacional o extranjera, con o sin papeles).

## Para qué sirve
- Acceder a la **sanidad pública** y obtener la Tarjeta Sanitaria Individual.
- **Escolarizar** a tus hijos.
- Solicitar **ayudas sociales**, bono social eléctrico, Renta Mínima de Inserción.
- Demostrar tu **arraigo** para trámites de extranjería.
- Votar en elecciones municipales (si existe convenio con tu país).
- Acceder a servicios municipales: bibliotecas, deporte, etc.

## Requisitos
- Vivir de forma habitual en el municipio.
- Tener más de 16 años (los menores se inscriben a través de sus representantes).
- Documentos:
  - DNI/NIE/pasaporte.
  - **Autorización de la persona titular de la vivienda** (si no eres tú) + fotocopia de su DNI.
  - Contrato de alquiler o escritura de propiedad.
  - Si vives en vivienda ocupada o sin contrato, algunas ciudades permiten el empadronamiento mediante **volante de convivencia** o informe de servicios sociales.

## Dónde
En el **Ayuntamiento** del municipio donde resides (oficinas de atención al ciudadano / padrón). En muchas ciudades puede iniciarse online con certificado digital o Cl@ve.

## Renovación
- Personas **UE/EEE/Suiza**: renovación cada **5 años** si no se actualiza.
- Personas **no UE**: cada **2 años**.
- Si cambias de domicilio, debes comunicarlo al nuevo Ayuntamiento.`,
    keyPoints: [
      'Empadronamiento = inscripción en el padrón municipal',
      'Obligatorio para sanidad, escolarización y ayudas',
      'Renovación: 5 años UE / 2 años no UE',
      'Sin contrato de alquiler: posible informe de servicios sociales',
    ],
    officialLinks: [
      { label: 'Buscador de Ayuntamientos (PAe)', url: 'https://administracion.gob.es/' },
    ],
  },
  {
    id: 'registro-civil-nacimientos-matrimonios',
    category: 'documentation',
    title: 'Registro Civil: nacimientos, matrimonios',
    summary: 'Cómo inscribir el nacimiento de tu hijo o tu matrimonio en el Registro Civil español.',
    content: `El **Registro Civil** es la oficina pública que da fe de los hechos y actos relativos al estado civil de las personas: nacimiento, matrimonio, defunción, etc.

## Nacimientos
- **Plazo**: 72 horas desde el parto (lo hace el hospital). Si no, los padres deben hacerlo dentro de los **8 días siguientes**, y en todo caso antes de los **30 días**.
- **Documentación**:
  - Informe del centro sanitario.
  - DNI/NIE de los padres.
  - Libro de familia (si ya existe) o certificado de matrimonio.
- En el caso de hijos de madre extranjera no casada con el padre español, puede optarse a la **nacionalidad española por opción** (art. 17.1.c CC).

## Matrimonio
Puede celebrarse ante el **Juez/Secretario del Registro Civil**, **Juez de Paz** o **alcalde/concejal delegado**. Para celebrarlo ante autoridad religiosa, requiere trámite civil posterior.

### Documentación necesaria
- Certificado literal de nacimiento de ambos.
- **Certificado de estado civil** (soltero, divorciado, viudo).
- Si uno de los contrayentes es extranjero: **certificado de capacidad matrimonial** o de soltería expedido por su consulado (legalizado/apostillado y traducido).
- Empadronamiento.
- En su caso, sentencia de divorcio o certificado de defunción del cónyuge anterior.

## Expediente matrimonial
Se inicia en el Registro Civil del domicilio de cualquiera de los contrayentes. Suele tardar **1-2 meses**. La celebración del matrimonio se produce tras la resolución.

## Matrimonio consular
Si los dos contrayentes son del mismo país extranjero, pueden casarse en su consulado en España. Si son de países distintos, normalmente deben acudir al Registro Civil español.

## Libro de familia
Desde 2015 se sustituye por **registro electrónico**, aunque sigue emitiéndose un ejemplar en papel en muchos casos.`,
    keyPoints: [
      'Nacimiento: inscribir en 8 días (máx. 30)',
      'Matrimonio: expediente en Registro Civil, 1-2 meses',
      'Extranjeros: certificado de capacidad matrimonial del consulado',
      'Libro de familia: ahora registro electrónico',
    ],
    officialLinks: [
      { label: 'Registro Civil — Ministerio de Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadania/estado-civil/registro-civil' },
      { label: 'Sede electrónica Registro Civil', url: 'https://www.mjusticia.gob.es/es/ciudadania/cita-previa' },
    ],
  },
  {
    id: 'renuncia-recuperacion-nacionalidad',
    category: 'legal',
    title: 'Renuncia y recuperación de la nacionalidad',
    summary: 'Si perdiste la nacionalidad española al adquirir otra, puedes recuperarla. Condiciones y trámite.',
    content: `La **nacionalidad española** se pierde, entre otras causas, cuando se adquiere una extranjera (los nacionales de países iberoamericanos con convenio de doble nacionalidad no la pierden).

## Causas de pérdida
1. Estar emancipado, residir en el extranjero y adquirir voluntariamente otra nacionalidad.
2. Utilizar exclusivamente, durante 3 años, la nacionalidad que se hubiera renunciado al adquirir la española.
3. Entrar al servicio de armas o desempeñar cargo político en un Estado extranjero, contra la prohibición expresa del Gobierno.

## Recuperación
Cualquier español que haya perdido la nacionalidad puede **recuperarla** cumpliendo estos requisitos:

1. Ser **mayor de 18 años** o emancipado.
2. Residir en España (puede ser cualquier duración, pero se exige residencia legal).
3. Declarar ante el encargado del Registro Civil su voluntad de recuperar la nacionalidad.
4. Inscribir la recuperación en el Registro Civil.

Si no resides en España, también puedes recuperarla solicitándolo en el consulado, pero se exige que vivas en España durante un **periodo razonable** (no fijado legalmente, valorado por el encargado).

## Documentación
- Solicitud normalizada.
- Certificado de nacimiento.
- Documentación que acredite la pérdida de la nacionalidad.
- Documento de residencia legal en España (NIE + autorización).
- Certificado de penales.

## Tasa
Modelo 790 código 026 (100 € en 2024).`,
    keyPoints: [
      'Se pierde al adquirir nacionalidad extranjera (salvo convenio doble)',
      'Recuperación: residencia legal en España + declaración',
      'Tasa 790/026: 100 €',
    ],
    officialLinks: [
      { label: 'Recuperación de nacionalidad — Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad/que-es-nacionalidad/como-recupera-nacionalidad' },
    ],
  },
  {
    id: 'recursos-apelaciones-extranjeria',
    category: 'legal',
    title: 'Recursos y apelaciones en extranjería',
    summary: 'Si te deniegan un permiso o te notifican una orden de expulsión, tienes derecho a recurrir. Plazos y tipos de recurso.',
    content: `Las resoluciones en materia de extranjería (denegación de autorizaciones, expulsiones, devoluciones, etc.) pueden ser recurridas. Existen varias vías.

## Recurso de reposición (vía administrativa)
- **Plazo**: 1 mes desde la notificación (si la resolución pone fin a la vía administrativa).
- Se interpone ante el **mismo órgano** que dictó la resolución.
- No exige abogado ni procurador, aunque es muy recomendable.
- Duración del procedimiento: hasta 1 mes; silencio = desestimación.

## Recurso contencioso-administrativo (vía judicial)
- Plazo: **2 meses** desde la notificación de la resolución recurrida o desde la desestimación del recurso de reposición.
- Se interpone ante el **Juzgado Contencioso-Administrativo**.
- Exige **abogado** (y procurador si la cuantía lo exige). Derecho a **justicia gratuita** si se cumplen los requisitos de ingresos (umbral IPREM + circunstancias especiales para extranjeros).
- Recurso de apelación ante la Sala de lo Contencioso-Administrativo del Tribunal Superior de Justicia en 15 días.

## Recurso de alzada
- Para resoluciones que **no** ponen fin a la vía administrativa (p. ej. sanciones leves).
- Plazo: **1 mes**.
- Se resuelve en 3 meses (silencio = desestimación).

## Recursos en vía de expulsión
- **Recurso de reposición** con efectos **suspensivos**: debes interponerlo en **15 días hábiles** desde la notificación. Si lo haces, la expulsión se paraliza hasta su resolución.
- **Recurso contencioso-administrativo** con solicitud de suspensión cautelar.

## Asistencia jurídica gratuita
Los extranjeros tienen derecho a **asistencia letrada gratuita** en los procedimientos administrativos o judiciales que puedan llevar a la denegación de entrada, retorno o expulsión, **independientemente de sus recursos económicos**. Comisión de Asistencia Jurídica Gratuita en cada colegio de abogados.`,
    keyPoints: [
      'Recurso reposición: 1 mes',
      'Contencioso-administrativo: 2 meses (con abogado)',
      'Expulsión: reposición en 15 días con efectos suspensivos',
      'Justicia gratuita: derecho en procedimientos de expulsión',
    ],
    officialLinks: [
      { label: 'Justicia Gratuita — Ministerio de Justicia', url: 'https://www.mjusticia.gob.es/es/ciudadania/tramites/asistencia-juridica-gratuita' },
      { label: 'Ley 4/2000 — Extranjería', url: 'https://www.boe.es/eli/es/lo/2000/01/11/4/con' },
    ],
  },
  {
    id: 'registro-ciudadanos-ue',
    category: 'documentation',
    title: 'Certificado de registro de ciudadano UE',
    summary: 'Si eres ciudadano de la Unión Europea y vas a vivir en España más de 3 meses, debes inscribirte en el Registro Central de Extranjeros.',
    content: `Los ciudadanos de la UE, EEE y Suiza que residan en España más de **3 meses** deben inscribirse en el **Registro Central de Extranjeros** y obtener un **certificado de registro** con su NIE.

## Requisitos
1. Ser ciudadano de un Estado miembro de la UE, EEE o Suiza.
2. No haber sido condenado por delitos graves (casos específicos).
3. Acreditar:
   - **Trabajador por cuenta ajena o propia**: no requiere medios.
   - **Estudiante**: seguro médico + matrícula + recursos suficientes.
   - **No activo (jubilado, rentista)**: seguro médico + recursos superiores al IPREM (en 2024: 600 €/mes + 150 € por cada familiar a cargo).

## Documentación
- Formulario **EX-18**.
- Pasaporte o DNI nacional.
- Documentación específica según el supuesto (contrato, certificado de estudios, etc.).
- Tasa **modelo 790 código 012** (10,71 € en 2024).

## Dónde
- Oficina de Extranjería o Comisaría de Policía Nacional de tu provincia.
- Cita previa obligatoria.

## Tarjeta de familiar de ciudadano de la Unión
Si un familiar **no comunitario** (cónyuge, pareja, hijo menor de 21 o a cargo, ascendiente a cargo) va a vivir contigo en España, debe solicitar la **tarjeta de familiar de ciudadano de la Unión** (formulario EX-19, válida 5 o 10 años).`,
    keyPoints: [
      'Obligatorio si resides en España +3 meses',
      'Formulario EX-18 + tasa 790/012 (10,71 €)',
      'Requiere medios si no trabajas: 600 €/mes IPREM 2024',
      'Familiares no UE: tarjeta familiar (EX-19)',
    ],
    officialLinks: [
      { label: 'Ciudadanos UE — Inmigración', url: 'https://www.inclusion.gob.es/web/migraciones/ciudadano-de-la-union-europea' },
      { label: 'Formulario EX-18', url: 'https://www.inclusion.gob.es/web/migraciones/modelos-generales' },
    ],
  },

  // ----------------------------------------------------------------------
  // SALUD (8 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'tarjeta-sanitaria-individual',
    category: 'health',
    title: 'Tarjeta Sanitaria Individual (TSI): cómo obtenerla',
    summary: 'La TSI te permite acceder a la sanidad pública gratuita en España. Pasos para obtenerla.',
    content: `La **Tarjeta Sanitaria Individual (TSI)** es el documento que identifica a cada usuario del Sistema Nacional de Salud. Permite acceder a la atención primaria, especializada, urgencias y hospitalización de la sanidad pública.

## ¿Quién tiene derecho?
- Personas **empadronadas** en un municipio español.
- Trabajadores **afiliados a la Seguridad Social** (o beneficiarios: cónyuge, hijos, ascendientes a cargo).
- Personas **sin recursos** o en situación de especial vulnerabilidad (sin seguro privado).
- **Embarazadas** y **menores** (tienen derecho aunque no estén regularizadas).

## Documentación necesaria
- DNI/NIE o pasaporte.
- **Certificado de empadronamiento** (volante o certificado).
- **Documento de afiliación** a la Seguridad Social (modelo TA1 o justificante de alta).
- Para beneficiarios: documento que acredite la relación (libro de familia, certificado de nacimiento).

## Dónde tramitarla
- **Centro de Salud** de tu zona (asignado según tu domicilio, consultar en el Ayuntamiento).
- Oficinas del Servicio de Salud de tu Comunidad Autónoma:
  - Madrid: **Tarjeta Sanitaria Individual** en centros de salud.
  - Cataluña: **CatSalut** (T-SIS).
  - Andalucía: **Tarjeta Sanitaria Individual** (centros de salud).
  - Comunidad Valenciana: **SIP**.
  - País Vasco: **Tarjeta Individual Sanitaria (OSakidetza)**.

## Vigencia
La tarjeta debe **renovarse** periódicamente (varía según la CCAA). Las personas que no cotizan a la Seguridad Social tienen una tarjeta con caducidad (suele ser 1-2 años).

## Atención transfronteriza
Si vienes de otro país UE con la **Tarjeta Sanitaria Europea (TSE)**, tienes derecho a asistencia sanitaria necesaria durante tu estancia temporal.`,
    keyPoints: [
      'TSI = acceso a sanidad pública',
      'Empadronamiento + afiliación SS (o sin recursos)',
      'Embarazadas y menores: derecho universal',
      'Renovación periódica según CCAA',
    ],
    officialLinks: [
      { label: 'Ministerio de Sanidad — Tarjeta sanitaria', url: 'https://www.sanidad.gob.es/areas/saludDigital/tarjetaSanitariaSNS/home.htm' },
      { label: 'Tarjeta Sanitaria Europea', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Ciudadanos/Inicio/Prestaciones/Prestacion10910' },
    ],
    emergencyPhone: '112',
  },
  {
    id: 'sanidad-universal-espana',
    category: 'health',
    title: 'Sanidad universal: derecho de urgencias',
    summary: 'En España, las urgencias médicas se atienden a cualquier persona, sin importar su situación administrativa.',
    content: `España reconoce el derecho a la **asistencia sanitaria de urgencia** a cualquier persona, con independencia de su situación administrativa, en virtud de la Ley 16/2003 de cohesión y calidad del SNS y del RD 7/2018.

## ¿Qué cubre la atención de urgencias?
- Atención inmediata en **servicios de urgencias hospitalarias** y **centros de salud**.
- Tratamiento de las patologías urgentes hasta su **estabilización clínica**.
- Asistencia al **embarazo, parto y puerperio**.
- Asistencia a **menores de 18 años** (atención completa).
- Atención de **enfermedades transmisibles** (tuberculosis, VIH, hepatitis, etc.) declaradas de declaración obligatoria.

## Personas sin autorización de residencia
- Pueden solicitar la **tarjeta sanitaria** mediante el documento **SIP-EX** o equivalente en cada CCAA, acreditando que no pueden acreditar la condición de asegurado por otra vía.
- Tienen derecho a la **atención primaria** y **especializada** en las mismas condiciones que el resto de la población, salvo en tratamientos no urgentes que se regulan según CCAA.

## Documentación
- Empadronamiento.
- Declaración responsable de no tener derecho a la asistencia sanitaria por otra vía (p. ej. no ser beneficiario de la SS, ni tener seguro privado).

## Atención en urgencias
- Llama al **112** o al **061** (urgencias sanitarias).
- Acude al servicio de urgencias del **hospital más cercano** o al **centro de salud**.
- En caso de urgencia vital, no se te puede denegar la atención aunque no lleves documentación.

## Recomendaciones
- Lleva siempre contigo tu tarjeta sanitaria (o volante de empadronamiento).
- Anota tu grupo sanguíneo, alergias y medicación habitual en tu móvil.`,
    keyPoints: [
      'Urgencias: derecho universal, sin distinción de situación',
      'Menores de 18: atención completa',
      'Embarazadas: derecho completo durante embarazo, parto y puerperio',
      'Sin autorización: solicitar SIP-EX o equivalente en CCAA',
    ],
    officialLinks: [
      { label: 'RD 7/2018 — Sanidad universal', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-3249' },
      { label: 'Ministerio de Sanidad — Ciudadanos', url: 'https://www.sanidad.gob.es/servCiudadanos/home.htm' },
    ],
    emergencyPhone: '112',
  },
  {
    id: 'centro-salud-como-registrarse',
    category: 'health',
    title: 'Centro de Salud: cómo registrarse',
    summary: 'El primer paso para acceder a la sanidad pública es asignarte a un médico de cabecera y pediatra en tu Centro de Salud.',
    content: `El **Centro de Salud** es el primer nivel de atención sanitaria en España (atención primaria). Cada ciudadano se asigna a un **centro de salud** según su domicilio y, dentro de éste, a un **médico de familia** y un **enfermero/a**. Los menores de 14 años se asignan a un **pediatra**.

## Pasos para registrarse
1. **Empadronarte** en tu municipio.
2. Solicitar la **Tarjeta Sanitaria Individual** (TSI).
3. Acudir al centro de salud que te corresponda (consulta en el Ayuntamiento o en la web de tu consejería de salud).
4. Rellenar el formulario de adscripción al médico y pediatra.
5. Te asignarán médico/enfermero. A partir de ese momento puedes pedir **cita previa**.

## Cita previa
- **Teléfono**: 900 200 220 (varía según CCAA; en Madrid: 912 81 00 00, Cataluña: 902 11 12 33, etc.).
- **Web**: cada CCAA tiene su plataforma (ClicSalud, e-Salud, Castilla y León Salud, etc.).
- **App móvil**: la mayoría de CCAA tienen app oficial.
- Presencialmente en el centro de salud.

## Servicios del centro de salud
- Medicina de familia y pediatría.
- Enfermería (curas, vacunas, controles).
- Matrona (embarazo, planificación familiar).
- Trabajo social.
- Fisioterapia (con derivación).
- Salud mental (psicólogo y psiquiatra).
- Atención domiciliaria (si no puedes desplazarte).

## Urgencias fuera del horario
- **Centro de Atención Continuada (CUAP, PACS)**: para urgencias no graves fuera del horario del centro de salud.
- **061**: para emergencias sanitarias graves.
- **112**: para emergencias generales.

## Recomendaciones
- Lleva tu historial médico traducido si lo tienes.
- Anota alergias y medicación en una tarjeta que lleves siempre contigo.`,
    keyPoints: [
      'Centro asignado según tu domicilio',
      'Pediatra para menores de 14 años',
      'Cita previa: web, app o teléfono (900 200 220 nacional)',
      'Atención domiciliaria si no puedes desplazarte',
    ],
    officialLinks: [
    ],
    emergencyPhone: '900 200 220',
  },
  {
    id: 'urgencias-112-061',
    category: 'health',
    title: 'Urgencias: 112 y 061',
    summary: 'El 112 es el teléfono gratuito de emergencias generales. El 061 es específico para emergencias sanitarias. Cuándo usar cada uno.',
    content: `España dispone de un sistema de emergencias que coordina policía, sanidad, bomberos y protección civil.

## 112 — Emergencias generales
- **Gratuito** y disponible las **24 horas**, los 365 días.
- Atiende **cualquier emergencia** (sanitaria, policial, accidentes, incendios, catástrofes).
- Puedes llamar **sin cobertura** de tu operador e incluso **sin tarjeta SIM**.
- Disponible en **español, inglés, francés, alemán y árabe** (varía según CCAA).
- Cuando llamas, te derivan a bomberos, policía o urgencias sanitarias según el caso.

## 061 — Urgencias sanitarias
- Teléfono específico de **emergencias sanitarias**.
- Lo atiende personal sanitario que valora la urgencia y envía la ambulancia adecuada (básica o medicalizada) o deriva al centro adecuado.
- Disponible las 24 horas.
- Útil para: infarto, accidente grave, dificultad respiratoria, convulsiones, hemorragia importante, etc.

## Cuándo usar cada uno
- Si la urgencia es **claramente sanitaria**: 061.
- Si no sabes o es **mixta** (accidente con heridos, por ejemplo): 112 derivará al 061.
- Para **urgencias no vitales** (fiebre, dolor leve): acude al centro de salud o al servicio de urgencias del hospital más cercano.

## Otros teléfonos sanitarios de interés
- **024**: Línea de prevención del suicidio (24h, gratuita).
- **900 200 220**: cita previa sanitaria.
- **900 161 616**: información de la Seguridad Social.

## Recomendaciones al llamar
- Indica con calma: qué ha pasado, dónde estás (dirección exacta), cuántas personas afectadas.
- No cuelgues hasta que el operador te lo indique.
- Mantén el teléfono libre para que puedan llamarte si necesitan más datos.`,
    keyPoints: [
      '112: emergencias generales 24h, gratis, sin SIM',
      '061: emergencias sanitarias específicas',
      'Idiomas en 112: ES, EN, FR, DE, AR',
      '024: prevención del suicidio',
    ],
    officialLinks: [
      { label: '112 España', url: 'https://www.112.es/' },
      { label: '061 — Sanidad', url: 'https://www.sanidad.gob.es/profesionales/prestacionesSanitarias/CarteraDeServicios/ContenidoCS/4AtencionDeUrgencia/AU-AtencionUrgencia.htm' },
    ],
    emergencyPhone: '112',
  },
  {
    id: 'salud-mental-inmigrantes',
    category: 'health',
    title: 'Salud mental para inmigrantes',
    summary: 'Migrar es un proceso estresante. España ofrece atención psicológica gratuita en centros de salud y recursos específicos.',
    content: `La salud mental es un derecho. La migración conlleva factores de riesgo: duelo migratorio, separación familiar, precariedad laboral, racismo, soledad. España dispone de recursos gratuitos.

## Recursos en la sanidad pública
- **Centro de salud**: pide cita con tu médico de familia para derivación a salud mental.
- **Unidad de Salud Mental (USM)**: psicólogos clínicos y psiquiatras de atención especializada. Acceso por derivación del médico de cabecera.
- **Centro de Salud Mental Infantil y Juvenil (CSMIJ)**: para menores.
- **Hospital de Día** y **hospitalización** para casos graves.

## Otros recursos
- **024 — Teléfono de la Esperanza**: prevención del suicidio y apoyo emocional, 24h, gratuito, confidencial.
- **Teléfono de la Esperanza**: 711 385 385 (24h).
- **Teléfono Andaluz de la Esperanza**: 900 200 202 (Andalucía).
- **Atención psicológica en ONG**: ACCEM, CEAR, Cruz Roja, Médicos del Mundo ofrecen apoyo psicológico gratuito a inmigrantes y refugiados.
- **Teléfono 016** (violencia de género): incluye apoyo psicológico a mujeres víctimas.

## Recomendaciones
- No esperes a "estar mal del todo". La prevención es clave.
- Es **normal** sentir tristeza, ansiedad o soledad tras migrar.
- La atención psicológica en la sanidad pública es **gratuita** y **confidencial**.
- Si tienes **pensamientos de muerte**, llama al 024 o acude a urgencias.

## Cuidar tu salud mental
- Mantén contacto con familia y amigos (videollamadas).
- Busca comunidades de tu país o grupos culturales.
- Practica ejercicio y duerme adecuadamente.
- Limita el consumo de alcohol y otras sustancias.
- Si tienes creencias religiosas, acude a tu comunidad.`,
    keyPoints: [
      'Centro de salud: derivación a Unidad de Salud Mental',
      '024: prevención del suicidio (24h, gratis)',
      'ACCEM, CEAR, Cruz Roja, Médicos del Mundo: apoyo gratuito',
      'Atención gratuita y confidencial',
    ],
    officialLinks: [
      { label: '024 — Prevención del suicidio', url: 'https://www.024info.es/' },
      { label: 'Médicos del Mundo', url: 'https://www.medicodelmundo.org/' },
    ],
    emergencyPhone: '024',
  },
  {
    id: 'atencion-mujeres-embarazadas',
    category: 'health',
    title: 'Atención a mujeres embarazadas sin seguro',
    summary: 'Toda mujer embarazada tiene derecho a atención prenatal, parto y puerperio, sin importar su situación administrativa.',
    content: `Las mujeres embarazadas en España tienen derecho a **atención sanitaria completa durante el embarazo, parto y puerperio**, con independencia de su situación administrativa (RD 7/2018).

## Derechos
- **Atención prenatal**: análisis, ecografías, controles.
- **Parto** en hospital público.
- **Puerperio** (6 semanas tras el parto): control materno y del recién nacido.
- **Atención al recién nacido** hasta los 18 años.
- **Interrupción voluntaria del embarazo (IVE)** en los supuestos legales (hasta 14 semanas por elección, plazos ampliados en caso de riesgo para la madre o anomalías fetales graves).

## Documentación necesaria
- Empadronamiento.
- Pasaporte o documento identificativo.
- Si no tienes tarjetas sanitarias, acude al centro de salud y solicita el **SIP-EX** o documento equivalente.

## Trámites importantes
1. **Empadronarte** cuanto antes.
2. Solicitar **TSI** (en algunos casos, documento sanitario de embarazada).
3. **Cita con matrona** en tu centro de salud (1ª visita antes de la semana 12).
4. **Libro de embarazo** (lo facilita la matrona).
5. **Inscribir el nacimiento** en el Registro Civil dentro de los 8 días siguientes al parto.

## Prestaciones económicas
- **Bono maternal** (Seguridad Social): para trabajadoras que no llegan al periodo mínimo de cotización para el permiso de maternidad. 7 semanas a partir de la 39ª semana, en cuantía igual al SMI.
- **Prestación de maternidad** (16 semanas): si cotizaste al menos 180 días en los 7 años anteriores o 360 días a lo largo de la vida laboral.
- **Prestación no contributiva por hijo a cargo** (deducción de 1.200 € anuales para madres con hijos menores de 3 años, sin ingresos o bajos).

## Recomendaciones
- Asiste a **todas las citas prenatales**.
- Anota tus dudas para la matrona.
- Pregunta por **preparación al parto** (gratuita en muchos centros de salud).
- Si sufres **violencia de género**, llama al **016**.`,
    keyPoints: [
      'Derecho completo durante embarazo, parto y puerperio',
      'Sin seguros ni autorización: SIP-EX',
      'Bono maternal + prestación de maternidad (16 semanas)',
      'Inscribir al recién nacido en Registro Civil (8 días)',
    ],
    officialLinks: [
      { label: 'Prestación de maternidad — Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10981_12' },
    ],
    emergencyPhone: '112',
  },
  {
    id: 'vacunacion-cartilla-infantil',
    category: 'health',
    title: 'Vacunación y cartilla infantil',
    summary: 'España tiene un calendario vacunal gratuito. Tu hijo/a debe estar vacunado para escolarizarse y proteger su salud.',
    content: `España dispone de un **calendario vacunal** gratuito y recomendado por el Consejo Interterritorial del Sistema Nacional de Salud. Es muy similar en todas las CCAA, con ligeras variaciones.

## Calendario vacunal infantil (2024)
- **Recién nacido**: hepatitis B (dosis al nacer en algunos casos).
- **2, 4, 6 meses**: hexavalente (difteria, tétanos, tos ferina, polio, Hib, hepatitis B), meningococo B y C, neumococo, rotavirus (varía según CCAA).
- **12 meses**: triple vírica (sarampión, rubéola, parotiditis), meningococo C, neumococo.
- **15 meses**: refuerzos.
- **4 años**: refuerzos triple vírica, DTPa, polio.
- **6 años**: refuerzo DTPa.
- **12 años**: VPH (virus del papiloma humano, ambos sexos), meningococo ACWY.
- **14 años**: refuerzo tos ferina, tétanos, difteria.

## Cartilla infantil
- Se facilita en el centro de salud al nacer o al adscribir al pediatra.
- Incluye el calendario vacunal y controles de salud (peso, talla, desarrollo).
- Existe también en formato electrónico en muchas CCAA.

## Vacunación de niños llegados del extranjero
- Si tu hijo llega a España sin haber sido vacunado, el pediatra adaptará el calendario según su edad y país de origen.
- No se exigen traducciones de la cartilla de tu país, pero se recomienda aportarla legalizada.

## Vacunación de adultos
- **Gripe** (anual, recomendada para mayores de 60, embarazadas, personal sanitario, grupos de riesgo).
- **COVID-19** (anual para mayores de 60 y grupos de riesgo).
- **Tétanos-difteria**: refuerzo cada 10 años.
- **Hepatitis A y B** si no estás vacunado.
- **MMR** (sarampión) si naciste después de 1971 y no has pasado la enfermedad.

## Recomendaciones
- Lleva siempre la cartilla infantil a las citas.
- Si viajas a tu país de origen con tus hijos, comprueba que tienen las vacunas al día.`,
    keyPoints: [
      'Calendario vacunal gratuito en sanidad pública',
      'Pediatra adapta calendario si llegas del extranjero',
      'Vacunas adultas: gripe (60+), tétanos (cada 10 años)',
      'Cartilla infantil electrónica en muchas CCAA',
    ],
    officialLinks: [
      { label: 'Calendario vacunal — Ministerio de Sanidad', url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm' },
    ],
  },
  {
    id: 'prestaciones-incapacidad',
    category: 'health',
    title: 'Prestaciones por incapacidad',
    summary: 'Si una enfermedad o accidente te impide trabajar, puedes solicitar una prestación por incapacidad temporal o permanente.',
    content: `En España existen varias prestaciones que protegen a las personas que, por enfermedad o accidente, no pueden trabajar.

## Incapacidad Temporal (IT)
- Para trabajadores en alta o asimilada al alta en la Seguridad Social.
- **Duración**: máxima 18 meses (prorrogables 6 meses más en casos excepcionales).
- **Cuantía**:
  - Enfermedad común: 60% desde el día 4 al 20; 75% desde el día 21.
  - Enfermedad profesional o accidente (laboral o no): 75% desde el día siguiente a la baja.
- Para acceder a ella, debes estar dado de alta en la SS y cumplir periodos mínimos de cotización (180 días en los 5 años anteriores si es enfermedad común).

## Incapacidad Permanente (IP)
4 grados, según el grado de reducción de la capacidad laboral:
1. **Parcial**: <33%. Indemnización a tanto alzado.
2. **Total**: 33-65%. No puede realizar su profesión pero sí otra. Pensión: 55% base reguladora.
3. **Absoluta**: no puede realizar ninguna profesión. Pensión: 100% base reguladora.
4. **Gran invalidez**: además, necesita asistencia de otra persona. Pensión: 100% + complemento por asistencia.

## Requisitos
- Estar afiliado y en alta o situación asimilada.
- Periodo mínimo de cotización según edad y grado (si es enfermedad común).
- Si es **accidente no laboral o enfermedad profesional**: sin periodo mínimo.
- Informe médico del EVI (Equipo de Valoración de Incapacidades).

## Invalidez no contributiva
Para personas con **65% o más de discapacidad**, en edad de trabajar, sin cotización suficiente y con bajos ingresos. Cuantía 2024: **6.784,54 €/año** (cantidad similar al IPREM).

## Cómo solicitar
- IT: a través de la mutua o de la Seguridad Social (médico de cabecera).
- IP: en la Seguridad Social con formularios específicos y dictamen del EVI.
- INC: en el IMSERSO o CCAA con competencias.

## Recursos
- Asistencia jurídica gratuita si recurres la resolución.
- Mutualidades de funcionarios (MUFACE, ISFAS, MUGEJU) si trabajas en la Administración.`,
    keyPoints: [
      'IT: máxima 18+6 meses, 60-75% base reguladora',
      'IP: 4 grados (parcial, total, absoluta, gran invalidez)',
      'INC: 65%+ discapacidad, 6.784 €/año (2024)',
      'Dictamen del EVI obligatorio',
    ],
    officialLinks: [
      { label: 'Incapacidad — Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10981_19' },
      { label: 'IMSERSO — Invalidez no contributiva', url: 'https://imserso.es/pnc-prestaciones-subvenciones' },
    ],
  },

  // ----------------------------------------------------------------------
  // VIVIENDA (8 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'alquiler-espana-contratos-fianza',
    category: 'housing',
    title: 'Alquiler en España: contratos, fianza y derechos',
    summary: 'Cómo funciona el alquiler en España: duración del contrato, fianza, derechos del inquilino y cláusulas abusivas.',
    content: `El alquiler de vivienda en España se regula por la **Ley de Arrendamientos Urbanos (LAU)**, modificada por la **Ley 12/2023** de derecho a la vivienda.

## Tipos de contrato
- **Arrendamiento de vivienda habitual**: para residencia permanente.
- **Arrendamiento de temporada**: máximo 11 meses (para uso temporal justificado).
- **Arrendamiento de habitación**: no se considera arrendamiento de vivienda.

## Duración
- **Duración mínima**: 5 años (si el propietario es persona física) o 7 años (si es empresa).
- Prórroga tácita de 1 año en 1 año hasta llegar a los 3 años si el inquilino lo solicita.

## Fianza
- **Obligatoria**: 1 mensualidad de renta (en vivienda habitual) o 2 (en temporada).
- Depósito en el Instituto de la Vivienda de la CCAA.
- Se devuelve al finalizar el contrato, descontando daños si los hubiera.

## Renta
- **Actualización anual** solo por **IPC** (sistema nuevo desde 2023).
- En zonas tensionadas, límites de actualización.

## Derechos del inquilino
- **Renuncia anticipada** tras 6 meses de contrato, con preaviso de 30 días.
- **Subrogación** por cónyuge o persona conviviente en caso de fallecimiento.
- **Compra优先**: derecho de tanteo y retracto si el propietario vende la vivienda.
- Mantenimiento de la vivienda a cargo del propietario (salvo daños causados por el inquilino).
- El propietario **no puede exigir más de 2 meses** de fianza (1 mensualidad + 1 adicional) salvo en temporada.

## Cláusulas abusivas prohibidas
- Renuncia a derechos reconocidos en la LAU.
- Penalizaciones desproporcionadas por abandono anticipado.
- Pago de gastos de comunidad a cargo del inquilino (es obligación del propietario, salvo pacto en contrario).
- Revisión de la renta por encima del IPC.

## Recomendaciones
- Exige **contrato por escrito**.
- Haz **inventario** con fotos del estado de la vivienda al entrar.
- **No pagues en efectivo** sin recibo.
- Comprueba que la vivienda tiene **certificado energético** y **cedula de habitabilidad**.`,
    keyPoints: [
      'Duración mínima: 5 años (persona física), 7 años (empresa)',
      'Fianza: 1 mensualidad de renta',
      'Actualización de renta: solo IPC',
      'Renuncia anticipada tras 6 meses (preaviso 30 días)',
      'Máximo 2 mensualidades anticipadas al entrar',
    ],
    officialLinks: [
      { label: 'Ley 12/2023 — Derecho a la vivienda', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-14241' },
      { label: 'Ley de Arrendamientos Urbanos (LAU)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003' },
    ],
  },
  {
    id: 'ayudas-alquiler-plan-vivienda',
    category: 'housing',
    title: 'Ayudas al alquiler (Plan Estatal de Vivienda 2022-2025)',
    summary: 'El Plan Estatal de Vivienda ofrece ayudas al alquiler para personas con bajos ingresos, jóvenes y víctimas de violencia.',
    content: `El **Plan Estatal de Vivienda 2022-2025** (prorrogado hasta 2026) financia ayudas al alquiler gestionadas por las Comunidades Autónomas.

## Ayudas principales
1. **Ayuda al alquiler de vivienda**: para personas con ingresos inferiores a 3 veces el IPREM (anual).
2. **Programa Bono Alquiler Joven**: para jóvenes hasta 35 años con ingresos inferiores a 3 veces el IPREM. Hasta 250 €/mes.
3. **Ayudas a colectivos vulnerables** (víctimas de violencia de género, personas sin hogar, desahuciados).
4. **Programa de vivienda para personas mayores** (mayores de 65 años).

## Requisitos generales
- Ser **mayor de 18 años** (o emancipado).
- Ingresos de la unidad de convivencia:
  - Inferiores a **3 veces el IPREM** (general).
  - Inferiores a **5 veces el IPREM** para familias numerosas o con discapacidad.
  - Inferiores a **7 veces el IPREM** para categorías especiales.
- Ser titular del contrato de alquiler.
- Que la vivienda sea residencia habitual.
- No ser propietario de otra vivienda (salvo en casos de desahucio o violencia de género).

## Cuantía
- Hasta el **40% de la cuota mensual** del alquiler (50% en zonas tensionadas).
- Hasta **600 €/mes** (10.800 €/año).
- En **zonas tensionadas**, hasta 70% si los ingresos son < 3 IPREM.

## Dónde y cuándo solicitar
- En la **Consejería de Vivienda** de tu CCAA.
- Convocatorias anuales: conviene estar atento a las publicaciones oficiales.
- **Renta de inclusión / Ingreso Mínimo Vital** (IMV): complementario, gestionado por la Seguridad Social.

## Documentación
- DNI/NIE.
- Contrato de alquiler y última nómina/recibo.
- Declaración de la renta o certificado de imputaciones (AEAT).
- Libro de familia si aplica.`,
    keyPoints: [
      'Plan Estatal de Vivienda 2022-2025 (prorrogado 2026)',
      'Ingresos < 3 IPREM (5-7 veces en casos especiales)',
      'Hasta 600 €/mes (40-70% de la renta)',
      'Bono Alquiler Joven: hasta 250 €/mes (< 35 años)',
    ],
    officialLinks: [
      { label: 'Plan Estatal de Vivienda 2022-2025', url: 'https://www.mivurn.gob.es/vivienda/planes/plan-estatal-vivienda-2022-2025.html' },
      { label: 'Buscador de ayudas CCAA', url: 'https://www.mivurn.gob.es/vivienda/ayudas-comunidades-autonomas.html' },
    ],
  },
  {
    id: 'vivienda-social-protegida',
    category: 'housing',
    title: 'Vivienda social y protegida',
    summary: 'Las viviendas de protección oficial (VPO) tienen precios limitados y requisitos de ingresos.',
    content: `La **vivienda protegida** (VPO, VPT, VPP) es vivienda de precio limitado, promovida por las administraciones públicas o por promotores privados con ayudas públicas.

## Tipos
- **Vivienda de Protección Oficial (VPO)**: precio máximo fijado por la administración.
- **Vivienda de Precio Tasado (VPT)**: precio algo más alto que VPO pero limitado.
- **Vivienda de Promoción Pública (VPP)**: promovida por la administración, normalmente en alquiler social (renta < 30% ingresos).
- **Vivienda con protección pública en alquiler**: alquileres por debajo del mercado.

## Requisitos
- No ser titular de otra vivienda a tu nombre.
- Cumplir los **límites de ingresos** (varían según CCAA y tipo de vivienda; en general, inferiores a 5,5 veces el IPREM).
- Estar inscrito en el **Registro de Demandantes de Vivienda Protegida** de tu CCAA.
- Cumplir los requisitos de edad (en algunos casos, jóvenes < 35 o mayores).

## Cómo inscribirse en el registro
1. Solicitar en la Consejería de Vivienda de tu CCAA.
2. Aportar DNI/NIE, certificado de ingresos, situación familiar, etc.
3. La inscripción **debe renovarse** periódicamente (cada 1-3 años según CCAA).
4. Cuando hay viviendas disponibles, se asigna por orden de inscripción o por baremo.

## Alquiler social
- Renta máxima: porcentaje de los ingresos de la unidad de convivencia (habitualmente < 30%).
- Duración del contrato: 5-7 años, renovables.

## Recomendaciones
- Inscribirse cuanto antes (la lista de espera puede ser larga).
- Actualizar la inscripción cuando cambien tus circunstancias.`,
    keyPoints: [
      'VPO, VPT, VPP: viviendas de precio limitado',
      'Inscripción en Registro de Demandantes (CCAA)',
      'Ingresos máximos: 5,5 IPREM (varía)',
      'Renovación periódica de la inscripción',
    ],
    officialLinks: [
      { label: 'Vivienda protegida — MITMA', url: 'https://www.mivurn.gob.es/vivienda/viviendaprotegida/home.htm' },
    ],
  },
  {
    id: 'desahucios-que-hacer',
    category: 'housing',
    title: 'Desahucios: qué hacer y recursos legales',
    summary: 'Si te enfrentas a un desahucio, hay recursos legales y sociales para evitar quedarte sin vivienda.',
    content: `Un **desahucio** es el procedimiento judicial por el cual el propietario reclama la vivienda al inquilino, normalmente por **impago de renta** o por finalización del contrato.

## Causas más frecuentes
- Impago de renta o de cantidades asimiladas (comunidad, IBI).
- Ocupación ilegal de la vivienda.
- Finalización del plazo contractual (en contratos de temporada).
- Realización de actividades molestas, insalubres, nocivas o peligrosas.

## Procedimiento
1. **Requerimiento previo**: el propietario reclama el pago o el desalojo por escrito.
2. **Demanda**: en el juzgado de primera instancia del domicilio.
3. **Lanzamiento**: si no se opone ni se paga, el juez señala fecha de lanzamiento (entre 10 y 30 días desde la resolución).

## Recursos
### Servicios Sociales del Ayuntamiento
- Pueden ofrecer **alojamiento alternativo** (pisos de emergencia social).
- **Mediación** con el propietario para acuerdos de pago.
- Información y asesoramiento jurídico.

### Defensor del Pueblo
- Atiende quejas por actuaciones de la administración.

### Asistencia jurídica gratuita
- Si tienes bajos ingresos, tienes derecho a abogado de oficio (turno de oficio en el colegio de abogados de tu provincia).

### Servicios de Intervención Especializada en Vivienda (SIE)
- Algunas CCAA disponen de servicios de mediación hipotecaria y de alquiler.

### Real Decreto-ley 3/2024 y medidas de protección
- Prórroga del Código de Buenas Prácticas para personas vulnerables con hipoteca.
- Prohibición de corte de suministros básicos (luz, agua, gas) en hogares vulnerables.

## Prevención
- **No dejes de pagar** sin avisar a servicios sociales.
- Si no puedes pagar, comunica la situación cuanto antes al propietario y a servicios sociales.
- Solicita las **ayudas al alquiler** que correspondan.
- Acude a una **ONG de vivienda** (Paz y Vida, PAH — Plataforma de Afectados por la Hipoteca, Cáritas).

## Teléfono de interés
- **016** si la situación está relacionada con violencia de género (las víctimas tienen protección especial frente al desahucio).`,
    keyPoints: [
      'Requerimiento previo, demanda, lanzamiento',
      'Servicios Sociales del Ayuntamiento: alojamiento y mediación',
      'Abogado de oficio si bajos ingresos',
      'PAH, Cáritas: apoyo social y jurídico',
    ],
    officialLinks: [
      { label: 'Plataforma de Afectados por la Hipoteca (PAH)', url: 'https://afectadosporlahipoteca.com/' },
    ],
    emergencyPhone: '016',
  },
  {
    id: 'hipotecas-no-residentes',
    category: 'housing',
    title: 'Hipotecas para no residentes',
    summary: 'Si resides fuera de España o no tienes NIE con residencia permanente, puedes acceder a una hipoteca, pero con condiciones más exigentes.',
    content: `Las personas extranjeras, ya sean residentes o no residentes en España, pueden solicitar una hipoteca para comprar vivienda.

## Tipos de hipotecas para extranjeros
- **Hipoteca para residentes**: condiciones similares a las de un español (hasta 80% del valor de tasación).
- **Hipoteca para no residentes**: financiación menor (generalmente **50-60%** del valor de tasación), tipos de interés algo más altos y comisiones de apertura.
- **Hipotecas para expatriados** que planean regresar a España.

## Requisitos habituales
- **NIE** (obligatorio).
- Pasaporte vigente.
- **Contrato de trabajo** con antigüedad mínima (1-3 años).
- **Ingresos** demostrables (nóminas, declaraciones de impuestos).
- No figurar en **listas de morosos** (ASNEF, RAI).
- Avalista en algunos casos.
- **Tasación** de la vivienda.

## Tipos de interés
- **Fijo**: cuota estable. Actualmente (2024) entre 2,5% y 3,5%.
- **Variable**: Euribor + diferencial. Diferencial 0,75-1,50%.
- **Mixto**: fijo durante un periodo inicial y luego variable.

## Gastos de la compraventa
- **ITP** (Impuesto de Transmisiones Patrimoniales): 6-11% según CCAA (vivienda usada).
- **IVA** 10% (vivienda nueva).
- Notaría, registro, gestoría: aprox. 1-1,5% del valor.
- Tasación: 300-500 €.
- Comisión de apertura del banco: 0,5-2%.

## Recomendaciones
- **Compara ofertas** de varios bancos.
- Considera un **broker hipotecario** (algunos cobran, otros gratis).
- No te endeudes por encima del **35% de tus ingresos mensuales** en cuota hipotecaria.
- Comprueba que la vivienda tiene **licencia de primera ocupación** y **cédula de habitabilidad**.

## Banco de España
El Banco de España supervisa la transparencia del mercado hipotecario. Si crees que te han aplicado cláusulas abusivas (suelo, vencimiento anticipado, etc.), puedes reclamar.`,
    keyPoints: [
      'No residentes: financiación 50-60%',
      'NIE obligatorio + ingresos demostrables',
      'Tipos 2024: fijo 2,5-3,5% | variable Euribor + 0,75-1,50%',
      'Gastos compraventa: 10-12% adicional (ITP/IVA + notaría)',
    ],
    officialLinks: [
      { label: 'Banco de España — Hipotecas', url: 'https://clientebancario.bde.es/pcb/es/' },
      { label: 'Comparador hipotecas — HelpMyCash', url: 'https://www.helpmycash.com/hipotecas/' },
    ],
  },
  {
    id: 'habitaciones-pisos-compartidos',
    category: 'housing',
    title: 'Habitaciones y pisos compartidos: precauciones',
    summary: 'Alquilar una habitación es una opción habitual para inmigrantes. Cómo evitar estafas y proteger tus derechos.',
    content: `Alquilar una **habitación** en un piso compartido es la opción más económica para muchas personas inmigrantes. El arrendamiento de habitación se rige por el **Código Civil** y no por la LAU, por lo que tiene menos protección.

## Contrato
- No es obligatorio por escrito, pero **muy recomendable**.
- Especificar: duración, renta, fianza, gastos incluidos, normas de convivencia.
- Duración libremente pactada (no se aplica el mínimo de 5 años de la LAU).

## Fianza
- Suele ser de **1 mensualidad**.
- Debe devolverse al final del contrato, salvo daños o impagos.

## Gastos
- Aclarar si la renta incluye **luz, agua, gas, internet, comunidad**.
- En piso compartido, los gastos suelen dividirse entre los habitantes.

## Precauciones contra estafas
1. **No transfieras dinero sin haber visitado** la habitación en persona.
2. **Verifica la identidad** del arrendatario (DNI).
3. Comprueba que el arrendatario **es el titular del contrato** del piso o tiene autorización del propietario para subarrendar.
4. **No aceptes contratos verbales** que no especifiquen condiciones.
5. Cuidado con **anuncios en Idealista, Fotocasa, Airbnb** con precios excesivamente bajos o sin fotos.
6. **No pagues** fianza y mes por adelantado a particulares que no puedan demostrar la titularidad.

## Documentos que debes conservar
- Contrato firmado.
- Justificantes de pago (transferencia o recibo firmado).
- Fotos del estado de la habitación al entrar.
- Volante de empadronamiento en esa dirección.

## Derechos básicos
- A recibir recibo de los pagos.
- A no ser desahuciado sin preaviso (mínimo 30 días salvo pacto).
- A la devolución de la fianza.

## Plataformas recomendadas
- **Idealista, Fotocasa, Pisos.com, Badi, Spotahome**.
- **Redes sociales**: grupos de Facebook "Pisos en [ciudad]" — pero con máxima precaución.`,
    keyPoints: [
      'Contrato por escrito recomendable',
      'Fianza: 1 mensualidad, devolver al final',
      'Nunca pagues sin visitar la habitación',
      'Verifica identidad y titularidad del piso',
    ],
    officialLinks: [
      { label: 'Idealista — Alquiler habitaciones', url: 'https://www.idealista.com/alquiler-habitaciones' },
      { label: 'OCU — Estafas alquiler', url: 'https://www.ocu.org/' },
    ],
  },
  {
    id: 'bono-social-electrico',
    category: 'housing',
    title: 'Bono social eléctrico',
    summary: 'Si tienes bajos ingresos, el bono social eléctrico reduce tu factura de la luz. Cómo solicitarlo.',
    content: `El **bono social eléctrico** es un descuento en la factura de la electricidad para hogares vulnerables. Lo establece el **Real Decreto-ley 6/2022** y se aplica en el **PVPC** (Precio Voluntario para el Pequeño Consumidor).

## Beneficiarios
1. **Consumidor vulnerable**: ingresos ≤ 2 veces el IPREM (14.079,56 €/año en 2024 para una familia general).
2. **Vulnerable severo**: ingresos ≤ 1 vez el IPREM o familia numerosa con ingresos ≤ 1,5 IPREM.
3. **Vulnerable severo elevado consumo**: consumos elevados por necesidades (dependencia, climatización).
4. **Familias monoparentales con hijos menores**: aumentan los umbrales.
5. **Víctimas de violencia de género**.
6. **Personas con discapacidad ≥ 33%**.

## Descuentos (vigentes 2024)
- Vulnerable: descuento del **25%** sobre el PVPC.
- Vulnerable severo: descuento del **65%**.
- Vulnerable severo elevado consumo: descuento del **65%** + exención de los peajes.
- Víctimas de violencia de género: descuento del **25%**.

## Requisitos
- Tener contratada la **tarifa PVPC** (potencia contratada ≤ 10 kW).
- No tener el suministro dado de baja por impago.

## Cómo solicitar
1. **Cita previa** en servicios sociales del Ayuntamiento (para informe de vulnerabilidad).
2. Presentar el formulario del bono social a tu **comercializadora de referencia** (Endesa, Iberdrola, Naturgy, EDP, Repsol, etc.).
3. Documentación: DNI/NIE, certificado de empadronamiento, libro de familia, declaraciones de ingresos.
4. Renovación **cada 2 años** (cada 6 meses si es vulnerable severo).

## Prohibición de corte
- Las comercializadoras **no pueden cortar** el suministro eléctrico a hogares vulnerables por impago.
- Deben ofrecerte un plan de pago a plazos.

## Recomendaciones
- Si recibes el bono social, puedes solicitar también el **bono térmico** (ayuda para calefacción gas/gasóleo) si tu vivienda tiene esa fuente de calor.`,
    keyPoints: [
      'Descuento 25-65% sobre la tarifa PVPC',
      'Ingresos ≤ 2 IPREM (vulnerable), ≤ 1 IPREM (severo)',
      'Renovación cada 2 años (6 meses severo)',
      'Prohibido corte por impago en hogares vulnerables',
    ],
    officialLinks: [
      { label: 'Bono social eléctrico — CNMC', url: 'https://sede.cnmc.gob.es/' },
      { label: 'Bono social — Ministerio transición ecológica', url: 'https://www.miteco.gob.es/es/electricidad-y-gas/consumidores/bono-social.html' },
    ],
  },
  {
    id: 'agua-servicios-basicos',
    category: 'housing',
    title: 'Agua y servicios básicos: derechos del consumidor',
    summary: 'El corte de agua, gas o electricidad en hogares vulnerables está prohibido. Cómo actuar y qué ayudas existen.',
    content: `Los servicios básicos (agua, electricidad, gas, telecomunicaciones) son considerados **servicios esenciales** y están protegidos en España, especialmente para hogares vulnerables.

## Derechos básicos
- **Prohibición de corte** por impago en hogares vulnerables (acreditados por servicios sociales).
- **Plan de pago a plazos** obligatorio para empresas suministradoras.
- **Mantenimiento del suministro mínimo vital** (electricidad: 1,5-3,5 kW).

## Agua
- Gestión municipal o empresarial según la ciudad.
- Tarifas sociales en muchas ciudades (descuento para hogares vulnerables).
- **No se puede cortar** el agua a hogares con menores, ancianos o personas dependientes sin aviso previo a servicios sociales.

## Gas
- Bono social de gas natural (descuento en la tarifa).
- Si calientas la vivienda con gasóleo o GPL, hay **bono térmico** (123-180 €/año, según grado de vulnerabilidad).

## Telecomunicaciones
- **Línea básica**: hasta 100 €/año de descuento (telefonía fija).
- **Banda ancha social**: 20 €/mes en zonas rurales.
- **URSS** (Universal Roaming Service): el operador dominante debe garantizar un servicio mínimo.

## Cómo solicitar bonos y tarifas sociales
1. Acude a **servicios sociales** del Ayuntamiento para informe de vulnerabilidad.
2. Solicita el bono correspondiente en tu comercializadora o empresa suministradora.
3. Renueva cada 1-2 años según el bono.

## Reclamaciones
- Ante la empresa: en primera instancia.
- Ante la **CNMC** (Comisión Nacional de los Mercados y la Competencia) para electricidad y gas.
- Ante la autoridad de consumo de tu CCAA para el agua.
- Ante la **Secretaría General de Telecomunicaciones** para telefonía e internet.

## Atención al consumidor
- **Teléfono único de reclamaciones**: 900 000 199.
- **Oficinas Municipales de Información al Consumidor (OMIC)** en cada Ayuntamiento.`,
    keyPoints: [
      'Cortes prohibidos en hogares vulnerables',
      'Planes de pago a plazos obligatorios',
      'Bono social gas + bono térmico (123-180 €/año)',
      'OMIC: Oficina Municipal de Información al Consumidor',
    ],
    officialLinks: [
      { label: 'Agencia Española de Consumo, Seguridad Alimentaria y Nutrición (AESAN)', url: 'https://www.aesan.gob.es/' },
      { label: 'CNMC — Consumidores', url: 'https://comparador.cnmc.gob.es/' },
    ],
    emergencyPhone: '900 000 199',
  },

  // ----------------------------------------------------------------------
  // TRABAJO (9 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'contratos-trabajo-tipos',
    category: 'work',
    title: 'Contratos de trabajo: tipos',
    summary: 'Indefinido, temporal, obra/servicio, formación: conoce los tipos de contrato y sus características.',
    content: `Los **contratos de trabajo** en España se regulan por el **Estatuto de los Trabajadores** (modificado por el RD-ley 32/2021).

## Tipos principales

### Contrato indefinido
- Sin límite de duración.
- El más estable. Tras la reforma de 2021, los contratos temporales se han limitado mucho.
- **Indefinido fijo-discontinuo**: para trabajos estacionales pero con interrupciones (p. ej. hostelería estacional, agricultura).

### Contrato temporal (causas específicas)
Solo se permite en estos casos:
1. **Contrato por circunstancias de la producción**: hasta 6 meses (90 días en sectores como hostelería).
2. **Contrato por sustitución**: para sustituir a un trabajador con derecho a reserva del puesto (bajas por maternidad, incapacidad, excedencia).
3. **Contrato de formación**: para personas < 30 años (o sin límite de edad si es primer empleo tras formación), hasta 2 años (3 años en grado medio). 1º año: 60-75% del convenio; 2º: 75-90%.

### Contrato a tiempo parcial
- Jornada inferior a la completa.
- Jornada mínima: 12 horas/semana y 48 horas/mes (en general).
- Cotización calculada por horas.

### Contrato fijo-discontinuo
- Trabajo de naturaleza estacional.
- Te llama la empresa cuando hay trabajo.
- Cotización durante todo el año (con sectores especiales).

## Documentos del contrato
- Por escrito en todos los casos (salvo contratos inferiores a 4 semanas a jornada completa o de servicios domésticos).
- El empresario debe entregar copia básica al trabajador.
- Comunicación a la Seguridad Social (alta) antes del inicio.

## Información obligatoria
- Identificación de las partes.
- Fecha de inicio y duración.
- Puesto y categoría.
- Retribución (base, complementos, pagas extras).
- Jornada y horario.
- Convenio colectivo aplicable.
- Vacaciones.

## Recomendaciones
- **No firmes en blanco**.
- Exige copia del contrato firmado.
- Comprueba que cumples con la categoría y funciones asignadas.
- Si trabajas sin contrato, se considera **indefinido** a todos los efectos tras la verificación.`,
    keyPoints: [
      'Indefinido: sin límite de duración',
      'Temporal: solo por causas específicas (reforma 2021)',
      'Fijo-discontinuo: para trabajos estacionales',
      'Formación: < 30 años, hasta 2-3 años, retribución 60-90% convenio',
      'Por escrito obligatorio (salvo excepciones)',
    ],
    officialLinks: [
      { label: 'Estatuto de los Trabajadores', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-15638' },
      { label: 'SEPE — Tipos de contratos', url: 'https://www.sepe.es/HomeSepe/empresas/Contratos-de-trabajo.html' },
    ],
  },
  {
    id: 'salario-minimo-interprofesional-smi',
    category: 'work',
    title: 'Salario Mínimo Interprofesional (SMI) 2024-2025',
    summary: 'El SMI es el salario mínimo legal en España. En 2024 es de 1.134 €/mes y en 2025 sube a 1.184 €/mes.',
    content: `El **Salario Mínimo Interprofesional (SMI)** es la retribución mínima que deben percibir los trabajadores por jornada completa, sin incluir pagas extraordinarias.

## Cuantías
- **2024**: 1.134 €/mes (14 pagas) = 15.876 €/año.
- **2024** (12 pagas): 1.323 €/mes = 15.876 €/año.
- **2025**: 1.184 €/mes (14 pagas) = 16.576 €/año (subida del 5% aprobada por el Gobierno).
- **2025** (12 pagas): 1.381,67 €/mes = 16.576 €/año.

## Aplicación
- **Jornada completa** (40 horas semanales).
- **A tiempo parcial**: proporcional a la jornada.
- **Empleados del hogar**: incluidos desde 2022.
- **Trabajadores agrarios**: incluidos.

## Excepciones
- **Contratos en prácticas** y de **formación**: pueden cobrar el primer año el 60% del SMI y el segundo el 75% (formación dual), pero nunca por debajo de la mitad del SMI.
- Convenios colectivos pueden fijar salarios superiores (nunca inferiores).

## Pagas extraordinarias
- Mínimo **2 pagas extras** al año (si el convenio no dice otra cosa).
- Pueden ser prorrateadas mensualmente (con acuerdo entre empresa y trabajador).

## Derechos derivados
- Garantía de ingresos (IMV y otras ayudas) calculados sobre SMI.
- Cotización a la Seguridad Social mínima basada en SMI.
- IRPF: con sueldo a SMI, en general **no se retiene** IRPF (salvo si supera los 15.000 €/año).

## Inspección
Si cobras por debajo del SMI:
- Denuncia ante la **Inspección de Trabajo y Seguridad Social** (teléfono 900 100 333).
- Reclamación judicial ante el Juzgado de lo Social.

## Recomendaciones
- Comprueba tu nómina (la base debe ser al menos el SMI en proporción a tu jornada).
- Exige el desglose de conceptos (base, antigüedad, complementos, extras).`,
    keyPoints: [
      'SMI 2024: 1.134 €/mes (14 pagas) = 15.876 €/año',
      'SMI 2025: 1.184 €/mes (14 pagas) = 16.576 €/año',
      'Subida 2025: +5%',
      'Empleados del hogar y agrarios: incluidos',
      'Denuncia: Inspección de Trabajo 900 100 333',
    ],
    officialLinks: [
      { label: 'Salario Mínimo Interprofesional — MITES', url: 'https://www.mites.gob.es/es/guia/texto/guia_11/content/todos.htm' },
      { label: 'RD 99/2024 — SMI 2024', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-1676' },
    ],
  },
  {
    id: 'derechos-laborales-basicos',
    category: 'work',
    title: 'Derechos laborales básicos: vacaciones, horas extras, finiquito',
    summary: 'Vacaciones, jornada, horas extras, finiquito y despido: lo mínimo que debes conocer.',
    content: `El Estatuto de los Trabajadores establece los derechos mínimos laborales. Algunos de los más importantes:

## Jornada
- **Máxima**: 40 horas semanales de trabajo efectivo promedio anual.
- **Descanso** mínimo de 12 horas entre jornadas.
- **Pausa**: mínimo 15 minutos si la jornada supera 6 horas continuadas.
- **Descanso semanal**: 1,5 días ininterrumpidos (suele ser sábado por la tarde y domingo completo).
- **Trabajo nocturno**: 10 horas en periodo nocturno (nocturno: 22h-6h).

## Vacaciones
- **30 días naturales** (22 días laborables) al año.
- No sustituibles por compensación económica (salvo fin de contrato).
- El periodo debe fijarse de común acuerdo; en su defecto, la empresa fija el periodo.

## Horas extras
- **Voluntarias** (salvo pacto en contrato).
- Máximo **80 horas al año** (no computan las recuperables).
- Prohibidas en trabajadores nocturnos y menores de 18 años.
- Cotizan a la Seguridad Social.

## Pagas extraordinarias
- Mínimo **2 pagas** al año.
- Pueden prorratearse mensualmente.

## Despido
- **Despido objetivo**: indemnización 20 días/año (máx. 12 mensualidades).
- **Despido improcedente**: indemnización 33 días/año (máx. 24 mensualidades) para contratos posteriores a 12/02/2012. Para anteriores: 45 días/año (máx. 42).
- **Despido procedente**: sin indemnización.
- **Finiquito**: cantidad que se percibe al finalizar el contrato (parte proporcional de pagas extras y vacaciones no disfrutadas).

## Permiso retribuido
- Matrimonio: 15 días.
- Nacimiento de hijo: 16 semanas (maternidad).
- Fallecimiento de familiar: 2 días (4 si es desplazamiento).
- Traslado de domicilio: 1 día.
- Funciones sindicales: según convenio.

## Lactancia
- Reducción de jornada de 1 hora (o fracción) para cuidado de menor de 12 meses.
- Desde 2019, permiso de **paternidad** de 16 semanas (a equiparar con maternidad).

## Cotización a la Seguridad Social
- Desempleo: 1,55% (indefinido) o 6,70% (temporal) a cargo del trabajador.
- Contingencias comunes: 4,7%.
- Formación profesional: 0,1%.

## Reclamaciones
- **Acta de conciliación** ante el SMAC (Servicio de Mediación, Arbitraje y Conciliación) en 20 días.
- **Demanda** ante el Juzgado de lo Social en 20 días tras el SMAC.`,
    keyPoints: [
      'Jornada: 40 h/semana | 30 días vacaciones',
      'Horas extras: máximo 80/año',
      'Despido improcedente: 33 días/año (máx 24 mensualidades)',
      'Finiquito: parte proporcional de extras y vacaciones',
      'Reclamar: SMAC (20 días) → Juzgado Social (20 días)',
    ],
    officialLinks: [
      { label: 'Estatuto de los Trabajadores', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-15638' },
      { label: 'Inspección de Trabajo y Seguridad Social', url: 'https://www.mites.gob.es/es/inspeccion/index.htm' },
    ],
  },
  {
    id: 'sepe-inscripcion-demandante',
    category: 'work',
    title: 'SEPE: cómo inscribirse como demandante de empleo',
    summary: 'El SEPE (Servicio Público de Empleo Estatal) gestiona las prestaciones por desempleo y la búsqueda de empleo. Cómo inscribirse.',
    content: `El **SEPE** (Servicio Público de Empleo Estatal) es el organismo que gestiona las políticas de empleo a nivel estatal. En cada CCAA existe además un **servicio de empleo autonómico** (Cataluña: SOC, Madrid: Madrid Excelente, etc.).

## Inscripción como demandante de empleo
1. **Solicitud** en línea o presencial.
2. Documentación:
   - DNI/NIE.
   - Tarjeta de la Seguridad Social.
   - Certificados de estudios y formación.
   - Informe de vida laboral (descargable en la sede electrónica de la SS).
3. **Pedir cita** con el servicio autonómico de empleo para orientación laboral.
4. Renovación de la demanda según el **compromiso de actividad** (cada 3, 6 o 12 meses según el caso).

## Sede electrónica del SEPE
- **sepe.es** → "Ciudadanos" → "Solicitud de prestación" / "Renovación de la demanda".
- Necesitas certificado digital o Cl@ve.

## ¿Por qué es importante?
- Sin estar inscrito como demandante, **no puedes percibir** el paro u otras prestaciones.
- Acceso a **cursos de formación** gratuitos.
- Acceso a **ofertas de empleo**.
- Requisito para **RAI** (Renta Activa de Inserción), **ayudas al alquiler**, **IMV**, etc.

## Compromiso de actividad
- Buscar activamente empleo.
- Aceptar ofertas adecuadas (salario ≥ SMI, en tu categoría o similar).
- Participar en acciones de mejora de empleabilidad.
- Renovar la demanda en plazo.

## Pérdida de la inscripción
- No renovar la demanda.
- Rechazar oferta adecuada sin causa justa.
- No acudir a las citas del servicio de empleo.

## Prestaciones gestionadas por el SEPE
- **Prestación contributiva** (paro).
- **Subsidio por desempleo** (cuando se agota el paro).
- **RAI** (Renta Activa de Inserción).
- **Plan Prepara**, **Renta Agraria**, **Subsidio por agotamiento**.
- **Bonificaciones de contratación** para empresas.`,
    keyPoints: [
      'Inscripción obligatoria para percibir prestaciones',
      'Renovación cada 3-12 meses según el caso',
      'Compromiso de actividad: buscar empleo activamente',
      'Acceso a cursos y ofertas de empleo gratuitas',
    ],
    officialLinks: [
      { label: 'SEPE — Inscripción demandantes', url: 'https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/empleo/tramites-demanda' },
      { label: 'Sede electrónica SEPE', url: 'https://sede.sepe.es/' },
    ],
    emergencyPhone: '901 119 999',
  },
  {
    id: 'prestaciones-desempleo-paro',
    category: 'work',
    title: 'Prestaciones por desempleo (paro): requisitos',
    summary: 'El paro cubre situaciones de desempleo. Requisitos, duración y cuantía de la prestación contributiva y los subsidios.',
    content: `El sistema de protección por desempleo en España incluye dos niveles: **prestación contributiva** (paro) y **subsidios por desempleo**.

## Prestación contributiva (paro)
### Requisitos
- Estar afiliado y en alta o situación asimilada en la SS.
- Tener cotizado **mínimo 360 días** en los últimos 6 años.
- Estar **inscrito como demandante** de empleo.
- Suscribir el compromiso de actividad.
- No haber alcanzado la edad de jubilación.
- No cobrar pensión incompatible.

### Duración
- Mínimo 120 días.
- Máximo **720 días (24 meses)**.
- 4 meses por cada 6 cotizados (los 6 primeros años).

### Cuantía
- **70%** de la base reguladora durante los primeros 180 días.
- **50%** a partir del día 181.
- **Mínimo** 2024: 599,99 €/mes (sin hijos) y 797,69 €/mes (con hijos menores de 26).
- **Máximo**: 1.225 €/mes (1 hijo), 1.398,40 € (2 hijos).
- Para 2025, los importes se actualizan (1.274 €/1.456 €).

## Subsidios por desempleo
Cuando se agota el paro y no tienes derecho a más, puedes solicitar:

1. **Subsidio por agotamiento** (algunos supuestos).
2. **Subsidio por insuficiencia de cotización** (180-359 días cotizados): 6-12 meses.
3. **Subsidio especial para mayores de 55 años**: hasta la jubilación.
4. **Subsidio para emigrantes retornados**: 6 meses, prorrogables.
5. **Subsidio por liberación de prisión**.
6. **RAI** (Renta Activa de Inserción): para mayores de 45 con cargas familiares, personas con discapacidad, víctimas de violencia de género o emigrantes retornados.

## Cuantía del subsidio
- **80% del IPREM** = 480 €/mes (en 2024, con IPREM 600 €).
- En 2025: 570 €/mes (con IPREM 712,50 €).

## Renta Activa de Inserción (RAI)
- 18 meses prorrogables hasta 24 meses adicionales.
- Para mayores de 45 desempleados de larga duración.
- Requisitos: inscrito como demandante 12 de los últimos 18 meses, sin derecho a prestaciones, ingresos ≤ 75% SMI, compromiso de actividad.
- Cuantía: 80% IPREM (480 €/mes en 2024).

## Cómo solicitar
- **Sede electrónica del SEPE** (con certificado digital o Cl@ve).
- Presencialmente en oficinas del SEPE (cita previa).
- Plazo: **15 días hábiles** desde la situación legal de desempleo.`,
    keyPoints: [
      'Paro: 360 días cotizados en 6 años, duración 4 meses/6 cotizados',
      'Cuantía 70%/50% base reguladora (min 599,99 € en 2024)',
      'Subsidios: 80% IPREM = 480 €/mes 2024',
      'RAI: mayores de 45, larga duración, hasta 24 meses',
      'Solicitud en 15 días hábiles desde el desempleo',
    ],
    officialLinks: [
      { label: 'SEPE — Prestación contributiva', url: 'https://www.sepe.es/HomeSepe/prestaciones-desempleo/duracion-prestacion-contributiva.html' },
      { label: 'SEPE — Subsidios por desempleo', url: 'https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo.html' },
    ],
    emergencyPhone: '901 119 999',
  },
  {
    id: 'renta-activa-insercion-rai',
    category: 'work',
    title: 'Renta Activa de Inserción (RAI)',
    summary: 'Subsidio para desempleados de larga duración mayores de 45, personas con discapacidad, víctimas de violencia o emigrantes retornados.',
    content: `La **RAI** (Renta Activa de Inserción) es un subsidio del SEPE dirigido a colectivos especialmente vulnerables.

## Beneficiarios
1. **Mayores de 45 años** desempleados de larga duración.
2. **Personas con discapacidad ≥ 33%**.
3. **Víctimas de violencia de género** o doméstica.
4. **Emigrantes retornados** (en los 12 meses siguientes al retorno, con 6 meses trabajados en los últimos 5 años en el extranjero).

## Requisitos comunes
- Estar **inscrito como demandante** de empleo en los **12 meses anteriores** (no necesariamente continuados) a la solicitud.
- No tener derecho a prestaciones o subsidios por desempleo.
- Compromiso de actividad.
- Ingresos de la unidad de convivencia ≤ 75% del SMI (sin incluir las pagas extras de los miembros de la unidad).

## Requisito específico mayores de 45
- Estar desempleado de larga duración (más de **12 meses** inscrito como demandante).
- Haber agotado el paro en los últimos 12 meses.

## Requisito específico discapacidad
- No estar percibiendo pensión por incapacidad.
- Compromiso de actividad.

## Cuantía y duración
- **80% del IPREM** (480 €/mes en 2024; 570 €/mes en 2025 con IPREM 712,50 €).
- **11 meses + 1 de espera**, prorrogable hasta 3 programas de RAI (máximo 33 meses en 4 años).
- Para víctimas de violencia y discapacidad: hasta **6 años**.

## Obligaciones
- Suscribir un **Itinerario Individualizado de Inserción**.
- Participar en acciones de mejora de la empleabilidad.
- Aceptar ofertas adecuadas.
- Renovar la demanda de empleo.

## Cómo solicitar
- En el SEPE, presencial o telemáticamente.
- Plazo: 15 días hábiles desde el mes siguiente al agotamiento del subsidio anterior o desde que se cumplen los requisitos.
- Convocatorias periódicas (3 al año).

## Compatibilidad
- Compatible con **trabajos por cuenta ajena** de menos de 60 días al año (con comunicación previa al SEPE).
- Compatible con trabajos por **cuenta propia** de menos de 180 días al año.
- Compatible con **IMV** (Ingreso Mínimo Vital), si se cumplen los requisitos.`,
    keyPoints: [
      'Mayores de 45, discapacidad ≥ 33%, víctimas violencia, emigrantes retornados',
      '80% IPREM = 480 €/mes (2024) | 570 €/mes (2025)',
      'Inscrito demandante 12 meses anteriores',
      'Hasta 33 meses en 4 años (3 programas RAI)',
      'Compatible con IMV',
    ],
    officialLinks: [
      { label: 'SEPE — RAI', url: 'https://www.sepe.es/HomeSepe/prestaciones-desempleo/subsidio-desempleo.html' },
    ],
    emergencyPhone: '901 119 999',
  },
  {
    id: 'trabajo-autonomo-alta-reta',
    category: 'work',
    title: 'Trabajo autónomo: alta en RETA',
    summary: 'Si trabajas por cuenta propia, debes darte de alta en el Régimen Especial de Trabajadores Autónomos (RETA).',
    content: `El **RETA** (Régimen Especial de Trabajadores Autónomos) es el régimen de la Seguridad Social para trabajadores por cuenta propia.

## Cuándo darse de alta
- Antes de iniciar la actividad.
- **Sin límite de tiempo máximo** para estar dado de alta.

## Cuota mínima (2024)
- **Base mínima de cotización**: 960,60 €/mes (1.323 € con cese de actividad) o base mínima de 1.323 €/mes (con cese).
- **Cuota**: 30,3% sobre la base = **291,15 €/mes** (sin cese de actividad).
- Con **tarifa plana** (nuevos autónomos): 80 €/mes durante 12 meses (si bases mínimas); prorrogable hasta 24 meses si ingresos < SMI.

## Tarifa plana para nuevos autónomos
- **80 €/mes** durante 12 meses.
- Requisitos:
  - No haber estado de alta en RETA en los **2 años anteriores** (o 3 años si ya fue beneficiario).
  - Bonificación adicional si cotizas por base mínima (rebaja del 50% en los primeros 6 meses, 30% los siguientes, 20% los siguientes).
- Para menores de **30 años** o mujeres < 35 años en sectores poco representados, bonificación especial.

## Cambios 2024-2025
- **Cotización según ingresos reales** (sistema de tramos), pero se mantiene una cuota mínima para bases mínimas.
- **Tope máximo** de cotización: 4.720,50 €/mes (2024).

## Trámites de alta
1. **Modelo TA.0825** (alta en RETA) en la Seguridad Social (sede electrónica).
2. Alta censal en la **Agencia Tributaria** (modelos 036 o 037).
3. Comunicación de inicio de actividad al Ayuntamiento (**licencia de actividad** o declaración responsable).
4. Si contratas trabajadores, alta en el Régimen General.

## Obligaciones fiscales
- **IVA** (modelo 303 trimestral + 390 anual).
- **IRPF** (modelo 130 trimestral si estimación directa).
- **Resumen anual de operaciones con terceros** (modelo 347).
- Libros de registro (facturas emitidas/recibidas, bienes de inversión).

## Cese de actividad
- Baja en RETA y en la AEAT (modelo 036/037).
- Si cotizaste por cese de actividad al menos 12 meses, tienes derecho a una **prestación por cese** similar al paro.

## Recomendaciones
- Asesórate con un **gestor administrativo** o asesor fiscal.
- Guarda todas las facturas y justificantes.
- Configura tu seguro de responsabilidad civil si tu actividad lo requiere.`,
    keyPoints: [
      'Alta en RETA antes de iniciar actividad',
      'Cuota mínima 2024: 291,15 €/mes (sin cese actividad)',
      'Tarifa plana nuevos autónomos: 80 €/mes (12 meses)',
      'Obligaciones: IVA (303), IRPF (130), libros registro',
      'Cese de actividad: prestación similar al paro',
    ],
    officialLinks: [
      { label: 'Seguridad Social — RETA', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Autonomos' },
      { label: 'Ministerio de Inclusión — Autónomos', url: 'https://www.mites.gob.es/es/mindes/autonomos/index.htm' },
    ],
  },
  {
    id: 'irpf-no-residentes',
    category: 'work',
    title: 'IRPF para no residentes',
    summary: 'Si resides menos de 183 días en España pero generas ingresos aquí, tributas como no residente.',
    content: `El **IRPF de no residentes** (IRNR) grava las rentas obtenidas en territorio español por personas físicas **no residentes**.

## ¿Quién es residente fiscal?
Una persona es residente en España si cumple **alguna** de estas condiciones:
1. Permanecer más de **183 días** en territorio español durante el año natural.
2. Tener el **centro de intereses económicos** o actividades en España.
3. Tener **cónyuge o hijos menores** residentes en España (con matices).

Si no cumples ninguna, eres **no residente**.

## Tipos impositivos (IRNR 2024)
- **19%** para residentes de la **UE/EEE/Suiza**.
- **24%** para residentes en **terceros países**.

## Rentas gravadas
- **Rendimientos del trabajo**: salarios, pensiones, dietas.
- **Rendimientos de actividades económicas** (autónomos).
- **Rendimientos del capital**: intereses, dividendos, alquileres.
- **Ganancias patrimoniales**: venta de inmuebles, fondos, acciones.
- **Imputación de rentas** por inmuebles urbanos no alquilados.

## Rendimientos del trabajo
- Si trabajas en España pero resides en otro país, la empresa te retiene **19%** (UE) o **24%** (otros) sobre el salario.
- Si tu renta es inferior a un umbral (estudiantes, investigadores, etc.), existen **reducciones especiales**.

## Alquiler de inmuebles
- Base imponible: ingresos íntegros − gastos deducibles (sólo para UE/EEE/Suiza; en terceros países: 24% sobre ingresos íntegros).
- Retención del 19% sobre el alquiler que debes ingresar a Hacienda.

## Modelo 210
- Es la **autoliquidación** del IRNR.
- Para no residentes sin establecimiento permanente.
- Plazos: **trimestral** (1-20 de abril, julio, octubre, enero) para rentas sujetas a retención; **anual** (1 de enero al 31 de enero del año siguiente) para otras rentas.

## Convenios de doble imposición
- España tiene convenios con más de 90 países.
- Si eres residente de uno de esos países, puedes aplicar las **reducciones** del convenio.
- Requiere **certificado de residencia fiscal** emitido por tu país.

## ¿Y si eres residente?
- Te aplicas el **IRPF general** (modelo 100 anual).
- Tramos 2024:
  - 0-12.450 €: 19%
  - 12.450-20.200: 24%
  - 20.200-35.200: 30%
  - 35.200-60.000: 37%
  - 60.000-300.000: 45%
  - +300.000: 47%
- En cada CCAA hay tramos autonómicos que modifican ligeramente estos.`,
    keyPoints: [
      'Residente: >183 días en España o centro de intereses',
      'IRNR: 19% UE/EEE | 24% terceros países',
      'Modelo 210: trimestral o anual',
      'Convenios doble imposición con 90+ países',
    ],
    officialLinks: [
      { label: 'AEAT — IRPF no residentes', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G213.shtml' },
      { label: 'Modelo 210', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GF00.shtml' },
    ],
  },
  {
    id: 'inspeccion-trabajo-denunciar',
    category: 'work',
    title: 'Inspección de Trabajo: cómo denunciar',
    summary: 'Si tu empresa no paga el salario mínimo, no da de alta en la SS o tiene condiciones abusivas, puedes denunciar.',
    content: `La **Inspección de Trabajo y Seguridad Social (ITSS)** es el organismo que vela por el cumplimiento de la normativa laboral.

## Cuándo denunciar
- Salario por debajo del **SMI**.
- Falta de **alta** en la Seguridad Social o alta retroactiva.
- **Jornada excesiva** o no respetar descansos.
- No pagar **horas extras**.
- Trabajo en **negro** (sin contrato).
- Condiciones de **riesgo laboral**.
- Acoso laboral (mobbing) o discriminación.
- Falta de **pago de nómina** o retrasos reiterados.
- Despido sin preaviso o sin indemnización.

## Cómo denunciar

### Vía administrativa
1. **Comunicación a la Inspección** (escrita o presencial):
   - Sede electrónica del MITES: **mitrabajo.es**.
   - Presencialmente en las oficinas de la ITSS de tu provincia.
   - Teléfono **900 100 333** (información y denuncia telefónica gratuita).
2. La Inspección investiga y, si procede, levanta **acta de infracción**.
3. La empresa puede ser sancionada con multas y obligación de regularizar.

### Vía judicial
- **Papeleta de conciliación** ante el SMAC (Servicio de Mediación, Arbitraje y Conciliación) en **20 días** si el conflicto es por despido, salarios o derechos fundamentales.
- **Demanda** ante el Juzgado de lo Social si no hay acuerdo.
- **Justicia gratuita** si cumples los requisitos de ingresos.

## Protección del denunciante
- La Inspección **garantiza la confidencialidad** del denunciante.
- Está prohibida la **represalia** del empresario (despido o sanción por denunciar = nulo).
- El trabajador puede seguir trabajando mientras se sustancia la denuncia.

## Pruebas útiles
- Nóminas y justificantes de pago.
- Mensajes del empresario (WhatsApp, correos).
- Fotos del puesto de trabajo.
- Testigos (compañeros).
- Grabaciones (siempre dentro del marco legal).

## Recomendaciones
- Antes de denunciar, intenta resolver el conflicto por escrito.
- Consulta con un **abogado laboralista** (muchos ofrecen primera consulta gratuita).
- Si eres despedido tras denunciar, solicita **nulidad del despido** (reposición + salarios de tramitación).

## Derechos de los trabajadores sin papeles
- Desde 2023 (reforma laboral), los trabajadores en situación irregular pueden **denunciar** a su empresa sin temor a sanciones migratorias durante el procedimiento.
- Si la Inspección detecta trabajo en negro, levanta acta y se da un periodo para **regularizar** la situación del trabajador.`,
    keyPoints: [
      'Inspección: 900 100 333 (gratuito)',
      'Confidencialidad y prohibición de represalias',
      'SMAC: papeleta en 20 días',
      'Trabajadores sin papeles: pueden denunciar (reforma 2023)',
    ],
    officialLinks: [
      { label: 'Inspección de Trabajo y SS', url: 'https://www.mites.gob.es/es/inspeccion/index.htm' },
      { label: 'Teléfono 900 100 333', url: 'https://www.mites.gob.es/es/mindes/inspeccion/otros/tel_trabajadores.htm' },
    ],
    emergencyPhone: '900 100 333',
  },

  // ----------------------------------------------------------------------
  // EDUCACIÓN (8 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'escolarizacion-obligatoria-matricula',
    category: 'education',
    title: 'Escolarización obligatoria: matrícula y documentación',
    summary: 'Los menores de 6 a 16 años tienen obligación de escolarizarse en España. Cómo matricular a tu hijo.',
    content: `La escolarización es **obligatoria y gratuita** en España para los menores de **6 a 16 años** (educación primaria y secundaria obligatoria). La educación infantil (0-6 años) es gratuita en el segundo ciclo (3-6) en centros públicos.

## Proceso de admisión
1. **Solicitud de plaza** en los centros elegidos (mínimo 4 centros en orden de preferencia).
2. **Baremo** que prioriza: proximidad al domicilio/trabajo, hermanos en el centro, rentas bajas, familias numerosas, discapacidad.
3. **Publicación de listas** y **alegaciones**.
4. **Asignación** definitiva y **matrícula** en el centro asignado.

## Periodo ordinario
- **Educación infantil (3-6 años) y primaria**: solicitudes en **abril-mayo**, listas en **mayo-junio**, matrícula en **junio**.
- **ESO y Bachillerato**: similares fechas, variando ligeramente por CCAA.

## Periodo extraordinario
- De **septiembre a junio**: solicitudes fuera de plazo por traslado o llegada a España.
- Matrícula en la **Comisión de Escolarización** de la zona o en el centro con plazas disponibles.

## Documentación necesaria
- **Libro de familia** o certificado de nacimiento del menor (legalizado/apostillado y traducido si es extranjero).
- **DNI/NIE/pasaporte** de los padres.
- **Empadronamiento** familiar.
- **Tarjeta sanitaria** del menor.
- **Documentación académica** previa del país de origen (legalizada y traducida) si el menor ha estado escolarizado.
- **Título de vacunación** al día.
- En su caso, **documento de protección internacional** o informe de servicios sociales.

## Menores sin documentación
- Tienen **derecho a la escolarización**, aunque no tengan NIE o documentación completa (Ley 4/2000 y LOMLOE).
- La dirección del centro debe admitirlos y facilitar la regularización posterior.

## Aulas de enlace / Aulas temporales de adaptación lingüística (ATAL)
- Para alumnos extranjeros con desconocimiento del castellano (o de la lengua cooficial).
- Adaptación curricular durante un curso o dos.

## Becas y ayudas
- **Becas del Ministerio de Educación** (MEC) para primaria, ESO, bachillerato y FP.
- **Becas de las CCAA** (comedor, libros, transporte).
- **Ayudas de los Ayuntamientos** (servicios sociales).

## Recomendaciones
- Solicita plaza con **antelación**.
- Si el menor llega fuera del periodo ordinario, acude a la **Comisión de Escolarización** de tu zona.
- Pregunta por **aulas de enlace** si tu hijo no habla castellano.`,
    keyPoints: [
      'Obligatoria 6-16 años (gratuita 3-16 pública)',
      'Periodo ordinario: solicitudes abril-mayo, matrícula junio',
      'Menores sin documentación: derecho garantizado',
      'Documentación extranjera: legalizada y traducida',
    ],
    officialLinks: [
      { label: 'Ministerio de Educación — Escolarización', url: 'https://www.educacion.gob.es/es/educacion-menus/areas-educacion/estudiantes/no-universitarios/escolarizacion.html' },
      { label: 'LOMLOE — Ley educativa', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264' },
    ],
  },
  {
    id: 'cepa-escuelas-adultos-espanol',
    category: 'education',
    title: 'CEPA y escuelas de adultos: español para extranjeros',
    summary: 'Los Centros de Educación de Personas Adultas ofrecen cursos gratuitos de español, alfabetización y formación básica.',
    content: `Los **CEPA** (Centros de Educación de Personas Adultas) y los **CPIA** (en Cataluña) o equivalentes en cada CCAA ofrecen formación gratuita para personas mayores de 18 años (o 16 con condiciones).

## Oferta formativa
- **Alfabetización** y neolectores.
- **Español para extranjeros** (ESL/ELE): niveles A1, A2, B1, B2 (referencia MCER).
- **Educación secundaria para adultos** (ESPA): obtención del título de ESO.
- **Bachillerato para adultos**.
- **Formación Profesional Básica (FPB)**.
- **Cursos de preparación para pruebas libres** de ESO y Bachillerato.
- **Cursos de castellano/cooficial** según CCAA (catalán, euskera, gallego, valenciano).
- **TIC**: informática básica, ofimática, internet.
- **Cursos de preparación** al examen CCSE y DELE A2 (nacionalidad).

## Requisitos
- Mayor de **18 años** (o 16 con autorización y condiciones).
- Inscripción gratuita.
- Documentación: DNI/NIE/pasaporte y, si procede, documentación académica previa.

## Horarios
- **Mañana, tarde y noche**.
- Modalidad **presencial, semipresencial y a distancia** (That's English!, Esespi, etc.).

## Cómo inscribirse
- En el **CEPA más cercano** durante el periodo de matrícula (mayo-junio y septiembre).
- **Cita previa** en algunos centros.
- Prueba de nivel inicial.

## Otros recursos para aprender español
- **Escuela Oficial de Idiomas (EOI)**: especializada en idiomas, con español para extranjeros.
- **Centros del Ayuntamiento**: muchos ofrecen cursos gratuitos de español.
- **ONG**: ACCEM, CEAR, Cruz Roja, Cáritas ofrecen cursos gratuitos de español para inmigrantes.
- **Red In migración** (Ministerio de Educación): plataforma online gratuita.

## Recomendaciones
- Aprovecha los recursos **gratuitos** disponibles.
- Combina estudio presencial con online.
- Practica con apps (Duolingo, Babbel, Busuu) complementarias.`,
    keyPoints: [
      'CEPA: gratuito, mayores de 18 (o 16 con condiciones)',
      'Niveles MCER: A1-B2 español + ESPA + FPB',
      'Horarios flexible: mañana, tarde, noche',
      'ONG: ACCEM, CEAR, Cruz Roja, Cáritas',
    ],
    officialLinks: [
      { label: 'Buscador de centros adultos — Educativa', url: 'https://www.educacion.gob.es/' },
      { label: 'Red In migración — AulasEXT', url: 'https://sede.educacion.gob.es/catalogo/deFormacionContinua/aulas-ext.html' },
    ],
  },
  {
    id: 'escuela-oficial-idiomas-eoi',
    category: 'education',
    title: 'Escuela Oficial de Idiomas (EOI)',
    summary: 'Las EOI ofrecen enseñanza oficial de idiomas con certificación reconocida. Cómo matricularse y precios.',
    content: `Las **Escuelas Oficiales de Idiomas (EOI)** son centros públicos que imparten enseñanza especializada de idiomas. Sus títulos están reconocidos oficialmente en toda España.

## Idiomas que se imparten
- Inglés, francés, alemán, italiano, portugués, ruso, chino, japonés, árabe.
- Catalán, euskera, gallego y valenciano (en sus respectivas CCAA).
- Español para extranjeros en algunas EOI.
- Lenguas de signos española.

## Niveles
- **Básico (A2)**: 2 cursos.
- **Intermedio (B1)**: 2 cursos.
- **Avanzado (B2)**: 2 cursos.
- **C1**: 1-2 cursos (no en todas las EOI).

## Requisitos de admisión
- Mayor de **16 años** (o 14 para cursar un idioma distinto al estudiado en la ESO).
- Prueba de nivel si no has cursado el nivel anterior.
- Residir en la Comunidad Autónoma de la escuela.

## Proceso
1. **Solicitud** online (mayo-junio).
2. **Sorteo público** si hay más solicitantes que plazas.
3. **Matrícula** (junio o septiembre).
4. **Curso académico**: septiembre a junio.

## Precios
- Varían según CCAA: entre **150 y 400 €/año**.
- Descuentos para **familias numerosas, víctimas de terrorismo, personas con discapacidad, demandantes de empleo**.
- Posibilidad de **becas y ayudas**.

## Modalidades
- **Presencial**: clases en el centro.
- **Semipresencial** (That's English! para inglés).
- **A distancia** (centro de PROFEX para francés y alemán).

## Certificación
- Título oficial de cada nivel (reconocido en toda España).
- Válido para concursos, becas, empleos públicos.

## Recomendaciones
- Solicita **varias EOI** si vives en zona con muchos candidatos.
- Si tienes ya nivel, haz la **prueba de nivel** (suele ser en mayo).
- Combina con plataformas online (Duolingo, Babbel, Busuu).`,
    keyPoints: [
      'EOI: pública, títulos oficiales',
      'Niveles: A2, B1, B2, C1',
      'Mayores de 16 (14 si idioma distinto a ESO)',
      'Precios: 150-400 €/año (varía CCAA)',
      'Modalidades: presencial, semipresencial, distancia',
    ],
    officialLinks: [
      { label: 'Ministerio de Educación — EOI', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/estudiantes/no-universitarios/ensenanzas-idiomas.html' },
      { label: 'That\'s English! (inglés a distancia)', url: 'https://www.thatsenglish.com/' },
    ],
  },
  {
    id: 'formacion-profesional-fp-becas',
    category: 'education',
    title: 'Formación Profesional (FP): acceso y becas',
    summary: 'La FP es una de las vías más demandadas para obtener un título cualificado. Acceso, títulos y becas.',
    content: `La **Formación Profesional (FP)** en España se ha convertido en una vía clave de cualificación. Desde 2023, se ha unificado en el **Sistema Integrado de FP** (Ley Orgánica 3/2022).

## Tipos de FP
### FP Grado Medio
- Requisitos: título de ESO o equivalente, o prueba de acceso (mayor de 17).
- Duración: 2.000 horas (1.300 + 400 de módulos + 220 FCT).
- Título: **Técnico** (equivalente a nivel 3 del MECES).

### FP Grado Superior
- Requisitos: título de Bachillerato o Técnico (FP Media), o prueba de acceso (mayor de 19, o 18 con Técnico).
- Duración: 2.000 horas.
- Título: **Técnico Superior** (equivalente a nivel 4 del MECES, similar a un grado universitario).

### FP Básica
- Para alumnos de 15-17 años que no han terminado ESO.
- Título: **Técnico Básico**.

### FP de Grado Medio y Superior para adultos
- En **CEPA** y centros específicos.
- Modalidades presencial y a distancia.

## Cómo acceder (sistema nuevo 2023)
1. **Solicitud** en la Consejería de Educación de tu CCAA.
2. **Baremo**: nota media, formación complementaria, experiencia.
3. **Asignación de plaza** y matrícula.

## Títulos propios / Certificados de profesionalidad
- **Certificados de profesionalidad** (no requieren titulación previa).
- Validación de la experiencia laboral.

## Becas y ayudas
### Becas MEC (Ministerio de Educación)
- Para FP de Grado Medio y Superior.
- Comprende: **beca salario** (para alumnado de FP de Grado Superior con rentas bajas y residencia alejada del centro), cuantía variable, residencia, transporte, material.
- Solicitudes: **marzo-junio** de cada año.

### Becas de las CCAA
- Cantabria, Cataluña, Madrid, País Vasco, etc., tienen becas propias complementarias.

### Bonificaciones y ayudas
- Para **desempleados** inscritos en el SEPE: cursos de FPE (Formación Profesional para el Empleo) gratuitos.
- Para **trabajadores en activo**: bonificaciones en cotización.

## Reconocimiento de títulos extranjeros
- Títulos de FP de la UE: homologación por el Ministerio de Educación.
- Títulos de terceros países: **homologación** o **convalidación** parcial.

## Modalidades
- **Presencial**: clases + FCT (Formación en Centros de Trabajo) = prácticas.
- **Dual**: alternancia entre centro y empresa (con contrato laboral en muchos casos).
- **A distancia**: con sesiones presenciales mínimas.

## Recomendaciones
- Solicita beca MEC en plazo (marzo-junio).
- Comprueba el **catálogo de títulos** oficiales.
- Si tienes experiencia laboral, valídala con un **certificado de profesionalidad**.`,
    keyPoints: [
      'FP Grado Medio: ESO o prueba acceso',
      'FP Grado Superior: Bachillerato o prueba +19',
      'Beca salario MEC: renta baja + FP Superior',
      'Certificados de profesionalidad: no requieren titulación',
      'Modalidad dual: alternanza con contrato laboral',
    ],
    officialLinks: [
      { label: 'TodasFP — Ministerio de Educación', url: 'https://www.todasfp.es/' },
      { label: 'Becas MEC', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/estudiantes/becas-ayudas.html' },
    ],
  },
  {
    id: 'reconocimiento-titulos-extranjeros',
    category: 'education',
    title: 'Reconocimiento de títulos extranjeros',
    summary: 'Si tienes un título universitario o de FP extranjero, puedes homologarlo o reconocerlo en España.',
    content: `El reconocimiento de títulos extranjeros en España depende del tipo de título y del país de origen.

## Tipos de procedimiento

### Homologación
- Reconocimiento oficial del título extranjero como equivalente a un título español.
- Aplicable a títulos de Educación Secunda, FP y Universidad.
- Solicitud ante el **Ministerio de Educación y Formación Profesional**.

### Reconocimiento de títulos de la UE
- Para profesionales regulados (médicos, enfermeros, arquitectos, ingenieros, abogados, etc.).
- Procedimiento específico ante el Ministerio competente (Sanidad, Educación, etc.).

### Convalidación parcial
- Reconocimiento de estudios parciales para continuar formación en España.
- Para estudiantes que no han terminado el título en su país.

### Equivalencia
- Para acceso a estudios universitarios o para fines académicos.

## Documentación necesaria
- **Solicitud** (formulario oficial).
- **Pasaporte o NIE**.
- **Título original** o certificación de su expedición (legalizada o apostillada).
- **Certificación académica** de los estudios (programas, horas, calificaciones).
- Si los documentos no están en español: **traducción jurada**.
- **Tasa**: varía según tipo de título (homologación universitaria: 218,03 €; FP: 95,57 €).

## Legalización de documentos
- **Países del Convenio de La Haya (1961)**: **Apostilla**.
- **Países UE**: certificación exenta de legalización (con sello de la autoridad emisora).
- **Otros países**: legalización por etapas (Ministerio de Educación, Ministerio de Asuntos Exteriores, Consulado de España).

## Dónde presentar
- **Sede electrónica del Ministerio de Educación**: https://sede.educacion.gob.es.
- Presencialmente en el registro del Ministerio o en oficinas de correos.

## Plazos de resolución
- 6 meses (homologación de FP).
- Hasta 9 meses (homologación universitaria).
- Silencio = desestimación.

## Recomendaciones
- Verifica antes de iniciar el procedimiento si tu título tiene un equivalente en España.
- Para profesiones reguladas en la UE, consulta la **Directiva 2005/36/CE**.
- Si te deniegan, puedes recurrir (reposición o contencioso-administrativo).

## Títulos sanitarios
- Médicos, enfermeros, farmacéuticos: trámite específico ante el Ministerio de Sanidad.
- Para extracomunitarios: deben **convalidar** estudios + examen MIR/EIR/FIR/PIR.`,
    keyPoints: [
      'Homologación: equivalencia oficial con título español',
      'Documentación: legalizada/apostillada + traducción jurada',
      'Tasas: 218 € universidad | 95,57 € FP (2024)',
      'Plazo resolución: 6-9 meses',
      'Reconocimiento UE para profesiones reguladas (Directiva 2005/36/CE)',
    ],
    officialLinks: [
      { label: 'Homologación de títulos — Ministerio de Educación', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/titulos-extranjeros.html' },
      { label: 'Sede electrónica — Trámites títulos extranjeros', url: 'https://sede.educacion.gob.es/tramitacionDispatcher?transactionId=N' },
    ],
  },
  {
    id: 'becas-ayudas-estudio',
    category: 'education',
    title: 'Becas y ayudas al estudio (MEC y comunidades)',
    summary: 'Becas del Ministerio de Educación y de las CCAA para estudiantes de primaria, ESO, Bachillerato, FP y universidad.',
    content: `España ofrece un sistema de becas para estudiantes en distintos niveles educativos. Las becas pueden cubrir matrícula, transporte, residencia, comedor, libros y, en algunos casos, una ayuda económica directa.

## Becas MEC (Ministerio de Educación)
### Niveles
- **Educación obligatoria (primaria y ESO)**: beca de comedor, libros, transporte.
- **Bachillerato y FP**: beca general (matrícula, materiales, transporte, residencia).
- **Enseñanzas artísticas superiores, deportivas, idiomas**.
- **Estudios universitarios**: beca general (matrícula + cuantía variable + residencia/transporte).
- **Beca salario FP Grado Superior**: hasta 6.000 €/año para renta baja.

### Requisitos
- **Renta familiar**: umbrales según número de miembros (varía cada año).
- **Académicos**: nota media mínima según nivel (5-6,5 en general, 6,5-7 para universitarios).
- **Matrícula completa** o número mínimo de créditos.

### Cuantías (curso 2024-2025)
- Cuantía fija por matrícula: hasta 1.500 €.
- Cuantía variable: hasta 60 € por punto de nota (universidad).
- Residencia: hasta 2.500 €.
- Beca salario FP: hasta 6.000 €.

### Solicitudes
- Online en **sede.educacion.gob.es** (certificado digital o Cl@ve).
- Plazo: **marzo-junio** del curso anterior.

## Becas de las CCAA
- Cada CCAA tiene becas complementarias o propias.
- Ejemplos:
  - **Madrid**: becas Excelencia, beca 18.
  - **Cataluña**: beques de la Generalitat.
  - **Andalucía**: becas Junta de Andalucía.
  - **País Vasco**: becas Gobierno Vasco.

## Becas de universidades
- Becas propias de cada universidad (matrícula, residencia, intercambio).
- Becas de **colaboración** (trabajar en departamentos).
- Becas **Erasmus+** (movilidad europea).
- Becas **Santander, La Caixa, Vodafone, etc.**: becas privadas para colectivos específicos.

## Ayudas para inmigrantes
- **ACCEM, CEAR, Cruz Roja, Cáritas**: becas y ayudas para material escolar.
- **Programa CaixaProinfancia**: para familias en riesgo de exclusión.
- **Becas MENA** (menores extranjeros no acompañados): vía servicios sociales.

## Otros recursos
- **Becas para estudiantes con discapacidad**: MEC + fundaciones.
- **Becas para familias monoparentales** y **numerosas**.
- **Becas de manutención** para estudiantes con residencia alejada del centro.

## Recomendaciones
- Solicita **todas las becas** posibles simultáneamente.
- Conserva los justificantes.
- Si te deniegan, puedes recurrir.`,
    keyPoints: [
      'Becas MEC: matrícula + cuantía variable + residencia',
      'Beca salario FP Superior: hasta 6.000 €/año',
      'Plazo solicitudes: marzo-junio',
      'Becas CCAA + universitarias + privadas',
    ],
    officialLinks: [
      { label: 'Becas MEC', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/estudiantes/becas-ayudas.html' },
      { label: 'Sede electrónica — Becas', url: 'https://sede.educacion.gob.es/procedimiento/solicitud-becas-para-estudios-universitarios' },
    ],
  },
  {
    id: 'universidad-acceso-extranjeros',
    category: 'education',
    title: 'Universidad: acceso para extranjeros',
    summary: 'Cómo acceder a la universidad española si tienes estudios extranjeros: UNEDassis, EBau, homologación.',
    content: `El acceso a la universidad española para estudiantes extranjeros depende de su formación previa.

## Estudiantes UE / Suiza / Noruega / Islandia / Liechtenstein
- Pueden acceder si cumplen los requisitos para acceder a la universidad en su país.
- Solicitan admisión a través de **UNEDasisis** (Solicitud de Admisión para Estudiantes Extranjeros).
- Deben solicitar la **homologación** del título de Bachillerato al Bachillerato español.

## Estudiantes de sistemas educativos extranjeros
1. **Homologación del título de Bachillerato** al español (Ministerio de Educación).
2. **Solicitud a UNEDasiss** para obtener la credencial de acceso.
3. Realización de las **pruebas específicas** (PCE — Pruebas de Competencias Específicas) si tu nota no es suficiente o si vas a estudios con nota de corte alta.
4. Solicitud de plaza en las universidades a través del distrito único andaluz, madrileño, etc.

## Estudiantes con título extranjero homologado
- Deben solicitar plaza como estudiantes españoles en la universidad de su elección.
- Nota de admisión = nota media de Bachillerato + nota de la fase específica.

## Estudiantes extranjeros que quieren estudiar estudios completos en España
- **Visado de estudiante**: solicítalo en el Consulado de España en tu país.
- Requisitos: admisión a un centro reconocido, seguros médicos, alojamiento, medios económicos.
- Duración: igual a la del estudio; renovable.
- Permite trabajar **hasta 30 horas semanales** (reforma 2023) y reagrupar familiares (cambio reciente).

## Universidades
- **Públicas**: precios más bajos (varían según CCAA: 12-30 €/crédito en grado, 30-50 € en máster).
- **Privadas**: precios más altos (3.000-20.000 €/año).
- **Universidad Nacional de Educación a Distancia (UNED)**: a distancia, precios públicos.

## Documentación
- Pasaporte/NIE.
- Título de Bachillerato **homologado**.
- Credencial **UNEDasiss**.
- Seguro médico.
- Empadronamiento (si resides en España).

## Becas
- Becas MEC.
- Becas de la UNED (para sus alumnos).
- Becas Erasmus+ para movilidad.

## Recomendaciones
- Inicia el proceso **al menos un año antes** del comienzo del curso.
- Verifica los **plazos de preinscripción** de cada CCAA (mayo-julio).
- Comprueba si tu título extranjero requiere **homologación** o puede ser convalidado parcialmente.
- Si vas a estudiar una **titulación con límite de plazas** (Medicina, Enfermería, etc.), prepárate con antelación para la PCE.`,
    keyPoints: [
      'UE: homologación Bachillerato + UNEDasiss',
      'No UE: visado de estudiante + admisión',
      'Estudiantes pueden trabajar 30 h/semana (reforma 2023)',
      'Universidad pública: 12-50 €/crédito según CCAA',
    ],
    officialLinks: [
      { label: 'UNEDasiss — Acceso estudiantes extranjeros', url: 'https://www.unedasiss.uned.es/' },
      { label: 'Ministerio de Universidades', url: 'https://www.universidades.gob.es/' },
    ],
  },
  {
    id: 'aulas-enlace-cade',
    category: 'education',
    title: 'Aulas de enlace, ATAL y CADE',
    summary: 'Recursos específicos para alumnado extranjero con desconocimiento del idioma o necesidades de adaptación.',
    content: `España dispone de varios recursos para alumnado extranjero que necesita adaptación lingüística o curricular.

## Aulas de enlace / Aulas TEMPUS / Aulas ATAL
- Aulas específicas para alumnado **extranjero recién llegado** con desconocimiento del castellano (o de la lengua cooficial).
- Duración habitual: **1 curso académico** (prorrogable a 2).
- Durante ese tiempo, el alumno compagina el aula de enlace con su grupo de referencia.
- Objetivo: **integración lingüística y curricular**.

## Aulas Temporales de Adaptación Lingüística (ATAL)
- Específicas de algunas CCAA (Andalucía, principalmente).
- Profesores especializados en enseñanza del español como lengua extranjera.
- Modalidad itinerante o en centro.

## Programa de Inmersión Lingüística
- En CCAA con lengua cooficial (Cataluña, País Vasco, Galicia, Comunidad Valenciana, Baleares).
- Para alumnado que se incorpora al sistema y no conoce la lengua cooficial.

## Aulas de Acogida (Madrid)
- Específicas de la Comunidad de Madrid.
- Para alumnado de incorporación tardía al sistema educativo.

## CADE (Centros de Atención al Desarrollo Educativo)
- Atención específica a alumnos con necesidades educativas especiales.
- Algunos CADE tienen líneas de atención al alumnado inmigrante.

## Protocolo de acogida
Las familias inmigrantes que escolarizan a sus hijos por primera vez deben pasar por:
1. **Comisión de Escolarización** de la zona (si es fuera de plazo).
2. **Asignación de centro** con plazas.
3. **Entrevista con la dirección** y orientador del centro.
4. **Adscripción a un aula de enlace** si es necesario.
5. **Seguimiento** durante el primer curso.

## Recursos complementarios
- **Traducción e interpretación** en centros educativos (en algunas CCAA).
- **Mediadores interculturales**.
- **Programa de éxito escolar** para inmigrantes (algunos Ayuntamientos).

## Recomendaciones para familias
- Solicita **informe de escolarización previa** del país de origen.
- Pregunta al centro por el programa de **acogida**.
- Mantén contacto con el tutor y el orientador.
- Pide apoyo en **español como segunda lengua** si tu hijo lo necesita.
- Si tu hijo tiene problemas de integración o discriminación, comunícalo a la dirección y a la **Inspección Educativa**.`,
    keyPoints: [
      'Aulas de enlace: 1 curso (prorrogable a 2)',
      'ATAL: Andalucía específicamente',
      'Inmersión lingüística en CCAA con lengua cooficial',
      'Protocolo de acogida y mediadores interculturales',
    ],
    officialLinks: [
      { label: 'Ministerio de Educación — Atención a la diversidad', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/profesores-educacion-diversidad.html' },
      { label: 'Comisión Escolarización (CCAA)', url: 'https://www.educacion.gob.es/' },
    ],
  },

  // ----------------------------------------------------------------------
  // FAMILIA (6 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'reagrupacion-familiar',
    category: 'family',
    title: 'Reagrupación familiar: requisitos REALES 2024',
    summary: 'Si tienes residencia legal en España, puedes traer a tu familia. Requisitos, documentación y plazos.',
    content: `La **reagrupación familiar** permite a los extranjeros residentes en España traer a su familia.

## Quién puede reagrupar
- Residentes **legales** con autorización renovada o larga duración.
- Refugiados y beneficiarios de protección subsidiaria.
- En casos excepcionales, residents con arraigo.

## Quién puede ser reagrupado
1. **Cónyuge** (no separado legalmente).
2. **Pareja de hecho** inscrita (con convivencia previa ≥ 2 años o hijos en común).
3. **Hijos menores** de 18 años (o mayores con discapacidad que no puedan valerse por sí mismos).
4. **Hijos del cónyuge** (menores de 18).
5. **Padres y abuelos** del reagrupante o su cónyuge, **mayores de 65 años** y a cargo (en algunos casos, sin límite de edad si hay dependencia).
6. **Menores** representados legalmente por el reagrupante.

## Requisitos económicos
- Medios económicos suficientes para la unidad familiar:
  - **IPREM mensual** (600 € en 2024) para el reagrupante.
  - + 50% del IPREM por cada familiar reagrupado (300 €/mes en 2024).
- Para reagrupar **padres**: 150% del IPREM por cada uno (900 €/mes en 2024).

## Alojamiento adecuado
- Informe de habitabilidad emitido por el Ayuntamiento.
- Vivienda con espacio suficiente para la unidad familiar.

## Seguro médico
- Para residentes no comunitarios que reagrupan a padres: seguro médico privado (salvo excepciones).

## Documentación
- Formulario **EX-02** (reagrupante) + **EX-03** (reagrupado, una vez aprobada la reagrupación inicial).
- Pasaporte en vigor.
- Documentación familiar: certificados de nacimiento, matrimonio, etc., **legalizados y traducidos**.
- Acreditación de medios económicos (nóminas, declaraciones).
- Informe de vivienda.
- Tasa 790/052 (15,76 €).

## Procedimiento
1. **Solicitud inicial** del reagrupante (EX-02) ante la Oficina de Extranjería.
2. Resolución en **45 días** (puede prorrogarse).
3. Si es favorable, el reagrupado solicita **visado** en el Consulado de España en su país (plazo 2 meses).
4. Llegada a España en **3 meses** desde la concesión del visado.
5. Solicitud de la **tarjeta de familiar reagrupado** (EX-07 en muchos casos, EX-17 para tarjeta).

## Vigencia
- La autorización de residencia del reagrupado tiene la **misma duración** que la del reagrupante.
- Puede trabajar por cuenta ajena o propia en las mismas condiciones que el reagrupante.
- Si se rompe el vínculo familiar (divorcio), puede solicitar autorización independiente si acredita arraigo.

## Reagrupación de familiares de ciudadanos UE
- Para familiares **no comunitarios** de ciudadano UE/EEE/Suiza: **EX-19** (tarjeta de familiar de ciudadano de la Unión).`,
    keyPoints: [
      'Reagrupar: cónyuge, hijos < 18, padres > 65 a cargo',
      'Medios: IPREM + 50% por cada familiar (600 + 300 € en 2024)',
      'Formulario EX-02 (reagrupante) + EX-03 (reagrupado)',
      'Resolución en 45 días + visado en 2 meses',
      'Vigencia igual a la del reagrupante',
    ],
    officialLinks: [
      { label: 'Reagrupación familiar — Inmigración', url: 'https://www.inclusion.gob.es/web/migraciones/reagrupacion-familiar-traer-a-sus-familiares-' },
      { label: 'Formulario EX-02', url: 'https://www.inclusion.gob.es/web/migraciones/modelos-generales' },
    ],
  },
  {
    id: 'prestaciones-hijo-a-cargo',
    category: 'family',
    title: 'Prestaciones por hijo a cargo',
    summary: 'Si tienes hijos menores de 18 años (o discapacitados), puedes recibir prestaciones de la Seguridad Social.',
    content: `Las **prestaciones por hijo a cargo** son ayudas económicas de la Seguridad Social para familias con hijos.

## Prestación contributiva (por hijo a cargo)
- Para **trabajadores en alta o pensionistas** de la SS con hijos menores de 18 años (sin discapacidad).
- Cuantía 2024: **291 €/año** por hijo (244 € si no hay cotización previa).
- Se paga en dos pagas (enero y julio).
- Compatible con la **deducción por maternidad**.

## Prestación no contributiva
- Para familias con bajos ingresos.
- Hijos menores de 18 años: **341 €/año** por hijo.
- Hijos con discapacidad ≥ 33%: hasta 1.000 €/año.
- Hijos con discapacidad ≥ 65%: hasta 7.538,88 €/año.
- **Límite de ingresos** familiar: 13.043,76 € + 15% por cada hijo a partir del segundo.

## Requisitos
- Residir legalmente en España.
- Tener hijos menores de 18 años (o mayores con discapacidad).
- Cumplir los límites de ingresos.

## Deducción por maternidad
- Para madres trabajadoras con hijos menores de 3 años.
- Cuantía: hasta **1.200 €/año** por hijo.
- Si la madre no tributa, puede solicitarse como **pago anticipado** (100 €/mes).

## Deducción por familia numerosa
- Categoría general: **1.200 €/año**.
- Categoría especial: **2.400 €/año**.
- Para familias con 3+ hijos (o 2 si alguno tiene discapacidad).

## Ingreso Mínimo Vital (IMV)
- Para familias con bajos ingresos y menores a cargo.
- Cuantía 2024: 652,32 €/mes para una persona sola + 245 €/mes por cada miembro adicional hasta el 4º.
- Solicitar en la **Seguridad Social**.

## Becas de comedor y libros
- Para escolares de primaria y ESO.
- Gestión: Consejería de Educación de la CCAA.

## Cómo solicitar
- **Prestación por hijo a cargo**: en la Seguridad Social (sede electrónica o presencial).
- **Deducción por maternidad**: en la **declaración de la Renta** o solicita pago anticipado.
- **IMV**: en la Seguridad Social.

## Documentación
- Libro de familia o certificado de nacimiento.
- DNI/NIE de los padres.
- Empadronamiento.
- Justificantes de ingresos (nóminas, declaración de renta).
- En su caso, certificado de discapacidad.`,
    keyPoints: [
      'Contributiva: 291 €/año por hijo (alta SS)',
      'No contributiva: 341 €/año (bajos ingresos)',
      'Deducción maternidad: hasta 1.200 €/año (madre trabajadora)',
      'Deducción familia numerosa: 1.200-2.400 €/año',
      'IMV: 652,32 € + 245 € por miembro adicional (2024)',
    ],
    officialLinks: [
      { label: 'Prestaciones familiares — Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10981_4' },
      { label: 'Ingreso Mínimo Vital', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/IMV' },
    ],
  },
  {
    id: 'permiso-maternidad-paternidad',
    category: 'family',
    title: 'Permiso de maternidad y paternidad',
    summary: 'Las madres y padres tienen derecho a permisos retribuidos para cuidar a sus hijos tras el nacimiento o adopción.',
    content: `Los **permisos de maternidad y paternidad** están reconocidos en España y son pagaderos por la Seguridad Social.

## Permiso de maternidad
- **Duración**: 16 semanas (ininterrumpidas), ampliables a 18 en caso de parto múltiple.
- Para hijos prematuros o hospitalizados: hasta 6 semanas adicionales.
- En caso de discapacidad del hijo: 2 semanas adicionales.
- **Distribución**: las primeras 6 semanas obligatorias para la madre; las 10 restantes pueden ser elegidas por la madre o el padre (intercambiables).

## Permiso de paternidad
- **Duración**: 16 semanas desde 2021.
- **6 semanas ininterrumpidas** tras el nacimiento.
- Las 10 restantes pueden disfrutarse de forma interrumpida (acumuladas con vacaciones) hasta el cumpleaños del bebé.

## Permiso de lactancia
- Reducción de jornada de **1 hora** (o fracción) para cuidado de menor de 12 meses.
- Indistintamente para madre o padre.

## Reducción de jornada por cuidado de hijo
- Para hijos menores de **12 años** (o con discapacidad sin límite de edad).
- Reducción entre 1/8 y 1/2 de la jornada, con disminución proporcional del salario.

## Requisitos para prestación económica
- Estar afiliada y en alta o situación asimilada en la SS.
- Periodo mínimo de cotización:
  - **Menores de 21 años**: no se exige.
  - **21-26 años**: 90 días en los 7 años anteriores o 270 días cotizados a lo largo de la vida.
  - **Mayores de 26 años**: 180 días en los 7 años anteriores o 360 días cotizados a lo largo de la vida.

## Cuantía
- **100% de la base reguladora** durante las 16 semanas.
- Base reguladora: media de las bases de cotización de los últimos 6 meses.

## Bono maternal
- Para trabajadoras que no llegan al periodo mínimo de cotización.
- Cuantía: igual al SMI durante **7 semanas** (1.134 € x 7 = 7.938 € en 2024).
- Solo a partir de la semana 39 de gestación.

## Documentación
- Certificado médico o de nacimiento.
- Libro de familia.
- Documentación laboral (alta en SS).

## Cómo solicitar
- En la **Seguridad Social** (sede electrónica con certificado digital o presencial).
- A través del **INSS** o **ISFAS/MUFACE/MUGEJU** si trabajas en la Administración.
- Plazo: desde el parto hasta los 15 años del hijo.

## Riesgo durante el embarazo
- Trabajadoras embarazadas que no puedan realizar su trabajo por riesgo.
- Prestación del 100% de la base reguladora durante el embarazo.

## Permiso de adopción y acogimiento
- Igual duración que maternidad (16 semanas).
- Distribución entre los dos progenitores.`,
    keyPoints: [
      'Maternidad y paternidad: 16 semanas (iguales)',
      'Paternidad: 6 obligatorias tras nacimiento + 10 a elegir',
      'Cuantía: 100% base reguladora',
      'Bono maternal: 7 semanas al SMI si no cumples cotización',
      'Reducción de jornada: hijos < 12 años (1/8 a 1/2)',
    ],
    officialLinks: [
      { label: 'Permiso de maternidad — Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10981_12' },
      { label: 'Permiso de paternidad — Seguridad Social', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10981_13' },
    ],
  },
  {
    id: 'guarderias-publicas-ayudas',
    category: 'family',
    title: 'Guarderías públicas y ayudas',
    summary: 'Escolarización de 0 a 3 años: guarderías públicas, bonificaciones y ayudas para familias trabajadoras.',
    content: `La escolarización de 0 a 3 años no es obligatoria en España, pero existen recursos públicos y ayudas.

## Escuelas infantiles (primer ciclo de educación infantil)
- **0 a 3 años**.
- **Públicas**: gestionadas por Ayuntamientos o CCAA. Precios según ingresos (escala móvil).
- **Concertadas**: con fondos públicos pero gestión privada.
- **Privadas**: precios libres (300-700 €/mes).

## Primer ciclo de educación infantil gratuito
- Desde el curso 2023-2024, en varias CCAA (Andalucía, Madrid, Cataluña, etc.) el segundo curso del primer ciclo (2-3 años) es **gratuito** en centros sostenidos con fondos públicos.
- En algunas CCAA, también es gratuito el primer ciclo completo para familias con bajos ingresos.

## Ayudas
### Bonificación por hijos en guardería (estatal)
- Deducción en IRPF de hasta **1.000 €/año** por hijo en guardería (si la madre trabaja).
- Solo para guarderías autorizadas.

### Cheque guardería / Bono guardería
- Programas específicos de Ayuntamientos (Madrid, Barcelona, Valencia, etc.).
- Cubre total o parcialmente el coste.

### Ayudas CCAA
- **Madrid**: Bono Guardería (hasta 460 €/mes para rentas bajas).
- **Cataluña**: Ayudas a fars infantils.
- **Andalucía**: Bono Infantil.
- **Comunidad Valenciana**: Aportació a la llar d'infants.

### IMV
- Las familias perceptoras del **Ingreso Mínimo Vital** tienen prioridad en la escolarización en escuelas infantiles públicas.

## Requisitos habituales
- Empadronamiento en el municipio.
- Estar al corriente con la SS (si trabajas).
- Ingresos dentro de los umbrales establecidos.
- Documentación del menor.

## Cómo solicitar
1. **Preinscripción** en el Ayuntamiento o en la consejería de educación (febrero-marzo).
2. **Baremo** según ingresos, situación familiar, proximidad.
3. **Asignación de plaza** (mayo-junio).
4. **Matrícula**.

## Recomendaciones
- Solicita plaza **con antelación** (la demanda supera la oferta).
- Si no consigues plaza pública, busca **guarderías concertadas**.
- Aprovecha las **ayudas municipales** y el **cheque guardería**.
- Si trabajas, comprueba si tu empresa tiene **servicio de guardería** o convenio con alguna.

## Derechos laborales relacionados
- **Lactancia**: reducción de jornada 1 hora para cuidado de menor de 12 meses.
- **Reducción de jornada** por cuidado de menor de 12 años (1/8 a 1/2).
- **Excedencia por cuidado de hijos**: hasta 3 años sin derecho a sueldo pero con reserva del puesto.`,
    keyPoints: [
      '0-3 años: no obligatorio, hay plazas públicas limitadas',
      '2-3 años: gratuito en centros sostenidos con fondos públicos (varias CCAA)',
      'Bonificación IRPF: hasta 1.000 €/año (madre trabajadora)',
      'Cheques guardería municipales (Madrid hasta 460 €/mes)',
      'IMV: prioridad en plazas públicas',
    ],
    officialLinks: [
      { label: 'Ministerio de Educación — Educación Infantil', url: 'https://www.educacion.gob.es/educacion-menus/areas-educacion/estudiantes/no-universitarios/educacion-infantil.html' },
      { label: 'Buscador escuelas infantiles', url: 'https://www.educacion.gob.es/' },
    ],
  },
  {
    id: 'violencia-genero-recursos-016',
    category: 'family',
    title: 'Violencia de género: recursos y 016',
    summary: 'Si sufres violencia de género, hay recursos para protegerte. El 016 es el teléfono gratuito de ayuda 24h.',
    content: `La **violencia de género** en España está tipificada como delito. Existen recursos específicos para proteger a las víctimas.

## Teléfono 016
- **Gratuito**, no deja rastro en la factura.
- Disponible las **24 horas** los 365 días.
- Atención en **51 idiomas**.
- Información jurídica, psicológica y recursos.
- No es un teléfono de emergencia (en emergencia, llama al **112**).

## ATENPRO
- Servicio de atención telefónica y dispositivos de teleasistencia para víctimas de violencia de género.
- Botón de emergencia con geolocalización.
- Funciona las 24h.
- Solicitar en los servicios sociales del Ayuntamiento o en la Delegación de Gobierno contra la Violencia de Género.

## Recursos jurídicos
### Asistencia jurídica gratuita
- Víctimas de violencia de género tienen derecho a **abogado de oficio** inmediato (independientemente de ingresos).
- **Justicia gratuita** en todos los procedimientos.

### Orden de protección
- Solicitable ante el juzgado de guardia, fiscalía o policía.
- Incluye medidas civiles (custodia, alimentos) y penales (orden de alejamiento, libertad provisional del agresor).
- Resolución en 72 horas.

### Juzgados de violencia sobre la mujer
- Específicos para estos delitos.
- Atienden también asuntos civiles relacionados (separación, custodia).

## Recursos sociales
### Casas de acogida
- Alojamiento temporal (3-6 meses) para víctimas y sus hijos.
- Confidencialidad de la dirección.
- Atención psicológica, jurídica y social.

### Pisos tutelados
- Para víctimas que han pasado por casa de acogida.
- Estancia de hasta 18 meses.

### Centros de emergencia
- Para acogida inmediata (24-72 horas).

## Derechos laborales
- **Reducción de jornada** (entre 1/2 y 2/3) con disminución proporcional del salario.
- **Reorganización del tiempo de trabajo** (cambio de turno o horario).
- **Suspensión del contrato** con reserva del puesto (hasta 6 meses prorrogables).
- **Extinción del contrato** con indemnización de 30 días por año trabajado.
- **Desempleo**: si extingues el contrato por violencia de género, tienes derecho al paro aunque no hayas cotizado lo suficiente.

## Prestaciones económicas
### Ayuda económica para víctimas (Ley Orgánica 1/2004)
- Para víctimas con **ingresos inferiores** al 75% del SMI.
- Cuantía 2024: hasta 6.000 €/año prorrogables hasta 5.538 €.
- Plus de hijos: hasta 2.769 €/año.

### Pensión de viudedad
- Para viudas de homicidios por violencia de género.
- Sin requisito de cotización previa.

### Renta Activa de Inserción (RAI)
- Para víctimas de violencia de género que han agotado el paro.
- 80% del IPREM (480 €/mes en 2024).

## Recomendaciones
- **Denuncia cuanto antes** (en comisaría, juzgado de guardia o fiscalía).
- Conserva pruebas: mensajes, correos, partes médicos, testigos.
- Solicita **orden de protección**.
- Pide apoyo a **servicios sociales** del Ayuntamiento o a una **ONG** (Fundación Mujeres, Ana Bella, etc.).
- Si tienes hijos menores, informa al juez para protegerlos también.

## Recursos para hombres
- **Teléfono 016**: también ofrece información a hombres que detectan comportamientos violentos en sí mismos.`,
    keyPoints: [
      '016: 24h, gratis, 51 idiomas, no deja rastro',
      'ATENPRO: botón de emergencia con geolocalización',
      'Justicia gratuita para víctimas (sin requisito ingresos)',
      'Casas de acogida + pisos tutelados',
      'Derechos laborales: reducción, suspensión, extinción',
      'Pensión viudedad sin cotización si homicidio por violencia de género',
    ],
    officialLinks: [
      { label: 'Delegación del Gobierno contra la Violencia de Género', url: 'https://violenciagenero.igualdad.gob.es/' },
      { label: 'Portal 016', url: 'https://violenciagenero.igualdad.gob.es/informacion-3/recursos/telefono016/' },
      { label: 'Fundación Mujeres', url: 'https://wwwfundacionmujeres.es/' },
    ],
    emergencyPhone: '016',
  },
  {
    id: 'menores-no-acompanados-mena',
    category: 'family',
    title: 'Menores no acompañados: protección',
    summary: 'Los menores extranjeros no acompañados (MENA) tienen derecho a protección por parte de la Administración española.',
    content: `Un **menor extranjero no acompañado (MENA)** es una persona menor de 18 años, no comunitaria, que llega a España sin un adulto responsable de ella.

## Marco legal
- **Convención de los Derechos del Niño** (ONU, 1989).
- **Ley Orgánica 1/1996** de protección jurídica del menor.
- **Ley 4/2000** de extranjería.
- **Reglamento de Extranjería**.

## Procedimiento
1. **Detección**: por fuerzas de seguridad, servicios sociales o ciudadanos.
2. **Puesta a disposición** de los servicios sociales de la Comunidad Autónoma (en 24 horas).
3. **Determinación de la edad**:
   - Documentos: si hay documentos que prueban la minoría de edad.
   - En su defecto, **pruebas médicas** (radiografía de muñeca, dentición). Las pruebas deben realizarse con consentimiento o autorización judicial.
   - Si hay duda, se aplica el **principio de beneficio de la duda** y se considera menor.
4. **Asunción de la tutela** por la entidad pública de protección de menores de la CCAA.
5. **Búsqueda de la familia** en el país de origen (con colaboración consular y de la OIM).
6. **Resolución sobre el interés superior del menor**: retorno familiar (si es seguro) o permanencia en España.

## Derechos del MENA
- **Asistencia jurídica**: abogado de oficio.
- **Traductor/intérprete**.
- **Acogimiento residencial o familiar**.
- **Asistencia sanitaria** (con tarjeta sanitaria, aunque no esté regularizado).
- **Escolarización obligatoria**.
- **Documento de identificación**: expedido por la CCAA.
- **Autorización de residencia** por circunstancias excepcionales (a los 9 meses de tutela si no se ha resuelto el retorno).
- **Autorización de trabajo** desde los 16 años, con permiso de la entidad pública.

## Permiso de residencia (a los 9 meses)
- Formulario **EX-10** por arraigo familiar u otras circunstancias excepcionales.
- Residencia y trabajo por cuenta ajena o propia.
- Renovación anual hasta la mayoría de edad.

## A los 18 años
- Si ha estado bajo tutela durante **2+ años** y ha tenido integración: puede solicitar autorización de **residencia y trabajo** (con bastantes facilidades).
- Si no, debe solicitar la residencia por las vías generales.

## Recursos
- **Defensor del Pueblo** y **Defensor del Menor** (en cada CCAA).
- **UNICEF España**.
- **Fundación Raíces**, **Fundación Cepaim**, **PRODENI**.
- **OIM** (Organización Internacional para las Migraciones).

## Recomendaciones para educadores y tutores
- Asegurar que el menor tiene **tutor legal**.
- Verificar que se solicita la **autorización de residencia** en plazo.
- Apoyar la **escolarización** y la formación.
- Atender la **salud mental** (procesos traumáticos previos).
- Conservar la documentación del menor (pasaporte, partida de nacimiento).

## Problemas frecuentes
- Determinación de edad errónea.
- Falta de documentación del país de origen.
- Dificultades de inserción laboral tras la mayoría de edad.`,
    keyPoints: [
      'Menor de 18 años sin adulto responsable',
      'Tutela asumida por servicios sociales CCAA en 24h',
      'Residencia por circunstancias excepcionales a los 9 meses',
      'Trabajo autorizado desde los 16 años',
      'Beneficio de la duda: en caso de duda, se considera menor',
    ],
    officialLinks: [
      { label: 'Defensor del Pueblo — MENA', url: 'https://www.defensordelpueblo.es/' },
      { label: 'UNICEF España — Migración', url: 'https://www.unicef.es/trabajo/infancia-y-migracion' },
    ],
    emergencyPhone: '900 502 502',
  },

  // ----------------------------------------------------------------------
  // BANCA (4 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'cuenta-bancaria-no-residente',
    category: 'banking',
    title: 'Abrir cuenta bancaria como no residente',
    summary: 'Según el RD 671/2017, cualquier persona, residente o no, puede abrir una cuenta bancaria en España.',
    content: `El **Real Decreto 671/2017** regula la obligación de las entidades bancarias de ofrecer una cuenta de pago básica a cualquier consumidor, **incluidos los no residentes y personas sin domicilio fijo**.

## Derechos
- Las entidades bancarias **no pueden negarse** a abrir una cuenta de pago básica por motivos de residencia, nacionalidad o situación económica.
- Solo pueden denegar si el solicitante ya tiene otra cuenta en España.

## Cuenta de pago básica
- **Comisiones limitadas**: máximo **3 €/mes** (en 2024) por todos los servicios incluidos.
- Servicios incluidos:
  - Apertura y mantenimiento.
  - Tarjeta de débito.
  - Ingreso y reintegro de efectivo.
  - Pagos (transferencias, recibos, domiciliaciones).
  - Consulta de saldo y movimientos.
- Sin intereses o con intereses mínimos.

## Documentación necesaria para no residentes
- **Pasaporte** o DNI nacional en vigor.
- **NIE** (no es obligatorio para abrir cuenta, pero es muy recomendable).
- **Justificación de actividad**: oferta laboral, contrato alquiler, justificación de ingresos, etc.
- **Certificado de no residencia fiscal** emitido por tu país de origen (si eres residente fiscal fuera de España).
- Declaración de residencia fiscal (modelo 030 a la AEAT si resides en España).

## Cuenta para residente
- Más ventajosa (menos comisiones).
- Requiere **NIE** y empadronamiento o justificación de residencia.

## Cuenta para no residente
- Aplicación de la **retención del 19%** (UE/EEE) o **24%** (terceros países) sobre los intereses generados.
- La entidad bancaria realiza esta retención y la ingresa a Hacienda.

## Recomendaciones
- Compara **varias entidades** (CaixaBank, Santander, BBVA, Bankinter, Sabadell, ING, etc.).
- **CaixaBankNow**, **Openbank** y **BBVA** suelen ser amigables con no residentes.
- Evita cuentas con comisiones de mantenimiento (muchas cuentas "sin comisiones" las exigen si domicilias nómina).
- Si eres **estudiante**, existen cuentas específicas gratuitas.
- **CaixaBank** y **BBVA** ofrecen cuentas sin comisiones para clientes < 30 años.

## Reclamaciones
- Ante el **Departamento de Conducta de Mercado y Reclamaciones del Banco de España**.
- Plazo: 1 año desde el incidente.`,
    keyPoints: [
      'RD 671/2017: derecho a cuenta básica para no residentes',
      'Cuenta básica: máximo 3 €/mes de comisiones (2024)',
      'Retención 19% (UE) / 24% (terceros) sobre intereses',
      'Pasaporte + NIE (recomendado) + justificación actividad',
    ],
    officialLinks: [
      { label: 'RD 671/2017 — Cuenta básica', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-8014' },
      { label: 'Banco de España — Cuentas básicas', url: 'https://clientebancario.bde.es/pcb/es/' },
    ],
  },
  {
    id: 'banco-social-cuentas-comisiones',
    category: 'banking',
    title: 'Banco social y cuentas sin comisiones',
    summary: 'El banco social y las cuentas sin comisiones para personas en situación de vulnerabilidad.',
    content: `Más allá de la cuenta de pago básica (RD 671/2017), existen iniciativas de **banca social** para personas en situación de vulnerabilidad.

## Cuentas sin comisiones
Muchos bancos ofrecen cuentas sin comisiones si se cumplen ciertas condiciones:
- **Domiciliar nómina** o **pensión** (mínimo 600-900 €/mes).
- **Domiciliar 3-5 recibos** (luz, agua, internet, etc.).
- **Uso de tarjetas** (mínimo 1-3 compras al trimestre).
- Edad < 30 años o > 65 (cuentas jóvenes o sénior).

## Cuentas para colectivos vulnerables
Algunas entidades tienen productos específicos:
- **CaixaBank**: cuenta sin comisiones para perceptores de IMV y otras ayudas.
- **BBVA**: cuenta "Va Contigo" para personas con discapacidad y familias vulnerables.
- **Sabadell**: cuenta sin comisiones para familias numerosas.
- **Cajas Rurales** y **cajas de ahorro**: políticas de banca social propias.

## Microcréditos sociales
- Para personas sin acceso a financiación tradicional.
- Cantidades reducidas (300-5.000 €) para proyectos de autoempleo o necesidades básicas.
- **Microbank** (CaixaBank), **Crowfunding** (Goteo, KutxaSolidaria).

## Banca ética
- **Triodos Bank**, **Fiare**, **Coop57**, **Oikocash**: entidades que invierten solo en proyectos sociales y medioambientales.
- Cuentas y productos con criterios éticos.

## Reclamaciones bancarias
1. **Servicio de atención al cliente** de la entidad.
2. **Defensor del cliente** (si la entidad lo tiene).
3. **Departamento de Conducta de Mercado y Reclamaciones del Banco de España**: web **bde.es**.
4. **Comisión Nacional del Mercado de Valores (CNMV)** para productos de inversión.

## Recomendaciones
- Antes de contratar, lee la **fila 7+7** del contrato (comisiones y condiciones).
- Pregunta por la **cuenta de pago básica** si cumples requisitos.
- **No firmes** sin leer el contrato.
- Comprueba las comisiones por descubierto (pueden ser muy altas).
- Si tienes dificultades para pagar, comunícalo al banco **antes** del impago para renegociar.

## Productos a evitar si tienes ingresos bajos
- Tarjetas de crédito revolving (intereses 20-30%).
- Préstamos rápidos online (intereses 1.000-2.000% TAE).
- Anticipos de nómina recurrentes.`,
    keyPoints: [
      'Cuentas sin comisiones: domiciliando nómina o recibos',
      'Banca social: productos específicos para vulnerables',
      'Microcréditos: Microbank, Crowfunding',
      'Banca ética: Triodos, Fiare, Coop57',
      'Reclamaciones: Banco de España',
    ],
    officialLinks: [
      { label: 'Banco de España — Reclamaciones', url: 'https://clientebancario.bde.es/pcb/es/' },
      { label: 'MicroBank', url: 'https://www.microbanklacaixa.com/' },
    ],
  },
  {
    id: 'bizum-como-usarlo',
    category: 'banking',
    title: 'Bizum: cómo usarlo',
    summary: 'Bizum es un sistema de pago inmediato entre cuentas bancarias españolas. Cómo darse de alta y utilizarlo.',
    content: `**Bizum** es un servicio de pago inmediato entre personas, asociado al número de teléfono móvil y a la cuenta bancaria española.

## Características
- **Pago instantáneo** (en segundos).
- **Gratuito** para usuarios particulares (consultar tu banco).
- Límites: **entre 0,50 € y 1.000 €** por operación (varía según banco).
- Límite diario: 2.000 € (puede ser menor según banco).
- Máximo de operaciones recibidas: 60 al mes.
- Máximo 5.000 € al mes en total.

## Cómo darse de alta
1. Tener una cuenta bancaria en una entidad adherida a Bizum (la mayoría de bancos españoles: CaixaBank, Santander, BBVA, Sabadell, Bankinter, ING, Kutxabank, Abanca, etc.).
2. Tener el número de teléfono asociado a la cuenta.
3. Descargar la **app del banco** o entrar en la web.
4. Activar Bizum desde la sección "Bizum" o "Transferencias" → "Bizum".
5. Validar con clave de seguridad (Cl@ve, código SMS, huella, etc.).
6. Asignar un **alias** (identificador) para que otros usuarios te encuentren.

## Usos
- **Enviar dinero** a otro contacto (por número de teléfono).
- **Solicitar dinero** a otro usuario.
- **Pagar en comercios** (con código QR).
- **Dividir gastos** (grupo de amigos).
- **Donar a ONG** (Cáritas, Cruz Roja, etc.).
- **Pagar impuestos** (en algunos Ayuntamientos).
- **Comprar online** (varios comercios lo aceptan).

## Recomendaciones de seguridad
- **No compartas** tu alias ni tu número de teléfono con desconocidos.
- **Verifica el destinatario** antes de confirmar (Bizum no admite devoluciones si te equivocas).
- Configura **doble factor de autenticación** en tu app bancaria.
- **No aceptes Bizum** de desconocidos que te piden reenviar el dinero (puede ser blanqueo).

## Limitaciones para no residentes
- Bizum solo funciona con **cuentas en bancos españoles**.
- Si tu cuenta está en el extranjero, no puedes usar Bizum (puedes usar alternativas como **Twint** en Suiza, **Lydia** en Francia, etc.).
- Para transferencias internacionales, existen otras opciones.

## Alternativas internacionales
- **PayPal**: para enviar y recibir dinero en distintas divisas.
- **Wise (anteriormente TransferWise)**: para transferencias internacionales con comisiones bajas.
- **Revolut**: cuenta multidivisa con transferencias inmediatas entre usuarios.
- **Western Union / MoneyGram**: para envíos a países sin banca.`,
    keyPoints: [
      'Bizum: pago instantáneo, asociado al teléfono',
      'Límites: 0,50-1.000 €/operación | 2.000 €/día',
      'Gratuito para particulares',
      'Solo funciona con cuentas en bancos españoles',
      'Alternativas internacionales: Wise, PayPal, Revolut',
    ],
    officialLinks: [
      { label: 'Bizum — Web oficial', url: 'https://bizum.es/' },
      { label: 'Entidades adheridas a Bizum', url: 'https://bizum.es/bancos' },
    ],
  },
  {
    id: 'transferencias-internacionales',
    category: 'banking',
    title: 'Transferencias internacionales: mejores opciones',
    summary: 'Cómo enviar dinero a tu país de origen con las menores comisiones. Compara opciones.',
    content: `Enviar dinero al extranjero puede tener comisiones muy diferentes según el método. Aquí te explicamos las mejores opciones.

## Bancos tradicionales
- Transferencias **SWIFT** (al extranjero).
- Comisiones: 0,4-1% del importe (mínimo 15-40 €).
- Tipo de cambio: suele aplicarse un **margen de 1-3%** sobre el tipo oficial.
- Plazo: 2-5 días laborables.
- Para importes grandes (>5.000 €), pueden tener mejores comisiones negociadas.

## Especialistas en remesas
### Wise (antes TransferWise)
- Tipo de cambio **real** (sin margen).
- Comisión fija baja + pequeña comisión variable (0,3-2%).
- Plazo: minutos a 1 día.
- Cobertura: 80+ países.
- Cuenta multidivisa gratuita.

### Remitly
- Especializado en envíos a países en desarrollo.
- Opciones: **Economy** (más barato, 1-3 días) y **Express** (inmediato, más caro).
- Atención al cliente en varios idiomas.
- Comisiones 1-3% según destino.

### WorldRemit
- Cobertura amplia en África, Asia, Latinoamérica.
- Opciones de pago: cuenta bancaria, móvil, recogida en efectivo.
- Comisiones 1-3%.

### Western Union / MoneyGram
- Red más amplia de agentes físicos (200+ países).
- Recogida en efectivo en minutos.
- Comisiones: 4-8% según país y método.

### PayPal
- Práctico para pequeñas cantidades entre usuarios.
- Comisión: 4-5% sobre tipo de cambio.
- No apto para grandes envíos.

### Bizum internacional
- Bizum no funciona internacionalmente (solo cuentas españolas).
- Existen alternativas como **Paysend**, **Zelle** (EEUU), etc.

## Criterios de comparación
1. **Tipo de cambio**: comprueba cuánto recibirá tu familiar, no solo la comisión.
2. **Comisión fija y variable**.
3. **Velocidad** (inmediato vs 1-3 días).
4. **Método de recepción**: cuenta bancaria, efectivo, móvil, tarjeta.
5. **Seguridad**: entidades reguladas (Banco de España, FCA, etc.).
6. **Atención al cliente** en tu idioma.

## Recomendaciones para inmigrantes
- Para enviar **pequeñas cantidades** frecuentes: Wise, Remitly, WorldRemit.
- Para **grandes importes** (>5.000 €): negocia con tu banco o usa Wise.
- Para **recogida en efectivo**: Western Union / MoneyGram.
- **Verifica siempre** el tipo de cambio antes de confirmar.
- **No envíes** dinero a personas desconocidas (estafas por teléfono o email).

## Límites y declaraciones
- Envíos superiores a **10.000 €** (o equivalente) requieren declaración al Banco de España (prevención de blanqueo).
- Para residentes fiscales en España, los envíos no tienen restricción pero se incluyen en el patrimonio a efectos fiscales.

## Recomendaciones de seguridad
- Usa solo plataformas reguladas y verificadas.
- Configura **doble factor de autenticación**.
- **No compartas** tus claves bancarias.`,
    keyPoints: [
      'Bancos: SWIFT, 0,4-1% + margen tipo cambio',
      'Wise: tipo real + comisión 0,3-2%',
      'Remitly, WorldRemit: 1-3% según destino',
      'Western Union: 4-8% pero red más amplia',
      'Envíos > 10.000 €: declarar al Banco de España',
    ],
    officialLinks: [
      { label: 'Wise España', url: 'https://wise.com/es/' },
      { label: 'Remitly', url: 'https://www.remitly.com/' },
      { label: 'Banco de España — Prevención blanqueo', url: 'https://www.bde.es/bde/es/secciones/sobreelbanco/Funciones_prevencion/' },
    ],
  },

  // ----------------------------------------------------------------------
  // IMPUESTOS (3 artículos)
  // ----------------------------------------------------------------------
  {
    id: 'nif-no-residentes',
    category: 'taxes',
    title: 'NIF para no residentes',
    summary: 'El NIF de no residente es el identificador fiscal para personas extranjeras que realizan operaciones económicas en España.',
    content: `El **NIF de no residente** es el identificador fiscal para personas físicas o jurídicas no residentes que realizan operaciones con trascendencia tributaria en España.

## ¿Qué es?
- Para personas físicas no residentes: el NIF es la **letra N seguida de 8 caracteres** (generalmente, los 7 del NIE + 1 letra de control).
- En algunos casos (cuando no se dispone de NIE), se asigna un NIF con la **letra M** + 7 dígitos + 1 letra.
- Para personas jurídicas no residentes: NIF con la **letra N** + 8 dígitos.

## ¿Cuándo se necesita?
- Abrir una cuenta bancaria.
- Comprar o vender inmuebles.
- Realizar actividades económicas.
- Alquilar inmuebles en España.
- Recibir rentas españolas (dividendos, intereses, alquileres).
- Heredar bienes en España.

## Cómo obtenerlo
- **Solicitando el NIE**: el NIE, con la letra N delante, hace las veces de NIF.
- Si no tienes NIE pero necesitas NIF (por ejemplo, al heredar un bien): presentar el **modelo 036** o **037** en la AEAT, indicando que se solicita NIF de no residente.

## Modelo 030
- Para comunicar o modificar el domicilio fiscal.
- Para comunicar la **residencia fiscal** (si resides en España más de 183 días o tienes centro de intereses).
- También para **cambiar la situación** de residente a no residente (o viceversa).

## Residente vs No Residente
- **Residente fiscal**:
  - Más de 183 días en España durante el año natural.
  - Centro de intereses económicos o actividades en España.
  - Cónyuge o hijos menores residentes (presunción).
- **No residente**: el resto. Tributa por el **IRPF de no residentes** (modelo 210).

## Certificado de residencia fiscal
- Emitido por la AEAT (España) o por la autoridad fiscal de tu país de origen.
- Necesario para aplicar **convenios de doble imposición**.
- Plazo de emisión: hasta 15 días.

## Representante fiscal
- Para no residentes que realizan operaciones en España, es posible designar un **representante fiscal** (no obligatorio en general, pero sí en algunos casos, como poseer inmuebles).
- El representante responde solidariamente de las deudas tributarias.

## Recomendaciones
- Si vas a vivir en España, solicita el **NIE** cuanto antes (se convierte automáticamente en NIF).
- Si eres residente fiscal en España, presenta la **declaración de la Renta** (IRPF) anualmente.
- Si tienes bienes en España pero resides en otro país, declara en el **modelo 210**.

## Recursos
- **AEAT** (Agencia Tributaria): sede electrónica con certificado digital o Cl@ve.
- Teléfono de atención: **901 335 533** o **91 175 36 78**.
- Asesoría fiscal (asesor o gestor administrativo).`,
    keyPoints: [
      'NIF no residente = N + 7 dígitos NIE + letra de control',
      'NIE actúa como NIF automático',
      'Modelo 030: comunicar residencia fiscal',
      'Residente: >183 días en España',
      'Certificado de residencia fiscal: para convenios doble imposición',
    ],
    officialLinks: [
      { label: 'AEAT — NIF no residentes', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' },
      { label: 'Modelo 030', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml' },
    ],
  },
  {
    id: 'irpf-no-residentes-modelo-210',
    category: 'taxes',
    title: 'IRPF no residentes: modelo 210',
    summary: 'El modelo 210 es la declaración del IRPF para no residentes. Quién debe presentarlo y cómo.',
    content: `El **modelo 210** es la autoliquidación del Impuesto sobre la Renta de no Residentes (IRNR).

## ¿Quién debe presentarlo?
Personas físicas, no residentes en España, que obtengan rentas en territorio español, **siempre que no actúen mediante establecimiento permanente**.

## Rentas sujetas
1. **Rendimientos del trabajo**: salarios, dietas, pensiones.
2. **Rendimientos de actividades económicas**: autónomos.
3. **Rendimientos del capital**:
   - Intereses, dividendos, royalties.
   - Rendimientos de inmuebles (alquileres).
4. **Ganancias patrimoniales**:
   - Venta de inmuebles.
   - Venta de acciones, fondos de inversión.
5. **Imputación de rentas inmobiliarias**: inmuebles urbanos en España no alquilados.

## Tipos impositivos (2024)
- **19%** para residentes UE/EEE/Suiza.
- **24%** para residentes en terceros países.

## Plazos de presentación
### Trimestral (rentas con retenor)
- **1T**: 1-20 de abril.
- **2T**: 1-20 de julio.
- **3T**: 1-20 de octubre.
- **4T**: 1-30 de enero.

### Anual (rentas sin retención)
- **1 de enero al 31 de enero** del año siguiente al de devengo.

## Casos prácticos más comunes
### Alquiler de inmueble en España
- Ingresos íntegros (renta recibida).
- Gastos deducibles (solo para UE/EEE): IBI, comunidad, seguros, reparaciones, intereses hipoteca, amortización 3%.
- Tipo 19% (UE) o 24% (terceros países sobre ingresos íntegros).
- **Retención del 19%**: el inquilino retiene y lo ingresa si es empresa o profesional; si es particular, **debes ingresar el modelo 210** tú mismo.

### Venta de inmueble en España
- **Retención del 3%** sobre el valor de transmisión (si el vendedor es no residente).
- El comprador ingresa el 3% a Hacienda en 30 días (modelo 211).
- El vendedor declara la ganancia en el modelo 210 y aplica el 3% como retención a cuenta.

### Dividendos e intereses
- **Retención del 19%** por la entidad pagadora.
- No es necesario presentar el modelo 210 si se aplica la retención (salvo que quieras aplicar convenio).

### Pensiones
- Las pensiones españolas pagadas a no residentes tributan al 19% (UE) o 24% (otros).
- Aplicación del convenio de doble imposición.

## Convenios de doble imposición
- España tiene convenios con más de 90 países.
- Para aplicar el convenio, debes tener **certificado de residencia fiscal** del país correspondiente.
- Reducciones o exenciones según el convenio.

## Cómo presentar el modelo 210
- **Telemáticamente** en la sede electrónica de la AEAT (con certificado digital, Cl@ve o sistema de firma).
- Posibilidad de utilizar un **representante fiscal**.

## Recomendaciones
- Si tienes rentas en España y resides en otro país, **te conviene asesorarte** con un gestor o asesor fiscal.
- Conserva todos los justificantes de ingresos y gastos.
- Si vendes un inmueble, **no olvides** que el comprador retiene el 3% (lo verás en tu cuenta bancaria a recibir).

## Sanciones
- Por no presentar el modelo 210: hasta el 50% de la cuota no ingresada + intereses de demora.
- Recargo por presentación extemporánea sin requerimiento.`,
    keyPoints: [
      'Modelo 210: IRPF no residentes sin establecimiento permanente',
      'Tipos: 19% UE/EEE | 24% terceros países',
      'Trimestral (1-20 de abril/julio/octubre/enero) o anual',
      'Alquiler: retención 19% (varias modalidades)',
      'Venta inmueble: retención 3% (modelo 211 por comprador)',
      'Convenios doble imposición con 90+ países',
    ],
    officialLinks: [
      { label: 'AEAT — Modelo 210', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G213.shtml' },
      { label: 'Instrucciones modelo 210 (PDF)', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GF00.shtml' },
    ],
  },
  {
    id: 'iva-autonomos',
    category: 'taxes',
    title: 'IVA: si eres autónomo',
    summary: 'El IVA grava el consumo y es obligatorio para autónomos. Cómo funciona, tipos y modelos.',
    content: `El **Impuesto sobre el Valor Añadido (IVA)** es un impuesto indirecto que grava el consumo de bienes y servicios en España. Los autónomos y empresas deben **repercutirlo** en sus facturas y **liquidarlo** con Hacienda.

## Tipos de IVA (2024)
- **General**: **21%** (la mayoría de productos y servicios).
- **Reducido**: **10%** (alimentación, transporte, hostelería, vivienda, etc.).
- **Superreducido**: **4%** (alimentos básicos, libros, medicamentos, viviendas de protección oficial).

## Quién debe repercutir IVA
- Empresarios y profesionales que realicen operaciones sujetas.
- Hay exenciones: educación, sanidad, seguros, operaciones financieras, alquiler de vivienda (con excepciones).

## Funcionamiento
- En cada factura, repercutas el IVA correspondiente.
- Al cliente le cobras **base + IVA**.
- El IVA repercutido se llama **IVA repercutido** (o devengado).
- El IVA que tú pagas en tus compras se llama **IVA soportado**.
- En tu declaración: **IVA repercutido − IVA soportado**.
  - Si es positivo: ingresas a Hacienda.
  - Si es negativo: Hacienda te compensa (en los próximos trimestres) o te devuelve (anualmente si es artesano o temporada).

## Modelos a presentar
### Modelo 303 (declaración trimestral)
- Trimestral: 1-20 de abril, julio, octubre, enero.
- **IVA repercutido − IVA soportado**.
- Resultado: a ingresar, a compensar o negativa.

### Modelo 390 (resumen anual)
- Anual: del 1 al 30 de enero del año siguiente.
- Resumen de todas las operaciones del año.

### Modelo 111 (retenciones IRPF trabajadores)
- Si tienes empleados, retienes su IRPF y lo ingresas trimestralmente.

### Modelo 115 (retenciones alquileres)
- Si alquilas un local y retienes el 19% del alquiler al propietario.

### Modelo 130 (pago a cuenta IRPF autónomo)
- Si estás en estimación directa, pagas a cuenta del IRPF (20% del beneficio).

### Modelo 347 (operaciones con terceros)
- Anual: operaciones > 3.000 € con un mismo cliente o proveedor.

### Modelo 349 (operaciones intracomunitarias)
- Para operaciones con proveedores/clientes de la UE.

## Operaciones exentas
- Educación reglada (colegios, universidades, academias homologadas).
- Sanidad (profesionales sanitarios).
- Servicios financieros y seguros.
- Alquiler de vivienda habitual (no aplicable a alquileres de temporada o de locales).

## Recargo de equivalencia
- Aplicable a comerciantes minoristas que no realizan transformación.
- Tipos: 5,2%, 1,4% o 0,5% sobre la base.
- Sustituye a las declaraciones trimestrales de IVA.

## Régimen especial de agricultura y ganadería
- Para agricultores y ganaderos tradicionales.
- IVA del 12% en ventas.
- Sin declaraciones de IVA.

## Recomendaciones
- **Lleva libros de registro** de facturas emitidas y recibidas (obligatorio desde 2017 con la Ley Anti-Fraude).
- **Conserva las facturas** durante 6 años.
- **No factures sin IVA** salvo operaciones exentas (debes justificar la exención).
- Si tienes **dudas**, consulta con un asesor fiscal.
- Existen programas gratuitos (ContaSOL, Anfix, AnfípVAT, etc.) y de pago (Holded, Anfix, Quipu).

## Infracciones y sanciones
- No presentar el modelo 303: hasta 50% de la cuota.
- Llevar libros incorrectamente: hasta 1% de la facturación.
- Facturas falsas: hasta el 50% del importe + responsabilidades penales si supera 120.000 €.`,
    keyPoints: [
      'Tipos: 21% general | 10% reducido | 4% superreducido',
      'Modelo 303: trimestral (1-20 abril/julio/octubre/enero)',
      'Modelo 390: anual (1-30 enero)',
      'Modelo 130: IRPF autónomo (20% beneficio)',
      'Modelo 347: operaciones > 3.000 € con terceros',
      'Libros de registro obligatorios desde 2017',
    ],
    officialLinks: [
      { label: 'AEAT — IVA autónomos', url: 'https://sede.agenciatributaria.gob.es/Sede/iva.html' },
      { label: 'Modelo 303', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml' },
    ],
  },
];

// ============================================================================
// CONTACTOS DE EMERGENCIA — mínimo 20
// ============================================================================
export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  // Generales
  {
    id: 'emergencias-112',
    name: '112 Emergencias',
    phone: '112',
    description: 'Teléfono gratuito de emergencias generales (sanitarias, policiales, incendios, protección civil). Atiende 24h en español, inglés, francés, alemán y árabe.',
    category: 'general',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Árabe'],
  },
  {
    id: 'urgencias-sanitarias-061',
    name: '061 Urgencias sanitarias',
    phone: '061',
    description: 'Atención telefónica de urgencias sanitarias. Coordina ambulancias y emergencias médicas en toda España.',
    category: 'health',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés'],
  },
  {
    id: 'cruz-roja-900-222-100',
    name: 'Cruz Roja Española',
    phone: '900 222 100',
    description: 'Atención a inmigrantes, refugiados, programas de inclusión social, ayuda humanitaria. Línea gratuita para personas en situación de vulnerabilidad.',
    category: 'immigration',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
  },
  // Sanitarias
  {
    id: 'informacion-sanitaria-900-200-220',
    name: 'Cita previa sanitaria',
    phone: '900 200 220',
    description: 'Cita previa con médico de familia, pediatra y enfermería en todo el territorio nacional. Línea gratuita del Ministerio de Sanidad.',
    category: 'health',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'seguridad-social-901-166-565',
    name: 'Seguridad Social — Información',
    phone: '901 166 565',
    description: 'Información general de la Seguridad Social: afiliación, cotización, prestaciones, IMV, pensions.',
    category: 'health',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'prevencion-suicidio-024',
    name: '024 — Teléfono de prevención del suicidio',
    phone: '024',
    description: 'Servicio gratuito y confidencial de apoyo emocional y prevención del suicidio. Atiende 24h, también por WhatsApp.',
    category: 'health',
    available24h: true,
    languages: ['Español', 'Inglés', 'Catalán', 'Gallego', 'Euskera'],
  },
  {
    id: 'telefono-esperanza-711-385-385',
    name: 'Teléfono de la Esperanza',
    phone: '711 385 385',
    description: 'Apoyo emocional, escucha activa e intervención en crisis. Atiende 24h, gratuito.',
    category: 'health',
    available24h: true,
    languages: ['Español'],
  },
  // Policía y seguridad
  {
    id: 'guardia-civil-062',
    name: '062 Guardia Civil',
    phone: '062',
    description: 'Emergencias y denuncias a la Guardia Civil. Vigilancia de carreteras, costas, medio ambiente, fronteras.',
    category: 'general',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés', 'Alemán'],
  },
  {
    id: 'policia-nacional-091',
    name: '091 Policía Nacional',
    phone: '091',
    description: 'Emergencias y denuncias a la Policía Nacional. Extranjería, documentación, delitos graves.',
    category: 'general',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés', 'Alemán'],
  },
  {
    id: 'policia-local-092',
    name: '092 Policía Local',
    phone: '092',
    description: 'Emergencias y denuncias a la Policía Local de tu municipio. Tráfico urbano, convivencia, ruidos.',
    category: 'general',
    available24h: true,
    languages: ['Español'],
  },
  {
    id: 'bomberos-080',
    name: '080 Bomberos',
    phone: '080',
    description: 'Emergencias por incendios, rescates, accidentes con riesgo. Atiende 24h.',
    category: 'general',
    available24h: true,
    languages: ['Español'],
  },
  {
    id: 'cuerpo-canjeria-095',
    name: '095 Policía Municipal / Tráfico',
    phone: '095',
    description: 'Trámites relacionados con tráfico y circulación (algunas ciudades). Verificar disponibilidad por ciudad.',
    category: 'general',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'denuncias-policia-902-102-112',
    name: 'Denuncias Policía Nacional',
    phone: '902 102 112',
    description: 'Teléfono de denuncias a la Policía Nacional (no urgencias). Para delitos menores o consultas.',
    category: 'legal',
    available24h: true,
    languages: ['Español'],
  },
  {
    id: 'guardia-civil-denuncias-902-222-222',
    name: 'Guardia Civil — Denuncias',
    phone: '902 222 222',
    description: 'Teléfono de denuncias a la Guardia Civil (no urgencias). Para delitos contra el medio ambiente, caza, pesca, carreteras.',
    category: 'legal',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'inspeccion-trabajo-900-100-333',
    name: 'Inspección de Trabajo',
    phone: '900 100 333',
    description: 'Denuncias por incumplimiento laboral: salarios por debajo del SMI, falta de alta en SS, condiciones abusivas. Gratuito y confidencial.',
    category: 'legal',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'sepe-901-119-999',
    name: 'SEPE — Información de Empleo',
    phone: '901 119 999',
    description: 'Información sobre prestaciones por desempleo, demandas de empleo, cursos de formación, RAI, subsidios.',
    category: 'general',
    available24h: false,
    languages: ['Español'],
  },
  // Violencia de género y mujeres
  {
    id: 'violencia-genero-016',
    name: '016 — Violencia de género',
    phone: '016',
    description: 'Información y asesoramiento jurídico para víctimas de violencia de género. Gratuito, no deja rastro en la factura. Atiende en 51 idiomas.',
    category: 'women',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe', 'Chino', 'Rumano', 'Portugués', 'Polaco', 'Búlgaro', 'Ruso', 'Alemán'],
  },
  {
    id: 'atenpro-900-22-22-92',
    name: 'ATENPRO',
    phone: '900 22 22 92',
    description: 'Servicio de teleasistencia para víctimas de violencia de género. Dispositivo móvil con botón de emergencia y geolocalización. Solicitar en servicios sociales.',
    category: 'women',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe', 'Chino', 'Rumano'],
  },
  {
    id: 'fundacion-mujeres-900-20-29-29',
    name: 'Fundación Mujeres',
    phone: '900 20 29 29',
    description: 'Atención telefónica a mujeres en situación de vulnerabilidad o violencia de género. Información sobre recursos.',
    category: 'women',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
  },
  {
    id: 'telefono-mujer-012-900-191-191',
    name: 'Teléfono de la Mujer (varias CCAA)',
    phone: '900 191 191',
    description: 'Atención a mujeres en distintas CCAA (Castilla y León, Comunidad Valenciana, etc.). Información jurídica, psicológica y laboral.',
    category: 'women',
    available24h: false,
    languages: ['Español'],
  },
  // Menores
  {
    id: 'menores-proteccion-116-111',
    name: '116 111 — Teléfono de ayuda a la infancia',
    phone: '116 111',
    description: 'Línea europea gratuita para menores en riesgo o personas que detectan situaciones de riesgo en un menor. Atiende 24h.',
    category: 'children',
    available24h: true,
    languages: ['Español', 'Inglés'],
  },
  {
    id: 'anar-900-202-010',
    name: 'Fundación ANAR',
    phone: '900 202 010',
    description: 'Teléfono de ayuda a niños y adolescentes en riesgo. Atiende 24h, gratuito y confidencial.',
    category: 'children',
    available24h: true,
    languages: ['Español', 'Inglés'],
  },
  {
    id: 'helpchildren-internacional-116-000',
    name: '116 000 — Menores desaparecidos',
    phone: '116 000',
    description: 'Línea europea para denunciar y buscar menores desaparecidos. Atiende 24h.',
    category: 'children',
    available24h: true,
    languages: ['Español', 'Inglés', 'Francés'],
  },
  // Inmigración y asilo
  {
    id: 'cear-91-530-69-69',
    name: 'CEAR — Comisión Española de Ayuda al Refugiado',
    phone: '91 530 69 69',
    description: 'Asesoramiento jurídico y social para solicitantes de asilo y refugiados. Atención presencial y telefónica en varias ciudades.',
    category: 'immigration',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
  },
  {
    id: 'accem-900-101-818',
    name: 'ACCEM',
    phone: '900 101 818',
    description: 'Atención a inmigrantes, refugiados y solicitantes de asilo. Servicios de acogida, formación y empleo.',
    category: 'immigration',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
  },
  {
    id: 'sos-racismo-900-502-502',
    name: 'SOS Racismo Madrid',
    phone: '900 502 502',
    description: 'Atención a víctimas de discriminación racial, xenofobia y racismo. Asesoría jurídica y social. Atiende en varias CCAA (Madrid, Cataluña, País Vasco, etc.).',
    category: 'immigration',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe', 'Rumano'],
  },
  {
    id: 'defensor-pueblo-900-202-099',
    name: 'Defensor del Pueblo',
    phone: '900 202 099',
    description: 'Defensa de los derechos ciudadanos frente a la Administración. Atiende quejas por actuaciones de la administración pública. Línea gratuita.',
    category: 'legal',
    available24h: false,
    languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
  },
  // Embajadas
  {
    id: 'embajada-marruecos-91-319-19-99',
    name: 'Embajada de Marruecos en España',
    phone: '91 319 19 99',
    description: 'Atención consular para ciudadanos marroquíes. Pasaportes, registro civil, notaría, visados. Horario de atención: 9:00-15:00.',
    category: 'immigration',
    available24h: false,
    languages: ['Árabe', 'Español', 'Francés'],
  },
  {
    id: 'embajada-rumania-91-411-31-31',
    name: 'Embajada de Rumanía en España',
    phone: '91 411 31 31',
    description: 'Atención consular para ciudadanos rumanos. Pasaportes, registro civil, notaría.',
    category: 'immigration',
    available24h: false,
    languages: ['Rumano', 'Español', 'Inglés'],
  },
  {
    id: 'embajada-colombia-91-748-31-00',
    name: 'Embajada de Colombia en España',
    phone: '91 748 31 00',
    description: 'Atención consular para ciudadanos colombianos. Pasaportes, registro civil, notaría. Emergencias consulares: 91 319 95 95.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-ecuador-91-353-20-80',
    name: 'Embajada de Ecuador en España',
    phone: '91 353 20 80',
    description: 'Atención consular para ciudadanos ecuatorianos. Pasaportes, registro civil, notaría. Hay varios consulados en otras ciudades (Madrid, Barcelona, Murcia, etc.).',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-china-91-519-42-42',
    name: 'Embajada de China en España',
    phone: '91 519 42 42',
    description: 'Atención consular para ciudadanos chinos. Visados, pasaportes, registro civil.',
    category: 'immigration',
    available24h: false,
    languages: ['Chino', 'Español', 'Inglés'],
  },
  {
    id: 'embajada-bolivia-91-543-41-27',
    name: 'Embajada de Bolivia en España',
    phone: '91 543 41 27',
    description: 'Atención consular para ciudadanos bolivianos. Pasaportes, registro civil, notaría.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-venezuela-91-457-71-00',
    name: 'Embajada de Venezuela en España',
    phone: '91 457 71 00',
    description: 'Atención consular para ciudadanos venezolanos. Pasaportes, registro civil, notaría. Varios consulados en otras ciudades.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-argentina-91-442-22-50',
    name: 'Embajada de Argentina en España',
    phone: '91 442 22 50',
    description: 'Atención consular para ciudadanos argentinos. Pasaportes, registro civil, notaría.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-peru-91-309-23-00',
    name: 'Embajada de Perú en España',
    phone: '91 309 23 00',
    description: 'Atención consular para ciudadanos peruanos. Pasaportes, registro civil, notaría. Consulados en Madrid, Barcelona, Bilbao, etc.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'embajada-rep-dominicana-91-572-02-04',
    name: 'Embajada de República Dominicana en España',
    phone: '91 572 02 04',
    description: 'Atención consular para ciudadanos dominicanos. Pasaportes, registro civil, notaría.',
    category: 'immigration',
    available24h: false,
    languages: ['Español'],
  },
  // Asistencia jurídica
  {
    id: 'asistencia-juridica-902-43-43-43',
    name: 'Asistencia Jurídica Gratuita',
    phone: '902 43 43 43',
    description: 'Información sobre derecho a justicia gratuita y abogado de oficio. Atiende en cada CCAA (Cataluña, Madrid, País Vasco, etc.).',
    category: 'legal',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'consumo-900-000-199',
    name: 'Teléfono único de reclamaciones',
    phone: '900 000 199',
    description: 'Información y asesoramiento al consumidor. Reclamaciones por productos, servicios, fraudes comerciales.',
    category: 'general',
    available24h: false,
    languages: ['Español'],
  },
  {
    id: 'ciberacoso-900-116-117',
    name: '900 116 117 — Ciberacoso y grooming',
    phone: '900 116 117',
    description: 'Línea de ayuda contra el acoso a través de internet y redes sociales. Atiende a menores y familias. 24h, gratuito.',
    category: 'children',
    available24h: true,
    languages: ['Español', 'Inglés'],
  },
  {
    id: 'mayores-013-330-00-00',
    name: 'Servicio de ayuda a mayores',
    phone: '900 202 099',
    description: 'Información y recursos para personas mayores y dependientes. Atención también del Defensor del Pueblo.',
    category: 'general',
    available24h: false,
    languages: ['Español'],
  },
];

// Verificación al cargar el módulo
if (typeof console !== 'undefined') {
  console.log('Rights articles:', RIGHTS_ARTICLES.length, 'Contacts:', EMERGENCY_CONTACTS.length);
}
