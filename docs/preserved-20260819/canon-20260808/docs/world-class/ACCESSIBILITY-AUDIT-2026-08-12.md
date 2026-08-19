# Auditoría de accesibilidad estática — 2026-08-12

**Proyecto:** Manos Abiertas  
**Estándar base:** WCAG 2.1 AA  
**Gate adicional del proyecto:** 44 × 44 CSS px, basado en WCAG 2.1 2.5.5 (AAA)  
**Alcance inspeccionado:** `src/app` y `src/components/manos-abiertas`  
**Resultado automático:** **FAIL**  

## Resumen verificable

- 78 archivos fuente analizados.
- 5.918 tags JSX analizados.
- 25 hallazgos automáticos: 2 P0 y 23 P1.
- 2 incumplimientos P0 afectan el baseline WCAG 2.1 AA.
- 23 incumplimientos P1 afectan el requisito reforzado de 44 px. WCAG 2.1 2.5.5 es nivel AAA, no AA.
- 16 señales automáticas se agrupan en 8 diálogos cuya semántica depende del componente UI y requieren prueba manual/runtime.
- El gate no encontró imágenes estáticamente analizables sin `alt`.
- El gate no encontró botones HTML nativos dentro de formularios sin `type` explícito.
- El gate no encontró `<dialog>`, `role="dialog"`, `role="alertdialog"` o `aria-modal="true"` explícitos con semántica/nombre incompletos.

Estas tres últimas cifras no certifican conformidad global: props extendidas, DOM generado por componentes, CSS computado y comportamiento en ejecución quedan fuera del análisis estático.

## Hallazgos automáticos P0

| ID | Ruta y línea | Criterio | Evidencia | Acción de aceptación |
|---|---|---|---|---|
| A11Y-001 | `src/components/manos-abiertas/community-section.tsx:485` | 1.3.1 (A), 3.3.2 (A) | El buscador nativo depende del `placeholder`; no tiene `label`, `aria-label`, `aria-labelledby` ni `id` asociable. | Añadir nombre accesible estable, preferiblemente `<label>` visible o `aria-label="Buscar temas de la comunidad"`; ejecutar el gate. |
| A11Y-002 | `src/components/manos-abiertas/document-templates.tsx:221` | 1.3.1 (A), 3.3.2 (A) | El editor `<textarea>` tiene instrucciones adyacentes, pero no una asociación programática que le dé nombre. | Asociar un `<label>` mediante `htmlFor`/`id` o añadir `aria-label`; ejecutar el gate y comprobar el nombre en el árbol de accesibilidad. |

## Hallazgos automáticos P1

Todos incumplen el gate reforzado de tamaño de objetivo basado en **WCAG 2.1 2.5.5 (AAA)**. Aceptación general: el área interactiva computada debe alcanzar al menos 44 × 44 CSS px o debe documentarse una excepción aplicable del propio criterio.

| ID | Ruta y línea | Dimensión explícita | Acción concreta |
|---|---|---|---|
| A11Y-003 | `src/components/manos-abiertas/ai-assistant.tsx:212` | `h-7 w-7` = 28 × 28 px | Ampliar el botón de reinicio a `min-h-11 min-w-11`; conservar el icono visual. |
| A11Y-004 | `src/components/manos-abiertas/ai-assistant.tsx:223` | `h-7 w-7` = 28 × 28 px | Ampliar el botón de cierre a 44 × 44 px como mínimo. |
| A11Y-005 | `src/components/manos-abiertas/ai-assistant.tsx:321` | `h-10 w-10` = 40 × 40 px | Elevar el botón de envío a `h-11 w-11` o mínimos equivalentes. |
| A11Y-006 | `src/components/manos-abiertas/ai-playground.tsx:211` | `h-9 w-9` = 36 × 36 px | Elevar el botón de envío a 44 × 44 px. |
| A11Y-007 | `src/components/manos-abiertas/community-section.tsx:495` | `h-8` = 32 px | Usar `min-h-11`; verificar que cada filtro mantiene separación suficiente. |
| A11Y-008 | `src/components/manos-abiertas/community-section.tsx:633` | `h-8` = 32 px | Elevar el botón de contacto a 44 px de alto como mínimo. |
| A11Y-009 | `src/components/manos-abiertas/cover-letter-builder.tsx:227` | `h-9 w-9` = 36 × 36 px | Ampliar el botón de añadir habilidad a 44 × 44 px. |
| A11Y-010 | `src/components/manos-abiertas/cover-letter-builder.tsx:304` | `h-7` = 28 px | Ampliar el target de “Copiar” sin aumentar necesariamente el icono. |
| A11Y-011 | `src/components/manos-abiertas/cover-letter-builder.tsx:308` | `h-7` = 28 px | Ampliar el target de “Imprimir” a 44 px de alto como mínimo. |
| A11Y-012 | `src/components/manos-abiertas/cv-section.tsx:290` | `h-7` = 28 px | Ampliar la acción de generación de resumen a `min-h-11`. |
| A11Y-013 | `src/components/manos-abiertas/cv-section.tsx:344` | `h-7 w-7` = 28 × 28 px | Ampliar el botón de eliminar experiencia a 44 × 44 px. |
| A11Y-014 | `src/components/manos-abiertas/cv-section.tsx:359` | `h-7` = 28 px | Ampliar “Mejorar con IA” a 44 px de alto como mínimo. |
| A11Y-015 | `src/components/manos-abiertas/cv-section.tsx:384` | `h-7 w-7` = 28 × 28 px | Ampliar el botón de eliminar formación a 44 × 44 px. |
| A11Y-016 | `src/components/manos-abiertas/cv-section.tsx:481` | `h-7` = 28 px | Ampliar el control de plantilla a 44 px de alto como mínimo. |
| A11Y-017 | `src/components/manos-abiertas/learn-ai-section.tsx:313` | `h-1.5` = 6 px; hover `h-2.5` = 10 px | Separar el indicador visual del target: botón de 44 px con barra interna fina. Añadir nombre/estado si procede. |
| A11Y-018 | `src/components/manos-abiertas/level0-academy.tsx:72` | `h-1.5 w-6` = 6 × 24 px | Mantener el punto visual dentro de un botón de 44 × 44 px y verificar separación/foco. |
| A11Y-019 | `src/components/manos-abiertas/pomodoro-timer.tsx:99` | `h-7` = 28 px | Elevar “iniciar Pomodoro” a 44 px de alto como mínimo. |
| A11Y-020 | `src/components/manos-abiertas/pomodoro-timer.tsx:114` | `h-7` = 28 px | Elevar “activar Pomodoro” a 44 px de alto como mínimo. |
| A11Y-021 | `src/components/manos-abiertas/process-infographics.tsx:204` | `w-10 h-10` = 40 × 40 px | Elevar el control de paso a 44 × 44 px. |
| A11Y-022 | `src/components/manos-abiertas/reading-mode-toggle.tsx:22` | `h-7` = 28 px | Elevar el toggle a 44 px de alto como mínimo. |
| A11Y-023 | `src/components/manos-abiertas/system-awareness.tsx:48` | `h-7` = 28 px | Elevar “Diagnosticar” a 44 px de alto como mínimo. |
| A11Y-024 | `src/components/manos-abiertas/tts-button.tsx:125` | `h-8 w-8` = 32 × 32 px | Ampliar reproducción/pausa a 44 × 44 px. |
| A11Y-025 | `src/components/manos-abiertas/tts-button.tsx:134` | `h-8 w-8` = 32 × 32 px | Ampliar detener a 44 × 44 px. |

## Revisión manual pendiente

### P0 — baseline WCAG 2.1 AA

1. **Teclado completo, 2.1.1 y 2.1.2:** recorrer todas las rutas con Tab, Shift+Tab, Enter, Espacio, flechas cuando correspondan y Escape. Confirmar ausencia de trampas.
2. **Foco, 2.4.3 y 2.4.7:** comprobar orden lógico, foco visible, foco inicial y restauración tras cerrar overlays.
3. **Contraste, 1.4.3 y 1.4.11:** medir texto, iconos, bordes, estados hover/focus/disabled y gráficos con colores computados. El gate no calcula contraste.
4. **Reflow y zoom, 1.4.10:** probar 320 CSS px y zoom al 200 %, incluyendo CV, comunidad, mapas, editores y navegación.
5. **Nombre, rol y estado, 4.1.2:** inspeccionar el árbol de accesibilidad, controles personalizados, anuncios live y cambios de estado.
6. **Errores y ayudas, 3.3.1–3.3.3:** provocar errores reales en formularios y confirmar identificación, asociación y recuperación.
7. **Contenido dinámico:** confirmar que toasts, resultados de IA, temporizador, progreso y mensajes comunitarios se anuncian sin repetición excesiva.

### P1 — diálogos dependientes del runtime

Verificar que cada par `Dialog`/`DialogContent` renderiza `role="dialog"`, nombre accesible, foco inicial, ciclo de foco, cierre con Escape y restauración de foco:

| Superficie | Ruta y líneas |
|---|---|
| Paleta de comandos | `src/components/manos-abiertas/command-palette.tsx:192`, `:193` |
| Editor de plantillas | `src/components/manos-abiertas/document-templates.tsx:187`, `:188` |
| Legal del pie | `src/components/manos-abiertas/footer.tsx:133`, `:134` |
| Glosario legal, diálogo 1 | `src/components/manos-abiertas/legal-glossary.tsx:206`, `:207` |
| Glosario legal, diálogo 2 | `src/components/manos-abiertas/legal-glossary.tsx:279`, `:280` |
| Onboarding | `src/components/manos-abiertas/onboarding-wizard.tsx:194`, `:195` |
| Envío de recursos | `src/components/manos-abiertas/resource-submission-form.tsx:107`, `:108` |
| Recordatorios | `src/components/manos-abiertas/smart-reminders.tsx:231`, `:232` |

### Tecnologías de asistencia

- **NVDA:** no probado.
- **Narrador de Windows:** no probado.
- **VoiceOver:** no probado.
- **TalkBack:** no probado.
- Se requiere una matriz manual con navegador, versión, ruta, tarea, resultado y evidencia antes de declarar conformidad.

## Método automático

Comando:

```powershell
node scripts/verify-accessibility-static.mjs
```

Salida estructurada:

```powershell
node scripts/verify-accessibility-static.mjs --json
```

El gate usa solo Node.js stdlib y revisa:

- `<button>` nativo dentro de `<form>` sin `type`, salvo que props extendidas impidan determinarlo.
- Equivalentes HTML de Framer Motion (`motion.button`, `motion.form`, `motion.a`, `motion.input`, `motion.img` y `motion.dialog`).
- `<img>`, `motion.img` y `<Image>` sin `alt`, con `alt=""` permitido para decoración.
- `<input>` y `<textarea>` sin label envolvente, `htmlFor`/`id`, `aria-label` o `aria-labelledby` determinables.
- Controles explícitamente ocultos, como `className="hidden"`, fuera del gate de etiquetado.
- Targets interactivos con clases Tailwind de ancho, alto o tamaño explícito inferiores a 44 px.
- `<dialog>`, roles dialog/alertdialog y `aria-modal="true"` con rol o nombre incompletos.
- Excepciones inexistentes, inválidas o obsoletas.

Una excepción requiere regla concreta, ubicación inmediata y justificación de al menos 12 caracteres:

```tsx
{/* a11y-static-ignore target-size-44 -- El área equivalente está ampliada por el contenedor asociado */}
```

La excepción debe corresponder a una excepción real del criterio o a evidencia verificable. No debe usarse para silenciar deuda sin resolver.

## Evidencia de ejecución

```text
node scripts/verify-accessibility-static.mjs --json
exit: 1
files: 78
tags: 5918
findings: 25
manual-review signals: 16
```

```text
node --test tests/core/accessibility.test.mjs
tests: 1
passed: 0
failed: 1
exit: 1
reason: el gate conserva los 25 hallazgos anteriores
```

## Orden de remediación

1. Resolver A11Y-001 y A11Y-002; son fallos del baseline WCAG 2.1 AA.
2. Corregir A11Y-017 y A11Y-018; sus targets de 6 px son los más restrictivos para interacción táctil y motora.
3. Corregir los controles icon-only de 28–40 px.
4. Corregir las acciones textuales con altura de 28–32 px.
5. Ejecutar el gate hasta obtener exit 0.
6. Ejecutar revisión manual de teclado, foco, contraste, reflow y diálogos.
7. Ejecutar pruebas reales con tecnología de asistencia y registrar evidencia. Solo entonces evaluar conformidad WCAG 2.1 AA.

## Límite de la auditoría

Este informe demuestra resultados de análisis estático, no conformidad WCAG completa. No inspecciona DOM runtime, estilos computados, orden real de foco, contraste final, anuncios del lector de pantalla, contenido de terceros ni comportamiento por navegador/dispositivo.
