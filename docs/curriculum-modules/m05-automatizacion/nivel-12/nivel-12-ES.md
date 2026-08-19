# Módulo 5: Automatización e Integración — Nivel 12
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender cómo se integra la inteligencia artificial dentro de un flujo.
- Hacer que una automatización envíe un texto a un modelo de IA y reciba una respuesta.
- Usar la IA para resumir, redactar o clasificar dentro de un flujo.
- Combinar variables, condiciones y IA en una automatización.
- Ser consciente de que la respuesta de la IA siempre se revisa.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Modelo de IA | El programa que lee y genera textos, como un ayudante que piensa. |
| Pedido (prompt) | La instrucción que le damos a la IA: qué queremos que haga. |
| Respuesta | El texto que la IA devuelve. |
| Resumir | Hacer un texto más corto con lo esencial. |
| Clasificar | Poner un texto en una categoría: urgente, normal, spam. |
| Revisar | Leer y comprobar lo que ha hecho la IA antes de usarlo. |

## 📚 Lección principal
Hasta ahora nuestras automatizaciones movían datos de un lado a otro y decidían con condiciones. Hoy les vamos a enseñar algo nuevo: a pensar. Vamos a integrar inteligencia artificial dentro de un flujo. Es como poner en la cocina un ayudante que lee, resume y escribe: un ayudante muy rápido que, eso sí, hay que revisar.

La inteligencia artificial que usamos hoy son programas que han leído muchísimo texto y han aprendido a entenderlo y generarlo. Cuando les damos una instrucción clara, responden con texto. En el módulo 4 ya aprendimos a pedirle textos a la IA. Ahora vamos a enseñarle a nuestra automatización a pedirlos sola.

¿Cómo encaja la IA en un flujo? Imagina que cada mañana llegan cincuenta correos al club. Queremos un resumen de cada uno sin leerlos todos. La automatización toma cada correo (variable), lo envía a la IA con el pedido "resume este texto en tres líneas", recibe la respuesta y la manda a nuestro correo o mensaje. Ese es el ciclo: tomar, pedir, recibir, entregar.

En las herramientas de integración, la IA es un paso más, como otro eslabón de la cadena. Se busca la aplicación del modelo de IA (por ejemplo, OpenAI, Google Gemini, o los módulos propios de Make), se elige el evento "crear texto" o "responder a un pedido", y se escribe el pedido. Dentro del pedido podemos poner variables: el texto del correo, el nombre del socio, la pregunta que queremos que responda.

El pedido, llamado "prompt", es la instrucción. Una buena instrucción para la IA es clara y concreta: "Resume el siguiente texto en tres líneas: [texto del correo]". Cuanto mejor le expliquemos qué queremos, mejor responderá. Es como darle a un ayudante instrucciones precisas en la cocina: "pica las cebollas en cuadritos", no "haz algo con las cebollas".

La IA también puede clasificar. Podemos pedirle: "Dime si este mensaje es urgente, normal o publicidad. Responde solo con una palabra: urgente, normal o publicidad". La respuesta es una sola palabra que el flujo puede usar en una condición. Así combinamos la inteligencia de la IA con la lógica si-entonces del nivel 10.

Los resúmenes son otro gran uso. Una hoja con cien comentarios puede resumirse por la IA: "Dime los tres temas que más se repiten". La automatización reúne los comentarios, la IA los analiza y entrega el resultado. Ahorramos horas de lectura y nos llevamos la esencia.

Pero aquí viene la lección más importante: la IA se equivoca. Puede inventarse datos, malinterpretar un tono o responder con algo absurdo. Por eso, lo que produce la IA siempre se revisa antes de enviarlo a otras personas o de tomar decisiones. La IA es un ayudante, no el jefe. El criterio final es humano.

Nuestros flujos deben tratar la respuesta de la IA como una variable más, que se guarda, se muestra y se revisa. Podemos poner la respuesta en un correo para que la leamos antes de publicar, o usarla en una condición. Pero nunca dejemos que el flujo envíe a todos una respuesta de IA sin pasar por una revisión.

Conviene empezar con usos sencillos y de bajo riesgo. Un resumen para uno mismo, una clasificación para ordenar, un borrador de mensaje que luego revisamos. No empecemos enviando respuestas de IA a cientos de personas sin control. La prudencia se gana con la práctica.

Las herramientas de integración ofrecen IA con límites gratuitos. Para empezar, el plan gratuito suele bastar. La IA consume un poco de "combustible" por cada pedido, así que conviene no pedirle resúmenes innecesarios. Cada pedido cuesta algo, aunque sea pequeño.

Al terminar este nivel tendrás una automatización que piensa: lee un texto, lo resume o lo clasifica y te lo entrega. Es el primer paso hacia los agentes con IA que veremos en la banda Copa. Recuerda siempre: la máquina sugiere, la persona decide.

## 💡 Ejemplos prácticos
1. **El resumen del día.** Cada mañana, el flujo reúne los correos nuevos, la IA los resume en cinco líneas y llega el resumen al teléfono de la coordinadora.
2. **La clasificación de incidencias.** La IA lee cada incidencia y responde "urgente", "normal" o "publicidad". La condición del flujo envía las urgentes al encargado.
3. **El borrador de respuesta.** Cuando llega una solicitud de información, la IA redacta un borrador de respuesta y el flujo lo guarda en un documento para revisión humana.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta de integración y crea un escenario nuevo llamado "Resumen del día" (o tu tema).
Paso 2: Añade el disparador: por ejemplo, en Gmail, el evento "Nuevo correo" o en Google Sheets "Observar filas" con una hoja de comentarios.
Paso 3: Añade el paso de IA: busca "OpenAI" o "Inteligencia artificial" en los conectores, elige el evento "Crear texto" o "Completar" y conéctate con tu cuenta (te pedirá una clave o iniciará sesión).
Paso 4: En el campo del pedido, escribe: "Resume el siguiente texto en tres líneas: [inserta la variable con el texto]".
Paso 5: En el campo de respuesta o modelo, deja la opción recomendada o elige un modelo sencillo y barato.
Paso 6: Añade una acción de mensaje (Telegram): "Resumen: [variable con la respuesta de la IA]".
Paso 7: Prueba con un texto real (un correo de prueba o un comentario). Mira el resumen que llega.
Paso 8: Revisa la respuesta con ojo crítico: ¿es correcta? ¿se inventó algo? Apunta qué le pedirías distinto.
Paso 9: Activa el escenario y decide cómo lo usarás: quizá solo para ti, quizá con revisión antes de compartir.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué hace la IA dentro de un flujo? a) Lee y genera textos cuando se lo pedimos. b) Repara los cables. c) Enciende el ordenador.
2. ¿Qué es el pedido o prompt? a) El nombre de la automatización. b) La instrucción clara que le damos a la IA. c) Un tipo de botón.
3. ¿Se puede usar la respuesta de la IA en una condición? a) No, es solo texto. b) Sí, por ejemplo si responde "urgente" o "normal". c) Solo en Make.
4. ¿La IA siempre acierta? a) Sí, nunca falla. b) A veces se equivoca o se inventa datos. c) Solo falla los lunes.
5. ¿Qué hacemos con la respuesta de la IA antes de enviarla a otros? a) La enviamos tal cual. b) La revisamos siempre. c) La borramos.

Respuestas: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensión ética
- La IA puede inventarse datos o responder con falsa seguridad: nunca la uses para tomar decisiones sobre personas sin revisión humana.
- No envíes a la IA datos personales innecesarios: envía solo lo que hace falta para la tarea.
- Los textos que genera la IA pueden contener sesgos o errores: revísalos, sobre todo si van a muchas personas.
- No hagas pasar un texto de IA por escrito por una persona real sin decirlo, si el contexto lo exige.
- La IA es una herramienta tuya: decide tú qué le pides, cuándo la usas y cómo revisas su trabajo.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| OpenAI (en Make/Zapier) | Pedir resúmenes y textos a la IA | openai.com (con límites gratuitos) |
| Google Gemini | Modelo de IA con cuentas gratuitas | gemini.google.com |
| Ollama | IA local y libre, sin internet | ollama.com (gratuito) |
| Hugging Face | Modelos de IA abiertos | huggingface.co |

## 🧠 Resumen y puente
La IA se integra en el flujo como un paso más: recibe un pedido con variables, devuelve una respuesta que guardamos y usamos. Resume, clasifica y redacta, pero siempre hay que revisar su trabajo. Ya leemos, decidimos y pensamos con la automatización. En el siguiente nivel aprenderemos el control de errores: qué hace el flujo cuando algo falla.
