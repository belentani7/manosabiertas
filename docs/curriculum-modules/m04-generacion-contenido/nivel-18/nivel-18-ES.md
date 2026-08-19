# Módulo 4: Generación de Contenido — Nivel 18
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 4 horas

## 🎯 Objetivo del nivel
- Entender qué es la locución: dar voz a un texto.
- Conocer el doblaje: poner una voz nueva a un vídeo existente.
- Usar la IA para generar voces con diferentes tonos y estilos.
- Aplicar una voz generada a un vídeo propio.
- Sincronizar la voz con las imágenes y el texto.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Locución | La voz que lee un texto para un vídeo o presentación. |
| Doblaje | Sustituir la voz de un vídeo por otra voz. |
| Tono | El carácter de la voz: serio, alegre, cálido, firme. |
| Sincronización | Que la voz coincida con los labios, la imagen o el texto. |
| Entonación | La música de la voz: subir y bajar para expresar. |
| Voz sintética | La voz generada por el ordenador, como la de Piper. |

## 📚 Lección principal
La voz es el alma del audiovisual. Un mismo texto leído con voz seria o con voz alegre dice cosas distintas. La locución es ese arte de dar voz a un texto, y hoy la IA nos permite generar voces variadas, en varios idiomas y con distintos tonos, sin estudios de grabación. Es como tener un equipo de locutores a mano.

La locución se usa en muchas cosas de la vida: vídeos de recetas, presentaciones del club, mensajes de felicitación, cuentos para los nietos. Antes había que grabar con un micrófono, repetir si te equivocabas y cuidar el ruido de fondo. Con la voz sintética de Piper podemos generar la locución en segundos y repetirla tantas veces como queramos.

Los tonos de voz importan. Piper ofrece voces distintas y podemos elegir el tono con las palabras del guion: frases cortas dan energía; frases largas y suaves dan calma. La entonación, el subir y bajar de la voz, es la música que da vida a las palabras. La IA propone la voz; nosotros elegimos el sentimiento.

El doblaje es un paso más: poner una voz nueva a un vídeo que ya existe. Podemos doblar un vídeo casero al otro idioma para que la familia que vive fuera lo entienda, o dar voz a una presentación sin sonido. Con las herramientas que conocemos (extract audio, generar nueva voz, unir de nuevo) el doblaje está a nuestro alcance.

El proceso de doblaje es sencillo si lo dividimos en pasos. Primero, sacamos el audio del vídeo original. Segundo, lo transcribimos con Whisper para tener el texto (nivel 11). Tercero, corregimos el texto y lo traducimos si hace falta. Cuarto, generamos la nueva voz con Piper. Quinto, unimos la nueva voz con el vídeo usando FFmpeg (nivel 17). Cinco pasos, y el vídeo habla en otra voz o en otro idioma.

La sincronización es el reto del doblaje. Idealmente la voz nueva debe encajar con el movimiento de los labios o con el ritmo del vídeo. No siempre es perfecto, pero con la práctica ajustamos la duración. Para vídeos sin personas hablando (paisajes, recetas, presentaciones) la sincronización es más fácil y el resultado es muy bueno.

El doblaje también es una herramienta de acceso. Un vídeo del ayuntamiento o del club puede doblarse a otros idiomas para que lo entiendan más personas. Dar voz en el idioma de quien escucha es un gesto de respeto y de inclusión. La tecnología nos ayuda a tender puentes.

La ética del doblaje es especialmente importante. Doblar un vídeo ajeno y hacerlo pasar por original es engaño. Doblar un vídeo de una persona real con una voz que dice cosas que no dijo es manipulación. La IA da poder: usémoslo para crear, no para suplantar. Antes de doblar, preguntamos: ¿quién es el autor, quién aparece, tengo permiso?

Los vídeos de nuestra vida, los del club y los proyectos propios son territorio seguro para el doblaje. A partir de ahí, cuidado y permiso. La regla es la misma de siempre: no hagas a los demás lo que no quieras que te hagan.

La práctica hace al maestro. Empezaremos doblando vídeos sencillos y cortos: un saludo, una receta, un anuncio del club. Con cada doblaje aprendemos a ajustar el tono, la velocidad y la sincronización. La primera vez cuesta; la décima sale rodada.

Al terminar este nivel, sabremos dar voz a un texto con la IA, doblar un vídeo propio a otro idioma y respetar los límites éticos del doblaje. La voz, la narración y el doblaje ya no tienen secretos para nosotros.

## 💡 Ejemplos prácticos
1. **El cuento con voz.** Carmen genera con Piper la locución de un cuento para su nieta, con tono cálido y pausado, y la une a las ilustraciones.
2. **El anuncio del club.** Pedro dobla al inglés el vídeo de la fiesta del club para que lo entienda el hermano que vive en Londres.
3. **La presentación sin voz.** Luis genera la locución de su presentación del huerto y la une al vídeo que grabó en silencio.

## 🛠️ Actividad guiada
Paso 1: Elige un texto corto tuyo (por ejemplo, la receta del nivel 12 o un saludo).
Paso 2: Abre Piper y genera la voz con un tono que encaje con el texto (serio o alegre).
Paso 3: Escucha la voz y, si no te convence, cambia las palabras o la velocidad y vuelve a generar.
Paso 4: Ten preparado un vídeo corto tuyo sin voz (por ejemplo, unas fotos con movimiento).
Paso 5: Abre la línea de comandos y une la voz con el vídeo usando FFmpeg (ffmpeg -i video.mp4 -i voz.mp3 -c:v copy -c:a aac video_con_voz.mp4).
Paso 6: Reproduce el resultado y comprueba que la voz se escucha bien y va con las imágenes.
Paso 7: Si el vídeo original tiene sonido y quieres cambiarlo, usa FFmpeg para quitar el audio viejo antes (ffmpeg -i video.mp4 -an video_sin_sonido.mp4) y repite el paso 5.
Paso 8: Comparte el vídeo doblado con un familiar y cuéntale cómo lo hiciste.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es la locución? a) La voz que lee un texto para un vídeo. b) La cámara. c) El montaje.
2. ¿Qué es el doblaje? a) Poner una voz nueva a un vídeo. b) Duplicar un archivo. c) Subir el volumen.
3. ¿Qué es la sincronización en el doblaje? a) Que la voz coincida con las imágenes o los labios. b) Que el vídeo sea corto. c) Que no haya voz.
4. ¿Puedo doblar un vídeo de otra persona sin permiso? a) Sí, siempre. b) No, hay que pedir permiso y respetar al autor. c) Solo si es gratis.
5. ¿Para qué sirve doblar al otro idioma? a) Para que más personas entiendan el vídeo. b) Para borrar el original. c) Para nada.

Respuestas: 1-a, 2-a, 3-a, 4-b, 5-a.

## ⚖️ Dimensión ética
- No dobles vídeos de otras personas sin permiso ni los hagas pasar por originales.
- No uses la voz generada para hacer decir a alguien cosas que no dijo.
- Pide consentimiento antes de doblar vídeos donde aparecen personas reales.
- Indica cuando un vídeo está doblado con IA: la transparencia genera confianza.
- Usa el doblaje para crear, incluir y traducir, nunca para engañar.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| Piper | Generar voces sintéticas en varios idiomas | github.com/rhasspy/piper (gratuito) |
| FFmpeg | Quitar el audio y unir la nueva voz | ffmpeg.org (gratuito) |
| Whisper | Transcribir el vídeo original | github.com/openai/whisper (gratuito) |
| Audacity | Ajustar la duración y el tono de la voz | audacityteam.org (gratuito) |

## 🧠 Resumen y puente
La locución da voz a un texto y el doblaje pone una voz nueva a un vídeo. Con Piper, Whisper y FFmpeg generamos voces con tonos distintos, traducimos y doblamos vídeos propios, siempre con respeto y permiso. En el siguiente nivel crearemos nuestro primer pódcast, uniendo narrativa, voz y música.
