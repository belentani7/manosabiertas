# Módulo 3: IA Aplicada a los Datos — Nivel 12
## Idioma: ES · Dificultad: Tallo
## Tiempo estimado: 3 horas

## 🎯 Objetivo del nivel
- Entender qué es un tablero de control o "dashboard" y para qué sirve.
- Conocer dos herramientas gratuitas: Looker Studio (de Google) y Power BI (de Microsoft).
- Conectar datos limpios a un tablero y elegir el gráfico adecuado para cada pregunta.
- Montar un primer tablero sencillo con tres gráficos y un título.

## 📖 Vocabulario esencial
| Término | Explicación en palabras simples |
|---|---|
| Tablero de control | Una página con varios gráficos que responde preguntas de un vistazo. |
| Fuente de datos | La hoja o archivo del que el tablero toma los números. |
| Cuadro de mando | Sinónimo de tablero de control, del mundo empresarial. |
| Panel | Cada gráfico o tarjeta dentro del tablero. |
| Actualizar | Refrescar los datos para que el tablero muestre lo último. |

## 📚 Lección principal
En los dos niveles anteriores aprendimos a sospechar de las relaciones falsas y a limpiar los datos para que las conclusiones sean honestas. Ahora toca la parte bonita: juntar varios gráficos en una sola página que cuente la historia completa de un vistazo. Eso es un tablero de control, que en inglés se llama "dashboard" y en el mundo de la empresa "cuadro de mando".

¿Qué hace un tablero? Imaginemos que usted es la presidenta de una pequeña asociación de comerciantes de su barrio. Tiene datos de 12 tiendas: ventas de cada mes, gastos, días abiertos y clientes nuevos. Si le enseñan una hoja de 500 filas, ¿qué saca en claro? Muy poco. Si le enseñan un tablero con tres gráficos —ventas por mes, gastos por tienda y clientes nuevos por trimestre—, en diez segundos sabe cómo va el barrio. El tablero convierte datos en comprensión.

Las dos herramientas más usadas y gratuitas son Looker Studio (de Google, funciona en el navegador) y Power BI (de Microsoft, se instala en el ordenador y tiene una versión gratuita). Looker Studio es ideal para empezar porque se conecta directamente con Google Sheets, que ya conocemos. Power BI es más potente y muy usado en las empresas. Esta semana aprenderemos con Looker Studio, y el concepto vale para las dos.

El tablero se construye en tres pasos. Primero, la fuente de datos: se conecta la hoja de Google Sheets limpia que ya tenemos. Segundo, el lienzo: una página blanca donde se colocan los elementos. Tercero, los paneles: cada gráfico se añade eligiendo su tipo. Lo importante no es el clic, sino decidir bien: ¿qué pregunta quiero responder con cada gráfico?

Cada tipo de gráfico responde a una pregunta distinta, y esta es la parte de diseño que hay que cuidar. El gráfico de barras compara categorías: "¿qué tienda vende más?". El de líneas muestra la evolución en el tiempo: "¿suben las ventas de marzo a septiembre?". El de sectores (la "tarta") reparte un total: "¿qué porcentaje de gasto corresponde a cada rubro?". La tarjeta de número grande responde "¿cuánto?" de una sola cifra: 12.450 euros. Si usamos el gráfico equivocado, la pregunta queda sin responder.

Regla de oro de los tableros: menos es más. Un tablero de diez gráficos no se lee; un tablero de tres o cuatro bien elegidos se entiende. La disciplina del diseñador consiste en preguntarse, ante cada gráfico que quiere añadir: "¿esta imagen responde a una pregunta que alguien ha hecho?". Si no la responde, no entra en el tablero. La ausencia de ruido es diseño.

Otra decisión importante: el orden. El tablero se lee como un periódico: de arriba a abajo y de izquierda a derecha. Arriba, el título y el número más importante, el resumen general. En el centro, los dos o tres gráficos que cuentan la historia principal. Abajo, los detalles para quien quiera profundizar. Un buen tablero cuenta una historia con un principio (el resumen), un desarrollo (los gráficos) y un final (la conclusión o el detalle).

Y un aviso técnico: los datos del tablero no se actualizan solos. Si la semana que viene añade datos a la hoja, el tablero de Looker Studio sigue mostrando lo de antes hasta que se pulsa el botón de actualizar. Ese botón es como el riego de una planta: si no se riega, la planta (y el tablero) se seca y deja de servir. Acostúmbrese a actualizar.

Una capacidad de los tableros que vale oro es el filtro. En Looker Studio se puede añadir un "control de fecha" o una lista desplegable de tiendas: con un clic, todo el tablero muestra solo un trimestre o solo una tienda. Los filtros permiten hacer muchas preguntas con un solo tablero, sin dibujar nada nuevo. Eso es lo que los profesionales llaman "explorar los datos".

En el nivel siguiente entraremos en la parte de IA propiamente dicha: empezaremos con el análisis predictivo, que usa los datos pasados para adivinar el futuro. El tablero que aprenda a montar hoy será el lugar donde esa predicción se muestre. El tablero no predice, pero enseña; la IA predice, pero necesita que alguien (usted) compruebe que sus predicciones son honestas. Los dos se necesitan.

## 💡 Ejemplos prácticos
### Ejemplo 1: El barrio de las 12 tiendas
Con la hoja de ventas mensuales de 12 tiendas, un tablero con tres paneles responde: tarjeta (total del año), barras (tienda por tienda), líneas (evolución mensual). En diez segundos se sabe cómo va el barrio.

### Ejemplo 2: El gimnasio
Un gimnasio registra socios nuevos y bajas cada mes. Un tablero con líneas muestra ambas curvas: si las bajas superan a las altas, el negocio se encoge. El tablero no opina, solo lo muestra.

### Ejemplo 3: La huerta comunitaria
Una huerta anota kilos de tomates por parcela. El gráfico de sectores reparte el total: "la parcela 3 produce el 40% de todo". Ese dato invita a preguntarse por qué esa parcela funciona mejor.

## 🛠️ Actividad guiada
Paso 1. Abra la hoja limpia del nivel anterior (o cree una con 12 meses de ventas y gastos de una tienda).
Paso 2. Entre en https://lookerstudio.google.com y pulse "Crear informe".
Paso 3. Conecte la fuente: "Google Sheets", seleccione la hoja y "Añadir".
Paso 4. Ponga un título arriba: "Tablero de la tienda — 2026".
Paso 5. Añada una tarjeta de número: menú "Añadir un gráfico", "Tarjeta de puntuación", elija la columna de ventas y la función SUMA.
Paso 6. Añada un gráfico de barras con las ventas por mes: la categoría es el mes, la métrica la suma de ventas.
Paso 7. Añada un gráfico de líneas con los gastos por mes.
Paso 8. Añada un control de filtro: "Añadir un control", "Lista desplegable", y elija el campo "mes". Pruebe a elegir solo un mes y vea cómo cambian los paneles.
Paso 9. Ordenelo: número arriba, barras y líneas en el centro, control abajo.
Paso 10. Comparta el informe con un botón "Compartir" (solo lectura) y guarde el enlace. Felicidades: ya tiene su primer tablero.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es un tablero de control?
2. Nombre dos herramientas gratuitas para hacer tableros.
3. ¿Qué pregunta responde cada tipo: barras, líneas, sectores, tarjeta de número?
4. ¿Cuál es la regla de oro de los tableros?
5. ¿Qué hay que hacer con los datos nuevos para que el tablero los muestre?

Respuestas: 1. Una página con varios gráficos que responde preguntas de un vistazo. 2. Looker Studio (de Google) y Power BI (de Microsoft). 3. Barras: comparar categorías. Líneas: evolución en el tiempo. Sectores: repartir un total. Tarjeta: responder "¿cuánto?" con una cifra. 4. Menos es más: solo entra el gráfico que responde a una pregunta real. 5. Pulsar el botón de actualizar.

## ⚖️ Dimensión ética
Un tablero puede ser honesto o manipulador. Es fácil elegir un gráfico que exagera: empezar el eje en 100.000 en vez de en 0 hace que una subida pequeña parezca enorme. También se pueden ocultar datos incómodos dejándolos fuera. El tablero honesto muestra la escala completa, no engaña con los ejes y no esconde lo que no conviene. Cuando usted haga tableros, recuerde que alguien tomará decisiones basándose en ellos: eso merece dibujarlos con verdad.

## 🔓 Herramientas abiertas
| Herramienta | Qué es y para qué sirve | Dónde encontrarla |
|---|---|---|
| Looker Studio | Tableros gratuitos conectados a Google Sheets | https://lookerstudio.google.com |
| Power BI | Tableros potentes con versión gratuita | https://powerbi.microsoft.com |
| Google Sheets | Su fuente de datos: la hoja limpia | https://sheets.google.com |
| Rawgraphs | Gráficos raros y curiosos sin programar | https://rawgraphs.io |

## 🧠 Resumen y puente
- Un tablero junta varios gráficos que responden preguntas de un vistazo.
- Looker Studio y Power BI son las herramientas gratuitas más usadas.
- Cada tipo de gráfico responde a una pregunta: barras, líneas, sectores, tarjeta.
- Menos es más, y los datos hay que actualizarlos.
En el nivel siguiente entraremos en la IA de verdad: el análisis predictivo, que usa el pasado para anticipar el futuro.
