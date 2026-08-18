# Auditoría extrema de Manos Abiertas — estado verificable

> **Autoría del proyecto:** Pedro Belentani  
> **Repositorio canónico:** [github.com/belentani7/manosabiertas](https://github.com/belentani7/manosabiertas)  
> **Criterio rector:** mandato original del proyecto conservado en `pasted_content.txt` y evidencia reproducible del repositorio.

## Dictamen honesto

Este documento **no certifica un 10/10**. La propuesta original exige no inventar resultados y declara que la entrega completa solo es válida cuando todos los requisitos tienen estado `PASS`, la matriz de navegadores está completada, la accesibilidad incluye revisión manual, el rendimiento está medido sobre producción, la privacidad está documentada y el rollback está probado.

Con la evidencia disponible en este momento, el estado correcto es **PARTIAL**. La aplicación tiene una base técnica útil y una parte importante del contenido local, pero todavía no existe evidencia suficiente para declarar conformidad total, eficacia pedagógica demostrada, traducción humana completa en 39 idiomas, auditoría de seguridad dinámica ni independencia absoluta de servicios remotos.

## Matriz de las seis dimensiones solicitadas

| Dimensión | Estado verificable | Puntuación provisional | Evidencia disponible | Lo que falta para declarar 10/10 |
|---|---:|---:|---|---|
| Backend | `PARTIAL` | No certificada | Rutas API, tutor local de respaldo, validación de esquemas y compilación existente. | Threat model completo, pruebas negativas, autorización por objeto, rate limiting, auditoría de dependencias, secretos, SSRF, uploads, CORS, CSRF, logs y restauración probada. |
| Frontend | `PARTIAL` | No certificada | Aplicación Next.js/React, componentes nativos, PWA y navegación localizada. | Matriz real de Chromium, Firefox y móviles; foco y teclado manuales; zoom/reflow; lector de pantalla; errores, estados vacíos y ausencia de overflow documentados. |
| Utilidad | `PARTIAL` | No certificada | Currículo local español de 1.000 puntos, CV Maker, tutor IA, asistentes offline y simuladores educativos. | Validación con estudiantes y docentes, pruebas de dominio, rutas guiadas, criterios de aprendizaje, feedback y exportación de evidencias. |
| Relevancia | `PARTIAL` | No certificada | La propuesta define necesidades de migración, empleo, derechos, idioma, vivienda, salud y comunidad. | Revisión humana y factual de recursos; cola priorizada de los recursos pendientes; evidencia de uso y revisión por región y comunidad. |
| Potencial | `PARTIAL` | No certificada | Estructura modular, datos estáticos compilados, PWA y base local. | Paquetes offline medidos, actualización segura, límites de almacenamiento, cola de sincronización, backups, RPO/RTO y prueba de restauración. |
| Identidad | `PARTIAL` | No certificada | Marca Manos Abiertas, autoría declarada y documentación del proyecto. | Política editorial, licencias, gobernanza, consejo independiente, registro de decisiones y validación con comunidades. |

## Qué sí está integrado localmente

El repositorio contiene el currículo maestro en español en `src/data/curriculum-master-es/`, con diez áreas y 1.000 lecciones según su manifiesto. También contiene catálogos estáticos de cursos y recursos, asistentes offline, iconos, manifiestos PWA, capturas, logotipo, la Estación Maestra nativa y el motor de tutor local de respaldo.

La nueva base soberana queda descrita en `src/data/sovereign/manifest.json`, `SOVEREIGN_OFFLINE_BASE.md` y `public/offline/asset-manifest.json`. Los enlaces a webs externas siguen existiendo como **referencias opcionales** en los catálogos: no son material descargado ni deben presentarse como verificado localmente. Los vídeos se mantienen fuera de la base inicial por tamaño, licencia y mantenimiento.

## Estados de localización

La existencia de una carpeta o un código de idioma no demuestra una traducción final. El currículo maestro español tiene estado editorial `machine-generated-pending-human-review`. El portugués debe permanecer `PENDING` mientras no exista un catálogo completo traducido y revisado por hablantes cualificados. Las 39 lenguas necesitan paridad funcional, revisión lingüística, adaptación cultural y, cuando corresponda, revisión legal.

## Evidencia de ejecución que debe conservarse

| Comprobación | Estado | Nota |
|---|---:|---|
| `npm run lint` | `PASS` en una ejecución anterior | Debe repetirse después de los cambios de soberanía. |
| `npx tsc --noEmit --skipLibCheck` | `PASS` en una ejecución anterior | Debe repetirse después de los cambios de soberanía. |
| `npm run build` | `PASS` en una ejecución anterior | Debe repetirse y registrarse con los nuevos manifiestos locales. |
| Auditoría de navegador real | `NOT RUN` | No se debe inferir desde TypeScript o build. |
| Lighthouse móvil | `NOT RUN` | Faltan mediciones sobre una URL de producción. |
| Accesibilidad manual | `NOT RUN` | La automatización no demuestra conformidad total. |
| Seguridad dinámica | `NOT RUN` | No se autoriza explotación en producción. |
| Revisión humana pedagógica | `NOT RUN` | Es obligatoria antes de marcar material como definitivo. |
| Restauración de backup | `NOT RUN` | Necesaria para el objetivo de soberanía operativa. |

## Próxima acción basada en evidencia

La próxima acción correcta es ejecutar una **línea base reproducible P0** después de los cambios locales: `npm run lint`, `npx tsc --noEmit --skipLibCheck`, `npm run build`, inventario de dependencias, revisión de secretos y verificación del paquete offline. Si cualquier gate falla, el estado seguirá siendo `PARTIAL` con causa y no se elevará artificialmente a 10/10.

## Referencias

[1]: https://owasp.org/www-project-application-security-verification-standard/ — OWASP Application Security Verification Standard.  
[2]: https://www.w3.org/TR/WCAG22/ — Web Content Accessibility Guidelines 2.2.  
[3]: https://github.com/belentani7/manosabiertas — Repositorio canónico de Manos Abiertas.
