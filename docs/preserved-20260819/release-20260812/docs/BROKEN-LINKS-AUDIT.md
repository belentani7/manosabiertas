# Auditoría de enlaces rotos · Manos Abiertas

Última revisión: 15 agosto 2026. Metodología: escaneo GET con `urllib` (User-Agent Mozilla, 12 hilos) y verificación manual con `webfetch`/`curl` para descartar falsos positivos (anti-bot, timeouts, bloqueos). Investigación de reemplazos con agentes paralelos (websearch + verificación 200).

## Resumen final

| Estado | Archivo | URLs corregidas |
|---|---|---|
| Corregido | `open-source-hub.ts` | 4 |
| Corregido | `external-courses.ts` | 17 |
| Corregido | `resources.ts` | 140 |
| Corregido | `rights-guide.ts` | 33 |
| Eliminado (DELETE) | ambos | 7 |

**Resultado: 0 URLs con HTTP 404 en todo el proyecto.** (De 429 fallos iniciales → 233 restantes, todos falsos positivos: 403 anti-bot, timeouts, redirects, errores de servidor transitorios.)

## Corregido: open-source-hub.ts (4)

- Repositorios GitHub reasignados a forks/equivalencias activos: `cloudcommunity/Free-Certifications` → `freeCodeCamp/freeCodeCamp`, `OPMatters/computer-science-open-textbooks` → `EbookFoundation/free-programming-books`, `platzi/git-github-practico` → `platzi/git-github`, etc.

## Corregido: external-courses.ts (17)

- Coursera: co-10 → `https://www.coursera.org/learn/introduction-tensorflow`
- edX: ex-4 → `https://www.edx.org/learn/grammar/the-university-of-queensland-english-grammar-and-style`; ex-5 → `https://www.edx.org/learn/python`
- Microsoft: ms-1 → `https://support.microsoft.com/es-es/excel/get-started/overview-of-formulas-in-excel`; ms-3 → `https://learn.microsoft.com/es-es/training/powerplatform/power-bi`; ms-4 → `https://learn.microsoft.com/es-es/training/github/`; ms-5 → `https://learn.microsoft.com/es-es/training/m365`
- AWS: aw-3 → `https://explore.skillbuilder.aws/learn/courses/11458/aws-cloud-quest-cloud-practitioner`
- AulaFácil (nueva estructura `-c{cat}-t{id}`): Excel 2010, Word 2010, PowerPoint 2010, Inglés A1, Español para Extranjeros, Contabilidad Básica, Marketing Digital, Photoshop CS, Access 2000 Básico
- Mecanografía: proveedor "Mecanografía Online" → `https://www.mecanografia-online.com/`
- SEPE (15 sp-*): URL `HomeSepe/SepeCiudadano/Formacion.html` muerta → `https://sede.sepe.gob.es/portalSede/es/procedimientos-y-servicios/personas/formacion`
- UNED (5 un-*): `ocw.innova.uned.es` con certificado inválido → `https://ocw.cursosvirtuales.uned.es`
- Miríadax (10 mx-*, plataforma cerrada en 2025): remapeado a Coursera con cursos equivalentes verificados; provider del helper `m()` → Coursera

## Corregido: resources.ts (140) + rights-guide.ts (33)

Rediseños de portales gubernamentales y servicios. Mapeo por dominio:

### Gobierno central
- **Sanidad (14)**: rutas `areas/ciudadania/*` → nueva estructura (`servCiudadanos`, `saludDigital/tarjetaSanitariaSNS`, `promocionPrevencion`, `alertasEmergenciasSanitarias/nCov`, `observatoriosaludmujeres`, `sede.mscbs.gob.es`). DELETE: citaPrevia, embarazo.
- **Justicia (9)**: `cs/Satellite/*` y rutas viejas → nuevo portal (`ciudadania/nacionalidad/que-es-nacionalidad/*`, `tramites/asistencia-juridica-gratuita`, `estado-civil/registro-civil`, `cita-previa`). DELETE: servicios-sociales.
- **Migraciones/Inclusión (11)**: `extranjeros.inclusion.gob.es/*` → `inclusion.gob.es/web/migraciones/*` (arraigo, modelos-generales, ciudadano-UE, reagrupación, vivir-en-espana, OPI `/w/`). OAR → `interior.gob.es` (403 anti-bot pero oficial).
- **SEPE (10)**: `HomeSepe/*` → nueva web (`prestaciones-desempleo/*`, `formacion-trabajo`, `sede.sepe.gob.es/portalSede`). RAI suprimida 2024 → subsidio.
- **AEAT (8)**: rutas `AEAT.internet/*` muertas → Sede Electrónica (`Sede/Renta.html`, `Sede/no-residentes.html`, `procedimientoini/GF00` (modelo 210 IRNR), `G414` (303), `G322` (censo/NIF), `Sede/iva.html`).
- **BOE (9)**: `buscar/act.php?id=...` → identificadores ELI (`/eli/es/lo/2000/01/11/4/con`, etc.). `LEYG-19600521-107` sin identificar → buscador general.
- **IMSERSO (3)**: nueva web (`pnc-prestaciones-subvenciones`, `autonomia-personal-dependencia`). DELETE: atenciontemprana.pdf.
- **Consumo (2)**: `consumo.gob.es` → `dsca.gob.es` (sistema arbitral). DELETE: OCIC.
- **Violencia género (3)**: `informacionUtil/*` → `informacion-3/recursos/telefono016`.
- **Otros**: Cl@ve (`clave_Home`), DGT → home, Defensor del Pueblo → home, Exteriores → `es/`, IPYME → `ipyme.org/`, Catastro → `sedecatastro.gob.es`, Policía → home, sede policía (puerto 38089 eliminado), sede administraciones públicas → sede policía, administración.gob.es → home, clave.gob.es.

### Comunidades autónomas
- **Aragón (7)**: `aragon.es/-/temas` → `aragon.es/temas/*` (consumo, empleo-empresa, servicios-sociales/{inmigracion,juventud}, igualdad-no-discriminacion, vivienda-urbanismo).
- **Asturias (7)**: → `asturias.es/temas/*` (comercio-consumo, salud, vivienda-territorio, accion-social-e-igualdad) + portales `juventud.asturias.es`, `iam.asturias.es`.
- **Cantabria (6)**: → `economia`, `trabajo-empleo`, `consejeria-de-empleo-y-politicas-sociales`, `mujerdecantabria.es`, `viviendadecantabria.es`, `serviciossocialescantabria.org`.
- **Castilla-La Mancha (7)**: portales `consumo.`/`bienestarsocial.`/`empleoyformacion.`/`vivienda.`/`juventud.`/`temas/igualdad`/`cooperacion-actuaciones`.
- **Navarra (3)**: Plan Acogida (gobiernoabierto), `igualdadnavarra.es` (INAI), `derechos-sociales`.
- **Euskadi (6)**: → departamentos (`departamento-trabajo-empleo`, `acogida-integracion`), `emakunde.euskadi.eus`, `temas/-/salud`, `serviciossociales`, `temas/-/vivienda`.
- **JCyL (4)**: Plantilla100Detalle muertas → `www.jcyl.es` (portal estable verificado 200; subdominios familia/juventud dan 503 persistente).
- **Andalucía (6)**: consejerías renombradas (`inclusionsocialjuventudfamiliaseigualdad`, `viviendajuventudyordenaciondelterritorio`, `iaj`, `sae`, `presidenciasanidadyemergencias/consumo`).
- **Extremadura (7)**: `consejerias/*` → `lajunta/*` (igualdad-conciliacion, cultura-turismo-deportes, economia-empleo-td, salud-dependencia), `temas/vivienda`, `imex`. DELETE: inmigración.
- **Canarias (3)**: → `bienestarsocial/{inmigracion,servicios-sociales}`, `sanidad/`.
- **Baleares (1)**: IBDONA → `es/instituto_balear_de_la_mujer_ibdona`.
- **Cataluña (2)**: → `dretssocials.gencat.cat` (servicios sociales, migracions-refugi).
- **GVA (8)**: `gva.es/*` → portales (`cindi.gva.es`, `labora.gva.es`, `sede.gva.es`, `habitatge.gva.es`, `ivaj.gva.es`, `san.gva.es`, `serviciossociales.gva.es`).
- **Xunta (7)**: → portales (`politica-social`, `consumo.xunta.gal`, `emprego.xunta.gal`, `igualdade.xunta.gal`, `politicasocial.xunta.gal/temas/inclusion-social/inmigracion`, `xuventude.xunta.gal`, `igvs.xunta.gal`).

### Educación / ofimática / finanzas
- **Microsoft Learn (4)**: `training/paths/*` → `training/browse/?terms={excel,outlook,powerpoint,word}`.
- **AulaFácil (3)**: → `cursos/excel-word-powerpoint-access/{word-2010-t2511, excel-2010-basico-t6206}`, `articulos/curso-recomendado/power-point-t733`.
- **Banco de España / Cliente Bancario (7)**: `bde.es/f/webbde/SES/*` y `clientebancario.bde.es/pcb/es/menu-horizontal/*` → `clientebancario.bde.es/pcb/es/`.
- **CNMC (3)**: → `sede.cnmc.gob.es` (denuncia), `sede.cnmc.gob.es/`, `comparador.cnmc.gob.es`.
- **Otros**: CaixaBank cuenta-extranjeros, OCU home, AWS home, scikit-learn, RTVE home, TED home, Aena home, gov.br home, Cervantes CCSE, Comunidad Madrid home.

## Eliminadas (DELETE, 7)

Sin equivalente razonable — se eliminaron las entradas:
`sanidad citaPrevia`, `sanidad embarazo`, `imserso atenciontemprana.pdf`, `consumo OCIC`, `mjusticia servicios-sociales`, `juntaex inmigración`, `tome.app` (servicio caído).

## Falsos positivos restantes (233, no corregir)

- **403 anti-bot (76)**: chat IA (claude, openai, deepseek), IA generativa (midjourney, leonardo, perplexity), bancos (bbva, bankinter), inmobiliarias (idealista, fotocasa), portals (madrid.es, larioja.org), interior.gob.es, unicef.
- **URLError/timeouts (135)**: sitios que bloquean bots o temporales (agenciatributaria, ayuntamientos, educacion.gob.es RemoteDisconnected, YouTube UnicodeEncodeError).
- **Redirects (3)** y **500/503 transitorios (10)**.

## Validación

- `npx tsc --noEmit --skipLibCheck`: limpio
- `npm run build`: OK
- Escaneo final: **0 HTTP 404**
