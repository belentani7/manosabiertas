# Módulo 5: Automatización e Integración — Nivel 10
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender a fondo la lógica si-entonces que mueve toda automatización.
- Reconocer las condiciones como "caminos" que elige el flujo.
- Crear un filtro o condición en tu herramienta de integración.
- Comprender qué significa "si no" (la rama alternativa).
- Aplicar la lógica a una tarea real con varias posibilidades.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Condición | La pregunta que el flujo se hace: "¿se cumple esto?". |
| Si-entonces | La estructura lógica: "si se cumple la condición, entonces haz esto". |
| Si no | La alternativa: "si no se cumple, haz esto otro". |
| Rama | Cada camino que toma el flujo según la condición. |
| Verdadero/Falso | La respuesta a la condición: se cumple o no se cumple. |
| Operador | La palabra que compara: "mayor que", "igual a", "contiene". |

## 📚 Lección principal
Hoy subimos al primer nivel de la banda Tallo, donde la automatización se vuelve más inteligente. Hasta ahora los flujos hacían siempre lo mismo: si llegaba un dato, actuaban. Pero la vida real no es tan simple: a veces hay que decidir. La lógica si-entonces es justamente la forma de enseñar a la máquina a decidir.

Imaginemos la cocina cuando cocinamos para la familia. Si los niños vienen a comer, hacemos más cantidad; si no, menos. Si hace frío, sopa; si no, ensalada. Nuestra cabeza hace esas decisiones sin pensarlo. En la automatización, esas decisiones se escriben como condiciones: "si pasa esto, haz lo uno; si no, haz lo otro".

La estructura es muy sencilla y se puede escribir así: "SI se cumple la condición, ENTONCES hacer A; SI NO, hacer B". Es como una encrucijada en el camino: según lo que vemos, giramos a la derecha o a la izquierda. El flujo llega a la encrucijada, se hace la pregunta, y toma un camino u otro.

En las herramientas de integración, esa encrucijada se llama filtro, condición o router. El flujo se pregunta algo sobre los datos que lleva: "¿el correo está vacío?", "¿el importe es mayor que 100?", "¿el mensaje contiene la palabra urgente?". La respuesta es siempre verdadero o falso: sí o no. No hay términos medios.

Cada respuesta abre una rama. Si es verdadero, el flujo va por un camino y hace unas acciones. Si es falso, va por el otro. Es como el riego del huerto: si llueve, no regamos; si no llueve, regamos. La condición "¿ha llovido?" decide entre dos caminos.

Para escribir condiciones usamos los operadores, que son las palabras que comparan. "Mayor que" compara números: si el importe es mayor que cien. "Igual a" compara textos o números: si el estado es igual a "pagado". "Contiene" busca palabras dentro de un texto: si el mensaje contiene "urgente". Cada operador es una herramienta de comparación.

Aprender a leer una condición es como aprender a leer una señal de tráfico. La señal dice "prohibido pasar si pesas más de 3 toneladas". Eso es una condición con un operador. Nuestra automatización hace lo mismo con los datos: pone señales que los datos tienen que respetar para pasar.

Un ejemplo real: la hoja de incidencias del barrio. Si la incidencia dice "urgente", el flujo avisa al encargado de inmediato. Si no, la guarda para la reunión semanal. Una sola condición divide el flujo en dos caminos con dos destinos distintos. Esa es la inteligencia que le añadimos a la máquina.

Las condiciones se pueden encadenar. Después de una primera pregunta, puede venir una segunda: "¿es urgente? Si sí, ¿es de este barrio o de otro?". Encadenar condiciones permite afinar mucho, como el médico que hace preguntas hasta llegar al diagnóstico. Cada pregunta descarta caminos.

Hay que tener cuidado con un error típico: escribir condiciones demasiado complicadas. Una condición que junta muchas preguntas a la vez es difícil de revisar y de corregir. Mejor varias condiciones simples encadenadas que una sola complicada. Es como partir una tarea larga en pasos cortos: se entiende y se arregla mejor.

Otra costumbre buena: que el flujo nunca se quede sin respuesta. Si ninguna condición se cumple, ¿qué hace? Conviene tener una rama de "si no" que recoja lo que no encaja. Es como el cajón de "cosas varias" de casa: todo lo que no tiene sitio propio, va ahí, y nunca se pierde.

Al terminar este nivel sabrás leer y escribir condiciones, y entenderás que la automatización no solo repite: decide. Ese es el salto de la banda Tallo. En el nivel siguiente aprenderemos las variables: los datos que cambian y que la máquina puede guardar, comparar y usar.

## 💡 Ejemplos prácticos
1. **Las incidencias del barrio.** Si la incidencia lleva la etiqueta "urgente", el flujo avisa al encargado al momento; si no, la deja para el informe semanal.
2. **El presupuesto del club.** Si el gasto de una compra supera los 50 euros, el flujo avisa al tesorero para que lo apruebe; si no, lo registra solo.
3. **La reserva de la sala.** Si la sala está libre, el flujo confirma la reserva; si no, envía un mensaje con las horas alternativas disponibles.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta de integración y crea un escenario nuevo con el nombre "Incidencias del barrio" (o el tema que prefieras).
Paso 2: Añade el disparador: en Google Sheets, el evento "Observar filas", con una hoja que tenga las columnas: Descripción, Prioridad (urgente/normal), Persona.
Paso 3: Añade un paso de condición: busca "Filtro" o "Router". La condición será: la columna "Prioridad" es igual a "urgente".
Paso 4: En la rama verdadero (si es urgente): añade la acción de enviar un mensaje a Telegram con el texto "URGENTE: [descripción]".
Paso 5: En la rama falso (si no es urgente): añade una acción que envíe un correo a tu dirección con el texto "Nueva incidencia normal: [descripción]".
Paso 6: Pon nombres a las ramas: "Camino urgente" y "Camino normal".
Paso 7: Prueba con dos filas: una con prioridad "urgente" y otra con "normal". Comprueba que cada una toma su camino.
Paso 8: Añade una tercera condición si quieres: por ejemplo, que las incidencias vacías no hagan nada (si la descripción está vacía, detener).
Paso 9: Revisa, activa y borra las filas de prueba.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué estructura tiene la lógica si-entonces? a) "Si se cumple, entonces haz A; si no, haz B". b) "Haz siempre lo mismo". c) "Pregunta a otra persona".
2. ¿Cuál es la respuesta a una condición? a) Verdadero o falso. b) Depende del día. c) Número o letra.
3. ¿Qué es una rama? a) Un árbol. b) Cada camino que toma el flujo según la condición. c) Un botón de color.
4. ¿Qué hace el operador "contiene"? a) Compara tamaños. b) Busca una palabra dentro de un texto. c) Borra datos.
5. ¿Qué conviene hacer con lo que no encaja en ninguna condición? a) Dejarlo fuera y perderlo. b) Recogerlo en la rama "si no". c) Borrar la condición.

Respuestas: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Dimensión ética
- Una condición mal escrita puede discriminar sin querer: revisa que tus reglas no excluyan a personas por error.
- Las decisiones automáticas sobre personas (aprobaciones, altas) deben poder revisarse por un humano.
- No uses condiciones para ocultar información a quien tiene derecho a verla.
- Si el flujo decide por ti, asegúrate de que las reglas son tuyas y las entiendes.
- Un "si no" bien diseñado evita que la gente se quede sin respuesta: haz que nadie quede fuera.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Make (módulo Router) | Crear ramas y condiciones | make.com |
| Zapier (Filtros) | Condiciones dentro de los zaps | zapier.com |
| Google Sheets (IF) | Practicar si-entonces en una hoja | sheets.google.com |
| Node-RED | Lógica visual de código abierto | nodered.org (gratuito) |

## 🧠 Resumen y puente
La lógica si-entonces enseña a la máquina a decidir: si se cumple una condición, va por un camino; si no, por otro. Usamos operadores para comparar datos y ramas para separar los caminos. Ya no solo repetimos: decidimos. En el siguiente nivel aprenderemos las variables, los datos que cambian y que el flujo guarda, compara y reutiliza.
