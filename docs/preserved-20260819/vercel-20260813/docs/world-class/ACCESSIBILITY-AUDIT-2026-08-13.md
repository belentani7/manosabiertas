# Auditoría de accesibilidad estática — 2026-08-13

## Resultado actual

- Gate: **PASS**.
- Alcance: 78 archivos y 5.930 tags JSX.
- Hallazgos automáticos: 0.
- Base: WCAG 2.1 AA más target de 44 x 44 px basado en 2.5.5 AAA.
- Señales manuales: 16, correspondientes a ocho diálogos cuya semántica depende del runtime.

Comando ejecutado:

```powershell
npm run accessibility:verify
```

## Evidencia complementaria

- `npm run test:core`: 41/41 pruebas.
- `npm run typecheck`: exit 0.
- `npm run lint`: exit 0.
- Paleta de comandos: apertura, Escape y restauración de foco aceptados en navegador el 2026-08-13.
- Producción: portada sin overflow horizontal a 1.920 px y contenido visible tras completar onboarding.

## Pendiente manual

No existe todavía evidencia suficiente para declarar conformidad WCAG completa. Falta:

1. Recorrido de teclado de todas las rutas y formularios.
2. Contraste computado de texto, bordes, estados e iconos.
3. Reflow a 320 CSS px y zoom al 200 %.
4. Errores reales asociados a campos e instrucciones de recuperación.
5. Ocho diálogos: nombre, foco inicial, ciclo, Escape y restauración.
6. NVDA, Narrador de Windows, VoiceOver y TalkBack.

Las 16 señales runtime permanecen como revisión manual, no como hallazgos cerrados.
