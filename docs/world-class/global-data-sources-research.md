# Fuentes oficiales y abiertas para Manos Abiertas

> Investigación verificada el 11 de agosto de 2026. Este registro no pretende abarcar "todos los bancos de datos del mundo": selecciona fuentes oficiales o abiertas de alto valor para una plataforma gratuita dirigida a personas migrantes en España.

## Taxonomía

- **Servicios directos:** oficinas, centros sanitarios, centros educativos y transporte.
- **Contexto:** inmigración, asilo, empleo, vivienda, salud y educación.
- **Protección:** violencia, discriminación, trata y desapariciones.
- **Derechos:** legislación y procedimientos administrativos.
- **Interoperabilidad:** territorios, idiomas, ocupaciones y vocabularios.
- **Geodatos:** direcciones, coordenadas, límites y rutas.

## España

| ID / área | Fuente y organismo | Acceso y cobertura | Licencia / frecuencia | Campos útiles | Riesgos | Actualización recomendada |
|---|---|---|---|---|---|---|
| ES-01 Catálogo | [API datos.gob.es](https://datos.gob.es/es/accessible-apidata), Gobierno de España | España; API JSON, XML, RDF, TTL y CSV; SPARQL | Licencia de cada distribución; catálogo variable | título, organismo, tema, cobertura, formato, licencia, fecha modificada | El catálogo no garantiza que la descarga continúe disponible | Consulta semanal; guardar metadatos y comprobar cada distribución |
| ES-02 Demografía | [API JSON del INE](https://ine.es/dyngs/DAB/es/index.htm?cid=1099) | España, CCAA, provincias y municipios; REST/JSON | Reutilización INE con atribución; frecuencia por operación | nacionalidad, país de nacimiento, sexo, edad, municipio, periodo, valor, unidad | Cambios de tablas y clasificaciones; revisiones sin historial propio | Consultar `PubFechaAct`; snapshot inmutable por descarga |
| ES-03 Inmigración | [Catálogo OPI](https://www.inclusion.gob.es/web/opi/estadisticas/catalogo) y [OPIbase](https://expinterweb.inclusion.gob.es/dynPx/inebase/index.htm?apdes=2&file=pcaxis&path=%2Fstock_documentacion%2F&type=pcaxis) | España; PX/PC-Axis y descargas | Licencia no suficientemente explícita; trimestral o anual según operación | autorización, documentación, arraigo, nacionalidad, nacimiento, sexo, edad, territorio, fecha | Estructura PX y denominaciones pueden cambiar | Detectar fecha de modificación; ingestión trimestral y revisión humana |
| ES-04 Asilo | [Protección internacional en formato reutilizable](https://proteccion-asilo.interior.gob.es/es/datos-e-informacion-estadistica/informacion-estadistica-en-formato-reutilizable/), Ministerio del Interior | España; XLS, PDF y tablas | Condiciones RISP del portal; mensual, trimestral y anual | solicitudes, decisiones, protección temporal, nacionalidad, sexo, edad, estado | Datos provisionales y acumulados pueden confundirse con flujos mensuales | Cargar mensualmente; distinguir `periodo`, `acumulado` y `provisional` |
| ES-05 Llegadas | [Balances e informes](https://www.interior.gob.es/opencms/es/prensa/balances-e-informes/), Ministerio del Interior | España y rutas de llegada; PDF | Reutilización no declarada claramente por informe; quincenal | llegadas, vía marítima o terrestre, zona, periodo, acumulado | No representa toda la migración irregular; PDF cambiante | Extracción supervisada quincenal; no usar para predicción individual |
| ES-06 Empleo | [Estadísticas SEPE](https://www.sepe.es/HomeSepe/es/que-es-el-sepe/estadisticas.html) | España a municipio y provincia; XLS/PDF | Condiciones del SEPE; mensual | paro, contratos, prestaciones, municipio, sexo, edad, sector, ocupación, extranjeros | Revisiones y contratos registrados fuera del mes de inicio | Ingestión mensual desde XLS; conservar metodología y versión |
| ES-07 Afiliación | [Afiliados extranjeros](https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST8/EST10/EST305/EST307), Seguridad Social | España, territorio y regímenes; XLS/PX-Web | Licencia no explícita; mensual | afiliación, nacionalidad, régimen, actividad, sexo, provincia, último día o media | El libro XLS anual cambia internamente por mes | Descargar cada publicación mensual y normalizar desde PX-Web |
| ES-08 Vivienda | [SERPAVI](https://serpavi.mivau.gob.es/) y [estadística de viviendas IRPF](https://www3.agenciatributaria.gob.es/Sede/estadisticas/estadisticas-impuesto/estadistica-viviendas-declaradas-irpf.html) | España; consulta por dirección o referencia y estadísticas agregadas | SERPAVI no ofrece API masiva pública; actualización regulatoria o anual | rango de alquiler, zona tensionada, municipio, tipo de vivienda, rentas declaradas | Retraso fiscal; SERPAVI tiene efectos jurídicos en determinados casos | Usar SERPAVI como enlace oficial; no copiar resultados masivamente |
| ES-09 Salud/localización | [Catálogo de centros del SNS](https://www.sanidad.gob.es/estadEstudios/estadisticas/sisInfSanSNS/ofertaRecursos/centrosSalud/home.htm) | España; CSV, RDF, XLS, MDB y buscador dinámico | Acceso libre con atribución; buscador dinámico y snapshot anual | código, nombre, tipo, dirección, teléfono, municipio, área sanitaria, urgencias | Coordenadas no siempre presentes; altas y bajas entre snapshots | Snapshot anual y comprobación semanal de centros mostrados |
| ES-10 Salud/estadística | [Banco de datos del SNS](https://www.sanidad.gob.es/estadEstudios/estadisticas/bancoDatos.htm) | España; microdatos, indicadores y directorios | Acceso libre; citar Ministerio; frecuencia por operación | acceso sanitario, utilización, salud percibida, centros, CCAA, variables sociales | Microdatos requieren tratamiento estadístico y control de divulgación | Solo agregados para producto; actualización según calendario oficial |
| ES-11 Educación/localización | [Registro estatal de centros docentes](https://www.educacionfpydeportes.gob.es/va/servicios-al-ciudadano/catalogo/centros-docentes/servicios-generales/registro-centros-no-universitarios.html) | España; buscador público | Consulta pública; actualización por CCAA sin frecuencia fija | código, nombre, titularidad, dirección, municipio, enseñanzas | Sin API masiva documentada; posibles centros cerrados o incompletos | Enlace profundo y caché limitada; validación semestral |
| ES-12 Educación/estadística | [Estadísticas educativas](https://www.educacionfpydeportes.gob.es/ca/servicios-al-ciudadano/estadisticas/ultimas.html), Ministerio de Educación | España y CCAA; EDUCAbase, XLS y publicaciones | Condiciones del Ministerio; calendario por operación, normalmente anual | alumnado extranjero, etapa, abandono, becas, lengua, centro, territorio, sexo | Cursos académicos y años naturales no son equivalentes | Ingestión por publicación; guardar curso y fecha de referencia |
| ES-13 Violencia | [INE: violencia doméstica y de género](https://ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176866&idp=1254735573206&menu=ultiDatos) | España y CCAA; INEbase/API | Condiciones INE; anual | víctimas, edad, lugar de nacimiento, denunciados, medidas, infracciones | Solo casos registrados con medidas; no mide prevalencia completa | Actualización anual; presentar alcance metodológico junto al dato |
| ES-14 Seguridad | [Portal Estadístico de Criminalidad](https://estadisticasdecriminalidad.ses.mir.es/publico/portalestadistico/) | España, CCAA y provincias; PX/PDF | Condiciones del Ministerio; trimestral o anual | victimizaciones, tipo penal, edad, sexo, provincia, violencia familiar | Datos administrativos, no encuestas; riesgo de estigmatización territorial | Solo agregados; nunca puntuación de riesgo de personas o barrios |
| ES-15 Trata | [Balances de trata y explotación](https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/trata/enlaces-de-interes/), Interior/CITCO | España; informes PDF | Licencia no explícita; anual | víctimas detectadas, explotación sexual o laboral, sexo, edad, nacionalidad, investigaciones | Subregistro alto; PDF; datos especialmente sensibles | Extracción anual revisada; no publicar ubicaciones operativas |
| ES-16 Derechos | [API de datos abiertos del BOE](https://boe.es/datosabiertos/api/api.php) | España; REST, JSON/XML, ELI y textos | Licencia BOE con atribución; sumario diario; consolidación habitual en 1-3 días laborables | identificador, título, rango, fechas, vigencia, versiones, materias, relaciones, texto | El texto consolidado es informativo y puede ir retrasado | Sumario diario; revalidación de normas activas y aviso legal visible |
| ES-17 Administración | [Buscador SIA](https://administracion.gob.es/pag_Home/Tramites/buscadorDeTramites.html) | AGE, CCAA y entidades locales; CSV, XML o RDF desde buscador | Consulta pública; actualización corresponsable | código SIA, trámite, administración, órgano, materia, enlace, nivel electrónico | Servicios web completos restringidos a Red SARA; registros duplicados u obsoletos | Descargar subconjuntos temáticos semanalmente; validar enlace final |
| ES-18 Oficinas | [Buscador DIR3/PAG](https://administracion.gob.es/pagFront/atencionCiudadana/oficinasEGEO/encuentraOficina.htm) | Oficinas estatales, autonómicas y locales | Consulta pública; actualización por cada oficina | código, nombre, tipo, dirección, teléfono, horario, accesibilidad, Cl@ve/OAMR | El propio portal recomienda confirmar horarios | Mostrar fecha de verificación; revisión semanal y teléfono oficial |
| ES-19 Transporte | [Punto de Acceso Nacional de Transporte](https://nap.transportes.gob.es/Files/List) | España; GTFS, GTFS-RT, NeTEx y SIRI | Condiciones por proveedor o feed; frecuencia por operador | paradas, rutas, viajes, horarios, geometrías, tiempo real, modo | Cobertura desigual y feeds que desaparecen | Leer metadatos diariamente; descargar solo feeds necesarios |
| ES-20 Geodatos | [IDEE/CODSI](https://www.idee.es/csw-inspire-idee) y [servicios por tema](https://www.idee.es/segun-tema-inspire) | España; CSW, WMS, WFS y ATOM | Licencia por conjunto | direcciones, unidades administrativas, transporte, servicios públicos, coordenadas | Metadatos federados; disponibilidad y licencia heterogéneas | Descubrir por CSW; monitorizar endpoint y licencia |
| ES-21 Cartografía | [Política de datos IGN/CNIG](https://www.ign.es/web/ign/portal/politica-datos) | España; descargas y servicios geográficos | Compatible con **CC BY 4.0** | CartoCiudad, calles, portales, municipios, carreteras, topónimos, límites | Atribución obligatoria; distintas fechas por producto | Versionar producto y fecha; geocodificación previa de recursos |
| ES-22 Catastro | [Servicios y descargas del Catastro](https://www.sedecatastro.gob.es/Accesos/SECAccDescargaDatos.aspx) | España salvo País Vasco y Navarra; INSPIRE, WMS, WFS y consultas | Licencia específica; parte libre y parte con Cl@ve o certificado | referencia, dirección, parcela, geometría, uso; nunca titularidad | Restricciones de acceso; no apropiado como padrón de personas | Usar únicamente datos no protegidos y servicios INSPIRE |

## Unión Europea

| ID / área | Fuente y organismo | Acceso y cobertura | Licencia / frecuencia | Campos útiles | Riesgos | Actualización recomendada |
|---|---|---|---|---|---|---|
| EU-01 Estadística | [Eurostat API](https://ec.europa.eu/eurostat/web/user-guides/data-browser/api-data-access/api-introduction) | UE, EFTA y candidatos; SDMX 2.1/3.0, JSON-stat y CSV | Reutilización con atribución; API refrescada dos veces al día | migración, asilo, empleo, vivienda, salud, educación, ciudadanía, país, edad, sexo, NUTS | Solo conserva la última versión; las revisiones reemplazan valores | Consulta diaria y snapshots propios antes de sobrescribir |
| EU-02 Asilo temprano | [EUAA Latest Asylum Trends](https://www.euaa.europa.eu/latest-asylum-trends-monthly-overview) | EU+; tablas y visualizaciones | Política UE salvo indicación; mensual | solicitudes, nacionalidad, destino, reconocimiento, pendientes, protección temporal | Datos provisionales y no validados; pueden diferir de Eurostat | Usar para señal temprana; reemplazar por Eurostat validado |
| EU-03 Metacatálogo | [data.europa.eu API](https://data.europa.eu/api/hub/repo/) | Catálogos UE, nacionales y regionales; DCAT | Licencia por distribución; cosecha variable | dataset, catálogo, publicador, tema, licencia, formato, cobertura, calidad de metadatos | No es fuente primaria; enlaces y licencias heterogéneos | Descubrimiento semanal; consumir la fuente primaria encontrada |
| EU-04 Empleo/idiomas | [ESCO API y descargas](https://esco.ec.europa.eu/en/use-esco/download) | 3.039 ocupaciones y 13.939 capacidades en 28 idiomas | Datos Linked Open Data; software API bajo EUPL y componentes abiertos; versionado | URI, ocupación, capacidad, descripción, relación, ISCO, idioma | Distinguir licencia de datos y licencia del software | Fijar versión; importar deltas y conservar URI |
| EU-05 Derechos | [EUR-Lex/CELLAR](https://eur-lex.europa.eu/content/help/data-reuse/reuse-contents-eurlex-details.html?locale=en) | Legislación y jurisprudencia UE; REST, SPARQL, SOAP y RSS | Política de reutilización UE; actualización continua | CELEX, ELI, idioma, título, fechas, vigencia, relaciones, texto | Complejidad del modelo; traducciones y consolidaciones con distinto estado | RSS diario; guardar idioma, versión y estado jurídico |
| EU-06 Traducción | [DGT Translation Memory](https://joint-research-centre.ec.europa.eu/language-technology-resources/dgt-translation-memory_en) | Corpus jurídico paralelo en 24 idiomas; TMX | Decisión 2011/833/UE; herramienta bajo EUPL; anual | segmentos, idioma origen y destino, documento EUR-Lex | Lenguaje jurídico, no conversacional; alineación automática imperfecta | Importación anual; usar como glosario o corpus, no como traducción final |
| EU-07 Terminología | [IATE](https://iate.europa.eu/) y [vocabulario de idiomas UE](https://op.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/language/) | Terminología institucional y más de 8.000 códigos lingüísticos | Política UE; descargas o API según recurso | término, definición, dominio, fiabilidad, idioma, ISO 639, URI | Cobertura desigual de lenguas migrantes; términos institucionales | Sincronización mensual y revisión por dominio |
| EU-08 Traducción automática | [eTranslation](https://commission.europa.eu/resources-partners/etranslation_en) | Principalmente 24 lenguas oficiales UE; API para entidades elegibles | Servicio restringido, no banco abierto | idioma, dominio, texto o documento traducido | Elegibilidad, privacidad y calidad variable; no sirve como fuente jurídica | Mantener como proveedor opcional; no enviar datos sensibles |
| EU-09 Geodatos | [GISCO/NUTS API](https://gisco-services.ec.europa.eu/distribution/v2/nuts/) | Europa; GeoJSON, SHP, PBF, SVG y CSV | Condiciones específicas; algunos conjuntos solo no comerciales | NUTS 0-3, geometría, año, escala, proyección | Los límites cambian; restricciones EuroGeographics en ciertos datos | Fijar versión NUTS y licencia por capa |
| EU-10 Salud | [ECDC Data, dashboards and databases](https://www.ecdc.europa.eu/en/data-dashboards-and-databases) | UE/EEE; CSV, mapas y visualizaciones | Datos agregados abiertos con atribución; frecuencia por enfermedad | enfermedad, territorio, periodo, casos o tasas, edad, sexo | No toda la información TESSy es pública; calidad dependiente del Estado | Actualización ligada a cada conjunto; conservar metadatos |
| EU-11 Derechos vividos | [FRA Data and Maps](https://fra.europa.eu/en/publications-and-resources/data-and-maps) | UE; exploradores y XLSX, incluido EU-MIDIS III | Política de la agencia o recurso; por ronda de encuesta | discriminación en empleo, vivienda, salud y educación; victimización; derechos; país, edad, género | Encuestas muestrales, no prevalencia administrativa; cobertura parcial | Cargar cada nueva ronda y mantener ficha metodológica |

## Global

| ID / área | Fuente y organismo | Acceso y cobertura | Licencia / frecuencia | Campos útiles | Riesgos | Actualización recomendada |
|---|---|---|---|---|---|---|
| GL-01 Refugio | [UNHCR Refugee Statistics API](https://api.unhcr.org/docs/refugee-statistics.html) | Global; REST, JSON y CSV, sin credenciales | **CC BY 4.0** salvo indicación; publicaciones anuales y revisiones | origen, país de asilo, año, población refugiada, solicitantes, apátridas, retornos, demografía | Diferencias entre stock, flujo y estimación; desagregación incompleta | Consulta mensual; snapshot por publicación oficial |
| GL-02 Desplazamiento | [IOM DTM API](https://dtm.iom.int/data-and-analysis/dtm-api) | Global, país, Admin-1 y Admin-2; API v3 con clave | Términos IOM por producto; rondas variables | desplazados, retornados, origen, causa, sexo, necesidades, ronda, territorio | La cobertura depende de la operación; no es censo | Actualizar por ronda; registrar metodología y cobertura |
| GL-03 Rutas peligrosas | [Missing Migrants Project](https://missingmigrants.iom.int/) | Global; base pública anonimizada | Términos IOM; recopilación diaria | fecha, muertos, desaparecidos, causa, ruta, coordenada aproximada, fuente | Subregistro extremo; mezcla fuentes oficiales, ONG y prensa | Solo agregados y contexto preventivo; nunca perfiles personales |
| GL-04 Trabajo | [ILOSTAT Bulk Download](https://ilostat.ilo.org/data/bulk/) | Global; CSV.gz, SDMX y paquete R | Licencia según publicación; revisar series anteriores al 3 de mayo de 2023 | empleo migrante, ciudadanía o nacimiento, ocupación, salario, informalidad, sexo, edad, país | Datos observados y estimados pueden mezclarse; rupturas metodológicas | Consulta mensual; conservar `obs_status`, notas y fuente |
| GL-05 Desarrollo | [World Bank Indicators API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) | Global; REST, JSON, XML y CSV | **CC BY 4.0** por defecto para datos propios; frecuencia por indicador | población, pobreza, vivienda, educación, salud, empleo, remesas, país, año | Algunos indicadores proceden de terceros o son modelados | Verificar licencia y fuente de cada indicador; actualización mensual |
| GL-06 Salud | [WHO Global Health Observatory API](https://www.who.int/data/gho/info/gho-odata-api) | Global; OData | Condiciones OMS por conjunto; frecuencia variable | indicador, país, sexo, edad, periodo, valor, límites e incertidumbre | Migración técnica del API; endpoints antiguos retirados o deprecados | Aislar adaptador; monitorizar esquema y nueva API |
| GL-07 Educación | [UNESCO UIS API y Bulk](https://databrowser.uis.unesco.org/resources) | Global; API y CSV masivo | Licencia por distribución; publicaciones periódicas | matrícula, exclusión escolar, alfabetización, nivel, sexo, país, gasto | La API SDMX antigua está obsoleta; grandes retrasos nacionales | Usar API actual o Bulk; comprobar fecha de cada lote |
| GL-08 Trata | [UNODC Data: Trafficking in Persons](https://dataunodc.un.org/dp-trafficking-persons) | Global, regional y nacional; tablas y descargas | Condiciones ONU; actualización normalmente anual | víctimas detectadas, sexo, edad, explotación, condenas, país | Solo trata detectada; comparabilidad y retraso elevados | Actualización anual supervisada; mostrar advertencia metodológica |
| GL-09 Mapas complementarios | [OpenStreetMap](https://www.openstreetmap.org/copyright) | Global; extractos, Overpass y Nominatim | **ODbL**; cambios continuos | POI, carreteras, transporte, centros, nombres multilingües | No es fuente oficial; calidad desigual; Nominatim público limita a 1 petición por segundo | Usar solo como complemento; caché, atribución y proveedor intercambiable |

## Estrategia de actualización

### Modelo mínimo de procedencia

Cada registro interno debe conservar:

```text
source_id
publisher
source_url
distribution_url
coverage
licence
fetch_mode
source_updated_at
checked_at
checksum
schema_version
geographic_level
provisional
risk_class
provenance_url
```

### Ciclos de actualización

1. **Diario:** BOE, Eurostat, NAP y disponibilidad de endpoints.
2. **Semanal:** datos.gob, SIA, DIR3, centros sanitarios y enlaces oficiales.
3. **Mensual:** asilo, SEPE, Seguridad Social, EUAA y UNHCR.
4. **Por publicación:** OPI, vivienda, educación, violencia, trata, UIS, ILOSTAT y UNODC.
5. **Manual obligatorio:** PDF, cambios jurídicos, nuevas licencias y fuentes sensibles.

Cada descarga debe conservar el original, su hash, la fecha de acceso y la versión transformada. Eurostat necesita snapshots propios porque su API reemplaza valores anteriores.

### Modos de integración

- **API automática:** para fuentes con endpoint, esquema y licencia estables.
- **Snapshot programado:** para CSV, XLS, PX, GTFS y descargas versionadas.
- **Extracción supervisada:** para PDF y páginas sin distribución estable.
- **Enlace oficial:** para consultas jurídicas o individualizadas que no deben replicarse.

## Prioridad para Manos Abiertas

Primera integración de máximo valor:

1. INE.
2. OPI.
3. Protección Internacional del Ministerio del Interior.
4. BOE.
5. SIA.
6. DIR3.
7. Centros del SNS.
8. Registro de centros educativos.
9. NAP transporte.
10. IGN/CartoCiudad.
11. Eurostat.
12. ESCO.

SERPAVI, eTranslation y centros de acogida deben funcionar inicialmente como **enlaces oficiales**, no como bases copiadas.

## Límites de seguridad

- No publicar direcciones de refugios protegidos, víctimas o recursos confidenciales.
- No combinar datos de rutas, trata o violencia con perfiles individuales.
- No decidir automáticamente elegibilidad migratoria, sanitaria o jurídica.
- Mostrar siempre fuente, vigencia, cobertura territorial y estado provisional.
- Las traducciones jurídicas y sanitarias requieren advertencia y revisión humana.
- Cada recurso localizado debe incluir `última verificación`, teléfono y nivel de confianza.
- Mantener separados datos estadísticos, datos operativos y datos personales.
- No inferir nacionalidad, situación administrativa, vulnerabilidad o riesgo a partir de ubicación o idioma.

## Criterio de incorporación

Una fuente puede entrar en producción solo cuando se hayan verificado:

1. Organismo responsable y URL primaria.
2. Licencia o condiciones de reutilización.
3. Cobertura territorial y temporal.
4. Frecuencia real de actualización.
5. Campos y esquema de distribución.
6. Riesgos de privacidad, seguridad y estigmatización.
7. Procedimiento de retirada si la fuente deja de ser fiable.

