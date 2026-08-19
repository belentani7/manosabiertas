# Módulo 5: Automatización e Integración — Nivel 11
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender qué es una variable con metáforas del mundo físico.
- Reconocer los datos que cambian dentro de un flujo.
- Guardar y reutilizar un dato a lo largo de la automatización.
- Usar variables de texto y de número en una automatización.
- Armar un flujo que combine condiciones y variables.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Variable | Una "caja" con nombre donde se guarda un dato que cambia. |
| Valor | El dato que hay dentro de la caja en ese momento. |
| Nombre de variable | La etiqueta de la caja, para saber qué contiene. |
| Texto | Un valor hecho de letras, números y símbolos, como un nombre. |
| Número | Un valor que se puede sumar, restar o comparar. |
| Guardar | Dejar un valor en la variable para usarlo más adelante. |

## 📚 Lección principal
En el nivel anterior aprendimos la lógica si-entonces. Hoy añadimos otra pieza fundamental: las variables. La palabra suena técnica, pero las variables son algo que usamos toda la vida. Una variable es una caja con nombre que guarda un dato, y ese dato puede cambiar. Es así de simple.

Pensemos en la despensa de casa. La caja de azúcar tiene una etiqueta que dice "azúcar". Lo que hay dentro cambia: hoy está llena, mañana a media, pasado mañana vacía. Pero la etiqueta sigue siendo la misma. En las variables pasa igual: el nombre no cambia, el valor sí. La variable "azúcar" puede contener hoy 2 kilos y mañana 1.

En una automatización, los datos viajan por el flujo como los ingredientes por la cocina. Cuando llega una fila nueva de la hoja, trae datos: el nombre del socio, el importe, la fecha. Esos datos se pueden guardar en variables con nombres claros: "nombre", "importe", "fecha". A partir de ahí, el flujo puede usarlos en cualquier paso.

¿Por qué son tan útiles las variables? Porque permiten reutilizar. Sin variables, cada paso tendría que volver a buscar el dato. Con variables, guardamos el dato una vez y lo usamos en el correo, en el mensaje y en la condición. Es como apuntar el número de teléfono una vez en la agenda y llamar siempre desde ahí.

En las herramientas de integración, las variables aparecen casi solas. Cuando elegimos un campo de la hoja para ponerlo en un mensaje, estamos usando una variable, aunque la herramienta no use esa palabra. El nombre de la variable es el nombre de la columna: "Nombre", "Importe". La caja es la columna; el valor, lo que hay en esa fila.

Las variables pueden ser de distintos tipos, igual que en la despensa hay cajas de distintas cosas. Dos tipos nos importan mucho: el texto y el número. El texto son letras y palabras: un nombre, un mensaje, una dirección. El número son cantidades: importes, cantidades, temperaturas. Con los números se puede sumar; con el texto, no.

Esta diferencia es importante. Podemos hacer "el total es el precio más el envío" si ambos son números. No podemos sumar dos nombres. Saber el tipo de cada variable evita errores raros. Es como no echar sal en el café: cada cosa va con su tipo.

Las variables también permiten construir mensajes largos. En vez de escribir el mensaje entero a mano, lo armamos con piezas: "Hola [nombre], su pedido de [artículo] por [importe] euros está listo". Cada corchete es una variable que se rellena con el valor de cada fila. El mismo mensaje sirve para cien pedidos distintos.

La combinación de variables y condiciones es muy potente. La condición puede preguntar por el valor de una variable: "si el importe es mayor que 50". Y el resultado de la condición puede llevar a acciones que usan esa misma variable: "el correo dice: ha superado los 50 euros". La variable es la información; la condición, la pregunta; las acciones, la respuesta.

Un consejo de oficio: pon nombres claros a las variables. "Importe" es claro; "x" o "dato3" no lo es. Cuando revisemos la automatización dentro de un mes, agradeceremos leer "importe" y no descifrar "dato3". Los buenos nombres son el orden de la cocina digital.

Otro consejo: no guardes en variables datos que no vas a usar. Cada variable que añadimos es una pieza más a mantener. Guardamos lo necesario y poco más. Menos es más también en las variables.

Al terminar este nivel entenderás que las variables son las cajas que llevan los datos por el flujo, que tienen nombre y valor, y que pueden ser texto o número. Con condiciones y variables, la automatización ya puede leer, decidir y construir mensajes. En el nivel siguiente la haremos todavía más lista: le enseñaremos a pensar con inteligencia artificial.

## 💡 Ejemplos prácticos
1. **El mensaje de pedido.** El flujo guarda el nombre, el artículo y el importe de cada fila, y arma el mensaje: "Hola Marta, tu pedido de 3 kilos de tomates por 9 euros está listo".
2. **El aviso de gasto.** Si la variable "importe" es mayor que 50, el flujo envía el aviso de aprobación al tesorero con el valor incluido.
3. **La lista de cumpleaños.** El flujo guarda los nombres y las fechas de cumpleaños, y cada mes construye un mensaje con los que cumplen ese mes.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta de integración y crea un escenario nuevo llamado "Pedidos del club" (o tu tema).
Paso 2: Crea en Google Sheets una hoja con columnas: Nombre, Artículo, Importe. Rellena dos filas de prueba.
Paso 3: Añade el disparador: el evento "Observar filas" de Google Sheets con tu hoja.
Paso 4: Añade una acción de mensaje (Telegram). En el texto, escribe "Hola " y pulsa para insertar la variable "Nombre"; escribe " tu " y inserta "Artículo"; escribe " por " e inserta "Importe"; termina con " euros". Mira cómo se arma el texto.
Paso 5: Añade un paso de condición: si "Importe" es mayor que 50, entonces envía un aviso al tesorero (otra acción); si no, no hace nada extra.
Paso 6: En el aviso al tesorero, usa de nuevo las variables Nombre e Importe para que el mensaje diga "Aprobación: [nombre], [importe] euros".
Paso 7: Prueba el flujo con tus dos filas: una con importe menor de 50 y otra mayor. Observa que el primer mensaje llega siempre y el del tesorero solo cuando toca.
Paso 8: Escribe en tu papel una lista de las variables de tu flujo, con su nombre, su tipo (texto o número) y para qué sirven.
Paso 9: Activa el escenario y borra las filas de prueba.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es una variable? a) Una caja con nombre que guarda un dato que cambia. b) Un botón del teléfono. c) Un tipo de hoja de cálculo.
2. ¿Qué tiene toda variable? a) Solo un valor. b) Solo un nombre. c) Un nombre y un valor.
3. ¿Con qué tipo de variable se puede sumar? a) Con el texto. b) Con el número. c) Con ambos.
4. ¿Para qué sirven los buenos nombres de variable? a) Para que la automatización se vea bonita. b) Para saber qué contiene cada caja al revisarla. c) Para ahorrar espacio.
5. ¿Se puede usar la misma variable en varios pasos? a) No, una vez usado se borra. b) Sí, se guarda y se reutiliza. c) Solo dos veces.

Respuestas: 1-a, 2-c, 3-b, 4-b, 5-b.

## ⚖️ Dimensión ética
- Las variables pueden contener datos personales: trata el valor como tratarías el papel original, con respeto y cuidado.
- No pongas contraseñas, números de cuenta o datos médicos en variables que viajan a mensajes o correos.
- Nombra las variables de forma honesta: un nombre engañoso puede llevar a usar un dato con mal criterio.
- Si la variable viene de datos aportados por personas, verifica que sean ciertos antes de usarlos para decidir.
- Revisa de vez en cuando qué variables guardas: borra las que ya no usas y los datos que no necesitas.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Make (variables y módulos) | Guardar y reutilizar datos | make.com |
| Zapier (tokens de datos) | Insertar variables en las acciones | zapier.com |
| Google Sheets | Practicar con columnas como variables | sheets.google.com |
| LibreOffice Calc | Hojas de cálculo libres | libreoffice.org (gratuito) |

## 🧠 Resumen y puente
Las variables son cajas con nombre y valor que llevan los datos por el flujo. Pueden ser texto o número, se guardan una vez y se reutilizan en condiciones, mensajes y correos. Con condiciones y variables, la automatización lee y decide. En el siguiente nivel integraremos inteligencia artificial en los flujos: la máquina leerá, resumirá y generará textos.
