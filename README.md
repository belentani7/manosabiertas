# Manos Abiertas · Ecosistema Educativo Global y Protocolo Ω-MAX

> **Autoría y Liderazgo**: Pedro Belentani  
> **Plataforma Oficial**: [mismanosabiertas.netlify.app](https://mismanosabiertas.netlify.app/)  
> **Repositorio Canónico Unificado**: [github.com/belentani7/manosabiertas](https://github.com/belentani7/manosabiertas)

---

## 🏛️ Propósito y Visión del Proyecto Unificado

**Manos Abiertas** es la plataforma educativa de código abierto definitiva diseñada para la integración socioeducativa, laboral y digital de las comunidades inmigrantes y familias en España. Este repositorio unifica todo el ecosistema en una única fuente oficial:

1. **Currículo Maestro de 1.000 Puntos (Nivel 0 a Experto)**: Organizado en 10 áreas académicas transversales (desde alfabetización digital básica hasta desarrollo web avanzado y ciberseguridad).
2. **Estación de Herramientas Nativas en la App**:
   - **CV Maker Pro**: Constructor de currículum con vista previa en tiempo real y exportación corporativa.
   - **AI Studio**: Tutor conversacional impulsado por IA con guardrails y soporte offline.
   - **Terminales Seguras (Linux & Windows PowerShell)**: Simuladores didácticos de práctica para entornos operativos.
3. **Protocolo PVC-U Ω-MAX**: Arquitectura hexagonal estricta con validación determinista en múltiples esferas y sobres de auditoría (*Validation Envelope*).
4. **Soporte Multilingüe**: Diseñado para cubrir las 39 comunidades lingüísticas más representativas en España con transparencia editorial.

---

## Português (Brasil)

Plataforma web gratuita para pessoas brasileiras, latino-americanas e comunidades migrantes em Espanha. Ensina inteligência artificial e Office, ajuda a preparar o currículo, orienta sobre procedimentos e direitos, reúne recursos verificados e oferece ferramentas práticas.

### Inclui

- Cursos de IA e Office com progresso guardado localmente.
- Criador de currículo, carta de apresentação e modelos.
- Guias de direitos, documentos e procedimentos.
- Biblioteca mundial de recursos educativos e sociais.
- Comunidade, eventos, lembretes e favoritos.
- Assistente de IA com resposta local quando não há ligação ou API.
- PWA instalável e suporte offline depois da primeira visita.
- Exportação e importação do progresso em JSON, sem conta obrigatória.

### Desenvolvimento local

```bash
npm ci
npm run dev
```

Verificações:

```bash
npm run lint
npx tsc --noEmit --skipLibCheck
npm run build
```

### Netlify

O projeto está preparado para ser publicado a partir do GitHub através de `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `.next`
- Node: `22`

O Netlify executa as rotas `/api/*` como funções serverless. A aplicação continua útil sem IA remota, porque o tutor local, os cursos e o progresso funcionam no navegador.

### Dados e privacidade

O progresso pessoal fica guardado no dispositivo. Os temas do fórum podem ser partilhados através do Netlify Blobs. Não são incluídos `.env`, base de dados local nem exportações do ambiente de trabalho no repositório. Perfis, respostas completas e sincronização do progresso exigem autenticação serverless.

---

## Español latino

Plataforma web gratuita para personas brasileñas, latinoamericanas y comunidades migrantes en España. Enseña inteligencia artificial y Office, ayuda a preparar el CV, orienta sobre trámites y derechos, reúne recursos verificados y ofrece herramientas prácticas.

### Incluye

- Cursos de IA y Office con progreso local.
- Creador de CV, carta de presentación y plantillas.
- Guías de derechos, documentos y procesos.
- Biblioteca mundial de recursos educativos y sociales.
- Comunidad, eventos, recordatorios y favoritos.
- Asistente IA con respuesta local cuando no hay conexión o API.
- PWA instalable y soporte offline después de la primera visita.
- Exportación e importación del progreso en JSON, sin cuenta obligatoria.

### Netlify

El proyecto está preparado para desplegarse desde GitHub con `netlify.toml`. Netlify ejecuta las rutas `/api/*` como funciones serverless. La aplicación sigue siendo útil sin IA remota porque el tutor local, los cursos y el progreso funcionan en el navegador.

Los datos personales de progreso se guardan en el dispositivo. Los temas del foro pueden compartirse mediante Netlify Blobs. Los perfiles, respuestas completas y la sincronización del progreso requieren autenticación serverless.

---

## English

Free web platform for Brazilian and Latin American people and migrant communities in Spain. It teaches artificial intelligence and Office, helps users prepare a CV, explains procedures and rights, gathers verified resources, and provides practical tools.

### Includes

- AI and Office courses with local progress tracking.
- CV builder, cover letter and templates.
- Rights, documents and process guides.
- A worldwide library of educational and social resources.
- Community, events, reminders and favorites.
- An AI assistant with a local fallback when there is no connection or API.
- Installable PWA and offline support after the first visit.
- JSON progress export and import, with no required account.

### Netlify

The project is ready to deploy from GitHub through `netlify.toml`. Netlify runs the `/api/*` routes as serverless functions. The application remains useful without remote AI because the local tutor, courses and progress tracking run in the browser.

Personal progress stays on the device. Forum topics can be shared through Netlify Blobs. Profiles, full replies and progress synchronization require serverless authentication.
