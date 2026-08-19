# Manos Abiertas: matriz world-class

Generado: 2026-08-11

## Alcance verificable

- 3.000 casos de cobertura unicos: 30 superficies reales x 10 contextos de usuario x 10 lentes de calidad.
- Limite: son 300 cambios tecnicos evaluados en 10 contextos, no 3.000 implementaciones independientes.
- P0: 786
- P1: 1290
- P2: 924
- Fuente completa: `improvements-3000.jsonl`.
- Estado inicial: `proposed`. Ningun caso cuenta como aplicado hasta adjuntar evidencia.

## Uso

1. Seleccionar P0 por superficie y dependencia.
2. Cambiar a `in-progress` solo al iniciar implementacion.
3. Cambiar a `verified` solo con la evidencia indicada.
4. Regenerar con `npm run strategy:generate`.
5. Validar con `npm run strategy:verify`.

## Primeros 50 P0

| ID | Superficie | Lente | Contexto | Archivo |
|---|---|---|---|---|
| MA-0001 | Inicio por necesidades | utility | first-72h | src/components/manos-abiertas/home-section.tsx |
| MA-0005 | Inicio por necesidades | privacy | first-72h | src/components/manos-abiertas/home-section.tsx |
| MA-0006 | Inicio por necesidades | resilience | first-72h | src/components/manos-abiertas/home-section.tsx |
| MA-0007 | Inicio por necesidades | trust | first-72h | src/components/manos-abiertas/home-section.tsx |
| MA-0011 | Inicio por necesidades | utility | low-literacy | src/components/manos-abiertas/home-section.tsx |
| MA-0015 | Inicio por necesidades | privacy | low-literacy | src/components/manos-abiertas/home-section.tsx |
| MA-0016 | Inicio por necesidades | resilience | low-literacy | src/components/manos-abiertas/home-section.tsx |
| MA-0017 | Inicio por necesidades | trust | low-literacy | src/components/manos-abiertas/home-section.tsx |
| MA-0021 | Inicio por necesidades | utility | screen-reader | src/components/manos-abiertas/home-section.tsx |
| MA-0025 | Inicio por necesidades | privacy | screen-reader | src/components/manos-abiertas/home-section.tsx |
| MA-0026 | Inicio por necesidades | resilience | screen-reader | src/components/manos-abiertas/home-section.tsx |
| MA-0027 | Inicio por necesidades | trust | screen-reader | src/components/manos-abiertas/home-section.tsx |
| MA-0031 | Inicio por necesidades | utility | motor-disability | src/components/manos-abiertas/home-section.tsx |
| MA-0035 | Inicio por necesidades | privacy | motor-disability | src/components/manos-abiertas/home-section.tsx |
| MA-0036 | Inicio por necesidades | resilience | motor-disability | src/components/manos-abiertas/home-section.tsx |
| MA-0037 | Inicio por necesidades | trust | motor-disability | src/components/manos-abiertas/home-section.tsx |
| MA-0041 | Inicio por necesidades | utility | limited-connectivity | src/components/manos-abiertas/home-section.tsx |
| MA-0045 | Inicio por necesidades | privacy | limited-connectivity | src/components/manos-abiertas/home-section.tsx |
| MA-0046 | Inicio por necesidades | resilience | limited-connectivity | src/components/manos-abiertas/home-section.tsx |
| MA-0047 | Inicio por necesidades | trust | limited-connectivity | src/components/manos-abiertas/home-section.tsx |
| MA-0051 | Inicio por necesidades | utility | non-spanish | src/components/manos-abiertas/home-section.tsx |
| MA-0055 | Inicio por necesidades | privacy | non-spanish | src/components/manos-abiertas/home-section.tsx |
| MA-0056 | Inicio por necesidades | resilience | non-spanish | src/components/manos-abiertas/home-section.tsx |
| MA-0057 | Inicio por necesidades | trust | non-spanish | src/components/manos-abiertas/home-section.tsx |
| MA-0061 | Inicio por necesidades | utility | urgent-rights | src/components/manos-abiertas/home-section.tsx |
| MA-0062 | Inicio por necesidades | accessibility | urgent-rights | src/components/manos-abiertas/home-section.tsx |
| MA-0065 | Inicio por necesidades | privacy | urgent-rights | src/components/manos-abiertas/home-section.tsx |
| MA-0066 | Inicio por necesidades | resilience | urgent-rights | src/components/manos-abiertas/home-section.tsx |
| MA-0067 | Inicio por necesidades | trust | urgent-rights | src/components/manos-abiertas/home-section.tsx |
| MA-0071 | Inicio por necesidades | utility | job-seeker | src/components/manos-abiertas/home-section.tsx |
| MA-0075 | Inicio por necesidades | privacy | job-seeker | src/components/manos-abiertas/home-section.tsx |
| MA-0076 | Inicio por necesidades | resilience | job-seeker | src/components/manos-abiertas/home-section.tsx |
| MA-0077 | Inicio por necesidades | trust | job-seeker | src/components/manos-abiertas/home-section.tsx |
| MA-0081 | Inicio por necesidades | utility | learner | src/components/manos-abiertas/home-section.tsx |
| MA-0085 | Inicio por necesidades | privacy | learner | src/components/manos-abiertas/home-section.tsx |
| MA-0086 | Inicio por necesidades | resilience | learner | src/components/manos-abiertas/home-section.tsx |
| MA-0087 | Inicio por necesidades | trust | learner | src/components/manos-abiertas/home-section.tsx |
| MA-0091 | Inicio por necesidades | utility | support-worker | src/components/manos-abiertas/home-section.tsx |
| MA-0095 | Inicio por necesidades | privacy | support-worker | src/components/manos-abiertas/home-section.tsx |
| MA-0096 | Inicio por necesidades | resilience | support-worker | src/components/manos-abiertas/home-section.tsx |
| MA-0097 | Inicio por necesidades | trust | support-worker | src/components/manos-abiertas/home-section.tsx |
| MA-0101 | Onboarding | utility | first-72h | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0105 | Onboarding | privacy | first-72h | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0106 | Onboarding | resilience | first-72h | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0107 | Onboarding | trust | first-72h | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0111 | Onboarding | utility | low-literacy | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0115 | Onboarding | privacy | low-literacy | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0116 | Onboarding | resilience | low-literacy | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0117 | Onboarding | trust | low-literacy | src/components/manos-abiertas/onboarding-wizard.tsx |
| MA-0121 | Onboarding | utility | screen-reader | src/components/manos-abiertas/onboarding-wizard.tsx |
