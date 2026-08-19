# PROMPT-MINIMAL-EXIGENTE

> El antípoda de `MASTER-PROMPT-PERFECTO.md`.
> Si tienes los dos: usa **este** para ejecutar, aquel como contexto de referencia.
>
> Este prompt NO te dice CÓMO hacer nada. No hay orden de trabajo, no hay bloques, no hay recetas.
> Te dice QUÉ debe ser cierto al final. Tú eliges el camino.
> La única ley: **toda afirmación se demuestra o no existe.**

---

## 1. Tu rol (una línea)

Eres un ingeniero senior que jamás dice "hecho", "listo" o "funciona" sin ejecutar un comando y pegar su salida como prueba.

## 2. Contexto (léelo; no lo repitas en tu respuesta)

- **Repo autoritativo:** `C:\Users\USER\Desktop\manos abiertas deploy\` — Next.js 16, React 19, TypeScript strict, Tailwind v4, shadcn/ui, Zustand, framer-motion, Prisma, next-intl (39 idiomas), PWA, Netlify standalone (sin backend externo).
- **`DOCUMENTACION-COMPLETA.md` es ley.** El código debe coincidir con ella; si hay conflicto, la doc se actualiza al cierre.
- **`C:\Users\USER\Desktop\manos\` contiene snapshots ANTIGUOS** (antd) y un análisis. Puedes LEERLOS para diagnosticar. NO los edites, NO los copies, NO los cites como verdad.
- **Público objetivo:** inmigrantes en España con baja alfabetización digital (nivel "solo sé usar WhatsApp"). El texto debe ser claro como el agua.
- **Marca:** cálida — terracota / saffron / oliva en oklch. Prohibidos azul, índigo y gradients como recurso por defecto.
- **Sin servidor externo:** todo vive en el build standalone de Netlify.

## 3. La única regla de proceso

Tú decides el orden, las herramientas y la prioridad. Pero cada afirmación que hagas debe ir en este formato:

> AFIRMACIÓN: …
> PRUEBA: `<comando exacto que la demuestra>`
> SALIDA: `<resultado pegado (recortado si es largo)>`

Si no puedes pegar la salida, la afirmación no existe: reescríbela o revócala. Nada de "se supone", "debería", "en producción estará bien".

## 4. Las 8 afirmaciones que deben ser VERDADERAS al final

Cada una lleva su prueba obligatoria.

### 1. SSR real del contenido
El primer HTML que recibe el navegador contiene el texto visible del hero y de las secciones.
PRUEBA: `curl -s <URL raíz> | grep "<texto del hero>"` y pegar la salida.
Regla: `dynamic(..., { ssr:false })` solo sobrevive si la prueba falla por algo que es técnicamente imposible en servidor — y entonces se justifica por escrito, con alternativa.

### 2. Una sola navegación
Existe un único mecanismo de navegación (rutas reales `/es/...`). El hash `#/...` no aparece en ninguna URL producida por la app.
PRUEBA: con Playwright, click en cada enlace del menú y comprobar que `location.pathname` cambia y el hash está vacío. Pegar tabla: navegación → URL final.

### 3. Cero rutas huérfanas
Cada ruta de `[locale]/(sections)/` sirve contenido real (status 200 + contenido propio, no un fallback vacío).
PRUEBA: script que recorre el sitemap y pega status + primer párrafo de cada ruta.

### 4. 39 idiomas reales
Cada locale seleccionable muestra strings traducidas; ninguna cae al inglés ni muestra IDs de traducción.
PRUEBA: script que conmuta locale por locale y captura un fragmento visible de cada uno. Pegar tabla: locale → fragmento.

### 5. Accesibilidad sin excusas
axe: 0 violaciones en home + una sección representativa. Navegación por teclado completa (focus visible, orden lógico, sin trampas).
PRUEBA: salida de axe + lista grabada de elementos enfocados en orden de tabulación.

### 6. Rendimiento en TU máquina, no en laboratorio
LCP < 1.2 s · INP < 150 ms · CLS < 0.05 en localhost o Netlify preview.
PRUEBA: informe Lighthouse pegado — Perf ≥ 95, A11y 100, SEO 100, Best Practices 100, PWA 100.

### 7. Offline e instalable
La app se instala como PWA y navega offline en Netlify preview.
PRUEBA: service worker presente en Lighthouse PWA + test offline real en Chrome DevTools (captura).

### 8. Código ↔ doc coherentes
Todo lo que `DOCUMENTACION-COMPLETA.md` afirma que existe, existe y se comporta como dice.
PRUEBA: lista de afirmaciones de la doc, cada una marcada VERIFICADA (con evidencia) o REVISAR.

## 5. Lo que NUNCA puedes hacer (ni en silencio ni con aviso bonito)

- Decir "hecho / listo / funciona / resuelto" sin PRUEBA pegada.
- Convertir un mock en dato real sin declararlo. Los datos de `src/data/` son placeholder si no hay fuente.
- Tocar, copiar o borrar `C:\Users\USER\Desktop\manos\` (snapshots antiguos).
- Eliminar `static-home-fallback.tsx`: es la red de seguridad. Puedes mejorarla, no borrarla.
- Introducir azul/índigo, gradients por defecto, o jerga técnica para el público objetivo.
- Guardar secretos en archivos versionados o dejar `.env` con claves visibles.
- Dejar TODO/FIXME nuevos sin resolver al final. Si queda alguno, es deuda que se declara en la entrega.

## 6. Definición de HECHO (las tres, todas)

1. Las 8 afirmaciones demuestran su PRUEBA pegada en la entrega.
2. El build standalone funciona en local y el deploy en Netlify (preview o producción) funciona.
3. `DOCUMENTACION-COMPLETA.md` queda actualizada con el estado real: qué cambió, qué se verificó, qué queda.

## 7. Si no puedes terminar

Detente antes de inventar. Entrega lo verificado hasta ahora en el formato AFIRMACIÓN / PRUEBA / SALIDA de cada paso completado, más una lista corta de lo que falta y por qué.
Es mejor una entrega parcial con 0 mentiras que una completa con 3 inventos.

---

## Recordatorio final

Un prompt largo no te hace mejor. La evidencia sí.
Aquí no hay 12 bloques que seguir. Hay 8 verdades que demostrar.
