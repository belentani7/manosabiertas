# Auditoría integral de Manos Abiertas

Este repositorio es la versión pública/operativa y debe cumplir los mismos estándares que las variantes privadas.

## P0
- Documento HTML válido: un único RootLayout controla `<html>`/`<body>`.
- Validación de inputs de APIs y acciones con esquemas.
- No exponer secretos ni PII en bundles, logs o errores.
- Proteger endpoints de autenticación, generación de CV, IA y datos.
- Mantener navegación por teclado y zoom del navegador.

## P1
- Lint, build, curriculum/i18n, model-viewer y paquete soberano en CI.
- Revisar todas las rutas localizadas y sus canonical/hreflang.
- Reducir JS cliente y cargar funcionalidades pesadas bajo demanda.
- Optimizar imágenes y assets sin eliminar material creativo.
- Error boundaries y estados de carga para operaciones de red.

## P2
- Medir Core Web Vitals reales.
- Revisar caché/CDN y headers.
- Revisar bundle size y dependencias redundantes.
- Pruebas de regresión visual en móvil.

## Anti-regresión
Nunca “optimizar” eliminando cursos, recursos, idiomas, ilustraciones o funcionalidades sin una migración explícita y reversible.
