# Módulo 1: Introducción a la Inteligencia Artificial — Nivel 23
## Idioma: ES · Dificultad: Fruto
## Tiempo estimado: 6 horas

## 🎯 Objetivo del nivel
- Entender qué es un agente autónomo y cómo se diferencia de un asistente.
- Conocer los componentes: objetivo, herramientas, memoria, bucle de acción.
- Identificar cuándo un agente es útil y cuándo es un riesgo.
- Aprender a supervisar un agente sin dejar que actúe solo sin control.
- Reflexionar sobre la responsabilidad cuando la IA actúa por sí misma.

## 📖 Vocabulario esencial
| Término | Explicación simple |
|---|---|
| Agente autónomo | Una IA que recibe un objetivo y decide ella sola los pasos para lograrlo. |
| Bucle de acción | El ciclo: observar, planificar, actuar, aprender, repetir. |
| Herramientas | Lo que el agente puede usar: buscador, calculadora, correo, código. |
| Memoria | Lo que el agente recuerda de lo que ha hecho y visto. |
| Supervisión humana | Una persona que revisa y aprueba lo que el agente hace. |
| Alineación | Que el agente haga lo que queremos, no solo lo que pedimos literalmente. |

## 📚 Lección principal
Hasta ahora la IA esperaba nuestra orden: preguntábamos, ella respondía. Los agentes autónomos dan un paso más: les damos un objetivo y ellos deciden qué hacer, en qué orden, con qué herramientas, y siguen hasta terminarlo. Es como contratar a un becario que no necesita que le digas cada paso, solo el resultado que quieres.

Un agente tiene cuatro piezas. Primera: el objetivo, lo que queremos lograr ("busca tres recetas de lentejas sin carne y envíamelas por correo"). Segunda: las herramientas, lo que puede usar (buscador web, correo, calculadora, Python). Tercera: la memoria, lo que recuerda para no repetir errores. Cuarta: el bucle de acción, el motor: observa qué pasa, planifica el siguiente paso, actúa, aprende del resultado, y repite.

Veamos un ejemplo. Le dices a un agente: "organiza mi viaje a Madrid la semana que viene". El agente busca trenes, compara precios, mira hoteles, revisa el clima, reserva lo mejor y te manda el itinerario. Tú solo diste el objetivo; el agente hizo el resto. Suena maravilloso, y lo es, pero tiene riesgos.

El primer riesgo es que el agente se equivoque. Puede reservar el tren equivocado, un hotel que no existe, o gastar más de la cuenta. Por eso la supervisión humana es obligatoria: el agente propone, la persona dispone. Antes de reservar, el agente te enseña la opción y tú dices sí o no. Sin ese freno, un error del agente es un error tuyo.

El segundo riesgo es la alineación. Pides "quita los correos viejos" y el agente borra también los importantes porque "eran viejos". Hiciste lo que pediste literalmente, no lo que querías. La alineación es el problema central de la IA avanzada: asegurar que el agente entiende la intención, no solo la orden. Por eso los objetivos deben ser precisos y con límites: "archiva correos de hace más de un año que no tengan la etiqueta 'importante'".

El tercer riesgo es la opacidad. El agente hace muchas cosas en segundo plano y tú no ves el proceso. Si algo falla, no sabes por qué. Los buenos agentes dejan rastro: un registro de qué buscaron, qué decidieron, por qué. Exija trazabilidad: si no se ve qué hizo, no se confía.

El cuarto riesgo es la dependencia. Si delegas todo en agentes, pierdes la práctica y el criterio. Saber buscar, comparar, decidir es una habilidad que se oxida si no se usa. Use agentes para lo tedioso, pero mantenga el control de lo importante.

¿Cuándo usar un agente? Para tareas repetitivas, con pasos claros, bajo supervisión: "cada lunes resume las actas y envíalas", "vigila el precio de este producto y avísame si baja". ¿Cuándo NO? Para decisiones de salud, dinero, relaciones, o cuando el error duele. Ahí decide usted.

La responsabilidad siempre es humana. El agente es una herramienta potente, pero quien pone el objetivo, quien da las herramientas, quien supervisa y quien responde ante las consecuencias es la persona. No hay "el agente lo hizo". Usted lo hizo, usando un agente.

En el próximo nivel entraremos en la IA científica: cómo la IA está cambiando la forma de hacer ciencia, y el problema de la alineación a gran escala.

## 💡 Ejemplos prácticos
1. **Agente de compras:** objetivo "compra la lista del supermercado al mejor precio"; herramientas: webs de supermercados, comparador; supervisión: tú apruebas el carrito antes de pagar.
2. **Agente de investigación:** objetivo "busca 10 estudios sobre el sueño en mayores de 60"; herramientas: Google Scholar, resumidor; supervisión: tú revisas la lista antes de usarla.
3. **Agente de calendario:** objetivo "busca huecos para la reunión del club"; herramientas: calendario, correo; supervisión: tú eliges la hora final.

## 🛠️ Actividad guiada
Paso 1. Elija una tarea repetitiva suya (buscar precios, resumir correos, buscar citas).
Paso 2. Escriba el objetivo con límites claros: qué sí, qué no, cuánto como máximo.
Paso 3. Pruebe un agente sencillo: use ChatGPT con "GPT personalizado" o una herramienta como AutoGPT (versión web gratuita).
Paso 4. Déle el objetivo y observe: ¿qué busca? ¿qué decide? ¿qué propone?
Paso 5. Antes de que ejecute la acción final (comprar, enviar, borrar), deténgalo y revise.
Paso 6. Anote: ¿ahorró tiempo? ¿se equivocó en algo? ¿qué límite faltó?
Paso 7. Reescriba el objetivo con los límites aprendidos y pruébelo otra vez.
Paso 8. Decida: ¿esta tarea merece un agente o la hace usted mejor?

## ✍️ Ejercicios de autoevaluación
1. ¿Cuáles son las cuatro piezas de un agente autónomo?
2. ¿Qué es el bucle de acción y para qué sirve?
3. ¿Por qué es obligatoria la supervisión humana?
4. ¿Qué es la alineación y por qué falla a veces?
5. ¿Quién es responsable si un agente comete un error?

**Respuestas:** 1) Objetivo, herramientas, memoria, bucle de acción. 2) El ciclo observar-planificar-actuar-aprender-repetir; es el motor que hace que el agente avance solo. 3) Porque el agente puede equivocarse, gastar de más o borrar lo importante; la persona debe aprobar la acción final. 4) Es que el agente haga lo que queremos, no solo lo que pedimos literalmente; falla cuando el objetivo es vago o sin límites. 5) La persona que puso el objetivo, dio las herramientas y supervisó: la responsabilidad siempre es humana.

## ⚖️ Dimensión ética
Un agente autónomo amplifica el poder de quien lo usa. Puede hacer mucho bien (liberar tiempo, ayudar a quien no sabe) y mucho daño (errores en cadena, opacidad, pérdida de habilidad). Nunca use un agente para decidir por otros, para actuar en nombre ajeno sin permiso, ni para eludir su responsabilidad. La supervisión no es opcional: es el freno que evita que un error pequeño se convierta en grande.

## 🔓 Herramientas abiertas
| Herramienta | Para qué sirve | Dónde conseguirla |
|---|---|---|
| GPT personalizados (ChatGPT) | Crear agentes con instrucciones y herramientas | chat.openai.com |
| Gemini Gems | Agentes personalizados de Google | gemini.google.com |
| AutoGPT (web) | Agentes de código abierto para probar | github.com/Significant-Gravitas/AutoGPT |
| LangChain | Librería para construir agentes (avanzado) | github.com/langchain-ai/langchain |

## 🧠 Resumen y puente
- Un agente autónomo recibe un objetivo y decide los pasos solo.
- Cuatro piezas: objetivo, herramientas, memoria, bucle de acción.
- Supervisión obligatoria: el agente propone, la persona dispone.
- Alineación: objetivo preciso con límites para que haga lo que queremos.
- Responsabilidad siempre humana.
En el nivel 24 veremos cómo la IA está transformando la ciencia y el reto de la alineación a gran escala.