# PROMPT-TOP-MUNDIAL

> La sexta pieza de la serie — la **capa de excelencia mundial**.
> - `MASTER-PROMPT-PERFECTO.md` = capa técnica · `PROMPT-MINIMAL-EXIGENTE.md` = capa de evidencia
> - `PROMPT-UTILIDAD-FINAL.md` = capa de persona (Amina) · `PROMPT-VISION-PLATAFORMA.md` = capa de visión (12 módulos)
> - `PROMPT-BANCO-DATOS-ABIERTO.md` = capa de recursos (catálogo open-source + pipeline de cursos)
> - **ESTE** = la capa que lo convierte en **la mejor plataforma open-source del mundo para inmigrantes**.
>
> El generador es **z.ai**. El público mayoritario son **personas de 40+ años con poca o ninguna experiencia digital**.
> "La mejor del mundo" no se declara: **se demuestra** con las 7 evidencias de la sección 4.

---

## 1. Qué significa realmente "la mejor plataforma open-source del mundo"

No significa la más famosa, ni la que más repos tiene. Para ESTE producto significa cinco cosas, en este orden:

1. **La que más cambia la vida de su usuario final** (una persona de 40+ recién llegada, con miedo y sin experiencia digital).
2. **La más ejemplar como software libre**: cualquiera con un ordenador puede desplegarla, leerla, auditarla, traducirla y mejorarla.
3. **La más confiable**: sin humo. Cada afirmación del README es verificable con un comando.
4. **La más accesible del mundo**: si no la puede usar una persona de 55 años sin leer ni navegar, no es la mejor.
5. **La que respeta a quien la usa**: sin oscurecer, sin enganches, sin vender datos, sin jerga.

Regla central: **la excelencia técnica sin la persona es irrelevante; la persona sin la técnica no funciona.** Las cinco capas anteriores filtran este documento.

## 2. El perfil que NINGUNA decisión puede ignorar

Esto no es una persona con un móvil: es **el usuario objetivo real**. Cada pantalla se prueba contra ella.

| Rasgo | Implicación de diseño |
|---|---|
| 40–60 años, llegó recién a España o Portugal | Todo en su idioma, ritmo lento, cero doble lectura |
| Sabe usar WhatsApp (audios, llamadas) | **Audio-first**: escuchar vale más que leer. Botón "escuchar" en todo trámite crítico |
| No rellena formularios de 8 campos | Nunca más de 3 campos por pantalla; autocompletar todo lo posible |
| Miedo a equivocarse y a perder el avance | "Atrás" siempre visible, aviso antes de borrar, progreso guardado con su código |
| No entiende iconografía abstracta | Pictogramas ARASAAC + texto; icono ≠ significado sin etiqueta |
| Desconfía de lo que no reconoce | Fuentes oficiales visibles en cada dato ("Información: SEPE"), sin links sospechosos |
| Tiene un "conocido" que le ayuda | Sección "Envía a un familiar" para compartir pasos por WhatsApp |

**La prueba de oro de cada funcionalidad:** "¿Se la puede enseñar la hija de Amina a su madre por WhatsApp y la madre la usa sola la siguiente vez?" Si no: se rediseña.

## 3. Excelencia open-source: el repositorio como producto

El código es tan importante como la app. "Mejor plataforma open-source" exige un repo impecable:

### 3.1 El README que atrae y enseña
- Nombre, una frase de qué es, para quién, y una captura real.
- **Badges reales que pasan en CI**: build, tests, coverage, license, stars, "Made with Next.js".
- "Demo en vivo" (link a Netlify).
- "Cómo desplegarla en 10 minutos" (copy-paste, sin jerga).
- Sección para colaborar (traducciones, contenido, código).
- Idiomas del README: es, en, pt, fr, ar (5 archivos README.es.md, etc.).

### 3.2 Estructura y licencias
- Licencia claramente visible: **AGPL-3.0 o MIT** (decisión documentada) en LICENSE + cabecera en archivos clave.
- CONTRIBUTING.md con guía para no-programadores (añadir una traducción, añadir una fuente al catálogo).
- CODE_OF_CONDUCT.md (Mozilla Contributor Covenant) en los 5 idiomas.
- SECURITY.md (cómo reportar vulnerabilidades; sin exposición pública).
- CHANGELOG.md (mantenido manualmente, en español e inglés).
- DOCUMENTACION-COMPLETA.md actualizada al cierre de cada fase.

### 3.3 Calidad de ingeniería
- CI en GitHub Actions: lint + typecheck + tests + build en cada PR.
- Tests: unit (Zustand stores, funciones puras), integration (API routes), e2e (Playwright recorriendo los 5 jobs-to-be-done críticos).
- Coverage mínimo en el umbral de CI (ej. ≥ 70% en lógica de negocio; declarado).
- Conventional commits + generador de changelog.
- Issue templates (bug, feature, contenido nuevo) y PR template.
- Releases semver con notas en es/en.

### 3.4 Lo que hace "open source" de verdad
- **Despliegue de una línea**: `npx create-manos` o guía copy-paste de Netlify/Node.
- Sin secretos en el repo; `.env.example` documentado.
- Dependencias auditadas (`npm audit` / `bun audit` en CI, 0 high).
- Sin telemetría oculta: si hay analytics, se declara y se puede desactivar (dado el perfil del usuario, **por defecto OFF**).
- Todo el contenido de `src/data/` con su fuente y licencia, para que otros reutilicen.

## 4. Las 7 evidencias de "la mejor del mundo" (obligatorias)

Cada una con su PRUEBA pegada en la entrega. Sin evidencia, la afirmación no existe.

1. **Persona real completa una tarea sin ayuda.** Prueba A de la capa de utilidad: alguien 40+ sin perfil digital completo los 5 jobs-to-be-done críticos, cronometrado, sin indicaciones. Pegar tabla: tarea, pasos, tiempo, ¿necesitó ayuda?
2. **Accesibilidad perfecta.** axe: 0 violaciones en todas las vistas. WCAG 2.2 AA. Recorrido por teclado grabado (lista de focos en orden).
3. **Rendimiento en la máquina del usuario.** LCP < 1.2s · INP < 150ms · CLS < 0.05. Lighthouse: Perf ≥ 95, A11y 100, SEO 100, BP 100, PWA 100.
4. **PWA real.** Instalable, offline para trámites críticos. Test offline en Chrome DevTools.
5. **El repo es ejemplar.** Los checks de CI pasan en un PR de demostración; README/doc/contributing/llicencia completos; `npm audit` 0 high.
6. **Contenido real citado.** Cada dato factual con fuente oficial visible; cada curso marcado REAL o PLACEHOLDER con motivo.
7. **Sin humo en el README.** Cada feature del README tiene su PRUEBA del formato AFIRMACIÓN/PRUEBA/SALIDA (capa de evidencia).

## 5. La experiencia para la persona 40+ (lo que la hace única)

Esto es lo que nadie más hace: **la plataforma que no da miedo**.

### 5.1 Onboarding sin lectura (nivel 0)
- Primer arranque: 3 pantallas de iconos grandes que se pueden escuchar ("toca para escuchar qué es esto").
- Opción "Me ayudan con esto": muestra pantalla de "pide a un familiar que haga esto contigo" con botón de compartir por WhatsApp.
- El test de nivel (5 preguntas) se responde por **voz o por toque de imágenes**, no escribiendo.
- Código de cuenta: se crea con 6 símbolos simples (no letras confusas 1/l/I). Se puede guardar como imagen o enviar a un contacto.

### 5.2 Navegación de 3 caminos
- En lugar de un menú de 12 secciones: tres botones enormes:
  1. **"Estoy llegando"** (primeros pasos, papeles, acogida)
  2. **"Necesito trabajo"** (empleo, formación, currículum)
  3. **"Me han escrito"** (cartas oficiales, citas, avisos)
- Todo lo demás queda en un segundo nivel claramente accesible, pero nunca compite con los 3 caminos.

### 5.3 Cada trámite es un "paso a paso"
- Un trámite = una lista numerada de ≤ 5 pasos, cada uno con: qué necesitas, dónde vas, qué dices, botón "escuchar", pictograma.
- Al final: "¿Lo conseguiste?" (sí/no). El "no" abre un camino de ayuda humana (dónde acudir en tu ciudad).
- Toda pantalla tiene "atrás" y el progreso se guarda instantáneamente.

### 5.4 Modo "solo lo esencial"
- Interruptor global que reduce la interfaz al mínimo: 3 botones, fuente grande, sin adornos, sin notificaciones, sin animaciones.
- Para cuando el usuario está estresado o el contexto es de emergencia.

### 5.5 Idioma que se adapta, no se impone
- El usuario elige su idioma al empezar (banderas + nombre del idioma en su propia lengua, NO traducido a español).
- Cambiar idioma en 1 toque desde cualquier pantalla (nunca en un submenú).
- Los 5 idiomas principales (es/pt/en/fr/ar) con calidad humana; el resto con traducción automática **marcada** ("traducción automática — puede tener errores").

## 6. Qué construye el agente (orden de entrega)

1. `README` + badges + docs + CI + licencia (sección 3). El repo modelo.
2. Onboarding sin lectura + 3 caminos + modo esencial (sección 5).
3. Persistencia de cuenta por código (M1).
4. Centro de aprendizaje con los 5 cursos ya generados (M3) + gamificación que acompaña (M2).
5. Mediateca y evaluaciones (M5, M6).
6. Dashboard de progreso y acompañamiento (M7, M8).
7. Paridad Coursera esencial (M9) + motor de mejoras (M10) + auditoría (M12).

Regla: cada bloque se entrega con sus PRUEBAS (sección 4). Nada se marca "listo" sin evidencia.

## 7. Restricciones no negociables (heredadas de toda la serie)

- Prohibido azul/índigo/gradients como recurso por defecto; marca cálida terracota/saffron/oliva.
- Prohibido decir "hecho/lista/funciona" sin PRUEBA pegada.
- Prohibido copiar contenido con copyright; mediateca solo con fuentes libres verificadas.
- Prohibido borrar `static-home-fallback.tsx` (red de seguridad); se mejora, no se elimina.
- Prohibido dejar TODOs sin resolver o secretos versionados.
- Cada dato factual lleva fuente oficial visible.
- Respetar `prefers-reduced-motion`; sonidos desactivables.
- Público objetivo: frases de ≤ 10 palabras en nivel 0; audio-first en trámites críticos.

## 8. Métricas de "mejor del mundo" (el panel que lo demuestra)

| Métrica | Objetivo |
|---|---|
| Personas 40+ completando tarea crítica sin ayuda | 5/5 jobs-to-be-done |
| axe violaciones | 0 |
| WCAG | 2.2 AA |
| Lighthouse (Perf/A11y/SEO/BP/PWA) | 95/100/100/100/100 |
| LCP / INP / CLS | <1.2s / <150ms / <0.05 |
| Coverage de lógica de negocio | ≥70% |
| npm/bun audit | 0 high |
| Cursos marcados REAL | 5/5 (o PLACEHOLDER con motivo) |
| Idiomas humanos | 5 principales |
| Datos con fuente oficial | 100% |

## 9. Definición de MEJOR DEL MUNDO (todas, todas)

1. Las 7 evidencias de la sección 4 están pegadas en la entrega y pasan.
2. El repo es desplegable en una línea y auditado (CI verde, audit 0 high, docs completas).
3. Una persona 40+ sin experiencia digital completa los 5 jobs-to-be-done sin ayuda, con el onboarding sin lectura.
4. La app es instalable, offline y accesible (axe 0, WCAG 2.2 AA).
5. El contenido es real, citado y en su idioma; nada inventado.
6. DOCUMENTACION-COMPLETA.md y el README coinciden con el código real.

## 10. Recordatorio final (para z.ai y cualquier agente que lo ejecute)

Hay miles de plataformas educativas. Hay una sola que una mujer de 55 años recién llegada puede **abrir, escuchar y usar sola la misma tarde**.
Esa es la que vas a construir.
La excelencia no es una feature más: es que todo funcione, todo se pueda comprobar, todo esté en su idioma, y nada le tenga que dar miedo.
Si al final puedes demostrar las 7 evidencias — entonces sí, es la mejor del mundo. No porque lo digas, sino porque se demuestra.
