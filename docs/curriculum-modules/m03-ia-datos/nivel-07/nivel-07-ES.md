# Módulo 3: IA Aplicada a los Datos — Nivel 07
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Dominar el gráfico de barras, el más usado de todos.
- Aprender a leer barras comparando alturas con precisión.
- Crear gráficos de barras verticales y horizontales según convenga.
- Descubrir los errores visuales que hacen que un gráfico mienta.
- Decidir cuándo el gráfico de barras es la mejor opción.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Gráfico de columnas | Barras verticales, de pie. Se comparan de izquierda a derecha. |
| Gráfico de barras | Barras horizontales, tumbadas. Se comparan de arriba abajo. |
| Escala | Los valores que marcan el eje, como el regle de una regla. |
| Línea base | El punto de partida del eje, normalmente el cero. |
| Etiqueta | El texto que identifica cada barra o cada eje. |

## 📚 Lección principal
De todos los gráficos, el de barras es el rey. Aparece en los telediarios, en los informes del banco, en las noticias del móvil y en los carteles del ayuntamiento. Y hay una razón: el ojo humano compara alturas de una forma rapidísima y precisa. Cuando dos barras están al lado, nuestro cerebro dice al instante cuál es más alta. El gráfico de barras aprovecha esa habilidad natural.

Hay dos presentaciones del mismo gráfico. El de columnas tiene las barras de pie, verticales; es ideal cuando hay pocas categorías y nombres cortos. El de barras tiene las barras horizontales, tumbadas; es mejor cuando hay muchas categorías o los nombres son largos. Piensa en la carta de un restaurante: los platos son nombres largos, por eso las listas van de arriba abajo. Con nombres largos, barras horizontales.

¿Qué pregunta responde el gráfico de barras? "¿Cuánto hay de cada cosa?" y "¿qué es más y qué es menos?". El gasto por categoría, las ventas por tienda, los habitantes por ciudad, las notas por asignatura. Siempre que haya categorías que comparar, las barras funcionan. No sirve, en cambio, para mostrar cambios a lo largo del tiempo con muchos puntos (eso es la línea, nivel 8) ni partes de un todo (eso es el sector, nivel 8 también).

Leer un gráfico de barras correctamente es un proceso de tres miradas. Primera mirada: los títulos de los ejes. ¿Qué mide el eje horizontal y qué el vertical? Segunda mirada: la escala del eje de los valores. ¿Empieza en cero o en otro número? Tercera mirada: las alturas relativas. ¿Cuál es la barra más alta y cuál la más baja? Con esas tres miradas, usted ya ha entendido el gráfico sin que nadie se lo explique.

Aquí llega el momento más importante de este nivel: el truco de la línea base. Un gráfico honesto empieza su escala en cero. Si el eje empieza en cero, una barra del doble de altura significa un valor el doble de grande. Pero si alguien "recorta" el eje y lo hace empezar en 40, una pequeña diferencia de 45 a 50 parecerá una montaña. Es el truco favorito de los gráficos engañosos. Siempre mire de dónde parte el eje.

Un ejemplo cotidiano: el banco le envía un folleto con el gráfico de sus ahorros. Las barras suben y suben, parece que su dinero crece a lo bestia. Pero si mira la escala, el eje empieza en 4.500 euros, no en cero. La subida real es pequeña; el gráfico la ha hecho parecer enorme. Ahora usted sabe mirar la escala antes de emocionarse. Esa mirada crítica vale dinero.

Cuando usted crea sus propias barras, siga tres reglas de honestidad. Primero, deje que el eje empiece en cero (Google Sheets lo hace por defecto; no lo cambie sin motivo). Segundo, ponga etiquetas claras: cada barra con su nombre y el eje con su unidad (euros, kilos, personas). Tercero, no use efectos decorativos que distraigan: tres dimensiones, sombras o colores chillones no añaden información, la quitan.

En Google Sheets, crear un gráfico de columnas es cuestión de tres clics, como vimos en el nivel 4. Seleccione los datos con cabecera, pulse "Insertar" y "Gráfico", y en el panel elija "Gráfico de columnas". Si quiere barras horizontales, elija "Gráfico de barras" en el mismo panel. El cambio entre vertical y horizontal es un clic: pruebe ambos y quédese con el que se lea mejor.

¿Cómo elegir entre columnas y barras? Si las categorías son pocas (menos de ocho) y los nombres cortos, columnas. Si son muchas o los nombres largos, barras horizontales. Piense en las estanterías: los libros con lomos anchos se leen mejor tumbados. Lo mismo pasa con las etiquetas de su gráfico: si no caben de pie, póngalas horizontales.

Otro detalle: no abuse de las barras. Si tiene cincuenta categorías, cincuenta barras son un peine, no un gráfico. Mejor agrupar las pequeñas en "otros" o elegir otro gráfico. Un gráfico debe caber en una mirada; si obliga a hacer esfuerzo, no está cumpliendo su trabajo. La sencillez es la elegancia de los datos.

En este módulo, las barras son nuestra herramienta de comparación. Con la tabla dinámica del nivel 6 resumimos y con las barras de este nivel dibujamos el resumen. En el nivel siguiente completaremos el trío de gráficos básicos: la línea para las evoluciones en el tiempo y el sector para las partes de un todo. Con barra, línea y sector tendremos el lenguaje visual completo para la estadística del nivel 9.

## 💡 Ejemplos prácticos
### Ejemplo 1: Gastos por categoría en barras
Con la tabla dinámica del nivel 6 (gasto por categoría), cree un gráfico de columnas. Verá en un vistazo qué categoría domina su cesta de la compra.

### Ejemplo 2: Las temperaturas de la semana
Anote las temperaturas máximas de la semana (lunes a domingo) y dibuje columnas. La comparación por días salta a la vista.

### Ejemplo 3: Detectar un gráfico tramposo
Busque en internet un gráfico de barras de una noticia y mire con lupa de dónde parte el eje de valores. Si no empieza en cero, la noticia está exagerando algo. Anote su hallazgo.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja "Mis gastos de la semana" en Google Sheets.
Paso 2. Cree una tabla dinámica con "categoría" en filas y "precio" en valores (repase el nivel 6 si lo necesita).
Paso 3. Junto a la tabla dinámica, deje un espacio y escriba la cabecera "categoría" y "total" (o use la propia tabla dinámica como origen).
Paso 4. Seleccione las celdas de la tabla dinámica (categorías y totales, con cabecera).
Paso 5. Pulse "Insertar" y elija "Gráfico".
Paso 6. En el panel de la derecha, en "Tipo de gráfico", elija "Gráfico de columnas".
Paso 7. Mire la escala del eje vertical: debe empezar en cero. Si no es así, búsquelo en "Personalizar" y corríjalo.
Paso 8. En "Personalizar", elija un color único para las barras y active las etiquetas de datos para que se vea el valor exacto de cada barra.
Paso 9. Cambie ahora el tipo a "Gráfico de barras" y observe la versión horizontal. ¿Cuál se lee mejor con sus nombres?
Paso 10. Ponga un título claro al gráfico, por ejemplo "Gasto semanal por categoría". Guarde y comparta con un familiar: pídale que le diga qué ve. Si él lo entiende, su gráfico funciona.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué pregunta responde mejor un gráfico de barras?
2. ¿Cuándo conviene usar barras horizontales en vez de columnas?
3. ¿Por qué es importante que la escala empiece en cero?
4. ¿Cuáles son las tres miradas para leer un gráfico de barras?
5. ¿Qué debería hacer si tengo cincuenta categorías?

Respuestas: 1. "¿Cuánto hay de cada cosa?" y comparar qué es mayor y qué menor. 2. Con muchas categorías o nombres largos. 3. Porque si el eje se "recorta", las diferencias parecen mayores de lo que son y el gráfico miente. 4. Títulos de los ejes, escala del eje de valores y alturas relativas (cuál es la más alta y la más baja). 5. Agrupar las pequeñas en "otros" o elegir otro tipo de gráfico.

## ⚖️ Dimensión ética
El gráfico de barras es un arma de doble filo. Bien usado, aclara; mal usado, engaña. Los anuncios, los partidos políticos y hasta los informes oficiales han usado barras con ejes recortados para exagerar resultados. Al crear barras, respete la línea base en cero. Al leer barras, mire siempre la escala antes de creer. La honestidad visual es parte de la honestidad ciudadana: quien sabe leer barras no se deja manipular.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Gráficos de columnas y barras desde cualquier tabla | https://sheets.google.com |
| LibreOffice Calc | Los mismos gráficos, sin conexión | https://es.libreoffice.org |
| Datawrapper | Barras bonitas y honestas en minutos, gratis | https://www.datawrapper.de |
| RAWGraphs | Visualización de datos libre, para curiosear | https://www.rawgraphs.io |

## 🧠 Resumen y puente
- El gráfico de barras compara cantidades; el ojo compara alturas en un instante.
- Columnas para pocas categorías y nombres cortos; barras horizontales para muchas o largos.
- La línea base debe estar en cero; si no, sospeche.
- Tres miradas para leer barras: ejes, escala y alturas relativas.
En el nivel siguiente completaremos el trío de gráficos: la línea para las evoluciones en el tiempo y el sector para las partes de un todo, con su lectura crítica incluida.
