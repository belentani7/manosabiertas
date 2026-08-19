# Módulo 5: Automatización e Integración — Nivel 22
## Idioma: ES · Dificultad: Copa
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es el RPA: robots que repiten las tareas que hacemos en la pantalla.
- Reconocer cuándo una tarea manual se puede pasar a un robot.
- Conocer herramientas de RPA sencillas y gratuitas.
- Grabar una tarea repetitiva y dejarla en manos del robot.
- Conocer los límites y riesgos del RPA.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| RPA | Automatización Robótica de Procesos: robots que imitan clics y teclas. |
| Robot | Un programa que se mueve por la pantalla como nosotros. |
| Grabar | Enseñar al robot la tarea grabando nuestros clics y teclas. |
| Reproducir | Que el robot repita la tarea grabada. |
| Interfaz | La pantalla del programa donde hacemos clics. |
| Excepción | Un caso raro que el robot no sabe manejar y necesita a una persona. |

## 📚 Lección principal
Cerramos la banda Copa con una herramienta muy concreta y muy útil: el RPA. Las siglas significan "Automatización Robótica de Procesos". En palabras simples: un robot que imita lo que hacemos con las manos en la pantalla del ordenador: abrir una aplicación, escribir en una casilla, pulsar un botón, copiar un dato, guardar un archivo. Toda esa rutina que hacemos a mano, la puede hacer un robot.

Pensemos en cómo rellenábamos los formularios en papel antiguamente: coger el bolígrafo, escribir, pasar a la siguiente casilla. En la pantalla, rellenar formularios es igual: tocar una casilla, escribir, pasar a la siguiente. Es una tarea repetitiva con los dedos. El RPA la convierte en automática: el robot toca las mismas casillas, escribe las mismas letras y pulsa el mismo botón, a la misma velocidad y sin cansarse.

La gran diferencia del RPA con todo lo anterior es que no necesita que las aplicaciones estén conectadas. Las integraciones de los niveles anteriores (Make, Zapier) necesitan que las aplicaciones "hablen" entre sí. El RPA no: imita a una persona. Si nosotros podemos hacer la tarea con clics y teclas, el robot también puede. Es como la diferencia entre tener un camarero que entiende a todos los cocineros (integración) o un robot que copia los platos como se hacen (RPA).

El RPA brilla en tareas que son: repetitivas, iguales cada vez, lentas de hacer a mano y sin necesidad de decidir. Copiar datos de una hoja a otra, rellenar un formulario, renombrar muchos archivos, pasar números de una pantalla a otra, descargar informes y guardarlos en carpetas. Son tareas de "copiar y pegar" que el robot hace mil veces mejor que nosotros.

Las herramientas de RPA funcionan en dos tiempos. Primero, el robot nos mira hacer la tarea una vez: eso se llama grabar. Mientras nosotros hacemos clics y escribimos, el programa anota todo. Segundo, el robot reproduce la tarea: repite exactamente lo que grabamos, a su velocidad, cuando le digamos o a una hora fija. Grabar y reproducir, como el vídeo.

Empezar con el RPA es fácil porque hay herramientas gratuitas que graban tareas sin programar. En la pantalla se pulsa "grabar", se hace la tarea una vez, se pulsa "parar", y el robot ya tiene la receta. Luego se le da al botón de reproducir y el robot la ejecuta. Es como enseñar a alguien a hacer la tarea mostrándole una vez.

Pero el RPA tiene un punto débil importante: el robot hace exactamente lo que le enseñamos, y si la pantalla cambia, se pierde. Si el botón se ha movido, si la aplicación se actualizó o si la casilla tiene otro nombre, el robot falla. Por eso las tareas de RPA tienen que estar bien definidas y los robots se revisan cuando algo cambia. Es un robot rígido: bueno en lo suyo, torpe en los imprevistos.

Las excepciones son el gran límite del RPA. Cuando el caso no es el habitual, cuando el formulario tiene un campo raro o el dato no existe, el robot no sabe qué hacer. Lo correcto es que el robot se detenga y avise a una persona. Un buen robot no se inventa soluciones: para y llama. La persona decide el caso raro; el robot hace lo normal.

El RPA tampoco es para tareas que cambian o que exigen entender. Un robot no entiende, imita. Si la tarea requiere interpretar un texto, comprender una situación o tomar una decisión, mejor un agente con IA o una persona. Cada herramienta en su tarea: la integración para conectar, el RPA para imitar, la IA para pensar, la persona para decidir.

En el trabajo cotidiano, el RPA es una gran aliada de las personas mayores de la oficina: convierte horas de copiar y pegar en minutos de café. Pero conviene empezar con una tarea pequeña y que se haga a menudo, no con la tarea perfecta. Una tarea pequeña que funciona da confianza para abordar otras mayores.

Hay que tener cuidado con un peligro: dejar que un robot haga tareas delicadas sin vigilancia. Si el robot maneja datos de personas o dinero, necesita supervisión, avisos y revisión. Un robot que manda un correo con datos personales por error es un problema rápido. El RPA no elimina la responsabilidad: la traslada.

Al terminar este nivel, cierras la banda Copa. Sabes conectar aplicaciones, construir agentes con IA, automatizar procesos y ahora imitar tareas manuales con robots. En la banda Fruto, los últimos niveles del módulo, aprenderemos a diseñar sistemas grandes: la arquitectura de la automatización empresarial.

## 💡 Ejemplos prácticos
1. **El volcado de datos.** Todos los días, Luis copia los pedidos de la mañana desde la web del proveedor a la hoja de control. El robot de RPA lo hace solo a las tres.
2. **El renombrado de archivos.** Carmen descarga cincuenta facturas y las renombra con el número de pedido. El robot reproduce la tarea en un minuto.
3. **El informe del cierre.** El robot entra en la aplicación del banco, descarga el extracto del día, lo guarda en la carpeta y avisa a la encargada.

## 🛠️ Actividad guiada
Paso 1: Elige una tarea tuya en el ordenador que hagas a menudo y que sea siempre igual: copiar unos datos, renombrar archivos, rellenar un formulario.
Paso 2: Descarga una herramienta de RPA gratuita (por ejemplo, Power Automate Desktop de Microsoft, o una alternativa libre como tagUI).
Paso 3: Abre la herramienta y busca el botón de grabar o "Grabar acción".
Paso 4: Pulsa grabar y haz tu tarea una vez, despacio y en orden, sin pausas largas. No hagas nada raro: el robot copiará cada gesto.
Paso 5: Pulsa parar al terminar. La herramienta te mostrará la lista de pasos grabados.
Paso 6: Revisa la lista: ¿tiene sentido? ¿Hay pasos de más? Si hay un paso raro, bórralo o repite la grabación.
Paso 7: Pulsa reproducir y observa: el robot hará la tarea. Comprueba el resultado con tus propios ojos.
Paso 8: Si algo falla, mira en qué paso se detuvo y corrige. Repite hasta que funcione.
Paso 9: Escribe en tu papel la tarea automatizada, cada cuánto la usarías y qué harías si la pantalla cambia.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué significa RPA? a) Robots que imitan las tareas que hacemos en la pantalla. b) Reparación de aparatos. c) Una marca de café.
2. ¿Qué hace el robot de RPA? a) Imita clics y teclas como una persona. b) Conecta aplicaciones entre sí. c) Piensa como una persona.
3. ¿Cómo se enseña una tarea al robot? a) Explicándosela con palabras. b) Grabándola: hacer la tarea una vez mientras el robot anota. c) No se enseña.
4. ¿Qué pasa si la pantalla cambia? a) El robot se adapta solo. b) El robot puede fallar porque repite lo grabado. c) Nada, sigue igual.
5. ¿Qué hace el robot con un caso raro? a) Se lo inventa. b) Se detiene y avisa a una persona. c) Lo ignora.

Respuestas: 1-a, 2-a, 3-b, 4-b, 5-b.

## ⚖️ Dimensión ética
- No dejes que un robot maneje datos personales o dinero sin supervisión: los errores del robot son responsabilidad tuya.
- Avisa al equipo de que una tarea ahora la hace un robot: la transparencia evita confusiones.
- El RPA quita lo repetitivo, pero no elimina la persona: asegúrate de que nadie queda desatendido.
- Prueba siempre el robot con datos de prueba antes de las tareas reales.
- Si el robot se equivoca con datos de terceros, avisa y corrige de inmediato, sin ocultarlo.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Power Automate Desktop | RPA gratuito de Microsoft | powerautomate.microsoft.com |
| tagUI | RPA de código abierto | github.com/kelaberetiv |
| SikuliX | RPA por imagen, gratuito y libre | sikulix.com |
| OpenRPA | Plataforma de RPA abierta | openrpa.openrpa.dk |

## 🧠 Resumen y puente
El RPA enseña a un robot a imitar nuestras tareas de pantalla: se graba una vez y se reproduce siempre. Es ideal para tareas repetitivas, pero rígido ante los cambios, y las excepciones se dejan para las personas. Cerramos la banda Copa. En el siguiente nivel empezamos la Fruto: la arquitectura de la automatización empresarial, cómo se diseñan los sistemas grandes.
