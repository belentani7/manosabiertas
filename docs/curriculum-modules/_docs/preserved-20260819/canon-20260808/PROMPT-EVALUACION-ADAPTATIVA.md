# PROMPT-EVALUACION-ADAPTATIVA

> La séptima pieza de la serie — la **capa de medición** (Módulo 6 del plan maestro).
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica · `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona · `PROMPT-VISION-PLATAFORMA.md` = capa de visión (12 módulos)
> - `PROMPT-BANCO-DATOS-ABIERTO.md` = capa de recursos · `PROMPT-GAMIFICACION.md` = capa de motivación (M2)
> - **ESTE** = medir para enseñar: quizzes con situaciones reales, dificultad adaptativa y fuentes visibles.
>
> ESTE DOCUMENTO LO EJECUTA OTRO AGENTE. Está escrito para ser autosuficiente: lo lees y, sin más contexto, construyes el Módulo 6 completo — sin backend — y demuestras cada bloque con un comando y su salida.

---

## 0. Identidad y misión (léelo en voz alta antes de tocar código)

Eres un **agente de evaluación educativa**. Construyes el MÓDULO 6 del plan maestro (`PROMPT-VISION-PLATAFORMA.md`, sección 2, M6): el centro de evaluaciones. Quizzes con temporizador, feedback inmediato con explicación y fuente, recompensa XP, reintento con nota acumulada y **dificultad adaptativa** (test de nivel inicial de 5 preguntas que clasifica al usuario en nivel 0–3).

Una sola idea guía: **las preguntas salen de la vida real del inmigrante, nunca de la academia.** Si la pregunta es una trampa o está inventada sin fuente, no entra.

## 1. Contexto que asumes (léelo; no lo repitas en tu respuesta)

- Repo: `C:\Users\USER\Desktop\manos abiertas deploy\` — Next.js 16, React 19, TypeScript strict, Tailwind v4, shadcn/ui, Zustand 5, next-intl (39 idiomas), PWA, Netlify standalone (sin backend externo). Existe `bun.lock`: **usa bun para pruebas**.
- `DOCUMENTACION-COMPLETA.md` es ley; se actualiza al cierre.
- Dependencias entre módulos: M1 (código de cuenta, guarda el nivel en `PlatformUser.level`), M2 (XP: el quiz llama a `registerQuiz`), M3 (cursos: el quiz final es por curso), M4 (rutas: consume `level` para recomendar). Si M1/M2 aún no existen, la capa de evaluación funciona con un nivel local y deja las llamadas de integración preparadas.
- Las fuentes de las preguntas se toman del catálogo `PROMPT-BANCO-DATOS-ABIERTO.md` (fichas `GOV-ES-xx`, guías de acogida, SEPE, Seguridad Social, etc.). **No se inventa ninguna URL.** Si una fuente no está en el catálogo, primero se añade al catálogo y luego se cita.
- Marca cálida: terracota / saffron / oliva en oklch. Prohibidos azul, índigo y gradients.
- Público: nivel "solo sé usar WhatsApp". Botones grandes (≥ 44 px), una pregunta por pantalla, audio en los pasos clave (reusa `src/hooks/use-speech.ts`).

## 2. Reglas anti-jerga y anti-trampa (no negociables)

1. **Situación real primero.** Cada pregunta abre con un contexto real ("te llega una carta de extranjería que dice *archivado*", "un vecino te ofrece trabajo en negro"). Las preguntas de academia ("¿qué es un adjetivo?") solo existen dentro de los cursos de idioma, y aún así en contexto conversacional ("te preguntan *¿de dónde eres?* — ¿qué respondes?").
2. **Sin preguntas inventadas sin fuente.** Cada pregunta y cada explicación declara su fuente mediante una ficha del catálogo. Sin fuente, la pregunta se marca `verified: false` y la app la muestra con la etiqueta visible "contenido sin verificar".
3. **El idioma del banco es el idioma de la pregunta.** Traducir no es adaptar: las preguntas de es/pt/en/fr/ar las revisa un hablante nativo antes de marcarlas `verified: true`.
4. **Se pregunta para enseñar, no para pillar.** Cada pregunta lleva una explicación que enseña aunque falles, con la fuente de donde sale el dato.
5. **Medir no es castigar.** El nivel resultante se usa para recomendar, nunca para bloquear acceso ni para avergonzar. Un nivel bajo es un punto de partida, no una etiqueta.

## 3. Esquema de datos

```ts
type Difficulty = 0 | 1 | 2 | 3;

type SourceRef = { ref: string; url?: string };   // ref = ficha del catálogo, p. ej. "GOV-ES-04"

interface Question {
  id: string;                 // "q-gov-nie-001"
  language: LanguageCode;     // es | pt | en | fr | ar | ...
  courseId: string;           // curso al que pertenece, o "level-test"
  difficulty: Difficulty;
  situation: string;          // contexto real, 1 frase, sin jerga
  prompt: string;             // pregunta, máx 25 palabras
  options: string[];          // 4 opciones, máx 8 palabras cada una
  correctIndex: number;       // 0-3
  explanation: string;        // por qué es correcta; enseña aunque falles
  source: SourceRef;          // ficha del catálogo PROMPT-BANCO-DATOS-ABIERTO.md
  verified: boolean;          // false => se muestra como "contenido sin verificar"
}

type GeneratedQuestion = Question & {
  generatedAt: string;        // ISO 8601
  generator: 'manual' | 'llm' | 'template';
  approvedBy?: string;        // hablante nativo / revisor que la verificó
};

interface QuizResult {
  quizId: string; courseId: string; language: LanguageCode;
  userId: string;             // código de 6 caracteres (M1)
  score: number;              // 0-100 del intento actual
  bestScore: number;          // nota acumulada = mejor de los intentos
  correct: number; total: number;
  attempts: number;           // n-ésimo intento
  difficulty: Difficulty;     // dificultad objetivo del quiz
  userLevel: number;          // nivel del usuario al jugar
  durationSec: number;
  perQuestion: { questionId: string; correct: boolean; chosen: number; timeSec: number }[];
  finishedAt: string;
}
```

Dos bancos de datos: `src/data/questions/<language>.ts` (preguntas por idioma) y `src/data/questions/level-test.ts` (las 5 preguntas del test de nivel, por idioma). Un solo `schema.ts` compartido con la capa de visión; nada de duplicar tipos por archivo.

## 4. BLOQUE 1 — Banco de preguntas por idioma

**Alcance:** banco estructurado `Question[]` por idioma, alimentado por el catálogo de fuentes. Umbrales mínimos honestos (traducir 39 idiomas a mano es imposible; la regla lo declara, no lo oculta):

| Idioma | Preguntas mínimas | Cursos cubiertos | Verificación |
|---|---:|---|---|
| es | 120 | todos | nativa, `verified` |
| pt | 80 | todos | nativa, `verified` |
| en | 40 | básicos | nativa, `verified` |
| fr | 40 | básicos | nativa, `verified` |
| ar | 40 | básicos (RTL) | nativa, `verified` |
| resto de los 39 | 10 | reutilizan es/pt | traducción automática, SIEMPRE `verified: false` con etiqueta visible |

**Datos:** `verified: true` exige `source.ref` existente en el catálogo y `approvedBy` de un revisor nativo. Las preguntas traducidas por máquina llevan `generator: 'llm'` y `verified: false`.

**Acabado:** el audit reporta por idioma nº de preguntas y nº verificadas; todo `verified: true` tiene ficha del catálogo.

> AFIRMACIÓN: para `es` y `pt` hay ≥ 120 y ≥ 80 preguntas respectivamente, todas con `source.ref` de una ficha del catálogo y 0 sin situación.
> PRUEBA: `bun run scripts/audit-questions.mjs`
> SALIDA: (pega la tabla del script: idioma → total → verificadas → sin fuente → sin situación)

## 5. BLOQUE 2 — Test de nivel inicial (5 preguntas, clasificador 0–3)

**Alcance:** `classifyLevel(respuestas)` pura y determinista. Las 5 preguntas tienen dificultades objetivo `[0, 1, 2, 3, 3]` y se presentan de menor a mayor (Amina no empieza con la más difícil). Puntuación ponderada: acierto en dificultad `d` suma `d + 1`; fallo suma 0. Máximo: `1 + 2 + 3 + 4 + 4 = 14`.

| Puntuación | Nivel | Perfil |
|---:|---:|---|
| 0 – 3 | 0 | Absoluto: empezar desde cero |
| 4 – 6 | 1 | Básico |
| 7 – 10 | 2 | Intermedio |
| 11 – 14 | 3 | Avanzado |

**Datos:** el resultado se guarda en `PlatformUser.level` (M1) y se usa para la ruta recomendada (M4) y para la adaptación posterior.

**Acabado:** la tabla de clasificación se cumple en los 5 casos canónicos del test.

> AFIRMACIÓN: 5/5 aciertos → nivel 3; acierto solo en dificultad 0 → nivel 0; aciertos 0/5 → nivel 0; fallar solo la última d3 (10/14) → nivel 2.
> PRUEBA: `bun test tests/evals/level-test.test.ts`
> SALIDA: (pega el resumen con los 5 casos canónicos `pass`)

## 6. BLOQUE 3 — Adaptación de dificultad

**Alcance:** función pura `nextLevel(level, score)` que ajusta el nivel tras cada evaluación:

| Resultado de la evaluación | Nuevo nivel |
|---|---|
| score ≥ 80 | `level + 1` (tope 3) |
| score < 50 | `level - 1` (suelo 0) |
| 50 ≤ score < 80 | sin cambio |

El selector de preguntas `selectQuestions(bank, courseId, language, userLevel, count = 6)` es determinista: extrae del banco del curso `1` pregunta de nivel `userLevel - 1`, `3` de `userLevel`, `1` de `userLevel + 1` y `1` de `userLevel` (repaso) — respetando el rango 0–3 — con semilla fija derivada de `quizId` + `attempt` para que el mismo intento repita la misma selección.

**Datos:** `userLevel` persiste en `PlatformUser.level`; `selectQuestions` no depende del reloj.

**Acabado:** dos usuarios en niveles distintos con el mismo quiz reciben preguntas distintas de dificultad coherente con su nivel; el ajuste tras cada quiz sigue la tabla.

> AFIRMACIÓN: `nextLevel(1, 90) === 2`, `nextLevel(1, 40) === 0`, `nextLevel(3, 95) === 3`, y un usuario nivel 0 nunca recibe preguntas de dificultad 3.
> PRUEBA: `bun test tests/evals/adaptation.test.ts`
> SALIDA: (pega el resumen)

## 7. BLOQUE 4 — Quiz final por curso

**Alcance:** 6 preguntas por curso (la selección del Bloque 3), una por pantalla, temporizador por pregunta y control global.

- **Temporizador por pregunta:** 30 s (nivel 0–1), 25 s (nivel 2), 20 s (nivel 3). Una pregunta sin responder al agotarse el tiempo cuenta como fallo. Margen global del quiz: `6 × tiempo + 10 s`.
- **Feedback inmediato** tras cada respuesta: correcto/incorrecto + explicación con fuente visible (botón "fuente" que abre la ficha del catálogo) + botón "escuchar" (TTS, `use-speech.ts`).
- **Recompensa XP:** se conecta al Módulo 2 (`registerQuiz`): aprobar (≥ 60 %) → 30 XP; 100 % → +20 extra. La XP se otorga **solo la primera vez** que se aprueba cada quiz (anti-farm: reintentar no duplica XP).
- **Reintento con nota acumulada:** el usuario puede reintentar cuantas veces quiera; la nota que se muestra es `bestScore = max(bestScore, scoreActual)`. El desglose por pregunta del último intento se guarda.

**Datos:** `QuizResult` completo en la store de evaluaciones, persistido bajo el código de cuenta (M1); `bestScore` por `courseId` también en `PlatformUser.evalScores`.

**Acabado:** quiz completado → nota, explicaciones con fuente, XP registrada una vez, `bestScore` actualizado.

> AFIRMACIÓN: primer intento con 62 % entrega 30 XP; segundo intento con 85 % actualiza `bestScore` a 85 y NO entrega XP de nuevo.
> PRUEBA: `bun test tests/evals/quiz.test.ts`
> SALIDA: (pega el resumen; incluye el caso anti-farm)

## 8. BLOQUE 5 — UI y accesibilidad

**Alcance:** una pregunta por pantalla; botones de opción de tamaño táctil (≥ 44 px); temporizador visual (barra; estática si `prefers-reduced-motion: reduce`); botón "no sé" (cuenta como fallo honesto, sin mensaje punitivo); texto en el idioma del banco; sin jerga. Pantalla final: nota, desglose por pregunta (correcto/incorrecto + explicación), XP ganada, botón "reintentar" y botón "fuente".

**Datos:** estado del quiz (pregunta actual, respuestas, tiempo restante) en un store Zustand local a la evaluación; nada de eso vive en el motor de gamificación.

**Acabado:** recorrido completo por teclado (respuesta, siguiente, reintentar); con `reduced-motion` no hay animaciones de temporizador ni transiciones.

> AFIRMACIÓN: con `matchMedia` reducido simulado, el componente de temporizador no registra animaciones (sin `requestAnimationFrame`) y el quiz es operable por teclado hasta el final.
> PRUEBA: `bun test tests/evals/quiz-ui.test.ts` (mock de `matchMedia` y `requestAnimationFrame`)
> SALIDA: (pega el resumen; 0 animaciones registradas)

## 9. BLOQUE 6 — Auditoría anti-jerga y anti-trampa

**Alcance:** script de auditoría estricto que revisa TODO el banco:

- Cada pregunta tiene `situation` no vacía y de ≤ 25 palabras en `prompt`.
- En cursos que no son de idioma, **0 preguntas** que empiecen por "¿Qué es…?" (patrón de academia) ni con tecnicismos del listado (`NIE` debe aparecer siempre con su explicación adjunta si se usa en el prompt o en `situation`).
- Todo `verified: true` tiene `source.ref` de una ficha del catálogo y `approvedBy`.
- No hay respuestas duplicadas entre `options` de una misma pregunta.

**Datos:** listado `FORBIDDEN_PATTERNS` dentro del script, explícito y ampliable.

**Acabado:** el audit pasa con 0 violaciones o devuelve la lista exacta de preguntas a corregir.

> AFIRMACIÓN: el audit reporta 0 preguntas de academia en cursos no-idioma y 0 preguntas `verified: true` sin fuente del catálogo.
> PRUEBA: `bun run scripts/audit-questions.mjs --strict`
> SALIDA: (pega el informe: total revisadas, violaciones, preguntas a corregir — 0 si es limpio)

## 10. BLOQUE 7 — Integración y tipado

**Alcance:** conexiones con M1 (guarda `level` y `evalScores` bajo el código de cuenta), M2 (`registerQuiz` con `{ score, firstTry, perfect }`), M3 (el botón "evaluación" aparece solo en cursos con quiz final) y M4 (el nivel del test inicial alimenta la ruta recomendada). Si M1/M2 no existen, se dejan los `TODO` documentados y las llamadas en una capa aislada que no rompe el build.

**Acabado:** `bunx tsc --noEmit` limpio, `npm run lint` sin errores nuevos y build standalone sin roturas.

> AFIRMACIÓN: el proyecto compila con strict, sin `any` ni `ts-ignore` nuevos, y el lint pasa.
> PRUEBA: `bunx tsc --noEmit` y `npm run lint`
> SALIDA: (pega las dos salidas: sin errores)

---

## 11. Definición de ACABADO (Módulo 6 — todas)

1. El test de nivel (5 preguntas) clasifica 0–3 según la tabla y el nivel alimenta la adaptación.
2. Los quizzes finales tienen temporizador, feedback inmediato con explicación y fuente, XP (una vez por aprobado) y reintento con `bestScore`.
3. El banco por idioma cumple los umbrales de la tabla y toda pregunta `verified: true` tiene ficha del catálogo.
4. El audit anti-jerga/anti-trampa pasa sin violaciones.
5. Todo es determinista: mismas respuestas → misma clasificación, misma selección y misma nota.

## 12. Lo que NUNCA se hace (ni en silencio)

- Preguntas de academia fuera de los cursos de idioma, o preguntas inventadas sin fuente.
- El nivel como castigo: nada de bloquear contenido ni mensajes que avergüencen a un nivel 0.
- Traducción automática presentada como contenido verificado (siempre etiquetada).
- XP duplicada por reintentos, o temporizadores que penalicen más allá del "respuesta en blanco = fallo".
- URLs inventadas: toda fuente sale del catálogo `PROMPT-BANCO-DATOS-ABIERTO.md`.

---

## Recordatorio final

Una evaluación que no enseña es un examen; esta plataforma no examina, acompaña.
Cada pregunta debe nacer de una situación que Amina pueda vivir mañana, y cada explicación debe dejarle algo aunque falle.
La fuente es tu garantía de verdad: sin ficha del catálogo, la pregunta no existe.
Conecta el nivel al módulo M4 y la XP al M2, y la medición habrá cumplido su trabajo.
