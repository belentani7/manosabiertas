# CORPUS DE DATOS ABIERTOS ESPAÑA-PORTUGAL

> Lista de 40 conjuntos de datos abiertos útiles para la plataforma "Manos Abiertas".
> Todos son públicos y gratuitos, con su fuente, formato y licencia.
> Esta lista alimenta las lecciones y las respuestas del chatbot de la plataforma.

## Cómo leer esta lista

- Fuentes transversales: datos.gob.es (España), dados.gov.pt (Portugal), data.europa.eu (portal europeo), Eurostat, PORDATA y Wikidata.
- No se incluye dados.gov.br (Brasil): puede servir a usuarios brasileños, pero está fuera del ámbito España-Portugal.
- Formatos: CSV (tablas), JSON (datos para programas), XML, API (conexión directa para la plataforma) y GeoJSON (mapas).
- Licencias: la mayoría permite reutilizar citando la fuente. Si la licencia no está clara, no se usa en la plataforma.
- La columna "Uso en la plataforma" explica cómo se convierte cada dataset en una lección o en una respuesta útil.

## Demografía

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Padrón continuo de población | INE (datos.gob.es) | Población por municipio, edad, sexo y nacionalidad | CSV, API JSON | CC-BY 4.0 | Datos de población por ciudad en las lecciones |
| População residente por município | INE Portugal | Población de Portugal por municipio y sexo | CSV, API PORDATA | Reutilización libre citando fuente | Comparar España y Portugal |
| Population by age and sex (demo_pjan) | Eurostat | Población de la UE por edad y sexo | API SDMX, CSV | CC-BY 4.0 | Datos europeos de contexto |
| Cifras oficiales de población (series) | INE | Evolución de la población desde 1996 | CSV, API JSON | CC-BY 4.0 | Cómo crece la población en cada región |

## Empleo

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Encuesta de Población Activa (EPA) | INE | Empleo y paro por trimestre | CSV, API JSON | CC-BY 4.0 | Nivel de empleo y paro |
| Paro registrado y contratos | SEPE (datos.gob.es) | Personas en paro y contratos por mes y provincia | CSV, XLSX | Reutilización libre | Datos actuales de empleo |
| Estatísticas do Emprego | INE Portugal | Paro y empleo en Portugal | CSV | Reutilización libre citando fuente | Datos de empleo de Portugal |
| Employment and unemployment (lfsi) | Eurostat | Empleo y paro en la UE | API SDMX | CC-BY 4.0 | Comparar países de la UE |

## Educación

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Enseñanzas no universitarias | Ministerio de Educación (datos.gob.es) | Alumnado y centros por nivel y comunidad | CSV | Reutilización libre | Colegios e institutos públicos |
| Universidades y titulaciones | Ministerio de Ciencia, Innovación y Universidades | Universidades públicas y grados | CSV, API | Reutilización libre | Estudios superiores y homologación |
| Estatísticas da Educação | DGEEC (Portugal) | Alumnos y centros de Portugal | CSV, XLSX | Reutilización libre | Educación en Portugal |
| Education and training (educ_uoe) | Eurostat | Alumnos y resultados por país de la UE | API SDMX | CC-BY 4.0 | Comparar sistemas educativos |

## Vivienda

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Índice de precios de vivienda | INE | Precio de compra y alquiler por trimestre | CSV | CC-BY 4.0 | Coste de vivir en cada ciudad |
| Estadística de hipotecas | INE | Hipotecas firmadas por mes y provincia | CSV | CC-BY 4.0 | Comprar un piso: qué saber |
| Construção e habitação | INE Portugal | Precios y vivienda en Portugal | CSV | Reutilización libre | Vivienda en Portugal |
| Housing price index (prc_hpi) | Eurostat | Precio de la vivienda en la UE | API SDMX | CC-BY 4.0 | Comparar precios entre países |

## Salud

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Centros sanitarios del SNS | Ministerio de Sanidad (datos.gob.es) | Hospitales y centros de salud con dirección | CSV, GeoJSON | Reutilización libre | "Dónde hay un centro de salud cerca" |
| CMBD de hospitalización | Ministerio de Sanidad | Altas hospitalarias y diagnósticos | CSV | Reutilización libre | Estadísticas de salud |
| Estatísticas da Saúde | INE Portugal | Salud de la población portuguesa | CSV | Reutilización libre | Sanidad en Portugal |
| Health care resources (hlth_rs) | Eurostat | Camas y médicos por país | API SDMX | CC-BY 4.0 | Comparar sanidad en la UE |

## Transporte

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Mapa de carreteras del Estado | Ministerio de Transportes (datos.gob.es) | Red de carreteras de España | GeoJSON | Reutilización libre | Rutas y viajes |
| Accidentes y puntos negros | DGT | Accidentes de tráfico y puntos peligrosos | CSV | Reutilización libre | Conducir con seguridad |
| Estatísticas dos Transportes | INE Portugal | Pasajeros y transporte en Portugal | CSV | Reutilización libre | Transporte en Portugal |
| Road transport statistics | Eurostat | Transporte por carretera en la UE | API SDMX | CC-BY 4.0 | Comparar transporte |

## Meteorología

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| AEMET OpenData | AEMET | Predicción, estaciones y avisos meteorológicos | API JSON | CC-BY 4.0 | El tiempo en tu ciudad |
| Observações meteorológicas | IPMA (Portugal) | Datos de estaciones en Portugal | API, CSV | Reutilización libre | El tiempo en Portugal |
| ERA5-Land | Copernicus / ECMWF | Clima pasado de toda Europa | NetCDF, API CDS | Licencia CDS | Histórico de clima y estaciones |
| Series climatológicas históricas | AEMET | Temperaturas y lluvia históricas | CSV | CC-BY 4.0 | Contexto climático por ciudad |

## Legislación

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Datos abiertos del BOE | Agencia Estatal BOE | Leyes y anuncios oficiales desde 1960 | API, XML | Reutilización libre | Cambios legales en lectura fácil |
| Diário da República Eletrónico | Imprensa Nacional (Portugal) | Leyes de Portugal | API, PDF | Reutilización libre | Leyes de Portugal |
| EUR-Lex | Unión Europea | Leyes de la Unión Europea | API, XML | Reutilización libre | Normas europeas |
| CENDOJ (jurisprudencia) | Consejo General del Poder Judicial | Sentencias de los tribunales españoles | CSV, API | Reutilización libre | Casos y derechos explicados |

## Economía

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Contabilidad Regional de España | INE | PIB por comunidades autónomas | CSV | CC-BY 4.0 | Economía por región |
| Índice de Precios de Consumo (IPC) | INE | Subida de precios por mes | CSV | CC-BY 4.0 | Coste de la vida |
| Contas Nacionais | INE Portugal | Producto interior de Portugal | CSV | Reutilización libre | Economía de Portugal |
| National accounts (nama) | Eurostat | Producto interior de la UE | API SDMX | CC-BY 4.0 | Comparar economías |

## Cultura

| Dataset | Fuente | Qué contiene | Formato/API | Licencia | Uso en la plataforma |
| --- | --- | --- | --- | --- | --- |
| Hispana | Ministerio de Cultura | Colecciones digitales de archivos y bibliotecas | API OAI-PMH | Varía, mayoritariamente libre | Cultura y patrimonio |
| datos.bne.es | Biblioteca Nacional de España | Catálogo bibliográfico enlazado | API, SPARQL | CC0 | Consultas culturales |
| MatrizNet | Direção-Geral do Património Cultural (PT) | Bienes culturales muebles de Portugal | Web, CSV | Reutilización libre | Cultura de Portugal |
| Wikidata | Wikimedia | Datos estructurados multilingües | API, SPARQL | CC0 | Traducciones y referencias en 5 idiomas |

## Ejemplos de consulta

Cinco consultas concretas que la plataforma puede responder con estos datos.

1. ¿Cuánta población extranjera vive en mi municipio?
   Consulta el Padrón continuo del INE y filtra por municipio y nacionalidad. En Portugal usa População residente del INE Portugal.

2. ¿Dónde hay un centro de salud cerca de mí?
   Usa el dataset "Centros sanitarios del SNS" de datos.gob.es y ordena los resultados por distancia desde la ubicación del usuario.

3. ¿Cuál es el precio medio del alquiler en mi ciudad?
   Consulta el Índice de precios de vivienda del INE (parte de alquiler) y compáralo con el Housing price index de Eurostat. Para Portugal, usa Construção e habitação del INE Portugal.

4. ¿Cuántas plazas hay en los colegios públicos de mi ciudad?
   Usa "Enseñanzas no universitarias" del Ministerio de Educación y filtra por comunidad autónoma, provincia y nivel educativo.

5. ¿Va a llover mañana en mi ciudad?
   Consulta la predicción de AEMET OpenData por municipio. En Portugal, usa las observaciones y predicción del IPMA.

## Criterios de selección

Un dataset solo entra en este corpus si cumple 4 condiciones: es público y gratuito, tiene licencia clara, se actualiza con regularidad y sirve para responder una pregunta real de la audiencia. Si un dataset deja de cumplir una condición, se retira del catálogo y se anota en la ficha.
