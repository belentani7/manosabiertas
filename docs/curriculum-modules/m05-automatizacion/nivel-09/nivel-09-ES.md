# Módulo 5: Automatización e Integración — Nivel 09
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Repasar todo lo aprendido en la banda Raíz: conectar, avisar y adaptar plantillas.
- Montar una automatización completa que una varias piezas en una sola.
- Ordenar los pasos de una automatización como una receta.
- Revisar y depurar un escenario con varios pasos.
- Celebrar el primer proyecto integrado propio.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Proyecto integrado | Una automatización que une varias aplicaciones y pasos. |
| Depurar | Encontrar y corregir los fallos de la automatización. |
| Paso | Cada pieza del escenario: disparador, filtro, acción. |
| Cadena | El orden en que se encadenan los pasos. |
| Conector | La pieza que une la herramienta con cada aplicación. |
| Revisión final | La comprobación completa antes de dar por bueno el trabajo. |

## 📚 Lección principal
Hemos llegado al final de la banda Raíz. En estos cinco niveles hemos aprendido a crear una cuenta en una herramienta de integración, a conectar dos aplicaciones, a montar avisos automáticos y a usar plantillas. Hoy vamos a juntarlo todo en un solo proyecto completo, como quien cocina por primera vez un menú de tres platos entero.

Una automatización completa suele tener más de dos pasos. No solo "si pasa esto, entonces haz esto", sino una cadena: primero un disparador, luego quizá un filtro, luego una primera acción, luego una segunda. Cada paso es un eslabón, y todos juntos forman la cadena de la automatización.

Volvamos a la metáfora de la cocina. Un menú no es un solo plato: es entrante, principal y postre, servidos en orden. La automatización completa es igual: cada paso se apoya en el anterior y prepara el siguiente. Si el entrante no sale bien, todo el menú se retrasa. Por eso el orden importa tanto.

Imaginemos un proyecto real para una asociación: cuando llega un nuevo socio. Paso 1, el disparador: una fila nueva en la hoja de socios. Paso 2, un filtro: solo si la fila está completa (tiene nombre y correo). Paso 3, la acción: enviar el correo de bienvenida. Paso 4, otra acción: mandar el aviso al grupo de Telegram. Ese es un proyecto integrado de verdad.

La regla de oro de los proyectos: primero se construye, luego se prueba paso a paso, y solo al final se activa. Probar paso a paso es como probar la sal de cada plato mientras se cocina: si esperamos al final para probar, no sabremos qué plato salió mal. La herramienta permite probar cada paso por separado.

Cuando un paso falla, la depuración es simple: leemos el mensaje de error, miramos qué dice y corregimos. Los errores más comunes son tres: un campo vacío, una cuenta no conectada y un dato escrito con otro nombre. Con práctica, se ven al momento. Es como el fontanero que escucha la tubería y sabe dónde está el problema.

Otra costumbre valiosa: nombrar bien los pasos. La herramienta permite poner nombres a cada parte ("Recibir socio nuevo", "Comprobar datos", "Enviar bienvenida"). Un buen nombre nos dice qué hace cada pieza sin tener que abrirla. Es como etiquetar los tarros de la despensa: encontramos lo que buscamos al instante.

También conviene pensar en los imprevistos. ¿Qué pasa si llega una fila sin correo? ¿Y si la aplicación de mensajes está caída? Una buena automatización prevé esas situaciones: si el dato falta, se detiene el flujo y avisa. Aprenderemos más sobre control de errores en la banda Tallo, pero ya podemos dejarlo preparado.

Llega el momento de la revisión final. Antes de activar, repasamos la lista completa: ¿están todas las cuentas conectadas? ¿Los campos tienen los datos correctos? ¿Probamos cada paso? ¿Los nombres son claros? Esa lista de comprobación es la red de seguridad del oficio. La revisión final es lo que separa un trabajo bueno de uno descuidado.

Cuando todo está revisado, se activa y se prueba de verdad, con un dato real. Y ahí está la satisfacción: ver la cadena completa funcionando sola, del primer paso al último. Es el momento en que entendemos por qué este módulo se llama "Automatización e Integración".

Al terminar este nivel, cerramos la banda Raíz con un proyecto propio completo. Los próximos niveles serán más profundos: aprenderemos la lógica de las condiciones, las variables y el control de errores. Subiremos un escalón, pero ya no desde cero: desde la experiencia que hemos ganado.

## 💡 Ejemplos prácticos
1. **Alta de socios del club.** Una fila nueva con nombre y correo dispara el correo de bienvenida y, a la vez, un aviso al grupo de la directiva.
2. **La incidencia en el taller.** Cuando se registra una incidencia urgente, el flujo crea un documento, avisa al encargado y lo apunta en el calendario.
3. **La compra del mercado.** Una fila nueva en la hoja de compras dispara el aviso al grupo de la compra comunitaria con el artículo y el repartidor asignado.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta y crea un escenario nuevo. Ponle nombre: "Alta de socio" (o el tema que elijas).
Paso 2: Añade el disparador: en Google Sheets, el evento "Observar filas", con tu hoja de socios (crea una con columnas Nombre, Correo, Teléfono).
Paso 3: Añade un paso de filtro o condición: que solo continúe si el campo "Correo" no está vacío. Búscalo en los pasos como "Filtro" o "Router".
Paso 4: Añade la primera acción: un correo de bienvenida (busca "Gmail", elige "Enviar correo"). En el "Para", pon el dato de la fila; escribe un asunto y un texto cortos.
Paso 5: Añade la segunda acción: un mensaje a Telegram (busca "Telegram", elige "Enviar mensaje") con el nombre del socio.
Paso 6: Pon nombre a cada paso: "Recibir socio", "Comprobar correo", "Enviar bienvenida", "Avisar al grupo".
Paso 7: Prueba paso a paso con un dato de ejemplo (puedes crear una fila de prueba con nombre, correo y teléfono falsos).
Paso 8: Haz la revisión final: cuentas conectadas, campos correctos, pasos probados.
Paso 9: Activa el escenario, crea una fila real (un socio de prueba) y mira cómo se cumple toda la cadena. Borra después los datos de prueba.
Paso 10: Guarda el escenario y escribe en tu papel qué aprendiste: qué paso fue más difícil y qué error encontraste.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es un proyecto integrado? a) Una automatización que une varias aplicaciones y pasos. b) Un único botón. c) Una carpeta del ordenador.
2. ¿En qué orden se trabaja un proyecto? a) Activar, construir y probar. b) Construir, probar paso a paso y activar. c) Probar, borrar y olvidar.
3. Si un paso falla, ¿qué hago? a) Activar igualmente. b) Leer el mensaje de error y corregir el paso. c) Reiniciar el teléfono.
4. ¿Por qué se ponen nombres a los pasos? a) Porque la herramienta lo exige. b) Para saber qué hace cada pieza sin abrirla. c) Para que se vea bonito.
5. ¿Qué es la revisión final? a) La comprobación completa antes de activar. b) Un repaso al correo. c) Una lectura rápida.

Respuestas: 1-a, 2-b, 3-b, 4-b, 5-a.

## ⚖️ Dimensión ética
- Un proyecto integrado que toca datos de personas (socios, clientes, salud) exige cuidado: no copies datos sensibles sin necesidad.
- Si tu automatización envía correos o mensajes reales, que el contenido sea claro y honesto. Nadie merece un mensaje confuso o engañoso.
- Informa a las personas afectadas de que existe la automatización: la transparencia genera confianza.
- No dejes datos de prueba en hojas reales: borra las filas falsas para no ensuciar los datos de verdad.
- Un error detectado en la revisión es un éxito, no un fracaso: por eso se revisa antes de activar.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Make | Montar proyectos con varios pasos | make.com |
| Zapier | Proyectos con múltiples pasos y aplicaciones | zapier.com |
| Google Sheets | La hoja donde viven los datos | sheets.google.com (gratuito) |
| Gmail | Enviar correos desde el flujo | mail.google.com (gratuito) |
| Telegram | Recibir avisos y mensajes del flujo | telegram.org (gratuito) |

## 🧠 Resumen y puente
Un proyecto integrado une disparador, filtro y varias acciones en una cadena ordenada. Se construye, se prueba paso a paso y se revisa antes de activar. Cerramos la banda Raíz con tu primer proyecto completo funcionando. En el siguiente nivel empezamos la banda Tallo: la lógica de la automatización, las condiciones si-entonces y los caminos que elige el flujo según los datos.
