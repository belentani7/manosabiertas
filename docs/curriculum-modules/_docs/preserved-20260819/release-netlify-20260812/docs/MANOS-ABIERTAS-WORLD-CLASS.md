# MANOS ABIERTAS — WORLD-CLASS BLUEPRINT

Fecha: 2026-08-11
Base: estado real del checkout canonico

## 1. Objetivo real

`Manos Abiertas` no necesita "mas features". Necesita convertirse en la mejor plataforma del mundo para una necesidad muy concreta:

- personas migrantes en Espana
- baja alfabetizacion digital
- acceso movil primero
- multilenguaje real
- utilidad inmediata para trabajo, derechos y aprendizaje

La definicion de "mejor del mundo" para este proyecto es:

1. resuelve mejor que nadie las primeras 72 horas de una persona migrante digitalmente vulnerable
2. funciona bien en movil barato, red lenta y sin cuenta obligatoria
3. combina aprendizaje, empleabilidad, derechos y recursos verificados en una sola experiencia coherente
4. es confiable, clara, accesible y mantenible

## 2. Lo que ya existe

El proyecto ya tiene una base fuerte:

- Next.js 16 + React 19 + TypeScript
- PWA y soporte offline
- 39 idiomas
- 3.647+ recursos estructurados
- cursos de IA y Office
- CV builder
- secciones de derechos, comunidad, eventos y herramientas
- componente de mapa de oficinas ya presente
- rutas SEO y `sitemap.ts` ya presentes

Esto significa que el trabajo no es reiniciar. Es cerrar gaps de calidad, producto y operacion.

## 3. Gaps criticos actuales

### P0. Verdad y confianza

- geolocalizacion automatica de recursos cercanos no cerrada
- datos verificados, pero sin pipeline fuerte de refresco y caducidad visible
- sync y perfil aun dependen de backend/auth no consolidados

### P1. Utilidad inmediata

- onboarding no esta todavia orientado a "primeros 10 minutos"
- falta ruta guiada por situacion: sin papeles, empleo, vivienda, idioma, violencia, salud
- falta priorizacion dinamica de recursos segun ciudad, idioma y urgencia

### P2. Plataforma world-class

- falta observabilidad real
- falta bateria QA integral de accesibilidad, locales y mobile
- falta estrategia de contenido vivo y gobierno de datos
- falta capa fuerte de mapas, localizacion y proximidad

## 4. North Star de producto

Cuando una persona entra, en menos de 3 minutos debe poder hacer una de estas cosas:

1. encontrar ayuda real cerca de su ubicacion
2. empezar un itinerario de empleo
3. entender un tramite critico
4. iniciar una ruta de aprendizaje util

En menos de 10 minutos debe poder completar una accion de valor:

1. guardar un recurso
2. iniciar CV
3. entrar a una leccion
4. generar checklist de tramite
5. localizar una oficina o entidad relevante

## 5. Arquitectura objetivo

### Capa 1. Experiencia

- home orientada a situaciones, no a modulos
- acceso por idioma y por urgencia
- mobile-first duro
- accesibilidad WCAG AA como baseline, no como extra

### Capa 2. Datos

- recursos con `source`, `verifiedAt`, `expiresAt`, `region`, `city`, `lat`, `lng`, `languages`, `priority`
- versionado de datos
- pipeline de refresco y revisiones
- etiquetas de confianza visibles en interfaz

### Capa 3. Localizacion

- mapa de oficinas y recursos cercanos
- geocoding y reverse geocoding
- filtros por distancia, categoria e idioma
- fallback sin mapa: lista ordenada por proximidad o ciudad

### Capa 4. Progreso y cuenta

- modo anonimo local
- export/import
- cuenta ligera opcional
- sync progresivo cuando exista backend estable

### Capa 5. IA segura

- ayuda contextual, no chat generico
- respuestas acotadas por seccion
- offline tutor primero
- proveedores remotos opcionales

## 6. Decision tecnica recomendada

### Mapas y localizacion

Fase MVP seria:

- OpenStreetMap como base visual
- geocoding moderado via proveedor con cuota clara
- modelo de datos con coordenadas precalculadas cuando sea posible

Fase robusta:

- `MapTiler` o `Mapbox` para tiles, geocoding y mejor DX
- no depender de Google Maps salvo necesidad fuerte de POI/routing premium

### Backend

- mantener serverless y local-first mientras el producto madura
- no bloquear utilidad por auth
- introducir sync/auth solo donde genere valor real

### Datos

- `src/data` sigue siendo fuente canónica a corto plazo
- migrar a pipeline estructurado antes que a CMS complejo

## 7. Orden correcto de ejecucion

### Fase A. Core world-class

1. rediseñar home por situaciones y urgencias
2. cerrar localizacion y mapa util
3. unificar rutas guiadas de empleo, derechos, recursos y aprendizaje

### Fase B. Trust layer

1. modelo de datos de verificacion y expiracion
2. badges de confianza en UI
3. pipeline de refresh de recursos

### Fase C. Learning and outcomes

1. rutas de aprendizaje por objetivo real
2. progreso y dashboard simples
3. certificacion y exportes

### Fase D. Platform hardening

1. QA i18n
2. QA accesibilidad
3. QA mobile
4. logs, metricas y health real

## 8. Definition of done

No consideramos `Manos Abiertas` world-class hasta que cumpla esto:

- onboarding util en menos de 3 minutos
- experiencia movil excelente
- recursos cercanos por ciudad/proximidad
- datos con estado de verificacion visible
- rutas completas de valor real
- accesibilidad auditada
- SEO tecnico limpio
- contenido y producto coherentes en idiomas prioritarios

## 9. Proximo tramo de implementacion

El siguiente tramo correcto no es rehacer el proyecto entero. Es este:

1. auditar y reforzar `home-section.tsx`
2. cerrar `office-map.tsx` como sistema de localizacion reutilizable
3. extender `resources.ts` y `resources-section.tsx` con proximidad, prioridad y confianza
4. crear una home guiada por necesidades

## 10. Regla de oro

Si una mejora no hace una de estas tres cosas, no es prioritaria:

- reduce confusion
- aumenta utilidad inmediata
- mejora confianza real

