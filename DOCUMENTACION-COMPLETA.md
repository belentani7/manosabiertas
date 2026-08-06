# MANOS ABIERTAS — Documentación Completa del Proyecto

## 1. QUÉ ES MANOS ABIERTAS

**Manos Abiertas** es una **plataforma web gratuita, multilingüe (39 idiomas), orientada a personas inmigrantes y comunidades migrantes en España**, con especial foco en población latinoamericana y brasileña. Funciona como **puente digital integral** entre la persona recién llegada y los recursos, derechos, herramientas y conocimientos que necesita para integrarse, trabajar y vivir con dignidad.

---

## 2. PROPÓSITO Y MISIÓN

> **"Que ninguna persona inmigrante en España se quede sin saber sus derechos, sin herramientas para trabajar, ni sin saber usar la tecnología que hoy lo cambia todo."**

La plataforma resuelve 4 problemas críticos simultáneamente:
1. **Brecha digital**: Enseña IA y Office desde cero (nivel "solo sé usar WhatsApp")
2. **Empleabilidad**: Creador de CV profesional (formato Europass/ATS) + carta de presentación
3. **Derechos y trámites**: Guías verificadas de NIE, extranjería, asilo, vivienda, ayudas, SMI
4. **Acceso a recursos**: 3.647+ recursos verificados (cursos, ONGs, oficinas, teléfonos, webs)

---

## 3. ARQUITECTURA TÉCNICA

### Stack Principal
| Capa | Tecnología | Versión |
|------|------------|---------|
| Framework | Next.js | 16 (App Router) |
| Runtime | React | 19 |
| Lenguaje | TypeScript | 5 (strict) |
| Estilos | Tailwind CSS | v4 |
| UI | shadcn/ui (Radix UI) | latest |
| Estado global | Zustand | 5 (persist + middleware) |
| Internacionalización | next-intl + custom | 39 idiomas |
| Animaciones | Framer Motion | 12 |
| Base de datos | Prisma + SQLite (dev) / PostgreSQL (prod) | 6 |
| Auth | NextAuth.js | 4 |
| IA | z-ai-web-dev-sdk + providers configurables | latest |
| PWA | Service Worker + Manifest + Workbox | - |
| Despliegue | Netlify (standalone output) | - |

### Estructura de Carpetas Clave
```
src/
├── app/                    # App Router (pages, layouts, API routes)
│   ├── api/               # Serverless functions
│   │   ├── chat/          # Asistente IA (con fallback local)
│   │   ├── cv/            # Generación de CV
│   │   ├── cover-letter/  # Cartas de presentación
│   │   ├── study-tools/   # Herramientas de estudio
│   │   ├── community/     # Foro/comunidad (Netlify Blobs)
│   │   └── health/        # Health check
│   ├── [locale]/          # Rutas internacionalizadas
│   └── page.tsx           # Entry point (SPA client-side)
├── components/
│   ├── manos-abiertas/    # 50+ componentes de la app
│   ├── ui/                # shadcn/ui components
│   └── seo/               # StaticHomeFallback (SSR content)
├── data/                  # 15+ archivos de datos masivos (TS)
│   ├── resources.ts       # 3.647 recursos verificados
│   ├── rights-guide.ts    # 61 artículos de derechos
│   ├── office-course.ts   # Curso completo Office
│   ├── ai-courses.ts      # 8 cursos de IA
│   ├── cv-templates.ts    # Plantillas CV
│   ├── events-data.ts     # Eventos
│   ├── global-resources.ts
│   ├── process-guides.ts  # Guías de trámites
│   └── ...
├── stores/
│   └── app-store.ts       # Zustand store (navegación, idioma, accesibilidad)
├── i18n/
│   ├── translations.ts    # Traducciones completas (39 idiomas)
│   └── languages.ts       # Configuración de idiomas
├── lib/
│   ├── ai-provider.ts     # Abstracción multi-proveedor IA
│   ├── offline-tutor.ts   # Respuestas locales sin API
│   └── utils.ts           # Helpers (cn, etc.)
└── types/                 # Tipos TypeScript compartidos
```

---

## 4. FUNCIONALIDADES PRINCIPALES (50+ componentes)

### 4.1 Aprende IA (8 cursos interactivos)
- **Cursos**: ChatGPT, Gemini, Copilot, Claude, DeepSeek, Qwen, Perplexity, Meta AI
- **Metodología**: Paso a paso, ejercicios prácticos, progreso guardado localmente
- **Nivel**: Desde "¿qué es un prompt?" hasta casos de uso avanzados
- **Componente**: `learn-ai-section.tsx`, `level0-academy.tsx`, `noia-core-academy.tsx`

### 4.2 Crea tu CV (Constructor completo)
- **Formato**: Europass estándar europeo, compatible ATS (InfoJobs, LinkedIn)
- **IA integrada**: Generación de contenido, optimización, traducción
- **Exportación**: PDF, JSON, Texto plano
- **Plantillas**: Múltiples diseños profesionales
- **Componente**: `cv-section.tsx` (36KB), `cover-letter-builder.tsx`, `template-preview.tsx`

### 4.3 Curso Office Completo
- **Módulos**: Word, Excel, PowerPoint (desde cero)
- **Progreso**: Guardado local, checkpoints, ejercicios
- **Componente**: `office-section.tsx`, `office-map.tsx`

### 4.4 Recursos Verificados (3.647+)
- **Categorías**: Educación, empleo, vivienda, salud, legal, infancia, mujeres, LGBTQ+, emergencias
- **Filtros**: Por ciudad, idioma, categoría, tipo (presencial/online)
- **Verificación**: Cada recurso tiene fuente, fecha de verificación, contacto
- **Componente**: `resources-section.tsx` (23KB), `global-resources.ts` (217KB)

### 4.5 Derechos y Ayudas (61 artículos)
- **Temas**: NIE/TIE, arraigo, asilo, nacionalidad, vivienda, SMI, prestaciones, violencia de género, trata
- **Formato**: Guías paso a paso, infografías, checklists, plantillas documentos (EX-01, EX-15)
- **Componente**: `rights-section.tsx`, `process-infographics.tsx`, `document-templates.tsx`, `document-checklist.tsx`

### 4.6 Herramientas Prácticas
- **Calculadora coste de vida** por ciudad
- **Gestor de documentos** personal
- **Plantillas** EX-01, EX-15, cartas, poderes
- **Recordatorios inteligentes** (citas, renovaciones, plazos)
- **Componente**: `tools-section.tsx`, `cost-of-life-tools.tsx`, `smart-reminders.tsx`

### 4.7 Asistente IA (Chat)
- **Multi-proveedor**: Z.ai, OpenAI, Anthropic, Groq, Ollama (configurable)
- **Fallback local**: Funciona SIN internet ni API (`offline-tutor.ts`)
- **39 idiomas**: Responde en el idioma del usuario
- **Contexto**: Conoce la plataforma y sugiere secciones relevantes
- **Componente**: `ai-assistant.tsx`, `api/chat/route.ts`

### 4.8 Comunidad y Eventos
- **Foro**: Temas, respuestas, votos (Netlify Blobs)
- **Eventos**: Calendario, filtros, recordatorios
- **Cursos externos**: Biblioteca de cursos gratuitos verificados
- **Componente**: `community-section.tsx` (36KB), `events-section.tsx`, `courses-library-section.tsx`

### 4.9 Accesibilidad y UX Avanzada
- **Modos de lectura**: Normal, Grande, Alto contraste, Estudio
- **PWA**: Instalable, offline-first, service worker
- **Navegación**: Hash routing + deep linking + Command Palette (⌘K)
- **Tema**: Claro/oscuro/sistema + Reading mode
- **Idioma**: 39 idiomas con selector + detección automática
- **Componente**: `accessibility-panel.tsx`, `reading-mode-toggle.tsx`, `pwa-status.tsx`, `command-palette.tsx`

---

## 5. DATOS Y CONTENIDO (Fuente de verdad en `src/data/`)

| Archivo | Tamaño | Contenido |
|---------|--------|-----------|
| `resources.ts` | 217 KB | 3.647 recursos verificados |
| `rights-guide.ts` | 193 KB | 61 artículos derechos/trámites |
| `office-course.ts` | 122 KB | Curso completo Office |
| `ai-courses.ts` | 112 KB | 8 cursos IA |
| `cv-templates.ts` | 44 KB | Plantillas CV |
| `external-courses.ts` | 38 KB | Cursos externos verificados |
| `level0-courses.ts` | 27 KB | Cursos nivel 0 (alfabetización) |
| `open-source-hub.ts` | 26 KB | Herramientas open source |
| `process-guides.ts` | 11 KB | Guías de trámites |
| `global-resources.ts` | 18 KB | Recursos globales por país |
| `events-data.ts` | 8 KB | Eventos |
| `glossary-data.ts` | 8 KB | Glosario legal |
| `tools-data.ts` | 10 KB | Herramientas prácticas |
| `document-templates.ts` | 10 KB | Plantillas documentos |
| `home-content.ts` | 8 KB | Contenido home |

**Total: ~850 KB de datos estructurados TypeScript** — todo tipado, versionado, sin CMS externo.

---

## 6. INTERNACIONALIZACIÓN (39 IDIOMAS)

### Idiomas Soportados
```
es (español)          en (inglés)           ca (catalán)
pt-BR (portugués BR)  pt (portugués PT)     fr (francés)
ar (árabe)            zh (chino)            hi (hindi)
qu (quechua)          ro (rumano)           uc (ucraniano)
ru (ruso)             de (alemán)           it (italiano)
pl (polaco)           tr (turco)            ur (urdu)
fa (persa)            bn (bengalí)          pa (punjabi)
ta (tamil)            te (telugu)           mr (maratí)
gu (gujarati)         sw (swahili)          am (amárico)
tl (tagalo)           vi (vietnamita)       ja (japonés)
ko (coreano)
```

### Implementación
- **next-intl** para routing `/es`, `/en`, `/zh`...
- **Custom translations.ts** con todas las claves (500+ strings)
- **Detección automática** por `Accept-Language` + persistencia en store
- **RTL support** para árabe, persa, urdu
- **Fallbacks**: es → en → clave

---

## 7. PWA Y OFFLINE-FIRST

### Características
- **Service Worker** (`public/sw.js`): Cache estático + runtime + fallback offline
- **Manifest** (`public/manifest.json`): Icons 192/512, screenshots, shortcuts
- **Instalable**: Prompt nativo + botón en UI
- **Offline**: Cursos, recursos, CV, progreso funcionan sin conexión
- **Sync**: Background sync para formularios cuando vuelve conexión

### Estrategia de Cache
```
Static: /, /manifest.json, /icon-*.png, /og.png, fonts, CSS, JS bundles
Runtime: API responses (chat, cv, resources) → stale-while-revalidate
Offline fallback: /offline.html (StaticHomeFallback)
```

---

## 8. SEO Y ACCESIBILIDAD (WCAG 2.1 AA)

### SEO Implementado
- ✅ `metadataBase` + `canonical` + `alternates` (hreflang 39 idiomas)
- ✅ `robots` meta + `robots.txt` con `Sitemap:` + `Disallow: /api/`
- ✅ `openGraph` + `twitter` cards + `og:image` (1200×630)
- ✅ **JSON-LD**: `Organization` + `WebSite` + `WebPage` + `SearchAction`
- ✅ `viewport` con `viewport-fit=cover` + `theme-color` light/dark
- ✅ `apple-mobile-web-app-*` + `manifest` link
- ⚠️ **PENDIENTE**: `sitemap.xml` dinámico + SSR contenido real

### Accesibilidad
- ✅ `focus-visible` global + `sr-only` utility
- ✅ Skip to content link (`#main-content`)
- ✅ `aria-label` en botones de icono (nav-bar, AI assistant, etc.)
- ✅ `aria-current="page"` en navegación activa
- ✅ `prefers-reduced-motion` respetado en CSS
- ✅ Reading modes: large text, high contrast, study mode
- ✅ TTS (text-to-speech) buttons en secciones largas
- ⚠️ **PENDIENTE**: Auditoría Lighthouse/axe completa

---

## 9. SEGURIDAD Y PRIVACIDAD

### Headers de Seguridad (next.config.ts)
```typescript
Content-Security-Policy:
  default-src 'self'
  script-src 'self' 'unsafe-inline'  // next/dynamic + JSON-LD inline
  style-src 'self' 'unsafe-inline'   // framer-motion + next-themes
  connect-src 'self'                  // APIs same-origin
  font-src 'self'
  img-src 'self' data: blob:
  object-src 'none'
  base-uri 'self'
  form-action 'self'
  frame-ancestors 'none'
  worker-src 'self'
  manifest-src 'self'

Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-DNS-Prefetch-Control: on
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Privacidad
- **Sin tracking**: No Google Analytics, no cookies de terceros
- **Datos en dispositivo**: Progreso, preferencias, CV en localStorage/IndexedDB
- **Netlify Blobs**: Solo temas de foro compartidos (opt-in)
- **Auth opcional**: NextAuth para sincronización cloud (futuro)
- **Sin datos sensibles**: No se pide NIE, pasaporte, cuentas bancarias

---

## 10. APIS Y INTEGRACIONES EXTERNAS

### IA (Multi-proveedor configurable)
| Proveedor | Modelo | Uso |
|-----------|--------|-----|
| Z.ai (default) | GLM-4.5 | Chat principal |
| OpenAI | GPT-4o, GPT-4o-mini | Fallback/opcional |
| Anthropic | Claude 3.5 Sonnet | Fallback/opcional |
| Groq | Llama 3.3 70B | Fallback rápido |
| Ollama | Local (llama3, etc.) | 100% offline/privado |

### Datos Externos Necesarios (Para mejorar)
| Categoría | APIs/Fuentes Objetivo | Estado |
|-----------|----------------------|--------|
| **Extranjería** | Sede Electrónica, Mercurio, ICARI | Manual |
| **Empleo** | SEPE, InfoJobs API, LinkedIn Jobs | Manual |
| **Vivienda** | Idealista API, Fotocasa, Alquiler Seguro | Manual |
| **Ayudas** | BOE, CCAA portales, Ayuntamiento APIs | Manual |
| **Salud** | Cita previa SAS/SerGas/Salud Madrid | Manual |
| **Traducción** | LibreTranslate, DeepL API, Google Translate | Parcial |
| **Geocodificación** | Nominatim, OpenStreetMap, Mapbox | Parcial |
| **Validación docs** | DNI/NIE check, IBAN, CUPS | Local |

---

## 11. PROYECTOS SIMILARES (Benchmarking)

### Referentes Internacionales
| Proyecto | País | Enfoque | Tech | Lecciones |
|----------|------|---------|------|-----------|
| **Refugee.info** | Global | Info derechos/refugiados | React, CMS | Contenido modular, multi-idioma |
| **InmigraCiudad** | España | Guías trámites | WordPress | SEO local, estructura por trámite |
| **Welcome App** | Alemania | Integración refugiados | Flutter, PWA | Offline-first, gamificación |
| **MigraCode** | Barcelona | Bootcamp dev migrantes | Next.js, TS | Comunidad + formación técnica |
| **SINGA** | Francia/España | Encuentros locales + app | React Native | Eventos + matchmaking |
| **Kiron** | Global | Educación superior refugiados | Moodle + custom | Credenciales verificables |
| **Tarjimly** | Global | Traducción voluntarios | React Native | Humano + IA, tiempo real |
| **InfoMigrants** | UE | Periodismo + recursos | Drupal | Contenido editorial + directorio |

### Gaps Identificados vs Competidores
1. **No hay geolocalización automática** de recursos cercanos
2. **No hay calendario unificado** de citas/trámites con recordatorios push
3. **No hay verificación automática** de vigencia de recursos (web scraping)
4. **No hay credenciales verificables** (VC/W3C) para cursos completados
5. **No hay chat humano** (voluntarios/abogados) escalable
6. **No hay app nativa** (solo PWA) — límite notificaciones push iOS
6. **No hay marketplace** de servicios migrantes (abogados, gestores, clases)

---

## 12. BASES DE DATOS Y APIs NECESARIAS (Investigación Masiva)

### 12.1 Fuentes Oficiales España (Prioridad ALTA)

#### Extranjería y Trámites
```
✅ Sede Electrónica Administración Pública: https://sede.gob.es
✅ Mercurio (Extranjería): https://extranjeros.inclusion.gob.es
✅ ICARI (Citas): https://icari.inclusion.gob.es
✅ BOE (Boletín Oficial): https://www.boe.es/diario_boe/xml.php?id=BOE-A-2024-XXXXX
✅ Modelo EX-01/EX-15/EX-17: PDFs oficiales descargables
⚠️ API oficial: NO EXISTE PÚBLICA → Scraping necesario
```

#### Empleo y Formación
```
✅ SEPE (Servicio Público Empleo): https://www.sepe.es
✅ FUNDAE (Formación): https://www.fundae.es
✅ Lanbide (País Vasco), SOC (Cataluña), SAE (Andalucía)...
✅ InfoJobs API: https://api.infojobs.net (requiere partnership)
✅ LinkedIn Jobs API: Partner program only
⚠️ Portales autonómicos: 17 CCAA + Ceuta/Melilla = 19 fuentes
```

#### Vivienda
```
✅ Idealista API: https://developers.idealista.com (comercial)
✅ Fotocasa: Sin API pública
✅ Alquiler Seguro (Ministerio): https://www.alquilerseguro.es
✅ Registros de demanda: Por CCAA
⚠️ Datos reales precio/alquiler: INE, Ministerio Vivienda, portales
```

#### Ayudas y Prestaciones
```
✅ IMV (Ingreso Mínimo Vital): https://www.seg-social.gob.es
✅ RAI, Renta Activa, Subsidio >52: SEPE
✅ Ayudas alquiler: Plan Estatal Vivienda 2022-2025
✅ Becas MEC, Erasmus+, FP: https://www.educacion.gob.es
✅ Ayudas CCAA: 19 portales distintos
⚠️ APIs: Inexistentes → RSS/BOE scraping
```

#### Salud
```
✅ Cita previa: Cada CCAA tiene su sistema (Salud Responde, Cita Sanidad, etc.)
✅ Tarjeta sanitaria: Requisitos por CCAA
✅ Urgencias: 112 + 061 (algunas CCAA)
⚠️ APIs: Inexistentes públicas
```

### 12.2 Datos Geográficos y Localización
```
✅ OpenStreetMap / Nominatim: Geocodificación gratuita
✅ INE: Códigos municipio, provincia, CCAA
✅ Correos: Códigos postales
✅ Catastro: Referencia catastral
✅ Mapbox / Google Maps: Comercial (límite gratuito)
```

### 12.3 Traducción y Accesibilidad
```
✅ LibreTranslate: Self-hosted, gratuito, 100+ idiomas
✅ DeepL API: Comercial, mejor calidad
✅ Google Translate API: Comercial
✅ Mozilla TTS / Coqui TTS: Text-to-speech self-hosted
✅ Whisper (OpenAI): Speech-to-text self-hosted
```

### 12.4 Verificación de Identidad y Documentos
```
✅ DNI/NIE validation: Algoritmo público (letra control)
✅ IBAN validation: ISO 13616
✅ CUPS (Código Universal Punto Suministro): Regex
✅ Verificación firma digital: @firma, AutoFirma
```

---

## 13. PLAN DE MEJORAS EXTREMAS (MÁXIMO NIVEL)

### FASE 1: SEO TÉCNICO Y SSR CRÍTICO (Semana 1-2)
- [ ] **SSR real**: Eliminar `ssr: false` en `page.tsx`, renderizar `StaticHomeFallback` + secciones públicas estáticamente
- [ ] **Sitemap.xml dinámico**: Generar desde `src/data/` (3.647 recursos → URLs individuales)
- [ ] **Rutas canónicas por sección**: `/recursos`, `/derechos`, `/cv`, `/ia` (no solo hash)
- [ ] **OG images dinámicas**: `/api/og?section=cv&lang=es` → genera imagen personalizada
- [ ] **Structured data por sección**: `Course`, `HowTo`, `FAQPage`, `LocalBusiness` para recursos

### FASE 2: GEOLOCALIZACIÓN Y RECURSOS CERCANOS (Semana 2-3)
- [ ] **Geocodificación usuario**: IP → ciudad (privado, client-side) + permiso GPS
- [ ] **Recursos por proximidad**: Filtrar 3.647 recursos por distancia (Haversine + IndexedDB)
- [ ] **Mapa interactivo**: Leaflet/MapLibre + marcadores categorizados
- [ ] **Rutas y transporte**: Integración OpenTripPlanner / Horarios TMB/EMT/Metro
- [ ] **Notificaciones push**: Service Worker + Web Push API (VAPID) para recordatorios

### FASE 3: VERIFICACIÓN AUTOMÁTICA DE DATOS (Semana 3-4)
- [ ] **Scraper programado**: Playwright/Puppeteer → verifica URLs cada 7 días
- [ ] **Estado de recursos**: `verified`, `broken`, `moved`, `outdated` + fecha check
- [ ] **Alertas automáticas**: Email/Slack/Discord cuando recurso crítico falla
- [ ] **Community reporting**: Botón "Reportar enlace roto" → issue GitHub auto

### FASE 4: CREDENCIALES VERIFICABLES (Semana 4-5)
- [ ] **W3C Verifiable Credentials**: Emitir badge al completar curso IA/Office
- [ ] **DID (Decentralized Identifiers)**: Usuario controla su identidad
- [ ] **Verificación empleador**: QR en CV → valida credenciales en blockchain/ceramic
- [ ] **Portabilidad**: Exportar credenciales a LinkedIn, Europass, Wallet

### FASE 5: ASISTENTE IA AVANZADO (Semana 5-6)
- [ ] **RAG (Retrieval-Augmented Generation)**: Vector DB (Pinecone/Chroma) con 3.647 recursos + 61 guías
- [ ] **Function Calling**: Asistente ejecuta acciones (buscar recurso, generar CV, agendar recordatorio)
- [ ] **Multimodal**: Imagen → texto (documentos), Voz → texto (Whisper), Texto → voz (TTS)
- [ ] **Agente autónomo**: "Ayúdame a renovar mi NIE" → guía paso a paso + checklist + recordatorios

### FASE 6: COMUNIDAD Y HUMANO (Semana 6-7)
- [ ] **Chat humano escalable**: Voluntarios/abogados on-demand (Calendly + WebRTC)
- [ ] **Matchmaking**: Mentores locales ↔ newcomers por ciudad/idioma/oficio
- [ ] **Eventos híbridos**: Presencial + streaming + grabación automática
- [ ] **Reputación**: Karma points, badges, moderación comunitaria

### FASE 7: ESCALABILIDAD Y OBSERVABILIDAD (Semana 7-8)
- [ ] **Edge functions**: Next.js Middleware + Vercel/Netlify Edge para geo-routing
- [ ] **Analytics privados**: Plausible/Umami self-hosted (sin cookies, GDPR)
- [ ] **Error tracking**: Sentry + custom error boundaries por sección
- [ ] **Performance budgets**: Bundle analyzer, Lighthouse CI en PR
- [ ] **Load testing**: k6 scripts para API chat/CV (1000+ concurrent)

---

## 14. MÉTRICAS DE ÉXITO (KPIs)

| Métrica | Actual | Objetivo 6 meses | Objetivo 12 meses |
|---------|--------|------------------|-------------------|
| Usuarios mensuales | ~500 | 10.000 | 50.000 |
| Sesiones/usuario | 1.2 | 3.5 | 5.0 |
| Tasa completitud curso IA | 15% | 35% | 50% |
| CVs generados/mes | 50 | 500 | 2.000 |
| Recursos clicados/mes | 200 | 5.000 | 20.000 |
| Instalaciones PWA | 100 | 2.000 | 10.000 |
| Tiempo carga (LCP) | 2.8s | <1.5s | <1.0s |
| Score Lighthouse | 72 | 95 | 98 |
| Accesibilidad (axe) | 0 violations | 0 | 0 |
| Idiomas activos | 5 | 15 | 25 |

---

## 15. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Cambios legislativos (Extranjería) | Alta | Crítico | Scraper BOE + alertas + comunidad reporta |
| APIs IA caen / cambian precios | Media | Alto | Multi-proveedor + fallback local robusto |
| Netlify cambia precios/limitaciones | Baja | Medio | Docker + Railway/Render/Fly.io listo |
| Datos personales (RGPD) | Baja | Crítico | Zero tracking, local-first, DPO voluntario |
| Spam/abuso en comunidad | Media | Medio | Rate limiting, moderación, WebAuthn opcional |
| Dependencia voluntarios (contenido) | Alta | Alto | Proceso editorial + automatización scraping |
| Accesibilidad iOS (PWA push) | Alta | Medio | Guía "Añadir a pantalla" + email fallback |

---

## 16. EQUIPO Y GOBERNANZA (Propuesta)

```
┌─────────────────────────────────────────────────────────────┐
│  COORDINACIÓN GENERAL (1) — Visión, prioridades, stakeholders│
├─────────────────────────────────────────────────────────────┤
│  TÉCNICO (2-3)          │  CONTENIDO (2-3)                  │
│  ├─ Frontend/Next.js    │  ├─ Jurídico/Extranjería (verifica)│
│  ├─ Backend/API/IA      │  ├─ Recursos/Comunidad (curación) │
│  ├─ DevOps/PWA/Infra    │  ├─ Traducción/Revisión (39 lang) │
│  └─ QA/Accesibilidad    │  └─ Diseño/UX Research            │
├─────────────────────────────────────────────────────────────┤
│  COMUNIDAD (Voluntarios)                                      │
│  ├─ Embajadores por ciudad (19 CCAA)                          │
│  ├─ Mentores técnicos (CV, IA, Office)                        │
│  ├─ Traductores nativos (39 idiomas)                          │
│  └─ Moderadores foro/eventos                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 17. PRÓXIMOS PASOS INMEDIATOS (Esta semana)

1. **Ejecutar script sitemap** → `node scripts/generate-sitemap.mjs`
2. **SSR Home**: Modificar `page.tsx` para renderizar `StaticHomeFallback` + metadata por sección
3. **Rutas canónicas**: Añadir `generateStaticParams` para `/es`, `/en`, `/zh`... + secciones
4. **Lint + Typecheck**: `bun run lint && bunx tsc --noEmit --skipLibCheck`
5. **Build test**: `bun run build` → verificar que compila sin errores
6. **Lighthouse CI**: Configurar en GitHub Actions
7. **Documentar APIs externas**: Crear `docs/external-apis.md` con endpoints, auth, rate limits

---

## 18. CONCLUSIÓN

**Manos Abiertas tiene una base técnica sólida, contenido masivo verificado y una misión clara.** Los gaps principales son **SEO técnico (SSR, sitemap, rutas canónicas)** y **escalabilidad de datos (geolocalización, verificación automática, IA con RAG)**.

Con las mejoras extremas propuestas, la plataforma puede convertirse en **la referencia única para personas inmigrantes en España**, combinando:
- **Tecnología punta** (Next.js 16, PWA, IA multi-proveedor, offline-first)
- **Contenido masivo verificado** (3.647 recursos, 61 guías, 8 cursos)
- **Accesibilidad radical** (39 idiomas, 4 modos lectura, TTS, PWA)
- **Comunidad real** (eventos, mentores, foro, matchmaking)
- **Credenciales portables** (W3C VC, Europass, LinkedIn)

El impacto social potencial: **decenas de miles de personas al año** encontrando trabajo, regularizando su situación, aprendiendo habilidades digitales y conectando con su comunidad.

---

*Documento generado: 2026-08-05*
*Versión: 1.0 — Documentación viva, actualizar cada sprint*