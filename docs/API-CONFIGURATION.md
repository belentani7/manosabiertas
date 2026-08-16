# APIs y autogestión

## Variables admitidas

Configurar en el entorno local o en Netlify, nunca dentro del código:

- `GROQ_API_KEY`
- `GROQ_MODEL` opcional; valor por defecto: `openai/gpt-oss-20b`
- `GROQ_BASE_URL` opcional; por defecto: `https://api.groq.com/openai/v1`
- `NVIDIA_API_KEY`, `NVIDIA_NIM_API_KEY` o `NVIDIA_ALT_KEY`
- `NVIDIA_MODEL` opcional; valor ligero por defecto: `meta/llama-3.3-70b-instruct`
- `NVIDIA_BASE_URL` opcional; por defecto: `https://integrate.api.nvidia.com/v1`

## Orden de uso

1. Groq.
2. NVIDIA NIM.
3. Z.ai existente.
4. Tutor determinista local en el navegador.

El código solo devuelve el nombre del proveedor y nunca el valor de una clave. Netlify necesita recibir estas variables en la configuración del sitio si se quiere usar la API también en producción; las variables del PC no se trasladan automáticamente a Netlify.

## Autodiagnóstico

`GET /api/health` devuelve producto, ecosistema, proveedor detectado y capacidades. El endpoint no hace una llamada de generación ni expone secretos. El componente `system-awareness.tsx` lo consulta, observa online/offline y ofrece reintento manual.

## Fuentes técnicas

- [Groq OpenAI compatibility](https://console.groq.com/docs/openai)
- [Groq chat completions](https://console.groq.com/docs/api-reference)
- [Groq model deprecations](https://console.groq.com/docs/deprecations)
- [NVIDIA NIM LLM APIs](https://docs.api.nvidia.com/nim/reference/llm-apis)
- [fal.ai model APIs](https://fal.ai/docs/documentation/model-apis/overview)
- [Stability AI API](https://platform.stability.ai/docs/api-reference)
