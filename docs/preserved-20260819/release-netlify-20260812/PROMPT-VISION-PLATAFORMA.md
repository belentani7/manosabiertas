# PROMPT-VISION-PLATAFORMA

> La cuarta pieza de la serie — el **plan maestro de producto**.
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica (cómo hacerlo bien).
> - `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia (cómo probarlo).
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona (para quién y por qué).
> - **ESTE** = la capa de visión (qué construir, en qué orden, con qué alcance).
>
> La transcript original soñó con: gamificación dopaminérgica, 15+ cursos, mediateca audiovisual con contenido mundial open-source, evaluaciones, progreso con código de cuenta, paridad con Coursera y un motor de 100.000 mejoras.
> Aquí eso se convierte en **un sistema con arquitectura, fases y puertas de calidad**, fusionado con las otras tres capas. Sin humo: cada módulo tiene alcance, datos, medida y condición de "acabado".

---

## 0. Cómo se usan las 4 piezas juntas

Ejecuta en este orden, cada capa filtra a la anterior:

1. **VISIÓN (este documento)** define QUÉ construir y en qué orden.
2. **MASTER-PROMPT-PERFECTO** define CÓMO construirlo (estándares técnicos).
3. **MINIMAL-EXIGENTE** define QUÉ debe poder demostrarse con comandos.
4. **UTILIDAD-FINAL** define el POR QUÉ: cada módulo debe superar el test de la persona (Amina, nivel "solo sé usar WhatsApp").

Regla de oro: **un módulo que no pasa las 4 capas no se construye**. Un curso rápido y bonito pero incomprensible para Amina no existe.

---

## 1. La visión en una frase

Transformar **Manos Abiertas** de "página de recursos" a **plataforma educativa personalizada y gamificada**: el inmigrante crea su cuenta con un código de 6 caracteres, la plataforma aprende su nivel, le recomienda cursos, le acompaña con objetivos, evaluaciones, comentarios y tips, le premia con XP/logros/sonidos, y su progreso viaja con él entre dispositivos.

## 2. Los 12 módulos (lo que la transcript prometió, ordenado y con alcance)

Orden de construcción sugerido. Cada módulo con: **alcance / datos / medida de acabado / puerta de capa-4 (utilidad)**.

### M1. Cuenta por código (fundación — va primero)
- Alcance: registro/login con **código de 6 caracteres** + opcional email. Sin passwords complejos. Sesión persistente (localStorage + opcional sincronización).
- Datos: `src/data/` + Zustand store con `loadUser(code)` / `saveUser(code)`, API route `api/account`.
- Acabado: crear cuenta → recargar → recuperar todo el progreso. Sin fricción.
- Utilidad: Amina cierra la app, la abre en otro móvil, mete su código y sigue donde estaba. **No puede perder su avance.**

### M2. Motor de gamificación (transversal)
- Alcance: XP, niveles (1–20), rachas diarias, 15+ logros con tiers (bronce/plata/oro/diamante), confeti, sonidos procedurales (8 tipos), celebración de subida de nivel.
- Datos: `gamification-engine.ts` (determinista, sin backend), sonidos generados por WebAudio (sin archivos externos).
- Acabado: completar una lección otorga XP visible + feedback inmediato + posible logro.
- Utilidad: la dopamina es el cebo; **el aprendizaje es el pez**. Las recompensas nunca reemplazan el contenido: se miden para acompañar, no para distraer.

### M3. Centro de aprendizaje (núcleo)
- Alcance: **8–15 cursos** por niveles (nivel 0 absoluto → avanzado), con: syllabus, lecciones interactivas, progreso por lección, búsqueda, filtros (nivel/categoría), vista grid/lista, temario semanal, prerrequisitos y perfil de instructor.
- Datos: consolidar `ai-courses.ts`, `office-course.ts`, `level0-courses.ts`, `noia-courses.ts`, `external-courses.ts` en un esquema común (`src/data/courses/` con un `schema` compartido). Ningún curso "huérfano" con formato distinto.
- Acabado: todo curso abre, navega, guarda progreso y otorga XP.
- Utilidad: test de comprensión por curso — un nivel 0 se explica sin jerga y con audio.

### M4. Cursos adaptados y personalizados
- Alcance: test de nivel inicial (5 preguntas) → recomendar ruta. "Continuar donde lo dejaste". Sugerencias basadas en intereses elegidos al registro.
- Acabado: dos usuarios con distinto nivel ven rutas distintas.
- Utilidad: Amina no elige "qué estudiar": la plataforma le dice "tu próximo paso es X".

### M5. Mediateca audiovisual (contenido mundial open-source)
- Alcance: **20+ vídeos educativos reales** (Khan Academy, TED-Ed, freeCodeCamp, NASA, etc.), podcasts y documentales, con reproductor embebido (iframe oficial, no descargas), categorías, búsqueda y "ver más tarde".
- Datos: `media-library.ts` con enlaces reales y verificados (probar cada URL), licencias respetadas.
- Acabado: cada ítem reproduce, tiene metadatos (título, canal, duración, idioma, nivel) y fuente.
- Utilidad: ítems relevantes a la vida del inmigrante: idioma, trabajo, ofimática, derechos, emprendimiento.

### M6. Centro de evaluaciones
- Alcance: 3+ quizzes completos con temporizador, feedback inmediato, explicaciones por respuesta, recompensa XP, reintento con nota acumulada, adaptación de dificultad.
- Acabado: quiz completado → nota, explicaciones y XP.
- Utilidad: las preguntas usan situaciones reales ("te llama la policía y dice X, ¿qué respondes?") — nunca preguntas de academia.

### M7. Dashboard de progreso y objetivos
- Alcance: estadísticas, gráfico semanal, objetivos personalizables (diario/semanal), logros, tips motivacionales, racha.
- Acabado: el usuario ve "estudiaste 3 días seguidos, 120 XP, te faltan 80 para el nivel 4".
- Utilidad: **el progreso visible es el contrato emocional**: se muestra siempre, en un clic, sin registros.

### M8. Acompañamiento (comentarios, consejos, tips)
- Alcance: mensajes de acompañamiento por hitos ("¡llevas 5 días! ¿quieres repasar?"), tips contextuales por módulo, comentarios del sistema al completar lecciones difíciles.
- Acabado: el sistema genera acompañamiento en 3 momentos: inicio, racha, lección difícil.
- Utilidad: funciona como un tutor humano paciente, no como una máquina de premios.

### M9. Paridad con Coursera (features de plataforma madura)
- Alcance: certificados con ID/QR/compartir, foros por curso, notas y marcadores por lección, especializaciones (rutas multi-curso con progreso), centro de calificaciones, avisos/anuncios, recordatorios, revisión por pares con rúbrica (5 criterios), temario semanal.
- Alcance honesto: implementar la **lógica de datos y UI** completa, con persistencia local. La infraestructura social (foros reales, pares) se conecta después.
- Acabado: el tab "Coursera+" funciona con sus sub-tabs y datos reales de la app.
- Utilidad: cada feature debe traducirse a un beneficio para Amina, no a una casilla de comparación. Un certificado que ella pueda enseñar a un empleador = útil. Un foro vacío = daño.

### M10. Motor de mejoras masivo (auditoría continua)
- Alcance: generador determinista de mejoras sobre la plataforma: **al menos 5.000 mejoras concretas, priorizadas y filtrables** (por módulo, impacto, esfuerzo). Análisis de brechas frente a Coursera con métrica de "paridad" (%), panel visible "Mejoras → estado del producto".
- Datos: `improvements-engine.ts` (determinista: combinaciones de módulo × categoría × acción, con IDs únicos y nivel de prioridad).
- Regla anti-inflación: **no vale inflar el número con filas vacías**. Cada mejora debe ser accionable ("añadir explicación por vídeo en M5", no "mejorar la app").
- Acabado: el panel muestra N mejoras, filtradas, con % de completadas y % de paridad Coursera calculado sobre features reales (no inventadas).

### M11. Material didáctico (diapositivas, ilustraciones, sonido)
- Alcance: modo "diapositivas" para lecciones (pasar pantalla, no scroll infinito), ilustraciones simples (CSS/SVG marcadas como placeholder si no son reales), efectos de sonido coherentes (8 tipos, desactivables), animaciones CSS 15+ con `prefers-reduced-motion` respetado.
- Acabado: una lección se puede consumir en modo diapositiva con audio y sin degradación a11y.
- Utilidad: nivel 0 (no lector) consume la lección escuchándola.

### M12. Auditoría pesada y mejora continua (paridad + cumplimiento de las 4 capas)
- Alcance: comparación feature-by-feature con Coursera (tabla de 25 dominios), gaps reales, y auditoría de las 4 capas (técnica/evidencia/persona/visión).
- Acabado: informe final en el repo: `AUDITORIA-FINAL.md` con tabla, gaps y plan de cierre.
- Utilidad: la auditoría mide **utilidad alcanzada**, no líneas de código.

---

## 3. Arquitectura de datos (esquema común, no 10 formatos sueltos)

Todo módulo comparte un esquema en `src/data/`:

```ts
type PlatformUser = {
  code: string;            // 6 caracteres
  name?: string;
  level: number; xp: number; streak: number; lastActive: string;
  completedLessons: string[]; completedCourses: string[];
  objectives: Objective[]; badges: string[];
  evalScores: Record<string, number>;
};
type Course = {
  id: string; title: string; level: 0|1|2|3; category: string;
  description: string; language: string; source?: string; // URL real
  lessons: Lesson[]; xpPerLesson: number;
};
type Lesson = { id: string; title: string; content: string; audio?: boolean; slides?: string[]; quiz?: Question[] };
type MediaItem = { id: string; title: string; url: string; channel: string; duration?: string; language: string; level: number; category: string; verified: boolean };
```

Reglas: un solo `schema.ts` compartido, tipos exportados, sin duplicar estructuras por archivo. Los datos de cursos existentes se **migran**, no se reescriben desde cero.

## 4. Persistencia y sincronización

- Primario: localStorage (funciona offline — capa utilidad).
- Secundario: `api/account` para recuperar progreso por código (si hay backend disponible en Netlify).
- **Sin conflictos silenciosos**: si hay dos versiones de progreso, gana la de más XP y se informa al usuario.
- Prueba obligatoria: crear cuenta → avanzar 3 lecciones → recargar → el progreso está intacto.

## 5. Puertas de calidad (las 4 capas en una checklist por módulo)

Cada módulo solo se declara "acabado" cuando cumple las 4:

| Capa | Pregunta | Evidencia |
|---|---|---|
| Visión | ¿Avanza un job-to-be-done de M3? | Módulo asignado a uno de los 12 |
| Técnica | ¿Cumple MASTER-PROMPT-PERFECTO (SSR, a11y, perf)? | Build limpio, axe 0, LCP<1.2s |
| Evidencia | ¿Se puede demostrar con un comando? | PRUEBA pegada en la entrega |
| Utilidad | ¿Amina lo entiende y le sirve sin ayuda? | Test de comprensión + tarea sin ayuda |

## 6. La línea roja (lo que NO se hace)

- **No inflar números**: el motor de mejoras cuenta mejoras accionables; un "mejorar la app" duplicado se descarta.
- **No prometer paridad falsa**: "paridad con Coursera" se mide sobre features que existen y funcionan, no sobre la tabla que las sueña.
- **No reemplazar contenido con gamificación**: XP sin aprendizaje es un adicto sin habilidades. M3 y M4 mandan; M2 acompaña.
- **No copiar contenido con copyright**: mediateca solo con fuentes open-source o embebidas legalmente, y cada URL verificada.
- **No dejar la persona fuera**: si Amina no completa el trámite, el módulo se rediseña o se corta.

## 7. Definición de VISIÓN CUMPLIDA (todas, todas)

1. Los 12 módulos existen, navegables desde la barra, con datos reales y coherentes.
2. Un usuario puede: crear cuenta por código → hacer test de nivel → seguir una ruta → completar lecciones (XP, sonido, logros) → evaluarse → ver su progreso → recuperar todo con el código.
3. La mediateca reproduce contenido real verificado; los cursos migrados comparten esquema.
4. El motor de mejoras muestra ≥ 5.000 mejoras accionables con % de completadas y paridad real.
5. `AUDITORIA-FINAL.md` existe con tabla Coursera, gaps y plan de cierre.
6. Las 4 capas están verificadas por módulo y documentadas.

## 8. Entrega final

- Código completo y compilando (build local + Netlify standalone).
- `AUDITORIA-FINAL.md` con la matriz de las 4 capas por módulo.
- Zip `plataforma-vision-v2.zip` con el repo listo para desplegar, sin `node_modules`.
- Cada mejora del motor con estado (pendiente/hecha/descartada) y su justificación de una línea.

---

## Recordatorio final

La transcript quería 5.000 mejoras, 37.590 complementos y 100.000 añadidos.
**Este prompt las convierte en un sistema**: 12 módulos, 4 capas de calidad, datos compartidos y una regla simple — *si no ayuda a Amina a vivir mejor en España, no se construye*.
Eso es lo que separa una plataforma de un montón de archivos.
