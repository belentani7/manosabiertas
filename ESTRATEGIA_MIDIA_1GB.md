# Estratégia de Mídia (1GB de Vídeo & 1GB de Áudio) no Manos Abiertas

Este documento define como o volume massivo de 1GB de vídeo educacional e 1GB de áudio (narração multilíngue e trilhas de suporte) é hospedado, indexado e consumido sem sobrecarregar o cliente ou estourar os limites de banda e armazenamento estático.

## 1. Diretrizes de Armazenamento e Distribuição
- **Armazenamento Externo / CDN**: Arquivos de vídeo e áudio de alta capacidade (1GB cada) não devem ser versionados diretamente no repositório Git do Manos Abiertas, pois aumentariam o tempo de clone e excederiam limites de provedores serverless. Devem ser hospedados em bucket S3 dedicado ou CDN otimizada.
- **Carregamento Progressivo (Streaming)**: Os vídeos são divididos em segmentos HLS ou disponibilizados via links diretos otimizados (`.mp4` compactados em H.264), permitindo reprodução sob demanda sem download prévio integral.
- **Áudios Offline-First**: Os arquivos de áudio (podcasts dos módulos e transcrições em formato `.mp3`) são disponibilizados para cache local via Service Worker (PWA), permitindo que estudantes ouçam as aulas mesmo sem conexão constante com a internet.

## 2. Integração com a Estação Windows
Na interface do Explorador de Arquivos (`ExplorerApp`) e na Biblioteca de Módulos, os ativos de mídia aparecem como arquivos indexados:
- `modulo-01-intro.mp4` (Vídeo didático - 450 MB)
- `llms-fundamentos.mp3` (Áudio narrado - 120 MB)
- `powershell-pratica.mp4` (Vídeo laboratório - 380 MB)
