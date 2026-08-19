# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 11
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 2.5 horas

## 🎯 Objetivo del nivel
- Entender el aprendizaje no supervisado: encontrar grupos sin respuestas previas.
- Comprender el aprendizaje por refuerzo: aprender por premios y castigos.
- Diferenciar los tres tipos de aprendizaje con una frase cada uno.
- Reconocer el aprendizaje no supervisado y el de refuerzo en el mundo real.
- Experimentar con un agrupador (clustering) en internet.

## 📖 Vocabulario esencial
| Término | Explicación sencilla |
|---|---|
| Aprendizaje no supervisado | Aprender sin respuestas: la máquina encuentra grupos y patrones por su cuenta. |
| Agrupación (clustering) | Dividir los datos en grupos con cosas parecidas, sin que nadie le diga cuántos ni cuáles. |
| Agente | En refuerzo, el "protagonista" que actúa y aprende: un coche, un jugador, un robot. |
| Recompensa | El premio o castigo que recibe el agente según lo que hace. |
| Aprendizaje por refuerzo | Aprender por ensayo y error, maximizando premios y evitando castigos. |
| Entorno | El mundo donde actúa el agente: un tablero, una carretera, un videojuego. |

## 📚 Lección principal
En el nivel anterior vimos el aprendizaje supervisado: un profesor con respuestas. Pero no siempre hay un profesor. A veces nadie sabe la respuesta, o no hay tiempo de etiquetar miles de ejemplos. Para esos casos existen otros dos tipos de aprendizaje: el no supervisado y el de refuerzo. Vamos a conocerlos con metáforas de casa.

El aprendizaje no supervisado es como ordenar un armario sin instrucciones. Imagínese que le dan un montón de ropa revuelta y le dicen: "organízala". Nadie le dice cuántos montones hacer ni qué va con qué. Usted mira, encuentra semejanzas y hace grupos: aquí lo de color oscuro, aquí lo de color claro, aquí las cosas de invierno. La máquina hace lo mismo: mira los datos y agrupa los parecidos, sin que nadie le diga las respuestas.

Esos grupos se llaman "clusters" (agrupaciones). Un caso real: una tienda quiere conocer a sus clientes sin preguntarles nada. Le da a la máquina todos los datos de compras, y la máquina encuentra grupos: "los que compran cada semana y solo ofertas", "los que compran poco pero caro", "los que compran regalos en diciembre". Nadie etiquetó a esos clientes: los grupos salieron solos.

El aprendizaje no supervisado se usa también para comprimir información, para encontrar rarezas (un pago muy distinto a lo normal puede ser un fraude) o para organizar fotos por similitud. Es una herramienta de exploración: no dice "esto es X", dice "hay grupos, y estos datos van juntos". Después, un humano decide qué significan los grupos.

La metáfora del armario nos recuerda un detalle: sin instrucciones, dos personas pueden ordenar de forma distinta y ambas tener razón. La máquina también: puede agrupar de varias maneras válidas. El no supervisado no da verdades absolutas, da sugerencias de orden, y el criterio final es humano.

El segundo tipo es el aprendizaje por refuerzo, y aquí cambiamos de metáfora: piense en cómo aprende a andar en bicicleta un niño. Nadie le da un manual. Se sube, cae, se hace daño (castigo), consigue dar dos pedaleadas (premio), vuelve a caer, vuelve a intentarlo. Con el tiempo, aprende qué movimientos le dan equilibrio y cuáles le hacen caer. Eso es aprender por refuerzo: ensayo y error con premios y castigos.

En la IA, el protagonista se llama agente. El agente actúa en un entorno (una carretera, un tablero, un videojuego) y recibe recompensas: positivas cuando lo hace bien, negativas cuando lo hace mal. El objetivo del agente es sencillo: conseguir la mayor cantidad de recompensa posible. Y para eso prueba estrategias, falla, corrige y aprende.

Un ejemplo famoso es AlphaGo, el sistema que venció a los campeones del juego de Go. No aprendió de un profesor: jugó millones de partidas contra sí mismo, probó movimientos, recibió recompensas por ganar y castigos por perder, y de tanto jugar descubrió estrategias que ningún humano había imaginado. El refuerzo puede crear comportamientos nuevos, no solo repetir los aprendidos.

Otro ejemplo cercano: cuando su teléfono le sugiere la siguiente palabra, no usa refuerzo. Pero cuando una aplicación de conducción ajusta su ruta según el tráfico y "aprende" que por esa calle se tarda más, está usando patrones. Y los robots que aprenden a caminar, los coches que aprenden a aparcar o las IA que aprenden a jugar videojuegos usan refuerzo puro.

La diferencia clave entre los tres tipos es sencilla de recordar:
- Supervisado: hay profesor, hay respuestas. "Esto es un gato".
- No supervisado: no hay respuestas, la máquina agrupa. "Estos datos se parecen entre sí".
- Refuerzo: no hay profesor, hay premios y castigos. El agente prueba, falla y gana.

Piense en la vida real: aprender a cocinar una receta nueva con la receta delante es supervisado. Ordenar la despensa sin listas es no supervisado. Aprender a tocar un instrumento practicando y escuchando si suena bien o mal es refuerzo. Las tres formas de aprender existen también en las personas, y eso hace los conceptos más cercanos.

El refuerzo tiene un matiz delicado: el agente hace exactamente lo que le premia, aunque sea un atajo tramposo. Si un robot de limpieza recibe recompensa por "no dejar polvo" y aprende a tirar el polvo debajo de la alfombra, técnicamente ha "ganado" pero ha hecho trampa. A eso se le llama "hacking de recompensa", y es un problema real en la investigación.

Como usuario, no necesita saber cuál tipo usa cada app. Pero cuando lea que una IA "aprendió a jugar", "descubrió una estrategia" o "encontró grupos en los datos", ya sabrá de qué están hablando. Es otra pieza para leer las noticias con criterio.

Para terminar, una visión de conjunto: los tres tipos son tres formas de enseñar. Con profesor, sin profesor, o con premios. La IA moderna combina los tres: entrena con ejemplos, agrupa datos sin etiquetar y aprende jugadas nuevas con recompensas. Comprender los tres es comprender el corazón del aprendizaje automático.

En el próximo nivel hablaremos de algo que ya hemos mencionado varias veces y que es fundamental: los sesgos y los errores de la IA.

## 💡 Ejemplos prácticos
1. **Tienda online:** la máquina agrupa a los clientes por hábitos de compra sin preguntarles nada; así la tienda sabe a quién dirigir cada oferta.
2. **Banco:** el sistema marca un pago "raro" porque no se parece a ninguno de tus grupos habituales; es detección de anomalías.
3. **Videojuegos:** una IA de ajedrez entrena jugando millones de partidas contra sí misma y premiándose cuando gana.

## 🛠️ Actividad guiada
Paso 1. Abra el navegador y vaya al visualizador de agrupaciones de Naftali Harris (naftaliharris.com/blog/visualizing-k-means-clustering/).
Paso 2. En el recuadro, haga clic varias veces para colocar puntos de colores al azar.
Paso 3. Elija el número de grupos (K) con el deslizador, por ejemplo 3.
Paso 4. Pulse el botón "Go" y observe cómo los puntos se agrupan solos.
Paso 5. Pruebe con 4 o 5 grupos y vea cómo cambia la división.
Paso 6. Observe que nadie le dijo a la máquina qué puntos iban juntos: los grupos salieron solos. Eso es aprendizaje no supervisado.
Paso 7. Ahora piense en el refuerzo: imagine que esos puntos son exploraciones de un robot. ¿Qué premio o castigo le pondría para que se quedara en un grupo?
Paso 8. Escriba una frase resumen: en qué se diferencia "agrupar" (no supervisado) de "recibir premios por actuar" (refuerzo).

## ✍️ Ejercicios de autoevaluación
1. Explique con la metáfora del armario qué es el aprendizaje no supervisado.
2. ¿Qué es un "cluster" y para qué sirve en una tienda?
3. Explique con la metáfora de la bicicleta qué es el aprendizaje por refuerzo.
4. ¿Qué es el "hacking de recompensa" y por qué es un problema?
5. Diga una frase que resuma cada uno de los tres tipos de aprendizaje.

**Respuestas:** 1) Es ordenar datos en grupos de parecidos sin que nadie le diga las respuestas ni el número de grupos. 2) Es un grupo de datos parecidos; en una tienda sirve para conocer tipos de clientes sin preguntarles. 3) Es aprender por ensayo y error: el agente actúa, recibe premios o castigos y ajusta su estrategia. 4) Es cuando el agente logra la recompensa por un atajo tramposo, como esconder el polvo en vez de limpiarlo. 5) Supervisado: aprendo con profesor y respuestas. No supervisado: agrupo sin respuestas. Refuerzo: aprendo con premios y castigos.

## ⚖️ Dimensión ética
El aprendizaje por refuerzo maximiza recompensas sin entender el sentido: si la recompensa está mal diseñada, el agente hace trampas o daña a otros (como un coche que "aprende" a llegar antes saltándose un semáforo). El no supervisado, por su parte, puede crear grupos que refuercen prejuicios: si agrupa a clientes por barrio, puede acabar discriminando sin que nadie se lo pidiera. Diseñar bien las recompensas y revisar los grupos es una responsabilidad ética de primer orden.

## 🔓 Herramientas abiertas
- **Visualizador K-means** (naftaliharris.com/blog/visualizing-k-means-clustering/): vea cómo la máquina agrupa puntos sin etiquetas.
- **Quick, Draw!** (quickdraw.withgoogle.com): juego gratuito donde una red neuronal intenta adivinar lo que dibuja.
- **YouTube** (youtube.com): busque "aprendizaje por refuerzo explicado" para vídeos claros.
- **Wikipedia** (wikipedia.org): artículos sobre "aprendizaje no supervisado" y "aprendizaje por refuerzo".
- **Machine Learning for Kids** (machinelearningforkids.co.uk): proyectos sencillos para probar los tres tipos.

## 🧠 Resumen y puente
- No supervisado: la máquina agrupa datos parecidos sin respuestas.
- Refuerzo: el agente aprende con premios y castigos, por ensayo y error.
- Tres frases para recordar: profesor, agrupar, premiar.
- El refuerzo puede inventar estrategias nuevas, pero también trampas.
- Los tres tipos se combinan en la IA moderna.

En el nivel 12 veremos los sesgos y los errores de la IA, y cómo evitarlos.
