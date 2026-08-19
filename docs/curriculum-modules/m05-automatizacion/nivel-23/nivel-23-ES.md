# Módulo 5: Automatización e Integración — Nivel 23
## Idioma: ES · Dificultad: Fruto
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es la arquitectura de una automatización empresarial.
- Ver la organización como un conjunto de procesos conectados.
- Conocer las capas de un sistema: datos, procesos, presentación.
- Aprender a diseñar un sistema grande por partes pequeñas.
- Saber que un buen sistema se diseña antes de construirse.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Arquitectura | El plano general de cómo se organiza el sistema entero. |
| Capa | Una parte del sistema: los datos, la lógica, la pantalla. |
| Datos | La información que el sistema guarda y mueve. |
| Proceso | Cada cadena de pasos dentro del sistema. |
| Sistema | El conjunto de todas las piezas trabajando juntas. |
| Escalable | Que crece sin romperse cuando aumenta el trabajo. |

## 📚 Lección principal
Entramos en la banda Fruto, la última del módulo, donde veremos el conjunto completo. Hasta ahora hemos construido automatizaciones sueltas: un flujo aquí, un bot allá, un robot para otra tarea. En estos tres niveles vamos a aprender a verlo todo junto, como una casa entera y no como ladrillos sueltos. A eso se le llama arquitectura de automatización.

Pensemos en una casa. Una casa no es una pila de ladrillos: es una estructura pensada, donde cada habitación tiene su sitio, los cables pasan por los muros y el agua llega a todos los grifos. Si ponemos ladrillos sin plano, tenemos un montón, no una casa. La arquitectura de la automatización es el plano de la organización: cómo se ordenan las piezas para que todo funcione junto.

Una organización, sea una empresa, una asociación o una cooperativa, hace muchas cosas a la vez: atiende a las personas, gestiona dinero, guarda papeles, avisa, informa. Cada una de esas actividades es un proceso, y los procesos se tocan entre ellos: el alta de un socio genera un pago, que genera un recibo, que se guarda en la contabilidad. La arquitectura dibuja esas conexiones.

Para ordenar tanto trabajo, se usan capas. La capa de datos es el sótano: la hoja, la base, la memoria donde vive la información. La capa de procesos es el primer piso: las automatizaciones que mueven los datos y hacen las cosas. La capa de presentación es la fachada: las pantallas, los bots y los avisos que ven las personas. Separar capas es como separar la despensa de la cocina y de la mesa: cada cosa en su sitio, y ninguna estorba a otra.

La gran lección de la arquitectura es que un sistema grande no se construye de golpe: se diseña y se construye por partes. Primero se dibuja el plano entero, con sus capas y sus procesos. Luego se construye una pieza, se prueba, y se añade la siguiente. Es como la casa: se pone primero la estructura, luego se va amueblando habitación a habitación.

Una idea clave de la arquitectura es que los datos se guardan una sola vez y se usan en muchos sitios. Si la hoja de socios es una sola, todos los procesos leen de la misma fuente y todos dicen lo mismo. Si cada proceso tuviera su propia copia, pronto habría tres versiones de la verdad. La regla es: un dato, una casa, muchas puertas.

También se piensa en el futuro. Un buen sistema es escalable: puede crecer sin romperse. Si hoy la asociación tiene cien socios y mañana mil, el sistema debe aguantar. Para eso se diseñan procesos que no dependen de una persona, que se revisan solos y que tienen avisos de fallo. Escalable es que la casa admita más habitaciones sin tirar los muros.

Diseñar un sistema entero puede parecer cosa de especialistas, y en parte lo es. Pero lo que nos importa en este curso es el criterio: saber mirar la organización con ojos de arquitecto, preguntarse qué capas existen, cómo se conectan los procesos y dónde está el punto débil. Con ese criterio, hablamos con los especialistas de igual a igual y pedimos lo correcto.

Una buena arquitectura de automatización se apoya en tres pilares. Primero, la claridad: cada proceso se entiende, se documenta y tiene responsable. Segundo, la robustez: los fallos se avisan y no rompen todo el sistema. Tercero, la humanidad: las decisiones importantes y el trato con personas quedan en manos humanas. Un sistema sin esos pilares es un castillo de naipes.

Otro principio: no automatizar por automatizar. La arquitectura pregunta primero "¿qué problema resolvemos?" y solo después "¿con qué herramienta?". A veces la respuesta es no automatizar nada: el papel y la conversación son perfectos. El buen arquitecto dice no más veces que sí. Es la regla del valor llevada a toda la organización.

La documentación del sistema entero es el último toque: un plano general donde se ve todo, con los procesos, los responsables y las herramientas. Ese plano se actualiza cuando cambia algo. Es la memoria de la organización, la que permite que un voluntario nuevo entienda cómo funciona todo sin preguntar a cada rato.

Al terminar este nivel sabrás mirar una organización como un sistema: capas, procesos y conexiones, diseñado por partes y con pilares claros. En el siguiente nivel veremos la orquestación: cómo se coordinan varios agentes de IA para que trabajen juntos como un equipo.

## 💡 Ejemplos prácticos
1. **La asociación completa.** El plano de la asociación: una sola hoja de socios (datos), flujos para altas, pagos y avisos (procesos), y un bot que atiende a los vecinos (presentación).
2. **El pequeño negocio.** Los pedidos entran por la web, la facturación se automatiza, el inventario se actualiza solo y la contabilidad lee de la misma fuente.
3. **El taller comunitario.** Un sistema de inscripciones con capas separadas: los datos de los alumnos, el proceso de plazas y la pantalla donde la gente se apunta.

## 🛠️ Actividad guiada
Paso 1: Elige una organización que conozcas bien: tu asociación, tu negocio o tu comunidad.
Paso 2: En un papel, dibuja tres cajones apilados: abajo "Datos", en medio "Procesos", arriba "Presentación".
Paso 3: Escribe en el cajón de Datos todo lo que la organización guarda: socios, pagos, actas, inventario.
Paso 4: Escribe en el cajón de Procesos las cadenas que ya hemos construido en este módulo: altas, avisos, filtros, resúmenes.
Paso 5: Escribe en el cajón de Presentación lo que ven las personas: el bot, las notificaciones, los correos, el panel.
Paso 6: Dibuja flechas entre los cajones: qué proceso usa qué dato y qué pantalla muestra qué proceso.
Paso 7: Busca en tu dibujo el punto débil: ¿un dato guardado en dos sitios? ¿un proceso sin responsable?
Paso 8: Escribe en tu papel una mejora de arquitectura: qué conectarías, qué centralizarías o qué dejarías en papel.
Paso 9: Guarda el plano: lo usaremos en los dos próximos niveles.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es la arquitectura de la automatización? a) El plano general de cómo se organiza el sistema entero. b) Un dibujo de la fachada. c) Un tipo de ordenador.
2. ¿Cuáles son las capas de un sistema? a) Datos, procesos y presentación. b) Techo, paredes y suelo. c) No hay capas.
3. ¿Cómo se construye un sistema grande? a) De golpe, todo a la vez. b) Por partes, diseñando primero y construyendo después. c) Sin plano.
4. ¿Dónde se guarda un dato para que todos digan lo mismo? a) En cada proceso, por separado. b) Una sola vez, en una sola fuente. c) En papel.
5. ¿Qué significa que un sistema sea escalable? a) Que crece sin romperse. b) Que sube escaleras. c) Que es pequeño.

Respuestas: 1-a, 2-a, 3-b, 4-b, 5-a.

## ⚖️ Dimensión ética
- Una arquitectura debe ponerse al servicio de las personas, no al revés: primero se piensa en las personas y luego en los procesos.
- Centralizar datos facilita el trabajo, pero concentra el poder: protege esa información con contraseñas y permisos.
- Que el sistema no se convierta en un laberinto que nadie entiende: la claridad es también un derecho.
- La arquitectura no debe eliminar puestos, debe liberar tiempo: decide con el equipo, no a sus espaldas.
- Un sistema bien diseñado incluye siempre a las personas: quien lo usa debe poder opinar y corregirlo.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| draw.io | Dibujar el plano de la arquitectura | drawio.com (gratuito) |
| n8n | Construir los procesos del sistema | n8n.io (gratuito) |
| Nextcloud | Centralizar datos en casa u organización | nextcloud.com (gratuito) |
| Baserow | Base de datos abierta para la capa de datos | baserow.io (gratuito) |

## 🧠 Resumen y puente
La arquitectura es el plano general: capas de datos, procesos y presentación, diseñadas por partes, con los datos una sola vez y con pilares de claridad, robustez y humanidad. Ya miras la organización con ojos de arquitecto. En el siguiente nivel veremos la orquestación de agentes: coordinar varios agentes de IA para que trabajen en equipo.
