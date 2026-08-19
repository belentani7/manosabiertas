# PROMPT-EXPERIENCIA-ACCESIBLE

> La séptima pieza de la serie — la capa de **accesibilidad cognitiva y digital** de Manos Abiertas.
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica (WCAG 2.2 AA y axe 0 son puertas de calidad)
> - `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia (afirmación / prueba / salida)
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona (Amina, nivel "solo sé usar WhatsApp")
> - `PROMPT-BANCO-DATOS-ABIERTO.md` = catálogo de fuentes; su sección **K. IMÁGENES** referencia los pictogramas ARASAAC
> - `PROMPT-MEDIATECA-AUDIOVISUAL.md` = el Módulo 5, que esta capa también protege (subtítulos, TTS en vídeos)
> - **ESTE** = cómo toda la plataforma se vuelve comprensible para quien apenas lee, apenas toca la pantalla o vive con una discapacidad.
>
> ESTE DOCUMENTO LO EJECUTA OTRO AGENTE SIN MÁS CONTEXTO. Léelo completo antes de tocar código.

---

## 0. Identidad y misión

Eres un **especialista senior en accesibilidad cognitiva y diseño para baja alfabetización digital**. Aplicas a toda la plataforma una capa transversal que ya está prevista en los prompts hermanos: lectura fácil, apoyo visual, audio, botones grandes y navegación por teclado.

Misión en una frase: que cualquier persona, aunque no sepa leer bien o no haya usado otra app que WhatsApp, complete un trámite o entienda un derecho **sola, sin ayuda y sin frustración**.

Regla de oro: si una pantalla exige más de una acción principal, se rediseña. Si una frase no se entiende a la primera lectura, se reescribe. Si un elemento no se puede operar con teclado, se arregla o se elimina.

## 1. Los públicos y su contrato

| Público | Dificultad real | Contrato de la plataforma |
|---|---|---|
| Nivel 0 (solo WhatsApp) | Lee poco, toca poco, se asusta con pantallas llenas | Modo "solo lo esencial": 3 caminos, una acción por pantalla |
| Persona con discapacidad visual | Depende de lector de pantalla y contraste | WCAG 2.2 AA, foco visible, teclado completo, 7:1 en alto contraste |
| Persona con discapacidad motriz | Toca con precisión baja | Objetivos ≥ 44 px, botones gigantes, "atrás" siempre accesible |
| Persona con discapacidad cognitiva | Frases largas y jerga = abandono | Lectura fácil, vocabulario controlado, pictogramas, audio |

Una misma pantalla debe servir a los cuatro. Si sirve solo a uno, falla la capa.

## 2. Niveles de contenido (la columna vertebral)

| Nivel | Lectura | Vocabulario | Apoyo visual | Audio |
|---|---|---|---|---|
| 0 | Frases de máx. 10 palabras | Palabras de uso diario | Pictogramas ARASAAC en cada acción | Botón "escuchar" en todo paso crítico |
| 1 | Frases de máx. 15 palabras | Términos explicados al primer uso | Pictogramas en acciones principales | Audio en trámites |
| 2 | Párrafos de 2-3 frases | Jerga mínima con glosario | Iconos, sin pictogramas | Audio opcional |
| 3 | Texto normal | Glosario disponible | Sin apoyo | Sin exigencia |

El nivel de cada pantalla lo define su módulo (datos existentes en `src/data/`). Esta capa no cambia el contenido: añade el modo de mostrarlo.

## 3. Bloques de construcción

Cada bloque se declara acabado solo cuando su **medida** pasa y su **PRUEBA** se pega en la entrega.

---

### Bloque A — Lectura fácil y glosario integrado

**Alcance:** reescribir textos de alto tráfico (guías de trámites, checklist, botones, mensajes de error) en lectura fácil según el nivel de la pantalla. Un glosario integrado explica cada término técnico (NIE, padrón, cita previa, arraigo) al primer uso, sin cambiar de término a mitad de flujo.

**Datos:** archivo de estilo `src/data/easy-read/es.json` con pares término-simple (por ejemplo "empadronarse" -> "apuntarse en el ayuntamiento"), y el diccionario se traduce en los idiomas prioritarios (es, pt, en, fr, ar) siguiendo la i18n existente.

**Medida de acabado:** el 100% de los botones y el 100% de las guías de trámites están en lectura fácil de su nivel; no hay ninguna frase de nivel 0 con más de 10 palabras; el glosario cubre todos los términos técnicos detectados.

**Prueba obligatoria:**
> AFIRMACIÓN: cada frase de las guías de nivel 0 tiene 10 palabras o menos y todo término técnico tiene su entrada de glosario.
> PRUEBA: script `scripts/audit-easy-read.mjs` que recorre los textos, cuenta palabras por frase, detecta términos técnicos por lista y falla si algún umbral se supera.
> SALIDA: `frases nivel 0 > 10 palabras: 0`, `términos sin glosario: 0`, listado de incidencias corregidas.

### Bloque B — Pictogramas ARASAAC como apoyo visual

**Alcance:** pictogramas ARASAAC (licencia CC BY-NC-SA, uso no comercial, que la plataforma cumple por ser gratuita) junto a las acciones de nivel 0-1: reproducir, escuchar, atrás, siguiente, guardar, llamar. Se usa el repositorio oficial como fuente de descarga (ver sección K del catálogo); cada pictograma se copia al proyecto con su crédito visible.

**Datos:** carpeta `public/pictogramas/{id}.svg` con nombre descriptivo y tabla de mapeo `{ acción, pictograma, nivel }`. No se embebe por URL externa: los archivos viven en el repo para funcionar offline.

**Medida de acabado:** los pictogramas acompañan (no sustituyen) al texto en todas las pantallas de nivel 0-1; cada imagen lleva `alt=""` cuando el texto adyacente ya lo dice, o `alt` descriptivo si el pictograma aporta información; crédito ARASAAC en el pie.

**Prueba obligatoria:**
> AFIRMACIÓN: cada pantalla de nivel 0-1 muestra pictograma + texto en las 3 acciones principales, y todas las imágenes cumplen la regla de `alt`.
> PRUEBA: recorrido axe + auditoría de `alt` con script sobre `public/pictogramas/` y los componentes que los usan.
> SALIDA: `axe: 0 violaciones`, `0 imágenes con alt incorrecto`, `crédito visible`.

### Bloque C — Audio-first: botón "escuchar"

**Alcance:** botón "escuchar" que lee el contenido en voz alta. En pasos críticos de trámites, el audio se muestra antes que el texto y el texto se mantiene como refuerzo. Motores libres permitidos: Piper (WASM en navegador), Coqui, eSpeak (offline, para generación previa). Si Web Speech del navegador ya está integrado, se conserva como primario y los motores libres como refuerzo para redes sin servicio de voz.

**Datos:** componente `AudioReader` compartido (se unifican los TTS existentes si hay duplicados); cola de audio con control de pausa/velocidad; los textos críticos se pre-generan a audio en build cuando el motor lo permite (carpeta `public/audio/{id}.mp3`).

**Medida de acabado:** todo paso crítico de trámite tiene audio; el botón está a una altura de lectura y a un toque; el audio se detiene al navegar y respeta `prefers-reduced-motion` (no parpadeos al leer).

**Prueba obligatoria:**
> AFIRMACIÓN: el 100% de los pasos críticos reproduce audio coherente con el texto en 2 idiomas.
> PRUEBA: test que abre un trámite crítico, pulsa "escuchar", captura que `speechSynthesis` o el reproductor local inicia, y verifica el texto leído contra el visible; grabación opcional.
> SALIDA: `audio iniciado`, `texto leído = texto visible`, `0 errores de consola`.

### Bloque D — Botones gigantes y "atrás" siempre visible

**Alcance:** objetivos táctiles ≥ 44×44 px en toda la app (más en modo "grande"), botones principales con altura ≥ 52 px, y botón "atrás" fijo y visible en toda pantalla que no sea la principal. El "atrás" funciona con historial real (no simulado) y lleva la etiqueta "Volver atrás".

**Datos:** tokens de tamaño en Tailwind (`--tap-target: 44px`, `--btn-lg: 52px`) centralizados; verificación por script sobre los componentes interactivos.

**Medida de acabado:** ningún elemento interactivo de la app tiene altura o anchura útil menor de 44 px en móvil; el "atrás" existe en el 100% de las pantallas de flujo; no hay scroll horizontal.

**Prueba obligatoria:**
> AFIRMACIÓN: todos los objetivos táctiles cumplen 44×44 px y "atrás" está presente y funcional en cada flujo.
> PRUEBA: script Playwright que mide `getBoundingClientRect()` de todos los interactivos en viewport móvil y lista los que no cumplen; además recorre 3 flujos completos verificando el botón "atrás" y el `history.back()`.
> SALIDA: `objetivos < 44px: 0`, `atrás presente en 3/3 flujos`, `historial real funciona`.

### Bloque E — Teclado completo y foco visible

**Alcance:** toda acción es alcanzable solo con teclado: navegación, búsqueda, diálogos, formularios, checklists y el reproductor de la mediateca. Foco visible con contraste ≥ 3:1 sobre el fondo en todos los modos; sin trampas de foco en diálogos (focus-trap con foco inicial y retorno al disparador); orden lógico: salto al contenido, menú, contenido, pie.

**Datos:** revisión de `Button size="icon"` (todos con nombre accesible), `Dialog`/`Sheet` con focus-trap verificado, y estilos `:focus-visible` coherentes en los tokens.

**Medida de acabado:** se puede completar un flujo completo (buscar un recurso → abrirlo → guardarlo en favoritos → salir) solo con teclado; el anillo de foco es visible en todo modo de lectura; axe 0.

**Prueba obligatoria:**
> AFIRMACIÓN: el flujo crítico se completa solo con teclado y el foco es visible en cada paso.
> PRUEBA: `tests/a11y.spec.ts` (Playwright + axe-core) que recorre home, una sección y un diálogo en claro y oscuro, y graba la secuencia de elementos enfocados.
> SALIDA: `axe: 0 violaciones (todos los modos)`, `secuencia de tabulación grabada`, `flujo completado con 0 clicks de ratón`.

### Bloque F — prefers-reduced-motion y WCAG 2.2 AA

**Alcance:** respetar `prefers-reduced-motion` en CSS **y** en JS (framer-motion con `useReducedMotion`): se eliminan animaciones de entrada, desplazamiento y confeti; se mantienen transiciones de estado mínimas. Contraste AA (4.5:1) en texto normal y AAA (7:1) en modo alto contraste; sin información transmitida solo por color.

**Datos:** media query global ya existente en `globals.css`; se extiende a `LazyMotion` (framer-motion) y a cualquier animación nueva; paleta cálida terracota/saffron/oliva sin azul/índigo.

**Medida de acabado:** con `prefers-reduced-motion: reduce` no hay animación de más de 200 ms ni movimiento visible; el contraste pasa en los 4 modos de lectura × 2 temas; axe 0.

**Prueba obligatoria:**
> AFIRMACIÓN: con reduced-motion activo no hay animaciones que causen movimiento y el contraste AA/AAA se cumple.
> PRUEBA: Playwright con `emulateMedia({ reducedMotion: 'reduce' })` + test de contraste automático (o auditoría axe + cálculo de ratios sobre los colores de tokens).
> SALIDA: `0 animaciones > 200 ms con reduce`, `AA/AAA en tablas de contraste`, `axe: 0`.

### Bloque G2 — Primera visita sin barreras

**Alcance:** el arranque para una persona sin experiencia: elegir idioma con un toque grande (con nombre en su idioma y, si procede, en su escritura), nunca un selector técnico ni una pared de ajustes. Después de elegir idioma, un solo mensaje de bienvenida en lectura fácil ofrece los 3 caminos del modo esencial o el modo normal. No hay registro, no hay formularios, no hay pasos previos al contenido útil.

**Datos:** persistencia del idioma elegido en el store (reutilizando la detección por `Accept-Language` ya existente); el flujo es una pantalla, no una secuencia de 4.

**Medida de acabado:** desde que la app abre hasta que la persona ve contenido útil pasan a lo sumo 2 toques y menos de 15 segundos; elegir idioma una vez lo recuerda para siempre en el dispositivo y con el código de cuenta.

**Prueba obligatoria:**
> AFIRMACIÓN: la primera visita llega al contenido útil en ≤ 2 toques y el idioma elegido se mantiene tras recargar.
> PRUEBA: test Playwright que navega con `localStorage` vacío, cuenta los toques hasta ver una guía, y recarga para verificar la persistencia del idioma.
> SALIDA: `toques hasta contenido útil: 2`, `idioma persistido tras recarga`, `tiempo < 15 s`.

### Bloque G — Modo "solo lo esencial"

**Alcance:** un modo que oculta el ruido visual y reduce la pantalla a **3 caminos claros** (recomendado por el Módulo 4 o por la necesidad detectada): por ejemplo "Estoy llegando", "Necesito trabajo", "Me han escrito". Se activa desde un botón grande "Modo fácil" (persistido por código de cuenta) y en la primera visita si la persona lo elige.

**Datos:** estado `modo: 'esencial' | 'normal'` en el store persistente; los 3 caminos se derivan de las rutas existentes, sin inventar secciones nuevas.

**Medida de acabado:** en modo esencial una persona sin ayuda identifica y completa el camino de "Estoy llegando" en ≤ 3 pantallas; el resto del contenido sigue existiendo detrás de los 3 botones, sin ser un callejón sin salida.

**Prueba obligatoria:**
> AFIRMACIÓN: en modo esencial la home muestra exactamente 3 caminos y un flujo de nivel 0 se completa en ≤ 3 pantallas.
> PRUEBA: test con una persona real (o recorrido grabado narrado si no hay persona) cronometrando la tarea; captura de pantalla de la home en ambos modos.
> SALIDA: `3 caminos visibles`, `flujo completado en 3 pantallas`, `tiempo registrado`.

## 4. Cómo verificar la capa (pruebas obligatorias)

| Prueba | Qué demuestra | Cómo | Umbral |
|---|---|---|---|
| axe | Ausencia de violaciones | `@axe-core/playwright` recorrido completo × 2 temas × 4 modos de lectura | 0 violaciones |
| Tabulación grabada | Navegación por teclado | Grabar secuencia de `document.activeElement` en 3 flujos | Orden lógico, sin trampas |
| Contraste | Legibilidad | Cálculo de ratios sobre tokens o auditoría | AA normal, AAA alto contraste |
| Comprensión con persona real | Lectura fácil real | La persona explica qué debe hacer en cada pantalla en ≤ 10 s | 0 pantallas confusas |
| Tarea sin ayuda | Utilidad completa | La persona completa 3 trámites sola, cronometrada | Sin ayuda, ≤ 3 pantallas |

## 5. Checklist de cierre (todas, todas)

- [ ] Frases de nivel 0 ≤ 10 palabras; glosario cubre el 100% de términos técnicos.
- [ ] Pictogramas ARASAAC en nivel 0-1 con crédito y `alt` correctos.
- [ ] Botón "escuchar" en el 100% de pasos críticos, con motor TTS libre.
- [ ] Objetivos táctiles ≥ 44 px; "atrás" en el 100% de pantallas de flujo.
- [ ] Flujo crítico completo solo con teclado; foco visible en todos los modos.
- [ ] `prefers-reduced-motion` respetado en CSS y JS.
- [ ] Modo "solo lo esencial" con 3 caminos y persistido por código.
- [ ] axe 0 en todo el recorrido; contraste AA/AAA verificado.
- [ ] Test de comprensión con persona real registrado (o declarado como pendiente, nunca inventado).

## 6. La línea roja

- No se oculta contenido con `aria-hidden` masivo para "silenciar" problemas.
- No se usa el color como única forma de comunicar estado.
- No se añade un elemento nuevo que no pueda operarse con teclado.
- No se inventan resultados de tests con personas reales: si no hay persona, se narra el recorrido como simulación declarada.

---

## Recordatorio final

Esta capa no es una lista de features: es el contrato de confianza con la persona que más lo necesita.
Si Amina entiende la pantalla, la toca grande, la escucha y la completa sin llamar a nadie: la capa funciona.
Si algo se ve bonito pero nadie sabe qué hacer con él, se corta. La accesibilidad no se mide en líneas: se mide en trámites terminados sin ayuda.
