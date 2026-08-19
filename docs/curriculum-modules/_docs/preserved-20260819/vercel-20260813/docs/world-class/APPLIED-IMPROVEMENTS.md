# Ledger de mejoras aplicadas

Fecha de corte: 2026-08-13
Fuente: ledger versionado y workspace Git verificable del checkout publicado.

## Resultado

- Total registrado: **155 mejoras reales**.
- `verified`: se completa desde el JSONL tras ejecutar el verificador.
- `applied`: se completa desde el JSONL tras ejecutar el verificador.
- No se cuentan los 39 idiomas, las seis APIs, los contextos de usuario ni cada test como mejoras repetidas.
- Los 3000 casos de la matriz siguen siendo propuestas de cobertura; no son 3000 implementaciones.
- Los 5000 HTML son un único sistema generador y un único paquete funcional, no 5000 mejoras.

La fuente canónica es [`applied-improvements.jsonl`](./applied-improvements.jsonl). Cada línea contiene:

- `id`: secuencia estable `MA-APPLIED-NNN`.
- `descripcion`: comportamiento o artefacto concreto, contado una sola vez.
- `categoria`: dominio principal de la mejora.
- `archivos`: archivos existentes y presentes en el workspace Git, estén ya versionados o pendientes de commit.
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
4. Rutas relativas seguras, existentes y visibles para Git en clones limpios o trabajo pendiente.
5. Evidencia no vacía y prueba ejecutable para cada estado `verified`.
6. Descripciones idénticas o con similitud semántica básica excesiva.
7. Prohibición de contar el propio ledger como mejora.

## Estado global actual

`npm run test:core` produjo 69 tests aprobados de 69 y generó primero el paquete reproducible de 5.000 guías. El quinto lote centraliza contratos estrictos para seis rutas, valida los 39 idiomas, limita presupuestos agregados y minimiza el payload CV. El último build publicado generó 441 páginas estáticas y ocho rutas API; este lote debe repetir build y runtime antes de publicarse.

Estos resultados habilitan continuar la auditoría; no declaran por sí solos conformidad WCAG completa ni el objetivo world-class, y no sustituyen revisión visual, navegador, secretos, dependencias y estado remoto del despliegue.

## Límites

- `verified` prueba la mejora descrita con el alcance de la evidencia indicada, no la calidad total del proyecto.
- Inspección estática no sustituye navegación real, lector de pantalla, E2E, auditoría humana ni validación de URLs externas.
- Los catálogos GitHub y de datos son candidatos de investigación; no equivalen a dependencias adoptadas ni datos publicados.
- Los recursos mantienen 39 fichas verificadas y 3647 pendientes a la fecha del corte.
