# Módulo 3: IA Aplicada a los Datos — Nivel 11
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender que los datos sucios (errores, duplicados, huecos) falsifican cualquier análisis.
- Aprender a detectar los cinco problemas típicos: duplicados, faltantes, errores de tipeo, formatos mezclados y valores imposibles.
- Limpiar una hoja de cálculo real paso a paso en Google Sheets.
- Comprobar la limpieza con herramientas de "validación" de la propia hoja.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Datos sucios | Datos con errores, duplicados o huecos que engañan al análisis. |
| Dato duplicado | La misma información repetida dos veces en la hoja. |
| Valor faltante | Una casilla vacía donde debería haber un dato. |
| Valor imposible | Un dato que no puede ser cierto, como una edad de 400 años. |
| Limpieza de datos | El proceso de revisar y corregir los datos antes de analizarlos. |

## 📚 Lección principal
En el nivel anterior aprendimos que la correlación más bonita puede ser mentira. Hoy vamos a ver la causa más aburrida y peligrosa de que eso ocurra: los datos sucios. Los estadísticos tienen un dicho: "basura entra, basura sale". Si los datos están mal, todas las conclusiones que salgan de ellos estarán mal, por muy bonitos que sean los gráficos.

¿Qué es un dato sucio? Es cualquier dato que no refleja la realidad. Imagínese que su asociación de vecinos quiere saber cuántos árboles hay en la calle para pedir al ayuntamiento que plante más. Recoge datos de 50 vecinos: cada uno escribe el número de árboles que ve desde su ventana. ¿Qué puede salir mal? Todo. Alguien escribe "1er" en vez de "12"; otro escribe la misma calle dos veces; a otro se le olvida contestar; alguien escribe "muchos" en vez de un número. Eso es una hoja sucia.

Los problemas más comunes se agrupan en cinco tipos. Primero, los duplicados: la misma fila aparece dos veces, y al sumar los árboles la contamos dos veces. Segundo, los faltantes: casillas vacías que rompen los cálculos. Tercero, los errores de tipeo: "12" escrito como "12o" o con una coma decimal en el lugar equivocado. Cuarto, los formatos mezclados: unas fechas en formato español (12/06/2026) y otras en formato inglés (06/12/2026), que significan meses distintos. Quinto, los valores imposibles: una edad de 400 años o una temperatura de 500 grados.

¿Por qué nos importa esto en un curso de IA? Porque la inteligencia artificial se alimenta de datos. Una IA entrena con la historia de miles de pacientes para predecir enfermedades; si esa historia contiene errores de tipeo, la IA aprende patrones falsos y comete errores graves. Los científicos de datos dedican entre el 60% y el 80% de su tiempo a limpiar datos, no a construir la IA. Ese dato le sorprende a todo el mundo y es verdad.

La limpieza no es magia: es paciencia. Se trabaja por pasos. Paso uno, mirar la hoja: abrir los ojos y recorrerla. Paso dos, quitar duplicados: en Google Sheets, "Datos" y "Depurar datos" y "Quitar duplicados". Paso tres, buscar huecos: la herramienta "Buscar y reemplazar" (Ctrl+H) sirve para localizar las casillas vacías si escribimos un espacio. Paso cuatro, corregir los formatos: una columna debe tener un único formato; si las fechas están mezcladas, hay que unificarlas. Paso cinco, eliminar valores imposibles: un filtro muestra de golpe el número mayor y el menor de cada columna, y si el máximo es absurdo, hay que revisar esa fila.

¿Cómo se comprueba que la limpieza funcionó? Con tres medidas de resumen que ya conocemos: el total, el promedio y el máximo. Antes de limpiar, una suma con duplicados da un resultado inflado. Después de limpiar, el total cambia y se acerca a la realidad. También podemos usar la función "CONTAR" para ver cuántos valores tiene cada columna: si una columna de 50 vecinos solo tiene 47 números, ya sabemos que hay tres huecos.

Hay un hábito de oro que los profesionales aplican siempre: hacer una copia de la hoja antes de limpiarla. Nunca se limpia sobre el original. Si nos equivocamos o si queremos ver cómo era el dato antes, la copia nos salva. En Google Sheets esto es facilísimo: botón derecho sobre el nombre de la hoja, "Duplicar", y listo.

Otro hábito importante: anotar qué cambios se hicieron. Los profesionales mantienen una columna o un documento aparte con las correcciones: "filas 12 y 40 duplicadas, eliminadas; casilla 33 vacía, rellenada con 0; fecha de la fila 20, corregida de formato inglés a español". Esto se llama "registro de limpieza" y sirve para que cualquiera pueda comprobar nuestro trabajo. La honestidad también es limpieza.

En el nivel siguiente usaremos estos datos limpios para construir nuestro primer tablero de control, lo que en inglés se llama "dashboard". Recuerde esto: el tablero bonito con datos sucios es como una casa bonita con cimientos de arena. Primero se limpian los datos, luego se dibujan los gráficos. La limpieza no es un paso aburrido: es el paso que hace que todo lo demás funcione.

## 💡 Ejemplos prácticos
### Ejemplo 1: El censo de árboles
Su asociación recoge 50 respuestas. Al revisar, encuentra la fila de la señora del 3º duplicada, la casilla 33 vacía y un vecino que escribió "1er" en vez de "12". Aplique los cinco pasos y explique qué cambia en el total.

### Ejemplo 2: Las fechas mezcladas
Una tabla de compras tiene fechas en formato español e inglés. La compra del 12 de junio aparece como 12/06 y como 06/12, que en inglés es el 6 de diciembre. Si se suman las ventas de junio, ese error cambia el resultado.

### Ejemplo 3: El valor imposible
En la lista de edades de un club hay una fila con "234". El máximo de la columna delata el error. Con un filtro se localiza la fila y se llama al socio para corregir el dato a "34".

## 🛠️ Actividad guiada
Paso 1. Cree en Google Sheets una hoja llamada "Árboles sucios" y copie los siguientes datos: 12, 7, 12, 5, "1er", 9, (vacío), 12, 3, 8.
Paso 2. Haga una copia de seguridad: botón derecho sobre el nombre de la hoja y "Duplicar". Llame a la copia "Árboles limpios".
Paso 3. En la hoja limpia, sume con =SUMA(A1:A10) y anote el resultado (está inflado por el duplicado).
Paso 4. Quite duplicados: "Datos", "Depurar datos", "Quitar duplicados". Compruebe cuántas filas quedan.
Paso 5. Localice los huecos: "Editar", "Buscar y reemplazar", busque un espacio y marque "coincidir contenido de celda".
Paso 6. Corrija el "1er": cámbielo por "12" consultando al vecino que lo escribió.
Paso 7. Busque el valor imposible: use "Datos" y "Filtrar" y mire el máximo. Corrija lo que haga falta.
Paso 8. Vuelva a sumar con =SUMA(...) y compare con el resultado del paso 3. ¿Qué cambió y por qué?
Paso 9. Añada una columna D llamada "Registro" y anote cada corrección hecha con su fecha.
Paso 10. Guarde la hoja y escriba una conclusión: "datos limpios, totales fiables".

## ✍️ Ejercicios de autoevaluación
1. ¿Qué significa el dicho "basura entra, basura sale"?
2. Nombre tres de los cinco problemas típicos de los datos sucios.
3. ¿Por qué los duplicados inflan las sumas?
4. ¿Qué hay que hacer antes de empezar a limpiar una hoja?
5. ¿Qué porcentaje del tiempo dedican los científicos de datos a limpiar datos?

Respuestas: 1. Que si los datos están mal, las conclusiones estarán mal por muy bonitos que sean los gráficos. 2. Duplicados, faltantes, errores de tipeo, formatos mezclados y valores imposibles. 3. Porque la misma fila se cuenta dos veces. 4. Hacer una copia de la hoja (nunca se limpia sobre el original). 5. Entre el 60% y el 80% de su tiempo.

## ⚖️ Dimensión ética
Los datos sucios no solo causan errores técnicos: causan daño a personas. Un historial médico mal tipeado puede llevar a un tratamiento equivocado; un censo con huecos deja fuera a los vecinos que no contestaron. Limpiar datos es un acto de respeto: significa cuidar que las decisiones que se tomen sobre las personas se basen en información verdadera. Y ser honesto en el registro de limpieza permite que otros comprueben y confíen en nuestro trabajo.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Google Sheets | Herramientas de depuración: quitar duplicados, buscar, filtrar | https://sheets.google.com |
| OpenRefine | Programa gratuito especializado en limpiar datos | https://openrefine.org |
| LibreOffice Calc | Las mismas funciones de depuración, sin conexión | https://es.libreoffice.org |
| Open Data Kit | Recogida de datos de campo con menos errores | https://getodk.org |

## 🧠 Resumen y puente
- Los datos sucios falsifican cualquier análisis: basura entra, basura sale.
- Los cinco problemas típicos: duplicados, faltantes, tipeos, formatos mezclados y valores imposibles.
- Siempre se limpia sobre una copia y se anota cada corrección en un registro.
- El 60-80% del tiempo de los científicos de datos es limpiar datos.
En el nivel siguiente convertiremos los datos ya limpios en nuestro primer tablero de control o "dashboard".
