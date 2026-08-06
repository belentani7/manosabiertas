# ROADMAP-2026-Q3 — Plan de fases de Manos Abiertas

> Serie de prompts y documentos del proyecto "Manos Abiertas".
> Este roadmap ejecuta la vision de PROMPT-VISION-PLATAFORMA (12 modulos), parte del estado
> real de AUDITORIA-FINAL, se apoya en la capa tecnica de MASTER-PROMPT-PERFECTO, exige
> evidencia por fase como PROMPT-MINIMAL-EXIGENTE y usa el catalogo de PROMPT-BANCO-DATOS-
> ABIERTO y la capa i18n de PROMPT-INTERNACIONALIZACION.
> Horizonte: Q3 2026 (13 semanas). La serie completa abarca 16 semanas; las fases 4 y 5
> desbordan al inicio de Q4. No es una promesa de fechas, es una secuencia de prioridades.

## 0. Resumen de las fases

| Fase | Nombre | Modulos | Semanas | Resultado clave |
|------|--------|---------|---------|-----------------|
| F0 | Fundacion | M1 + esquema de datos | 2 | Cuenta por codigo y datos comunes |
| F1 | Nucleo | M3 + M2 | 3 | Centro de aprendizaje gamificado |
| F2 | Contenido | M4 + M5 + migracion | 3 | Cursos y mediateca con contenido real |
| F3 | Medicion | M6 + M7 | 3 | Evaluaciones y dashboard |
| F4 | Madurez | M8 + M9 | 3 | Acompanamiento y paridad Coursera |
| F5 | Sistemas | M10 + M11 + M12 | 2 | Motor de mejoras, material y auditoria |

## Fase 0 — Fundacion (M1 cuenta por codigo + esquema de datos comun)

- Objetivo: que cualquier persona entre a la plataforma con un codigo compartido (sin correo
  ni password) y que todos los modulos futuros lean el mismo esquema de datos.
- Entregables:
  - Flujo de acceso por codigo: generar, compartir y validar codigo; sesion local (cookie).
  - Esquema de datos comun: usuario, curso, leccion, progreso, evaluacion, certificado.
  - Limpieza de datos placeholder de src/data (hallazgo G4 de la auditoria).
  - Persistencia sin backend: cookie + localStorage, con contrato tipado.
- Dependencias: P0 de AUDITORIA-FINAL (navegacion coherente, i18n al 100 %).
- Puertas de calidad (4 capas):
  - Vision: el codigo se explica a una persona de baja alfabetizacion digital en menos de un minuto.
  - Tecnica: el esquema esta versionado y tipado; no hay datos simulados sin etiqueta.
  - Evidencia: test de flujo completo de acceso con codigo en es y en ar.
  - Utilidad: medicion de llegada a la primera leccion con codigo en 2 semanas.
- Duracion: 2 semanas.
- Criterio de salida de fase: el flujo de codigo funciona de extremo a extremo sin backend,
  y los modulos posteriores leen el esquema comun sin adaptaciones.

## Fase 1 — Nucleo (M3 centro de aprendizaje + M2 gamificacion)

- Objetivo: un centro de aprendizaje navegable por cursos y un sistema de incentivos
  (puntos y rachas) que enganche al publico de baja alfabetizacion digital.
- Entregables:
  - M3: listado de cursos, detalle, lecciones lineales y navegacion entre lecciones.
  - M2: puntos por leccion completada, rachas de constancia y logros simples.
  - Integracion de gamificacion con el esquema de progreso de F0.
- Dependencias: Fase 0 (esquema de datos y cuenta por codigo).
- Puertas de calidad (4 capas):
  - Vision: el centro se entiende sin tutorial; cada boton tiene un solo proposito.
  - Tecnica: no hay rutas huerfanas nuevas; SSR/SSG real del contenido (hallazgo G1).
  - Evidencia: recorrido de 3 lecciones completo en movil y en escritorio.
  - Utilidad: al menos 20 usuarios activos semanales probando el nucleo.
- Duracion: 3 semanas.
- Criterio de salida de fase: un usuario nuevo completa una leccion con puntos y racha
  sin ayuda externa; la gamificacion no estorba al aprendizaje.

## Fase 2 — Contenido (M4 cursos adaptados + M5 mediateca + migracion de cursos existentes)

- Objetivo: pasar de pocas lecciones de muestra a un primer lote de cursos reales y una
  mediateca reutilizable, adaptados a niveles y a los idiomas prioritarios.
- Entregables:
  - M4: cursos por nivel (iniciacion, intermedio, avance) y por contexto migratorio.
  - M5: mediateca con videos, guias y transcripciones (base para subtitulos).
  - Migracion de los cursos existentes de formato estatico al esquema comun de F0.
  - Cursos de prueba completos en es, con subtitulado piloto en en y fr.
- Dependencias: Fase 1 (estructura de curso y progreso); catalogo de PROMPT-BANCO-DATOS-ABIERTO.
- Puertas de calidad (4 capas):
  - Vision: cada curso responde a un problema migratorio real documentado.
  - Tecnica: los contenidos se sirven desde datos estructurados, no desde JSX fijo.
  - Evidencia: checklist de curso (temario, lecciones, transcripcion, test de salida).
  - Utilidad: tasa de retencion entre leccion 1 y leccion final del curso piloto.
- Duracion: 3 semanas.
- Criterio de salida de fase: el curso piloto se completa de principio a fin con progreso
  persistente y material descargable.

## Fase 3 — Medicion (M6 evaluaciones + M7 dashboard de progreso)

- Objetivo: comprobar que se aprende: evaluaciones adaptadas y un panel de progreso que la
  persona pueda ver y compartir.
- Entregables:
  - M6: preguntas tipo test y de completar, adaptadas por nivel; banco de preguntas.
  - M7: dashboard de progreso por curso, rachas y logros alcanzados.
  - Evaluacion de cierre por curso y punto de acceso al futuro certificado.
- Dependencias: Fase 2 (contenido de los cursos).
- Puertas de calidad (4 capas):
  - Vision: los resultados se comunican en lenguaje sencillo, sin numeros brutos.
  - Tecnica: evaluaciones sin feedback ambiguo; resultados persistidos y auditables.
  - Evidencia: al menos 5 evaluaciones validadas contra errores de red y de RTL.
  - Utilidad: la persona sabe en todo momento que le falta para terminar el curso.
- Duracion: 3 semanas.
- Criterio de salida de fase: evaluaciones y dashboard funcionan en los 5 idiomas
  prioritarios sin perdida de progreso al recargar.

## Fase 4 — Madurez (M8 acompanamiento + M9 paridad Coursera)

- Objetivo: pasar de contenido a servicio: acompanamiento humano y alcanzar los dominios
  centrales de Coursera (temario, rutas, evaluaciones, foros basicos, certificados).
- Entregables:
  - M8: canal de acompanamiento (dudas, avisos y recordatorios) sin correo obligatorio.
  - M9: rutas de aprendizaje, certificado de finalizacion y foro basico por curso.
  - Etiquetado de calidad de traduccion visible en todos los locales (i18n B.4).
- Dependencias: Fase 3 (progreso y evaluaciones medibles).
- Puertas de calidad (4 capas):
  - Vision: el acompanamiento responde en menos de 48 horas en los idiomas prioritarios.
  - Tecnica: certificado generado sin backend (firma local verificable, sin URLs inventadas).
  - Evidencia: prueba de que el certificado y el foro funcionan en ar con RTL correcto.
  - Utilidad: un estudiante completa una ruta de 2 cursos y descarga su certificado.
- Duracion: 3 semanas (desborda al inicio de Q4).
- Criterio de salida de fase: los dominios 1, 2, 3, 4 y 17 de la tabla de paridad de la
  auditoria estan operativos.

## Fase 5 — Sistemas (M10 motor de mejoras + M11 material didactico + M12 auditoria)

- Objetivo: cerrar el ciclo: la plataforma aprende de su uso, distribuye material didactico
  y audita su propio estado contra la vision.
- Entregables:
  - M10: motor de mejoras que propone ajustes de contenido y UX a partir del uso.
  - M11: material didactico descargable y reutilizable por organizaciones.
  - M12: auditoria interna periodica con reemision de AUDITORIA-FINAL.
- Dependencias: Fases 1-4 generando datos de uso reales.
- Puertas de calidad (4 capas):
  - Vision: las mejoras propuestas se priorizan contra la mision, no contra el alcance.
  - Tecnica: M12 automatiza la deteccion de keys, rutas huerfanas y cobertura i18n.
  - Evidencia: al menos un ciclo completo mejora-con-proposicion-verificada.
  - Utilidad: las organizaciones descargan material con licencia clara del catalogo abierto.
- Duracion: 2 semanas.
- Criterio de salida de fase: la auditoria automatica pasa sin bloqueos P0 y M10 genera
  propuestas accionables respaldadas por datos de uso.

## Metodologia de puertas de calidad

Cada fase se cierra con una puerta de 4 capas. Una fase no avanza hasta que las cuatro
evaluan "cumple". Las capas se revisan en orden fijo:

- Vision: la entrega cumple la definicion de producto del modulo (se lee en PROMPT-VISION-PLATAFORMA).
- Tecnica: el codigo pasa build, lint y las pruebas de la capa i18n (PROMPT-INTERNACIONALIZACION).
- Evidencia: existe una prueba ejecutable que demuestra el comportamiento, no una captura declarada.
- Utilidad: la persona usuaria final puede completar la accion clave de la fase sin ayuda.

Formato de cada puerta: una lista de verificacion por capa, firmada en la reemision de
AUDITORIA-FINAL. Si una capa falla, la fase retrocede a un plan de correccion acotado y no
se acumula deuda a la siguiente fase.

## Tabla resumen de fases

| Fase | Modulos | Semanas | Dependencias | Salida de fase |
|------|---------|---------|--------------|----------------|
| F0 | M1, esquema | 2 | P0 auditoria | Flujo de codigo sin backend sobre esquema comun |
| F1 | M3, M2 | 3 | F0 | Leccion completada con puntos y racha sin ayuda |
| F2 | M4, M5, migracion | 3 | F1 | Curso piloto completo con progreso persistente |
| F3 | M6, M7 | 3 | F2 | Evaluaciones y dashboard en los 5 idiomas prioritarios |
| F4 | M8, M9 | 3 | F3 | Rutas, certificado y foro operativos (dominios 1-4, 17) |
| F5 | M10, M11, M12 | 2 | F1-F4 | Auditoria sin P0 y mejoras basadas en uso |

## Riesgos y mitigacion

| # | Riesgo | Probabilidad | Impacto | Mitigacion |
|---|--------|-------------|---------|------------|
| R1 | Scope creep en F2 (la migracion de cursos se convierte en construir todos los cursos) | Alta | Alto | Congelar el catalogo de F2: migrar 1 curso piloto, el resto entra en F4/F5 |
| R2 | Traduccion humana de los 5 idiomas no disponible a tiempo | Media | Alto | Entregar en es primero, marcar el resto como auto; subir a humano por fases |
| R3 | Cobertura i18n rompe builds y bloquea fases | Media | Alto | Script de cobertura (i18n B.5) en CI desde F0; nunca fallback silencioso |
| R4 | Confundir datos placeholder con datos reales (G4) | Media | Medio | Inventario de datos y etiqueta visible en src/data desde F0 |
| R5 | Rendimiento movil con 39 versiones prerenderizadas | Media | Medio | Prueba de Lighthouse por fase; lazy de mediateca en F2 |
| R6 | Regresion RTL en fases 4-5 (foros, certificados) | Media | Medio | Prueba visual por fase en ar; propiedades CSS logicas desde F1 |
| R7 | Licencias del catalogo open-source no revisadas | Baja | Alto | Revision de licencias en F2 antes de publicar material |
| R8 | Friccion de acceso del publico de baja alfabetizacion | Media | Alto | Acceso por codigo (M1) como unica via en F0-F3; sin correo ni password |

## Cierre y proximos pasos

Ejecutar en este orden: cerrar P0 de la auditoria, entrar en Fase 0 y no avanzar de fase sin
pasar la puerta de calidad de las 4 capas. Al cierre de cada fase se reemite AUDITORIA-FINAL
y se reestima el resto del roadmap. El criterio de exito del trimestre es llegar al final de
la Fase 3 (medicion) con datos reales de uso; F4 y F5 son el puente hacia Q4.
