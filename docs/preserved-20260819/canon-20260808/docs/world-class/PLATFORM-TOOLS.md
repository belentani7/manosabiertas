# Herramientas basicas Windows, Android y Linux

Fecha: 2026-08-11

## Resultado

- 5.000 paginas HTML generadas.
- Windows: 2.000.
- Android: 1.500.
- Linux: 1.500.
- Manifest: `public/tool-guides/manifest.json`.
- Generador: `scripts/generate-platform-tools.mjs`.

## Limite funcional

Son guias offline y ayudantes de inspeccion segura. No sustituyen herramientas nativas ni ejecutan cambios administrativos. Cada pagina combina plataforma, herramienta, objetivo y contexto; comparte CSS y JavaScript locales para limitar peso.

## Comandos

```powershell
npm run tools:generate
npm run tools:verify
```

La salida se ignora en Git porque contiene 5.000 archivos mecanicos. El generador queda versionado y reproducible. El build principal no los incluye automaticamente: deben publicarse como paquete separado despues de una revision de contenido, seguridad y SEO.

## Aceptacion

- exactamente 5.000 archivos HTML
- IDs y rutas unicos en el manifest
- 2.000/1.500/1.500 por plataforma
- CSS y JavaScript sin servicios externos
- navegacion por teclado y estado accesible
- progreso guardado solo en el navegador
- comandos de inspeccion o pasos de configuracion basicos
