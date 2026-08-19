# Módulo 3: IA Aplicada a los Datos — Nivel 10
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender la diferencia entre correlación y causalidad, la idea más importante del análisis de datos.
- Reconocer cuándo dos cosas "van juntas" sin que una cause la otra.
- Aprender a buscar explicaciones alternativas antes de creer una relación.
- Aplicar estas ideas a noticias, anuncios y rumores cotidianos.
- Usar Google Sheets para explorar si dos columnas de datos se mueven juntas.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Correlación | Dos cosas que cambian a la vez, en el mismo sentido o en sentido contrario. |
| Causalidad | Una cosa produce la otra: A causa B. |
| Confundidor | Una tercera cosa que explica las dos y crea la ilusión de relación. |
| Causalidad inversa | B causa A, pero parece que A causa B. |
| Dispersión | Un gráfico de puntos que muestra si dos columnas se mueven juntas. |

## 📚 Lección principal
Bienvenido a la banda Tallo. Hasta ahora hemos aprendido a manejar datos: ordenarlos, dibujarlos y resumirlos. Ahora empezamos a pensar como analistas, y la primera lección de esa forma de pensar es la más famosa de toda la estadística: que las cosas vayan juntas no significa que una cause la otra. Los estadísticos lo dicen con una frase latina: "correlación no implica causalidad". Hoy vamos a descifrar esa frase.

Pongamos un ejemplo clásico que aparece en todos los manuales: el helado y los ahogamientos. Cuando suben las ventas de helado, suben también los ahogamientos en la playa. Los dos datos "van juntos": cuando el helado sube, el ahogamiento sube. ¿Significa eso que el helado causa ahogamientos? Por supuesto que no. La explicación real es una tercera cosa: el verano. En verano hace calor, la gente compra más helado y también se baña más en el mar. El verano es el "confundidor".

Ese ejemplo parece un chiste, pero es la clave de muchísimos engaños. Cada día, titulares y anuncios usan correlaciones para vender ideas falsas: "los pueblos que comen más yogur tienen menos resfriados", "la gente que duerme ocho horas gana más dinero". En todos esos casos, una tercera causa esconde la verdad: los que comen yogur suelen cuidarse más; los que duermen ocho horas suelen tener mejores trabajos. Correlación, sí; causalidad, no demostrada.

La correlación no es mala: es un aviso. Cuando dos cosas van juntas, merece la pena investigar. La correlación dice "mira aquí, hay algo interesante". La causalidad dice "esto produce aquello", y para afirmarla hace falta mucho más que dos columnas de números: hace falta experimentar, comprobar, descartar explicaciones alternativas. La ciencia seria no confunde un aviso con una prueba.

En nuestra vida cotidiana también tropezamos con esta trampa. Piense: "me duele la cabeza los días que llueve". ¿La lluvia causa el dolor? Quizá los días de lluvia duerme peor, o sale menos a pasear, o come distinto. Hay decenas de explicaciones alternativas. Antes de concluir que A causa B, siempre hay que preguntarse: ¿qué más cambia a la vez que A?

Otra trampa frecuente es la causalidad inversa. Un titular dice "la gente que se jubila antes vive más". ¿Retirarse causa vivir más? Puede ser al revés: la gente que goza de buena salud puede jubilarse antes y vive más por su salud, no por la jubilación. O puede haber un confundidor: la gente con dinero se jubila antes y tiene mejor sanidad. La dirección de la flecha no está clara.

¿Cómo podemos explorar una correlación en Google Sheets? Con un gráfico de dispersión. Se ponen dos columnas: por ejemplo, "helados vendidos" y "ahogamientos". Se seleccionan y se elige el tipo "Gráfico de dispersión": cada punto es un mes, con su venta de helado y su ahogamiento. Si los puntos forman una nube que sube de izquierda a derecha, las dos cosas van juntas (correlación positiva). Si la nube baja, van en sentido contrario (correlación negativa). Si es una nube sin forma, no hay relación.

El gráfico de dispersión es la herramienta del cazador de correlaciones. Pero ojo: el gráfico solo muestra que van juntas, no por qué. Ver la nube de puntos es el primer paso; buscar el confundidor es el segundo, y ese segundo paso es el que distingue al analista del que se traga cualquier titular. La dispersión levanta la mano para decir "aquí pasa algo"; la investigación decide qué es.

Vamos a practicar con un ejemplo saludable: la edad y el riesgo de enfermedad. Hay una correlación clara: a más edad, más riesgo de muchas enfermedades. Pero ¿la edad causa las enfermedades? No exactamente: la edad es un "marcador" que agrupa muchos otros factores que pasan con el tiempo. La medicina moderna sabe separar lo que correlaciona de lo que causa, y por eso no trata a las personas por su edad sino por sus factores reales.

Una regla práctica para la vida diaria: ante cualquier relación que le presenten, haga tres preguntas. Primera, ¿van realmente juntas o es casualidad? Segunda, ¿qué otra cosa podría explicar ambas? Tercera, ¿quién se beneficia de que yo crea esta relación? Esas tres preguntas convierten a cualquier persona en un lector crítico de titulares, anuncios y rumores.

En el nivel siguiente aplicaremos estas ideas al mundo real: limpiar datos para que las correlaciones no salgan falseadas por errores. Porque hay otra trampa más: si los datos están sucios, las correlaciones que salen son mentira. Un dato mal copiado puede crear una nube de puntos que no existe. La correlación honesta empieza por datos limpios.

## 💡 Ejemplos prácticos
### Ejemplo 1: Helado y ahogamientos
Anote en dos columnas las ventas de helado y los ahogamientos de 6 meses (invente datos: en verano suben los dos). Dibuje la dispersión: los puntos suben. Ahora explique con sus palabras por qué no es causalidad.

### Ejemplo 2: La siesta y la productividad
Le llega un titular: "quienes duermen siesta ganan más dinero". Antes de creerlo, busque explicaciones alternativas: ¿la gente con más dinero puede dormir siesta en el trabajo? Esa es una posible causalidad inversa.

### Ejemplo 3: Las paraguas y la gripe
En su ciudad, los días que se venden más paraguas hay más casos de gripe. Aplique las tres preguntas: ¿van juntas? ¿Qué las une (el mal tiempo)? ¿Quién gana con que yo crea que el paraguas causa la gripe?

## 🛠️ Actividad guiada
Paso 1. Abra Google Sheets y cree una hoja nueva llamada "Helados y ahogamientos".
Paso 2. Escriba en A1 "mes" y en B1 "helados" y en C1 "ahogamientos".
Paso 3. Rellene 6 filas con datos que suban a la vez (ejemplo: enero 10 y 2, abril 30 y 5, julio 80 y 12).
Paso 4. Seleccione las columnas B y C con la cabecera.
Paso 5. Pulse "Insertar" y "Gráfico". En "Tipo de gráfico", elija "Gráfico de dispersión".
Paso 6. Observe la nube de puntos: sube de izquierda a derecha. Hay correlación positiva.
Paso 7. En una celda al lado, escriba la pregunta clave: "¿qué tercera cosa explica las dos?".
Paso 8. Escriba la respuesta: "el verano y el calor". Ese es el confundidor.
Paso 9. Cambie ahora los datos de la columna C para que BAJEN cuando sube B (ejemplo: enero 12, julio 2). Mire la nube: ahora baja. Eso es correlación negativa.
Paso 10. Escriba una conclusión: "la dispersión muestra que van juntas, no que una cause la otra". Guarde la hoja.

## ✍️ Ejercicios de autoevaluación
1. ¿Cuál es la diferencia entre correlación y causalidad?
2. En el ejemplo del helado, ¿cuál es el confundidor?
3. ¿Qué es la causalidad inversa? Dé un ejemplo.
4. ¿Qué gráfico de Google Sheets muestra si dos columnas van juntas?
5. ¿Qué tres preguntas conviene hacerse ante cualquier relación que le presenten?

Respuestas: 1. Correlación es que dos cosas cambian a la vez; causalidad es que una produce la otra. 2. El verano (el calor), que explica que se compren más helados y que haya más bañistas. 3. Cuando parece que A causa B pero es B la que causa A; por ejemplo, la gente que se jubila antes vive más porque ya tenía buena salud. 4. El gráfico de dispersión. 5. ¿Van realmente juntas? ¿Qué otra cosa explica ambas? ¿Quién se beneficia de que lo crea?

## ⚖️ Dimensión ética
La confusión entre correlación y causalidad no es un error inocente: es una herramienta de manipulación. Los anuncios de cremas, de seguros y hasta de partidos políticos usan correlaciones para vender. Cuando usted comunique datos, diga siempre con honestidad si hay una relación demostrada o solo una coincidencia. Y cuando alguien use una correlación para convencerle, recuerde el helado y el ahogamiento: no coma el cuento con la cuchara.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Gráficos de dispersión para explorar correlaciones | https://sheets.google.com |
| Gapminder | Datos mundiales reales para ver correlaciones de verdad | https://www.gapminder.org |
| "Spurious Correlations" | Web que muestra correlaciones absurdas pero reales | https://www.tylervigen.com/spurious-correlations |
| LibreOffice Calc | Los mismos gráficos de dispersión, sin conexión | https://es.libreoffice.org |

## 🧠 Resumen y puente
- Correlación es que dos cosas van juntas; causalidad es que una produce la otra.
- Un confundidor es una tercera cosa que explica ambas.
- La causalidad inversa invierte la dirección de la flecha.
- El gráfico de dispersión muestra si van juntas, no por qué.
En el nivel siguiente aprenderemos a limpiar datos, porque una correlación honesta solo puede salir de datos sin errores.
