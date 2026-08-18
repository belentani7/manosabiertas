## Remote image/font references
src/components/manos-abiertas/document-templates.tsx:64:      <style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;white-space:pre-wrap;}</style>
src/components/manos-abiertas/resources-section.tsx:73:body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; color: #333; }
public/ecosystem.html:9:    *{box-sizing:border-box}html,body{width:100%;height:100%;margin:0;background:#071014;color:#f4f6f2;font-family:system-ui,sans-serif;overflow:hidden}canvas{position:fixed;inset:0;width:100%;height:100%;display:block}.copy{position:relative;z-index:1;height:100%;padding:clamp(22px,5vw,72px);display:flex;flex-direction:column;justify-content:space-between;pointer-events:none}.brand{font-size:clamp(12px,1.2vw,16px);font-weight:700;letter-spacing:.16em}.center{width:min(900px,100%);min-width:0}.eyebrow{font-size:12px;text-transform:uppercase;color:#9bb8b2}.center h1{margin:10px 0;font-size:clamp(48px,10vw,142px);line-height:.86;letter-spacing:0;font-weight:780}.center p{width:min(620px,100%);margin:20px 0 0;font-size:clamp(14px,2vw,20px);line-height:1.5;color:#c7d0ca;overflow-wrap:anywhere}.foot{display:flex;justify-content:space-between;gap:16px;font:12px ui-monospace,monospace;color:#9bb8b2}.back{position:fixed;z-index:2;right:20px;top:20px;display:grid;place-items:center;width:44px;height:44px;border:1px solid #688079;background:#071014;color:#fff;text-decoration:none;pointer-events:auto}.back:focus-visible{outline:3px solid #f2b84b;outline-offset:3px}@media(max-width:560px){.center h1{font-size:clamp(44px,16vw,64px)}.foot{flex-direction:column}.copy{padding:22px}.brand{max-width:calc(100% - 60px)}}@media(prefers-reduced-motion:reduce){canvas{opacity:.8}}

## Runtime network calls
src/components/manos-abiertas/ai-assistant.tsx:101:      const resp = await fetch('/api/chat', {
src/components/manos-abiertas/ai-playground.tsx:59:      const resp = await fetch('/api/chat', {
src/components/manos-abiertas/ai-study-tools.tsx:34:      const resp = await fetch('/api/study-tools', {
src/components/manos-abiertas/ai-study-tools.tsx:63:      const resp = await fetch('/api/study-tools', {
src/components/manos-abiertas/ats-analyzer.tsx:80:      const resp = await fetch('/api/cv/ats', {
src/components/manos-abiertas/community-section.tsx:355:    fetch('/api/community')
src/components/manos-abiertas/community-section.tsx:403:      const response = await fetch('/api/community', {
src/components/manos-abiertas/cover-letter-builder.tsx:86:      const resp = await fetch('/api/cover-letter', {
src/components/manos-abiertas/cv-section.tsx:198:      const resp = await fetch('/api/cv/generate', {
src/components/manos-abiertas/system-awareness.tsx:22:      const response = await fetch('/api/health', { cache: 'no-store', signal: AbortSignal.timeout(4000) });
src/components/manos-abiertas/master-station-app.tsx:120:      const response = await fetch('/api/chat', {
src/lib/ai-provider.ts:13:  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
src/services/audio-generation.ts:197:      // const response = await fetch('...google-tts-endpoint...', { ... });
src/services/audio-generation.ts:314:    // Would fetch from database

## Environment/API references
src/app/[locale]/layout.tsx:39:        LANGUAGES.map((l) => [l.code, `${process.env.NEXT_PUBLIC_SITE_URL || 'https://manosabiertas.space-z.ai'}/${l.code}`])
src/app/[locale]/page.tsx:40:      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://manosabiertas.space-z.ai'}/${locale}`,
src/app/layout.tsx:19:  process.env.NEXT_PUBLIC_SITE_URL ?? "https://manosabiertas.space-z.ai";
src/app/sitemap.ts:4:  process.env.NEXT_PUBLIC_SITE_URL ?? "https://manosabiertas.space-z.ai";
src/data/ai-courses.ts:370:// 2. GEMINI — Google
src/lib/ai-provider.ts:31:  const groqKey = process.env.GROQ_API_KEY;
src/lib/ai-provider.ts:33:    return callCompatibleProvider('groq', groqKey, process.env.GROQ_BASE_URL || 'https://api.groq.com/openai/v1', process.env.GROQ_MODEL || 'llama-3.1-8b-instant', messages, maxTokens);
src/lib/ai-provider.ts:36:  const nvidiaKey = process.env.NVIDIA_API_KEY || process.env.NVIDIA_NIM_API_KEY || process.env.NVIDIA_ALT_KEY;
src/lib/ai-provider.ts:38:    return callCompatibleProvider('nvidia', nvidiaKey, process.env.NVIDIA_BASE_URL || 'https://integrate.api.nvidia.com/v1', process.env.NVIDIA_MODEL || 'meta/llama-3.3-70b-instruct', messages, maxTokens);
src/lib/ai-provider.ts:45:  if (process.env.GROQ_API_KEY) return 'groq';
src/lib/ai-provider.ts:46:  if (process.env.NVIDIA_API_KEY || process.env.NVIDIA_NIM_API_KEY || process.env.NVIDIA_ALT_KEY) return 'nvidia';
src/lib/ai-provider.ts:47:  if (process.env.ZAI_API_KEY || process.env.Z_AI_API_KEY) return 'zai';
src/lib/db.ts:13:if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
next.config.ts:4:  output: process.env.NEXT_OUTPUT_MODE === "netlify" ? undefined : "standalone",
