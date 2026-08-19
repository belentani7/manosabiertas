# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 10
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 2.5 horas

## 🎯 Objetivo del nivel
- Entender qué es el aprendizaje supervisado con la metáfora del profesor.
- Distinguir clasificación y regresión con ejemplos de la vida real.
- Comprender cómo la máquina corrige sus errores durante el entrenamiento.
- Reconocer el aprendizaje supervisado en aplicaciones cotidianas.
- Hacer una pequeña "regresión" manual en una hoja de cálculo.

## 📖 Vocabulario esencial
| Término | Explicación sencilla |
|---|---|
| Aprendizaje supervisado | Aprender con un "profesor": la máquina recibe ejemplos con su respuesta correcta. |
| Clasificación | Decidir en qué grupo entra algo: spam o no, gato o perro. |
| Regresión | Predecir un número, como el precio de una casa o la temperatura de mañana. |
| Profesor (supervisor) | El que etiqueta los ejemplos y corrige a la máquina durante el entrenamiento. |
| Error | La diferencia entre lo que la máquina respondió y la respuesta correcta. |
| Entrenar y validar | Entrenar es aprender con ejemplos; validar es comprobar con ejemplos nuevos. |

## 📚 Lección principal
Imagínese una clase de primaria. Un profesor enseña a los niños a distinguir frutas: muestra una manzana y dice "esto es una manzana", muestra una pera y dice "esto es una pera". Después hace un examen: enseña una fruta y pregunta. Si el niño acierta, genial; si falla, el profesor lo corrige. Con la práctica, el niño acaba acertando casi siempre. Así funciona el aprendizaje supervisado.

"Supervisado" significa que hay un supervisor: alguien o algo que conoce las respuestas correctas. En el mundo de la IA, el supervisor es el conjunto de datos etiquetados. Cada ejemplo trae su respuesta. La máquina no adivina a ciegas: al final del proceso tiene una "corrección del profesor" que le dice si acertó o no.

El proceso es un círculo: la máquina mira un ejemplo, hace una predicción, compara con la etiqueta correcta, calcula su error y ajusta sus conexiones para fallar menos la próxima vez. Después pasa al siguiente ejemplo, y al siguiente, millones de veces. Cada vuelta es como un examen tras otro, y cada corrección la hace un poco mejor.

Hay dos grandes tipos de tareas supervisadas. La primera es la clasificación: decidir en qué grupo entra algo. ¿Este correo es basura o importante? ¿Esta foto tiene un gato o un perro? ¿Este pago es normal o sospechoso? La respuesta es una etiqueta, una categoría. Es como poner cada cosa en su caja.

La segunda es la regresión: predecir un número. ¿Cuánto valdrá esta casa? ¿Qué temperatura hará mañana? ¿Cuántos pasos dará usted hoy? No hay cajas, hay una escala. Es como estimar cuántos kilos pesa un saco mirándolo: no dice "es pesado o ligero", dice "aproximadamente 25 kilos".

Pongamos un ejemplo de regresión muy cercano: el precio de los pisos. Si le mostramos a la máquina miles de ejemplos de "metros cuadrados → precio", aprenderá a estimar el precio de un piso que nunca ha visto. Usted hace esto intuitivamente cada día: "un piso más grande suele costar más". La máquina lo hace con miles de datos y con más precisión.

La diferencia entre clasificación y regresión es más sencilla de lo que parece: clasificar es decir "sí o no, este o aquel"; regresión es decir "cuánto". El banco clasifica si un pago es fraude; predice (regresión) cuánto gastará usted el mes que viene. Comprender esta diferencia le ayudará a leer cualquier noticia sobre IA.

Ahora, un punto importante: la máquina puede aprender "de memoria" y engañarnos. Si el profesor examina a los niños con las mismas frutas que ya vieron en clase, todos sacan diez. Por eso en la IA se separa el entrenamiento de la validación: se entrena con unos ejemplos y se comprueba con otros que la máquina no ha visto. Si acierta con los nuevos, de verdad ha aprendido.

Esto tiene un nombre técnico que vale la pena conocer: sobreajuste. Es cuando la máquina memoriza los ejemplos de entrenamiento en vez de aprender el patrón general. Es como un alumno que memoriza las preguntas del examen pero no entiende la materia: aprueba el examen conocido y suspende el desconocido. Los buenos modelos se prueban siempre con datos nuevos.

El aprendizaje supervisado está en casi todas las aplicaciones que ya conocemos. El correo que filtra spam, el reconocimiento de caras, la detección de fraudes, el diagnóstico por imagen: todos son supervisados, todos aprendieron con ejemplos etiquetados. Es el tipo de aprendizaje más usado y el más fácil de entender.

¿Y por qué se necesita tanta cantidad de datos? Porque cada ejemplo es una oportunidad de corregir. Un modelo necesita ver muchas variaciones del mundo real para no confundirse. Igual que un niño necesita ver muchos perros (blancos, negros, grandes, pequeños) para no creer que solo hay una clase de perro.

No necesita saber matemáticas para usar esto. Lo importante es el concepto: hay un profesor (los datos etiquetados), la máquina hace exámenes (predicciones), se equivoca, corrige y mejora. Y luego se prueba con exámenes nuevos para asegurarse de que de verdad aprendió.

En la actividad de este nivel va a hacer su propia regresión con una hoja de cálculo: dibujará puntos de "tamaño de piso → precio" y una línea que los resume. Esa línea es, en miniatura, lo que hace la regresión con miles de datos. Verá con sus propios ojos cómo la máquina "ve" la tendencia.

En el próximo nivel veremos los otros dos tipos de aprendizaje: el no supervisado y el de refuerzo.

## 💡 Ejemplos prácticos
1. **Correo:** usted marca mensajes como "importante" o "basura"; la máquina clasifica los nuevos igual que usted.
2. **El banco:** clasifica cada pago como "normal" o "sospechoso", con ejemplos etiquetados de millones de movimientos.
3. **El precio de la vivienda:** una web le estima el precio de un piso comparándolo con miles de ventas reales (regresión).

## 🛠️ Actividad guiada
Paso 1. Abra el navegador y vaya a Google Sheets (sheets.google.com) o abra su programa de hojas de cálculo.
Paso 2. En la columna A escriba tamaños de piso: 40, 55, 70, 85, 100.
Paso 3. En la columna B escriba precios inventados que crezcan con el tamaño: 80000, 100000, 130000, 160000, 190000.
Paso 4. Seleccione las dos columnas con el ratón.
Paso 5. Pulse "Insertar" y luego "Gráfico".
Paso 6. En el gráfico, busque la opción "Línea de tendencia" y actívela.
Paso 7. Observe: la línea resume la relación "más metros, más precio". Eso es una regresión.
Paso 8. Piense: con esta línea, ¿qué precio estimaría para un piso de 60 metros? Esa estimación es exactamente lo que hace la IA con miles de datos.

## ✍️ Ejercicios de autoevaluación
1. Explique con la metáfora del profesor qué es el aprendizaje supervisado.
2. ¿Cuál es la diferencia entre clasificación y regresión?
3. ¿Qué es el error y para qué sirve durante el entrenamiento?
4. ¿Qué es el sobreajuste y por qué se prueba el modelo con datos nuevos?
5. Ponga un ejemplo cotidiano de clasificación y otro de regresión.

**Respuestas:** 1) Es aprender con ejemplos que traen su respuesta correcta, como un profesor que corrige los exámenes. 2) Clasificar es decidir en qué grupo entra algo (categoría); regresión es predecir un número (cantidad). 3) Es la diferencia entre lo que la máquina predijo y la respuesta correcta; sirve para ajustar y mejorar. 4) Es cuando la máquina memoriza los ejemplos en vez de aprender el patrón; por eso se prueba con datos que no ha visto. 5) Clasificación: filtrar spam o reconocer una cara; regresión: estimar el precio de un piso o la temperatura de mañana.

## ⚖️ Dimensión ética
El aprendizaje supervisado hereda las decisiones del supervisor humano que etiqueta. Si las etiquetas son injustas (por ejemplo, créditos aprobados según el barrio), la máquina aprende esa injusticia y la aplica a miles de personas. Además, un modelo que solo se prueba con datos parecidos puede parecer perfecto y fallar en el mundo real. Exigir que los modelos se validen con datos diversos es una responsabilidad ética, no un lujo técnico.

## 🔓 Herramientas abiertas
- **Teachable Machine** (teachablemachine.withgoogle.com): entrene un clasificador supervisado con sus propias fotos.
- **TensorFlow Playground** (playground.tensorflow.org): vea en directo cómo se entrena una red con datos etiquetados.
- **Google Sheets** (sheets.google.com): gratis, con gráficos y líneas de tendencia para hacer regresiones simples.
- **Kaggle** (kaggle.com): concursos y datos para practicar clasificación y regresión.
- **YouTube** (youtube.com): busque "aprendizaje supervisado explicado" para más vídeos.

## 🧠 Resumen y puente
- El aprendizaje supervisado aprende con ejemplos etiquetados: hay un profesor.
- Clasificar es poner en cajas; regresión es predecir números.
- La máquina corrige su error en cada ejemplo y mejora.
- El sobreajuste engaña: hay que validar con datos nuevos.
- Ya usa aprendizaje supervisado cada día sin saberlo.

En el nivel 11 veremos el aprendizaje no supervisado y el aprendizaje por refuerzo.
