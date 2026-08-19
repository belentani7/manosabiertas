# Módulo 5: Automatización e Integración — Nivel 19
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es un bot de chat y para qué sirve.
- Conocer los bots de mensajes como Telegram y WhatsApp.
- Crear un bot sencillo que responda preguntas básicas.
- Conectar el bot con una herramienta de integración.
- Aprender las normas de cortesía y seguridad al usar bots.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Bot | Un programa que responde mensajes solo, como un robot de chat. |
| Chat | La conversación escrita: el bot y nosotros. |
| Comando | Una palabra o frase especial que el bot entiende. |
| Respuesta automática | El mensaje que el bot envía sin que nadie lo escriba. |
| Bot de Telegram | Un bot que vive dentro de la aplicación de mensajes Telegram. |
| Humano | Una persona real, que es distinta del bot. |

## 📚 Lección principal
Terminamos la banda Rama con una pieza muy útil: los bots de chat. Un bot es un programa que responde mensajes por nosotros, como un robot de conversación. Le escribimos y contesta; le pedimos algo y lo hace. Es como tener un recepcionista automático que nunca se cansa ni se molesta.

¿Dónde viven los bots? En las aplicaciones de mensajes. El lugar más sencillo para empezar es Telegram, una aplicación gratuita de mensajes muy popular. Dentro de Telegram, un bot es un contacto especial: tiene su propio nombre, su propio icono y responde a lo que le escribimos. No es una persona: es un programa con nombre.

¿Qué puede hacer un bot? Lo básico es responder con un mensaje preparado. Escribimos "hola" y responde "¡Hola! ¿En qué puedo ayudarte?". Escribimos "horario" y responde con el horario de la asociación. Son respuestas que nosotros escribimos una vez y que el bot repite cuando toca. Es como la contestadora del teléfono, pero por escrito y con mucha más memoria.

Los bots se entienden con nosotros a través de comandos. Un comando es una palabra especial que el bot reconoce: "/horario", "/precios", "/ayuda". Cuando escribimos el comando, el bot hace lo suyo. Es una forma muy clara de hablar con una máquina: en vez de explicar, pulsamos la palabra mágica.

El bot también puede entregar información que viene de otros lados. Aquí se une con todo lo que hemos aprendido: el bot puede preguntar a nuestra hoja de cálculo, a nuestra base de datos o a nuestra automatización, y traer la respuesta. "¿Cuántos socios hay?" y el bot mira la hoja y contesta con el número real. El bot es la boca; la automatización, la memoria.

Para crear un bot se usa una aplicación llamada BotFather (el "padre de los bots") dentro de Telegram. Se le escribe para crear un bot nuevo, se le pone nombre y se obtiene una clave secreta, como la llave de la puerta. Esa clave se guarda con cuidado: con ella se controla el bot. Después, la herramienta de integración usa esa clave para que el bot responda.

Una vez creado el bot, se conecta a la herramienta de integración. Podemos configurarlo para que, cuando alguien escriba un comando, el flujo haga algo: buscar un dato, enviar un aviso, registrar una petición. O al revés: que el flujo le envíe mensajes al bot para que los entregue al grupo. El bot se convierte en un punto de entrada y salida de la automatización.

Hay que ser cuidadosos con lo que los bots no pueden hacer. Un bot no entiende matices: si escribimos una frase larga y confusa, no sabrá qué hacer. Por eso los bots funcionan mejor con preguntas claras y comandos definidos. Cuando algo se sale de lo previsto, el bot debe tener una respuesta de respeto: "No he entendido, prueba con /ayuda".

Una regla de oro: que el bot nunca se haga pasar por una persona. El bot debe decir desde el principio "soy un robot". La honestidad evita confusiones y engaños. Si alguien cree que habla con una persona y descubre que es un bot, pierde la confianza. Lo claro es lo honesto.

Los bots son muy útiles para las asociaciones: atienden las preguntas repetidas, dan información a cualquier hora y recogen peticiones sin cansarse. Pero lo que no pueden hacer es sustituir el trato humano cuando hace falta: una persona que necesita ayuda de verdad merece una persona real. El bot abre la puerta; el humano atiende.

Al terminar este nivel, cerramos la banda Rama habiendo automatizado la voz, la casa y los mensajes. En la banda Copa subiremos un escalón más: los agentes con IA, que no solo responden, sino que realizan tareas completas.

## 💡 Ejemplos prácticos
1. **El bot de la asociación.** El bot responde automáticamente a las preguntas frecuentes: horarios, cuotas, direcciones. Los voluntarios ya no repiten lo mismo mil veces.
2. **El bot de reservas.** Escribimos "/reservar" y el bot consulta la hoja de disponibilidad y confirma o rechaza la reserva.
3. **El bot de avisos.** Cuando la automatización detecta una incidencia urgente, le envía el mensaje al bot, que lo entrega al grupo de la directiva.

## 🛠️ Actividad guiada
Paso 1: Descarga e instala Telegram en el teléfono (telegram.org). Crea tu cuenta con tu número si no la tienes.
Paso 2: Busca el usuario "@BotFather" dentro de Telegram y abre el chat con él.
Paso 3: Escribe /newbot y pulsa enviar. BotFather te preguntará el nombre del bot: ponle uno claro, por ejemplo "Atención del Club".
Paso 4: BotFather te pedirá un nombre de usuario que termine en "bot" (por ejemplo, "atencion_club_bot"). Escríbelo.
Paso 5: BotFather te dará una clave (token) larga. Cópiala y guárdala en un lugar seguro de tu papel: es la llave de tu bot, no la compartas.
Paso 6: Busca tu bot en Telegram por su nombre de usuario y ábrelo. Pulsa "Iniciar" o escribe /start. Te saludará.
Paso 7: En tu herramienta de integración, busca el conector "Telegram Bot" o "Telegram Bot API" y pega tu clave para conectar.
Paso 8: Crea una automatización sencilla: cuando el bot reciba el mensaje "hola", que responda "¡Hola! Soy el bot del club. Escribe /horario para ver los horarios".
Paso 9: Añade el comando /horario con tu horario real. Prueba a escribirle los dos mensajes y comprueba las respuestas.
Paso 10: Recuerda: al final del mensaje de bienvenida, pon "Soy un robot, no una persona".

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es un bot de chat? a) Un programa que responde mensajes solo. b) Una persona que trabaja de noche. c) Un tipo de teléfono.
2. ¿Dónde se crea un bot de Telegram? a) En la tienda. b) Escribiéndole a BotFather. c) No se puede crear.
3. ¿Qué es un comando? a) Una palabra especial que el bot reconoce, como /horario. b) Un grito. c) Un archivo.
4. ¿Debe un bot decir que es un robot? a) No, mejor disimular. b) Sí, siempre, para ser honesto. c) Solo si pregunta.
5. ¿Puede un bot sustituir el trato humano? a) Sí, siempre. b) No: abre la puerta, pero las personas atienden a las personas. c) Solo en días festivos.

Respuestas: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensión ética
- Un bot nunca debe hacerse pasar por una persona: anuncia siempre que es un robot.
- No le pidas al bot datos personales de los usuarios ni los guardes sin permiso.
- Supervisa los bots: revisa de vez en cuando qué mensajes reciben y si las respuestas siguen siendo correctas.
- Si un usuario necesita ayuda real (un problema serio, una emergencia), el bot debe derivarlo a una persona.
- La clave del bot es como la llave de tu casa: guárdala, no la compartas y cámbiala si sospechas.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Telegram | La aplicación donde viven los bots | telegram.org (gratuito) |
| BotFather | Crear y administrar tu bot | @BotFather en Telegram |
| Make (Telegram) | Conectar el bot a tus flujos | make.com |
| Chatwoot | Atención al cliente libre con bots | chatwoot.com (código abierto) |

## 🧠 Resumen y puente
Un bot responde mensajes solo, con comandos y respuestas preparadas, y puede traer datos de nuestras automatizaciones. Se crea con BotFather, se conecta con una clave y nunca se hace pasar por una persona. Cerramos la banda Rama. En el siguiente nivel empezamos la Copa: los agentes con IA, que no solo responden, sino que realizan tareas enteras.
