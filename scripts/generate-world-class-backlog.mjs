import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = join(root, 'docs', 'world-class');
const backlogPath = join(outputDir, 'improvements-3000.jsonl');
const summaryPath = join(outputDir, 'README.md');

const surfaces = [
  ['home', 'Inicio por necesidades', 'src/components/manos-abiertas/home-section.tsx', 'orientar a una accion util en menos de tres minutos', 'experience', 'P0'],
  ['onboarding', 'Onboarding', 'src/components/manos-abiertas/onboarding-wizard.tsx', 'identificar idioma, ciudad, urgencia y objetivo sin friccion', 'experience', 'P0'],
  ['route', 'Ruta personal', 'src/components/manos-abiertas/personal-route.tsx', 'convertir una necesidad en pasos claros y guardables', 'experience', 'P0'],
  ['resources', 'Buscador de recursos', 'src/components/manos-abiertas/resources-section.tsx', 'encontrar ayuda pertinente y verificable', 'data', 'P0'],
  ['map', 'Mapa de oficinas', 'src/components/manos-abiertas/office-map.tsx', 'localizar ayuda cercana con alternativa en lista', 'location', 'P0'],
  ['rights', 'Derechos y tramites', 'src/components/manos-abiertas/rights-section.tsx', 'explicar derechos y siguientes pasos con fuentes', 'content', 'P0'],
  ['contacts', 'Contactos esenciales', 'src/components/manos-abiertas/contacts-section.tsx', 'contactar ayuda urgente y competente', 'content', 'P0'],
  ['cv', 'Constructor de CV', 'src/components/manos-abiertas/cv-section.tsx', 'crear un CV util sin exponer datos personales', 'employment', 'P1'],
  ['courses', 'Biblioteca de cursos', 'src/components/manos-abiertas/courses-library-section.tsx', 'elegir y completar aprendizaje orientado a resultados', 'learning', 'P1'],
  ['ai-course', 'Academia de IA', 'src/components/manos-abiertas/learn-ai-section.tsx', 'aprender IA de forma segura y aplicable', 'learning', 'P1'],
  ['office-course', 'Academia Office', 'src/components/manos-abiertas/office-section.tsx', 'adquirir competencias ofimaticas para empleo', 'learning', 'P1'],
  ['digital-basics', 'Alfabetizacion digital', 'src/components/manos-abiertas/level0-academy.tsx', 'resolver tareas digitales basicas con autonomia', 'learning', 'P0'],
  ['assistant', 'Asistente contextual', 'src/components/manos-abiertas/ai-assistant.tsx', 'responder dentro de limites seguros y verificables', 'ai', 'P0'],
  ['community', 'Comunidad', 'src/components/manos-abiertas/community-section.tsx', 'conectar personas sin aumentar riesgos de abuso', 'community', 'P1'],
  ['events', 'Eventos', 'src/components/manos-abiertas/events-section.tsx', 'descubrir actividades vigentes y accesibles', 'community', 'P1'],
  ['tools', 'Herramientas practicas', 'src/components/manos-abiertas/tools-section.tsx', 'completar tareas administrativas frecuentes', 'experience', 'P1'],
  ['documents', 'Plantillas documentales', 'src/components/manos-abiertas/document-templates.tsx', 'producir documentos claros y editables', 'content', 'P1'],
  ['accessibility', 'Panel de accesibilidad', 'src/components/manos-abiertas/accessibility-panel.tsx', 'adaptar lectura e interaccion a necesidades diversas', 'accessibility', 'P0'],
  ['language', 'Idioma y localizacion', 'src/components/manos-abiertas/locale-provider.tsx', 'mantener una experiencia coherente en cada idioma', 'localization', 'P0'],
  ['navigation', 'Navegacion', 'src/components/manos-abiertas/nav-bar.tsx', 'moverse por el producto sin perder contexto', 'experience', 'P1'],
  ['pwa', 'PWA y estado offline', 'src/components/manos-abiertas/pwa-status.tsx', 'conservar utilidad con red lenta o ausente', 'platform', 'P0'],
  ['chat-api', 'API de chat', 'src/app/api/chat/route.ts', 'entregar ayuda segura, limitada y resiliente', 'api', 'P0'],
  ['cv-api', 'APIs de empleo', 'src/app/api/cv', 'procesar CV y cartas con privacidad y errores controlados', 'api', 'P0'],
  ['community-api', 'API de comunidad', 'src/app/api/community/route.ts', 'gestionar contenido comunitario con moderacion', 'api', 'P0'],
  ['database', 'Persistencia', 'prisma/schema.prisma', 'guardar solo datos necesarios con ciclo de vida definido', 'platform', 'P0'],
  ['seo', 'SEO y descubrimiento', 'src/app/sitemap.ts', 'hacer encontrable contenido publico vigente', 'platform', 'P1'],
  ['design', 'Sistema visual', 'src/app/globals.css', 'ofrecer jerarquia clara y consistente en movil', 'design', 'P1'],
  ['resource-data', 'Datos de recursos', 'src/data/resources.ts', 'mantener recursos trazables, vigentes y geolocalizables', 'data', 'P0'],
  ['rights-data', 'Datos juridicos', 'src/data/rights-guide.ts', 'mantener informacion legal fechada y atribuida', 'data', 'P0'],
  ['course-data', 'Contenido educativo', 'src/data/ai-courses.ts', 'mantener cursos completos, inclusivos y evaluables', 'learning', 'P1'],
].map(([id, name, path, outcome, layer, basePriority]) => ({ id, name, path, outcome, layer, basePriority }));

const contexts = [
  ['first-72h', 'persona en sus primeras 72 horas', 'necesita decisiones inmediatas con minimo contexto'],
  ['low-literacy', 'persona con baja alfabetizacion digital', 'necesita lenguaje simple, guia visible y tolerancia a errores'],
  ['screen-reader', 'persona usuaria de lector de pantalla', 'necesita semantica, foco y anuncios comprensibles'],
  ['motor-disability', 'persona con movilidad reducida', 'necesita objetivos grandes y operacion por teclado o voz'],
  ['limited-connectivity', 'persona con datos limitados o sin conexion', 'necesita poco peso, cache y recuperacion'],
  ['non-spanish', 'persona que aun no domina espanol', 'necesita traduccion completa y contexto cultural'],
  ['urgent-rights', 'persona ante una urgencia legal o de proteccion', 'necesita fuentes oficiales, contacto y limites claros'],
  ['job-seeker', 'persona buscando empleo', 'necesita convertir capacidades en acciones y documentos'],
  ['learner', 'persona siguiendo un curso', 'necesita continuidad, practica y evidencia de progreso'],
  ['support-worker', 'profesional u ONG de apoyo', 'necesita filtrar, verificar y compartir informacion'],
].map(([id, name, need]) => ({ id, name, need }));

const lenses = [
  ['utility', 'utilidad inmediata', 'reducir pasos y ambiguedad', 'La tarea principal se completa en una prueba moderada en menos de 3 minutos y sin ayuda externa.', 'Prueba de tarea cronometrada documentada'],
  ['accessibility', 'accesibilidad', 'garantizar operacion perceptible y por teclado', 'axe no informa incidencias critical/serious; foco, nombre accesible y orden de encabezados pasan revision.', 'npm run lint y auditoria axe de la ruta'],
  ['i18n', 'internacionalizacion', 'eliminar texto sin localizar y conservar significado', 'No hay claves ausentes ni texto funcional incrustado; el layout resiste expansion de texto del 30%.', 'Chequeo de claves y captura en idioma prioritario'],
  ['performance', 'rendimiento movil', 'reducir JavaScript, transferencia y trabajo de render', 'En movil de referencia: LCP <= 2.5 s, INP <= 200 ms y CLS <= 0.1 en el percentil acordado.', 'Lighthouse o Web Vitals registrado'],
  ['privacy', 'privacidad y seguridad', 'minimizar datos y cerrar abuso previsible', 'No se persiste PII sin consentimiento; entradas tienen limite y validacion; el caso de abuso queda probado.', 'Revision de flujo de datos y prueba negativa automatizada'],
  ['resilience', 'resiliencia y offline', 'mantener un fallback util y recuperable', 'La funcion falla de forma explicita, conserva trabajo local y ofrece alternativa util sin conexion.', 'Prueba offline y de error de proveedor'],
  ['trust', 'confianza de datos', 'mostrar procedencia, vigencia y alcance', 'Cada afirmacion operativa muestra fuente, fecha de verificacion, cobertura y estado de caducidad.', 'Validador de metadatos de contenido'],
  ['observability', 'observabilidad', 'registrar exito y fallo sin PII', 'Existe evento de inicio, resultado y error con contexto tecnico suficiente y sin datos sensibles.', 'Inspeccion de eventos y prueba de redaccion'],
  ['testing', 'pruebas', 'automatizar el camino feliz y el fallo critico', 'Una prueba estable cubre el resultado principal y al menos un limite o error relevante.', 'Suite automatizada con salida verde'],
  ['maintainability', 'mantenibilidad', 'reducir acoplamiento y documentar responsabilidad', 'Contrato tipado, propietario funcional y dependencia de datos quedan explicitos; no se duplica logica.', 'npx tsc --noEmit y revision de duplicacion'],
].map(([id, name, action, acceptance, evidence]) => ({ id, name, action, acceptance, evidence }));

function priority(surface, context, lens) {
  if (surface.basePriority === 'P0' && ['utility', 'privacy', 'trust', 'resilience'].includes(lens.id)) return 'P0';
  if (context.id === 'urgent-rights' && ['utility', 'accessibility', 'privacy', 'trust'].includes(lens.id)) return 'P0';
  if (surface.basePriority === 'P0' || ['accessibility', 'testing'].includes(lens.id)) return 'P1';
  return 'P2';
}

function buildItems() {
  const items = [];
  for (const surface of surfaces) {
    for (const context of contexts) {
      for (const lens of lenses) {
        const sequence = items.length + 1;
        items.push({
          id: `MA-${String(sequence).padStart(4, '0')}`,
          status: 'proposed',
          priority: priority(surface, context, lens),
          surface: surface.id,
          surfaceName: surface.name,
          path: surface.path,
          layer: surface.layer,
          userContext: context.id,
          qualityLens: lens.id,
          title: `${surface.name}: ${lens.name} para ${context.name}`,
          improvement: `${lens.action} para que ${surface.outcome}; ${context.need}.`,
          acceptance: lens.acceptance,
          evidence: lens.evidence,
          source: 'Manos Abiertas coverage matrix 30 surfaces x 10 contexts x 10 quality lenses',
        });
      }
    }
  }
  return items;
}

function validate(items) {
  const errors = [];
  if (items.length !== 3000) errors.push(`expected 3000 items, found ${items.length}`);
  if (new Set(items.map((item) => item.id)).size !== items.length) errors.push('duplicate IDs');
  if (new Set(items.map((item) => item.title)).size !== items.length) errors.push('duplicate titles');
  for (const surface of surfaces) {
    if (!existsSync(join(root, surface.path))) errors.push(`missing project path: ${surface.path}`);
  }
  return errors;
}

function summary(items) {
  const byPriority = Object.groupBy(items, (item) => item.priority);
  const top = items.filter((item) => item.priority === 'P0').slice(0, 50);
  const rows = top.map((item) => `| ${item.id} | ${item.surfaceName} | ${item.qualityLens} | ${item.userContext} | ${item.path} |`).join('\n');
  return `# Manos Abiertas: matriz world-class\n\n` +
    `Generado: 2026-08-11\n\n` +
    `## Alcance verificable\n\n` +
    `- 3.000 casos de cobertura unicos: 30 superficies reales x 10 contextos de usuario x 10 lentes de calidad.\n` +
    `- Limite: son 300 cambios tecnicos evaluados en 10 contextos, no 3.000 implementaciones independientes.\n` +
    `- P0: ${byPriority.P0?.length ?? 0}\n` +
    `- P1: ${byPriority.P1?.length ?? 0}\n` +
    `- P2: ${byPriority.P2?.length ?? 0}\n` +
    `- Fuente completa: \`improvements-3000.jsonl\`.\n` +
    `- Estado inicial: \`proposed\`. Ningun caso cuenta como aplicado hasta adjuntar evidencia.\n\n` +
    `## Uso\n\n` +
    `1. Seleccionar P0 por superficie y dependencia.\n` +
    `2. Cambiar a \`in-progress\` solo al iniciar implementacion.\n` +
    `3. Cambiar a \`verified\` solo con la evidencia indicada.\n` +
    `4. Regenerar con \`npm run strategy:generate\`.\n` +
    `5. Validar con \`npm run strategy:verify\`.\n\n` +
    `## Primeros 50 P0\n\n` +
    `| ID | Superficie | Lente | Contexto | Archivo |\n|---|---|---|---|---|\n${rows}\n`;
}

const items = buildItems();
const errors = validate(items);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

if (process.argv.includes('--check')) {
  if (!existsSync(backlogPath)) {
    console.error(`missing generated backlog: ${backlogPath}`);
    process.exit(1);
  }
  const saved = readFileSync(backlogPath, 'utf8').trim().split('\n').map((line) => JSON.parse(line));
  const savedErrors = validate(saved);
  if (savedErrors.length || JSON.stringify(saved) !== JSON.stringify(items)) {
    console.error([...savedErrors, 'generated backlog is stale'].join('\n'));
    process.exit(1);
  }
  console.log(`verified ${saved.length} unique coverage cases across ${surfaces.length} project surfaces`);
  process.exit(0);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(backlogPath, `${items.map((item) => JSON.stringify(item)).join('\n')}\n`);
writeFileSync(summaryPath, summary(items));
console.log(`generated ${items.length} coverage cases in ${backlogPath}`);
