import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = join(root, 'public', 'one-page-guides');
const manifestPath = join(outputDir, 'manifest.json');

const guides = [
  {
    id: 'office', name: 'Office', eyebrow: 'Trabajo y documentos', accent: '#b94724', tint: '#f7e9df',
    promise: 'Crea, calcula y presenta con una rutina clara.',
    workflow: ['Define el resultado final.', 'Usa una plantilla simple.', 'Revisa datos y ortografía.', 'Exporta una copia en PDF.'],
    blocks: [
      ['Word', 'Usa estilos de título, listas y tablas. Revisa antes de exportar.'],
      ['Excel', 'Una fila por registro, encabezados claros, filtros y fórmulas comprobadas.'],
      ['PowerPoint', 'Una idea por diapositiva, contraste alto y texto breve.'],
      ['Outlook', 'Asunto concreto, petición visible, fecha y archivo con nombre útil.'],
    ],
    template: 'Necesito crear [documento]. Público: [persona]. Debe incluir: [3 puntos]. Formato final: [DOCX/XLSX/PPTX/PDF].',
    checks: ['Nombre de archivo claro', 'Datos revisados', 'Accesible al leer', 'PDF final abierto'],
  },
  {
    id: 'whatsapp', name: 'WhatsApp', eyebrow: 'Comunicación segura', accent: '#157a55', tint: '#e1f3ea',
    promise: 'Comunica, comparte y organiza sin exponer información innecesaria.',
    workflow: ['Confirma destinatario.', 'Escribe una petición concreta.', 'Revisa archivo y privacidad.', 'Guarda solo lo necesario.'],
    blocks: [
      ['Mensaje claro', 'Saludo, contexto breve, petición, fecha y cierre.'],
      ['Documentos', 'Comprueba destinatario y contenido antes de enviar.'],
      ['Grupos', 'Limita datos personales y evita reenviar cadenas sin fuente.'],
      ['Seguridad', 'Activa verificación en dos pasos y desconfía de códigos solicitados.'],
    ],
    template: 'Hola, soy [nombre]. Te escribo por [motivo]. Necesito [acción] antes de [fecha]. Adjunto [archivo]. Gracias.',
    checks: ['Numero verificado', 'Sin datos innecesarios', 'Archivo correcto', 'Enlace comprobado'],
  },
  {
    id: 'gemini', name: 'Gemini', eyebrow: 'Asistente de IA', accent: '#1769c2', tint: '#e3effc',
    promise: 'Convierte una necesidad en una respuesta verificable y reutilizable.',
    workflow: ['Da contexto suficiente.', 'Pide un resultado concreto.', 'Define limites y formato.', 'Comprueba cada dato importante.'],
    blocks: [
      ['Preparar', 'Quita nombres, documentos y datos sensibles.'],
      ['Pedir', 'Incluye objetivo, público, tono, extensión y formato.'],
      ['Comparar', 'Solicita alternativas y criterios, no una sola respuesta.'],
      ['Verificar', 'Abre fuentes oficiales y confirma fecha y jurisdicción.'],
    ],
    template: 'Contexto: [situación]. Objetivo: [resultado]. Datos permitidos: [datos]. Límites: [no inventar/no decidir]. Formato: [lista/tabla/borrador].',
    checks: ['Sin PII', 'Objetivo concreto', 'Fuentes abiertas', 'Revision humana'],
  },
  {
    id: 'copilot', name: 'Copilot', eyebrow: 'Asistente Microsoft', accent: '#0c6675', tint: '#def1f3',
    promise: 'Acelera una tarea de trabajo conservando control sobre datos y resultado.',
    workflow: ['Elige la aplicación adecuada.', 'Describe la tarea y el público.', 'Pide estructura antes del acabado.', 'Revisa permisos, cifras y enlaces.'],
    blocks: [
      ['Documento', 'Solicita esquema, borrador y revision por etapas.'],
      ['Tabla', 'Explica columnas, unidades y regla de calculo.'],
      ['Presentación', 'Define audiencia, duración y mensaje principal.'],
      ['Licencia', 'Comprueba capacidades y tratamiento de datos de tu cuenta.'],
    ],
    template: 'En [aplicación], crea [resultado] para [público] usando solo [datos autorizados]. Incluye [secciones]. Marca cualquier dato no confirmado.',
    checks: ['Cuenta correcta', 'Datos autorizados', 'Calculos revisados', 'Salida exportada'],
  },
  {
    id: 'deepseek', name: 'DeepSeek', eyebrow: 'Razonamiento y código', accent: '#3347a8', tint: '#e8eaff',
    promise: 'Descompone problemas y revisa código sin delegar decisiones críticas.',
    workflow: ['Explica el problema real.', 'Incluye ejemplo de entrada y salida.', 'Pide supuestos y pruebas.', 'Ejecuta y revisa en entorno seguro.'],
    blocks: [
      ['Problema', 'Separa hechos, restricciones y resultado esperado.'],
      ['Código', 'Pide solución completa, errores controlados y pruebas.'],
      ['Revisión', 'Solicita riesgos, casos límite y alternativa sencilla.'],
      ['Privacidad', 'Comprueba la política del servicio o modelo utilizado.'],
    ],
    template: 'Problema: [descripción]. Entrada: [ejemplo]. Salida esperada: [ejemplo]. Restricciones: [entorno/seguridad]. Entrega: solución, pruebas y riesgos.',
    checks: ['Supuestos visibles', 'Sin secretos', 'Pruebas ejecutadas', 'Resultado reproducible'],
  },
  {
    id: 'qwen', name: 'Qwen', eyebrow: 'IA multilingüe', accent: '#7b3aa4', tint: '#f1e5f8',
    promise: 'Trabaja con texto y tareas multilingües manteniendo significado y control.',
    workflow: ['Declara idioma origen y destino.', 'Explica audiencia y contexto.', 'Protege nombres y datos privados.', 'Revisa tono, términos y hechos.'],
    blocks: [
      ['Idioma', 'Usa etiquetas claras y conserva nombres propios sin inventar.'],
      ['Traducción', 'Pide glosario, tono y notas sobre ambigüedades.'],
      ['Contenido', 'Solicita versión simple antes de ampliar.'],
      ['Proveedor', 'Comprueba variante, alojamiento y política de datos.'],
    ],
    template: 'Idioma origen: [idioma]. Idioma final: [idioma]. Audiencia: [persona]. Texto/tarea: [contenido]. Conserva [términos] y señala ambigüedades.',
    checks: ['Idiomas definidos', 'Terminos revisados', 'Sin PII', 'Comparacion final'],
  },
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const css = `
@page{size:A4 portrait;margin:8mm}
:root{font-family:Aptos,"Trebuchet MS",Verdana,sans-serif;color:#17202a;background:#dedbd3}
*{box-sizing:border-box}body{margin:0;padding:24px;background:radial-gradient(circle at top,#f7f4ec,#d8d5cd);line-height:1.35}
.sheet{--accent:#333;--tint:#eee;width:min(194mm,100%);min-height:277mm;margin:auto;padding:12mm;background:#fff;border-top:7mm solid var(--accent);box-shadow:0 24px 70px #2224;position:relative;overflow:hidden}
.sheet:after{content:"";position:absolute;width:110mm;height:110mm;border:1px solid var(--accent);border-radius:50%;right:-65mm;top:-70mm;opacity:.2}
.top{display:flex;justify-content:space-between;gap:8mm;align-items:start}.eyebrow{margin:0 0 2mm;color:var(--accent);font-size:9pt;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
h1,h2{font-family:Georgia,"Times New Roman",serif;line-height:1.05}h1{font-size:34pt;margin:0}.promise{font-size:13pt;max-width:88mm;margin:3mm 0 0}.actions{display:flex;gap:2mm;position:relative;z-index:2}
button{border:1px solid var(--accent);border-radius:99px;background:#fff;color:var(--accent);font:700 9pt inherit;padding:2.2mm 4mm;cursor:pointer}button:focus-visible{outline:3px solid #111;outline-offset:2px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:8mm}.panel{border:1px solid #c8ced4;border-radius:4mm;padding:5mm;background:linear-gradient(145deg,#fff,var(--tint))}.panel h2{font-size:15pt;margin:0 0 3mm}
.workflow{counter-reset:step;list-style:none;margin:0;padding:0}.workflow li{counter-increment:step;display:grid;grid-template-columns:8mm 1fr;gap:2mm;margin:2.3mm 0;font-size:9.5pt}.workflow li:before{content:counter(step);display:grid;place-items:center;width:6mm;height:6mm;border-radius:50%;background:var(--accent);color:#fff;font-size:8pt;font-weight:800}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:3mm}.card{padding:3mm;border-left:1mm solid var(--accent);background:#fff}.card h3{font-size:10pt;margin:0 0 1mm;color:var(--accent)}.card p{font-size:8.7pt;margin:0}
.template{grid-column:1/-1;background:#17202a;color:#fff;border-radius:4mm;padding:5mm}.template h2{color:#fff}.editable{min-height:17mm;border:1px dashed #ffffff88;border-radius:2mm;padding:3mm;font:10pt/1.4 Consolas,"Courier New",monospace;background:#ffffff0c}.editable:focus{outline:2px solid #fff}
.checks{grid-column:1/-1;display:grid;grid-template-columns:repeat(4,1fr);gap:3mm}.check{display:flex;gap:2mm;align-items:flex-start;padding:3mm;border:1px solid #ccd2d8;border-radius:3mm;font-size:9pt}.check input{width:4.5mm;height:4.5mm;accent-color:var(--accent)}
.notes{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:5mm}.line{min-height:16mm;border-bottom:1px solid #8c969f;padding:2mm;font-size:9pt}.warning{grid-column:1/-1;margin:0;padding:3mm 4mm;border-left:1mm solid var(--accent);background:var(--tint);font-size:8.5pt}
footer{position:absolute;left:12mm;right:12mm;bottom:8mm;display:flex;justify-content:space-between;border-top:1px solid #ccd2d8;padding-top:2mm;font-size:7.5pt;color:#5d6872}
@media(max-width:720px){body{padding:0}.sheet{min-height:100vh;padding:8vw;border-top-width:5vw}.top,.grid{display:block}.actions{margin-top:5mm}.panel,.template,.checks,.notes{margin-top:4mm}.checks,.notes{display:grid;grid-template-columns:1fr 1fr}footer{position:static;margin-top:8mm}}
@media print{html,body{width:210mm;height:297mm;background:#fff}body{padding:0}.sheet{width:194mm;height:281mm;min-height:281mm;max-height:281mm;margin:0;padding:10mm 11mm;border-top-width:5mm;box-shadow:none}.actions{display:none}.grid{gap:4mm;margin-top:6mm}.panel{padding:4mm}.template{padding:4mm}.editable{min-height:14mm}.line{min-height:13mm}footer{left:11mm;right:11mm;bottom:6mm}}
`;

const javascript = `
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
document.querySelector('[data-reset]')?.addEventListener('click',()=>{document.querySelectorAll('input').forEach(item=>item.checked=false);document.querySelectorAll('[contenteditable]').forEach(item=>item.textContent='');});
`;

function page(guide) {
  const workflow = guide.workflow.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const blocks = guide.blocks.map(([title, text]) => `<article class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('');
  const checks = guide.checks.map((item) => `<label class="check"><input type="checkbox"> <span>${escapeHtml(item)}</span></label>`).join('');
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHtml(guide.name)} en una página | Manos Abiertas</title><meta name="description" content="Plantilla premium imprimible A4 de ${escapeHtml(guide.name)}."><link rel="stylesheet" href="styles.css"><style>:root{--accent:${guide.accent};--tint:${guide.tint}}</style></head>
<body><main class="sheet"><header class="top"><div><p class="eyebrow">${escapeHtml(guide.eyebrow)} · una página</p><h1>${escapeHtml(guide.name)}</h1><p class="promise">${escapeHtml(guide.promise)}</p></div><div class="actions"><button type="button" data-print>Imprimir A4</button><button type="button" data-reset>Limpiar</button></div></header>
<div class="grid"><section class="panel"><h2>Flujo rapido</h2><ol class="workflow">${workflow}</ol></section><section class="panel"><h2>Control esencial</h2><div class="cards">${blocks}</div></section>
<section class="template"><h2>Plantilla lista para usar</h2><div class="editable" contenteditable="true" role="textbox" aria-label="Plantilla editable">${escapeHtml(guide.template)}</div></section>
<section class="checks" aria-label="Lista de verificacion">${checks}</section><section class="notes"><div><strong>Mi tarea</strong><div class="line" contenteditable="true" role="textbox" aria-label="Mi tarea"></div></div><div><strong>Resultado y siguiente paso</strong><div class="line" contenteditable="true" role="textbox" aria-label="Resultado y siguiente paso"></div></div></section>
<p class="warning"><strong>Seguridad:</strong> no introduzcas contraseñas, documentos, datos médicos, bancarios o jurídicos sensibles. Verifica información importante en una fuente oficial y con una persona competente.</p></div><footer><span>Manos Abiertas · uso educativo y gratuito</span><span>MA-ONE-${guide.id.toUpperCase()} · 2026-08-12</span></footer></main><script src="app.js" defer></script></body></html>`;
}

function verify() {
  if (!existsSync(manifestPath)) throw new Error(`Missing manifest: ${manifestPath}`);
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const htmlFiles = readdirSync(outputDir).filter((name) => name.endsWith('.html'));
  if (manifest.count !== 6 || manifest.pages.length !== 6 || htmlFiles.length !== 6) throw new Error('Expected six one-page HTML guides');
  if (!readFileSync(join(outputDir, 'styles.css'), 'utf8').includes('@page{size:A4 portrait')) throw new Error('Missing A4 print rule');
  for (const item of manifest.pages) {
    const html = readFileSync(join(outputDir, item.path), 'utf8');
    if (!html.includes('class="sheet"') || !html.includes('data-print')) throw new Error(`${item.path}: invalid printable structure`);
  }
  console.log('verified 6 premium one-page A4 HTML guides');
}

if (process.argv.includes('--check')) {
  verify();
  process.exit(0);
}

await mkdir(outputDir, { recursive: true });
await Promise.all([
  writeFile(join(outputDir, 'styles.css'), css.trimStart()),
  writeFile(join(outputDir, 'app.js'), javascript.trimStart()),
  ...guides.map((guide) => writeFile(join(outputDir, `${guide.id}.html`), page(guide))),
]);
await writeFile(manifestPath, `${JSON.stringify({ generatedAt: '2026-08-12', count: guides.length, format: 'A4 portrait, maximum one printed page', pages: guides.map((guide) => ({ id: guide.id, name: guide.name, path: `${guide.id}.html` })) }, null, 2)}\n`);
verify();
