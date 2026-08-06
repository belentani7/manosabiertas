# MANUAL DE CONTRIBUCIÓN DE CONTENIDO

> Manual para voluntarios y ONG que quieren añadir contenido y fuentes al catálogo de "Manos Abiertas".
> Explica cómo se organiza el catálogo, los 6 pasos para añadir contenido y las reglas de calidad.
> Léelo completo antes de enviar tu primera ficha.

## 1. Cómo se estructura el catálogo

El catálogo se organiza en 14 categorías, de la A a la N. Cada ficha de fuente y cada curso tiene un código, por ejemplo F-012 o C-045. El código indica la categoría y el número de orden dentro de ella.

| Código | Categoría | Qué contiene |
| --- | --- | --- |
| A | Papeles y trámites | NIE, TIE, empadronamiento, citas, registros |
| B | Empleo y trabajo | Contratos, nóminas, SEPE, EURES, autónomos |
| C | Sanidad y salud | Tarjeta sanitaria, citas, urgencias, mutuas |
| D | Educación y formación | Matrícula, homologación, colegios, becas |
| E | Vivienda | Alquiler, fianzas, avales, contratos |
| F | Derechos y protección | Asilo, residencia, reagrupación, ciudadanía |
| G | Dinero y bancos | Cuentas, impuestos, envíos de dinero |
| H | Idioma y comunicación | Aprender español y portugués, frases útiles |
| I | Transporte y movilidad | Abonos, billetes, carnet de conducir |
| J | Datos y tecnología | Páginas oficiales, apps, seguridad digital |
| K | Vida diaria | Compras, servicios, trámites del día a día |
| L | Portugal específico | NIF, SNS, AIMA, IEFP, NISS |
| M | Seguridad y emergencias | Teléfonos de urgencia, cómo actuar |
| N | Ocio y comunidad | Bibliotecas, asociaciones, actividades gratis |

Regla: un contenido pertenece a una sola categoría. Si duda entre dos, usa la primera de la lista.

## 2. Pipeline de ingestión en 6 pasos

Todo contenido nuevo pasa por los mismos 6 pasos, en este orden. No se salta ninguno.

| Paso | Qué haces | Qué sale |
| --- | --- | --- |
| 1. Elegir fuente | Buscas una fuente oficial y útil: un organismo, una noticia o un informe | La URL de la fuente elegida |
| 2. Crear la ficha | Completas la plantilla de ficha con los datos de la fuente | Ficha F-000 lista |
| 3. Resumir 1/3 | Resumes el texto a un tercio de su longitud y citas la fuente | Resumen con enlace |
| 4. Verificar | Compruebas que la URL responde y que la licencia es válida | Ficha aprobada |
| 5. Construir lecciones | Conviertes el resumen en lecciones de lectura fácil | Curso C-000 |
| 6. Marcar estado | Escribes REAL o PLACEHOLDER en la ficha y en el curso | Contenido etiquetado |

El estado REAL significa que el contenido está verificado y puede publicarse. PLACEHOLDER significa que falta verificar o que se usa como ejemplo provisional.

## 3. Plantillas

Copia estas plantillas para cada ficha de fuente y para cada curso.

Plantilla de ficha de fuente:

```markdown
# Ficha de fuente
- ID: F-000
- Título:
- Idioma: (es / pt / en / fr / ar)
- Nivel de lectura: (1 / 2 / 3)
- URL:
- Organismo o autor:
- Licencia:
- Fecha de consulta:
- Categoría: (A-N)
- Resumen (1/3 del original):
- Estado: (REAL / PLACEHOLDER)
```

Plantilla de curso:

```markdown
# Curso
- ID: C-000
- Categoría: (A-N)
- Título del curso:
- Fuentes usadas (IDs):
- Nivel de lectura: (1 / 2 / 3)
- Público: (ej. recién llegado, trabajador, familia)
- Duración estimada:
- Lecciones:
  1.
  2.
  3.
- Estado: (REAL / PLACEHOLDER)
```

## 4. Licencias aceptadas

Solo se aceptan fuentes con licencia abierta o gratuita para uso educativo. Antes de publicar, comprueba la licencia en la página de la fuente (normalmente en el pie de página o en "condiciones de uso").

| Licencia | Qué te permite | Cómo se reconoce |
| --- | --- | --- |
| Dominio público (PD) | Usar sin pedir permiso ni citar | "Dominio público", "Public Domain" |
| CC0 | Igual que el dominio público | "CC0 1.0" |
| CC-BY | Usar citando al autor | "CC BY 4.0" |
| CC-BY-SA | Usar citando y compartir igual | "CC BY-SA 4.0" |
| MIT | Usar, cambiar y distribuir código | "MIT License" |
| Apache 2.0 | Igual que MIT con más garantías | "Apache License 2.0" |
| Gratuito educativo | Contenido libre para enseñanza | "Open Educational Resources", "uso educativo" |

Cómo verificar una licencia:

1. Entra en la página de la fuente.
2. Busca "licencia", "condiciones de uso" o "copyright" en el pie de página.
3. Si no encuentras la licencia, busca en internet el nombre de la fuente y la palabra "licencia".
4. Si la licencia no está clara, no uses la fuente. Hay miles de fuentes abiertas.

No se aceptan: contenido con copyright sin permiso, contenido sacado de otra web sin permiso, ni capturas de pantalla de páginas con avisos legales.

## 5. Checklist de verificación

Antes de enviar tu ficha, comprueba todos los puntos. Si alguno falla, no envíes.

- [ ] La URL responde y no da error 404
- [ ] La licencia está en la lista aceptada y escrita en la ficha
- [ ] El idioma y el nivel de lectura están declarados
- [ ] El resumen cita la fuente y no es copia y pega del original
- [ ] La información está actualizada (fecha de consulta escrita)
- [ ] No hay enlaces rotos dentro del texto
- [ ] El texto cumple las 8 reglas de lectura fácil del glosario
- [ ] La categoría A-N está asignada
- [ ] El estado REAL o PLACEHOLDER está marcado

## 6. Flujo de revisión en 3 pasos

Cada ficha la revisa el equipo antes de publicarse. La revisión tiene 3 pasos:

1. Revisión técnica. Otro voluntario comprueba la URL, la licencia, la fecha y los datos de la ficha.
2. Revisión de lectura fácil. Una persona del equipo lee el texto en voz alta y marca las frases difíciles o largas. Se corrigen con las 8 normas del glosario.
3. Aprobación y publicación. La persona responsable del catálogo valida el contenido, asigna el código definitivo y lo publica en la categoría correcta.

Si en cualquier paso hay una duda, la ficha vuelve al paso anterior. No se publica nada a medias: se publica cuando las 3 revisiones están hechas.
