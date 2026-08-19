# Módulo 3: IA Aplicada a los Datos — Nivel 09
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es la estadística y para qué sirve en la vida diaria.
- Calcular la media (promedio) de un conjunto de números.
- Calcular la mediana (el valor del centro) sin confundirse.
- Identificar la moda (el valor que más se repite).
- Saber cuándo usar cada una y por qué la media puede engañar.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Estadística | La ciencia de resumir muchos datos en pocas cifras. |
| Media | El promedio: sumar todos y dividir entre cuántos hay. |
| Mediana | El valor que queda en el centro al ordenar los datos. |
| Moda | El valor que más veces se repite. |
| Dato atípico | Un valor muy distinto de los demás, que descoloca los resúmenes. |

## 📚 Lección principal
En los niveles anteriores dibujamos datos: barras, líneas y sectores. Pero a veces no queremos un dibujo, queremos una cifra. "¿Cuál es el gasto medio de mi familia al mes?" "¿Cuánto gana de media un vecino de mi pueblo?" "¿Qué edad tiene el grupo en mi clase de gimnasia?" Para eso existe la estadística: la ciencia de resumir muchos datos en una sola cifra. Y sus tres herramientas básicas se llaman media, mediana y moda.

La media es la más famosa. Para calcularla, se suman todos los valores y se divide entre cuántos hay. Cinco compras de 2, 4, 6, 8 y 10 euros: sumamos 2+4+6+8+10 = 30, y dividimos entre 5, que es 6. La media es 6 euros. La media responde "si repartimos el total a partes iguales, ¿cuánto toca a cada uno?". Es como repartir una tarta entre todos: la media es el trozo que le tocaría a cada comensal.

La mediana es la hermana más seria. Para calcularla, se ordenan los datos de menor a mayor y se coge el que queda en el centro. Con las mismas compras ordenadas: 2, 4, 6, 8, 10. El del centro es el 6. Curiosamente, la media y la mediana coinciden aquí. Pero no siempre. La mediana responde "¿cuál es el valor del medio?". Es la persona que, en una fila ordenada de menor a mayor, se queda en el puesto central.

La moda es la más simple: es el valor que más veces se repite. En las notas de la familia, si tres nietos sacaron un 7, la moda es 7. La moda sirve para datos que no son números: el sabor de helado más pedido, el color de coche más vendido, el nombre más repetido. No se puede calcular "la media" de los sabores de helado, pero sí la moda: el sabor favorito. La moda es "lo que más se ve".

¿Cuándo usar cada una? Depende de los datos. Si los datos son ordenados y sin rarezas, la media es perfecta. Si hay un dato atípico (un valor enorme o diminuto que no encaja), la media se descoloca y la mediana es más honrada. Piense en los sueldos de una empresa: si hay un jefe que gana 10.000 euros y nueve empleados que ganan 1.000, la media sale 1.900 euros. Pero ninguno de los nueve gana eso: la mediana (1.000) cuenta la realidad mejor.

Ese ejemplo del sueldo es clave para la vida de un ciudadano de 40+. Cuando las noticias dicen "el salario medio es X", pregúntese: ¿esa cifra incluye datos atípicos? Unos pocos sueldos altísimos pueden subir la media y dar una impresión falsa. La mediana, en cambio, resiste esos valores raros. Por eso los organismos serios suelen publicar la mediana cuando hablan de ingresos o de precios de vivienda.

Otro ejemplo cotidiano: los precios de las casas. En un barrio, si la mayoría de casas valen 150.000 pero hay un chalet de 900.000, la media saldrá muy alta y dará la impresión de que todo es carísimo. La mediana (150.000) cuenta la realidad del barrio. Al comprar o vender, fíjese si le hablan de media o de mediana: la diferencia puede ser enorme.

La moda también tiene su uso práctico. El panadero quiere saber qué pan vende más (la moda de sus ventas) para no quedarse sin existencias. El ayuntamiento quiere saber qué reclamación recibe más (la moda de las quejas) para arreglar lo más urgente. La moda responde "¿qué es lo más frecuente?", que muchas veces es exactamente la pregunta que importa.

En Google Sheets, las tres se calculan con funciones que ya conocemos del nivel 5: PROMEDIO para la media, MEDIANA para la mediana y MODA para la moda. Escriba "=PROMEDIO(A2:A10)", "=MEDIANA(A2:A10)" o "=MODA(A2:A10)" y la hoja calcula. Es un buen momento para comprobar el truco de la media engañosa: ponga un dato atípico en su tabla y vea cómo la media cambia mucho más que la mediana.

¿Y qué tiene que ver todo esto con la inteligencia artificial? Muchísimo. La IA, en el fondo, es una gran estadística: busca resúmenes y patrones en datos enormes. La media, la mediana y la moda son sus herramientas más simples. Cuando en niveles avanzados la IA "predice" algo, estará usando ideas estadísticas parecidas, pero con miles de variables y cálculos que un humano no puede hacer a mano. Entender la estadística básica es entender el idioma de la IA.

Con este nivel cerramos la banda Raíz (niveles 5-9). Ya hemos aprendido a calcular, resumir, dibujar y medir los datos. En la banda Tallo (niveles 10-14) daremos el salto de calidad: aprenderemos a distinguir lo que es correlación de lo que es causalidad, a limpiar datos, y a construir dashboards con herramientas profesionales. La estadística de hoy es el cimiento de todo lo que viene.

## 💡 Ejemplos prácticos
### Ejemplo 1: La media del gasto familiar
Con su tabla de gastos del mes, calcule con "=PROMEDIO" el gasto medio por compra. Comente con su familia si la cifra se parece a la realidad.

### Ejemplo 2: La mediana de los sueldos del barrio
Anote los sueldos aproximados de 9 vecinos. Ordénelos y encuentre el del centro: esa es la mediana. Ahora sume todo y divida entre 9: esa es la media. ¿Son parecidas o muy distintas? ¿Por qué?

### Ejemplo 3: La moda de los sabores de helado
Pregunte a 10 personas su sabor de helado favorito. Apúntelos y cuente cuál se repite más. Ese es la moda. Verá que no se puede calcular la "media" de los sabores, solo la moda.

## 🛠️ Actividad guiada
Paso 1. Abra Google Sheets y cree una hoja nueva llamada "Mi estadística".
Paso 2. Escriba en A1 "gasto" y debajo 9 gastos de su semana (por ejemplo: 5, 8, 3, 12, 6, 4, 9, 7, 5).
Paso 3. En B1 escriba "media" y en B2 la fórmula =PROMEDIO(A2:A10). Pulse Enter.
Paso 4. En C1 escriba "mediana" y en C2 la fórmula =MEDIANA(A2:A10). Pulse Enter.
Paso 5. En D1 escriba "moda" y en D2 la fórmula =MODA(A2:A10). Pulse Enter.
Paso 6. Compare las tres cifras. ¿Son parecidas? Normalmente lo serán con datos normales.
Paso 7. Añada un dato atípico: escriba en A11 el número 100 (una compra enorme).
Paso 8. Cambie las fórmulas para que abarquen hasta A11: =PROMEDIO(A2:A11), etc.
Paso 9. Observe: la media habrá subido mucho; la mediana casi nada. Eso es el efecto del dato atípico.
Paso 10. Escriba una conclusión en E1: "la media se descoloca con valores raros; la mediana resiste". Guarde la hoja.

## ✍️ Ejercicios de autoevaluación
1. ¿Cómo se calcula la media y qué significa?
2. ¿Cómo se calcula la mediana?
3. ¿Qué es la moda y para qué tipo de datos sirve?
4. ¿Por qué la media puede engañar cuando hay un dato atípico?
5. ¿Qué función usa Google Sheets para la mediana?

Respuestas: 1. Se suman todos los valores y se divide entre cuántos hay; es el valor que tocaría a cada uno si se repartiera el total. 2. Se ordenan los datos de menor a mayor y se coge el del centro. 3. El valor que más se repite; sirve también para datos que no son números (sabores, colores, nombres). 4. Porque un valor muy alto o muy bajo desplaza la suma y la media deja de representar a la mayoría; la mediana resiste mejor. 5. MEDIANA, con la forma =MEDIANA(rango).

## ⚖️ Dimensión ética
Las cifras que resumen datos pueden usarse para engañar. Un político o un anuncio pueden elegir entre media y mediana según lo que les convenga. Aprenda a preguntar siempre: "¿qué medida es esta y qué datos la componen?". Y cuando usted presente cifras, diga con claridad si habla de media o de mediana. Resumir con honestidad no es solo una técnica: es un compromiso con la verdad.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Funciones PROMEDIO, MEDIANA y MODA gratuitas | https://sheets.google.com |
| LibreOffice Calc | Las mismas funciones, sin conexión | https://es.libreoffice.org |
| Khan Academy (estadística) | Cursos gratuitos de estadística en vídeo | https://es.khanacademy.org/math/statistics-probability |
| Gapminder | Datos reales del mundo para practicar resúmenes | https://www.gapminder.org |

## 🧠 Resumen y puente
- La media reparte el total; la mediana es el valor central; la moda es lo que más se repite.
- La media se descoloca con datos atípicos; la mediana resiste.
- En Sheets: PROMEDIO, MEDIANA y MODA.
- Al recibir cifras ajenas, pregunte siempre qué medida es y qué datos la forman.
Con este nivel cerramos la banda Raíz. En la banda Tallo aprenderemos a distinguir correlación de causalidad, a limpiar datos y a construir dashboards: empezamos a pensar como analistas.
