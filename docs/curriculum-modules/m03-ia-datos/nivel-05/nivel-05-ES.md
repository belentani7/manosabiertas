# Módulo 3: IA Aplicada a los Datos — Nivel 05
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es una fórmula y por qué la hoja de cálculo "hace el trabajo" por nosotros.
- Escribir las fórmulas básicas de suma, resta, multiplicación y división.
- Usar la función SUMA para totalizar una columna entera con un clic.
- Conocer el relleno automático para repetir cálculos sin escribir a mano.
- Dejar de usar la calculadora para los datos que ya están en la tabla.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Fórmula | Una instrucción que le damos a la hoja para que calcule. Siempre empieza con =. |
| Función | Una fórmula ya preparada, como SUMA o PROMEDIO, que hace un cálculo completo. |
| Referencia de celda | La dirección de una celda (como B3) que se usa dentro de una fórmula. |
| Rango | Un grupo de celdas seguidas, como B2:B8, que va desde la B2 hasta la B8. |
| Relleno automático | Arrastrar una celda con fórmula hacia abajo para copiarla a las demás. |

## 📚 Lección principal
¿Recuerda la abuela de nuestra historia, que sumaba los gastos del mes con lápiz y calculadora? Pues hoy va a descubrir que la hoja de cálculo hace ese trabajo por nosotros. En el nivel 3 la usamos como un cuaderno: escribíamos datos. Hoy le vamos a enseñar a calcular. Una fórmula es una instrucción que le damos a la hoja para que haga una operación. Siempre empieza con el signo igual (=). Si usted escribe "=2+2" en una celda y pulsa Enter, la hoja muestra 4. No es magia, es fórmula.

¿Por qué es tan potente? Porque la fórmula no guarda el resultado, guarda la receta. Si más tarde cambia el número 2 por un 5, la hoja vuelve a calcular sola y muestra 7. Es como si la receta del guiso siguiera valiendo aunque cambiemos las verduras. Eso no se puede hacer en papel: en papel, si cambia un dato, hay que rehacer toda la cuenta. En la hoja de cálculo, el resultado se actualiza solo.

Las cuatro operaciones básicas se escriben así: suma con el signo más (+), resta con el menos (-), multiplicación con el asterisco (*) y división con la barra (/). Ojo: la multiplicación no se escribe con una equis ni con un punto, sino con el asterisco. "=6*7" da 42. La división tampoco es con dos puntos: "=42/6" da 7. Son pequeños gestos, pero conviene conocerlos, como conocer la ubicación de los cajones de la cocina.

Ahora viene el salto importante: en lugar de números, usaremos referencias de celda. En vez de escribir "=2+3", escribimos "=B2+C2", donde B2 y C2 son las celdas que contienen el 2 y el 3. ¿Qué gana? Que si cambia el valor de B2, la suma se actualiza sola. La fórmula mira la caja, no el contenido; si el contenido cambia, la cuenta se renueva. Así es como se trabaja con datos de verdad.

La función más usada del mundo es SUMA. Para sumar la columna de precios de su tabla, no tiene que escribir "=B2+B3+B4..." hasta el infinito. Escribe "=SUMA(B2:B8)" y la hoja suma todos los números que están entre la B2 y la B8. Los dos puntos (:) significan "desde hasta": B2:B8 es "desde la B2 hasta la B8". Un rango. Es como decirle a la hoja: "suma esta tanda de números, de este a este".

Escribir una fórmula es fácil si se siguen tres pasos. Primero, haga clic en la celda donde quiere el resultado. Segundo, escriba el signo igual. Tercero, escriba la fórmula o haga clic sobre las celdas que quiere usar. De hecho, puede hacer clic en B2, escribir +, hacer clic en C2 y pulsar Enter: la hoja rellena las referencias por usted. Es como dictar una receta señalando los ingredientes.

La función PROMEDIO (o AVERAGE en inglés) calcula la media: suma todos los números y los divide entre cuántos hay. Si quiere saber el gasto medio por compra, escriba "=PROMEDIO(B2:B8)". Otras funciones útiles: MINIMO y MAXIMO (el valor más pequeño y el más grande), CONTAR (cuántos números hay) y REDONDEAR. No hay que aprendérselas todas de memoria: la hoja las sugiere mientras escribe. Basta con conocer qué existe y qué hace cada una.

Otro truco maravilloso: el relleno automático. Imagínese que tiene la columna "cantidad" y la columna "precio", y quiere saber cuánto cuesta cada producto (cantidad × precio). Escriba la fórmula en la primera fila de datos, por ejemplo "=C2*D2". Después haga clic en la esquina inferior derecha de esa celda: verá un pequeño cuadrado. Arrastre ese cuadrado hacia abajo, hasta la última fila. La hoja copia la fórmula a todas las filas, ajustando las referencias. Cada fila queda con su propia cuenta, como una cadena de montaje.

¿Por qué es tan importante este nivel para un módulo de IA? Porque las fórmulas son el primer paso de "pedir a una máquina que piense con nuestros datos". La hoja de cálculo no es inteligente, pero ejecuta nuestras órdenes con una rapidez y sin errores que ningún humano iguala. La IA hará cosas parecidas, pero mucho más complejas: buscar patrones, predecir, clasificar. Si usted entiende cómo se le pide un cálculo a una hoja, entenderá mejor cómo se le pide un análisis a una IA.

Cuidado con un error clásico: empezar la fórmula sin el signo igual. Si escribe "SUMA(B2:B8)" sin el =, la hoja lo trata como texto y no calcula nada. El igual es la llave que abre la puerta del cálculo. Otro error: copiar una fórmula a mano. Siempre use el relleno automático o el copiar y pegar; así las referencias se ajustan bien. Escribir las mismas fórmulas una a una es perder el tiempo y arriesgarse a errores.

Hoy, con SUMAS, multiplicaciones y relleno automático, su tabla de gastos se convierte en una pequeña central de cálculo. En el nivel 6 daremos el siguiente salto: las tablas dinámicas, que resumen datos por categorías con un clic. Por ahora, celebre lo que ya sabe: le ha enseñado a calcular a la hoja de cálculo.

## 💡 Ejemplos prácticos
### Ejemplo 1: Total de la compra
En su tabla de gastos, escriba en la celda debajo de los precios "=SUMA(D2:D7)" y pulse Enter. La hoja suma toda la columna: su compra total de la semana, sin calculadora.

### Ejemplo 2: Precio por cantidad
Si tiene "cantidad" y "precio por unidad", escriba en una columna nueva "=C2*D2" y arrastre hacia abajo. Cada fila muestra cuánto cuesta ese producto.

### Ejemplo 3: Gasto medio por compra
Escriba "=PROMEDIO(D2:D7)". La hoja calcula el gasto medio por compra. Compruebe que la cifra le suena razonable según su semana.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja "Mis gastos de la semana" en Google Sheets.
Paso 2. Asegúrese de que en la columna D (precio) tiene al menos 5 números, desde D2 hasta D6.
Paso 3. Haga clic en la celda D8 (una fila vacía debajo de los precios).
Paso 4. Escriba: =SUMA(D2:D6) y pulse Enter. Verá el total de la semana.
Paso 5. Escriba en E1 la cabecera "total por producto".
Paso 6. En E2 escriba: =C2*D2 y pulse Enter. Aparece el coste del primer producto.
Paso 7. Haga clic de nuevo en E2 y mueva el ratón hasta la esquina inferior derecha hasta ver el cuadrado pequeño.
Paso 8. Arrastre el cuadrado hacia abajo hasta E6 y suelte. Todas las filas quedan calculadas.
Paso 9. Cambie el precio de D2 por otro número. Observe cómo cambian solos el total y el "total por producto".
Paso 10. Escriba en E8: =PROMEDIO(D2:D6) y pulse Enter. Ahora sabe cuál es su gasto medio por compra.

## ✍️ Ejercicios de autoevaluación
1. ¿Con qué signo tiene que empezar toda fórmula?
2. ¿Cómo se escribe la multiplicación en una hoja de cálculo?
3. ¿Qué significa "B2:B8"?
4. ¿Qué hace la función SUMA?
5. ¿Qué es el relleno automático y para qué sirve?

Respuestas: 1. Con el signo igual (=). 2. Con el asterisco (*); por ejemplo =6*7. 3. Un rango: todas las celdas desde la B2 hasta la B8. 4. Suma todos los números de un rango, como =SUMA(B2:B8). 5. Arrastrar la esquina de una celda con fórmula hacia abajo para copiarla a las demás, ajustando las referencias de cada fila.

## ⚖️ Dimensión ética
Las fórmulas calculan sin juzgar: hacen exactamente lo que se les pide. Por eso hay que pedir bien. Un error común es calcular sobre datos sucios: si una fila tiene un precio mal escrito, el total sale mal, aunque la fórmula sea perfecta. Revise siempre sus datos antes de calcular. Y cuando alguien le presente una cifra calculada con una hoja o una IA, pregúntese qué había dentro de los datos: una media engañosa es peor que no tener media.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Hoja de cálculo con fórmulas, funciones y relleno automático | https://sheets.google.com |
| LibreOffice Calc | Lo mismo, instalado en el ordenador y sin conexión | https://es.libreoffice.org |
| Guía de fórmulas de Google | Lista oficial de todas las funciones de Sheets, en español | https://support.google.com/docs/table/25273 |
| Khan Academy (hojas de cálculo) | Cursos gratuitos en vídeo sobre hojas de cálculo | https://es.khanacademy.org |

## 🧠 Resumen y puente
- Las fórmulas empiezan con = y guardan la receta, no solo el resultado.
- SUMA, PROMEDIO, MÍNIMO y MÁXIMO son las funciones más útiles.
- Las referencias de celda hacen que el cálculo se actualice solo.
- El relleno automático copia una fórmula a toda una columna.
En el nivel siguiente aprenderemos las tablas dinámicas: resumir una tabla entera por categorías con un clic, sin escribir fórmulas.
