# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 09
## Idioma: ES · Dificultad: Raíz
## Tiempo estimado: 2 horas

## 🎯 Objetivo del nivel
- Entender qué son los datos de entrenamiento y de dónde salen.
- Comprender por qué la cantidad y la calidad de los datos importan más que la técnica.
- Conocer el trabajo de etiquetar datos y quién lo hace.
- Reflexionar sobre la privacidad y los derechos de autor de los datos.
- Crear a mano un pequeño conjunto de datos para ver cómo funciona el aprendizaje.

## 📖 Vocabulario esencial
| Término | Explicación sencilla |
|---|---|
| Conjunto de datos | Una colección ordenada de ejemplos con los que se entrena un modelo. |
| Etiqueta | La "respuesta correcta" que se pone a cada ejemplo para que la máquina aprenda. |
| Etiquetador | La persona que revisa y clasifica los ejemplos, a menudo sin aparecer en ningún sitio. |
| Calidad de datos | Lo bien que los ejemplos representan la realidad que queremos enseñar. |
| Derechos de autor | Los derechos del creador sobre su obra; los datos también los tienen. |
| Consentimiento | El permiso de una persona para usar sus datos; sin él, no deberían usarse. |

## 📚 Lección principal
Ya sabemos que las máquinas aprenden de ejemplos. Pero ¿de dónde salen esos ejemplos? En este nivel vamos a abrir la caja y mirar la materia prima: los datos de entrenamiento. Son la base de todo, y entenderlos es entender los puntos fuertes y débiles de la IA actual.

Un conjunto de datos es, en esencia, una lista ordenada de ejemplos con su respuesta correcta. Por ejemplo, para enseñar a un sistema a distinguir manzanas de peras, el conjunto tendría miles de fotos, cada una con su etiqueta: "manzana" o "pera". El modelo estudia la lista, encuentra los patrones y aprende. Sin lista, no hay aprendizaje.

¿Quién pone las etiquetas? Detrás de casi toda la IA moderna hay un ejército invisible de personas que miran imágenes, audios y textos, y los clasifican. Son los etiquetadores. Es un trabajo real, repetitivo y a veces mal pagado, que casi nunca sale en las noticias. Cada vez que un sistema reconoce su voz o una señal de tráfico, alguien pasó horas enseñándole con ejemplos.

Es bueno saberlo por dos razones. Primero, por justicia: la IA que admiramos no nace sola; nace del trabajo humano. Segundo, por humildad: si las etiquetas tienen errores, la máquina aprenderá esos errores. Los etiquetadores, por muy cuidadosos que sean, no son perfectos, y sus fallos se cuelan en los modelos.

¿De dónde salen los datos? De muchas partes. Los científicos usan conjuntos públicos como ImageNet, con millones de fotos clasificadas. Las empresas usan sus propios datos: compras, búsquedas, mensajes. Y los grandes modelos de lenguaje se entrenan con una cantidad gigantesca de texto sacado de internet: páginas web, libros, foros. Todo ese texto es su "biblioteca".

Aquí aparece un debate importante: los derechos de autor. ¿Puede una empresa entrenar un modelo con los libros y artículos de otros sin pagar? Es una discusión abierta en tribunales y parlamentos. El punto clave para nosotros es este: los datos no son gratis ni neutrales. Alguien los creó, y usar los datos de otros sin permiso tiene consecuencias.

Otro dato que debe conocer: la cantidad importa, pero la calidad importa más. Un conjunto pequeño y limpio suele producir mejores modelos que uno gigante lleno de errores. Es como estudiar: memorizar diez mil apuntes confusos es peor que estudiar bien cien páginas claras. Las mejores empresas invierten muchísimo en limpiar y revisar sus datos.

La calidad incluye la variedad. Si entrenamos un reconocedor de frutas solo con fotos perfectas, fallará con fotos reales: con sombras, con poca luz, de lado. El mundo real es variado, y el modelo debe ver esa variedad para no fallar. Por eso se dice que los datos deben representar el mundo que queremos manejar, con toda su diversidad.

Y aquí viene la parte más delicada: la privacidad. Muchos datos personales — fotos, voces, mensajes — se usan para entrenar modelos, a veces sin que la persona lo sepa o lo consienta. Su cara puede haber "ayudado" a entrenar un sistema de reconocimiento sin que usted lo supiera. El consentimiento debería ser la regla, no la excepción.

Pensemos en su vida diaria. Cuando el móvil le sugiere respuestas, cuando el banco decide si le da un crédito, cuando el médico usa un sistema de diagnóstico: detrás hay datos de entrenamiento que pueden incluir a personas como usted. Preguntarse de dónde salieron esos datos no es paranoia: es ciudadanía digital.

Hay un detalle curioso y preocupante a la vez: los modelos se entrenan con datos del pasado, pero viven en el presente. Si el mundo cambia — una moda, una ley, una tecnología nueva — el modelo se queda desactualizado. Es como un empleado que aprendió su oficio hace veinte años y no se ha actualizado. Mantener los modelos al día es un trabajo constante.

También hay un círculo curioso: la IA genera contenido nuevo, y ese contenido puede usarse como datos para entrenar la siguiente IA. Es como fotocopiar fotocopias: cada copia pierde calidad. Los expertos ya hablan del riesgo de que las IA entrenadas con contenido de otras IA degraden sus resultados. La materia prima se contamina.

Conocer los datos de entrenamiento cambia la mirada: la IA no es una caja mágica, es una esponja que absorbe lo que le damos. Si le damos buenos datos, buenas respuestas; si le damos datos sucios, respuestas sucias. Por eso la responsabilidad de quién crea los modelos es enorme, y la curiosidad de quién los usa también.

En el próximo nivel cambiaremos de banda: dejaremos la Raíz y entraremos en el Tallo, viendo cómo aprenden las máquinas según el tipo de aprendizaje.

## 💡 Ejemplos prácticos
1. **En el supermercado:** el lector de precios de fruta por imagen se entrenó con miles de fotos etiquetadas por personas reales.
2. **En el banco:** el sistema de créditos se entrenó con datos históricos de préstamos; si esos datos tenían sesgos, el sistema los hereda.
3. **Con el médico:** un sistema que lee radiografías se entrenó con miles de placas anotadas por radiólogos.

## 🛠️ Actividad guiada
Paso 1. Cójase un papel y un bolígrafo.
Paso 2. Dibuje una tabla con cuatro columnas: "Ejemplo", "Color", "Forma", "¿Es manzana?".
Paso 3. Escriba seis filas: tres manzanas y tres peras, con características simples (rojo, verde, redonda, alargada...).
Paso 4. Repase: ¿qué características ve que separan manzanas de peras en sus ejemplos?
Paso 5. Añada una fila "rara": una manzana verde con forma alargada. ¿Qué cree que respondería el modelo?
Paso 6. Piense: ¿qué pasaría si sus seis ejemplos fueran todos manzanas rojas? El modelo no sabría reconocer peras.
Paso 7. Compare con el mundo real: en la vida hay más variedad que en sus ejemplos, por eso hacen falta miles de fotos.
Paso 8. Opcional: abra Kaggle (kaggle.com), busque "fruits" y vea cómo son los conjuntos de datos reales con miles de etiquetas.

## ✍️ Ejercicios de autoevaluación
1. ¿Qué es un conjunto de datos y qué contiene cada ejemplo?
2. ¿Quién hace la mayor parte del etiquetado de datos y por qué importa conocerlo?
3. ¿Qué es más importante, la cantidad o la calidad de los datos? ¿Por qué?
4. ¿Qué relación tienen los derechos de autor con los datos de entrenamiento?
5. ¿Qué riesgo tiene entrenar una IA con contenido generado por otras IA?

**Respuestas:** 1) Es una lista de ejemplos con su respuesta correcta (etiqueta) con la que se entrena un modelo. 2) Personas etiquetadoras, un trabajo real y a menudo invisible; conocerlo ayuda a entender de dónde sale la IA y a valorar su trabajo. 3) La calidad: un conjunto pequeño y limpio enseña mejor que uno gigante y sucio. 4) Los datos creados por otros (libros, artículos, fotos) tienen derechos; usarlos sin permiso es un debate abierto en tribunales. 5) Que el contenido se degrada, como fotocopiar fotocopias: los modelos entrenados con contenido de otras IA pierden calidad.

## ⚖️ Dimensión ética
Los datos de entrenamiento esconden decisiones éticas de gran alcance. ¿Se usaron datos de personas sin su consentimiento? ¿Se pagó justamente a los etiquetadores? ¿Los datos representan a toda la sociedad o solo a unos pocos? Detrás de cada modelo hay elecciones humanas que pueden discriminar o excluir. Exigir transparencia sobre los datos no es técnica: es exigir que la IA se construya con dignidad y justicia.

## 🔓 Herramientas abiertas
- **Kaggle** (kaggle.com): miles de conjuntos de datos públicos y gratuitos para explorar.
- **Google Dataset Search** (datasetsearch.research.google.com): buscador de conjuntos de datos públicos.
- **ImageNet** (image-net.org): el famoso conjunto de millones de imágenes clasificadas.
- **OpenML** (openml.org): plataforma abierta de datos de aprendizaje automático.
- **Common Crawl** (commoncrawl.org): el archivo abierto de páginas web usado para entrenar muchos modelos.

## 🧠 Resumen y puente
- Los datos de entrenamiento son la lista de ejemplos con etiquetas de la que la máquina aprende.
- Detrás hay un trabajo humano invisible: los etiquetadores.
- La calidad y la variedad importan más que la cantidad.
- Los datos tienen derechos de autor y suscitan dudas de privacidad.
- La IA es una esponja: absorbe lo que le damos.

En el nivel 10 entramos en la banda "Tallo": cómo aprenden las máquinas (supervisado, no supervisado y refuerzo).
