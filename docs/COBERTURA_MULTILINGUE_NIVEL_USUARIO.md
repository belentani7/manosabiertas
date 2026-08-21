# Cobertura multilingüe del aprendizaje de nivel usuario

La interfaz de Manos Abiertas declara 39 idiomas. Esto no debe confundirse con la publicación editorial completa del currículo: el contenido maestro se mantiene en castellano y requiere revisión humana antes de presentar una traducción como material educativo verificado.

| Estado | Idiomas | Uso actual |
|---|---|---|
| Maestro disponible | Español | Fuente visible del currículo de 1.000 puntos. |
| Borrador localizado pendiente de revisión | Árabe, inglés, francés, rumano y chino | Los archivos A1–A10 existen y se validan mediante script; no se muestran como revisión humana completada. |
| Interfaz disponible sin currículo localizado confirmado | Resto de idiomas de la plataforma | Deben recibir revisión y adaptación pedagógica antes de publicar contenidos de formación. |

El comando `npm run verify:curriculum` comprueba que cada borrador localizado contenga manifiesto correcto, las diez áreas y al menos una lección de nivel 1 en A1. Este control evita anunciar como completo un idioma que aún no cuenta con materiales suficientes para una persona usuaria.
