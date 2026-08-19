# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 07
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender qué es el aprendizaje automático y en qué se diferencia de un programa normal.
- Comprender que la máquina aprende de ejemplos, no de reglas escritas.
- Reconocer los datos de entrenamiento como el "libro de texto" de la IA.
- Aplicar la frase "basura entra, basura sale" al mundo de los datos.
- Entrenar un modelo sencillo con una herramienta gratuita.

## 📖 Vocabulario esencial
| Término | Explicación sencilla |
|---|---|
| Aprendizaje automático | La forma de hacer IA en la que la máquina aprende sola de ejemplos, sin reglas escritas. |
| Datos de entrenamiento | Los ejemplos (fotos, textos, números) con los que la máquina aprende. |
| Modelo | El resultado del aprendizaje: la "receta aprendida" que luego se usa para predecir. |
| Entrenar | El proceso de enseñar a la máquina mostrándole ejemplos. |
| Predecir | Hacer una suposición con lo aprendido: "esto es spam", "esta es una cara". |
| Característica | Un detalle que la máquina usa para decidir, como el tamaño o el color. |

## 📚 Lección principal
Hasta ahora hemos visto qué es la IA y de qué tipos existe. Ahora toca la pregunta más importante: ¿cómo aprenden las máquinas? La respuesta corta es: de la misma forma que aprendemos a reconocer cosas de pequeños, pero con millones de ejemplos. Eso se llama aprendizaje automático, y es el motor de casi toda la IA moderna.

Piense en cómo enseñaría a un niño a distinguir un gato de un perro. No le daría una lista de reglas ("si las orejas son puntiagudas y pesa menos de cinco kilos..."). Le mostraría muchos gatos y muchos perros, y el niño, sin saber explicarlo, acaba distinguiéndolos. El aprendizaje automático hace exactamente eso, pero a lo grande: le muestra millones de fotos etiquetadas y el sistema encuentra los patrones solo.

Compare con la programación clásica. En un programa tradicional, un humano escribe las reglas y el ordenador las sigue: "si la contraseña es correcta, entra". Eso funciona para cosas fijas, pero es imposible escribir reglas para reconocer una voz, una cara o un idioma. Hay demasiadas variaciones. Por eso se cambió el enfoque: en lugar de dar reglas, se dan ejemplos.

Los ejemplos se llaman datos de entrenamiento. Son el "libro de texto" de la máquina. Si queremos que un sistema distinga correo basura, le mostramos miles de correos marcados como "basura" o "importante". Si queremos que reconozca caras, le mostramos miles de fotos de caras. Cuantos más y mejores ejemplos, mejor aprende. Es como aprender a cocinar: cuantas más recetas se prueban, mejor cocinero se es.

El resultado del entrenamiento se llama modelo. El modelo es la "receta aprendida": una colección de ajustes internos que resumen los patrones encontrados. Una vez entrenado, el modelo ya no necesita los ejemplos: puede enfrentarse a datos nuevos y predecir. Cuando su correo decide que un mensaje nuevo es basura, está usando un modelo ya entrenado.

La máquina aprende usando características: pequeños detalles que ayudan a decidir. En un correo, la característica puede ser "tiene muchas palabras en mayúsculas" o "promete dinero fácil". En una foto, "tiene líneas curvas" o "predomina el color naranja". El sistema aprende qué características importan combinando miles de ejemplos.

Hay una frase famosa en este mundo: "basura entra, basura sale". Significa que la calidad del aprendizaje depende de la calidad de los datos. Si entrenamos un sistema con ejemplos incorrectos, incompletos o injustos, el sistema aprenderá esos errores. Es como enseñar a un niño con un libro de texto lleno de errores: el niño aprenderá los errores.

Por eso los datos de entrenamiento son tan importantes y tan delicados. Si mostramos a un sistema mil fotos de personas y el 90% son hombres, aprenderá que "persona" se parece a un hombre. Eso se llama sesgo, y es un problema serio del que hablaremos más adelante. La máquina no es neutra: hereda lo que le enseñamos.

¿Cómo "aprende" la máquina exactamente? No lo hace como nosotros, no "entiende" los conceptos. Ajusta números. Imagine miles de botones y perillas en una máquina enorme: cada ejemplo bien resuelto sube un botón, cada ejemplo fallido lo baja. Con millones de ejemplos, la máquina ajusta las perillas hasta que acierta casi siempre. Es ensayo y error a gran velocidad.

No hace falta saber matemáticas para entender la idea. La idea es: ejemplos más ajustes más correcciones igual a un modelo que acierta. Usted no necesita programar; solo necesita comprender el principio para saber por qué la IA acierta y por qué a veces falla.

El aprendizaje automático está por todas partes. El correo que filtra basura, el móvil que reconoce su voz, el banco que detecta fraudes, la tienda que predice qué comprará: todos funcionan con este mismo principio. Ya lo ha usado cientos de veces sin saberlo. Ahora ya sabe el nombre de lo que hay detrás.

Una diferencia clave con las personas: la máquina necesita muchísimos ejemplos. Un niño ve cuatro gatos y ya los reconoce; un sistema necesita miles o millones. La ventaja de la máquina es la velocidad: puede procesar en horas lo que a una persona le llevaría años. La desventaja es que no generaliza tan fácilmente: un pequeño cambio en el contexto puede confundirla.

En la práctica, para usar la IA no hace falta entrenar modelos: la mayoría ya vienen entrenados. Pero entender cómo aprenden nos hace usuarios más inteligentes: sabemos por qué un sistema se equivoca, por qué "alucina" y por qué conviene revisar los datos. Es como saber cómo funciona el motor: no hace falta arreglarlo, pero ayuda a entender por qué a veces hace ruido.

En el próximo nivel conoceremos las redes neuronales: el "cerebro" artificial que hay dentro de estos modelos.

## 💡 Ejemplos prácticos
1. **Correo electrónico:** usted marca un mensaje como "basura"; el sistema aprende de su ejemplo y en adelante filtra los parecidos.
2. **El banco:** el sistema que detecta que una compra en otro país "es rara" ha aprendido de millones de movimientos normales y anómalos.
3. **Fotos:** el móvil que agrupa las fotos de su nieto ha aprendido a reconocer su cara con miles de fotos de entrenamiento.

## 🛠️ Actividad guiada
Paso 1. Abra el navegador y vaya a Teachable Machine (teachablemachine.withgoogle.com).
Paso 2. Pulse "Empezar" y elija "Proyecto de imagen".
Paso 3. Verá dos clases: "Clase 1" y "Clase 2". Renombre la primera como "Mano levantada" y la segunda como "Mano baja".
Paso 4. Pulse "Webcam" en la clase 1 y, cuando el móvil u ordenador pida permiso, permítalo.
Paso 5. Levante la mano y pulse "Mantener grabación" unos segundos para capturar ejemplos.
Paso 6. Repita en la clase 2 con la mano abajo. Ya tiene sus datos de entrenamiento.
Paso 7. Pulse "Entrenar modelo" y espere unos segundos.
Paso 8. Pruebe: levante la mano y vea cómo el modelo predice "Mano levantada". Acaba de entrenar su primera IA.

## ✍️ Ejercicios de autoevaluación
1. ¿En qué se diferencia el aprendizaje automático de un programa tradicional?
2. ¿Qué son los datos de entrenamiento y por qué se comparan con un libro de texto?
3. ¿Qué es un modelo y para qué sirve una vez entrenado?
4. ¿Qué significa "basura entra, basura sale"?
5. ¿Cómo "aprende" realmente la máquina: entendiendo o ajustando?

**Respuestas:** 1) Un programa tradicional sigue reglas escritas por humanos; el aprendizaje automático aprende patrones de ejemplos. 2) Son los ejemplos con los que la máquina aprende, como un libro de texto del que estudia. 3) Es el resultado del aprendizaje, una "receta" interna que se usa para predecir con datos nuevos. 4) Que la calidad del aprendizaje depende de la calidad de los datos: datos malos producen modelos malos. 5) No entiende conceptos: ajusta números mediante ensayo y error hasta acertar.

## ⚖️ Dimensión ética
Los datos de entrenamiento no son neutros: reflejan el mundo, con sus injusticias. Si entrenamos con datos sesgados, la máquina discrimina, aunque nadie se lo pidiera. Por eso, quien crea modelos tiene una gran responsabilidad, y quien los usa debe exigir transparencia sobre qué datos se usaron. Como usuario, recuerde: cuando un sistema le falla injustamente, el problema suele estar en los datos, no en la "máquina".

## 🔓 Herramientas abiertas
- **Teachable Machine** (teachablemachine.withgoogle.com): entrena su propio modelo de imagen, sonido o pose, sin programar.
- **Machine Learning for Kids** (machinelearningforkids.co.uk): aprende creando proyectos sencillos.
- **Orange** (orangedatamining.com): programa gratuito para analizar datos visualmente, sin código.
- **Kaggle** (kaggle.com): datos y concursos gratuitos para practicar.
- **YouTube** (youtube.com): busque "qué es el aprendizaje automático" para más ejemplos.

## 🧠 Resumen y puente
- El aprendizaje automático enseña a la máquina con ejemplos, no con reglas.
- Los datos de entrenamiento son el libro de texto; el modelo es la receta aprendida.
- "Basura entra, basura sale": los datos mandan.
- La máquina no entiende: ajusta números por ensayo y error.
- Ya usamos aprendizaje automático todos los días sin saberlo.

En el nivel 08 conoceremos las redes neuronales, el "cerebro" artificial de la IA moderna.
