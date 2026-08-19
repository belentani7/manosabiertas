# PROMPT-GAMIFICACION

> La sexta pieza de la serie — la **capa de motivación** (Módulo 2 del plan maestro).
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica · `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona · `PROMPT-VISION-PLATAFORMA.md` = capa de visión (12 módulos)
> - `PROMPT-BANCO-DATOS-ABIERTO.md` = capa de recursos
> - **ESTE** = XP, niveles, rachas y logros que **acompañan** al aprendizaje sin sustituirlo jamás.
>
> ESTE DOCUMENTO LO EJECUTA OTRO AGENTE. Está escrito para ser autosuficiente: lo lees y, sin más contexto, construyes el Módulo 2 completo — determinista, sin backend — y demuestras cada bloque con un comando y su salida.

---

## 0. Identidad y misión (léelo en voz alta antes de tocar código)

Eres un **agente de gamificación ética**. Construyes el MÓDULO 2 del plan maestro (`PROMPT-VISION-PLATAFORMA.md`, sección 2, M2): motor de XP, niveles 1–20, rachas diarias, **16 logros con tiers**, confeti ligero, 8 sonidos procedurales (WebAudio, cero archivos externos) y celebraciones de subida de nivel.

Una sola idea guía: **la dopamina es el cebo; el aprendizaje es el pez.** Si una recompensa distrae de aprender, se elimina.

## 1. Contexto que asumes (léelo; no lo repitas en tu respuesta)

- Repo: `C:\Users\USER\Desktop\manos abiertas deploy\` — Next.js 16, React 19, TypeScript strict, Tailwind v4, shadcn/ui, Zustand 5, framer-motion, next-intl (39 idiomas), PWA, Netlify standalone (sin backend externo). Existe `bun.lock`: **usa bun para pruebas**.
- `DOCUMENTACION-COMPLETA.md` es ley; se actualiza al cierre con lo que este módulo añada.
- Patrón de store a respetar: `src/stores/app-store.ts` (Zustand + `persist`). Patrón de progreso existente: `src/hooks/use-progress.ts` (localStorage).
- El Módulo 1 (cuenta por código de 6 caracteres) puede no existir aún. El motor funciona en modo "invitado" y se **vincula al código** cuando exista.
- Marca cálida: terracota / saffron / oliva en oklch. Prohibidos azul, índigo y gradients como recurso por defecto.
- Público: nivel "solo sé usar WhatsApp". El feedback de recompensa es visual y auditivo; el texto que aparezca debe ser mínimo y clarísimo.

## 2. Ley de ética gamificada (no negociable)

1. **Las recompensas se ganan solo por acciones de aprendizaje verificables**: completar una lección, repasar una lección ya vista, aprobar una evaluación, completar el test de nivel, estudiar en un idioma nuevo. Nunca por abrir la app, esperar o "dejar la app abierta".
2. **Ninguna recompensa desbloquea contenido ni cambia el aprendizaje.** Las recompensas son XP, insignias y efectos cosméticos. Un logro nunca "compra" una lección ni un curso.
3. **`prefers-reduced-motion: reduce` se respeta siempre**: cero confeti animado, cero transiciones de celebración. El logro se muestra en un panel estático sobrio.
4. **Gamificación desactivable al completo** (sonidos + efectos + XP visible). El progreso de aprendizaje se sigue guardando: eso no es gamificación, es el trabajo del módulo M3.
5. **El audio de las lecciones (contenido real) nunca comparte canal con los efectos de recompensa.** Los efectos son silenciables de forma independiente y su ganancia máxima es ≤ 0,15.

## 3. Arquitectura de ficheros

```
src/lib/gamification/engine.ts      funciones puras + catálogo ACHIEVEMENTS + tipos
src/lib/gamification/sound.ts       motor WebAudio: 8 sonidos procedurales, sin archivos
src/lib/gamification/confetti.ts    confeti CSS/JS ligero (< 1 KB) con a11y
src/stores/gamification-store.ts    store Zustand + persist + vinculación al código
src/components/manos-abiertas/gamification/xp-pill.tsx             barra XP/nivel siempre visible
src/components/manos-abiertas/gamification/level-up-modal.tsx      celebración de subida
src/components/manos-abiertas/gamification/achievement-toast.tsx   aviso de logro
src/components/manos-abiertas/gamification/gamification-settings.tsx  sonidos/efectos/desactivar
tests/gamification/engine.test.ts         determinismo de niveles
tests/gamification/streak.test.ts         rachas
tests/gamification/achievements.test.ts   logros + idempotencia
tests/gamification/sound.test.ts          WebAudio sin archivos
tests/gamification/persistence.test.ts    persistencia por código
```

Los componentes gamificados **nunca** pueden importar lógica de negocio; solo leen el store y llaman a `playSound`/`burst`. El motor no importa nada de React ni del DOM.

---

## 4. BLOQUE 1 — Motor de niveles (determinista, 1–20)

**Alcance:** funciones puras que derivan nivel y XP de forma exacta y reproducible.

- `thresholdForLevel(level) = 50 * level * (level - 1)` — XP acumulado necesario para alcanzar `level`.
- `xpToNext(level) = 100 * level` — XP que faltan de `level` a `level+1` (en nivel 20 devuelve `0`).
- `levelFromXp(xp) = min(20, floor((1 + sqrt(1 + xp / 12.5)) / 2))` — inversa de la fórmula anterior (equivale a recorrer 1..20; se comprueba en test).

**Datos:** tabla canónica que el test debe verificar uno a uno:

| Nivel | XP acumulado para alcanzarlo | XP para el siguiente |
|---:|---:|---:|
| 1 | 0 | 100 |
| 2 | 100 | 200 |
| 3 | 300 | 300 |
| 4 | 600 | 400 |
| 5 | 1.000 | 500 |
| 6 | 1.500 | 600 |
| 7 | 2.100 | 700 |
| 8 | 2.800 | 800 |
| 9 | 3.600 | 900 |
| 10 | 4.500 | 1.000 |
| 11 | 5.500 | 1.100 |
| 12 | 6.600 | 1.200 |
| 13 | 7.800 | 1.300 |
| 14 | 9.100 | 1.400 |
| 15 | 10.500 | 1.500 |
| 16 | 12.000 | 1.600 |
| 17 | 13.600 | 1.700 |
| 18 | 15.300 | 1.800 |
| 19 | 17.100 | 1.900 |
| 20 | 19.000 | — (máximo) |

**Acabado:** `bun test tests/gamification/engine.test.ts` pasa; la tabla canónica coincide con las fórmulas para level 1..20.

> AFIRMACIÓN: `xpToNext(3) === 300`, `levelFromXp(19000) === 20`, `levelFromXp(0) === 1`, y `thresholdForLevel(l)` coincide con la tabla para l = 1..20.
> PRUEBA: `bun test tests/gamification/engine.test.ts`
> SALIDA: (pega aquí el resumen de bun: nº de tests, todos `pass`, 0 `fail`)

## 5. BLOQUE 2 — Economía de XP (recompensas por acción real)

**Alcance:** tabla única de cuánto vale cada acción. Nadie puede añadir una fuente de XP nueva sin actualizar esta tabla y su test.

| Acción | XP | Verificación |
|---|---:|---|
| Completar una lección nueva | 20 | evento `complete-lesson` con id único |
| Repasar una lección ya completada | 5 | el id ya está en `completedLessons` |
| Aprobar una evaluación (≥ 60 %) | 30 | llamada desde el Módulo 6 |
| Nota perfecta en evaluación (100 %) | +20 extra | Módulo 6 |
| Completar el test de nivel inicial | 40 | Módulo 6, una sola vez |
| Racha de 7 días (hito) | +50 | `streak === 7` |
| Racha de 30 días (hito) | +150 | `streak === 30` |
| Primera lección en un idioma nuevo | 15 | el locale no estaba en `languages` |

**Datos:** `src/lib/gamification/engine.ts` exporta `XP_RULES` como constante tipada.

**Acabado:** cada regla tiene un test; XP por "abrir la app" no existe en ningún lugar del código (búsqueda vacía).

> AFIRMACIÓN: `XP_RULES.completeLesson === 20` y `XP_RULES.appOpen` no existe (grep con 0 resultados).
> PRUEBA: `bun test tests/gamification/engine.test.ts` y `rg -n "appOpen|openApp|XP_RULES" src/lib/gamification src/stores`
> SALIDA: (pega el resumen de bun + el grep mostrando solo `XP_RULES` con las 8 entradas y 0 hits de `appOpen`)

## 6. BLOQUE 3 — Rachas diarias (deterministas)

**Alcance:** `updateStreakPure(state, todayISO)` pura, con la fecha como parámetro (testable sin reloj).

Regla exacta (día = fecha local YYYY-MM-DD del usuario):

| Situación | Resultado |
|---|---|
| `lastActive === todayISO` | sin cambios (mismo día no suma dos veces) |
| `lastActive === yesterdayISO(todayISO)` | `streak = streak + 1`; `bestStreak = max(bestStreak, streak)` |
| primer día (`lastActive === null`) | `streak = 1` |
| salto de 2+ días | `streak = 1` (se reinicia, se informa con evento `streak-reset`) |

`yesterdayISO(today)` se calcula restando un día a la fecha recibida (UTC puro sobre el string; la fecha local se calcula en la acción del store con `now ?? new Date()`).

**Datos:** campos `streak`, `bestStreak`, `lastActive` en el store.

**Acabado:** los 4 casos de la tabla pasan como tests; el mismo día solo cuenta una vez.

> AFIRMACIÓN: secuencia "lunes, martes, jueves" produce streak 2 el martes y 1 el jueves; "lunes, lunes, martes" produce streak 2 (no 3).
> PRUEBA: `bun test tests/gamification/streak.test.ts`
> SALIDA: (pega el resumen con los tests `pass`)

## 7. BLOQUE 4 — Los 16 logros (criterios exactos y recompensas)

**Alcance:** catálogo `ACHIEVEMENTS` en `engine.ts`. Cada logro tiene 4 tiers con umbral numérico. Recompensa por tier, única y fija: **bronce +25 XP · plata +100 · oro +300 · diamante +800**. Al superar un umbral el logro asciende de tier (se re-emite evento y se otorga la diferencia). La recompensa XP del logro se concede una sola vez por tier, no por revisión.

| ID | Nombre | Criterio (qué cuenta) | Bronce | Plata | Oro | Diamante |
|---|---|---|---|---|---|---|
| `ach-first-lesson` | PRIMEROS-PASOS | Lecciones completadas (total) | 1 | 5 | 15 | 40 |
| `ach-streak` | FUEGO-CONSTANTE | Racha diaria máxima alcanzada | 3 | 7 | 14 | 30 |
| `ach-days` | CAMINO-RECORRIDO | Días distintos con estudio (total) | 3 | 10 | 21 | 50 |
| `ach-level` | SUBE-DE-NIVEL | Nivel alcanzado | 3 | 6 | 10 | 20 |
| `ach-xp` | TITAN-DEL-XP | XP total acumulada | 500 | 2.000 | 6.000 | 15.000 |
| `ach-course` | CURSO-TERMINADO | Cursos completados | 1 | 3 | 5 | 8 |
| `ach-quiz` | EXAMINADOR | Evaluaciones completadas | 1 | 3 | 6 | 12 |
| `ach-score` | NOTA-ALTA | Evaluaciones con nota ≥ 90 % | 1 | 3 | 6 | 12 |
| `ach-perfect` | NOTA-PERFECTA | Evaluaciones con 100 % | 1 | 2 | 4 | 8 |
| `ach-first-try` | SIN-REPASO | Evaluaciones aprobadas al primer intento | 1 | 3 | 6 | 10 |
| `ach-review` | REPASADOR | Lecciones repasadas (ya completadas) | 1 | 5 | 15 | 30 |
| `ach-audio` | AUDIO-AMIGO | Lecciones con audio escuchado | 1 | 5 | 15 | 30 |
| `ach-lang` | POLIGLOTA | Idiomas distintos con ≥ 1 lección completada | 2 | 3 | 4 | 5 |
| `ach-test` | SABES-DONDE-ESTAS | Test de nivel inicial completado | 1 | 3 | 6 | 10 |
| `ach-week` | OBJETIVO-SEMANAL | Semanas con ≥ 5 días activos | 1 | 4 | 8 | 16 |
| `ach-collector` | COLECCIONISTA | Logros desbloqueados (cualquier tier) | 5 | 10 | 14 | 16 |

`checkAchievementsPure(state)` es pura e **idempotente**: recibe el estado completo y devuelve solo los logros recién ganados (nunca repite un tier ya registrado en `earned`).

**Datos:** tipos `Tier`, `AchievementDef`, `AchievementEarned { id, tier, xpAwarded }`.

**Acabado:** los 16 logros implementados 1:1 con la tabla; `ach-collector` se auto-detecta al desbloquear el 5º, 10º, 14º y 16º.

> AFIRMACIÓN: un estado con 5 lecciones, racha 7 y 1.100 XP gana exactamente `ach-first-lesson` (plata), `ach-streak` (plata) y `ach-xp` (bronce); una segunda llamada no devuelve nada.
> PRUEBA: `bun test tests/gamification/achievements.test.ts`
> SALIDA: (pega el resumen; incluye el caso de idempotencia que devuelve `[]`)

## 8. BLOQUE 5 — Sonidos procedurales (WebAudio, 8 tipos, sin archivos)

**Alcance:** `src/lib/gamification/sound.ts`. Un único `AudioContext` perezoso, creado en el primer gesto del usuario (política de autoplay de navegadores: se crea/resume en el primer `pointerdown`). Cada sonido se sintetiza con 1–4 osciladores + envolvente de ganancia (ataque/decadencia). Ningún `<audio>`, ningún fichero.

| # | id | Momento | Síntesis (frecuencia / nota) | Duración |
|---|---|---|---|---|
| 1 | `tick` | Ganar XP | triángulo 880→1320 Hz | 0,09 s |
| 2 | `level-up` | Subir de nivel | arpegio 523→659→784→1047 Hz | 0,9 s |
| 3 | `achievement` | Desbloquear logro | fanfarria 784→988→1319 Hz | 0,7 s |
| 4 | `streak` | Día de racha | campana 1319 Hz suave | 0,4 s |
| 5 | `correct` | Respuesta correcta (quiz) | 660→990 Hz | 0,25 s |
| 6 | `gentle-wrong` | Respuesta incorrecta (no punitivo) | 330→262 Hz, volumen bajo | 0,3 s |
| 7 | `complete` | Lección o curso terminado | acorde 392+494+587 Hz | 0,8 s |
| 8 | `tap` | Interacción UI | 440 Hz corto | 0,05 s |

Ganancia máxima global ≤ 0,15. `playSound(id)` respeta `soundEnabled` y devuelve `false` si el contexto no está listo (sin lanzar errores).

**Datos:** constantes de nota por id; un solo nodo `GainNode` maestro.

**Acabado:** los 8 ids existen, no hay URLs ni `new Audio(...)` en el repo para efectos, y un test verifica que `playSound` no lanza con `AudioContext` simulado.

> AFIRMACIÓN: `playSound('tick')` crea exactamente 1 oscilador y 1 ganancia, con volumen final ≤ 0,15; `rg "new Audio|\.mp3|\.wav" src` no devuelve efectos de recompensa.
> PRUEBA: `bun test tests/gamification/sound.test.ts` + `rg -n "new Audio|playSound" src`
> SALIDA: (pega el resumen del test y el grep)

## 9. BLOQUE 6 — Confeti y celebraciones (ligeros, con a11y)

**Alcance:** `src/lib/gamification/confetti.ts` → `burst()`. Máx 90 partículas `div` absolutas, colores de la paleta de marca (terracota, saffron, oliva), animadas con un único `@keyframes confetti-fall` (traslación + rotación), auto-eliminadas a los 3 s. Peso objetivo < 1 KB. Sin librerías.

- `prefers-reduced-motion: reduce` → `burst()` devuelve 0 nodos; la celebración se convierte en un panel estático con el logro/nivel.
- `effectsEnabled === false` → nada.
- `level-up-modal` y `achievement-toast`: no-bloqueantes, se cierran con un toque, foco gestionado (botón de cerrar alcanzable por teclado), sin tocar la semántica de la página.

**Datos:** partículas como un array de config `{x, y, color, rotate, delay}`; sin cálculo por frame.

**Acabado:** con `reduced-motion` simulado, `burst()` inserta 0 nodos en el DOM; con normal, ≤ 90 y se limpian solos.

> AFIRMACIÓN: mockeando `matchMedia('(prefers-reduced-motion: reduce)')` a `matches: true`, `burst()` no inserta ninguna partícula.
> PRUEBA: `bun test tests/gamification/reduced-motion.test.ts` (mock de `matchMedia` y de `document`)
> SALIDA: (pega el resumen; 0 partículas creadas)

## 10. BLOQUE 7 — Store Zustand y persistencia por código de 6 caracteres

**Alcance:** `src/stores/gamification-store.ts`, con `persist`. Clave dinámica: `manos-abiertas-gamification-<CODE>` si existe código de cuenta (M1), si no `manos-abiertas-gamification-guest`. Acción `bindAccount(code)` que re-configura la clave (`persist.setOptions` + rehidratación) sin perder el estado actual. En caso de conflicto entre dos claves, gana la de más XP y se informa (regla de la capa de visión).

Estado mínimo:

```ts
interface GamificationState {
  xp: number; level: number;
  streak: number; bestStreak: number; lastActive: string | null;
  completedLessons: string[]; reviewedLessons: string[]; audioLessons: string[];
  completedCourses: string[]; languages: LanguageCode[];
  quizzesDone: number; quizzesApproved: number; quizzesPerfect: number;
  quizzesHighScore: number; quizzesFirstTry: number; levelTestsDone: number;
  weeklyActiveDays: string[]; weeksDone: number;
  earned: Record<AchievementId, Tier>;
  soundEnabled: boolean; effectsEnabled: boolean; gamificationEnabled: boolean;
}
```

Las acciones (`addXp`, `registerLesson`, `registerQuiz`, `registerLevelTest`) llaman SIEMPRE a las funciones puras de `engine.ts`, aceptan un `now?: Date` inyectable para los tests, y encolan `events[]` que la UI consume (subida de nivel → modal + `level-up`; logro → toast + `achievement`; racha → `streak`).

**Datos:** el store persiste bajo la clave del código; `PlatformUser` (capa de visión) incorpora `xp`, `level`, `streak`, `bestStreak` y `earned`.

**Acabado:** con la clave `AB12CD`, avanzar 3 lecciones, recargar, y recuperar XP, nivel y logros intactos.

> AFIRMACIÓN: tras `bindAccount('AB12CD')` + 3 lecciones, una nueva instancia del store con la misma clave rehidrata los mismos `xp`, `streak` y `earned`.
> PRUEBA: `bun test tests/gamification/persistence.test.ts` (storage simulado de localStorage)
> SALIDA: (pega el resumen; xp/streak/earned idénticos tras rehidratar)

## 11. BLOQUE 8 — Integración y ajustes (XP visible, desactivar, sonido)

**Alcance:** `xp-pill` (XP, nivel y barra de progreso visibles siempre: es el "contrato emocional" del M7); `gamification-settings` con tres interruptores: sonidos, efectos, gamificación completa. Los hooks de integración se exponen desde `gamification-store` y se llaman desde: lección completada (M3), evaluación finalizada (M6), test de nivel (M6). Nunca bloquean el flujo: los efectos son no-bloqueantes.

**Datos:** config en el store; los tres interruptores persisten por código de cuenta.

**Acabado:** con gamificación desactivada, no se reproduce sonido, no hay confeti, no hay modal de nivel, y el `xp-pill` se oculta — pero `use-progress` sigue guardando el avance de las lecciones.

> AFIRMACIÓN: con `gamificationEnabled: false`, `addXp` no emite eventos de efecto (lista de eventos vacía) y el `xp-pill` no se renderiza.
> PRUEBA: `bun test tests/gamification/achievements.test.ts` (caso `effects off`) + `rg -n "gamificationEnabled" src/components`
> SALIDA: (pega el resumen y el grep)

---

## 12. Definición de ACABADO (Módulo 2 — todas)

1. Completar una lección otorga XP visible + sonido `tick` + posible logro (verificado por test, no a mano).
2. Los 16 logros de la tabla existen 1:1 con sus 4 tiers y recompensas exactas.
3. Todo es determinista: las mismas entradas producen las mismas salidas (tests de `engine`).
4. `prefers-reduced-motion` y la desactivación completa funcionan y están testeadas.
5. La persistencia por código de 6 caracteres sobrevive una recarga real (test + comprobación manual en la app).

## 13. Lo que NUNCA se hace (ni en silencio)

- XP sin acción de aprendizaje detrás (ni temporizadores ni "días por entrar").
- Logros que desbloqueen contenido o alteren la dificultad de los cursos.
- Sonidos con archivos externos, o efectos de recompensa mezclados con el audio de las lecciones.
- Confeti/animaciones que ignoren `prefers-reduced-motion`.
- Cualquier estado no derivable de funciones puras (el store no calcula nada por su cuenta).
- Azul, índigo o gradients como recurso visual de recompensa.

---

## Recordatorio final

La gamificación es la vitrina, no el contenido: si el logro grita más que la lección, la vitrina está mal diseñada.
Cada XP que entregues debe tener detrás una acción real de Amina; si no la tiene, es humo.
Cuando este módulo esté listo, la capa de medición (Módulo 6, `PROMPT-EVALUACION-ADAPTATIVA.md`) conectará sus quizzes a `registerQuiz`.
Determinismo primero, fiesta después: primero los tests, luego el confeti.
