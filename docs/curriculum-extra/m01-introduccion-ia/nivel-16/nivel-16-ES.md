# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 16
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender por qué hay que probar una IA antes de confiar en ella.
- Distinguir entre datos de entrenamiento y datos de prueba.
- Comprender qué es la precisión y por qué no lo dice todo.
- Reconocer el sobreajuste: cuando la máquina memoriza en vez de aprender.
- Evaluar en la práctica un modelo sencillo con casos nuevos.

## 📖 Vocabulario esencial
| Término | Explicación simple |
|---|---|
| Evaluación | El proceso de probar a la IA con casos que nunca ha visto para ver si acierta. |
| Conjunto de entrenamiento | Los ejemplos con los que la máquina aprende. |
| Conjunto de prueba | Ejemplos nuevos, diferentes a los de entrenamiento, con los que se examina a la máquina. |
| Precisión | El porcentaje de aciertos: de cada 100 casos, cuántos resolvió bien. |
| Sobreajuste | Cuando la máquina memoriza los ejemplos de entrenamiento y falla con cualquier novedad. |
| Comparativa (benchmark) | Pruebas estándar que se usan para comparar modelos entre sí. |

## 📚 Lección principal
Imaginemos que contratamos a un cocinero. ¿Le pediríamos el currículum y ya? No: le pediríamos que cocine un plato nuevo y lo probamos. Eso es evaluar. Con la IA pasa igual: antes de confiar en un sistema, hay que probarlo. Y la forma de probarlo tiene truco.

El truco es este: no se puede examinar a la máquina con las mismas preguntas con las que estudió. Piense en un examen escolar. Si el alumno se estudia las respuestas de memoria y el examen es exactamente igual, saca un diez pero no ha aprendido nada. Para saber si aprendió de verdad, el examen debe traer preguntas nuevas.

Con la IA ocurre exactamente lo mismo. Los ejemplos con los que aprende se llaman conjunto de entrenamiento. Los ejemplos nuevos, que nunca ha visto, se llaman conjunto de prueba. Un buen modelo aprueba el examen con preguntas nuevas. Un modelo tramposo solo memoriza las viejas.

¿Por qué es tan importante? Porque en la vida real la IA se encuentra siempre con casos nuevos. Un filtro de correo basura, por ejemplo, nunca ha visto el correo que le va a llegar mañana. Si solo hubiera memorizado los correos de la semana pasada, sería inútil. Tiene que generalizar: aprender la regla, no el caso.

La precisión es el número que resume cuánto acierta: si resuelve bien 95 de cada 100 casos, tiene una precisión del 95%. Suena bien, pero hay que mirar con lupa. Un modelo que siempre responde "no hay enfermedad" puede tener una precisión altísima si las enfermedades son raras, y aun así ser peligrosísimo.

Ese es el gran engaño de las cifras: una precisión alta no garantiza que la IA sea buena. Depende de qué casos se le hayan puesto en la prueba y de qué está decidiendo. Por eso los expertos usan varias medidas y, sobre todo, prueban con datos que representen la vida real.

Otro concepto clave es el sobreajuste. Imagínese un alumno que se aprende las respuestas de memoria. En el examen de memoria saca un diez; en el examen de verdad, un cero. La máquina sobreajustada es igual: con los ejemplos de entrenamiento acierta todo, pero con cualquier cosa nueva se derrumba. Memorizar no es aprender.

¿Cómo se detecta el sobreajuste? Comparando: si la máquina acierta el 99% en el entrenamiento y solo el 60% en la prueba, algo huele mal. Esa diferencia es la señal de que memorizó en vez de entender. En el mundo profesional, verificar esa diferencia es el pan de cada día.

También existe el problema contrario, el subajuste: cuando el modelo es tan simple que no aprende ni siquiera los ejemplos de entrenamiento. Es como un cocinero que solo sabe hacer pan, sea lo que sea lo que le pidan. Ni memoriza ni generaliza: es directamente flojo.

En la práctica, las empresas y los investigadores usan comparativas (benchmarks): baterías de pruebas estándar que permiten comparar modelos entre sí. "Este modelo rinde mejor en estas pruebas" es una frase con sentido porque todos han hecho el mismo examen.

Pero ojo: una comparativa tampoco es la verdad absoluta. Los exámenes se pueden preparar, y algunos modelos mejoran en las pruebas pero fallan en la calle. La realidad siempre gana al laboratorio. Por eso la evaluación no se hace una vez, sino de forma continua, con datos reales y con supervisión humana.

¿Y qué papel tiene usted? Ser crítico con las cifras. Cuando una empresa anuncie "nuestra IA acierta el 99%", pregúntese: ¿con qué casos la probaron? ¿Representan mi realidad? Un 99% con casos fáciles no vale lo mismo que un 90% con casos difíciles.

La evaluación también es una cuestión ética. Un sistema de diagnóstico médico que falla más con unas personas que con otras no es aceptable, aunque su precisión global sea alta. Por eso las pruebas deben mirar no solo el promedio, sino a cada grupo. La justicia se mide en los detalles.

En el próximo nivel veremos el arte de hablar con la IA: el prompting avanzado, para sacarle el máximo provecho a los asistentes.

## 💡 Ejemplos prácticos
1. **Filtro de correo basura:** se entrena con correos antiguos y se prueba con correos nuevos que nunca ha visto; así se sabe si aprenderá en la vida real.
2. **Diagnóstico médico:** un modelo se prueba con casos de distintos grupos de personas; la precisión por grupos importa más que el promedio.
3. **Pronóstico del tiempo:** se entrena con los datos del año pasado y se evalúa con los de este año, que no conoció.

## 🛠️ Actividad guiada
Paso 1. Abra Teachable Machine (teachablemachine.withgoogle.com) en el navegador.
Paso 2. Cree dos clases: "mano abierta" y "puño cerrado". Use la cámara del ordenador para enseñarle 5 ejemplos de cada una.
Paso 3. Entrene el modelo y pruebe con la misma mano que usó para enseñarle: acertará casi siempre.
Paso 4. Ahora la prueba de verdad: haga gestos que no enseñó, como una mano girada o a otra distancia. Observe cómo baja el acierto.
Paso 5. Añada 20 ejemplos más de cada clase, variando distancia y ángulo. Vuelva a entrenar.
Paso 6. Repita la prueba con gestos nuevos. Compare: ¿mejoró el acierto con más y mejores ejemplos?
Paso 7. Reflexione: ¿qué fue el conjunto de entrenamiento y cuál el conjunto de prueba?
Paso 8. Escriba una conclusión sobre por qué los ejemplos nuevos son la prueba de fuego de una IA.

## ✍️ Ejercicios de autoevaluación
1. ¿Por qué no se puede examinar a la máquina con las mismas preguntas con las que estudió?
2. ¿Qué diferencia hay entre el conjunto de entrenamiento y el conjunto de prueba?
3. ¿Qué es el sobreajuste y cómo se detecta?
4. ¿Por qué una precisión alta no garantiza que la IA sea buena?
5. ¿Qué papel tiene el usuario ante las cifras que anuncian las empresas?

**Respuestas:** 1) Porque memorizaría y no aprendería; el examen debe traer preguntas nuevas para comprobar que generaliza. 2) El de entrenamiento son los ejemplos con los que aprende; el de prueba son casos nuevos que nunca vio y con los que se le examina. 3) Es cuando la máquina memoriza los ejemplos de entrenamiento y falla con novedades; se detecta cuando acierta mucho en el entrenamiento y mucho menos en la prueba. 4) Porque depende de qué casos se probaron y de qué decide; puede acertar mucho en casos fáciles y fallar en los importantes. 5) Ser crítico: preguntarse con qué casos la probaron y si representan su realidad, en vez de creer el número.

## ⚖️ Dimensión ética
Evaluar es una forma de proteger a las personas: un modelo no probado es un riesgo. Pero la evaluación también puede engañar si se hace con datos que no representan a todos. Los sistemas que deciden sobre salud, dinero o trabajo deben evaluarse por grupos, no solo por promedio, y de forma independiente. Exigir transparencia en las pruebas es exigir justicia.

## 🔓 Herramientas abiertas
- **Teachable Machine** (teachablemachine.withgoogle.com): entrene y pruebe modelos con sus propias fotos o gestos.
- **TensorFlow Playground** (playground.tensorflow.org): vea la diferencia entre acierto en entrenamiento y en prueba.
- **Kaggle** (kaggle.com): conjuntos de datos reales para practicar evaluaciones.
- **Hugging Face** (huggingface.co): líderes (leaderboards) donde se comparan modelos con pruebas estándar.
- **YouTube** (youtube.com): busque "sobreajuste explicado" para ver animaciones del concepto.

## 🧠 Resumen y puente
- Antes de confiar, hay que probar con casos que la IA nunca vio.
- Entrenamiento es estudiar; prueba es el examen con preguntas nuevas.
- Memorizar no es aprender: cuidado con el sobreajuste.
- Una precisión alta puede esconder injusticias.
- Las cifras se miran con lupa, no se creen a ciegas.

En el nivel 17 dominaremos el prompting avanzado: el arte de pedirle a la IA exactamente lo que queremos.
