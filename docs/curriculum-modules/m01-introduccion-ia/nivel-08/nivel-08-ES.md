# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 08
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender qué es una red neuronal con metáforas de la vida cotidiana.
- Comprender que las redes neuronales están inspiradas en el cerebro, pero no son un cerebro.
- Saber qué son las capas y por qué "más capas" se llama aprendizaje profundo.
- Entender el papel de las conexiones (pesos) en el aprendizaje.
- Ver que una red neuronal se puede visualizar y experimentar en internet.

## 📖 Vocabulario esencial
| Término | Explicación sencilla |
|---|---|
| Red neuronal | Un sistema de pequeños "nodos" conectados que aprende ajustando la fuerza de sus conexiones. |
| Neurona artificial | Cada pieza pequeña de la red que recibe señales, las transforma y las pasa. |
| Capa | Un grupo de neuronas que procesa la información al mismo tiempo y la entrega a la siguiente. |
| Aprendizaje profundo | Una red con muchas capas, capaz de aprender cosas muy complejas. |
| Peso (conexión) | La "fuerza" de cada conexión, que el sistema ajusta mientras aprende. |
| Activación | La señal que una neurona envía a la siguiente cuando "se enciende". |

## 📚 Lección principal
Las redes neuronales suenan a ciencia de laboratorio, pero se pueden entender con metáforas de casa. Imagine que usted dirige una brigada de cocina enorme. Delante tiene cientos de cocineros en fila. El primero recibe el pedido del cliente, le pasa una nota al segundo, el segundo la añade algo y se la pasa al tercero, y así hasta el último, que sirve el plato. Cada cocinero hace un pequeño trabajo y pasa el resultado al siguiente. Así funciona una red neuronal.

Cada cocinero es una neurona artificial. Recibe señales (los pedidos), las transforma un poco y las pasa a la siguiente neurona. Ninguna neurona, por sí sola, hace nada impresionante. Pero cuando son miles organizadas en filas, el conjunto es capaz de cosas asombrosas: reconocer su cara, traducir un idioma o entender lo que usted dice.

Las filas de cocineros se llaman capas. La primera capa recibe los datos de entrada, por ejemplo los puntos de luz de una foto. Las capas del medio van afinando: una detecta bordes, otra reconoce formas, otra identifica que esas formas juntas parecen un ojo. La última capa da el resultado: "esto es una cara". Cuantas más capas, más detallado es el reconocimiento. A eso se le llama aprendizaje profundo.

¿Y cómo aprende la brigada? Ahí está la clave: las conexiones entre cocineros tienen una "fuerza", que se llama peso. Cuando la red acierta, los pesos se mantienen. Cuando falla, se ajustan: se fortalece la conexión que ayudó y se debilita la que confundió. Con millones de ejemplos, la red va afinando los pesos hasta acertar casi siempre. Es como cuando usted ajusta el fuego de la cocina: demasiado fuerte, lo baja; demasiado suave, lo sube.

Piense en las conexiones como en los hilos de una manta de ganchillo. Cada hilo sujeta una parte. Si un hilo está flojo, la manta se deshace; si está muy tirante, deforma el dibujo. La red ajusta cada hilo mientras aprende. Al final, la manta (el modelo) tiene exactamente la tensión correcta para cada caso.

Es importante desmontar un malentendido: las redes neuronales están inspiradas en el cerebro, pero no son un cerebro. No piensan, no sienten y no tienen conciencia. Son matemáticas imitando una forma de organizar el trabajo que resulta muy eficaz. Es como un avión: se inspira en los pájaros, pero no es un pájaro.

¿De dónde salió la idea? En los años cuarenta y cincuenta, los científicos observaron que el cerebro procesa la información con millones de células conectadas, las neuronas, que se encienden y se apagan. Pensaron: ¿y si construimos una imitación sencilla de eso? De ahí nació la neurona artificial, un pequeño dispositivo que recibe números, los suma y decide si "se enciende" o no.

Durante décadas, las redes neuronales fueron una curiosidad. Faltaban dos cosas: potencia de cálculo y datos. Sin datos, no hay nada que aprender; sin potencia, no hay manera de ajustar millones de conexiones. Por eso el gran despegue llegó en los años 2010, cuando los ordenadores se volvieron muy rápidos y los datos abundaron. Las redes dejaron de ser teoría y se volvieron el motor de todo.

Hoy, las redes neuronales profundas están en el traductor, en el reconocimiento de voz, en las fotos, en el diagnóstico médico y en los coches que se conducen solos. Cuando usted dicta un mensaje y el móvil lo escribe bien, hay una red neuronal con muchas capas trabajando en medio segundo.

Una forma de entenderlo de verdad es verlo. En internet hay un laboratorio gratuito llamado TensorFlow Playground donde se puede jugar con una red neuronal pequeña: elegir la forma de los datos, añadir capas y ver cómo la red aprende en directo. Es como mirar por la ventana de la cocina y ver a la brigada trabajar.

Lo que no se debe esperar es que una red neuronal "razone". No entiende el porqué de las cosas. Aprendió a acertar, no a comprender. Por eso a veces acierta por razones equivocadas: por ejemplo, si todas las fotos de perros en su entrenamiento tenían el césped detrás, puede acabar identificando césped y no perros. Ese es un peligro importante que hay que conocer.

La metáfora final: la red neuronal es como un gran equipo de relevos. Nadie corre la carrera entera; cada relevista corre su tramo y pasa el testigo. El equipo completo, coordinado, llega a la meta. La inteligencia no está en un relevista solo: está en cómo se pasan el testigo. Y eso, afortunadamente, se puede entrenar, corregir y mejorar.

En el próximo nivel veremos el otro ingrediente imprescindible: los datos de entrenamiento.

## 💡 Ejemplos prácticos
1. **Dictado del móvil:** cuando dicta y el texto sale correcto, una red neuronal de muchas capas ha procesado su voz en un instante.
2. **Fotos familiares:** la red que agrupa las fotos de su nieto primero detecta bordes, luego ojos y nariz, y al final "reconoce" la cara completa.
3. **Traducción:** el traductor automático usa capas que van desde las letras hasta el sentido de la frase completa.

## 🛠️ Actividad guiada
Paso 1. Abra el navegador y vaya a TensorFlow Playground (playground.tensorflow.org).
Paso 2. Mire la parte derecha: son los datos que la red debe aprender a separar (puntos azules y naranjas).
Paso 3. En el centro verá las capas de la red con sus neuronas y conexiones.
Paso 4. Pulse el botón de "Play" (triángulo) en la parte superior izquierda.
Paso 5. Observe cómo la red aprende: los colores del fondo cambian mientras ajusta sus conexiones.
Paso 6. Cuando acabe, pulse "Reset" y añada una capa extra con el botón "+".
Paso 7. Pulse "Play" de nuevo y observe si aprende más rápido o de forma distinta.
Paso 8. Cambie la forma de los datos con el menú de arriba y vea que algunas formas son más fáciles que otras. Ya ha visto una red neuronal trabajar.

## ✍️ Ejercicios de autoevaluación
1. Explique con la metáfora de la brigada de cocina qué es una red neuronal.
2. ¿Qué es una capa y qué significa "aprendizaje profundo"?
3. ¿Qué es un peso (conexión) y cómo cambia mientras la red aprende?
4. ¿Las redes neuronales son como el cerebro humano? ¿Qué son realmente?
5. ¿Por qué una red puede acertar "por razones equivocadas"?

**Respuestas:** 1) Es un equipo en fila donde cada trabajador recibe señales, las transforma y las pasa al siguiente hasta obtener el resultado. 2) Una capa es un grupo de neuronas que procesa a la vez; el aprendizaje profundo es una red con muchas capas. 3) Es la fuerza de cada conexión; la red la ajusta: refuerza lo que acierta y debilita lo que confunde. 4) Están inspiradas en el cerebro, pero son matemáticas organizadas, sin pensamiento ni conciencia. 5) Porque aprendió patrones superficiales, como el fondo de las fotos, en lugar de lo esencial.

## ⚖️ Dimensión ética
Las redes neuronales pueden aprender lo correcto por razones equivocadas, y eso es un riesgo silencioso. Un sistema que "acierta" discriminando (por ejemplo, rechazando créditos según el barrio) parece funcionar, pero perpetúa injusticias. Por eso la auditoría de modelos es tan importante: no basta con que acierte; hay que comprobar por qué acierta. Como usuario, desconfíe de los sistemas que no explican sus decisiones.

## 🔓 Herramientas abiertas
- **TensorFlow Playground** (playground.tensorflow.org): experimente con redes neuronales sin instalar nada.
- **YouTube** (youtube.com): busque "cómo funcionan las redes neuronales" para vídeos animados.
- **Teachable Machine** (teachablemachine.withgoogle.com): entrene su propia red en minutos.
- **Google Arts & Culture** (artsandculture.google.com): exploraciones visuales sobre IA y creatividad.
- **Wikipedia** (wikipedia.org): artículo sobre "red neuronal artificial" para consultar conceptos.

## 🧠 Resumen y puente
- Una red neuronal es un equipo de relevos que transforma señales capa a capa.
- Cada neurona hace poco; el conjunto, organizado, hace maravillas.
- Los pesos son la fuerza de las conexiones, y se ajustan con el aprendizaje.
- Las redes están inspiradas en el cerebro, pero no son un cerebro.
- A veces aciertan por razones equivocadas: hay que auditar los modelos.

En el nivel 09 veremos los datos de entrenamiento: de dónde salen y por qué son la base de todo.
