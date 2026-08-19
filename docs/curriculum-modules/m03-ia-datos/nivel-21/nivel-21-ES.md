# Módulo 3: IA Aplicada a los Datos — Nivel 21
## Idioma: ES · Dificultad: Copa
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Organizar los datos del proyecto final antes de analizarlos.
- Profundizar la limpieza de datos del nivel 11 con datos de nuestra propia vida.
- Dejar la hoja lista para que una herramienta de IA la entienda.
- Anotar qué se corrige y por qué, para que el resultado sea digno de confianza.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Datos limpios | Datos sin duplicados, huecos ni errores que engañan al análisis. |
| Estructura | La forma de la tabla: filas para los casos, columnas para las características. |
| Formato | El tipo de cada dato (número, texto, fecha); debe ser el mismo en toda la columna. |
| Cabecera | La primera fila, que nombra cada columna con claridad. |
| Duplicado | La misma fila repetida dos veces, que cuenta doble si no se quita. |

## 📚 Lección principal
Bienvenido de nuevo a la banda Copa. En el nivel 20 elegimos la pregunta de nuestro proyecto final y lo planificamos: alcance, entregable y cronograma. Hoy bajamos del mapa a la tierra y nos arremangamos: llega el momento de poner los datos en orden. Es como antes de cocinar una gran comida para la familia: primero se limpia y se organiza la cocina, y solo después se enciende el fuego.

Los datos de nuestro proyecto pueden venir de muchas fuentes. De los recibos y facturas de la casa, de una encuesta a los vecinos, de los datos abiertos que aprendimos a descargar en el nivel 14. Vengan de donde vengan, casi nunca llegan perfectos. Traen repeticiones, huecos y errores de tipeo. Nuestro trabajo hoy es ese: ordenar la casa antes de invitar a la IA.

Recordemos la regla de oro del nivel 11: los datos sucios engañan. Si una hoja tiene filas repetidas, una compra puede contar dos veces. Si faltan casillas, los totales salen falsos. Si un gasto aparece como número y otro como texto, no se pueden sumar. Todo error pequeño se convierte en un error grande cuando lo multiplica la máquina. Por eso los profesionales dicen: basura entra, basura sale.

Primero, la estructura. Una buena tabla es como un armario ordenado: cada cosa en su sitio. Cada fila es un caso: una compra, una persona, un mes. Cada columna es una característica de ese caso: fecha, importe, concepto. Si mezclamos cosas distintas en una misma fila, la hoja se vuelve ilegible para nosotros y también para la IA. Estructure antes de analizar.

Segundo, la cabecera. La primera fila debe decir qué hay en cada columna: "fecha", "importe", "concepto", "categoría". Sin cabecera, ni un humano ni una máquina saben qué significa cada número. La cabecera es la etiqueta del frasco: sin ella, no sabemos qué contiene. Dedique tiempo a nombrar bien las columnas; es tiempo ganado.

Tercero, el formato. Los números deben ser números, las fechas fechas y el texto texto. Un "05/03" puede leerse como 5 de marzo o como 3 de mayo según el país; la IA no adivina. En Google Sheets puede fijar el formato de cada columna con "Formato" y "Número". Cuando toda la columna habla el mismo idioma, las fórmulas y las preguntas a la IA funcionan.

Cuarto, los cinco problemas clásicos que ya conocemos del nivel 11: duplicados, faltantes, errores de tipeo, formatos mezclados y valores imposibles. Un duplicado se quita con "Datos" y "Quitar duplicados". Un faltante se rellena o se marca con claridad. Un valor imposible, como un gasto de mil millones de euros o una edad de 400 años, se revisa y se corrige. Cada problema tiene su remedio.

La buena noticia es que las herramientas de hoy nos ayudan a limpiar. La propia hoja tiene herramientas de validación: puede avisar cuando un dato no encaja. Y la IA también sirve aquí: podemos subir nuestra tabla a un chat y pedirle "¿ves errores o datos raros en esta tabla?". La IA encuentra patrones que el ojo cansado pasa por alto. Pero recuerde el criterio del nivel 19: la respuesta de la máquina se revisa, no se copia.

¿Y por qué tanto cuidado con los datos del propio proyecto? Porque lo que se analiza con IA vale lo que valen los datos que recibe. Una tabla limpia es como darle a la IA un recado claro: entiende la pregunta, entiende la tabla y responde mejor. Una tabla sucia es como pedir un plato sin lavar los ingredientes: el resultado, por bonito que parezca, no se puede comer.

Este orden también sirve fuera de la pantalla. Organizar los papeles del NIE, del SEPE o del banco en carpetas claras, con nombres y fechas, es la misma disciplina que limpiar una hoja. El inmigrante que tiene sus papeles ordenados resuelve trámites en minutos lo que a otros les cuesta horas. El orden en los datos y en los papeles es un superpoder práctico y muy valioso.

En el nivel 22 llegará el momento dulce: preguntarle a la IA sobre nuestros datos sin programar una sola línea. Pero esa conversación solo dará buenos frutos si hoy dejamos la mesa preparada. Dedique este nivel a dejar su hoja limpia, clara y honesta. La Copa se construye sobre cimientos que no se ven, y hoy estamos cimentando.

## 💡 Ejemplos prácticos
### Ejemplo 1: El presupuesto de Rosa
Rosa anotó un mes de compras en una hoja. Encuentra dos filas repetidas (el mismo recibo apuntado dos veces), un hueco donde no escribió el importe del pan y una casilla con "25.5,60" imposible de sumar. Corrige los tres problemas y su total mensual cambia: ahora sí es de verdad.

### Ejemplo 2: La lista de socios de Juan
Juan lleva la lista de socios de su asociación. Un socio aparece dos veces con el teléfono escrito de forma distinta ("612 34 56" y "6123456"), y otro sin nombre. Unifica los formatos, quita el duplicado y marca el hueco. La lista queda lista para la asamblea.

### Ejemplo 3: La encuesta del barrio de Carmen
Carmen bajó un CSV de datos abiertos (nivel 14) sobre vivienda del barrio. Al revisarlo encuentra edades de 180 años y barrios escritos de tres maneras. Corrige lo imposible y unifica los nombres. Su gráfico final ya no miente.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja de su proyecto final del nivel 20, o cree una nueva llamada "Mis datos".
Paso 2. Organice la estructura: una columna por característica y una fila por caso.
Paso 3. Compruebe la cabecera: ¿la primera fila nombra cada columna con claridad?
Paso 4. Fije el formato de cada columna (número, fecha, texto) en Google Sheets.
Paso 5. Use "Quitar duplicados" y anote cuántos había.
Paso 6. Busque huecos y valores imposibles; corríjalos o márquelos con claridad.
Paso 7. Suba la tabla a un chat de IA y pregunte: "¿ves errores en esta tabla?". Revise las respuestas.
Paso 8. Guarde la versión limpia como "Mis datos limpios" y escriba qué problemas encontró y cómo los arregló.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es una buena cabecera? a) Una fila de colores. b) La primera fila que nombra cada columna con claridad. c) Un título en mayúsculas.
2. ¿Por qué importa el formato? a) Porque queda bonito. b) Porque números, fechas y textos deben ser coherentes para analizar bien. c) No importa en absoluto.
3. ¿Qué es un duplicado y por qué hay que quitarlo? a) Una fila repetida que cuenta doble y engaña. b) Un dato que falta. c) Un valor imposible.
4. Un "valor imposible" es... a) Un dato muy caro. b) Un dato que no puede ser cierto, como una edad de 400 años. c) Un número muy grande.
5. ¿Qué se hace primero en un proyecto de datos? a) Visualizar. b) Limpiar y ordenar los datos antes de analizar. c) Preguntar a la IA.

Respuestas: 1-b, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensión ética
- Limpiar no es maquillar: corregimos errores reales, no cambiamos datos para que digan lo que queremos.
- Honestidad con los huecos: si un dato falta, se dice y se marca; no se inventa para llenar.
- Cuidado con los datos ajenos: si la tabla tiene datos de otras personas, no se comparte sin permiso.
- Documentar la limpieza: anotar qué se cambió y por qué permite que otros confíen en el resultado.
- La tabla limpia es un regalo para quien la use después: la transparencia del nivel 19 también se practica aquí.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Quitar duplicados, ordenar, validar y limpiar la tabla | https://sheets.google.com |
| LibreOffice Calc | Hoja de cálculo libre, gratuita y sin cuenta | https://www.libreoffice.org |
| OpenRefine | Limpieza avanzada de datos, gratuita y abierta | https://openrefine.org |
| Gemini | Pedir que revise la tabla y detecte errores | https://gemini.google.com |

## 🧠 Resumen y puente
- La cabecera clara, la estructura ordenada y el formato único son la base de una tabla limpia.
- Los cinco problemas clásicos: duplicados, faltantes, errores de tipeo, formatos mezclados y valores imposibles.
- La IA también ayuda a limpiar, pero sus respuestas se revisan (criterio del nivel 19).
- Los datos limpios son la condición para que la IA entienda nuestro proyecto.
En el nivel 22 aprenderemos a hacer preguntas a nuestros datos con IA, sin programar una sola línea.
