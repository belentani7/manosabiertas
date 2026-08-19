# Módulo 3: IA Aplicada a los Datos — Nivel 17
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es la clasificación: la técnica que predice categorías.
- Ver la diferencia entre predecir números (regresión) y predecir etiquetas (clasificación).
- Comprender el papel de los datos etiquetados en el entrenamiento.
- Aprender a leer la "exactitud" de un clasificador y desconfiar de las trampas.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Clasificación | La técnica de la IA que decide a qué grupo pertenece algo. |
| Etiqueta | La respuesta correcta que acompaña a cada ejemplo en el entrenamiento. |
| Clase | Cada uno de los grupos posibles: "gato", "spam", "lluvia". |
| Exactitud | El porcentaje de aciertos del clasificador. |
| Frontera de decisión | La línea invisible que separa las clases en el mapa de los datos. |

## 📚 Lección principal
En el nivel anterior aprendimos a predecir números con la regresión. Hoy vamos a por la otra gran familia de predicciones, quizá la más visible en su vida diaria: la clasificación. La clasificación no predice un número, sino una categoría. El correo: ¿spam o no? La foto: ¿perro o gato? El día: ¿lluvia o sol? El mensaje: ¿amenaza o noticia? La clasificación es el arte de decidir en qué casillero entra cada cosa.

Comparemos las dos técnicas para que no se confundan nunca. La regresión responde a preguntas de "¿cuánto?": ¿cuántos helados, cuántos euros, cuántos kilos? La clasificación responde a preguntas de "¿cuál?": ¿spam o normal, perro o gato, seguro o fraudulento? Una te da una medida; la otra te da una etiqueta. Si usted quiere saber cuánto costará el billete, usa regresión. Si quiere saber si el mensaje es peligroso, usa clasificación.

¿Cómo aprende una máquina a clasificar? Con datos etiquetados. Volvamos al niño del nivel 15: le enseñamos 100 fotos, cada una con su etiqueta ("esto es un perro", "esto es un gato"). En la jerga de la IA, esas 100 fotos son "datos etiquetados", y las etiquetas son las respuestas correctas. Sin etiquetas no hay clasificación posible: la máquina no puede aprender qué es cada cosa si nunca le decimos qué es. Por eso, cada ejemplo de entrenamiento es un par: los datos (la foto) y la etiqueta (lo que es).

Una idea bonita para entender la clasificación es la "frontera de decisión". Imagine un mapa: en un eje, el peso del animal; en otro, la longitud de las orejas. Los perros caen en una zona del mapa y los gatos en otra. El clasificador dibuja una línea invisible que separa las dos zonas, y cuando llega un animal nuevo, mira de qué lado de la línea está. Si cae del lado de los perros, dice "perro". Esa línea invisible es la frontera de decisión, y es el equivalente a la línea de tendencia de la regresión, pero separando grupos.

¿Cómo se mide si un clasificador funciona? Con la "exactitud": el porcentaje de veces que acierta. Si prueba el clasificador con 100 animales nuevos y acierta 92, su exactitud es del 92%. Parece simple, pero aquí esconden los fabricantes la trampa más grande. Imagínese un detector de fraudes en un banco donde el 99% de las operaciones son legítimas. Un sistema que siempre responda "legítima", sin mirar nada, tendría una exactitud del 99%. ¡Parecería perfecto y sería inútil! Por eso los profesionales miran algo más que la exactitud: miran cuántos fraudes reales captura y cuántos avisos falsos dispara.

Otra trampa famosa: la clase mayoritaria aplasta a la minoritaria. Si entrena un clasificador para detectar un defecto raro en unas piezas, y el defecto solo aparece en 1 de cada 1000 piezas, el sistema aprende a decir "todo está bien" y acierta el 99,9%. Aparentemente genial; en realidad no detecta nada. La lección: cuando una categoría es muy rara, un clasificador que ignora la categoría rara "parece" excelente. Mire siempre cuántos casos raros detectó, no solo el porcentaje total.

En la vida diaria la clasificación está en todas partes y casi siempre sin que lo notemos. El correo electrónico clasifica el spam. El teléfono clasifica su voz en "comandos". El banco clasifica cada operación en "normal" o "sospechosa". El hospital clasifica las radiografías en "limpia" o "con nódulo". La cámara clasifica sus fotos en "paisajes" y "personas". Cada una de esas decisiones es una frontera de decisión trazada por una máquina entrenada con miles de ejemplos etiquetados.

Para practicar la clasificación sin programar, existen herramientas gratuitas y visuales. Una muy famosa es "Machine Learning for Kids", donde se crean "proyectos", se suben fotos o textos etiquetados y la herramienta entrena un modelo con botones. Otra es "Teachable Machine", de Google, donde se hacen tres clases con fotos de la cámara (por ejemplo, "cabeza", "papel", "nada") y el modelo aprende a distinguirlas en vivo. En el nivel 18 las usaremos a fondo. Hoy solo las conoceremos.

Antes de terminar, una idea para encadenar con lo que viene: clasificar y regresión se combinan en casi todos los sistemas reales. El navegador clasifica su ruta ("trayecto normal o atascado") y luego regresa el tiempo ("llegará en 23 minutos"). El banco clasifica la operación ("fraudulenta o no") y luego predice cuánto arriesga. Entender las dos piezas le da a usted el mapa completo de cómo piensa la IA. En el próximo nivel, manos a la obra: entrenará sus primeros modelos de clasificación con sus propias fotos y sonidos.

## 💡 Ejemplos prácticos
### Ejemplo 1: El correo spam
Un correo electrónico llega con "GANA UN PREMIO, haga clic ya". El clasificador de su buzón lo compara con millones de correos etiquetados como spam y decide: spam. No lee el texto: lo clasifica.

### Ejemplo 2: Las fotos de la abuela
La abuela quiere una foto solo de sus nietos. La app clasifica cada foto de su galería en "persona" o "no persona", y de paso identifica a cada nieto. Todo eso es clasificación entrenada con fotos etiquetadas.

### Ejemplo 3: La fruta del mercado
Un agricultor fotografía manzanas y peras con la cámara del móvil. Un clasificador entrenado con miles de frutas etiquetadas le dice al momento si es manzana o pera, y así se ahorra clasificarlas a mano.

## 🛠️ Actividad guiada
Paso 1. Abra el navegador y entre en https://teachablemachine.withgoogle.com (es gratuito y no pide cuenta).
Paso 2. Pulse "Empezar" y elija "Proyecto de imágenes".
Paso 3. Verá tres clases: Clase 1, Clase 2 y Clase 3. Anote cada clase con un objeto de su casa (por ejemplo, "taza", "mando", "nada").
Paso 4. Active la cámara y capture 20 fotos de la taza manteniendo el botón "Mantener pulsado para grabar" mientras la mueve.
Paso 5. Capture 20 fotos del mando y 20 del fondo sin objeto (la clase "nada").
Paso 6. Pulse "Entrenar modelo" y espere a que termine (unos segundos).
Paso 7. En la ventana de "Vista previa", muestre la taza a la cámara: ¿la clasifica bien?
Paso 8. Pruebe el mando y luego la clase "nada". Anote cuántas veces acierta de cada diez.
Paso 9. Ahora pruebe un objeto que NO entrenó (por ejemplo, su mano): vea cómo la IA se confunde. Eso es normal: no aprendió esa clase.
Paso 10. Escriba en un papel: "mi clasificador acierta X de cada 10 veces" y guarde el proyecto. Ha entrenado su primer modelo de clasificación.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué diferencia hay entre regresión y clasificación?
2. ¿Qué son los datos etiquetados?
3. ¿Qué es la frontera de decisión?
4. ¿Por qué la exactitud puede engañar cuando una clase es muy rara?
5. Nombre dos herramientas gratuitas para entrenar clasificadores sin programar.

Respuestas: 1. La regresión predice números ("¿cuánto?") y la clasificación predice categorías ("¿cuál?"). 2. Ejemplos que llevan junto a los datos su respuesta correcta (la etiqueta). 3. La línea invisible que separa las clases en el mapa de los datos. 4. Porque un sistema que siempre dice la clase mayoritaria acierta casi siempre sin detectar nada. 5. Machine Learning for Kids y Teachable Machine.

## ⚖️ Dimensión ética
Los clasificadores se equivocan, y sus errores no pesan igual. Confundir un correo con spam molesta; confundir una radiografía limpia con una con nódulo asusta a una persona y puede alterar su vida. Los errores de clasificación que afectan a personas deben revisarlos siempre personas. Y hay un peligro ético enorme: si las etiquetas con las que se entrenó contienen prejuicios (por ejemplo, "estas fotos son de delincuentes"), la máquina los hereda y los repite a gran escala. Entrene sus clasificadores con etiquetas justas, y nunca deje que decidan solos sobre vidas humanas.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Teachable Machine | Entrenar clasificadores con fotos y sonidos sin programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Proyectos de clasificación visuales para aprender | https://machinelearningforkids.co.uk |
| Google Sheets | Clasificar datos con filtros y tablas | https://sheets.google.com |
| Quick, Draw! | Ver cómo una IA clasifica sus dibujos | https://quickdraw.withgoogle.com |

## 🧠 Resumen y puente
- La regresión predice números; la clasificación predice categorías.
- La clasificación se entrena con datos etiquetados.
- La frontera de decisión separa las clases, como la línea de tendencia separa tendencias.
- La exactitud sola engaña cuando hay clases raras: mire los aciertos reales.
En el nivel siguiente, manos a la obra: usaremos Teachable Machine y Machine Learning for Kids para entrenar nuestros primeros modelos con fotos, sonidos y textos.
