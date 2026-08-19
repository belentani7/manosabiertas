# PROMPT-INTERNACIONALIZACION — Capa i18n completa de Manos Abiertas

> Serie de prompts y documentos del proyecto "Manos Abiertas".
> Este prompt es el hermano técnico de la capa de internacionalización. Se apoya en:
> MASTER-PROMPT-PERFECTO (capa técnica base), PROMPT-MINIMAL-EXIGENTE (capa evidencia),
> PROMPT-UTILIDAD-FINAL (capa persona), PROMPT-VISION-PLATAFORMA (12 módulos M1-M12)
> y PROMPT-BANCO-DATOS-ABIERTO (catálogo open-source).
> Alcance: SOLO la capa i18n del frontend. El resto de capas se gobiernan por sus propios prompts.

## 1. Rol, contexto y restricciones

Actúas como ingeniero senior de internacionalización y producto. No improvisas: cada bloque
tiene alcance, datos, medida de acabado y una prueba obligatoria. Un bloque no está terminado
hasta que su prueba pasa en las condiciones descritas.

Contexto del proyecto:
- Plataforma "Manos Abiertas" para inmigrantes en España y Portugal.
- Público: baja alfabetización digital, acceso mayoritario por móvil, 39 idiomas.
- Stack: Next.js 16 con next-intl, sin backend externo (despliegue Netlify standalone).
- Marca: paleta cálida terracota, saffron y oliva. Prohibido azul, índigo y gradientes.
- Prioridad de idiomas: es, pt, en, fr, ar.

Restricciones transversales:
- Dependencias nuevas solo si son imprescindibles; prefiere APIs nativas (Intl).
- No hay backend: la preferencia de idioma se persiste en cookie y localStorage.
- No se construyen módulos de la visión (M1-M12): solo la capa i18n que los soportará.
- Prohibido el fallback silencioso: una key faltante rompe el build.
- No se usan emojis en la interfaz ni en los mensajes.
- Toda la UI usa propiedades lógicas CSS (inline/block) para soportar RTL sin CSS espejo.

## 2. Inventario de locales (dato base)

Los 39 locales se organizan en tres niveles de calidad. Los niveles 2 y 3 usan traducción
automática y se marcan como tales.

| Nivel | Locales (código BCP 47) | Origen de traducción | Metadata |
|-------|--------------------------|----------------------|----------|
| 1 | es, pt, en, fr, ar | Humana, revisada por nativo | `quality: "human"` |
| 2 | de, it, ro, pl, uk, ru, bg, el, nl, hu, cs, sk, sl, hr, sr, tr, ca | Automática con revisión léxica mínima | `quality: "auto"` |
| 3 | zh, ja, ko, hi, ur, bn, fa, tl, vi, th, id, sw, am, ne, so, pa, sq | Automática | `quality: "auto"` |

Total: 5 + 17 + 17 = 39 locales.

Locales con escritura RTL: ar, ur, fa. El resto es LTR.

## 3. Entregables de la capa (contrato)

Cada bloque entrega al menos un artefacto verificable en el repositorio. Este contrato define
que se espera y donde debe vivir.

| Bloque | Entregable | Ubicacion |
|--------|-----------|-----------|
| B.1 | Configuracion next-intl y 39 locales | `src/i18n/` y `messages/<locale>.json` |
| B.2 | Direccion RTL y layout espejado | `app/[locale]/layout.tsx` y CSS logico |
| B.3 | Plurales y genero ICU | `messages/*.json` |
| B.4 | Metadata de calidad por locale | `config/locales.ts` y etiqueta en selector |
| B.5 | Script de cobertura de keys | `scripts/i18n/check-coverage.mjs` |
| B.6 | SEO multilingue | `sitemap`, `generateMetadata`, hreflang |
| B.7 | Helpers de formato Intl | `src/lib/format.ts` |
| B.8 | Deteccion y persistencia de idioma | `src/lib/user.ts` |

## B.1 — next-intl y estructura de archivos

- Alcance: configurar next-intl para los 39 locales; estructura `messages/<locale>.json`;
  prerenderizado estático de las 39 versiones (sin servidor); selector de idioma en la cabecera;
  locale por defecto `es`, sin prefijo en la URL raíz.
- Datos: un JSON por locale en `messages/`, con estructura de claves idéntica en todos;
  rutas con prefijo `/es`, `/pt`, ... y `/` para español. Estructura de claves:

```json
{
  "nav": { "inicio": "Inicio", "aprender": "Aprender", "ayuda": "Ayuda" },
  "home": { "titulo": "Bienvenida", "cta": "Empezar" },
  "plurals": { "dias": "{count, plural, one {# dia} other {# dias}}" }
}
```

- Medida de acabado: las 39 versiones prerenderizan sin errores; el selector muestra las 39;
  `es` responde en `/` y `/es` sin duplicar el canonical.
- Prueba obligatoria:
  - AFIRMACIÓN: `next build` genera las 39 versiones estáticas y el selector funciona.
  - PRUEBA: `npm run build` y navegar a `/`, `/es`, `/ar`, `/hi`.
  - SALIDA: build sin errores y las 4 rutas responden 200 con contenido localizado.

## B.2 — RTL (dirección de escritura)

- Alcance: ar, ur y fa con `dir="rtl"`; interfaz espejada; sin hacks de estilos por idioma;
  `lang` y `dir` declarados en el elemento raíz para accesibilidad y SEO.
- Datos: atributos por locale.

| Locale | dir | Uso en la plataforma |
|--------|-----|----------------------|
| ar | rtl | Interfaz completa, formularios y lecturas |
| ur | rtl | Interfaz completa |
| fa | rtl | Interfaz completa |
| resto | ltr | Interfaz completa |

- Medida de acabado: al cambiar a ar, la alineación, flechas y tiempos se invierten sin saltos
  de layout; ningún contenedor se desborda en viewport móvil.
- Prueba obligatoria:
  - AFIRMACIÓN: `/ar` renderiza con `dir="rtl"` y layout espejado.
  - PRUEBA: inspeccionar el atributo `dir` del elemento `html` en `/ar` y capturar viewport 360 px.
  - SALIDA: `dir="rtl"` presente y sin desbordamiento horizontal.

## B.3 — Plurales y género

- Alcance: reglas ICU de plural y concordancia de género para los 39 locales; sin cadenas
  concatenadas tipo `"X dias"`; todo plural pasa por next-intl.
- Datos: familias de reglas de plural por locale.

| Familia | Reglas ICU | Locales |
|---------|-----------|---------|
| romance/germánico | one, other | es, pt, en, fr, de, it, nl, ca, gl... |
| eslavo oriental | one, few, many, other | ru, uk, sl, hr, sr, bg, sk, cs, pl |
| árabe | zero, one, two, few, many, other | ar |
| resto | one, other | tr, zh, ja, ko, hi, ur, bn, fa, tl, vi, th, id, sw, am, ne, so, pa, sq |

- Medida de acabado: cada cadena con plural pasa el lint de ICU; el género se resuelve con
  variantes explícitas en los idiomas con concordancia (es, pt, fr) y con formas neutras
  (autoinclusivas) en los demás.
- Prueba obligatoria:
  - AFIRMACIÓN: los contadores y adjetivos concuerdan en 0, 1, 2, 5 en ar, ru, uk y es.
  - PRUEBA: suite de render que evalúa `count = 0, 1, 2, 5` en esos cuatro locales.
  - SALIDA: sin errores ICU y cadenas gramaticalmente válidas.

## B.4 — Calidad de traducción (humana vs automática)

- Alcance: declarar el origen de traducción por locale; los 5 prioritarios con calidad humana
  y el resto con traducción automática explícitamente marcada; etiqueta visible de idioma
  "traducción automática" en el selector para los niveles 2 y 3.
- Datos: metadata por locale (ver tabla del apartado 2); campo `quality` en cada JSON y en
  `config/locales.ts` junto al `status`.
- Medida de acabado: un script valida que es, pt, en, fr, ar tengan `quality: "human"` y que
  ningún locale humano quede marcado como automático o al revés.
- Prueba obligatoria:
  - AFIRMACIÓN: la metadata refleja el origen real de cada traducción.
  - PRUEBA: ejecutar `scripts/i18n/check-quality.mjs`.
  - SALIDA: informe con los 39 locales y su nivel, 0 discrepancias.

## B.5 — Cobertura y detección de keys sin traducir

- Alcance: script `scripts/i18n/check-coverage.mjs` que usa `es` como canon y compara las keys
  de cada locale; porcentaje de cobertura por locale; el build falla si alguna key falta (no
  hay fallback silencioso).
- Datos: formato de informe por locale.

| Locale | Keys esperadas | Keys presentes | Cobertura | Estado |
|--------|---------------|----------------|-----------|--------|
| es | 120 | 120 | 100 % | OK |
| ar | 120 | 118 | 98,3 % | BLOQUEA |
| hi | 120 | 104 | 86,7 % | BLOQUEA |

- Medida de acabado: cobertura 100 % en los 39 locales antes de cada `next build`; informe
  accesible con `npm run i18n:check`.
- Prueba obligatoria:
  - AFIRMACIÓN: eliminar una key de `messages/ar.json` y el build falla con la ruta de la key.
  - PRUEBA: borrar temporalmente una key, ejecutar `npm run i18n:check`, restaurarla.
  - SALIDA: error localizando la key faltante y, al restaurar, cobertura 100 %.

## B.6 — SEO multilingüe

- Alcance: `hreflang` para los 39 locales más `x-default`; canonical por locale; sitemap por
  locale (`sitemap-<locale>.xml`) y sitemap índice; títulos y descripciones localizadas vía
  `generateMetadata`; Open Graph localizado.
- Datos: matriz de metadatos por ruta y locale.

| Ruta | hreflang | Canonical | Meta localizada |
|------|----------|-----------|-----------------|
| / | 39 alternates + x-default | https://dominio/ | es |
| /pt | 39 alternates | https://dominio/pt | pt |
| /ar | 39 alternates | https://dominio/ar | ar (títulos en árabe, dir rtl) |

- Medida de acabado: cada ruta incluye los 39 `link rel="alternate" hreflang` y su canonical
  propio; el sitemap índice enlaza los 39 sitemaps; títulos de nivel 1 en idioma del locale.
- Prueba obligatoria:
  - AFIRMACIÓN: `/es`, `/pt` y `/ar` exponen alternates y canonical correctos.
  - PRUEBA: solicitar `/sitemap.xml` e inspeccionar el `<head>` de las tres rutas.
  - SALIDA: 39 alternates en cada `<head>` y sitemap índice completo.

## B.7 — Formato de fechas, números y monedas (Intl API)

- Alcance: helpers tipados que centralizan `Intl.DateTimeFormat`, `Intl.NumberFormat`,
  `Intl.RelativeTimeFormat` y `Intl.ListFormat` usando el locale activo; sin `toLocaleString`
  sueltos en componentes.
- Datos: ejemplos esperados por locale.

| Locale | Fecha | Número | Porcentaje |
|--------|-------|--------|------------|
| es | 3 de agosto de 2026 | 12.345,67 | 45 % |
| pt | 3 de agosto de 2026 | 12.345,67 | 45 % |
| en | August 3, 2026 | 12,345.67 | 45% |
| fr | 3 août 2026 | 12 345,67 | 45 % |
| ar | 3 أغسطس 2026 | ١٢٬٣٤٥٫٦٧ | ٤٥٪ |

- Medida de acabado: la plataforma no muestra precios propios (es gratuita); si se muestran
  importes, se usa EUR con formato del locale; todos los formateos pasan por los helpers.
- Prueba obligatoria:
  - AFIRMACIÓN: una misma fecha se muestra con formato correcto en es, en, fr y ar.
  - PRUEBA: snapshot de un componente con fecha y número en los cuatro locales.
  - SALIDA: salida idéntica a la tabla de datos y sin excepciones de Intl.

## B.8 — Datos de usuario y detección de idioma

- Alcance: detectar `navigator.language` al primer acceso; mapear a un locale soportado;
  persistir la elección del usuario en cookie (prevalente sobre la detección); nombre de
  usuario en localStorage para personalizar la cabecera; defecto `es`.
- Datos: reglas de mapeo.

| navigator.language | Locale activado | Comentario |
|--------------------|-----------------|------------|
| es-ES, es-MX, es-AR | es | Regionales colapsan a es |
| pt-PT, pt-BR | pt | Colapsan a pt |
| en-US, en-GB, fr-FR, fr-CA | en, fr | Colapsan al idioma |
| ar-SA, ar-EG, ur, fa | ar, ur, fa | Colapsan al idioma |
| cualquier otro o ausente | es | Defecto documentado |

- Medida de acabado: un usuario nuevo aterriza en su idioma o en `es`; la preferencia elegida
  en el selector persiste entre páginas y visitas; el nombre mostrado en cabecera se conserva
  en la sesión.
- Prueba obligatoria:
  - AFIRMACIÓN: la detección y la preferencia guardada se respetan.
  - PRUEBA: simular `navigator.language = "pt-BR"` en devtools, recargar, luego elegir `ar`
    en el selector y volver a recargar.
  - SALIDA: primera carga en `pt`, cargas siguientes en `ar`; cookie y localStorage poblados.

## 4. Puerta de salida global

El trabajo de esta capa se considera completo cuando todas las pruebas obligatorias de los
bloques B.1 a B.8 pasan y el informe de cobertura marca 100 % en los 39 locales. Cualquier
regresión detectada después de la entrega se registra como issue de bloqueo y se corrige
antes de tocar otros módulos.

## Recordatorio final

- Entrega los 8 bloques con sus pruebas pasando; no declares terminado un bloque sin su SALIDA.
- La cobertura del 100 % y el bloqueo de build son la medida de acabado de la capa; no la negocies.
- La marca terracota/saffron/oliva y la prohibición de azul y gradientes se aplican en el selector
  de idioma y en las etiquetas de calidad.
- Los 5 idiomas prioritarios son humanos; el resto se marca automático y visible.
- Si algo cambia en los locales o en las claves, actualiza primero la tabla de inventario.
