# Módulo 3: IA Aplicada a los Datos — Nivel 16
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es la regresión: la técnica para predecir números.
- Ver la "línea de tendencia" como el corazón de la regresión.
- Dibujar una línea de tendencia en Google Sheets.
- Aprender los peligros de predecir demasiado lejos (extrapolar).

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Regresión | La técnica de la IA para predecir un número con datos pasados. |
| Línea de tendencia | La línea recta que mejor resume cómo suben o bajan los puntos. |
| Datos históricos | Los valores pasados que usa el modelo para aprender. |
| Extrapolar | Predecir más allá de los datos que tenemos, con cuidado. |
| Error | La diferencia entre lo que el modelo predijo y lo que pasó. |

## 📚 Lección principal
En el nivel anterior vimos la idea general de la predicción. Hoy vamos a por la primera técnica concreta, y es la más útil de todas cuando queremos adivinar un número: la regresión. Que no le asuste el nombre, que parece de bata y laboratorio. La regresión es la técnica que dibuja una línea recta entre los puntos de un gráfico para poder decir: "por aquí van las cosas, y así seguirán".

Recuerde el gráfico de dispersión del nivel 10: una nube de puntos que sube de izquierda a derecha cuando dos cosas van juntas. La regresión hace algo maravilloso con esa nube: traza la línea recta que pasa lo más cerca posible de todos los puntos a la vez. No es una línea cualquiera: es la "mejor" línea, la que deja los puntos lo más cerca posible, por encima y por debajo. Esa línea se llama "línea de tendencia".

¿Por qué sirve una línea? Porque una vez que la tiene, puede extenderla. Si la nube muestra que con 20 grados se venden 40 helados y con 25 grados se venden 55, la línea cruza por ahí y sigue recta. Entonces usted mira qué altura tiene la línea a los 28 grados y dice: "probablemente se venderán unos 65 helados". Acaba de hacer una predicción por regresión. La máquina no piensa: la máquina dibuja la línea y lee la altura.

Google Sheets hace esta línea por nosotros con un par de clics. Se selecciona el gráfico de dispersión, se abre la configuración ("Personalizar", "Serie", "Línea de tendencia"), y la línea aparece mágicamente. Al lado se puede activar la "etiqueta" que muestra la fórmula, y también el "coeficiente de determinación", un número entre 0 y 1 que dice cuán bien se ajusta la línea a los puntos. Cuanto más cerca de 1, más fiable la línea; cerca de 0, la línea no sirve para nada.

Vamos a entender ese coeficiente con un ejemplo cotidiano. Si los puntos de su dispersión están casi pegados a la línea, como las ventas de un kiosco según la temperatura, el coeficiente se acerca a 1: la línea resume muy bien la realidad, y sus predicciones son dignas de confianza. Si los puntos están esparcidos como un puñado de arroz, el coeficiente se acerca a 0: no hay patrón claro, y ninguna línea recta puede salvar la situación. El coeficiente es el "semáforo" de la regresión.

Ahora viene la lección más importante del día: la extrapolación. Extrapolar es usar la línea para predecir más allá de los datos que tenemos. Es tentador y peligroso. Si solo tiene datos de temperaturas entre 10 y 30 grados, puede predecir sin miedo los helados a 25 grados: está dentro de lo conocido, los datos lo sostienen. Pero si predice los helados a 50 grados, está viajando a un territorio que nunca ha visto: la línea quizá siga subiendo, pero en la realidad, a 50 grados, nadie sale a comprar helados y las ventas se hunden. La línea no sabe eso: la línea solo sabe prolongarse.

Los profesionales llaman a esto "no extrapolar más allá de los datos". Es la causa de los errores más sonados de la historia de la IA. Se predijo el comportamiento de la economía, de las epidemias y del clima extendiendo líneas sin preguntarse si el mundo seguía siendo el mismo. Una línea es un resumen del pasado, no una ley del universo. Cuanto más lejos del pasado, menos fiable es.

Otra idea útil: la regresión no entiende el significado de los números, solo su forma. Si usted le da los kilos de tomates y los días de lluvia, la máquina encuentra la línea que mejor encaja. Pero no sabe que los tomates necesitan agua, ni cuánta. La interpretación la pone la persona. Por eso la regresión es una herramienta excelente, pero siempre acompañada de criterio humano: el criterio es de usted, la línea es de la máquina.

En el mundo real, la regresión está en todas partes disfrazada de producto. Los precios de los vuelos se predicen con regresión sobre millones de reservas pasadas. El valor de una casa se estima con regresión sobre los precios de ventas anteriores. El gasto eléctrico del mes que viene se anticipa con la línea de los meses pasados. Cada vez que un sistema le dice un número "probable", lo más seguro es que detrás haya una regresión.

En el próximo nivel veremos la segunda técnica grande de la predicción: la clasificación, que no predice un número sino una categoría: ¿será lluvia o sol? ¿Es spam o no? Mientras tanto, guarde esta idea: predecir números es dibujar la mejor línea entre los puntos y leerla con humildad, sabiendo que la línea es memoria, no profecía.

## 💡 Ejemplos prácticos
### Ejemplo 1: Los helados del kiosco
Con 10 días de datos (temperatura y helados vendidos), la línea de tendencia permite estimar cuántos helados se venderán mañana. A 28 grados, unos 65. La regresión hecha con los ojos.

### Ejemplo 2: El precio del vuelo
Una aerolínea guarda millones de reservas pasadas. Una regresión encuentra la línea que relaciona precio con días de antelación y le cobra "lo que el algoritmo sabe que pagará".

### Ejemplo 3: El agua del edificio
Con 12 meses de consumo, la línea de tendencia muestra si el gasto de agua sube. Si la línea sube, algo se está rompiendo o desperdiciando: la regresión avisa antes que la factura.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja "Mi primera predicción" del nivel 15 (o cree una con 10 días de temperatura y helados).
Paso 2. Seleccione las dos columnas y haga un gráfico de dispersión (Insertar, Gráfico, dispersión).
Paso 3. Pulse los tres puntos del gráfico y abra "Editar el gráfico".
Paso 4. Vaya a "Personalizar", "Serie" y active "Línea de tendencia".
Paso 5. Active también "Etiqueta" (para ver la fórmula) y, si aparece, "R²" (el coeficiente de determinación).
Paso 6. Observe el R²: ¿está cerca de 1? Entonces la línea resume bien los puntos.
Paso 7. Lea en la fórmula el número: la fórmula tiene forma "y = a·x + b". En ella, "x" es la temperatura y "y" los helados.
Paso 8. Sustituya x por 28 y calcule y con la calculadora. Ese es el número que predice la línea.
Paso 9. Escriba debajo: "predicción a 28 grados: y helados". Compruebe que coincide con lo que ve en la línea.
Paso 10. Pregúntese y escriba: "¿me atrevería a predecir a 50 grados? ¿Por qué sí o por qué no?".

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es la regresión?
2. ¿Cómo se llama la línea que dibuja la regresión?
3. ¿Qué indica el coeficiente R²?
4. ¿Qué es extrapolar y por qué es peligroso?
5. ¿Quién pone el significado a los números que predice la regresión?

Respuestas: 1. La técnica de la IA para predecir un número con datos pasados. 2. Línea de tendencia. 3. Cuán bien se ajusta la línea a los puntos: cerca de 1 es fiable, cerca de 0 no sirve. 4. Predecir más allá de los datos que tenemos; peligroso porque el mundo puede cambiar y la línea no lo sabe. 5. La persona: la máquina ve la forma, la persona entiende el significado.

## ⚖️ Dimensión ética
Una regresión puede servir para ayudar o para exprimir. La misma técnica que predice el consumo de agua para evitar derroches también se usa para cobrar más al que menos opciones tiene. Y hay una trampa ética sutil: si los datos históricos contienen injusticias (por ejemplo, un barrio al que se le vendió menos), la línea las hereda y las perpetúa. Antes de creer un número predicho, pregúntese: ¿los datos de los que nace son justos? La regresión no es culpable ni inocente: hereda la verdad o el prejuicio de sus datos.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Línea de tendencia y R² con dos clics | https://sheets.google.com |
| LibreOffice Calc | Las mismas líneas de tendencia, sin conexión | https://es.libreoffice.org |
| Gapminder | Datos reales para practicar líneas de tendencia | https://www.gapminder.org |
| Desmos | Calculadora gráfica que dibuja líneas sobre puntos | https://www.desmos.com |

## 🧠 Resumen y puente
- La regresión predice números dibujando la mejor línea entre los puntos.
- El coeficiente R² dice si la línea es fiable.
- Extrapolar más allá de los datos es la causa de errores famosos.
- La máquina dibuja la línea; la persona pone el significado.
En el nivel siguiente veremos la clasificación: predecir categorías (¿lluvia o sol? ¿spam o no?) en vez de números.
