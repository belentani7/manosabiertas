# Guia de Integração: Estação Windows & Mimetização HTML no Manos Abiertas

Este documento detalha a arquitetura e a estratégia para integrar os simuladores de ferramentas Windows (`CMD`, `PowerShell`, `Notepad`, `Explorer`, `Calculadora`, `Task Manager`) e o curso massivo de 12 módulos diretamente no ecossistema do **Manos Abiertas**.

## 1. Objetivos da Integração
- **Apoio Educacional Multilíngue:** Fornecer aos usuários e migrantes um ambiente seguro para praticar comandos de terminal e edição de texto sem risco ao dispositivo real.
- **Funcionamento Offline:** Preservar a capacidade de execução no navegador (Client-Side), garantindo soberania de dados e acesso sem dependência de nuvem.
- **Coesão Visual:** Alinhar o design da estação com a paleta e os padrões do Manos Abiertas.

## 2. Componentes Implementados
1. **`WindowsStation.tsx`**: O componente central interativo que gerencia o estado das janelas, o simulador de comandos e o explorador de arquivos didáticos.
2. **Módulos do Curso**: Os 12 módulos cobrindo Windows, Android, LLMs, CMD, PowerShell, Claude AI, Claude Code, HTML, Java e Python.
3. **Persistência Local**: Armazenamento de estado no navegador para acompanhar o progresso do aluno.
