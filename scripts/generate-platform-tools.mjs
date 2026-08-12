import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = resolve(root, 'public');
const outputDir = resolve(publicRoot, 'tool-guides');
const manifestPath = join(outputDir, 'manifest.json');

if (!outputDir.startsWith(`${publicRoot}${sep}`)) throw new Error('Unsafe output directory');

const contexts = [
  ['first-use', 'primer uso'],
  ['home-device', 'equipo personal'],
  ['work-device', 'equipo de trabajo'],
  ['shared-device', 'equipo compartido'],
  ['low-storage', 'poco espacio'],
  ['slow-network', 'red lenta'],
  ['offline', 'trabajo sin conexion'],
  ['accessibility', 'necesidades de accesibilidad'],
  ['privacy', 'prioridad de privacidad'],
  ['recovery', 'recuperacion tras un fallo'],
];

const objectives = [
  ['inspect', 'inspeccionar', 'Revisa el estado actual antes de cambiar ajustes.'],
  ['configure', 'configurar', 'Ajusta una opcion y registra el valor anterior.'],
  ['diagnose', 'diagnosticar', 'Aisla una causa con una comprobacion cada vez.'],
  ['backup', 'preparar copia', 'Identifica datos importantes y confirma el destino.'],
  ['restore', 'preparar recuperacion', 'Verifica que existe una copia legible antes de restaurar.'],
  ['secure', 'reforzar seguridad', 'Reduce permisos y conserva solo accesos necesarios.'],
  ['automate', 'preparar automatizacion', 'Documenta entrada, salida y condicion de parada.'],
  ['document', 'documentar', 'Guarda version, fecha, resultado y siguiente paso.'],
  ['optimize', 'optimizar', 'Mide antes y despues con el mismo indicador.'],
  ['verify', 'verificar', 'Confirma el resultado con una segunda comprobacion.'],
];

const windows = [
  ['powershell', 'PowerShell', 'Consola y automatizacion', 'Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, OsBuildNumber'],
  ['explorer', 'Explorador de archivos', 'Archivos y carpetas', 'Get-ChildItem -Force | Select-Object Name, Length, LastWriteTime'],
  ['windows-update', 'Windows Update', 'Actualizaciones del sistema', 'Get-Service wuauserv | Select-Object Status, StartType'],
  ['defender', 'Microsoft Defender', 'Proteccion antimalware', 'Get-MpComputerStatus | Select-Object AntivirusEnabled, RealTimeProtectionEnabled'],
  ['task-manager', 'Administrador de tareas', 'Procesos y rendimiento', 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, CPU, WorkingSet'],
  ['storage', 'Almacenamiento', 'Espacio y archivos temporales', 'Get-PSDrive -PSProvider FileSystem | Select-Object Name, Used, Free'],
  ['network', 'Diagnostico de red', 'Conectividad y DNS', 'Test-NetConnection -ComputerName www.microsoft.com -Port 443'],
  ['devices', 'Administrador de dispositivos', 'Hardware y controladores', 'Get-PnpDevice | Where-Object Status -ne OK | Select-Object Status, Class, FriendlyName'],
  ['events', 'Visor de eventos', 'Registro de errores', 'Get-WinEvent -LogName System -MaxEvents 20 | Select-Object TimeCreated, Id, LevelDisplayName'],
  ['backup', 'Copia de seguridad', 'Proteccion de documentos', 'Get-FileHash -Algorithm SHA256 -Path .\\archivo-a-verificar'],
  ['bitlocker', 'BitLocker', 'Cifrado de unidades', 'Get-BitLockerVolume | Select-Object MountPoint, VolumeStatus, ProtectionStatus'],
  ['firewall', 'Firewall de Windows', 'Reglas de red', 'Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction'],
  ['services', 'Servicios', 'Servicios del sistema', 'Get-Service | Sort-Object Status, DisplayName | Select-Object Status, Name, DisplayName'],
  ['scheduled-tasks', 'Tareas programadas', 'Automatizaciones del sistema', 'Get-ScheduledTask | Select-Object TaskName, TaskPath, State'],
  ['winget', 'WinGet', 'Aplicaciones instaladas', 'winget list'],
  ['sfc', 'Comprobador de archivos', 'Integridad de Windows', 'sfc /verifyonly'],
  ['dism', 'DISM', 'Estado de la imagen de Windows', 'DISM.exe /Online /Cleanup-Image /CheckHealth'],
  ['remote-desktop', 'Escritorio remoto', 'Acceso remoto', 'Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue'],
  ['registry', 'Registro de Windows', 'Configuracion avanzada en lectura', 'Get-ItemProperty "HKLM:\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion" | Select-Object ProductName, DisplayVersion'],
  ['environment', 'Variables de entorno', 'Configuracion de procesos', 'Get-ChildItem Env: | Sort-Object Name'],
];

const android = [
  ['settings', 'Ajustes', 'Configuracion general', 'Abre Ajustes y usa el buscador interno.'],
  ['files', 'Archivos', 'Documentos y descargas', 'Abre Files y ordena por fecha o tamano.'],
  ['permissions', 'Permisos de aplicaciones', 'Camara, ubicacion y contactos', 'Ajustes > Privacidad > Gestor de permisos.'],
  ['storage', 'Almacenamiento', 'Espacio disponible', 'Ajustes > Almacenamiento.'],
  ['battery', 'Bateria', 'Consumo y ahorro', 'Ajustes > Bateria > Uso de bateria.'],
  ['network', 'Red movil y Wi-Fi', 'Conectividad', 'Ajustes > Red e Internet.'],
  ['hotspot', 'Punto de acceso', 'Compartir conexion', 'Ajustes > Red e Internet > Punto de acceso.'],
  ['backup', 'Copia de seguridad', 'Datos del dispositivo', 'Ajustes > Google > Copia de seguridad.'],
  ['accessibility', 'Accesibilidad', 'Lectura, audio e interaccion', 'Ajustes > Accesibilidad.'],
  ['notifications', 'Notificaciones', 'Interrupciones y privacidad', 'Ajustes > Notificaciones > Notificaciones de aplicaciones.'],
  ['play-protect', 'Play Protect', 'Revision de aplicaciones', 'Play Store > Perfil > Play Protect.'],
  ['wellbeing', 'Bienestar digital', 'Tiempo de uso', 'Ajustes > Bienestar digital y controles parentales.'],
  ['adb', 'ADB', 'Diagnostico desde ordenador', 'adb devices -l'],
  ['contacts', 'Exportar contactos', 'Copia de agenda', 'Contactos > Corregir y gestionar > Exportar a archivo.'],
  ['photos', 'Exportar fotos', 'Copia de imagenes', 'Conecta por USB y selecciona Transferencia de archivos.'],
];

const linux = [
  ['shell', 'Terminal', 'Consola y scripts', 'uname -a && cat /etc/os-release'],
  ['packages', 'Gestor de paquetes', 'Software instalado', 'command -v apt dnf pacman zypper | head -n 1'],
  ['files', 'Archivos', 'Navegacion y busqueda', 'find . -maxdepth 2 -type f -print | head -n 25'],
  ['permissions', 'Permisos', 'Propietarios y acceso', 'find . -maxdepth 1 -printf "%M %u %g %p\\n"'],
  ['services', 'systemd', 'Servicios del sistema', 'systemctl --failed --no-pager'],
  ['journal', 'Journal', 'Eventos y errores', 'journalctl -p warning -n 30 --no-pager'],
  ['network', 'Red', 'Interfaces y rutas', 'ip -brief address && ip route'],
  ['firewall', 'Firewall', 'Reglas de red', 'command -v ufw >/dev/null && sudo ufw status || sudo nft list ruleset'],
  ['disk', 'Discos', 'Espacio y montaje', 'lsblk -f && df -hT'],
  ['processes', 'Procesos', 'CPU y memoria', 'ps -eo pid,comm,%cpu,%mem --sort=-%cpu | head'],
  ['archives', 'Archivos comprimidos', 'Inspeccion de paquetes', 'tar -tf archivo.tar | head -n 25'],
  ['backup', 'Rsync', 'Copias incrementales', 'rsync --dry-run -avh origen/ destino/'],
  ['ssh', 'SSH', 'Acceso remoto', 'ssh -G servidor.example | head -n 25'],
  ['cron', 'Tareas programadas', 'Automatizacion', 'crontab -l 2>/dev/null || true'],
  ['logs', 'Registros', 'Diagnostico de aplicaciones', 'find /var/log -maxdepth 1 -type f -readable -print | head -n 25'],
];

const platforms = [
  ['windows', 'Windows', windows, '#0b62d6', '#e8f2ff'],
  ['android', 'Android', android, '#157347', '#eaf8ef'],
  ['linux', 'Linux', linux, '#b45309', '#fff4df'],
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function htmlPage({ id, platformId, platformName, tool, context, objective, accent, tint }) {
  const [toolId, toolName, category, command] = tool;
  const [contextId, contextName] = context;
  const [objectiveId, objectiveName, objectiveRule] = objective;
  const title = `${toolName}: ${objectiveName} para ${contextName}`;
  return `<!doctype html>
<html lang="es" data-guide-id="${id}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="${accent}">
  <title>${escapeHtml(title)} | Manos Abiertas</title>
  <meta name="description" content="Guia basica offline de ${escapeHtml(platformName)} para ${escapeHtml(objectiveName)} ${escapeHtml(toolName)}.">
  <link rel="stylesheet" href="../assets/styles.css">
  <style>:root{--accent:${accent};--tint:${tint}}</style>
</head>
<body>
  <a class="skip" href="#contenido">Saltar al contenido</a>
  <header class="masthead"><span>Manos Abiertas / Herramientas basicas</span><strong>${escapeHtml(platformName)}</strong></header>
  <main id="contenido" class="shell">
    <p class="eyebrow">${escapeHtml(category)} · ${escapeHtml(contextName)}</p>
    <h1>${escapeHtml(toolName)}</h1>
    <p class="lede">Objetivo: <strong>${escapeHtml(objectiveName)}</strong>. ${escapeHtml(objectiveRule)}</p>
    <section aria-labelledby="pasos">
      <h2 id="pasos">Ruta segura</h2>
      <ol class="checklist">
        <li><label><input type="checkbox"> Anota estado, version y problema observado.</label></li>
        <li><label><input type="checkbox"> Ejecuta primero la comprobacion sin cambios.</label></li>
        <li><label><input type="checkbox"> Guarda resultado y elimina datos personales antes de compartir.</label></li>
        <li><label><input type="checkbox"> Confirma que el objetivo se cumple y documenta como volver atras.</label></li>
      </ol>
    </section>
    <section class="command" aria-labelledby="comando">
      <h2 id="comando">Comprobacion basica</h2>
      <pre><code>${escapeHtml(command)}</code></pre>
      <button type="button" data-copy>Copiar comprobacion</button>
      <p class="status" role="status" aria-live="polite"></p>
    </section>
    <aside><strong>Limite:</strong> esta pagina ensena una comprobacion basica. Revisa documentacion oficial antes de cambiar seguridad, cifrado, permisos o datos.</aside>
    <footer><span>${id}</span><span>${platformId}/${toolId}/${objectiveId}/${contextId}</span></footer>
  </main>
  <script src="../assets/app.js" defer></script>
</body>
</html>`;
}

const css = `
:root{--ink:#12202f;--paper:#fbfaf6;--line:#cad3dc;font-family:"Trebuchet MS",Verdana,sans-serif}
*{box-sizing:border-box}body{margin:0;color:var(--ink);background:radial-gradient(circle at 85% 0,var(--tint),transparent 36rem),var(--paper);line-height:1.6}
.skip{position:absolute;left:-9999px}.skip:focus{left:1rem;top:1rem;background:#fff;padding:.75rem;z-index:2}
.masthead{display:flex;justify-content:space-between;gap:1rem;padding:1rem clamp(1rem,4vw,4rem);border-bottom:4px solid var(--accent);background:#fff}
.masthead strong,.eyebrow{color:var(--accent)}.shell{width:min(760px,calc(100% - 2rem));margin:clamp(2rem,8vw,6rem) auto}
h1,h2{font-family:Georgia,"Times New Roman",serif;line-height:1.1}h1{font-size:clamp(2.8rem,10vw,6rem);margin:.15em 0}.lede{font-size:clamp(1.1rem,3vw,1.4rem);max-width:60ch}
section,aside{margin:2rem 0;padding:clamp(1rem,4vw,2rem);border:1px solid var(--line);background:rgba(255,255,255,.92);box-shadow:8px 8px 0 var(--tint)}
.checklist{padding-left:1.5rem}.checklist li{margin:.75rem 0}.checklist label{cursor:pointer}.checklist input{width:1.2rem;height:1.2rem;accent-color:var(--accent)}
pre{overflow:auto;padding:1rem;border-left:5px solid var(--accent);background:#0e1822;color:#f4f7fa}button{border:0;border-radius:999px;padding:.8rem 1.2rem;background:var(--accent);color:#fff;font:inherit;font-weight:700;cursor:pointer}button:focus-visible{outline:4px solid #111;outline-offset:3px}
.status{min-height:1.5rem}aside{border-left:6px solid var(--accent)}footer{display:flex;justify-content:space-between;gap:1rem;border-top:1px solid var(--line);padding-top:1rem;font-size:.8rem;overflow-wrap:anywhere}
@media(max-width:520px){.masthead,footer{flex-direction:column}.shell{margin-top:2rem}}
@media(prefers-reduced-motion:no-preference){section,aside{animation:rise .35s ease-out both}@keyframes rise{from{opacity:0;transform:translateY(10px)}}}
@media print{button,.skip{display:none}body{background:#fff}section,aside{box-shadow:none}}
`;

const javascript = `
const guideId=document.documentElement.dataset.guideId;
const checks=[...document.querySelectorAll('input[type="checkbox"]')];
try{const saved=JSON.parse(localStorage.getItem(guideId)||'[]');checks.forEach((item,index)=>item.checked=Boolean(saved[index]));}catch{}
checks.forEach(item=>item.addEventListener('change',()=>{try{localStorage.setItem(guideId,JSON.stringify(checks.map(check=>check.checked)));}catch{}}));
document.querySelector('[data-copy]')?.addEventListener('click',async()=>{const status=document.querySelector('.status');try{await navigator.clipboard.writeText(document.querySelector('code').textContent);status.textContent='Comprobacion copiada.';}catch{status.textContent='Selecciona el texto y copialo manualmente.';}});
`;

function buildCatalog() {
  const catalog = [];
  let sequence = 0;
  for (const [platformId, platformName, tools, accent, tint] of platforms) {
    for (const tool of tools) {
      for (const context of contexts) {
        for (const objective of objectives) {
          sequence += 1;
          const id = `MA-TOOL-${String(sequence).padStart(4, '0')}`;
          const slug = `${id.toLowerCase()}-${tool[0]}-${objective[0]}-${context[0]}.html`;
          catalog.push({ id, platformId, platformName, tool, context, objective, accent, tint, slug });
        }
      }
    }
  }
  return catalog;
}

function verify() {
  if (!existsSync(manifestPath)) throw new Error(`Missing manifest: ${manifestPath}`);
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const htmlFiles = platforms.flatMap(([id]) => readdirSync(join(outputDir, id)).filter((name) => name.endsWith('.html')));
  if (manifest.count !== 5000 || manifest.pages.length !== 5000 || htmlFiles.length !== 5000) {
    throw new Error(`Invalid generated tools: count=${manifest.count}, pages=${manifest.pages.length}, html=${htmlFiles.length}`);
  }
  const counts = Object.fromEntries(platforms.map(([id]) => [id, manifest.pages.filter((page) => page.platform === id).length]));
  if (counts.windows !== 2000 || counts.android !== 1500 || counts.linux !== 1500) throw new Error(`Invalid platform counts: ${JSON.stringify(counts)}`);
  console.log(`verified 5000 HTML guides: Windows ${counts.windows}, Android ${counts.android}, Linux ${counts.linux}`);
}

if (process.argv.includes('--check')) {
  verify();
  process.exit(0);
}

if (existsSync(outputDir)) await rm(outputDir, { recursive: true, force: true });
await mkdir(join(outputDir, 'assets'), { recursive: true });
await Promise.all([
  writeFile(join(outputDir, 'assets', 'styles.css'), css.trimStart()),
  writeFile(join(outputDir, 'assets', 'app.js'), javascript.trimStart()),
]);

const catalog = buildCatalog();
await Promise.all(platforms.map(([id]) => mkdir(join(outputDir, id), { recursive: true })));
for (let index = 0; index < catalog.length; index += 250) {
  const batch = catalog.slice(index, index + 250);
  await Promise.all(batch.map((page) => writeFile(join(outputDir, page.platformId, page.slug), htmlPage(page))));
}

const manifest = {
  generatedAt: '2026-08-11',
  count: catalog.length,
  claimBoundary: 'Basic offline guides and safe inspection helpers, not replacements for operating-system tools.',
  pages: catalog.map((page) => ({
    id: page.id,
    platform: page.platformId,
    tool: page.tool[0],
    objective: page.objective[0],
    context: page.context[0],
    path: `${page.platformId}/${page.slug}`,
  })),
};
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
verify();
