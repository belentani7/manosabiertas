# Módulo 5: Automatización e Integración — Nivel 13
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender que las automatizaciones pueden fallar y que eso es normal.
- Conocer los tipos de errores más comunes en un flujo.
- Aprender a leer un mensaje de error sin asustarse.
- Añadir pasos que avisen cuando algo falla.
- Montar un flujo que continúe o se detenga según el error.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Error | Un fallo: algo no ha salido como esperábamos. |
| Mensaje de error | El aviso que la herramienta muestra para explicar el fallo. |
| Probar de nuevo | Volver a ejecutar el paso que falló. |
| Excepción | El caso especial que no cumple lo habitual y hace fallar el flujo. |
| Registro | El historial donde quedan anotados los pasos y los errores. |
| Aviso de fallo | Una notificación que se envía cuando algo se rompe. |

## 📚 Lección principal
Hoy vamos a hablar de algo que nadie menciona al principio y que todos encuentran al primer día: los errores. Las automatizaciones fallan. Se equivocan, se rompen, se detienen. Y eso no es un problema nuestro: es parte de la vida de toda máquina. Lo importante no es que no falle, sino saber qué hacer cuando falla.

Pensemos en la cocina. Aunque sigamos la receta al pie de la letra, a veces el flan se corta, el horno se apaga o falta un ingrediente. Un buen cocinero no tira los platos: sabe por qué pasó y lo arregla. Con las automatizaciones es igual. El error es información, no un castigo.

La primera habilidad es leer el mensaje de error. Las herramientas de integración guardan un historial o registro de cada ejecución: quién disparó el flujo, qué pasos se hicieron y dónde se detuvo. Cuando algo falla, el mensaje de error suele decir la causa: "campo vacío", "aplicación no conectada", "dato incorrecto". Es como el diagnóstico del médico: para curar, primero hay que saber qué duele.

Los errores más comunes son pocos y se aprenden rápido. Uno: los campos vacíos, cuando llega un dato sin rellenar. Dos: las cuentas desconectadas, cuando la autorización expiró o se quitó. Tres: los datos con formato distinto, cuando esperábamos un número y llega un texto. Cuatro: los límites de uso, cuando el plan gratuito se agota.

Para cada error hay una solución. Si el campo está vacío, usamos una condición (nivel 10) para no continuar cuando falta el dato. Si la cuenta se desconectó, volvemos a conectar. Si el formato es distinto, revisamos la hoja o la aplicación de origen. Si se agotó el límite, esperamos al próximo mes o usamos menos el flujo.

Pero la verdadera maestría está en otra cosa: en que el flujo sepa avisar cuando falla. En lugar de fallar en silencio, nuestra automatización puede enviarnos un mensaje: "el paso de enviar correo ha fallado". Así, aunque se rompa, nosotros lo sabemos y lo arreglamos. Un fallo que avisa es un fallo a medias.

Las herramientas permiten añadir un paso especial, a veces llamado "control de errores" o "manejo de errores", que se ejecuta solo cuando algo falla. En ese paso podemos enviar el aviso, guardar el dato que falló o detener el flujo con calma. Es como tener un detector de humo: no apaga el fuego, pero avisa a tiempo.

También podemos decidir si un fallo detiene todo o se salta. A veces lo mejor es detener: si el pago no se procesa, que no continúe. Otras veces lo mejor es continuar: si el envío del mensaje falla, que el resto siga y luego revisemos. Cada flujo elige su actitud según la importancia de cada paso.

Conviene revisar el registro de vez en cuando, como quien mira las facturas del mes. El registro nos cuenta qué ha pasado en nuestra automatización: cuántas veces se ejecutó, cuándo falló y por qué. Leer el registro es la manera de cuidar la automatización, de mantenerla sana. Es la higiene del oficio.

Un error que se repite mucho es señal de que el flujo está mal diseñado o de que el origen de los datos ha cambiado. No lo tapemos con parches: miremos la causa y arreglémosla de raíz. Es como la gotera: se arregla el tejado, no se pone un cubo cada vez.

Cuando pruebas una automatización y falla, respira: es el mejor momento para aprender. Cada fallo que encuentras y entiendes te hace más dueño de tu sistema. El miedo a los errores desaparece cuando los conocemos. Y conocerlos es justamente lo que estamos haciendo hoy.

Al terminar este nivel sabrás leer un mensaje de error, saber qué hacer con los fallos típicos y montar avisos que te cuenten cuándo algo se rompe. Tu automatización ya no es frágil: está vigilada y cuidada.

## 💡 Ejemplos prácticos
1. **La cuenta desconectada.** El flujo del club dejó de funcionar porque Google expiró la autorización. El aviso de fallo llegó a la coordinadora, que volvió a conectar en un minuto.
2. **La fila vacía.** Llegó un socio sin correo. La condición del flujo (nivel 10) lo paró antes de enviar, y el registro guardó el caso para revisarlo a mano.
3. **El límite de IA.** El plan gratuito de la IA se agotó un mes. El flujo avisó y siguió trabajando con el resumen manual hasta el mes siguiente.

## 🛠️ Actividad guiada
Paso 1: Abre tu herramienta de integración y elige un escenario que ya tengas creado (por ejemplo, el de incidencias o el de resúmenes).
Paso 2: Entra en el registro o historial del escenario (suele ser la pestaña "Historial", "History" o "Ejecuciones"). Mira las últimas ejecuciones.
Paso 3: Busca una ejecución que haya fallado o haz fallar una a propósito: desconecta la cuenta de Telegram o deja un campo vacío en la hoja.
Paso 4: Lee el mensaje de error. Escríbelo en tu papel y apunta qué crees que significa. Comprueba con la guía de este nivel cuál es el error típico.
Paso 5: Corrige el error: vuelve a conectar la cuenta o completa el campo.
Paso 6: Añade el control de errores: busca en la configuración del escenario la opción "Control de errores", "Error handling" o "Manejo de errores".
Paso 7: Configura el aviso: cuando falle, envía un mensaje a Telegram con el texto "Ha fallado el escenario [nombre]: [mensaje de error]".
Paso 8: Prueba a fallar otra vez y comprueba que llega el aviso.
Paso 9: Activa el escenario y acostúmbrate a revisar el registro una vez por semana.

## ✍️ Ejercicios de autoevaluación
1. ¿Es normal que una automatización falle? a) No, si está bien hecha nunca falla. b) Sí, fallar es parte de la vida de toda máquina. c) Solo las baratas.
2. ¿Qué es lo primero que hacemos ante un error? a) Borrar el escenario. b) Leer el mensaje de error y mirar el registro. c) Comprar otro ordenador.
3. ¿Cuál es un error típico? a) Un campo vacío. b) Un cambio de letra. c) La hora del desayuno.
4. ¿Qué hace el control de errores? a) Evita que falle todo. b) Se ejecuta cuando algo falla, para avisar o detenerse con calma. c) Borra los errores del pasado.
5. ¿Para qué sirve revisar el registro? a) Para cuidar la automatización y saber qué pasó. b) Para llenar el tiempo. c) Para que se vea bonito.

Respuestas: 1-b, 2-b, 3-a, 4-b, 5-a.

## ⚖️ Dimensión ética
- Un fallo silencioso es peligroso: si una automatización que procesa datos de personas falla sin avisar, se pierde información. El aviso es responsabilidad.
- Si el flujo falla al tratar datos personales, avisa de inmediato y no lo ocultes: la transparencia protege a las personas.
- No uses el control de errores para "tapar" un diseño mal hecho: arregla la causa, no solo la alerta.
- Los avisos de fallo deben llegar a la persona adecuada, no al correo de todo el mundo.
- Ante un error que afecta a dinero o salud, para la automatización y revisa a mano antes de continuar.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Make (control de errores) | Avisar cuando falla un paso | make.com |
| Zapier (filtros y retry) | Configurar reintentos y continuaciones | zapier.com |
| UptimeRobot | Vigilar que tus automatizaciones web respondan | uptimerobot.com (gratuito) |
| Logseq o notas | Llevar un diario de errores y arreglos | logseq.com (gratuito) |

## 🧠 Resumen y puente
Los errores son parte del oficio: se leen, se entienden y se arreglan. El control de errores avisa cuando algo falla y el registro cuenta la historia del flujo. Tu automatización ya está vigilada. En el siguiente nivel cerramos la banda Tallo: montaremos una automatización completa que use condiciones, variables, IA y control de errores juntos.
