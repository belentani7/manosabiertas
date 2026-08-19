# Ledger de mejoras aplicadas

Fecha de corte: 2026-08-12  
Fuente: diff sin commit del checkout canónico frente a `HEAD` (`6a413cc`).

## Resultado

- Total registrado: **41 mejoras reales**.
- `verified`: se completa desde el JSONL tras ejecutar el verificador.
- `applied`: se completa desde el JSONL tras ejecutar el verificador.
- No se cuentan los 39 idiomas, las seis APIs, los contextos de usuario ni cada test como mejoras repetidas.
- Los 3000 casos de la matriz siguen siendo propuestas de cobertura; no son 3000 implementaciones.
- Los 5000 HTML son un único sistema generador y un único paquete funcional, no 5000 mejoras.

La fuente canónica es [`applied-improvements.jsonl`](./applied-improvements.jsonl). Cada línea contiene:

- `id`: secuencia estable `MA-APPLIED-NNN`.
- `descripcion`: comportamiento o artefacto concreto, contado una sola vez.
- `categoria`: dominio principal de la mejora.
- `archivos`: archivos existentes y presentes en el diff actual.
- `evidencia`: comando, test o inspección con resultado explícito.
- `estado`: `verified` solo con prueba o comando exitoso; `applied` cuando la evidencia disponible es inspección o existe un gate pendiente.

## Verificación

```powershell
node scripts/verify-applied-improvements.mjs
```

El verificador comprueba:

1. JSONL válido y esquema exacto.
2. IDs únicos, secuenciales y estados permitidos.
3. Categorías y tipos de evidencia conocidos.
4. Rutas relativas seguras, existentes y pertenecientes al diff actual.
5. Evidencia no vacía y prueba ejecutable para cada estado `verified`.
6. Descripciones idénticas o con similitud semántica básica excesiva.
7. Prohibición de contar el propio ledger como mejora.

## Gate global pendiente

`node scripts/test-core.mjs` produjo 27 tests aprobados de 28. El scanner estático de accesibilidad detectó 27 hallazgos: cuatro P0 por controles sin etiqueta asociada y 23 P1, principalmente por objetivos menores de 44 píxeles. Por ello:

- la existencia del scanner consta como `applied`;
- no se declara accesibilidad global verificada;
- no se declara el proyecto world-class;
- este ledger no autoriza commit, push ni deploy.

## Límites

- `verified` prueba la mejora descrita con el alcance de la evidencia indicada, no la calidad total del proyecto.
- Inspección estática no sustituye navegación real, lector de pantalla, E2E, auditoría humana ni validación de URLs externas.
- Los catálogos GitHub y de datos son candidatos de investigación; no equivalen a dependencias adoptadas ni datos publicados.
- Los recursos mantienen 39 fichas verificadas y 3647 pendientes a la fecha del corte.
