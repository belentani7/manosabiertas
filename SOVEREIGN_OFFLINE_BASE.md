# Base soberana local de Manos Abiertas

## Qué queda disponible sin servidor

La aplicación contiene localmente el currículo maestro de **1.000 puntos en español**, organizado en diez áreas y cargado durante la compilación. También incluye los catálogos estáticos de cursos, derechos, contactos, herramientas, asistentes offline, iconos, capturas, logotipo, manifiesto PWA y la Estación de Herramientas nativa con CV Maker, práctica de IA y simuladores seguros de Linux y Windows.

El archivo `src/data/sovereign/manifest.json` describe la base local. `public/offline/asset-manifest.json` registra las huellas SHA-256 de los archivos locales para detectar cambios accidentales. Los datos de progreso se mantienen en el dispositivo cuando la aplicación se usa sin cuenta.

## Qué sigue siendo opcional y remoto

Las llamadas a proveedores de IA, la sincronización de comunidad y los enlaces a recursos externos son funciones opcionales. Si no existe conexión o una clave de proveedor, el tutor local de la aplicación sigue respondiendo con contenido de respaldo. Los enlaces externos se conservan como referencias de consulta y no son necesarios para leer el currículo local.

Los vídeos no forman parte de la base soberana inicial porque tienen un coste de almacenamiento, derechos de redistribución y mantenimiento superior. Podrán incorporarse después como paquetes locales independientes cuando se verifiquen su licencia, idioma, accesibilidad y fecha de revisión.

## Estado editorial y actualización responsable

El currículo generado debe considerarse una **base educativa local pendiente de revisión humana**, especialmente en derecho, extranjería, salud, vivienda, empleo regulado y trámites administrativos. La aplicación no debe presentar una copia local como sustituto de una fuente oficial vigente. Para cada actualización se deben registrar la fecha, la fuente oficial consultada, el responsable de revisión, el idioma revisado y los cambios realizados.

Las traducciones no deben marcarse como definitivas hasta pasar una revisión por hablantes cualificados y una comprobación pedagógica. El objetivo de la soberanía local es evitar una dependencia técnica de servidores, no ocultar la necesidad de actualizar los hechos que cambian con el tiempo.

## Comprobaciones locales

```bash
npm run lint
npx tsc --noEmit --skipLibCheck
npm run build
```

Tras compilar, la PWA entrega los catálogos importados en el bundle y los archivos estáticos de `public/`. La disponibilidad de una función concreta sin red depende de que esa función utilice el catálogo local; los servicios remotos opcionales deben degradarse sin bloquear la navegación.

**Autoría del proyecto:** Pedro Belentani · Manos Abiertas.
