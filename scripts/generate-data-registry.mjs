import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = join(root, 'docs', 'world-class');
const outputPath = join(outputDir, 'global-data-sources.json');

const sources = [
  ['es-open-data', 'Spain', 'cross-domain', 'Gobierno de Espana', 'Datos.gob.es catalog', 'https://datos.gob.es/es/catalogo', 'catalog', 'Spain', 'source-defined', 'per-dataset', 'discover Spanish public datasets', 'metadata and licences vary'],
  ['es-open-data-api', 'Spain', 'cross-domain', 'Gobierno de Espana', 'Datos.gob.es API', 'https://datos.gob.es/es/apidata', 'api', 'Spain', 'continuous', 'catalog terms', 'automate dataset discovery', 'catalog metadata is not source truth'],
  ['es-ine-api', 'Spain', 'demography', 'Instituto Nacional de Estadistica', 'INE API', 'https://www.ine.es/dyngs/DataLab/manual.html?cid=1259945947375', 'api', 'Spain', 'dataset-specific', 'INE terms', 'population, migration and labour indicators', 'statistical data is not service availability'],
  ['es-ine-migration', 'Spain', 'migration', 'Instituto Nacional de Estadistica', 'INE migration statistics', 'https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254734710984', 'download', 'Spain', 'periodic', 'INE terms', 'migration flows and population context', 'aggregation and publication lag'],
  ['es-opi', 'Spain', 'migration', 'Observatorio Permanente de la Inmigracion', 'OPI statistics', 'https://www.inclusion.gob.es/web/opi/estadisticas', 'download', 'Spain', 'periodic', 'government reuse terms', 'residence, work and nationality context', 'legal definitions change'],
  ['es-migration-portal', 'Spain', 'rights-services', 'Ministerio de Inclusion, Seguridad Social y Migraciones', 'Migration portal', 'https://www.inclusion.gob.es/web/migraciones/', 'web', 'Spain', 'continuous', 'government reuse terms', 'authoritative procedures and notices', 'human legal review required'],
  ['es-boe', 'Spain', 'law', 'Agencia Estatal BOE', 'BOE open data', 'https://www.boe.es/datosabiertos/', 'api-download', 'Spain', 'daily', 'BOE reuse terms', 'laws, consolidated texts and notices', 'never summarize as legal advice without date'],
  ['es-sepe', 'Spain', 'employment', 'Servicio Publico de Empleo Estatal', 'SEPE statistics', 'https://www.sepe.es/HomeSepe/que-es-el-sepe/estadisticas.html', 'download', 'Spain', 'monthly', 'government reuse terms', 'employment and registered unemployment context', 'not individual vacancy truth'],
  ['es-health', 'Spain', 'health', 'Ministerio de Sanidad', 'Health statistics portal', 'https://www.sanidad.gob.es/estadEstudios/estadisticas/home.htm', 'catalog-download', 'Spain', 'dataset-specific', 'government reuse terms', 'health system indicators', 'no clinical decision use'],
  ['es-education', 'Spain', 'education', 'Ministerio de Educacion', 'Education statistics', 'https://www.educacionfpydeportes.gob.es/servicios-al-ciudadano/estadisticas.html', 'catalog-download', 'Spain', 'periodic', 'government reuse terms', 'education access and outcomes', 'regional comparability varies'],
  ['es-housing', 'Spain', 'housing', 'Ministerio de Vivienda y Agenda Urbana', 'Housing statistics', 'https://www.transportes.gob.es/portal-web-vivienda/estadisticas', 'catalog-download', 'Spain', 'periodic', 'government reuse terms', 'housing market and policy context', 'not real-time availability'],
  ['es-cnig', 'Spain', 'geospatial', 'Centro Nacional de Informacion Geografica', 'CNIG Download Centre', 'https://centrodedescargas.cnig.es/CentroDescargas/index.jsp', 'download', 'Spain', 'dataset-specific', 'CNIG licence', 'official boundaries and base geography', 'large files and CRS handling'],
  ['es-aemet', 'Spain', 'weather', 'AEMET', 'AEMET OpenData', 'https://opendata.aemet.es/centrodedescargas/inicio', 'api-download', 'Spain', 'frequent', 'AEMET reuse terms', 'weather and warning context', 'API key and attribution requirements'],
  ['es-gbv', 'Spain', 'protection', 'Delegacion del Gobierno contra la Violencia de Genero', 'Violence against women statistics', 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/', 'download', 'Spain', 'periodic', 'government reuse terms', 'protection policy context and official indicators', 'sensitive data; avoid unsafe granularity'],

  ['eu-data', 'European Union', 'cross-domain', 'European Commission', 'European Data Portal', 'https://data.europa.eu/', 'catalog-api', 'EU and member states', 'continuous', 'per-dataset', 'discover European public datasets', 'licences and freshness vary'],
  ['eu-eurostat-api', 'European Union', 'statistics', 'Eurostat', 'Eurostat APIs', 'https://ec.europa.eu/eurostat/web/user-guides/data-browser/api-data-access', 'api', 'EU, EFTA and candidates', 'dataset-specific', 'Eurostat reuse policy', 'comparable statistical indicators', 'codes and revisions require versioning'],
  ['eu-migration', 'European Union', 'migration-asylum', 'Eurostat', 'Migration and asylum data', 'https://ec.europa.eu/eurostat/web/migration-asylum/', 'api-download', 'EU, EFTA and candidates', 'monthly-annual', 'Eurostat reuse policy', 'migration, asylum and integration indicators', 'rounded counts and publication lag'],
  ['eu-euaa', 'European Union', 'asylum', 'European Union Agency for Asylum', 'EUAA analysis and data', 'https://euaa.europa.eu/asylum-report-2026', 'web-download', 'EU+', 'periodic', 'EU reuse policy', 'asylum system context', 'reports are not individual case guidance'],
  ['eu-emn', 'European Union', 'migration-policy', 'European Migration Network', 'EMN publications', 'https://home-affairs.ec.europa.eu/networks/european-migration-network-emn_en', 'catalog-download', 'EU', 'periodic', 'EU reuse policy', 'policy comparisons and terminology', 'national implementation differs'],
  ['eu-esco', 'European Union', 'employment-skills', 'European Commission', 'ESCO API', 'https://esco.ec.europa.eu/en/use-esco/use-esco-services-api', 'api', 'EU multilingual', 'versioned', 'EU reuse policy', 'skills and occupation matching', 'taxonomy does not prove qualification equivalence'],
  ['eu-eures', 'European Union', 'employment', 'European Labour Authority', 'EURES', 'https://eures.europa.eu/index_en', 'web-services', 'EEA and Switzerland', 'continuous', 'portal terms', 'jobs, living and working conditions', 'vacancies expire quickly'],
  ['eu-eurlex', 'European Union', 'law', 'Publications Office of the EU', 'EUR-Lex web services', 'https://eur-lex.europa.eu/content/help/data-reuse/webservice.html', 'api', 'European Union', 'daily', 'EU reuse policy', 'EU law and metadata', 'human legal review required'],
  ['eu-eige', 'European Union', 'gender-protection', 'European Institute for Gender Equality', 'EIGE Gender Statistics Database', 'https://eige.europa.eu/gender-statistics/dgs', 'database-download', 'EU', 'periodic', 'EIGE terms', 'gender equality and violence indicators', 'sensitive interpretation'],
  ['eu-fra', 'European Union', 'fundamental-rights', 'EU Agency for Fundamental Rights', 'FRA data and maps', 'https://fra.europa.eu/en/data-and-maps', 'catalog-download', 'EU', 'periodic', 'FRA terms', 'rights evidence and surveys', 'survey uncertainty and scope'],
  ['eu-ecdc', 'European Union', 'health', 'European Centre for Disease Prevention and Control', 'ECDC data', 'https://www.ecdc.europa.eu/en/publications-data', 'catalog-download', 'EU+', 'frequent', 'ECDC terms', 'public-health context', 'not clinical advice'],
  ['eu-copernicus', 'European Union', 'geospatial', 'European Commission and ESA', 'Copernicus Data Space', 'https://dataspace.copernicus.eu/', 'api-download', 'global', 'frequent', 'Copernicus licence', 'satellite and environmental layers', 'large data and specialist processing'],
  ['eu-eea', 'European Union', 'environment', 'European Environment Agency', 'EEA Datahub', 'https://www.eea.europa.eu/en/datahub', 'catalog-api', 'Europe', 'dataset-specific', 'EEA reuse policy', 'environmental risk context', 'spatial and temporal alignment'],

  ['unhcr-api', 'Global', 'refugees-asylum', 'UNHCR', 'Refugee Data Finder API', 'https://www.unhcr.org/refugee-statistics/insights/explainers/forcibly-displaced-api.html', 'api', 'global', 'annual with updates', 'UNHCR terms', 'forced displacement and statelessness statistics', 'aggregates are not service directories'],
  ['unhcr-odp', 'Global', 'humanitarian-operations', 'UNHCR', 'Operational Data Portal', 'https://data.unhcr.org/', 'portal-download', 'crisis situations', 'frequent', 'per-dataset', 'situation data and coordination documents', 'coverage depends on active situation'],
  ['iom-migration', 'Global', 'migration', 'IOM', 'Migration Data Portal', 'https://www.migrationdataportal.org/', 'portal', 'global', 'periodic', 'IOM terms', 'migration indicators and definitions', 'mixed underlying sources'],
  ['iom-dtm', 'Global', 'displacement', 'IOM', 'Displacement Tracking Matrix', 'https://dtm.iom.int/', 'portal-download', 'crisis countries', 'frequent', 'per-dataset', 'mobility and displacement assessments', 'methodology varies by operation'],
  ['hdx', 'Global', 'humanitarian', 'OCHA', 'Humanitarian Data Exchange', 'https://data.humdata.org/', 'catalog-api', 'global', 'continuous', 'per-dataset', 'discover humanitarian datasets', 'publisher quality and licences vary'],
  ['reliefweb', 'Global', 'humanitarian-content', 'OCHA', 'ReliefWeb API', 'https://apidoc.reliefweb.int/', 'api', 'global', 'continuous', 'ReliefWeb terms', 'reports, jobs and disaster updates', 'content is not independently validated by API'],
  ['worldbank-v2', 'Global', 'development', 'World Bank', 'World Bank Indicators API', 'https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures', 'api', 'global', 'indicator-specific', 'CC BY 4.0 where stated', 'development indicators', 'country reporting and revision lag'],
  ['worldbank-data360', 'Global', 'development', 'World Bank', 'Data360 API', 'https://data360.worldbank.org/en/api', 'api', 'global', 'dataset-specific', 'CC BY 4.0', 'search and retrieve curated datasets', 'new platform; contracts may evolve'],
  ['who-gho', 'Global', 'health', 'World Health Organization', 'Global Health Observatory', 'https://www.who.int/data/gho/info/gho-odata-api', 'api', 'global', 'indicator-specific', 'WHO terms', 'public-health indicators', 'not clinical advice'],
  ['unesco-uis', 'Global', 'education', 'UNESCO Institute for Statistics', 'UIS Data Browser', 'https://databrowser.uis.unesco.org/', 'portal-download', 'global', 'periodic', 'UNESCO terms', 'education, literacy and science indicators', 'country comparability and lag'],
  ['ilo-ilostat', 'Global', 'employment', 'International Labour Organization', 'ILOSTAT data tools', 'https://ilostat.ilo.org/data/', 'api-download', 'global', 'periodic', 'ILO terms', 'labour market and employment indicators', 'survey definitions differ'],
  ['un-sdg-api', 'Global', 'sustainable-development', 'United Nations Statistics Division', 'UN SDG API', 'https://unstats.un.org/SDGAPI/swagger/', 'api', 'global', 'indicator-specific', 'UN terms', 'SDG indicators and metadata', 'series completeness varies'],
  ['fao-faostat', 'Global', 'food-agriculture', 'FAO', 'FAOSTAT', 'https://www.fao.org/faostat/en/', 'api-download', 'global', 'periodic', 'FAO terms', 'food security and agriculture context', 'not household-level availability'],
  ['un-women', 'Global', 'gender', 'UN Women', 'Women Count Data Hub', 'https://data.unwomen.org/', 'portal-download', 'global', 'periodic', 'UN Women terms', 'gender equality indicators', 'sensitive interpretation'],
  ['unicef-data', 'Global', 'children', 'UNICEF', 'UNICEF Data', 'https://data.unicef.org/', 'portal-download', 'global', 'periodic', 'UNICEF terms', 'child wellbeing and protection indicators', 'avoid unsafe small-cell use'],
  ['unodc-data', 'Global', 'crime-trafficking', 'UNODC', 'UNODC Data Portal', 'https://dataunodc.un.org/', 'portal-download', 'global', 'periodic', 'UN terms', 'crime, trafficking and justice indicators', 'underreporting and legal differences'],
  ['oecd-data', 'Global', 'policy-statistics', 'OECD', 'OECD Data Explorer', 'https://data-explorer.oecd.org/', 'api-download', 'OECD and partners', 'dataset-specific', 'OECD terms', 'policy, labour, housing and education comparisons', 'coverage favours OECD economies'],

  ['osm-planet', 'Global', 'geospatial', 'OpenStreetMap contributors', 'OpenStreetMap planet data', 'https://planet.openstreetmap.org/', 'download', 'global', 'weekly-daily diffs', 'ODbL', 'base map and points of interest', 'attribution and share-alike obligations'],
  ['osm-overpass', 'Global', 'geospatial', 'OpenStreetMap community', 'Overpass API', 'https://wiki.openstreetmap.org/wiki/Overpass_API', 'api', 'global', 'near-real-time', 'ODbL', 'query nearby public features', 'public instances have load limits'],
  ['osm-nominatim', 'Global', 'geocoding', 'OpenStreetMap Foundation', 'Nominatim usage policy', 'https://operations.osmfoundation.org/policies/nominatim/', 'api-policy', 'global', 'near-real-time', 'ODbL plus policy', 'geocoding with a compliant provider', 'public endpoint is not for bulk use'],
  ['wikidata', 'Global', 'linked-data', 'Wikimedia Foundation and community', 'Wikidata Query Service', 'https://query.wikidata.org/', 'sparql-api', 'global', 'continuous', 'CC0', 'multilingual entities and identifiers', 'community data requires provenance checks'],
  ['natural-earth', 'Global', 'geospatial', 'Natural Earth', 'Natural Earth Data', 'https://www.naturalearthdata.com/downloads/', 'download', 'global', 'versioned', 'public domain', 'small-scale boundaries and base layers', 'not suitable for precise local routing'],
  ['geonames', 'Global', 'geocoding', 'GeoNames', 'GeoNames geographical database', 'https://www.geonames.org/export/', 'api-download', 'global', 'frequent', 'CC BY 4.0', 'place names and alternate languages', 'account and rate limits for API'],
  ['unicode-cldr', 'Global', 'localization', 'Unicode Consortium', 'Unicode CLDR', 'https://cldr.unicode.org/index/downloads', 'download', 'global languages and locales', 'versioned', 'Unicode licence', 'locale names, plurals, dates and units', 'version changes need regression tests'],
  ['glottolog', 'Global', 'languages', 'Max Planck Institute for Evolutionary Anthropology', 'Glottolog', 'https://glottolog.org/meta/downloads', 'download', 'global languages', 'versioned', 'CC BY 4.0', 'language identifiers and classification', 'not a translation corpus'],
];

const registry = sources.map(([id, scope, domain, authority, name, url, access, coverage, updateCadence, license, recommendedUse, risk]) => ({
  id, scope, domain, authority, name, url, access, coverage, updateCadence, license, recommendedUse, risk,
  status: 'candidate',
  lastReviewed: '2026-08-11',
}));

function validate(data) {
  const errors = [];
  if (new Set(data.map((source) => source.id)).size !== data.length) errors.push('duplicate source IDs');
  for (const source of data) {
    if (!source.url.startsWith('https://')) errors.push(`${source.id}: URL must use HTTPS`);
    for (const field of ['authority', 'access', 'license', 'recommendedUse', 'risk']) {
      if (!source[field]) errors.push(`${source.id}: missing ${field}`);
    }
  }
  return errors;
}

const payload = {
  generatedAt: '2026-08-11',
  claimBoundary: 'High-value authoritative registry, not every database in the world.',
  publicationPolicy: 'No source is published into user-facing legal or emergency guidance without licence review, freshness check and human approval.',
  pipeline: ['discover', 'licence-review', 'fetch-raw', 'normalize', 'validate', 'human-review-sensitive-domains', 'publish', 'monitor-expiry'],
  count: registry.length,
  sources: registry,
};

const errors = validate(registry);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

if (process.argv.includes('--check')) {
  if (!existsSync(outputPath)) {
    console.error(`missing data registry: ${outputPath}`);
    process.exit(1);
  }
  const saved = JSON.parse(readFileSync(outputPath, 'utf8'));
  const savedErrors = validate(saved.sources ?? []);
  if (savedErrors.length || saved.count !== registry.length || JSON.stringify(saved.sources) !== JSON.stringify(registry)) {
    console.error([...savedErrors, 'data registry is stale'].join('\n'));
    process.exit(1);
  }
  console.log(`verified ${saved.count} authoritative data-source candidates`);
  process.exit(0);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`generated ${registry.length} data-source candidates in ${outputPath}`);
