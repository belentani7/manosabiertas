# Módulo 5: Automatización e Integración — Nivel 07
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender qué es una notificación automática y para qué sirve.
- Crear avisos que llegan solos al teléfono o al correo cuando algo sucede.
- Elegir qué eventos merecen un aviso y cuáles no.
- Configurar un aviso de un dato importante (un pago, una fecha, una respuesta).
- Evitar la sobrecarga de avisos que cansan y no ayudan.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Notificación | El aviso que aparece en la pantalla del teléfono o en el correo. |
| Aviso automático | Un mensaje que se envía solo cuando algo ocurre. |
| Evento | El suceso que pone en marcha el aviso: un pago, un mensaje, una fecha. |
| Sobrecarga de avisos | Demasiados avisos que llegan a la vez y agobian. |
| Canal | El camino por donde llega el aviso: teléfono, correo, mensajes. |
| Importante | Lo que de verdad merece nuestra atención. |

## 📚 Lección principal
En el nivel anterior conectamos dos aplicaciones y vimos cómo trabajan juntas. Hoy nos centramos en una de las cosas más útiles que se pueden automatizar: las notificaciones. Un aviso automático es un mensaje que llega solo cuando algo importante sucede, sin que nosotros tengamos que estar mirando la pantalla.

Pensemos en la olla a presión de la cocina. Nosotros no estamos todo el tiempo mirando si ya está lista: la olla avisa con un pito cuando alcanza la presión. Ese pito es una notificación. La automatización del aviso nos deja hacer otras cosas mientras la olla trabaja.

En el mundo digital es igual. Hay cientos de momentos que nos interesa conocer: cuando llega un correo importante, cuando alguien rellena un formulario, cuando se hace un pago, cuando se cumple una fecha. Si tuviéramos que estar mirando todo el rato, no haríamos otra cosa. El aviso automático mira por nosotros.

La gracia está en elegir bien qué nos avisa. No todos los eventos merecen un pito. Lo importante, lo urgente o lo que cuesta dinero merece aviso. Lo que es ruido, no. Una buena notificación es como la llamada de un amigo que solo te llama cuando importa, no el que te llama por cualquier cosa.

Cuando montamos una notificación en nuestra herramienta de integración, seguimos el mismo esquema de siempre. El disparador es el evento que queremos vigilar: "nuevo correo de esta persona", "fila nueva en esta hoja", "pago realizado". La acción es el envío del aviso: un mensaje al teléfono, un correo, una notificación.

¿Qué canal elegir? Depende del momento. Para algo urgente, un mensaje al teléfono (Telegram o WhatsApp). Para algo que puede esperar, un correo. Para un recordatorio de calendario, la propia aplicación del calendario. Elegir el canal es como elegir entre llamar por teléfono o mandar una carta: según la importancia, el camino.

Muchas aplicaciones ya avisan solas sin necesidad de la herramienta de integración. El banco avisa de cada movimiento, el correo de cada mensaje nuevo. Lo que aporta la integración es avisar de cosas que ninguna aplicación vigila: cruzar datos, unir dos aplicaciones, avisar de condiciones concretas.

Un ejemplo: queremos que nos avisen solo si la temperatura de la nevera sube de cierto nivel, o solo si llega un correo del banco con la palabra "recibo". Eso es una condición. Aprenderemos condiciones a fondo en la banda Tallo; hoy vemos cómo encaja: la notificación puede depender de una condición elegida.

La sobrecarga de avisos es un peligro real. Si activamos quince notificaciones, el teléfono suena todo el día y acabamos ignorándolas todas, incluso las importantes. Es como el pastor que grita "¡lobo!" tantas veces que nadie le hace caso. La regla de oro: pocos avisos y buenos.

Cada vez que activemos un aviso, preguntémonos: "¿de verdad necesito saber esto en el momento en que pasa?". Si la respuesta es dudosa, mejor no activarlo. Podemos empezar sin aviso y añadirlo más tarde si de verdad lo echamos de menos. Es más fácil añadir que quitar el ruido.

También conviene poner apagones: hay momentos del día en que no queremos avisos. El teléfono ya tiene modos de silencio (nivel 4) y las herramientas permiten que los avisos solo se envíen en ciertas horas. Una notificación que llega de madrugada no es una ayuda, es una molestia.

Al terminar este nivel sabrás montar avisos que te cuentan solo lo importante y, sobre todo, sabrás decir "esto no merece un aviso". Ese criterio vale más que toda la tecnología junta.

## 💡 Ejemplos prácticos
1. **El pago del alquiler.** Cuando la hoja del club registra el pago de un socio, el tesorero recibe un mensaje en el teléfono: "Pago recibido de [nombre]".
2. **La respuesta del formulario.** Cuando alguien pide información en la web de la asociación, llega un aviso al correo de la coordinadora en menos de un minuto.
3. **El aviso de mantenimiento.** La herramienta vigila la hoja de incidencias y avisa al encargado cuando alguien escribe "urgente" en la columna de estado.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta de integración (Make o Zapier) y entra en tu cuenta.
Paso 2: Crea un escenario nuevo y elige el disparador. Por ejemplo: en Google Sheets, el evento "Observar filas" con tu hoja de pagos del club.
Paso 3: Añade la acción: busca la aplicación de mensajes (Telegram) y elige "Enviar mensaje".
Paso 4: Conecta tu cuenta de Telegram si no está conectada (te pedirá un código breve).
Paso 5: En el mensaje, escribe: "Pago recibido de [campo nombre] por [campo importe]". La herramienta te ofrece los campos de la hoja para insertarlos.
Paso 6: Pulsa "Probar". La herramienta enviará un mensaje de prueba a tu Telegram. Ábrelo y míralo.
Paso 7: Si quieres que solo avise cuando el importe sea mayor de cero, busca la opción "Filtro" o "Condición" y pon esa regla (o espera al nivel 10).
Paso 8: Activa el escenario. Añade una fila de prueba a la hoja y comprueba que llega el mensaje. Borra luego la fila de prueba.
Paso 9: Escribe en tu papel una lista de tres eventos que quieres vigilar y decide, para cada uno, si merece aviso o no.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es una notificación automática? a) Un mensaje que se envía solo cuando algo ocurre. b) Un mensaje que escribimos a mano. c) Un tipo de letra.
2. ¿Qué eventos merecen un aviso? a) Todos, cuantos más mejor. b) Solo lo importante, urgente o que cuesta dinero. c) Ninguno.
3. ¿Qué canal es mejor para algo urgente? a) Una carta en papel. b) Un mensaje al teléfono. c) Apuntarlo en la agenda.
4. ¿Qué es la sobrecarga de avisos? a) Demasiados avisos que llegan y se ignoran todos. b) Un aviso que llega tarde. c) Un aviso en inglés.
5. ¿Qué regla de oro aplicamos a las notificaciones? a) Cuantos más avisos, mejor. b) Pocos avisos y buenos. c) Ningún aviso nunca.

Respuestas: 1-a, 2-b, 3-b, 4-a, 5-b.

## ⚖️ Dimensión ética
- No mandes avisos automáticos a otras personas sin su consentimiento: cada aviso que llega a un teléfono ajeno interrumpe.
- Los avisos sobre dinero o salud deben ser discretos: no escribas datos sensibles en el propio mensaje.
- Respeta los horarios de descanso de los demás: programa los avisos para horas razonables.
- Quita los avisos que ya no sirven: un aviso antiguo es ruido y confusión.
- Tú eres dueño de tu atención: decide tú qué te avisa, no las aplicaciones.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Telegram | Recibir avisos en el teléfono | telegram.org (gratuito) |
| Pushbullet | Avisos del ordenador al teléfono | pushbullet.com (gratuito) |
| ntfy | Avisos propios, sin depender de otras apps | ntfy.sh (gratuito y libre) |
| Google Alerts | Aviso cuando aparece algo nuevo en internet | google.com/alerts (gratuito) |

## 🧠 Resumen y puente
Las notificaciones automáticas nos avisan solo de lo importante, sin que estemos mirando. Elegimos el evento, el canal y el momento, y evitamos la sobrecarga de avisos. Ya conectamos aplicaciones y montamos avisos. En el siguiente nivel aprenderemos a usar plantillas de automatización: recetas ya hechas que podemos copiar y adaptar en minutos.
