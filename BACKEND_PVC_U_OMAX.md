# Backend Organizado — Manos Abiertas + Protocolo PVC-U Ω-Max

Este documento descreve a nova organização do backend do projeto **Manos Abiertas**, aplicando os princípios, esferas de validação e arquitetura hexagonal do protocolo **PVC-U Ω-Max**.

## 1. Arquitetura Hexagonal
O backend foi estruturado em quatro camadas principais dentro de `src/server/`:
- **`domain/`**: Entidades centrais, Value Objects e o contrato do `ValidationEnvelope`.
- **`application/`**: Casos de uso e o motor de validação multi-esfera (`pvc-validator.ts`).
- **`infrastructure/`**: Adaptadores de persistência, segurança e comunicação externa.
- **`presentation/`**: Rotas da API Next.js App Router (ex: `/api/hand-tracking/`).

## 2. Esferas de Validação Ativas
O motor de validação processa cada requisição através de seis esferas fundamentais:
1. **Esfera 1 (Estrutural):** Validação de sintaxe e tipos de dados via Zod e esquemas base.
2. **Esfera 2 (Semântica):** Invariantes de agregado e regras de negócio.
3. **Esfera 3 (Contexto e Estado):** Transições permitidas e máquinas de estado.
4. **Esfera 4 (Segurança e Sanitización):** Proteção contra XSS, sanitização e rate limiting.
5. **Esfera 5 (Protocolo e Versão):** Versionamento de contrato (`Ω-Max-1.0.0`) e rastreabilidade distribuída (`traceId`).
6. **Esfera 6 (Integridade Criptográfica):** Validação de assinaturas e envelopes inmutáveis.

## 3. Endpoint de Rastreamento de Mãos (Nós A/B/C)
A rota `/api/hand-tracking/` processa perfis de teste e aplica automaticamente os nós de correção do protocolo:
- **Nó A**: Restrições cinemáticas para inversões articulares.
- **Nó B**: Filtragem temporal para mitigação de *jitter*.
- **Nó C**: Adaptação de luminância e equalização local.
