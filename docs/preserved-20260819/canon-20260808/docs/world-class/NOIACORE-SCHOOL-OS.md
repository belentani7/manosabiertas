# NOIACORE School OS

Fecha: 2026-08-12
Estado: arquitectura aprobada para implementacion gradual
Fuente de referencia: `C:\Users\USER\Downloads\noiacore-os`

## Decision de producto

`Manos Abiertas` y `NOIACORE OS` cumplen funciones distintas:

- `Manos Abiertas` es la escuela social publica: aprendizaje, derechos, empleo y recursos.
- `NOIACORE School OS` es el plano de control privado para operar la escuela.
- Ningun dato privado de administracion aparece en la experiencia publica.
- La identidad visual de NOIACORE no reemplaza la accesibilidad ni la claridad de Manos Abiertas.

## Capacidades del plano de control

1. Estado editorial: cursos, idiomas, recursos, responsables y caducidades.
2. Confianza: fuente, fecha de verificacion, evidencia y proxima revision.
3. Calidad: build, tipos, lint, pruebas, accesibilidad, rendimiento y seguridad.
4. Operacion: incidencias, colas de revision, alertas y trazabilidad.
5. Resultados: acciones utiles completadas sin perfilar personas vulnerables.
6. Memoria local: preferencias de la propietaria y ultimo contexto operativo.

## Leyes conservadas de NOIACORE

- Tecnologia invisible: el control se percibe como espacio y estado, no como panel generico.
- Silencio y espacio: negro OLED, jerarquia estricta y una decision principal por escena.
- Estado sobre pagina: continuidad local sin recargas duras.
- Modularidad aislada: datos, render, telemetria y acciones se comunican por contratos.
- Rendimiento adaptativo: efectos opcionales y experiencia completa a 60 fps en equipos modestos.

## Limites obligatorios

- Telemetria agregada y minimizada; nunca mensajes, CV ni datos sensibles en analitica.
- Consentimiento explicito antes de enviar contenido a proveedores de IA.
- Acciones destructivas, publicacion, gasto y cambios de permisos requieren confirmacion humana.
- No se promete moderacion, verificacion o disponibilidad sin evidencia almacenada.
- Canvas es decorativo; toda accion existe tambien como HTML semantico y teclado.
- `prefers-reduced-motion`, contraste AA, foco visible y navegacion movil son gates.

## Arquitectura

```text
Manos Abiertas publica
  -> contratos de contenido y confianza
  -> API de lectura minimizada

NOIACORE School OS privado
  -> Event Bus
  -> memoria local cifrable
  -> catalogo editorial
  -> cola de verificacion
  -> matriz de calidad
  -> telemetria agregada

Fuentes externas
  -> ingesta en staging
  -> validacion humana
  -> publicacion versionada
```

## Primer corte implementable

1. Matriz local de gates con evidencia y fecha.
2. Bandeja de recursos caducados o sin fuente.
3. Estado de cobertura por idioma prioritario.
4. Registro de builds, auditorias y regresiones.
5. Modo de presentacion visual inspirado en el runtime original, sin copiar sus datos ficticios.

## Criterios de aceptacion

- El control privado no se enlaza desde rutas publicas.
- Cada indicador abre su evidencia verificable.
- La escuela sigue siendo util con JavaScript reducido, red lenta y movimiento desactivado.
- Ningun proveedor externo recibe PII por defecto.
- Un fallo de Canvas no bloquea ninguna tarea operativa.
- Los cambios editoriales conservan autor, fecha, fuente y rollback.
