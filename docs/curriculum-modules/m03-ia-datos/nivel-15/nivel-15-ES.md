# Módulo 3: IA Aplicada a los Datos — Nivel 15
## Idioma: ES · Dificultad: Rama
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es el análisis predictivo y por qué es la parte más "mágica" de la IA.
- Comprender que predecir no es adivinar: es calcular probabilidades con datos pasados.
- Distinguir entre predicción buena y predicción mala.
- Aprender la idea de "entrenar" y "evaluar" un modelo.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Análisis predictivo | Usar datos pasados para anticipar qué pasará en el futuro. |
| Modelo | La regla que la IA aprende para hacer predicciones. |
| Entrenar | Enseñar al modelo con ejemplos de datos pasados. |
| Evaluar | Comprobar si las predicciones del modelo son correctas. |
| Probabilidad | La medida de cuánta confianza tiene una predicción, de 0 a 100%. |

## 📚 Lección principal
Bienvenido a la banda Rama. Es la banda más esperada del curso, porque aquí la IA hace lo que parece magia: mirar al futuro. Hasta ahora hemos aprendido a mirar al pasado: ordenar datos, dibujarlos, limpiarlos, encontrar correlaciones. Todo eso era el entrenamiento de un detective. Ahora llega la hora del oráculo: usar lo que sabemos para anticipar lo que viene.

¿Qué es el análisis predictivo? Es la disciplina que usa datos pasados para calcular qué pasará en el futuro. No es adivinación ni superstición: es estadística aplicada. Cuando el meteorólogo dice "mañana hay un 70% de probabilidad de lluvia", no está tirando una moneda: está comparando el día de hoy con miles de días parecidos del pasado y contando cuántas veces llovió después. Eso es análisis predictivo.

La pieza central es el "modelo". Un modelo es una regla que la máquina aprende sola a partir de ejemplos. Imagínese un niño que nunca ha visto perros ni gatos. Le enseñamos 100 fotos: "esto es un perro", "esto es un gato". Con esas 100 fotos, el niño interioriza la regla: "cuatro patas, orejas caídas, hocico largo... perro; orejas puntiagudas, maúlla... gato". Luego le enseñamos una foto nueva y lo acierta. El niño acaba de entrenar un modelo. La IA hace exactamente lo mismo, pero con millones de ejemplos.

El proceso tiene dos fases que hay que conocer muy bien porque las usaremos siempre: entrenar y evaluar. Entrenar es enseñar al modelo con datos del pasado, como el niño con las 100 fotos. Evaluar es comprobar si aprendió bien: se le dan preguntas cuya respuesta ya conocemos, se le deja responder sin ayuda, y se cuenta cuántas acierta. Si acierta el 95%, el modelo es bueno. Si acierta el 40%, no sirve.

Aquí está la trampa más peligrosa del mundo de la IA: un modelo puede acertar de memoria. Si el niño memoriza las 100 fotos exactas y le enseñamos una de esas mismas 100, acierta siempre... pero no sabe generalizar: la foto 101, que nunca ha visto, la falla. Los profesionales llaman a esto "memorizar en vez de aprender". Por eso la evaluación siempre se hace con datos que el modelo NO ha visto durante el entrenamiento. Ese detalle separa a los buenos de los chapuceros.

Hay otra idea que hay que llevarse a casa: las predicciones de la IA nunca son certezas, son probabilidades. Una IA que predice enfermedades nunca dice "usted tiene esto"; dice "hay un 80% de probabilidad de que...". El porcentaje importa. Una predicción con un 95% de confianza y una con un 55% no merecen el mismo trato. Desconfíe de cualquier sistema que dé respuestas sin decir cuánto se equivoca. La honestidad del modelo es su porcentaje.

¿Dónde encontramos el análisis predictivo en la vida diaria? En todas partes. El correo que predice el spam, el banco que detecta tarjetas robadas, la tienda que le sugiere "puede que también le guste", el navegador que calcula cuánto tardará en llegar al hospital, la televisión que adivina qué serie le gustará. Todos esos sistemas, cada día, hacen análisis predictivo con sus datos y con los suyos. Ya vive rodeado de oráculos; hoy ha aprendido cómo funcionan.

Para este curso, lo bueno es que no hace falta programar para hacer análisis predictivo. En los próximos niveles usaremos herramientas visuales y gratuitas donde "entrenar" significa arrastrar carpetas y pulsar botones. Usted ya tiene las bases que otros no tienen: sabe que detrás de toda predicción hay datos limpios (nivel 11), correlaciones sospechosas (nivel 10) y decisiones responsables (nivel 13). La máquina predice; usted juzga.

En el nivel siguiente veremos el primer tipo de predicción: la regresión, que se usa cuando queremos predecir un número. Cuántos kilos de tomates dará el huerto, cuánto costará el billete de avión, cuántos clientes vendrán al mercado. Por ahora, recuerde esto: predecir no es adivinar, entrenar no es memorizar y la confianza de toda predicción se mide con un porcentaje.

## 💡 Ejemplos prácticos
### Ejemplo 1: El meteorólogo
Cuando el pronóstico dice "70% de probabilidad de lluvia", está comparando el día actual con miles de días parecidos del pasado. Eso es análisis predictivo puro.

### Ejemplo 2: El niño y los animales
Con 100 fotos etiquetadas, el niño aprende la regla que separa perros de gatos. Luego acierta con una foto nueva. Entrenar y generalizar, en una frase.

### Ejemplo 3: El banco
El banco detecta que su tarjeta se usa en una ciudad lejana a la vez que se usa en la suya. Es improbable, así que el sistema predice fraude y la bloquea. Basa la decisión en una probabilidad calculada con millones de operaciones pasadas.

## 🛠️ Actividad guiada
Paso 1. Abra una hoja de Google Sheets nueva y escriba el título "Mi primera predicción".
Paso 2. Haga una lista con 10 días y el número de helados que vendió un kiosco (invente datos que suban cuando hace calor).
Paso 3. Añada una columna con la temperatura de cada día (si quiere, use datos reales de nivel 14).
Paso 4. Haga un gráfico de dispersión con temperatura (X) y helados (Y), como en el nivel 10.
Paso 5. Observe: ¿los puntos forman una línea ascendente? Entonces temperatura y helados están correlacionados.
Paso 6. Imagínese que la IA traza la "mejor línea" que pasa entre los puntos. Eso se llama regresión y es el tema del nivel 16.
Paso 7. Escriba una predicción: "si mañana hacen 28 grados, ¿cuántos helados se venderán?".
Paso 8. Estime un número con los ojos (mirando la nube de puntos) y escríbalo.
Paso 9. Ahora piense: ¿esa predicción es una certeza o una probabilidad? Escríbalo debajo.
Paso 10. Guarde la hoja. Ha dado su primer paso en el análisis predictivo.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es el análisis predictivo?
2. ¿Qué es un modelo?
3. ¿Cuáles son las dos fases del proceso de la IA?
4. ¿Por qué se evalúa con datos que el modelo no ha visto?
5. ¿Las predicciones de la IA son certezas o probabilidades?

Respuestas: 1. Usar datos pasados para anticipar qué pasará en el futuro. 2. La regla que la IA aprende a partir de ejemplos para hacer predicciones. 3. Entrenar (enseñar con ejemplos) y evaluar (comprobar con datos nuevos). 4. Porque si se evalúa con datos ya vistos, el modelo puede estar memorizando en vez de aprendiendo. 5. Son probabilidades, con un porcentaje de confianza que hay que mirar.

## ⚖️ Dimensión ética
El análisis predictivo puede ayudar o perjudicar. Un banco que predice impagos con datos sesgados puede negar crédito a gente que sí podría pagar; un algoritmo policial mal entrenado puede señalar a barrios enteros. La pregunta ética central es: ¿quién responde cuando la predicción se equivoca? La respuesta honesta: siempre una persona. La IA propone, las personas disponen. Y cualquier modelo que afecte a personas debe poder explicarse: si nadie sabe por qué la máquina decidió algo, esa máquina no debería decidir nada.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Para explorar datos y ver correlaciones que predicen | https://sheets.google.com |
| Teachable Machine | Entrenar su primer modelo sin programar | https://teachablemachine.withgoogle.com |
| Machine Learning for Kids | Introducción visual al aprendizaje automático | https://machinelearningforkids.co.uk |
| Gapminder | Datos reales para practicar predicciones | https://www.gapminder.org |

## 🧠 Resumen y puente
- El análisis predictivo usa el pasado para anticipar el futuro con probabilidades.
- Un modelo es una regla aprendida a partir de ejemplos.
- Las dos fases son entrenar y evaluar; la evaluación siempre usa datos nuevos.
- Ninguna predicción es certeza: mire siempre el porcentaje.
En el nivel siguiente veremos la regresión: predecir números como ventas, kilos o temperaturas.
