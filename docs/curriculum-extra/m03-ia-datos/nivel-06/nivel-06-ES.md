# Módulo 3: IA Aplicada a los Datos — Nivel 06
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es una tabla dinámica y qué problema resuelve.
- Crear una tabla dinámica en Google Sheets a partir de la tabla de gastos.
- Agrupar datos por categorías y ver totales por grupo sin escribir fórmulas.
- Cambiar filas y columnas para responder preguntas distintas con un clic.
- Saber leer una tabla dinámica como quien lee la carta de un restaurante.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Tabla dinámica | Un resumen automático de una tabla: agrupa datos y calcula totales por categoría. |
| Fila (del resumen) | Por dónde se reparte el resumen, por ejemplo una fila por categoría. |
| Columna (del resumen) | Una agrupación adicional, para cruzar categorías. |
| Valor | El número que se calcula en el resumen: total, media, cuenta. |
| Segmentador | Un filtro con botones que muestra solo una parte de los datos. |

## 📚 Lección principal
Imagine que tiene una caja enorme de fotos de la familia. Sacar una a una y contarlas es una tortura. Pero si las clasifica por año y por persona, de golpe sabe cuántas fotos hay de cada uno y de cada año. La tabla dinámica hace exactamente eso con sus datos: toma una tabla larga y la resume por categorías, calculando totales con un clic. Es como tener un asistente que ordena la caja de fotos por usted.

En el nivel anterior vimos fórmulas para sumar una columna. Pero ¿y si queremos saber cuánto gastamos en cada categoría: fruta, pan, limpieza? Con fórmulas habría que escribir una SUMA para cada categoría y equivocarse es fácil. La tabla dinámica lo hace solo: toma la columna "categoría", la agrupa y suma los precios de cada grupo. Una tabla completa resumida en segundos, sin una sola fórmula.

Vamos a construir una con nuestra hoja "Mis gastos de la semana". El proceso es siempre el mismo y se aprende una vez y para siempre. Primero, seleccionamos toda la tabla (con la cabecera). Después, en el menú "Insertar", elegimos "Tabla dinámica". La hoja pregunta dónde ponerla: elegimos una hoja nueva. Y aparece una pantalla con casillas que podemos marcar o arrastrar: "filas", "columnas", "valores" y "filtros".

La idea es sencilla: usted decide dónde pone cada parte de la tabla. Si arrastra "categoría" a "filas" y "precio" a "valores", la hoja agrupa los productos por categoría y suma los precios de cada una. Resultado: una pequeña tabla que dice "fruta: 12 euros, pan: 5 euros, limpieza: 8 euros". Eso, que a mano llevaría varios minutos y muchas sumas, la tabla dinámica lo hace en un instante.

¿Y para qué sirven las "columnas" y los "filtros"? Las columnas cruzan otra categoría: si ponemos "categoría" en filas y "mes" en columnas, vemos una cuadrícula con categorías en las filas, meses en las columnas, y los totales en cada cruce. Es como la parrilla de un supermercado que comparara ventas por categoría y por mes. Los filtros (o segmentadores) sirven para mostrar solo una parte: por ejemplo, solo las compras de farmacia.

Un concepto nuevo: el "valor" no tiene por qué ser una suma. En la casilla de "valores" podemos elegir si queremos el total, la media, el máximo o la cuenta (cuántas filas hay). Es como preguntarle al resumen qué número queremos: ¿cuánto gasté (suma)? ¿Cuál es la compra más cara (máximo)? ¿Cuántas veces compré pan (cuenta)? La misma tabla dinámica responde preguntas distintas según el valor elegido.

La tabla dinámica es un pequeño salto de poder. Con las hojas de cálculo básicas, usted miraba los datos uno a uno. Con la tabla dinámica, usted mira los datos desde arriba, como un mapa: ya no ve cada compra, ve los patrones. Ver los datos "desde arriba" es exactamente lo que hará la IA más adelante, pero con técnicas mucho más avanzadas. La tabla dinámica es su primera herramienta de "vista de pájaro".

Vamos a leer una tabla dinámica como se lee la carta de un restaurante. La carta tiene secciones (primeros, segundos, postres) y precios. Nuestra tabla dinámica tiene categorías (en filas) y valores (sumas). Usted mira la categoría, mira el número y lo compara con las demás. ¿Cuál es la categoría más cara? ¿Cuál la más barata? Con una tabla dinámica bien hecha, esas preguntas se responden en dos segundos.

Un error común es olvidar que la tabla dinámica se actualiza. Si añade filas nuevas a la tabla original, el resumen no las incluye hasta que se refresca. En Google Sheets, hay que volver a la tabla dinámica y actualizarla (a veces con el botón derecho o con el menú). Acuérdese: la tabla dinámica es una foto del momento; si los datos cambian, hay que renovar la foto.

Otra cosa importante: la tabla dinámica necesita datos limpios. Si en la columna "categoría" unas celdas dicen "fruta" y otras "Fruta" o "frutas", la tabla las tratará como categorías diferentes y el resumen saldrá fragmentado. Por eso, antes de crear una tabla dinámica, revise que las categorías se escriben siempre igual. Es como asegurarse de que todas las cajas de fotos llevan el mismo etiquetado.

Con la tabla dinámica termina la primera mitad de la banda Raíz. Ya sabemos: escribir datos, ordenarlos, clasificarlos, dibujarlos y resumirlos. En el nivel siguiente profundizaremos en la visualización, con barras, líneas y sectores más pulidos, y aprenderemos a leerlos con criterio. La tabla dinámica y los gráficos son los dos grandes resúmenes que nos preparan para la estadística.

## 💡 Ejemplos prácticos
### Ejemplo 1: Gasto por categoría
En su tabla de gastos, cree una tabla dinámica con "categoría" en filas y "precio" (suma) en valores. Sabrá cuánto gasta en fruta, pan y limpieza, sin una sola fórmula.

### Ejemplo 2: Compras por mes
Si su tabla tiene una columna "mes", ponga "categoría" en filas y "mes" en columnas. Verá la cuadrícula de gastos por categoría y por mes, ideal para detectar meses caros.

### Ejemplo 3: Cuántas veces compro cada cosa
Cambie el valor de "precio" a "cuenta" (count). La tabla dirá cuántas veces compró pan o fruta esta semana. Eso revela hábitos de compra.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja "Mis gastos de la semana" en Google Sheets.
Paso 2. Asegúrese de que la columna "categoría" existe y está rellena en todas las filas (fruta, pan, limpieza, farmacia).
Paso 3. Seleccione toda la tabla con el ratón, desde la cabecera hasta la última fila.
Paso 4. En el menú "Insertar", elija "Tabla dinámica".
Paso 5. En la ventana que aparece, marque "Nueva hoja" y pulse "Crear".
Paso 6. A la derecha verá el editor de la tabla dinámica, con zonas "Filas", "Columnas", "Valores" y "Filtros".
Paso 7. En "Filas", pulse "Añadir" y elija "categoría".
Paso 8. En "Valores", pulse "Añadir" y elija "precio". Por defecto aparecerá "SUMA de precio".
Paso 9. Mire la hoja: verá una tabla resumida por categorías con sus totales. Compare: ¿qué categoría gasta más?
Paso 10. En "Valores", cambie "SUMA" por "PROMEDIO" en el desplegable y observe cómo cambia el resumen. Pruebe también "MÁX" y "CONTAR". La misma tabla dinámica, distintas respuestas.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué problema resuelve una tabla dinámica?
2. ¿Qué hay que poner en "Filas" y en "Valores" para sumar el gasto por categoría?
3. ¿Para qué sirven las "Columnas" en una tabla dinámica?
4. ¿Qué pasa si añado datos nuevos a la tabla original pero no actualizo la tabla dinámica?
5. ¿Por qué hay que escribir las categorías siempre igual (sin "fruta" y "Fruta" a la vez)?

Respuestas: 1. Resume una tabla larga por categorías y calcula totales sin escribir fórmulas. 2. En "Filas", "categoría"; en "Valores", "precio" con la operación SUMA. 3. Cruzan otra categoría, creando una cuadrícula (por ejemplo, categoría por mes). 4. Que el resumen no incluye los datos nuevos hasta que se actualiza/refresca. 5. Porque la tabla trataría "fruta" y "Fruta" como categorías distintas y el resumen saldría fragmentado.

## ⚖️ Dimensión ética
Resumir datos por categorías es potente, pero también puede simplificar en exceso. Una categoría "familia" puede esconder diferencias enormes entre personas. Cuando alguien le presente un resumen por grupos (por ejemplo, "los mayores de 40 compran X"), pregúntese quiénes están dentro de ese grupo y qué se pierde al agruparlos. Los resúmenes son útiles, pero no deben borrar la diversidad de las personas reales.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Tablas dinámicas gratuitas en el navegador | https://sheets.google.com |
| LibreOffice Calc | Tablas dinámicas sin conexión | https://es.libreoffice.org |
| Tutorial oficial de tablas dinámicas de Google | Guía paso a paso de Google en español | https://support.google.com/docs/answer/1272900 |

## 🧠 Resumen y puente
- La tabla dinámica resume una tabla por categorías con un clic.
- "Filas" reparte el resumen, "Valores" dice qué número se calcula.
- "Columnas" cruzan categorías y los filtros muestran solo una parte.
- La tabla dinámica debe actualizarse y necesita categorías bien escritas.
En el nivel siguiente puliremos la visualización: barras, líneas y sectores con detalle, y aprenderemos a leerlos con criterio para que los gráficos cuenten historias honestas.
