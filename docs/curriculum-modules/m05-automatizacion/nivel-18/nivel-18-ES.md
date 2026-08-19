# Módulo 5: Automatización e Integración — Nivel 18
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es Home Assistant y por qué es diferente de las apps de las marcas.
- Conocer el concepto de "casa inteligente sin depender de la nube".
- Aprender qué es un servidor y cómo Home Assistant puede vivir en un aparato pequeño.
- Descubrir alternativas abiertas y gratuitas a los asistentes comerciales.
- Decidir si Home Assistant es para ti o si te quedas con lo sencillo.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Home Assistant | Un programa libre que reúne todos los aparatos de casa bajo un solo control. |
| Nube | Los ordenadores de las empresas donde se guardan los datos. |
| Servidor | Un ordenador que trabaja siempre para ofrecer un servicio. |
| Local | Dentro de tu propia casa, sin salir a internet. |
| Integración | La forma de unir un aparato con Home Assistant. |
| Panel | La pantalla donde se ve y se controla toda la casa. |

## 📚 Lección principal
En el nivel anterior conectamos nuestros primeros aparatos inteligentes. Cada marca trae su propia aplicación, y eso tiene un problema: si tenemos una bombilla de una marca y un enchufe de otra, necesitamos dos aplicaciones, dos cuentas y dos formas de pensar. Home Assistant es la respuesta: un programa que reúne todos los aparatos de casa bajo un solo techo, sin depender de ninguna marca.

Pensemos en la cocina. Si cada electrodoméstico tuviera su propio mando a distancia con su propia forma de usarse, cocinaría un caos. Preferimos una cocina organizada donde cada cosa tiene su sitio. Home Assistant es ese orden: un único panel desde donde se ven y se controlan todos los aparatos de la casa.

La gran diferencia con las aplicaciones de las marcas es dónde viven los datos. Las aplicaciones mandan nuestros datos a la nube, a los ordenadores de la empresa. Home Assistant funciona en local: todo vive en un pequeño ordenador de casa. Los datos no salen de casa, la casa funciona aunque falle internet, y nadie más los ve. Es como tener la despensa en casa y no en un almacén ajeno.

¿Qué aparato necesitamos para Home Assistant? Un pequeño ordenador que funcione siempre. Puede ser un aparato comprado a propósito (hay cajas pensadas para ello) o un ordenador viejo que ya no usemos. Se instala el programa una vez y se deja trabajando, como un horno que vigila todo. No hace falta saber programar para empezar: el programa guía por pantalla.

Una vez instalado, Home Assistant va "descubriendo" los aparatos de casa. Se le añaden integraciones: cada integración es la forma de hablar con una marca o un aparato. En el panel, añadimos la integración de nuestra bombilla, la de nuestro enchufe, la de nuestro sensor. Poco a poco, todo aparece en una sola pantalla.

La verdadera potencia llega con las automatizaciones de Home Assistant. Son las mismas reglas si-entonces de siempre, pero sin límites de marca: podemos decir "si el sensor de movimiento se activa a partir de las nueve de la noche, entonces enciende la luz del pasillo". La condición puede mirar cualquier aparato y la acción puede tocar cualquier otro. La casa entera se convierte en un solo flujo.

Además, Home Assistant se integra con los asistentes de voz. Podemos seguir diciendo "OK Google, apaga la luz" y que ese comando llegue a nuestro Home Assistant. O podemos usar asistentes libres, sin las empresas grandes. La casa puede hablar nuestro idioma, incluso con voz propia en español.

Home Assistant no es para todo el mundo, y eso está bien. Si tienes un solo aparato o prefieres lo sencillo, la aplicación de la marca y el asistente bastan. Home Assistant brilla cuando hay varios aparatos, de varias marcas, y queremos control total y privacidad. Es como elegir entre el mando de la tele o un mando universal: según cuántos aparatos tengas.

La curva de aprendizaje es un poco más alta que la de las aplicaciones de las marcas. No es difícil, pero pide paciencia y ganas de explorar. Por eso se recomienda empezar con un aparato conocido y una automatización simple, e ir creciendo. No hay prisa: la casa seguirá ahí mañana.

Un punto a favor de lo abierto: no depende de una empresa. Si una marca cierra o cambia su servicio, Home Assistant sigue funcionando con lo nuestro. Y si un aparato deja de tener soporte, la comunidad suele encontrar otra forma de integrarlo. Es como sembrar en tu propio huerto: no dependes de la tienda del barrio.

La comunidad de Home Assistant es enorme y amable: foros, guías en español y videos que explican cada paso. Cuando algo se atasca, siempre hay alguien que ya lo resolvió. Aprender con otros es más fácil que aprender solo. Ese espíritu de compartir es parte de este curso.

Al terminar este nivel entenderás qué es Home Assistant, en qué se diferencia de las aplicaciones de las marcas y si te conviene. En el nivel siguiente pasaremos de la casa a los mensajes: crearemos bots de chat sencillos que responden solos.

## 💡 Ejemplos prácticos
1. **La casa de varias marcas.** Rosa tenía luces de una marca y enchufes de otra. Con Home Assistant los controla todos desde una sola pantalla, sin cuentas separadas.
2. **La automatización de la noche.** "Si son las diez y el sensor no detecta movimiento en el pasillo, apaga las luces de toda la casa". Una regla, toda la casa.
3. **El corte de internet.** A Jorge se le fue internet y las aplicaciones de las marcas dejaron de funcionar. Su Home Assistant siguió encendiendo las luces: funciona en local.

## 🛠️ Actividad guiada
Paso 1: Infórmate sobre los aparatos donde vive Home Assistant: busca en internet "Home Assistant Green" o "Home Assistant en Raspberry Pi" y lee qué es.
Paso 2: Decide si ya tienes un ordenador viejo o si prefieres una caja lista para usar. No compres todavía: solo investiga.
Paso 3: Visita la página home-assistant.io y mira los videos de introducción que encuentres en español. Anota dos ideas que te llamen la atención.
Paso 4: Revisa la lista de integraciones de tu aparato actual (si tienes uno): busca el nombre de tu marca en la web de integraciones de Home Assistant y comprueba que existe.
Paso 5: Escribe en tu papel una automatización que harías con Home Assistant y que no puedas hacer con tu aplicación actual.
Paso 6: Busca en internet un foro o grupo en español de Home Assistant y lee un hilo de principiantes.
Paso 7: Decide y anota: ¿Home Assistant es para ti ahora, más adelante, o prefieres quedarte con lo sencillo? No hay respuesta equivocada.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es Home Assistant? a) Un programa libre que reúne los aparatos de casa bajo un solo control. b) Una marca de bombillas. c) Un electricista.
2. ¿Dónde funcionan los datos de Home Assistant? a) En la nube de una empresa. b) En local, en un pequeño ordenador de casa. c) En el móvil de la vecina.
3. ¿Qué se necesita para instalar Home Assistant? a) Un ordenador pequeño que funcione siempre. b) Una televisión. c) Internet de fibra obligatorio.
4. ¿Se puede usar con asistentes de voz? a) No, nunca. b) Sí, con los comerciales y también con asistentes libres. c) Solo en inglés.
5. ¿Home Assistant es para todo el mundo? a) Sí, siempre. b) No, según cuántos aparatos tengas y tus ganas de explorar. c) Solo para técnicos titulados.

Respuestas: 1-a, 2-b, 3-a, 4-b, 5-b.

## ⚖️ Dimensión ética
- Tener los datos en casa es más privado, pero también es tu responsabilidad protegerlos: pon contraseñas fuertes y actualiza el sistema.
- Home Assistant recopila información de tu día a día: decide tú quién ve esa información y quién no.
- Si tu casa automática gestiona puertas o alarmas, haz copias de seguridad y revisa el sistema: la seguridad física depende de ello.
- Comparte lo que aprendas con la comunidad, pero no subas datos personales ni fotos de tu casa a los foros.
- La tecnología libre no significa libre de cuidado: sigues siendo responsable de lo que construyes.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Home Assistant | Reunir y automatizar toda la casa | home-assistant.io (libre) |
| Home Assistant Green | Una caja lista para empezar | home-assistant.io |
| Raspberry Pi | Un ordenador pequeño para el servidor | raspberrypi.com |
| OpenHAB | Otra plataforma abierta de domótica | openhab.org (libre) |

## 🧠 Resumen y puente
Home Assistant reúne todos los aparatos bajo un solo panel, funciona en local con privacidad y sin depender de una empresa, y automatiza con reglas que cruzan marcas. No es para todo el mundo, pero es una opción libre y potente. En el siguiente nivel cambiaremos de casa a mensajes: los bots de chat que responden solos.
