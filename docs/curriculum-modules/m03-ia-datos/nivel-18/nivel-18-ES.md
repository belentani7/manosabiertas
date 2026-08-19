# Módulo 3: IA Aplicada a los Datos — Nivel 18
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 4 horas

## 🎯 Objetivo del nivel
- Entender qué es el AutoML: la técnica que automatiza la creación de modelos.
- Conocer plataformas de AutoML: Teachable Machine, Google Vertex AI y similares.
- Entrenar un modelo completo de clasificación con imágenes propias.
- Subir un modelo a la nube y entender qué se juega ahí (datos, costes, responsabilidad).

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| AutoML | Aprendizaje automático automático: la máquina elige el mejor modelo por nosotros. |
| Conjunto de datos | El grupo completo de ejemplos que usamos para entrenar. |
| Hiperparámetros | Los ajustes que el AutoML prueba y afina solo. |
| Nube | Servidores remotos que hacen el cálculo en vez de su ordenador. |
| API | La "puerta" por la que otros programas piden predicciones al modelo. |

## 📚 Lección principal
Hasta ahora hemos visto las ideas: predecir números, predecir categorías, entrenar, evaluar. Pero usted habrá pensado: "¿y yo cómo hago eso sin saber programar?" La respuesta es una de las mayores revoluciones de la IA de los últimos años: el AutoML. Se llama así por "aprendizaje automático automático". En español: la máquina que entrena a la máquina.

¿Qué hace exactamente el AutoML? Recuerde que entrenar un modelo era enseñarle con ejemplos. Resulta que el entrenamiento tiene muchos ajustes que elegir: cuántas capas tiene la red, con qué rapidez aprende, cuántas veces repasa los datos. Antes, elegir esos ajustes era un oficio de expertos con doctorado. El AutoML hace que el propio sistema pruebe miles de combinaciones de ajustes, se quede con la mejor y nos devuelva el modelo ganador. Usted solo pone los datos etiquetados y el AutoML hace el resto.

Las herramientas de AutoML vienen en dos sabores. El primero, para aprender y para pequeños proyectos: plataformas visuales y gratuitas como Teachable Machine, donde ya entrenamos en el nivel 17. El segundo, para empresas y proyectos serios: plataformas profesionales en la nube como Google Vertex AI, que permiten entrenar modelos con millones de ejemplos, guardarlos y pedirles predicciones a través de una "API" (una puerta por la que otros programas hacen preguntas al modelo). Este curso usa el primer sabor; el segundo lo conoceremos para entender el mundo real.

En este nivel vamos a hacer una cosa muy concreta: entrenar un modelo con Teachable Machine que distinga entre dos o tres objetos de nuestra casa. Es el mismo procedimiento del nivel 17, pero ahora con una diferencia: lo haremos con más clases, con más fotos y comprobando la calidad del modelo como lo haría un profesional. Porque entrenar es fácil; evaluar bien es el oficio.

El primer paso de un buen proyecto de AutoML es planificar el conjunto de datos. La regla de oro: más variedad, no más repetición. Si hace 100 fotos de la taza siempre igual, desde el mismo ángulo y con la misma luz, el modelo aprende de memoria y falla al primer cambio. Mejor 30 fotos variadas: de cerca, de lejos, girada, con la taza llena y vacía, con luz de día y de noche. La variedad es la comida del modelo: sin variedad, la máquina no aprende "taza", aprende "esa taza exactamente así".

El segundo paso es equilibrar las clases. Si entrenamos con 100 fotos de la taza y 5 del mando, el modelo será experto en tazas y torpe con mandos. El número de ejemplos por clase debe ser parecido. Esta es la misma lección de "clase rara" del nivel 17, pero ahora la aplicamos desde el origen: la injusticia se evita en la recogida, no se arregla después.

El tercer paso, profesional, es reservar una parte de los datos para la evaluación. Cuando usted pulsa "Entrenar modelo" en Teachable Machine, la herramienta ya hace esto por usted de forma interna: guarda unas fotos de cada clase que el modelo nunca ve, y usa solo las demás para aprender. Después prueba con las reservadas y le dice cuánto acierta. Si usted misma separara 10 fotos de cada clase antes de entrenar, podría hacer la evaluación a mano: entrenar sin esas fotos y luego probar con ellas. Ese es el ritual de los profesionales, y usted ya lo entiende.

Ahora la pregunta que preocupa a todos en la nube: ¿qué pasa con mis datos cuando entreno en una plataforma? Regla sencilla: en herramientas gratuitas de aprendizaje como Teachable Machine, sus fotos se usan para entrenar su modelo; en plataformas profesionales como Vertex AI, usted firma un contrato que dice quién es dueño de qué y dónde se guardan los datos. Antes de subir cualquier cosa, lea dónde se almacenan sus datos y quién puede verlos. Los datos de personas —fotos, voces, nombres— merecen el mismo cuidado que un documento importante.

Otra cosa que se juega en la nube es el dinero. Entrenar modelos pequeños en Teachable Machine es gratis; entrenar en Vertex AI cuesta dinero por hora de cálculo. La nube no es un favor del universo: es alquilar el músculo de unos ordenadores ajenos. Para proyectos de aprendizaje, la versión gratuita basta. La lección de gestión: empiece siempre en lo gratuito, y cuando el proyecto sea serio, presupueste el coste de la nube como un gasto más.

Cuando termine de entrenar, Teachable Machine le ofrece un botón maravilloso: "Exportar modelo". Puede descargar el modelo, o pedir un enlace para compartirlo. Ese modelo, una vez exportado, funciona sin internet: está en su ordenador. Puede incluso ponerlo en una página web o en un teléfono. Lo que usted ha entrenado ya no necesita la plataforma: es un modelo, una pequeña máquina que vive donde usted la lleve.

Con este nivel cerramos la parte práctica de la banda Rama. Usted ya sabe: qué es predecir, cómo se predice un número, cómo se predice una categoría y cómo entrenar un modelo sin escribir una línea de código. En el próximo nivel viene la parte que pone el corazón en el asunto: la ética de los datos. Porque ya tiene el poder de crear modelos, y el poder sin responsabilidad es peligroso.

## 💡 Ejemplos prácticos
### Ejemplo 1: El maletín de la abuela
La abuela entrena un modelo para distinguir "llaves", "gafas" y "nada". Con 40 fotos de cada una, el modelo le dice al momento dónde está lo que busca. AutoML en casa.

### Ejemplo 2: La fábrica
Una fábrica usa Vertex AI AutoML para clasificar piezas en "buenas" y "defectuosas" a partir de fotos de la línea de producción. El modelo se entrena con 10.000 fotos etiquetadas por técnicos.

### Ejemplo 3: La ONG
Una ONG entrena un modelo para contar coches en fotos de satélite de un campamento y estimar cuántas familias necesitan ayuda. AutoML gratuito sirviendo a una causa.

## 🛠️ Actividad guiada
Paso 1. Reúna dos objetos de su casa (por ejemplo, una taza y un mando) y elija un lugar con buena luz.
Paso 2. Abra https://teachablemachine.withgoogle.com y cree un proyecto de imágenes con 3 clases: taza, mando y "nada".
Paso 3. Capture 40 fotos variadas de la taza: de cerca, de lejos, girada, con luz y sin luz. Mueva la cámara entre toma y toma.
Paso 4. Capture 40 fotos variadas del mando, igual de variadas.
Paso 5. Capture 40 fotos del fondo sin objeto para la clase "nada".
Paso 6. Pulse "Entrenar modelo" y espere a que termine.
Paso 7. Compruebe la calidad: pruebe cada objeto desde ángulos nuevos. Anote cuántos aciertos de cada 10.
Paso 8. Haga la "prueba del examen": muestre el objeto con luz distinta o posición rara. ¿El modelo se mantiene o flaquea?
Paso 9. Reflexione y escriba: si añade solo 5 fotos del mando, ¿qué cree que pasará con su exactitud? Pruébelo si quiere.
Paso 10. Pulse "Exportar modelo" y guarde la opción que prefiera. Escriba una conclusión: "el AutoML me permite entrenar modelos sin programar, pero la calidad depende de la variedad de mis fotos".

## ✍️ Ejercicios de autoevaluación
1. ¿Qué significa AutoML?
2. ¿Qué dos sabores de herramientas de AutoML existen?
3. ¿Cuál es la regla de oro del conjunto de datos?
4. ¿Por qué deben equilibrarse las clases?
5. ¿Qué hay que mirar antes de subir datos a una plataforma en la nube?

Respuestas: 1. Aprendizaje automático automático: la máquina elige y afina el mejor modelo por nosotros. 2. Visuales y gratuitas (Teachable Machine) y profesionales en la nube (Vertex AI AutoML). 3. Más variedad, no más repetición: fotos variadas para que el modelo generalice. 4. Porque si una clase tiene muchos más ejemplos, el modelo la aprende mejor y descuida las demás. 5. Dónde se guardan los datos, quién puede verlos y cuánto cuesta el cálculo.

## ⚖️ Dimensión ética
El AutoML baja la barrera de la IA: hoy cualquier persona puede entrenar modelos que reconocen caras, voces o gestos. Ese poder conlleva dos deberes. Primero, el consentimiento: si entrena un modelo con fotos o voces de otras personas, ellas deben saberlo y aceptarlo. Segundo, la proporcionalidad: no hace falta reconocer a cada vecino para contar los coches de una calle. Pregunte siempre: ¿qué mínimo de datos necesito para lograr mi objetivo sin invadir a nadie? El AutoML es una herramienta magnífica; la responsabilidad de cómo se usa sigue siendo nuestra.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Teachable Machine | AutoML gratuito con fotos, sonidos y posturas | https://teachablemachine.withgoogle.com |
| Google Vertex AI | AutoML profesional en la nube | https://cloud.google.com/vertex-ai |
| Machine Learning for Kids | Proyectos guiados de AutoML educativo | https://machinelearningforkids.co.uk |
| Hugging Face | Modelos ya entrenados para probar y usar | https://huggingface.co |

## 🧠 Resumen y puente
- AutoML automatiza la creación de modelos: usted pone datos, la máquina pone el oficio.
- La calidad depende de la variedad y el equilibrio de sus datos, no de la cantidad repetida.
- En la nube se juegan sus datos y su dinero: léalo antes de pulsar el botón.
- Un modelo entrenado se exporta y vive donde usted quiera.
En el próximo nivel llega la ética de los datos: porque ya tiene el poder de crear modelos, y el poder sin responsabilidad es peligroso.
