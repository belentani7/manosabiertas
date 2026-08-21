# Interoperabilidad CAD/BIM abierta en Manos Abiertas

## Propósito

Manos Abiertas no intenta reemplazar una licencia de software profesional ni abrir formatos cerrados sin autorización. Su función educativa es ayudar a las personas a comprender el camino correcto entre un proyecto profesional y una maqueta de comunicación: **conservar el original, crear una copia autorizada de intercambio, retirar datos sensibles y validar el resultado con una persona competente**.

## Ruta recomendada

| Necesidad | Formato de intercambio | Uso dentro de Manos Abiertas | Límite importante |
|---|---|---|---|
| Intercambiar información BIM | `.ifc` | Próxima fase: inspección y validación Open BIM con `web-ifc`. | No sustituye una comprobación de modelo ni una certificación. |
| Presentar una maqueta 3D en web | `.glb` | Visor local actual, sin subida al servidor. | La maqueta puede perder propiedades BIM y no sirve para calcular. |
| Compartir una geometría sencilla | `.obj` o `.stl` | Visor local actual, sin subida al servidor. | La escala, materiales y metadatos deben verificarse. |

## Lo que hace el visor actual

El visor acepta **GLB, OBJ y STL** de hasta 50 MB y los procesa dentro del navegador. No ofrece conversión desde formatos propietarios, no sube archivos a la plataforma y no interpreta el contenido como una decisión de ingeniería. La selección de estos formatos permite un primer uso educativo y seguro con copias de presentación autorizadas.

## Próxima evolución técnica realista

La siguiente integración debe ser un lector IFC basado en `web-ifc` y una interfaz que muestre propiedades, capas, incidencias y avisos de validación. Antes de incorporarlo se deben probar modelos pequeños, medir memoria en móviles modestos y revisar licencia, vulnerabilidades y accesibilidad.

> Una herramienta de IA de imagen-a-3D puede servir para crear una maqueta conceptual, pero **no debe reconstruir, validar ni sustituir un modelo arquitectónico o de ingeniería**. Para proyectos reales, el origen debe ser un archivo exportado legítimamente desde la herramienta del profesional.

## Fuentes

1. [buildingSMART International — Industry Foundation Classes (IFC)](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)
2. [ThatOpen — engine_web-ifc](https://github.com/ThatOpen/engine_web-ifc)
3. [Khronos — glTF](https://www.khronos.org/gltf/)
4. [Three.js Editor](https://threejs.org/editor/)
5. [Blender Manual — Importing and Exporting Files](https://docs.blender.org/manual/en/latest/files/import_export/index.html)
