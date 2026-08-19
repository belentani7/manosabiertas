# Módulo 5: Automatización e Integración — Nivel 06
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Construir una primera automatización real entre dos aplicaciones.
- Conectar tu cuenta de una aplicación a la herramienta de integración.
- Elegir un disparador y una acción de verdad.
- Probar la automatización con un dato real.
- Entender qué es "probar" en automatización y por qué se hace.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Conectar una cuenta | Autorizar a la herramienta a usar una aplicación tuya. |
| Autorización | El permiso que das para que dos programas se hablen. |
| Probar | Hacer una prueba real para ver si la automatización funciona. |
| Escenario | La automatización completa: disparador, pasos y acción. |
| Conector | La pieza que une la herramienta con una aplicación. |
| Datos | La información que viaja: un nombre, una fecha, un mensaje. |

## 📚 Lección principal
En el nivel anterior creamos nuestra cuenta y entendimos las dos piezas de toda automatización: el disparador y la acción. Hoy vamos a construir nuestra primera automatización real, de principio a fin. Vamos a unir dos aplicaciones y verlas trabajar juntas. Es un momento bonito, como ver la primera planta que sembramos.

Elegiremos un ejemplo sencillo y útil: una hoja de cálculo donde apuntamos algo (por ejemplo, la lista de compras del club) y, cada vez que añadimos una fila, la herramienta envía un mensaje a otra aplicación (por ejemplo, el grupo de mensajes de la asociación). Eso es conectar dos aplicaciones: la hoja y los mensajes.

El primer paso es elegir las dos aplicaciones. Una será el disparador, la que "despierta" la automatización; la otra será la acción, la que hace algo. En nuestro ejemplo: la hoja de cálculo dispara y el mensaje actúa. No hay reglas fijas: cualquiera de las dos puede ser cualquiera de las partes.

Antes de empezar, necesitamos que la herramienta "conozca" nuestras aplicaciones. Eso se llama conectar una cuenta o autorizar. Es como darle la llave de una habitación concreta al camarero: solo de esa habitación, no de toda la casa. Se hace pulsando "Conectar cuenta" e iniciando sesión en la aplicación cuando nos lo pida.

Es normal sentir un poco de reparo al dar permisos. Tranquilidad: en estas herramientas se puede quitar la conexión cuando queramos, desde los ajustes. Y podemos revisar qué permisos hemos dado. Dar permiso no es dar poder para siempre; es abrir una puerta que podemos cerrar.

Una vez conectadas las cuentas, elegimos el disparador. La herramienta nos muestra una lista de eventos de cada aplicación. Buscamos el nuestro: "nueva fila", "nuevo mensaje", "nuevo correo". Pulsamos y la herramienta nos pide que confirmemos con cuál de nuestras cuentas y en qué hoja o carpeta trabajar.

Después viene la acción. Elegimos la segunda aplicación y el evento: "enviar mensaje", "enviar correo", "crear archivo". La herramienta nos muestra los campos que podemos rellenar y, lo más maravilloso, nos ofrece poner datos que vienen del disparador. Así, el mensaje puede decir "Nueva compra: [nombre de la fila]" sin que nosotros escribamos nada.

Esa posibilidad de "tomar datos de un lado y ponerlos en el otro" es lo que hace mágica a la integración. La herramienta nos deja elegir, con un clic, el dato que viene de la hoja y ponerlo dentro del mensaje. Es como el camarero que trae la nota del cocinero y la copia en la cuenta del cliente.

Antes de activar, se prueba. Probar es hacer una simulación: la herramienta ejecuta el flujo con datos de ejemplo y nos muestra qué ha salido. Si algo falla, lo vemos y lo corregimos sin molestar a nadie. Probar es gratis y evita errores reales. Nadie envía un mensaje al grupo sin probarlo antes.

Cuando la prueba sale bien, se activa la automatización. A partir de ahí, cuando añadamos una fila nueva a la hoja, el mensaje se enviará solo. Sin pulsar nada. Es una emoción verlo por primera vez: la máquina trabaja mientras nosotros miramos.

Conviene dejar claro que las automatizaciones de estas herramientas revisan los cambios con cierta frecuencia: no es instantáneo como el rayo, sino como el correo, que llega en minutos. Si la prueba tarda un poco en aparecer, es normal. La paciencia es parte del oficio.

Si algo sale mal, no hay drama. El error suele estar en los permisos, en los campos vacíos o en un dato escrito distinto. La herramienta nos dice dónde está el problema y lo arreglamos. Cada error que corregimos nos enseña una lección que no olvidamos.

Al terminar este nivel tendrás tu primera automatización funcionando: dos aplicaciones unidas, trabajando juntas. Es la base de todo lo que viene. Si hoy has conectado una hoja con un mensaje, mañana conectarás cosas mayores.

## 💡 Ejemplos prácticos
1. **La lista del club.** Cada compra nueva que se apunta en la hoja del club envía un mensaje al grupo de la asociación con el importe y el artículo.
2. **El formulario de contacto.** Cuando alguien rellena el formulario de la asociación en internet, sus datos se guardan solos en la hoja y se avisa a la coordinadora.
3. **El aviso de pago.** Cuando el tesorero marca una cuota como pagada en la hoja, el socio recibe automáticamente un correo de agradecimiento.

## 🛠️ Actividad guiada
Paso 1: Abre Make (o Zapier) en el navegador y entra en tu cuenta.
Paso 2: Pulsa el botón "Crear escenario" (Make) o "Create from scratch" (Zapier).
Paso 3: Añade el disparador: busca la aplicación "Google Sheets" y elige el evento "Observar filas" o "New spreadsheet row".
Paso 4: Pulsa "Conectar" y autoriza tu cuenta de Google: aparecerá la ventana de Google, pulsa "Permitir" o "Continuar".
Paso 5: Elige la hoja de cálculo y la pestaña que usarás (puedes crear una hoja de prueba con una fila: nombre, artículo, importe).
Paso 6: Añade la acción: busca la aplicación de mensajes que tengas (por ejemplo, "Telegram" o "WhatsApp Business") y elige "Enviar mensaje".
Paso 7: En el campo del mensaje, escribe algo como "Nueva compra:" y pulsa para añadir el dato de la hoja (el nombre de la fila). La herramienta lo insertará.
Paso 8: Pulsa "Probar" o "Run". Mira el resultado: debería aparecer un mensaje con tus datos de prueba.
Paso 9: Si sale bien, activa el escenario con el interruptor. Añade una fila nueva a la hoja y espera: el mensaje llegará solo. Si algo falla, lee el aviso de error y corrige los campos.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es conectar una cuenta? a) Dar permiso a la herramienta para usar una aplicación tuya. b) Comprar otra cuenta. c) Borrar la aplicación.
2. ¿Cuál es el orden del flujo? a) Acción y luego disparador. b) Disparador y luego acción. c) No importa.
3. ¿Por qué se prueba antes de activar? a) Porque es obligatorio por ley. b) Para ver si funciona sin molestar a nadie. c) Para gastar datos.
4. ¿Una automatización envía el mensaje al instante? a) Sí, siempre. b) No, puede tardar unos minutos, como el correo. c) Solo por la noche.
5. Si una automatización falla, ¿qué hago? a) Tiro el ordenador. b) Leo el aviso de error, corrijo los campos y pruebo otra vez. c) La ignoro.

Respuestas: 1-a, 2-b, 3-b, 4-b, 5-b.

## ⚖️ Dimensión ética
- Revisa siempre qué permisos das y a qué cuentas. Quita el acceso cuando dejes de usar una automatización.
- No conectes cuentas que guardan datos personales de otras personas (salud, dinero) sin un motivo claro.
- Si tu automatización envía mensajes a un grupo, avisa antes al grupo y comprueba el contenido.
- No pruebes automatizaciones que envíen correos o mensajes reales a desconocidos: usa direcciones o chats de prueba.
- Las automatizaciones que tú creas son tuyas: sé responsable de lo que hacen y de los datos que mueven.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Google Sheets | La hoja de cálculo donde pondrás tus datos | sheets.google.com (gratuito) |
| Make | Crear y probar tus escenarios | make.com |
| Zapier | Alternativa con muchas plantillas | zapier.com |
| Telegram | Aplicación de mensajes para recibir avisos | telegram.org (gratuito) |

## 🧠 Resumen y puente
Hemos construido nuestra primera automatización real: un disparador en una hoja que desencadena una acción en otra aplicación. Conectamos cuentas, elegimos eventos, probamos y activamos. Ese es el método que usaremos siempre. En el siguiente nivel aprenderemos a crear notificaciones automáticas, avisos que llegan solos cuando algo importante sucede.
