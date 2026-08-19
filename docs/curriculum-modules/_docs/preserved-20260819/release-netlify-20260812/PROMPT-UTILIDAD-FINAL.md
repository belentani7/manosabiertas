# PROMPT-UTILIDAD-FINAL

> La tercera pieza de la serie.
> - `MASTER-PROMPT-PERFECTO.md` la hace **correcta** (técnicamente impecable).
> - `PROMPT-MINIMAL-EXIGENTE.md` la hace **verdadera** (todo demostrable con evidencia).
> - Este la hace **útil**: que un inmigrante recién llegado a España, con nivel "solo sé usar WhatsApp", resuelva sus trámites reales **solo, sin ayuda y sin llamar a nadie**.
>
> Los otros dos prompts optimizan la máquina. Este optimiza la vida de la persona que la usa.

---

## 1. La persona (una sola, la de verdad)

Ponle un nombre, p. ej. **Amina**. Cada pantalla, cada frase, cada botón pasa por ella antes de aceptarse.

- Llegó a España hace 2 semanas. Habla su idioma materno y 0–20 palabras de español.
- Su único recurso digital es WhatsApp: manda audios, no rellena formularios de 8 campos.
- En juego está su vida real: empadronarse, NIE, tarjeta sanitaria, casa, trabajo, colegio, entender una carta oficial, urgencias.
- Si no entiende algo en 10 segundos, abandona y pregunta a un conocido. Ese conocido es el "soporte técnico" real de la app.
- Tiene miedo, prisa y desconfianza. La app debe transmitir: "aquí está todo, en tu idioma, paso a paso".

## 2. La ecuación de utilidad

> Utilidad = (Tareas completadas sin ayuda) ÷ (Tiempo + Frustración + Llamadas de socorro)

Cada función debe mejorar esa fracción. Si no la mejora, se corta. Sin excepción.

## 3. Jobs-to-be-done: los trabajos reales que la app debe hacer

Para cada uno: un **flujo de éxito de ≤ 5 pasos** y un **criterio de éxito medible**. La app se diseña alrededor de estos trabajos, no al revés.

1. **"Llegué ayer y no sé por dónde empezar."** → Guía ordenada con lo primero primero (empadronamiento → NIE → sanidad → colegio). Criterio: el usuario identifica su siguiente paso en ≤ 2 pantallas.
2. **"Necesito un papel y no sé cuál."** → Encontrar el trámite por la necesidad (casa, trabajo, colegio, médico), nunca por el nombre oficial. Criterio: de "necesito trabajo" a la lista de papeles en ≤ 3 pantallas.
3. **"Tengo que entender una carta oficial."** → Explicación humana de cada documento: qué significa, qué plazo tienes, qué llevas, a dónde vas. Criterio: el usuario dice en ≤ 30 segundos "¿tengo que hacer algo?" correctamente.
4. **"Necesito trabajo."** → Acción concreta y realista: dónde buscar, qué papeles pide cada tipo de empleador, cómo detectar estafas de empleo. Criterio: plan de acción en ≤ 3 pasos.
5. **"Mi hijo no tiene plaza escolar."** → Ruta real: empadronamiento, matrícula, fechas, documentos. Criterio: lista de documentos completa sin saltos.
6. **"Estoy en urgencias / emergencia."** → Qué hacer, qué decir, números, derechos (sanidad universal). Criterio: número correcto visible en la primera pantalla de emergencia.
7. **"Me llegó una cita de extranjería."** → Qué llevar, qué preguntan, qué significa cada resolución (favorable / archivo / expulsión). Criterio: el usuario llega preparado, sin sorpresas.
8. **"No hablo el idioma y tengo que hablar con un funcionario."** → Frases hechas bilingües + a quién pedir intérprete o mediador. Criterio: frase correcta para su situación en ≤ 1 toque.

## 4. Reglas de utilidad (por encima de todo lo demás)

- Una sección, dato, botón o animación que **no ayude a completar un job-to-be-done** se elimina o se degrada a secundaria.
- Los datos placeholder se marcan como tales **de forma visible**. Mejor 3 datos reales y verificados que 30 inventados.
- Cada dato factual lleva su **fuente oficial visible** (sede electrónica, BOE, SEPE, Seguridad Social, ayuntamiento) para que el usuario pueda comprobarlo.
- Cero jerga. Test de comprensión: una persona sin contexto entiende cada frase a la primera lectura.
- Los trámites críticos funcionan **offline**: la red de datos puede fallar justo cuando más se necesita.
- Cuando el trámite es crítico, **el audio vale más que el texto**: botón de "escuchar" en los pasos clave.

## 5. Evidencia de utilidad (pruebas obligatorias)

"No es claro" no se discute: se demuestra con recorridos. Cuatro pruebas, todas con registro.

- **PRUEBA A — Tarea sin ayuda.** Una persona real (nunca el desarrollador, idealmente con bajo perfil digital) completa 5 jobs-to-be-done sola, cronometrada, sin indicaciones. Registrar: tarea, pasos tocados, tiempo, ¿necesitó ayuda? ¿dónde se atascó?
- **PRUEBA B — Comprensión.** Cada frase clave reescrita a nivel de calle. Verificar vocabulario de forma consciente: la app dice "NIE" y explica qué es, no cambia de término a mitad de flujo.
- **PRUEBA C — El desconocido.** Alguien que nunca ha visto la app abre una pantalla al azar y dice en 10 segundos qué debe hacer ahí. Si duda, la pantalla falla el test.
- **PRUEBA D — Idiomas reales.** No traducción literal: frases naturales validadas por hablantes nativos de al menos los 5 idiomas principales (es, en, fr, ar + el que corresponda al mayor flujo migratorio del área).

## 6. Métricas de utilidad (esto es lo que se mide)

- Tiempo hasta la primera acción útil en la primera visita: **< 15 segundos**.
- Pantallas para resolver el trámite más común: **≤ 3**.
- Frases sin jerga: **100%**.
- Datos factuales con fuente oficial visible: **100%**.
- Trámites críticos accesibles offline: **100%**.
- "Atrás" siempre visible y botones de tamaño táctil real (≥ 44 px): **sí, en todas las pantallas**.
- Audios en pasos críticos: **sí**.

## 7. La trampa que debes evitar

Utilidad **no es más funciones**: es menos fricción para los trabajos que importan.
Cada pantalla extra es una oportunidad de perder a la persona. Si una pantalla no avanza un job-to-be-done, se fusiona o se elimina.
Un menú de 12 secciones es una derrota. Un menú de 3 caminos claros ("Estoy llegando", "Necesito trabajo", "Me han escrito") es una victoria.

## 8. Definición de ÚTIL (todas las condiciones, todas)

1. Una persona real completa los 5 jobs-to-be-done críticos **sin ayuda**, en **≤ 3 pantallas** cada uno, y lo registras con evidencia.
2. Cada dato factual tiene **fuente oficial visible**.
3. Los 5 idiomas principales pasan el **test de comprensión** (frase natural, no traducción literal).
4. Los trámites críticos **funcionan offline**.
5. No queda **ninguna sección sin job-to-be-done asignado**.

## 9. Si no hay usuarios reales disponibles

Sigue la regla de la honestidad: simula con una persona real que NO sea desarrollador ni conozca la app (un amigo, un familiar). Si ni eso es posible, **decláralo por escrito** y narra cada recorrido como si describieras una grabación: "el usuario toca X, duda en Y, entiende Z". No inventes resultados de testeo.

---

## Recordatorio final

Los tres prompts juntos: **correcto** (técnica), **verdadero** (evidencia) y **útil** (la persona).
Si un trámite se resuelve con una llamada menos, una hora menos de angustia y una cita menos perdida: la app funciona.
Si es rápidísima y perfecta pero nadie sabe qué hacer con ella: no funciona.
