# Módulo 4: Generación de Contenido — Nivel 17
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 4 horas

## 🎯 Objetivo del nivel
- Entender qué es una cadena de producción: los pasos en orden para hacer un vídeo.
- Conocer FFmpeg, una herramienta libre que une audio y vídeo.
- Combinar Piper (voz) y FFmpeg (unión) en un flujo de trabajo completo.
- Crear un vídeo con voz narrada y subtítulos usando herramientas de código abierto.
- Repetir el proceso para otros vídeos de forma rápida.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Cadena de producción | La lista de pasos en orden para crear algo, como una receta. |
| FFmpeg | Un programa libre que mezcla, corta y convierte audio y vídeo. |
| Flujo de trabajo | El orden fijo en que hacemos las tareas para no olvidar ninguna. |
| Comando | Una orden escrita que decimos al programa para que haga algo. |
| Línea de comandos | La ventana oscura donde se escriben las órdenes al programa. |
| Automatización | Que el ordenador haga los pasos repetitivos por nosotros. |

## 📚 Lección principal
Hasta ahora hemos montado vídeos con programas con ventanas y botones (CapCut, Canva). Existe otra manera, más técnica pero muy poderosa: usar la línea de comandos con FFmpeg. Es como la diferencia entre pedir en el restaurante o cocinar nosotros: cuesta más aprender, pero repetimos la receta cuando queremos.

FFmpeg es un programa libre y gratuito que lleva años ayudando a mezclar, cortar y convertir audio y vídeo. Funciona con "comandos": órdenes escritas. Por ejemplo, un comando puede unir un archivo de audio (la voz de Piper) con un archivo de imagen o vídeo para crear un vídeo final. Todo sin ventanas, solo texto.

La línea de comandos asusta al principio, pero es como aprender a usar el lavavajillas nuevo: al tercer día lo hacemos sin pensar. Escribimos una orden, pulsamos la tecla para ejecutarla y el programa trabaja. La clave es copiar los comandos con cuidado, sin errores, como se copia una receta.

Nuestra cadena de producción con herramientas abiertas tiene pasos claros. Primero escribimos el guion (lo vimos en el nivel 15). Segundo, generamos la voz con Piper (nivel 10). Tercero, creamos o elegimos las imágenes. Cuarto, usamos FFmpeg para unir la voz con las imágenes y crear el vídeo. Quinto, añadimos los subtítulos (nivel 13). Seis pasos sencillos que, en orden, producen un vídeo completo.

El comando de FFmpeg es una frase con partes: el programa (ffmpeg), la entrada (input: el archivo de audio y el de imagen), las órdenes (cuánto dura, qué formato) y la salida (output: el nombre del vídeo nuevo). Es como dar instrucciones en la cocina: "coge el arroz, añade agua, cuece diez minutos, sirve".

Una gran ventaja de esta cadena es la automatización. Una vez que tenemos el comando que funciona, lo guardamos en un documento y solo cambiamos los nombres de los archivos para cada vídeo. El ordenador hace el trabajo repetitivo; nosotros ponemos la idea y la revisión. Es como la masa de pan: la misma receta, mil hogazas.

¿Y los subtítulos? FFmpeg también puede incrustarlos en el vídeo. Le damos el vídeo y el archivo SRT (nivel 13) y él los dibuja encima en el momento exacto. Así el vídeo final ya lleva su texto. Todo el proceso, de principio a fin, con programas libres y sin coste.

La revisión sigue siendo humana. El ordenador une los archivos, pero nosotros comprobamos que la voz suena bien, que las imágenes son las correctas y que los subtítulos dicen lo que se escucha. La máquina acelera; el criterio es nuestro. Como en la costura: la máquina cose, pero el buen ojo decide.

Esta manera de trabajar también tiene límites. Si necesitamos efectos complicados o muchos recortes finos, los programas con ventanas son más cómodos. La línea de comandos brilla cuando repetimos el mismo tipo de vídeo muchas veces: vídeos de recetas, saludos, boletines del club. Saber las dos maneras nos hace más libres.

La paciencia es importante. Los primeros comandos fallarán o saldrán raros. No pasa nada: se corrige y se prueba otra vez. Aprender algo nuevo siempre tiene ese primer escalón. Y cuando el vídeo sale bien por primera vez, la satisfacción es enorme: hemos dominado una herramienta de los "expertos".

Al terminar este nivel, sabremos crear un vídeo completo con voz de Piper y subtítulos usando FFmpeg y otras herramientas libres, y repetir la receta cuando queramos. La producción de contenidos ya está en nuestras manos.

## 💡 Ejemplos prácticos
1. **El boletín del club.** Pedro prepara un vídeo semanal: escribe el guion, genera la voz con Piper y une la voz con la foto del cartel usando FFmpeg. Cada semana, el mismo comando.
2. **Los saludos de cumpleaños.** Rosa crea vídeos de felicitación personalizados para su familia: cada uno con el nombre distinto, generado y unido automáticamente.
3. **Las recetas de Carmen.** Carmen graba las fotos de cada paso y añade la voz narrada con Piper. FFmpeg une fotos y voz en un vídeo de receta listo para compartir.

## 🛠️ Actividad guiada
Paso 1: Escribe un guion corto de 4 frases sobre un tema sencillo (por ejemplo, "los beneficios de pasear").
Paso 2: Genera la voz con Piper y guarda el archivo de audio (por ejemplo, voz.mp3).
Paso 3: Elige o crea una imagen que acompañe el texto (por ejemplo, una foto de un parque).
Paso 4: Abre la línea de comandos (la terminal) del ordenador.
Paso 5: Escribe el comando de FFmpeg para unir la imagen y el audio: ffmpeg -loop 1 -i foto.jpg -i voz.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest video.mp4
Paso 6: Pulsa la tecla para ejecutar (Enter) y espera a que termine.
Paso 7: Abre el vídeo resultante y comprueba que la imagen y la voz duran lo mismo.
Paso 8: Añade los subtítulos con FFmpeg usando tu archivo SRT (ffmpeg -i video.mp4 -vf subtitles=subtitulos.srt video_final.mp4) y comparte el resultado.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es una cadena de producción? a) Los pasos en orden para crear algo. b) Una fábrica de coches. c) Un programa de dibujo.
2. ¿Qué es FFmpeg? a) Un programa libre que mezcla, corta y convierte audio y vídeo. b) Una cámara. c) Un tipo de letra.
3. ¿Qué es un comando? a) Una orden escrita al programa. b) Un botón verde. c) Una canción.
4. ¿Cuál es la ventaja de la automatización? a) Que el ordenador repite los pasos repetitivos. b) Que no hay que revisar nada. c) Que no se puede usar dos veces.
5. ¿Quién hace la revisión final? a) El ordenador, solo. b) La persona, con criterio. c) Nadie.

Respuestas: 1-a, 2-a, 3-a, 4-a, 5-b.

## ⚖️ Dimensión ética
- Las herramientas libres permiten que cualquiera produzca: comparte lo que aprendas con tu comunidad.
- Respeta las licencias: usa imágenes, voces y músicas libres o propias.
- No uses la técnica para engañar: un vídeo editado debe ser fiel a lo que pasó.
- Si publicas el comando o la receta, explica el proceso con claridad.
- Recuerda la privacidad: no generes vídeos con datos de otros sin permiso.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| FFmpeg | Unir, cortar y convertir audio y vídeo | ffmpeg.org (gratuito) |
| Piper | Generar la voz narrada | github.com/rhasspy/piper (gratuito) |
| Whisper | Transcribir para crear los subtítulos | github.com/openai/whisper (gratuito) |
| Audacity | Preparar y limpiar los audios | audacityteam.org (gratuito) |

## 🧠 Resumen y puente
Con FFmpeg y Piper tenemos una cadena de producción completa con herramientas libres: guion, voz, imágenes, unión y subtítulos. Los comandos asustan al principio, pero la automatización repite la receta cuando queremos. En el siguiente nivel dominaremos la voz y el doblaje para darle vida a cualquier texto.
