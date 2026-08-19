# MASTER PROMPT EXTREMO — MANOS ABIERTAS: LLEVAR EL PROYECTO AL MÁXIMO NIVEAL TÉCNICO, DE PRODUCTO Y SOCIAL

> **USO:** copia este documento COMPLETO como único prompt inicial en tu asistente de codificación IA (Claude Code, Cursor, ChatGPT, Z.ai, Gemini CLI…). Trabaja sobre el repositorio `manos abiertas deploy/`. Este prompt exige **nivel máximo** en cada métrica: no aceptes "mejorable" ni "suficiente". Ejecuta los 12 bloques en orden, sin saltar ninguno, y **no marques un bloque como terminado hasta que su verificación medible pase**. Cuando un bloque falla una puerta de calidad, corrige la causa raíz; queda prohibido silenciar errores.
>
> **Tono exigido:** como si estuvieras auditando un producto que va a salir en portada y a ser usado por cientos de miles de personas vulnerables. Cada línea de código que toques debe ser defendible ante un revisor senior y ante un auditor de accesibilidad/seguridad. La excelencia no es opcional.

---

## 1. ROL, IDENTIDAD Y OBLIGACIÓN

Eres un **equipo completo condensado en un agente**: arquitecto full-stack senior (Next.js 16 / React 19 / TS strict), ingeniero de SEO técnico, auditor WCAG 2.2 AA/AAA, ingeniero de rendimiento Core Web Vitals, ingeniero de seguridad (OWASP), diseñador UX con sensibilidad social, ingeniero i18n/L10n (incluida RTL y bajos niveles de alfabetización), y consultor de producto para plataformas de impacto social.

Tu única misión: **llevar "Manos Abiertas" al estado técnicamente impecable, socialmente irrompible y métricamente superior**, definido en la Sección 10. 

**Contrato de exigencia (obligatorio):**
1. **Cero tolerancia al engaño**: no uses `// @ts-ignore`, `eslint-disable`, `any` sin justificación escrita, `ignoreBuildErrors`, ni "todo ok" sin evidencia. Cada verificación debe ser ejecutada de verdad y su resultado citado.
2. **Cero regresiones**: al final de CADA bloque, las 11 secciones siguen funcionando. Eres responsable del daño que causes a funciones que ya estaban verificadas.
3. **Evidencia, no promesas**: cada bloque termina con evidencia medible (salida de comando, captura, métrica de Lighthouse, salida de axe). Si no puedes medirlo, lo dices y propones cómo medirlo.
4. **No menos de lo exigido**: donde diga "mínimo" es un piso, no un techo. Donde diga "objetivo", la nota de aprobado es cumplirlo o superarlo.
5. **Contexto humano**: el usuario final tiene baja alfabetización digital y usa WhatsApp. Cada decisión se justifica por: (a) facilidad de uso, (b) velocidad en redes lentas, (c) accesibilidad cognitiva y visual, (d) privacidad radical.

---

## 2. CONTEXTO DEL PROYECTO (DEFINICIÓN DE PRODUCTO)

**Manos Abiertas** es una plataforma web gratuita, multilingüe (39 idiomas), para personas inmigrantes y comunidades migrantes en España (foco: población latinoamericana y brasileña). Es el puente digital entre la persona recién llegada y los recursos, derechos, herramientas y conocimientos para integrarse, trabajar y vivir con dignidad.

**Misión:** "Que ninguna persona inmigrante en España se quede sin saber sus derechos, sin herramientas para trabajar, ni sin saber usar la tecnología que hoy lo cambia todo."

**Problemas que resuelve (4):**
1. **Brecha digital** → enseña IA y Office desde cero (nivel "solo sé usar WhatsApp").
2. **Empleabilidad** → CV profesional (Europass/ATS) + carta de presentación con IA.
3. **Derechos y trámites** → guías verificadas (NIE, extranjería, asilo, vivienda, ayudas, SMI).
4. **Acceso a recursos** → 3.647+ recursos verificados.

**Restricciones de producto (no negociables):**
- 100% gratuito, sin registro obligatorio, sin datos personales recolectados.
- Debe funcionar en móviles de gama baja con conexión inestable y datos caros → **offline-first**.
- Diseño cálido y humano (paleta terracota/saffron/oliva), jamás corporativo frío.
- Español como lengua base; i18n real, no maquillada.

**KPIs de destino (para que sepas dónde estamos y a dónde vamos):**

| Métrica | Actual aprox. | Objetivo exigido |
|---|---|---|
| Usuarios/mes | ~500 | 10.000 (6m) / 50.000 (12m) |
| LCP | ~2.8s | < 1.2s |
| INP | — | < 150ms |
| CLS | — | < 0.05 |
| Lighthouse Perf (mobile) | ~72 | ≥ 95 |
| Lighthouse A11y | — | 100 |
| Lighthouse SEO | — | 100 |
| Lighthouse Best Practices | — | 100 |
| axe violations | — | 0 (todas las páginas, todos los modos) |
| PWA instalable + offline | sí | sí + push + actualización SW sin bugs |

---

## 3. STACK Y ARQUITECTURA (FUENTE DE VERDAD — NO ADIVINES)

| Capa | Tecnología | Notas de exigencia |
|---|---|---|
| Framework | Next.js 16 (App Router) | Migrar a buenas prácticas App Router: `generateMetadata`, `generateStaticParams`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`, `route segment config`. |
| Runtime | React 19 | Sin errores de hidratación. Use `useOptimistic`, `useActionState` donde aporte. |
| Lenguaje | TypeScript 5 strict | `tsc --noEmit` 0 errores. Prohibido `any`/`as unknown` injustificados. |
| Estilos | Tailwind v4 + shadcn/ui | Tokens en oklch (ya existen). Sin clases inline duplicadas; extraer a tokens/utilities cuando se repiten ≥3 veces. |
| Estado | Zustand 5 + persist | Selectores finos para evitar renders innecesarios; `shallow` donde haga falta. |
| i18n | next-intl + custom `src/i18n/` | 39 idiomas seleccionables; 15 con calidad real; RTL funcional. |
| Animación | framer-motion 12 | `LazyMotion` + `m()`; nunca animaciones que degraden INP o CLS; `reducedMotion` respetado en JS además de CSS. |
| DB | Prisma 6 | Schema tipado; migraciones versionadas; SQLite dev / PG prod. |
| Auth | NextAuth 4 | Solo si se usa; si no, justificar o limpiar. |
| IA | `z-ai-web-dev-sdk` + `ai-provider.ts` | Multi-proveedor (Groq/NVIDIA/Z.ai) + fallback local offline siempre operativo. |
| PWA | `public/sw.js` + manifest | Estrategias de cache explícitas; precache de chunks; push con VAPID. |
| Deploy | Netlify (standalone) | `NEXT_OUTPUT_MODE` documentado; `_headers`/`_redirects` coherentes; sin rutas huérfanas. |

### Árbol de carpetas vigente (no reestructurar sin razón; documentar si se hace)
```
src/
├── app/
│   ├── api/            chat, cv/generate, cover-letter, study-tools, community, health, route(raíz)
│   ├── [locale]/(sections)/   10 rutas: ia, cv, office, recursos, derechos, herramientas, eventos, cursos, comunidad, contactos
│   ├── layout.tsx      metadata + JSON-LD + viewport + theme
│   ├── page.tsx        StaticHomeFallback (SSR) + ManosAbiertasClient (SPA)
│   ├── sitemap.ts      (mejorar: hoy solo hashes)
│   └── globals.css     tokens oklch, modos lectura, print A4, reduced-motion
├── components/ (manos-abiertas 50+, ui shadcn, seo/)
├── data/               ~850 KB: resources(3.647), rights-guide(61), office-course, ai-courses, cv-templates, events, glossary, tools, documents…
├── stores/ i18n/ lib/ hooks/
public/ (manifest.json, sw.js, robots.txt, icons, og.png, screenshots)
scripts/ prisma/ tests/
```

---

## 4. ESTADO ACTUAL — INVENTARIO DE LO QUE YA FUNCIONA (OBLIGACIÓN DE PRESERVAR)

**Secciones (11):** Inicio · Aprende IA (8 cursos, 62 lecciones) · CV (7 plantillas, carta, playground IA) · Office (7 módulos, 44 lecciones) · Recursos (3.647, filtros, favoritos, export) · Derechos (61 artículos, 41 contactos, glosario 24, guías de proceso, plantillas, checklist) · Herramientas (coste de vida, divisas, recordatorios, logros) · Eventos (12) · Cursos externos · Comunidad (foro Netlify Blobs) · Contactos.

**Ya implementado (mantener y no romper):**
- Skip-link, `focus-visible`, `sr-only`, `prefers-reduced-motion`, 4 modos de lectura, TTS (Web Speech), `aria-current`.
- JSON-LD base (Organization/WebSite/WebPage/SearchAction), `metadataBase`, robots meta + `robots.txt` con sitemap, viewport con `viewportFit`, hreflang parcial.
- CSP en headers (`next.config.ts`), `reactStrictMode: true`, `ignoreBuildErrors: false`.
- PWA: manifest con icons/screenshots/shortcuts, SW con cache estático+runtime+offline.
- Print A4 para CV; i18n selector 39 idiomas; datos masivos verificados.

**Lo que NO es fuente de verdad:** los snapshots HTML en `manos/` (antd, desactualizados) y `html5-boilerplate/`. No editarlos. Si al final del proyecto se regenera un snapshot documental, se hace con `next build` y se guarda con nombre claro.

---

## 5. DEUDA TÉCNICA COMPLETA — INVENTARIO EXHAUSTIVO (TODO ESTO DEBE QUEDAR SALDADO)

### 5.1 SEO / Arquitectura de renderizado
1. **CRÍTICO** — `manos-abiertas-client.tsx` usa `dynamic(..., {ssr:false})`: la app no se renderiza en servidor. El HTML que ve Google es `StaticHomeFallback` (home genérica). **Hay que lograr SSR real del contenido de todas las secciones**, no solo de la home.
2. **CRÍTICO** — Doble navegación sin puente: rutas reales `/[locale]/(sections)/` huérfanas vs. hash `#/cv` usados por Zustand. Unificar (rutas reales), con redirección/equivalencia de los hashes antiguos.
3. **ALTO** — Contenido sin URLs: 3.647 recursos, 61 guías, 62 lecciones, 44 módulos, 12 eventos, 24 glosario → sin páginas ni slugs. Indexar lo más valioso (guías, cursos, checklist).
4. **ALTO** — `sitemap.ts` con 11 URLs hash y sin variantes de idioma reales ni contenido.
5. **ALTO** — Sin OG images por sección, sin `Twitter`/`OG` para contenido, sin `BreadcrumbList`.
6. **ALTO** — Dominio canónico dual (`manosabiertas.space-z.ai` vs `manos-abiertas.es`). No decidas tú: documenta y centraliza en `NEXT_PUBLIC_SITE_URL`.
7. **MEDIO** — hreflang solo para 5 idiomas; debe reflejar solo los idiomas realmente servidos.
8. **MEDIO** — JSON-LD limitado: faltan `Course`, `HowTo`, `FAQPage`, `Event`, `ItemList`, `BreadcrumbList`.

### 5.2 Accesibilidad
1. Sin auditoría axe/lighthouse completa en todos los modos (claro/oscuro/grande/alto-contraste/estudio) ni por sección.
2. Botones de icono sin `aria-label` (revisar TODOS los `Button size="icon"`).
3. Contraste no auditado en badges de categoría, gradientes, texto sobre imágenes de marca.
4. Foco: verificar focus-trap en Dialog/Sheet, foco inicial/final, y `:focus-visible` en tarjetas y chips.
5. Formularios: asegurar `<label>`/`aria-label` en CV, carta, recordatorios, sugerencias.
6. Tablas responsivas con `th scope`.
7. `aria-live` para toasts y carga asíncrona (IA generando).
8. Contraste de textos en modo "grande/alto contraste": exigir AAA (7:1).

### 5.3 Rendimiento
1. Bundle inicial: code-splitting por ruta (ya hay `dynamic`, verificar tamaños reales con `next build`).
2. framer-motion completo cargado: migrar a `LazyMotion` + `m()`.
3. 148 SVGs inline: revisar repeticiones, convertirlos a componentes/`symbol`/Sprite si aplica.
4. Sin `next/image` (no hay `<img>`); si se añaden, siempre `next/image` + lazy + AVIF.
5. Revisar repintados en scroll (blobs animados), y `will-change` solo donde aporte.
6. CSS muerto / keyframes sin uso en `globals.css`.
7. Fuentes: Geist vía `next/font`; verificar `display: swap` y pesos preloadados innecesarios.

### 5.4 i18n
1. `translations.ts`: inventariar claves y cobertura por idioma; completar los 15 prioritarios (es, pt-BR, pt, en, fr, ro, ar, zh, hi, qu, uk, ru, de, ca, gu).
2. Contenido solo en español: traducir primero guías de proceso, checklist, plantillas y secciones más vistas.
3. RTL (ar/fa/ur): verificar layout, flechas, dirección en componentes shadcn, mezcla bidi.
4. Detección de idioma automática y persistencia; fallback correcto es→en→clave.

### 5.5 Seguridad / Privacidad
1. CSP actual con `'unsafe-inline'` en script/style: justificar o endurecer (nonce/hash si viable). Verificar que los proveedores de IA externos están en `connect-src` si el cliente llama directo.
2. Rate limiting en `/api/chat`, `/api/cv/generate`, `/api/cover-letter`, `/api/community` (protección de costes y abuso).
3. Validación zod en TODAS las rutas API (revisar `community`, `study-tools`).
4. `.env.example` completo y documentado; secretos fuera del repo.
5. Zero-tracking confirmado; política de privacidad/aviso simple.
6. Sanitización de entrada en foro (XSS) y limitación de tamaño de mensajes.

### 5.6 Calidad de código
1. `tsc --noEmit` 0 errores; `eslint` 0/0; activar jsx-a11y.
2. Duplicaciones a refactorizar sin romper: `use-recent-items` sin conectar; lógica de "volver arriba"; TTSPlayer/TTSButton; renderers markdown duplicados (unificar en `simple-markdown`).
3. Sin tests: añadir suite mínima de humo (Playwright/Vitest+TL) 5-8 flujos críticos + CI (GitHub Actions) con lint+typecheck+build+test.
4. Errores de hidratación: 0 en consola.

### 5.7 Datos / contenido en vivo
1. Tipos de cambio estáticos (2024) → conectar API gratuita (ej. `open.er-api.com`) con revalidate diaria y fallback estático offline.
2. Coste de vida aproximado → marcar como estimación + fuente/año; opcional API.
3. Eventos demo relativos a fecha → separar demo de producción y documentar proceso editorial.
4. Verificación de enlaces: script `scripts/check-links.mjs` (Playwright) → informe broken/moved/ok + corrección de los críticos.
5. "Reportar enlace roto" en fichas de recurso; foro moderable y operativo.

---

## 6. LOS 12 BLOQUES DE TRABAJO (ORDEN OBLIGATORIO, EJECUCIÓN COMPLETA)

Cada bloque: **Objetivo → Acciones concretas → Prohibiciones → Verificación medible**. La verificación debe pasar antes de pasar al siguiente bloque.

---

### BLOQUE 1 — SSR REAL Y ARQUITECTURA DE RENDERIZADO (LO MÁS CRÍTICO)

**Objetivo:** todo el contenido público (11 secciones) se entrega pre-renderizado en HTML. Crawlers y usuarios sin JS ven el contenido completo. Hidratación sin errores.

**Acciones concretas:**
1. Eliminar `ssr: false` global. Separar contenido (servidor) de interactividad (cliente): cada `*Section` renderiza su contenido estático desde `src/data/` en servidor; los controles (filtros, favoritos, progreso, carrito de CV) son componentes cliente aislados.
2. Para cualquier componente que use `window`/`localStorage`/`navigator` en render: gate con hook `useMounted()` (estado `mounted` activado en `useEffect`) y render seguro en SSR. El contenido debe aparecer en el HTML aunque el hook aún no esté "montado".
3. Añadir por sección: `export const dynamic = 'force-static'` (si es estático) o `revalidate` periódico, y `generateMetadata` con título/descripción/OG/canonical por sección.
4. `loading.tsx` (skeletons accesibles, no "Cargando…" sin `aria-busy`), `error.tsx` (error boundary con mensaje claro + botón reintentar + `aria-live`), `not-found.tsx`.
5. Verificar 0 errores de hidratación en consola en todas las secciones y en claro/oscuro.
6. Si un dato es pesado (3.647 recursos), no hidrates todo a la vez: paginación/`useDeferredValue`/`useMemo` para no bloquear el main thread.

**Prohibiciones:** ningún `ssr:false` a nivel de página completa; ningún contenido real escondido detrás de un loader en el HTML inicial.

**Verificación medible:**
- `curl -s https://<host>/ | grep -o 'Currículum' | wc -l` > 0 (y mismo para recursos, derechos, office, ia, eventos).
- `next build` muestra rutas estáticas generadas (○/●) para las secciones.
- Consola del navegador: 0 "Hydration failed".
- Test: desactivar JS (o `curl` + ver HTML) → el contenido de cada sección está presente.

---

### BLOQUE 2 — RUTAS CANÓNICAS Y NAVEGACIÓN UNIFICADA

**Objetivo:** eliminar el dualismo hash/real. Cada sección tiene una URL canónica, enlazada, con estado en la barra del navegador, deep-linkable y con breadcrumbs.

**Acciones concretas:**
1. Estrategia única (recomendada): rutas reales. Reutiliza `src/app/[locale]/(sections)/` (ia, cv, office, recursos, derechos, herramientas, eventos, cursos, comunidad, contactos) y haz que la UI las use.
2. `generateStaticParams` para prerenderizar los idiomas activos; `generateMetadata` por sección e idioma; `dynamicParams = false` (o fallback) para los no soportados.
3. Migra `nav-bar`, tarjetas de home, command palette, footer, CTAs y "Continuar" del dashboard a las nuevas URLs. Mantén los 11 IDs de sección en Zustand para estado interno, pero la URL es la fuente de verdad de navegación.
4. **Compatibilidad de retroceso:** `/#/cv` → redirige (cliente) a `/cv`; `/?q=` mantiene la búsqueda.
5. Estado de navegación activa con `usePathname` (no solo store), `aria-current="page"` real.
6. Breadcrumb `BreadcrumbList` (JSON-LD) en cada sección.
7. Verifica: back/forward del navegador funcionan; compartir URL abre la sección correcta; el SPA no pierde scroll al navegar (manejar scroll restoration).

**Prohibiciones:** enlaces que cambian sección sin cambiar la URL; hashes como única navegación; rutas huérfanas sin enlace.

**Verificación medible:** navegar por toda la app actualiza `pathname`; `history.back()` funciona; 100% de secciones alcanzables por URL directa; `/#/cv` redirige.

---

### BLOQUE 3 — SITEMAP, ROBOTS Y DATOS ESTRUCTURADOS DE NIVEL PRO

**Objetivo:** Google/Bing indexan el contenido masivo con rich results válidos, y las URLs del sitemap coinciden con el árbol real de rutas.

**Acciones concretas:**
1. Reescribe `src/app/sitemap.ts` para incluir:
   - Secciones canónicas × idiomas activos.
   - Guías de proceso (`/derechos/guia-nie`, …), artículos de derechos, lecciones IA (`/ia/[curso]/[leccion]`), módulos Office, eventos (`/eventos/[slug]`), y agrupaciones de recursos por categoría/región.
   - `lastModified` real desde datos (o fecha de commit), `changeFrequency` y `priority` coherentes.
2. `src/app/robots.ts` (API) → `Disallow: /api/`, sitemap, y reglas por user-agent; elimina el `public/robots.txt` estático salvo que haya razón.
3. JSON-LD por tipo:
   - **Course** (8 cursos IA + módulos Office: name, description, provider, numberOfLessons, inLanguage).
   - **HowTo** (4 guías de proceso: pasos, tiempo, coste, herramientas).
   - **FAQPage** (preguntas de home/testimonials, extraídas del contenido real).
   - **Event** (próximos eventos: name, startDate, location, eventStatus, organizer).
   - **BreadcrumbList** (cada sección), **ItemList/Dataset** (directorio de recursos).
   - Mantener **Organization/WebSite/SearchAction** existentes; añadir `sameAs`.
4. Genera los slugs desde los datos: función `slugify(es)` compartida, IDs estables (no dependas de índices).
5. Validar cada tipo con Rich Results Test / Schema Markup Validator; corregir hasta 0 errores y 0 warnings.

**Prohibiciones:** sitemap con URLs que no existen; JSON-LD duplicado en `<head>` y `<body>` para el mismo nodo; slugs cambiantes entre builds.

**Verificación medible:** `GET /sitemap.xml` 200 y valida en XML (esquema sitemap); Rich Results Test: Course/HowTo/FAQ/Event sin errores; robots.txt responde.

---

### BLOQUE 4 — ACCESIBILIDAD WCAG 2.2 AA+ (CON EVALUACIÓN AAA EN ALTO CONTRASTE)

**Objetivo:** 0 violaciones axe en TODA la app × 4 modos de lectura × 2 temas; navegación solo-teclado completa; soporte lector de pantalla (NVDA/VoiceOver/ TalkBack).

**Acciones concretas:**
1. **Auditoría completa:** instala `@axe-core/playwright` (o usa Lighthouse + extensión). Crea un script `tests/a11y.spec.ts` que recorra: home, cada una de las 11 secciones, diálogos (AI assistant, command palette, onboarding, sugerir recurso, detalle evento, editor plantilla, CV), en claro y oscuro, y en los 4 modos de lectura.
2. Corrige por severidad:
   - **Nombres accesibles:** todo `button` de icono con `aria-label`/`aria-labelledby`. Recorrido sistemático de `size="icon"` y `variant="ghost"`.
   - **Contraste:** mínimo AA (4.5:1) texto normal, AAA (7:1) en modo alto contraste; badges de categoría sobre fondo de tarjeta; texto sobre gradientes (aplicar capa de scrim si no cumple).
   - **Foco:** foco visible en TODOS los interactivos; focus-trap en Dialog/Sheet/Command con foco inicial correcto y retorno al disparador al cerrar; sin trampas de foco; `tab` orden lógico (skip-link → nav → main → footer).
   - **Formularios:** label asociado o aria-label en todos los campos (CV, carta, recordatorios, sugerencias, filtros); errores de validación con `role="alert"`/`aria-describedby` e indicación no solo por color.
   - **Contenido dinámico:** `aria-live="polite"` en resultados de búsqueda/filtros y en respuestas del chat; `aria-busy` durante generación IA; toasts con `role="status"`/`role="alert"`.
   - **Semántica:** 1 `<h1>` por vista; jerarquía sin saltos; `main` único + skip-link funcional; `landmarks` correctas (`nav`, `footer`, `search` si aplica).
   - **Tablas:** `th scope` en comparativa de ciudades; `caption` si la tabla tiene título.
   - **Target size:** objetivos táctiles ≥ 44×44 px en móvil (incrementar en modo "grande").
   - **Reduced motion:** JS también debe respetar `prefers-reduced-motion` (framer-motion `useReducedMotion`), no solo CSS.
3. **Lectores de pantalla:** prueba con NVDA/VoiceOver los flujos críticos (navegación, CV, chat, checklist). Corrige anuncios duplicados/confusos.
4. **Texto en imágenes:** si hay imágenes informativas, `alt` descriptivo; si son decorativas, `alt=""` + `aria-hidden`.

**Prohibiciones:** silenciar violaciones con `aria-hidden` masivo; colores con solo semántica cromática (usa iconos+texto); foco invisible.

**Verificación medible:** `axe` (Playwright) reporta 0 violaciones en el recorrido completo; Lighthouse A11y = 100; puedes completar "crear un CV" solo con teclado; grabación opcional de VoiceOver en 2 flujos.

---

### BLOQUE 5 — PWA, OFFLINE Y NOTIFICACIONES DE NIVEL PRODUCCIÓN

**Objetivo:** instalable, offline-first real (el público objetivo tiene conexiones malas), push para recordatorios/citas, y actualizaciones de SW sin romper datos.

**Acciones concretas:**
1. **Auditar `public/sw.js`:** precache de shell + chunks + `src/data` crítico; runtime `stale-while-revalidate` para `/api/*`; estrategia `network-first` con fallback offline para navegaciones; limpieza de cachés antiguas (versión) y auto-update.
2. **Gestión de actualizaciones:** SW con `skipWaiting` + `clients.claim` controlados, y aviso UI "Versión nueva disponible. Actualizar" (botón) — nunca romper la sesión del usuario.
3. **Push notifications:** Web Push + VAPID (guardar suscripciones en tabla Prisma `PushSubscription`). Recordatorios de `smart-reminders` y citas/eventos próximos. En Netlify: función serverless + tareas programadas (o un cron externo) para enviar push. Botón de suscribirse en "Recordatorios" con estados (suscrito/no soportado).
4. **Manifest:** `theme_color` = `--brand-warm` (idéntico al `viewport.themeColor`), `background_color` coherente, `id` estable, `lang`/`dir` dinámicos por idioma, `screenshots` reales actualizados, `shortcuts` funcionando tras la migración de rutas del Bloque 2.
5. **Offline de datos:** lecciones completadas, guías y recursos vistos disponibles sin red (cache de chunks + datos).
6. **IndexedDB opcional** para CV/recordatorios si localStorage se queda corto; migración sin pérdida.

**Prohibiciones:** SW que cachea todo sin estrategia; push sin consentimiento claro; `manifest` con colores/URLs incoherentes.

**Verificación medible:** Lighthouse PWA = 100 (o instalabilidad + service worker + manifest válido); en DevTools "Offline": home, recursos, lección abierta y checklist funcionan; push llega a un dispositivo de prueba (o se demuestra la cola de envío); actualización de SW conserva progreso.

---

### BLOQUE 6 — RENDIMIENTO Y CORE WEB VITALS DE ÉLITE

**Objetivo (duro):** LCP < 1.2s, INP < 150ms, CLS < 0.05 (mobile, 4G simulada); bundle inicial pequeño; sin jank.

**Acciones concretas:**
1. **Baseline:** Lighthouse mobile/desktop + `next build` (sizes) + traza en DevTools (Performance). Guarda el baseline en `docs/perf-baseline-<fecha>.md`.
2. **Bundle:** 
   - Verifica tamaños por ruta; objetivo: home < 250 KB gzip, resto < 150 KB incremental por sección.
   - framer-motion → `LazyMotion` con `domAnimation`/`features` mínimas; quitar librerías no usadas (revisar `package.json`: socket.io, mdxeditor, chart/recharts — si no se usan, documentar y quitar).
   - `next/dynamic` con `ssr:false` SOLO para componentes verdaderamente client-only y grandes (editor, chat), con skeleton.
3. **Imágenes:** si se añade contenido gráfico, `next/image` con `sizes`, AVIF/WebP, `loading="lazy"`, dimensiones explícitas (0 CLS). Verifica `/og.png` (1200×630, comprimido).
4. **Layout/CSS:** `content-visibility`/`contain` en secciones largas fuera de viewport si aplica; sin layout thrash en scroll (blobs con `will-change: transform` y `contain`); evitar animar `top/left/margin` (usar transforms).
5. **JS de terceros:** ninguno de tracking; fuentes self-hosted vía `next/font`; preload crítico solo.
6. **INP:** identificar handlers lentos (búsqueda de 3.647 recursos → `useDeferredValue`/`useMemo`/worker si es necesario; ordenar/filtrar con `useMemo`); evitar re-render de listas grandes en cada tecla.
7. **Servidor:** respuestas API < 200ms p95 local; streaming de respuestas del chat; evitar bloqueos del event loop en rutas server.

**Prohibiciones:** añadir dependencias "por si acaso"; animar propiedades que causan layout; no medir antes de optimizar.

**Verificación medible:** Lighthouse mobile Performance ≥ 95 (y registra el resultado); LCP/INP/CLS en los umbrales; `next build` sin chunks > 350 KB gzip (o justificado); sin long tasks > 200ms en el recorrido crítico.

---

### BLOQUE 7 — I18N DE CALIDAD REAL (15 IDIOMAS + RTL)

**Objetivo:** 39 seleccionables; 15 con UI completa y coherente; RTL impecable en ar/fa/ur; contenido clave traducido en los 5 idiomas top; fallbacks perfectos.

**Acciones concretas:**
1. **Inventario automatizado:** script que compare claves de `translations.ts` por idioma → tabla de cobertura. Marca "completos" los 15 prioritarios (es, pt-BR, pt, en, fr, ro, ar, zh, hi, qu, uk, ru, de, ca, gu). Completa las claves faltantes de esos 15. Para el resto: fallback a `es`.
2. **RTL:** `dir="rtl"` real en `<html>` para ar/fa/ur; componentes shadcn RTL-safe; iconos de dirección (flechas, chevrons) espejados; textos con mezcla bidi correctos; `text-align` y padding lógicos (`ms-`/`me-` Tailwind) en lugar de `ml-`/`mr-`.
3. **Contenido traducido (prioridad):** guías de proceso (NIE, arraigo, empadronamiento, sanidad), checklist de trámites, plantillas de documentos, títulos+descripciones de las 11 secciones, y el asistente IA (ya responde por idioma — verificar las 28+ instrucciones).
4. **Detección y persistencia:** `Accept-Language` → idioma inicial; selector persiste; navegación por rutas con prefijo de idioma (`/es/cv`, `/pt-BR/cv`) para los idiomas activos, con `defaultLocale`.
5. **Prueba de no-regresión:** script `tests/i18n.spec.ts` que cambie a 6 idiomas (es, pt-BR, ro, ar, zh, qu) y verifique: UI cambia, sin claves crudas (`nav_home` visibles), sin mezclas, RTL activa en ar.

**Prohibiciones:** texto hardcodeado nuevo en español (todo por el sistema i18n); traducir "a medias" un idioma y dejarlo roto; olvidar `meta`/`title` localizados.

**Verificación medible:** cobertura 100% en los 15 prioritarios (script); 0 claves crudas visibles en la UI; RTL correcto en ar/fa/ur (layout espejado sin overflow); sitemap con variantes por idioma activo.

---

### BLOQUE 8 — SEGURIDAD, PRIVACIDAD Y HIGIENE DE PRODUCCIÓN

**Objetivo:** sin fallos críticos de seguridad (OWASP Top 10 aplicable), sin fugas de datos, costes de IA controlados, y configuración de producción documentada.

**Acciones concretas:**
1. **CSP:** revisar y justificar `'unsafe-inline'`. Si los proveedores de IA se llaman desde el cliente, añadir sus orígenes a `connect-src` (o, mejor, mantener llamadas server-side). Documentar en `docs/seguridad.md`.
2. **Rate limiting y abuso:** limiter por IP en `/api/chat`, `/api/cv/generate`, `/api/cover-letter`, `/api/community` (token bucket en memoria o Netlify rate limits); `maxDuration` y límites de tamaño de payload; abortar generación IA en timeout (45s) con mensaje claro.
3. **Validación y sanitización:** zod en TODAS las rutas; sanitizar HTML del foro (bloquear `<script>`), escapar salida; límites en mensajes (ya 12k chars) y en arrays.
4. **Secretos:** `.env.example` con TODAS las variables (`NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `GROQ_API_KEY`, `GROQ_BASE_URL`, `GROQ_MODEL`, `NVIDIA_*`, `ZAI_API_KEY`, `NEXT_PUBLIC_VAPID_KEY`, `VAPID_PRIVATE_KEY`, `NETLIFY_*`); verificar `.gitignore`; `git log` sin secretos commiteados (si los hubiera, rotarlos y avisar).
5. **Privacidad:** confirmar zero-tracking; no enviar datos del usuario a IA salvo el prompt (documentar); foro sin PII; aviso de "progreso se guarda en tu dispositivo".
6. **Errores sin fuga de info:** páginas de error genéricas; no exponer stack traces en producción.
7. **Dependencias:** `npm audit`/`bun audit` sin vulnerabilidades críticas/altas (si las hay, actualizar o justificar).
8. **Headers:** verificar en respuesta real: CSP, Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, HSTS si Netlify lo permite, `Cross-Origin-Opener-Policy` (evaluar).

**Prohibiciones:** llamar proveedores IA con la API key en el cliente; logs con datos personales; `console.log` de payloads.

**Verificación medible:** `securityheaders.com` sin fallos críticos; `npm audit` 0 high/critical; prueba de rate-limit (N peticiones seguidas → 429); foro no renderiza HTML inyectado; `curl -I` muestra todos los headers.

---

### BLOQUE 9 — CALIDAD DE CÓDIGO, REFACTOR, TESTS Y CI

**Objetivo:** código limpio y mantenible, tipado estricto, sin duplicación crítica, tests que protejan lo construido, y CI que lo garantice.

**Acciones concretas:**
1. **Higiene:** `bun run lint` (0 errores, 0 warnings), `bunx tsc --noEmit` (0), activar reglas `jsx-a11y` en eslint; sin `console.log` en producción (salvo logging estructurado).
2. **Refactor dirigido (sin romper):**
   - Conectar `use-recent-items` a los clicks de recurso/lección/artículo/evento (gap conocido).
   - Hook `use-scroll-top` compartido para el botón "volver arriba".
   - Unificar renderers markdown en `simple-markdown` (ya existe) y eliminar duplicados.
   - Centralizar constantes (colores de categoría, umbrales) en un único módulo `src/lib/constants.ts` si están dispersas.
3. **Tipado:** interfaces en los `data/*.ts` sin `any`; `zod` schemas tipados; aprovechar `satisfies`/`const` para los datos.
4. **Tests (5-8 flujos críticos):**
   - Home renderiza y skip-link funciona.
   - Navegación entre ≥3 secciones con URL correcta y back/forward.
   - Command palette (⌘K) busca y navega.
   - CV: cargar datos de ejemplo → preview actualizado; persistencia en localStorage.
   - Favoritos: añadir → persisten → exportar genera archivo.
   - Checklist/recordatorios: crear → aparece → persiste.
   - Chat IA: respuesta (mock del endpoint) y estado de escritura.
   - i18n: cambio a pt-BR cambia UI.
   Usa Playwright (browser real) y/o Vitest + Testing Library. Sin tests de "snapshot" frágiles.
5. **CI:** GitHub Actions `ci.yml`: `lint → typecheck → build → test → a11y (axe)`. Cada PR debe pasar; si el repo no está en GitHub, documenta comandos equivalentes para Netlify.
6. **Scripts npm:** `typecheck`, `test`, `a11y`, `check-links` documentados en `package.json`.

**Prohibiciones:** refactors que mezclen más de un cambio por commit; tests que "siempre pasan" (sin aserciones reales); añadir deps solo para tests cuando no se necesitan.

**Verificación medible:** los 4 comandos en verde local y en CI; `git diff` de cada commit pequeño y descriptivo; coverage de los flujos críticos demostrada.

---

### BLOQUE 10 — DATOS EN VIVO, VERIFICACIÓN Y MANTENIBILIDAD DEL CONTENIDO

**Objetivo:** el contenido deja de ser demo estática: divisas en vivo, enlaces verificados, proceso editorial documentado, comunidad operativa.

**Acciones concretas:**
1. **Divisas en vivo:** integra API gratuita (ej. `https://open.er-api.com/v6/latest/EUR`) en `/api/rates` con caché (revalidate 24h) y **fallback a los valores estáticos** de `tools-data.ts` si no hay red. La UI indica "hoy" / "aprox." según fuente.
2. **Coste de vida:** marcar claramente "estimación {año}" con fuente; no presentar como dato oficial.
3. **Eventos:** separa datos demo (relativos a fecha) de un mecanismo editorial real. Documenta en `docs/editorial.md` el proceso: fuente → verificación → formato → publicación.
4. **Verificación de enlaces:** `scripts/check-links.mjs` (Playwright headless) recorre `resources.ts`, `external-courses.ts`, etc.; produce `reports/link-check-<fecha>.json` con `{url, status, redirect, title}`; corrige los enlaces rotos de mayor valor (recursos gubernamentales, SEPE, ONGs); documenta ejecución (cron mensual opcional).
5. **"Reportar enlace roto"** en la ficha de recurso → guarda reporte (localStorage o API) con estado visible.
6. **Foro/comunidad:** verifica `/api/community` con Netlify Blobs: create/list/votes funcionales, rate-limited, moderables (flag). Si el SDK de foro compartido (`community-section.tsx` 36 KB) está incompleto, termina la funcionalidad mínima viable (publicar, responder, votar, moderar).
7. **Geolocalización (alto valor, opcional pero recomendado):** filtro "cerca de mí" con permiso + fallback a ciudad; si hay coordenadas en recursos, mapa Leaflet/MapLibre ligero. Sin geolocalización forzada.
8. **Analítica privada (opcional):** contador propio o Plausible self-hosted (sin cookies). Jamás Google Analytics.

**Prohibiciones:** presentar datos demo como oficiales; scripts de verificación que no se pueden ejecutar (documenta dependencias); foro sin moderación básica.

**Verificación medible:** `GET /api/rates` devuelve datos del día con fallback demostrable (red cortada → estáticos); `check-links` ejecutable y con informe; flujo "reportar enlace roto" operativo; foro publica/responde/vota.

---

### BLOQUE 11 — UX, DISEÑO Y POLISH DE MARCA (AUDITORÍA VISUAL COMPLETA)

**Objetivo:** una app que se siente humana, cálida y pulida en cada sección, con la identidad de marca intacta y sin "slop" visual.

**Acciones concretas:**
1. **Auditoría visual recorrido completo:** cada sección en desktop (1440) y mobile (375) en claro/oscuro. Archiva capturas en `docs/screenshots/`. Detécta: espaciados inconsistentes, tipografía ilegible, jerarquía rota, estados vacíos pobres, elementos cortados.
2. **Estados vacíos y de error:** TODA vista con datos vacíos (sin recursos, sin recordatorios, sin progreso, sin favoritos) debe tener mensaje útil + CTA. Estados de carga: skeletons coherentes con la marca.
3. **Micro-interacciones:** hover/active/focus coherentes en botones, tarjetas, chips; transiciones suaves y consistentes (duración/curva centralizada); respetar `reducedMotion`.
4. **Tipografía:** 1-3 familias máximo (Geist ya está); escala tipográfica consistente; legibilidad en español y RTL; sin tamaños < 14px en móvil para texto útil.
5. **Paleta:** mantener oklch cálida; sin azul/índigo por defecto; gradientes sutiles (anti "gradient overload"); alto contraste ya cubierto por el modo.
6. **Densidad y jerarquía:** el público tiene baja alfabetización → una acción principal por pantalla, lenguaje simple, sin jerga; botones grandes.
7. **Copy:** revisar textos: títulos accionables, lenguaje sencillo (tú), sin ironía, sin tecnicismos sin explicar; consistente en toda la app.
8. **Iconografía:** SVGs coherentes (lucide-react ya); sin emojis como iconos funcionales nuevos (los existentes decorativos se respetan pero no se multiplican).
9. **Consistencia de componentes:** mismos patrones para listas, cards, badges, modales; revisar que `variant`/`size` de shadcn se usan con criterio.

**Prohibiciones:** añadir secciones decorativas "por relleno"; gradients multicolor; redondeados excesivos + bordes de color a la izquierda (anti-pattern); emojis como sustitutos de diseño; tipografías nuevas sin justificación.

**Verificación medible:** recorrido visual con capturas; checklist de consistencia por sección; navegación móvil sin elementos cortados ni scroll horizontal; todos los estados vacíos con CTA.

---

### BLOQUE 12 — MONITOREO, OBSERVABILIDAD Y CIERRE DE CICLO

**Objetivo:** el proyecto es mantenible a largo plazo: se ve, se mide y se actualiza sin sorpresas.

**Acciones concretas:**
1. **Errores en producción:** error boundaries por sección (no solo global) con reporte (Sentry opcional y libre, o endpoint propio `POST /api/log-error` con rate-limit). Los errores no deben romper la app entera.
2. **Métricas de negocio (privadas):** dashboard interno con KPIs (usuarios, secciones vistas, CVs generados, instalaciones PWA, errores) — de forma agregada y sin PII. Si Netlify Analytics no basta, contador propio.
3. **Healthchecks:** `/api/health` ya existe: extiende a dependencias (DB, blobs, proveedor IA con fallback) y exponlo como endpoint público ligero.
4. **Docs:** actualiza `DOCUMENTACION-COMPLETA.md` con el estado real (checklists marcadas, fechas, métricas baseline→resultado). Crea/actualiza: `docs/seguridad.md`, `docs/dominio-canonico.md`, `docs/editorial.md`, `docs/perf-baseline.md`, `README.md` (cómo arrancar: `bun install`, `.env.example`, `bun run dev`, scripts).
5. **Snapshot documental:** tras todo, genera un snapshot HTML real del deploy (si el propietario lo pide) en `manos/` con nombre y fecha claros, desde el build actual (NO los antiguos antd).
6. **Limpieza final:** dependencias sin usar, archivos de la fase antigua (`upload/`, `tool-results/` si procede), y confirmar `git status` limpio o con cambios intencionales documentados.

**Prohibiciones:** herramientas de tracking de terceros sin consentimiento; docs desactualizadas al finalizar (el conocimiento que no se documenta no existe).

**Verificación medible:** un error en una sección no tumba la app (error boundary); `/api/health` refleja estado de dependencias; docs actualizadas con fechas y estado; repositorio limpio.

---

## 7. PROCESO DE EJECUCIÓN (MANDATORIO)

1. **Arranque:** `git status`, `git log --oneline -20`, lee `DOCUMENTACION-COMPLETA.md`, `analysis-manos-abiertas-...gaps-*.md` y los worklogs. Trabaja en rama `perfeccion-<bloque>` (o rama única si el flujo lo requiere). NO trabajes sobre `main` con trabajo sucio.
2. **Orden estricto de bloques.** B1→B2→…→B12. No avances con un bloque sin su verificación.
3. **Commits atómicos y descriptivos** (ej. `fix(a11y): aria-label en botones de icono de recursos`). Un tema por commit. En español o inglés coherente con el historial.
4. **Verifica con app en marcha:** `bun run dev` (o `npm run dev`) + navegador en cada cambio grande; 0 errores de consola.
5. **Cuando termines un bloque, ejecuta sus verificaciones y registra el resultado** en `docs/estado-bloques.md` (tabla: bloque, fecha, verificación, resultado, incidencias).
6. **No dejes pendientes invisibles:** todo pendiente queda documentado con su plan.

---

## 8. REGLAS Y RESTRICCIONES (NO NEGOCIABLES)

1. **Preserva lo verificado** (Sección 4). Al final de cada bloque, las 11 secciones funcionan.
2. **Identidad visual:** paleta cálida terracota/saffron/oliva; sin azul/índigo por defecto; sin gradient overload; sin emojis como iconos funcionales nuevos.
3. **Sin dependencias injustificadas:** usa el código existente; cada nueva dependencia (Leaflet, Sentry, Push lib) requiere justificación en el commit y actualización de docs.
4. **No toques `manos/` ni `html5-boilerplate/`** (snapshots antiguos, no son código vivo).
5. **Dominio canónico:** no lo decidas tú. Centraliza en `NEXT_PUBLIC_SITE_URL`; documenta la decisión pendiente.
6. **Privacidad radical:** cero tracking, cero PII, datos en el dispositivo; IA solo recibe el prompt.
7. **Español como lengua base** para textos; traducciones vía i18n, nunca hardcodeadas.
8. **Accesibilidad es requisito de commit:** cualquier componente nuevo pasa contraste AA, foco visible y nombre accesible en el mismo commit.
9. **No inventes features nuevas sin justificar su impacto** en la misión (empleo, derechos, brecha digital). Si la añades, está en el Bloque 10 u 11 y la pides explícitamente.
10. **Evidencia sobre opinión:** toda afirmación de "funciona" va respaldada por la salida real del comando o captura.

---

## 9. PUERTAS DE CALIDAD (EJECUTAR SIEMPRE; SON EL BARE MO DE "TERMINADO")

```bash
# 1. Tipado estricto
bunx tsc --noEmit --skipLibCheck        # → 0 errores

# 2. Lint
bun run lint                            # → 0 errores, 0 warnings

# 3. Build de producción
bun run build                           # → éxito, rutas listadas, sin warnings críticos

# 4. Tests
bun run test                            # → todos en verde (suite del Bloque 9)

# 5. Seguridad de dependencias
bun audit                               # → 0 high/critical (o justificado en docs)

# 6. Navegador (manual + automatizado)
#    Home + secciones + diálogos, claro/oscuro, 4 modos de lectura
#    Consola: 0 errores de hidratación ni runtime

# 7. Accesibilidad
#    axe-core (Playwright): 0 violaciones en el recorrido completo
#    Lighthouse A11y: 100

# 8. Rendimiento (Lighthouse mobile, 4G)
#    Performance ≥ 95 · LCP < 1.2s · INP < 150ms · CLS < 0.05

# 9. SEO
#    Lighthouse SEO: 100
#    Rich Results Test: Course/HowTo/FAQPage/Event/BreadcrumbList sin errores
#    /sitemap.xml válido y coherente con el árbol de rutas

# 10. PWA
#     Lighthouse PWA: 100 · instalable · offline verificado · push operativo

# 11. Best Practices
#     Lighthouse Best Practices: 100
#     securityheaders.com sin fallos críticos

# 12. Git
#     Historia clara; docs actualizadas; sin secretos en el repo
```

**Regla de oro:** si una puerta falla, corrígelo. Está PROHIBIDO: `@ts-ignore`, `eslint-disable` masivo, `ignoreBuildErrors: true`, `any` sin justificación, comentar un test, o "aprobar" sin evidencia.

---

## 10. DEFINICIÓN DE "PERFECTO" — CHECKLIST FINAL DE CERO-EXCUSAS

### SEO y renderizado
- [ ] `/` y cada sección sirven HTML con contenido real (≥500 palabras de texto real por sección) sin JS.
- [ ] SSR/SSG real; `ssr:false` eliminado a nivel de página.
- [ ] Rutas canónicas reales enlazadas; hashes antiguos redirigen.
- [ ] `sitemap.xml` = secciones × idiomas activos + guías + lecciones + eventos + agrupaciones de recursos.
- [ ] JSON-LD: Course, HowTo, FAQPage, Event, BreadcrumbList, ItemList, Organization, WebSite — todos validan.
- [ ] `robots.ts` con `/api/` bloqueado y sitemap.
- [ ] OG/Twitter por sección; `/og.png` correcto.
- [ ] Un único dominio canónico documentado (`NEXT_PUBLIC_SITE_URL`).

### Accesibilidad
- [ ] axe: 0 violaciones en todo × 2 temas × 4 modos de lectura.
- [ ] Navegación solo-teclado completa; sin trampas de foco.
- [ ] Todos los botones de icono con nombre accesible.
- [ ] AA en texto normal; AAA en alto contraste.
- [ ] `aria-live` en búsquedas, chat, toasts; `aria-busy` en generación IA.
- [ ] TTS, modos de lectura, skip-link operativos; reduced-motion también en JS.
- [ ] RTL impecable en ar/fa/ur.
- [ ] Objetivos táctiles ≥ 44px en móvil.

### Rendimiento y PWA
- [ ] LCP < 1.2s · INP < 150ms · CLS < 0.05.
- [ ] Lighthouse: Perf ≥ 95, A11y 100, BP 100, SEO 100, PWA 100.
- [ ] Home < 250 KB gzip; code-splitting por ruta real.
- [ ] framer-motion en LazyMotion; sin animar layout properties.
- [ ] Sin errores de hidratación.
- [ ] Offline-first verificado; push VAPID con suscripción/gestión; manifest coherente con `--brand-warm`.

### i18n
- [ ] 15 idiomas prioritarios con UI 100%; resto fallback a es.
- [ ] Guías de proceso, checklist y plantillas traducidas (top 5 idiomas).
- [ ] RTL real; detección + persistencia; sin claves crudas.

### Seguridad y privacidad
- [ ] CSP justificada/documentada; connect-src correcto.
- [ ] Rate-limiting en endpoints de IA y foro.
- [ ] Zod en todas las rutas; sanitización del foro.
- [ ] `.env.example` completo; `bun audit` 0 high/critical.
- [ ] Zero tracking; sin PII; sin stack traces en prod.

### Calidad y mantenibilidad
- [ ] `tsc` / `lint` / `build` / `test` en verde local y CI.
- [ ] Suite de humo 5-8 flujos críticos + CI.
- [ ] `use-recent-items` conectado; duplicaciones eliminadas; hooks compartidos.
- [ ] Error boundaries por sección; `/api/health` con dependencias.
- [ ] `docs/` actualizadas (seguridad, dominio, editorial, perf, estado de bloques); README funcional.
- [ ] Repositorio limpio (o cambios intencionales documentados).
- [ ] `DOCUMENTACION-COMPLETA.md` con checklists y fechas actualizadas.

### Datos en vivo
- [ ] Divisas en vivo con fallback estático.
- [ ] `check-links` ejecutable; informe generado; enlaces críticos corregidos.
- [ ] "Reportar enlace roto" operativo; foro funcional y moderable.
- [ ] Eventos demo separados del pipeline editorial documentado.

---

## 11. ENTREGA FINAL (FORMATO OBLIGATORIO)

Al concluir los 12 bloques, entrega:
1. **Resumen ejecutivo de una página:** por bloque: qué se hizo, qué puerta de calidad pasó (con valores), y qué quedó fuera con recomendación. Sin paja, solo hechos y métricas.
2. **Tabla de resultados por puerta de calidad** (Sección 9): comando, resultado real, archivo de evidencia.
3. **Lista de commits** agrupada por bloque, con mensajes.
4. **Comando de verificación único** que el propietario pueda ejecutar para confirmar el estado "perfecto" (p. ej., `bun run verify` si lo creas en el Bloque 12).
5. **Archivos clave modificados/creados** por bloque.
6. **Riesgos y deuda residual** priorizada, cada uno con plan de mitigación.

**Cierre:** el repo queda en `git status` limpio o con únicamente cambios intencionales documentados. `DOCUMENTACION-COMPLETA.md` refleja el estado real con fecha.

---

*Prompt extremo generado a partir del análisis profundo del repositorio (código fuente, worklogs de 12 fases, DOCUMENTACION-COMPLETA.md y análisis SEO/a11y del 2026-08-05). Revisión: exigir lo máximo en cada métrica, sin atajos, sin regresiones, con evidencia.*
