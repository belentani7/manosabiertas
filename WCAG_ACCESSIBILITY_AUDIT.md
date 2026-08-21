# Auditoría de Accesibilidad WCAG 2.2 AA — Manos Abiertas

> **Autoría del proyecto**: Pedro Belentani  
> **Estándar**: W3C WCAG 2.2 Nivel AA  
> **Ámbito**: Componentes interactivos, estación nativa (CV Maker, AI Studio, Terminales), navegación principal y formularios.

## 1. Resumen de Conformidad

La aplicación implementa los principios fundamentales de accesibilidad universal:
- **Perceptible**: Uso de etiquetas de texto alternativas, contraste de color optimizado en modo claro y oscuro, y estructura semántica HTML (`<main>`, `<nav>`, `<section>`, `<article>`).
- **Operable**: Todos los controles interactivos, pestañas de navegación y formularios son accesibles mediante teclado completo (`Tab`, `Shift+Tab`, `Enter`, `Space`) con indicador de foco visible (`focus-visible`).
- **Comprensible**: Textos claros, formularios etiquetados explícitamente (`<label>` asociados), mensajes de error accesibles y soporte para lectores de pantalla.
- **Robusto**: Componentes basados en shadcn/ui y Radix UI, que gestionan automáticamente atributos ARIA (`aria-selected`, `aria-expanded`, `role="tablist"`).

## 2. Hallazgos y Mejoras Incorporadas

| Componente / Área | Criterio WCAG 2.2 | Estado | Acciones de Mitigación Implementadas |
|---|---|---|---|
| **Navegación de Cursos y Estación** | 2.1.1 Teclado | `PASS` | Botones de pestaña con soporte nativo de teclado y atributos `role="tab"`. |
| **Formulario CV Maker** | 3.3.2 Etiquetas / Instrucciones | `PASS` | Todos los campos de entrada disponen de etiquetas explícitas y textos de ayuda. |
| **Terminales Linux / Windows** | 2.1.2 Sin trampa de foco | `PASS` | Interfaz de simulación operada por línea de comandos sin retención de foco en iframe. |
| **Contraste de Colores** | 1.4.3 Contraste mínimo | `PASS` | Uso de paletas contrastadas (Slate, Indigo, Emerald) en modo claro y oscuro. |

## 3. Próximos Pasos en Accesibilidad

Para mantener la excelencia en accesibilidad, se recomienda realizar pruebas con usuarios reales utilizando lectores de pantalla (NVDA / TalkBack) en dispositivos móviles económicos, tal como exige el mandato original de la plataforma.
