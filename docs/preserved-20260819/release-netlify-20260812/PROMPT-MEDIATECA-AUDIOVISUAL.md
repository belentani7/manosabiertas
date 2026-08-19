# PROMPT-MEDIATECA-AUDIOVISUAL

> La sexta pieza de la serie — la capa de **contenido audiovisual** (Módulo 5 de `PROMPT-VISION-PLATAFORMA.md`).
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica (a11y, perf, SSR son puertas de calidad)
> - `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia (afirmación / prueba / salida)
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona (Amina, nivel "solo sé usar WhatsApp")
> - `PROMPT-BANCO-DATOS-ABIERTO.md` = el catálogo de fuentes; su sección **I. VIDEO** alimenta este módulo
> - **ESTE** = cómo se construye la mediateca: reproducción legal, metadatos, subtítulos y estado personal.
>
> ESTE DOCUMENTO LO EJECUTA OTRO AGENTE SIN MÁS CONTEXTO. Léelo completo antes de tocar código.

---

## 0. Identidad y misión

Eres un **ingeniero frontend senior especializado en vídeo accesible y legalidad de contenido**. Construyes el Módulo 5 de Manos Abiertas: la mediateca audiovisual.

Misión en una frase: que una persona con nivel "solo sé usar WhatsApp" encuentre en 2 pantallas un vídeo útil, en su idioma, de una fuente legal, con subtítulos si los necesita, y que su avance no se pierda entre dispositivos.

Cada decisión se justifica por: (a) legalidad estricta del contenido, (b) velocidad en redes lentas, (c) accesibilidad visual y cognitiva, (d) persistencia sin correo ni contraseña. Si una decisión no cumple una de las cuatro, se reconsidera.

## 1. Las 5 reglas legales (no negociables)

1. **Solo embed, nunca descarga.** Todo vídeo se reproduce mediante iframe oficial del proveedor (YouTube embed, player de TED, RTVE/RTP Play). Prohibido descargar, guardar o re-servir el archivo de vídeo con copyright.
2. **Solo fuentes permitidas.** Canales oficiales en YouTube o con filtro Creative Commons, TED/TED-Ed, Khan Academy, NASA/ESA, RTVE/RTP, y las fichas [VID-xx] de la sección I del catálogo `PROMPT-BANCO-DATOS-ABIERTO.md`. Nada fuera de esta lista.
3. **Licencia declarada por ítem.** Ningún ítem entra sin campo `license` relleno. Un vídeo sin licencia clara queda fuera o se marca `VERIFY` y no se muestra.
4. **URL verificada o nada.** Cada URL se prueba con un script HTTP antes de entrar al catálogo final. Una URL muerta se marca `VERIFY` y se oculta de la UI.
5. **Nada inventado.** No se escribe ninguna URL de memoria: cada entrada referencia su ficha [VID-xx] del catálogo y hereda su URL verificada.

## 2. Arquitectura (resumen de una pantalla)

| Capa | Tecnología | Nota |
|---|---|---|
| Datos | `src/data/media-library.ts` | Esquema `MediaItem` de la sección 3 |
| Estado | Zustand persist con clave de cuenta | Persistencia por código de 6 caracteres |
| UI | React 19 + Tailwind v4 (tokens cálidos) | Sin azul/índigo, sin gradients por defecto |
| Reproducción | iframe con `loading="lazy"` | Poster + placeholder, sin autoplay |
| Subtítulos | Pipeline local Whisper → SRT | Solo transcripción de contenido embebido legalmente |

## 3. Esquema de datos (fuente de verdad)

```ts
type MediaItem = {
  id: string;                 // slug estable, p.ej. "khan-fracciones-01"
  title: string;              // título en el idioma del ítem
  url: string;                // URL verificada heredada del catálogo
  embed: { provider: 'youtube' | 'ted' | 'rtve' | 'rtp' | 'khan'; videoId: string };
  channel: string;            // nombre del canal o fuente oficial
  duration: string;           // "MM:SS", comprobada contra el vídeo real
  language: string;           // código BCP-47: es, pt, en, fr, ar, ...
  level: 0 | 1 | 2 | 3;       // 0 = absoluto (nivel "solo sé usar WhatsApp")
  category: string;           // ver lista de categorías en la sección 5
  verified: boolean;          // URL comprobada por el script HTTP
  license: string;            // "CC BY", "CC BY-SA", "dominio público", "streaming público"
  subtitles: { src?: string; auto?: boolean };  // ruta al SRT local o null
};
```

El estado personal se guarda bajo la clave del código de cuenta (ver Módulo 1 de `PROMPT-VISION-PLATAFORMA.md`):

```ts
type MediaState = {
  watched: Record<string, { watchedAt: string; progress: number }>;
  later: string[];            // ids del "ver más tarde"
};
```

Regla de sincronización: `watched`, `later` y `progress` se persisten con el código de cuenta. Dos dispositivos con el mismo código muestran el mismo estado. Si hay conflicto entre versiones, gana la de más progreso acumulado y se informa al usuario en pantalla.

## 4. Catálogo mínimo de ejemplo (15 ítems)

Los ítems reales heredan URL, idioma y licencia de las fichas [VID-xx] del catálogo. Esta tabla define el mínimo aceptable; cada ítem debe estar verificado antes de publicarse.

| ID | Título orientativo | Fuente (ficha catálogo) | Categoría | Nivel | Idioma | Tipo de embed |
|---|---|---|---|---|---|---|
| MED-01 | Sumas y restas para empezar | [VID-02] Khan Academy ES | Matemáticas | 0 | es | YouTube |
| MED-02 | Fracciones con ejemplos | [VID-02] Khan Academy ES | Matemáticas | 1 | es | YouTube |
| MED-03 | Números para el mercado | [VID-02] Khan Academy PT | Matemáticas | 0 | pt | YouTube |
| MED-04 | Por qué dormir bien importa | [VID-01] TED-Ed | Ciencia | 1 | en | TED |
| MED-05 | Cómo funciona tu cerebro | [VID-01] TED (charla) | Ciencia | 2 | en | TED |
| MED-06 | Qué es el NIE y cómo pedirlo | [VID-19] SEPE | Derechos y trámites | 0 | es | YouTube |
| MED-07 | Derechos al buscar empleo | [VID-19] SEPE | Empleo | 1 | es | YouTube |
| MED-08 | No caigas en estafas online | [VID-20] INCIBE | Seguridad | 0 | es | YouTube |
| MED-09 | La Tierra vista desde el espacio | [VID-06] NASA | Ciencia | 0 | en | YouTube |
| MED-10 | Nuestro Sistema Solar | [VID-06] ESA | Ciencia | 1 | en | YouTube |
| MED-11 | Cultura de España en vídeo | [VID-08] RTVE Play | Cultura | 1 | es | RTVE |
| MED-12 | Aprender portugués hablado | [VID-09] RTP Play | Idioma | 1 | pt | RTP |
| MED-13 | Empezar a programar (ES) | [VID-03] freeCodeCamp ES | Digital | 1 | es | YouTube |
| MED-14 | Primeros pasos en Excel | [VID-03] freeCodeCamp EN | Oficina | 1 | en | YouTube |
| MED-15 | La Unión Europea para todos | [VID-15] EuroparlTV | Ciudadanía | 1 | multilingüe | EuroparlTV |
| MED-16 | Historia animada de la ciencia | [VID-04] Crash Course | Ciencia | 2 | en | YouTube |

Regla editorial: se priorizan los ítems que tocan la vida real del inmigrante (idioma, trabajo, trámites, seguridad) sobre el entretenimiento. Si una ficha del catálogo es freemium o no permite embed (p.ej. contenido de pago), se muestra solo como enlace externo, nunca embebido, y con etiqueta clara "enlace externo".

## 5. Bloques de construcción

Cada bloque se declara acabado solo cuando su **medida** pasa y su **PRUEBA** se pega en la entrega.

---

### Bloque A — Grid accesible con poster placeholder

**Alcance:** grilla de tarjetas (1 columna móvil, 2-4 escritorio) con: poster del vídeo, título, canal, duración, chip de idioma, chip de nivel, botón "más tarde". El iframe NO se monta hasta que el usuario pulsa "reproducir".

**Datos:** `MediaItem[]` filtrado; poster desde miniatura oficial del proveedor con `alt` descriptivo; si no hay miniatura, placeholder de color cálido con el título en fuente mono y la etiqueta "Imagen no disponible".

**Medida de acabado:** grid accesible en móvil y escritorio; el DOM inicial no contiene ningún `<iframe>` (solo después de la interacción); la tarjeta es un elemento con `button`/`a` real, no un `div` clicable.

**Prueba obligatoria:**
> AFIRMACIÓN: la grilla se navega solo con teclado y no monta ningún iframe hasta pulsar reproducir.
> PRUEBA: `tests/mediateca.spec.ts` con Playwright — teclea `Tab` por 3 tarjetas, pulsa Enter en la primera y comprueba que solo entonces aparece un `iframe[src]`; además `browser.evaluate(() => document.querySelectorAll('iframe').length)` en carga inicial.
> SALIDA: `0 iframes en carga inicial`, `1 iframe tras reproducir`, orden de tabulación grabado.

### Bloque B — Reproductor embebido legal

**Alcance:** componente `MediaPlayer` que construye el iframe oficial según `provider`: YouTube (`youtube-nocookie.com/embed/{id}`), TED, RTVE/RTP. Sin SDKs de terceros, sin descargas, sin `download` en el HTML.

**Datos:** campo `embed` de `MediaItem`. El iframe lleva `title` (igual al del vídeo), `allow="fullscreen; encrypted-media; picture-in-picture"`, `loading="lazy"`, `referrerpolicy="strict-origin-when-cross-origin"` y `sandbox` mínimo viable (`allow-scripts allow-same-origin allow-presentation`).

**Medida de acabado:** el reproductor funciona para los 5 proveedores; el CSP actual permite el origen del proveedor (se añade a `frame-src` de forma justificada en `next.config.ts`); el foco entra y sale del iframe sin trampas.

**Prueba obligatoria:**
> AFIRMACIÓN: el iframe se genera por proveedor, con origen correcto y sin errores de consola.
> PRUEBA: ejecutar `bun run build`, abrir cada ítem de la tabla de la sección 4 y capturar consola del navegador + lista de peticiones a los orígenes permitidos.
> SALIDA: `0 errores de consola`, `0 peticiones a orígenes fuera de la lista permitida`, CSP validada.

### Bloque C — Búsqueda y filtros (categoría, idioma, nivel)

**Alcance:** barra de búsqueda por texto + filtros combinables: categoría, idioma, nivel, "solo con subtítulos". Resultados contados en voz alta con `aria-live="polite"`. Orden: recomendados (idioma del usuario primero) y por duración.

**Datos:** índice en memoria sobre `MediaItem[]`. Búsqueda sobre `title`, `channel`, `category` (con normalización de acentos). Para 200 ítems no se necesita índice externo; se usa `useDeferredValue` + `useMemo`.

**Medida de acabado:** cualquier combinación de filtros devuelve la grilla correcta en menos de 100 ms (móvil gama baja, sin bloqueo del main thread); el estado de filtros sobrevive a recarga.

**Prueba obligatoria:**
> AFIRMACIÓN: filtrar por idioma "pt" y nivel "0" devuelve exactamente los ítems marcados con `language: 'pt'` y `level: 0`.
> PRUEBA: test con Playwright que selecciona los dos filtros y compara el conjunto de ids renderizados contra la expectativa del dataset; además un `performance.now()` alrededor del filtrado.
> SALIDA: `ids correctos`, `tiempo de filtrado < 100 ms`, `0 errores de consola`.

### Bloque D — "Ver más tarde" y persistencia por código de cuenta

**Alcance:** botón "más tarde" en cada tarjeta y una vista "Mis vídeos" que agrupa: pendientes (más tarde), en curso (progreso > 0 y < 100) y vistos. Progreso guardado cuando el vídeo llega al 90% (visto) o en cada salida.

**Datos:** `MediaState` (sección 3) persistido con Zustand bajo la clave del código de cuenta. Exportación/importación del estado opcional si el Módulo 1 la define.

**Medida de acabado:** crear/restaurar el estado con el mismo código de 6 caracteres en dos pestañas reproduce la misma lista; un vídeo al 90% aparece en "vistos"; el botón cambia de estado visual y accesible (`aria-pressed`).

**Prueba obligatoria:**
> AFIRMACIÓN: el estado personal sobrevive a recarga y viaja entre dispositivos mediante el código.
> PRUEBA: test E2E — añadir 2 ítems a "más tarde", simular progreso al 92% en uno, recargar la página y, después, rehidratar el store con un segundo código y verificar el estado.
> SALIDA: `lista idéntica tras recarga`, `código B recupera la misma lista`, `vídeo al 92% en "vistos"`.

### Bloque E — Subtítulos (Whisper → SRT)

**Alcance:** pipeline local que genera o regenera el SRT de un ítem cuando el proveedor no lo ofrece en el idioma deseado: (1) extraer el audio del stream permitido, (2) transcribir con Whisper (versión pequeña/`tiny`, formato `srt`), (3) revisar y guardar como `public/subs/{id}.{lang}.srt`, (4) servir el SRT localmente y asociarlo al iframe cuando el proveedor permite subtítulos externos.

**Datos:** `subtitles.src` del `MediaItem`; carpeta `public/subs/`. El pipeline se documenta como script (`scripts/gen-subs.mjs`) y corre offline en la máquina del mantenedor; no corre en el navegador.

**Medida de acabado:** el ítem MED-01 (o el elegido como piloto) tiene SRT en el idioma del usuario con sincronización verificada contra el audio; el script regenera el SRT desde cero sin intervención.

**Prueba obligatoria:**
> AFIRMACIÓN: el SRT generado se sincroniza con el vídeo en los primeros 60 segundos (desfase < 1 s por línea).
> PRUEBA: script que compara los timestamps de las 10 primeras líneas del SRT contra los marcadores de tiempo del vídeo original (o contra una transcripción manual de referencia) y lo documenta en `docs/subs-verificacion.md`.
> SALIDA: `desfase máximo < 1 s`, `10/10 líneas sincronizadas`, SRT servido desde `/subs/{id}.{lang}.srt` con `200`.

### Bloque F — Metadatos, licencia y "Acerca de este vídeo"

**Alcance:** en cada ficha, panel desplegable con: título, canal, duración, idioma, nivel, categoría, licencia exacta, fuente con enlace (heredado del catálogo) y fecha de verificación. Texto en lectura fácil. El usuario debe poder responder "¿puedo confiar en esto?" y "¿me sirve a mí?".

**Datos:** todos los campos de `MediaItem` mostrados de forma legible; la licencia se escribe con palabra humana ("Puedes verlo gratis y legal") además del código oficial.

**Medida de acabado:** el panel se abre y cierra por teclado, los datos mostrados coinciden 1:1 con el dataset, y no aparece ningún ítem con `verified: false` en la UI pública.

**Prueba obligatoria:**
> AFIRMACIÓN: el 100% de los ítems visibles tiene `verified: true` y `license` no vacío.
> PRUEBA: script que recorre `media-library.ts`, filtra `verified === false || !license` y falla si el conjunto visible no es vacío; además chequeo manual del panel en un ítem.
> SALIDA: `0 ítems no verificados en UI`, `0 ítems sin licencia`, panel operable por teclado.

## 6. Checklist de cierre (todas, todas)

- [ ] Los 5 proveedores reproducen en el iframe oficial; sin descargas.
- [ ] El grid no monta iframes hasta la interacción; sin autoplay.
- [ ] Búsqueda + 3 filtros combinables, con `aria-live` en los resultados.
- [ ] "Ver más tarde", "vistos" y "progreso" persisten con el código de cuenta.
- [ ] Al menos un SRT generado y verificado con el pipeline Whisper.
- [ ] 100% de ítems visibles con `verified: true` y `license`.
- [ ] axe 0 violaciones en la mediateca (capa técnica) y sin errores de consola.
- [ ] Test automatizado (`tests/mediateca.spec.ts`) en verde.

## 7. Evidencia de utilidad (capa persona)

- **PRUEBA A:** una persona real con perfil bajo completa la tarea "encuentra un vídeo para aprender el idioma" sin ayuda, cronometrada.
- **PRUEBA B:** alguien que nunca ha visto la app abre una tarjeta al azar y dice en 10 segundos qué debe hacer (reproducir, guardar, más tarde).
- Si cualquiera de las dos falla, se rediseña la pantalla; no se justifica el fallo.

---

## Recordatorio final

La mediateca no es un canal de vídeos: es la prueba de que el contenido útil puede ser legal, accesible y en el idioma de quien llega.
Solo embed, solo fuentes verificadas, solo subtítulos que realmente sirven. Un vídeo pirateado o roto es un compromiso roto con la persona que más confía en la plataforma.
Si algo no se puede hacer legalmente, no se hace; se muestra como enlace externo o no se muestra.
