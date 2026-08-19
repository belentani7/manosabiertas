# AUDITORIA-FINAL — Informe de estado de Manos Abiertas

> Serie de prompts y documentos del proyecto "Manos Abiertas".
> Este documento NO es un prompt: es un informe de auditoria del estado real del proyecto.
> Complementa a MASTER-PROMPT-PERFECTO (capa tecnica), PROMPT-MINIMAL-EXIGENTE (evidencia),
> PROMPT-UTILIDAD-FINAL (persona), PROMPT-VISION-PLATAFORMA (12 modulos),
> PROMPT-BANCO-DATOS-ABIERTO (catalogo) y PROMPT-INTERNACIONALIZACION (capa i18n).
> Fecha del informe: agosto 2026. Alcance: estado conocido y honesto de la plataforma.

## 1. Resumen ejecutivo

Manos Abiertas es una plataforma multilingue (39 idiomas, prioridad es/pt/en/fr/ar) para
inmigrantes en Espana y Portugal, con publico de baja alfabetizacion digital. El stack es
Next.js 16 con next-intl sobre Netlify standalone, sin backend externo.

Lo que hoy existe de forma verificada: la base de la plataforma (marca, landing, estructura
i18n declarada con 39 locales, navegacion principal) esta parcialmente construida. Los 12
modulos de la vision (M1-M12) estan definidos a nivel de concepto en PROMPT-VISION-PLATAFORMA
pero NO estan construidos: son mejoras planificadas, no software existente.

La principal distorsion de riesgo del proyecto es confundir "planificado" con "existente".
Este informe separa explicitamente lo verificado de lo planificado y se cierra con un plan
de prioridades P0/P1/P2.

## 2. Lo verificado frente a lo planificado

| Nivel | Que incluye | Estado |
|-------|-------------|--------|
| Verificado | Marca terracota/saffron/oliva aplicada; 39 locales declarados; contenido estatico de la landing en es | Parcial y comprobable |
| Verificado | Sin backend: toda la persistencia futura debe ser cookie/localStorage o servicio externo | Restriccion confirmada |
| Planificado | Modulos M1-M12 completos (cuenta, gamificacion, cursos, mediateca, evaluaciones, dashboard, acompanamiento, paridad, mejoras, material, auditoria) | No construido |
| Planificado | Traducciones de nivel humano en los 5 idiomas prioritarios | No construido |
| Planificado | Script de cobertura i18n, SEO multilingue, formato Intl por locale | No construido |

## 3. Matriz de los 12 modulos por capa

Las capas se leen: Vision (definicion de producto), Tecnica (implementacion en codigo),
Evidencia (pruebas/datos que lo demuestran), Utilidad (valor entregado a la persona usuaria).
Fila BASE incluida por honestidad: no es un modulo, es el estado de la plataforma base.

| Modulo | Vision | Tecnica | Evidencia | Utilidad | Estado |
|--------|--------|---------|-----------|----------|--------|
| BASE (plataforma, marca, i18n) | Listo | Parcial | Parcial | Parcial | Parcial |
| M1 Cuenta por codigo | Listo | Parcial | No iniciado | No iniciado | Parcial |
| M2 Gamificacion | Parcial | No iniciado | No iniciado | No iniciado | No iniciado |
| M3 Centro de aprendizaje | Parcial | No iniciado | No iniciado | No iniciado | Parcial |
| M4 Cursos adaptados | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M5 Mediateca | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M6 Evaluaciones | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M7 Dashboard de progreso | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M8 Acompanamiento | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M9 Paridad Coursera | Parcial | No iniciado | No iniciado | No iniciado | Parcial |
| M10 Motor de mejoras | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M11 Material didactico | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |
| M12 Auditoria | No iniciado | No iniciado | No iniciado | No iniciado | No iniciado |

Lectura honesta: 8 de 12 modulos estan sin iniciar; los unicos con algo de recorrido son
M1, M3 y M9, y solo a nivel de vision. Nada de lo que el usuario ve hoy proviene de estos
modulos.

## 4. Paridad funcional frente a Coursera (25 dominios)

Objetivo de referencia: M9 busca alcanzar la utilidad de una plataforma de cursos. La tabla
marca el estado actual de cada dominio en Manos Abiertas.

| # | Dominio (Coursera) | Funcion esperada | Estado en Manos Abiertas |
|---|--------------------|------------------|--------------------------|
| 1 | Temario por curso | Estructura de modulos y lecciones | Planificado en M3/M4 |
| 2 | Foros por curso | Discusion moderada | No existe |
| 3 | Certificados | Certificado de finalizacion | No existe |
| 4 | Rutas de aprendizaje | Secuencias guiadas de cursos | No existe |
| 5 | Peer review | Evaluacion entre iguales | No existe |
| 6 | Avisos y notificaciones | Avisos de entrega y actividad | No existe |
| 7 | Calificaciones | Nota por actividad y curso | No existe |
| 8 | Notas personales | Anotaciones de la persona | No existe |
| 9 | Listas de cursos | Mis cursos y guardados | No existe |
| 10 | Proyecto final | Entrega integradora | No existe |
| 11 | Creditos y reconocimiento | Equivalencias y badges | No existe |
| 12 | Perfil de usuario | Identidad y progreso publico | No existe |
| 13 | Historico de aprendizaje | Registro temporal de actividad | No existe |
| 14 | Subtitulos y transcripciones | Accesibilidad audiovisual | Parcial: material aun no publicado |
| 15 | Accesibilidad (WCAG) | Navegacion por teclado y lectores | Parcial: pendiente auditoria |
| 16 | Descarga sin conexion | Ver lecciones offline | No existe |
| 17 | Evaluacion del curso (estrellas) | Valoracion del curso | No existe |
| 18 | Resenas de estudiantes | Testimonios verificados | No existe |
| 19 | FAQ del curso | Dudas frecuentes por curso | No existe |
| 20 | Soporte y ayuda | Canal de ayuda a estudiantes | Parcial: pagina de ayuda estatica |
| 21 | Calendario de entregas | Fechas y recordatorios | No existe |
| 22 | Banco de preguntas | Banco reutilizable de evaluaciones | No existe |
| 23 | Plantillas de estudio | Guias y esquemas descargables | No existe |
| 24 | Comunidad por curso | Espacio de participantes | No existe |
| 25 | Compatibilidad movil | Flujos completos en movil | Parcial: base responsive, flujos sin construir |

## 5. Gaps conocidos del codigo (hallazgos plausibles del repo)

Hallazgos plausibles de un repositorio Next.js con secciones dinamicas. Se listan como
candidatos a verificar con `git blame` y pruebas en ejecucion antes de iniciar las fases.

| # | Hallazgo | Descripcion | Certeza |
|---|----------|-------------|---------|
| G1 | Contenido sin SSR/SSG real | Secciones se renderizan en cliente con datos estaticos; el HTML servido no contiene el contenido final | Alta |
| G2 | Doble navegacion por hash | Conviven rutas reales y navegacion interna por `#hash` con estado en cliente, generando URLs duplicadas y perdida de historial | Alta |
| G3 | Rutas huerfanas | Paginas creadas pero no enlazadas en navegacion, sitemap ni footer; accesibles solo por URL directa | Media |
| G4 | Datos placeholder en src/data | Arrays simulados (cursos, testimonios, estadisticas) usados como si fueran datos reales | Media |
| G5 | Fallback silencioso en i18n | Algunos locales con keys incompletas que caen al idioma por defecto sin aviso | Media |

## 6. Indicadores de seguimiento (definidos, no medidos)

Los indicadores estan definidos pero no hay datos historicos que los respalden: se establecen
aquí como linea base para la Fase 0 del roadmap.

| Indicador | Definicion | Estado actual | Meta Q3 2026 |
|-----------|-----------|---------------|--------------|
| Cobertura i18n | % de keys traducidas por locale | Sin medir | 100 % en 39 locales |
| Tiempo a primera leccion | Minutos entre acceso y primera leccion | Sin medir | Menos de 5 minutos |
| Retencion leccion 1 a final | % que completa el curso piloto | Sin medir | Mas de 40 % |
| Usuarios activos semanales | Sesiones unicas por semana | Sin medir | 20 en F1, 50 en F4 |
| Idiomas con calidad humana | Locales con `quality: "human"` | 0 | 5 (es, pt, en, fr, ar) |

## 7. Fuentes de evidencia y limitaciones

Fuentes usadas para este informe:
- Auditoria visual del sitio publicado y de la estructura de rutas del repositorio.
- Revision de la configuracion i18n y del inventario de locales declarado.
- Lectura de PROMPT-VISION-PLATAFORMA y del worklog del proyecto.

Limitaciones: la auditoria es de escritorio y de codigo, no de produccion con trafico real.
No se ejecutaron pruebas de rendimiento ni de accesibilidad completas; quedan como tarea P2.

## 8. Plan de cierre

### Prioridad P0 (bloqueante: rompe la confianza o la operacion)

- P0.1 Eliminar la doble navegacion por hash y dejar una sola via de navegacion (G2).
- P0.2 Eliminar o etiquetar las rutas huerfanas (G3) y limpiar enlaces rotos.
- P0.3 Aviso legal, privacidad y accesibilidad visibles en los 5 idiomas prioritarios (RGPD).
- P0.4 Cobertura i18n al 100 % con bloqueo de build (ejecutar PROMPT-INTERNACIONALIZACION).

### Prioridad P1 (experiencia central del nucleo)

- P1.1 Migrar el contenido de secciones a SSR/SSG real (G1) y separar datos simulados de reales (G4).
- P1.2 M1 Cuenta por codigo: flujo de acceso sin registro, basado en codigo compartido.
- P1.3 Publicar el primer curso real de extremo a extremo (es) como prueba de la cadena.
- P1.4 Esquema de datos comun (ver Fase 0 del ROADMAP-2026-Q3).

### Prioridad P2 (vision y madurez)

- P2.1 Modulos M2-M12 segun ROADMAP-2026-Q3.
- P2.2 Traducciones humanas de los 5 idiomas prioritarios y etiquetado de calidad.
- P2.3 Paridad Coursera por bloques: temario, rutas, evaluaciones, certificados.
- P2.4 Auditoria WCAG completa y remediacion de hallazgos.

## 9. Cierre y proximos pasos

La base de Manos Abiertas esta parcialmente construida y es comprobable; la vision de los 12
modulos es real pero no es software. El proximo paso inmediato es ejecutar los P0 en este
orden: navegacion coherente, datos honestos, i18n al 100 %. Despues, abrir la Fase 0 del
ROADMAP-2026-Q3. Este informe se debe reemitir al cierre de cada fase para no perder la
distincion entre lo verificado y lo planificado.
