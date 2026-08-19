# Material didactico Manos Abiertas - indice operativo

Fecha de inspeccion: 2026-08-12

## Estado

El canon ya contiene material didactico integrado en codigo:

- `src/data/level0-courses.ts`: alfabetizacion digital absoluta para adultos 40+.
- `src/data/ai-courses.ts`: cursos practicos de IA por herramienta.
- `src/data/external-courses.ts`: cursos externos filtrables.
- `src/data/noia-courses.ts`: academia NO.IA_CORE.
- `src/data/generated-courses/`: cursos generados de primeros 30 dias, portugues, espanol diario, emprendimiento y ciberseguridad.
- `src/components/manos-abiertas/courses-library-section.tsx`: biblioteca navegable.
- `src/components/manos-abiertas/level0-academy.tsx`: lector paso a paso con progreso local.
- `src/components/manos-abiertas/learn-ai-section.tsx`: aprendizaje de IA.

## Material didactico fuente pendiente de integracion

Fuente principal separada: carpeta local de trabajo `manos abiertas deploy`, fuera del repositorio publico.

Material organizado:

- `docs/from-downloads/README.md`
- `docs/from-downloads/python-inventory.md`
- `docs/from-downloads/python-generative-map.md`
- `docs/from-downloads/learning/CURSO.txt`
- `docs/from-downloads/learning/08_Curso_Meta_AI.docx`
- `docs/from-downloads/learning/De la Practica Inmediata a la Maestria Estrategica_ Un Plan de Implementacion Integral para Dominar la IA con Qwen Chat.pdf`
- `docs/from-downloads/learning/El Ecosistema Digital Abierto_ Un Mapa de Fuentes Masivas para Recursos Educativos en Portugues y 38 Idiomas.pdf`
- `docs/from-downloads/manos-abiertas/Claude-Proyecto humanitario con material existente.md`
- `docs/from-downloads/manos-abiertas/TODA_LA_INFO_PROCESO_COMPLETO.md`
- `upload/from-downloads/chats/`
- `upload/from-downloads/gemini/`
- `upload/from-downloads/qwen/`
- `upload/from-downloads/media/`

Conteo inspeccionado:

- `docs/from-downloads`: 13 archivos, 2.49 MB.
- `upload/from-downloads`: 103 archivos, 330.21 MB.

## Clasificacion

### Integrar primero

1. Curso Qwen completo desde `CURSO.txt` y PDF de Qwen.
2. Curso Meta AI desde `08_Curso_Meta_AI.docx`.
3. Guia de ecosistema digital abierto para portugues y 38 idiomas.
4. Material multimedia de prompts desde `upload/from-downloads/media`.
5. Chats didacticos sobre aprendizaje de IA, informatica, Git, prompts y herramientas gratuitas.

### Mantener como referencia, no codigo

- `Claude-Proyecto humanitario con material existente.md`
- `TODA_LA_INFO_PROCESO_COMPLETO.md`
- `notes-claude-chat-manos-abiertas-multilingual-center.txt`
- `PROMPT-BANCO-DATOS-ABIERTO.md`

### Excluir de contenido educativo publico

- Automatizacion de registros, extraccion de claves, proxies o acceso a cuentas.
- Material con datos personales o privados.
- Material no revisado de APIs, tokens o credenciales.

## Ruta de upgrade recomendada

1. Crear un modelo de datos unico para lecciones didacticas:
   - titulo
   - nivel
   - audiencia
   - duracion
   - objetivos
   - pasos
   - practica
   - fuente
   - estado de revision

2. Convertir los documentos fuente a modulos revisables:
   - Qwen
   - Gemini
   - Meta AI
   - prompt engineering
   - seguridad basica
   - informatica inicial

3. Integrar solo contenido revisado en:
   - `src/data/generated-courses/`
   - `src/data/ai-courses.ts`
   - `src/data/level0-courses.ts`

4. Mantener los assets multimedia en una seccion de mediateca con procedencia.

5. Validar:
   - `npm run test:core`
   - `npm run typecheck`
   - `npm run lint`
   - build final solo cuando haya espacio suficiente.

## Regla de seguridad

El material didactico se puede usar para Manos Abiertas, pero cada bloque debe conservar procedencia y pasar revision de privacidad antes de publicarse.
