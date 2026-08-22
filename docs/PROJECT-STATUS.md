# Manos Abiertas · estado del proyecto

## Identidad

Manos Abiertas es una experiencia de aprendizaje y orientación de NOIACORE, el ecosistema madre de Belentani. Está dirigida a comunidades latinoamericanas, brasileñas, migrantes y personas que necesitan aprender tecnología, preparar su vida laboral y encontrar información fiable en España.

Contacto operativo: `belentani7studio@proton.me`.

## Plataforma

- Next.js 16, React 19, TypeScript, Tailwind y Zustand.
- Netlify como despliegue público y GitHub como control de versiones.
- PWA, service worker y tutor local para continuar sin conexión.
- Progreso, CV, carta, favoritos, recordatorios, chat y ruta personal guardados localmente.
- Foro compartido con Netlify Blobs y fallback local.
- 39 idiomas y banco de descubrimiento de información, libros/audio, vídeo y material abierto.
- Directorio de chats externos sin API propia y servicios de imagen/ilustración para futuras integraciones.
- Diagnóstico interno en `/api/health` y monitor visible de estado.

## Ruta personal

La página de inicio ahora convierte el contenido en una secuencia guiada: empleo, alfabetización digital, trámites o comunidad. Cada persona puede elegir una meta, abrir el siguiente recurso, marcar pasos y continuar en el mismo dispositivo.

## Chat y autogestión

Orden de proveedores: Groq, NVIDIA NIM, Z.ai y modo local. Groq y NVIDIA usan modelos ligeros configurables. Un error de red o proveedor no debe dejar la plataforma inutilizable: el navegador usa `offline-tutor.ts`.

La capa de diagnóstico informa del proveedor configurado sin exponer claves, comprueba conectividad y mantiene el modo local como capacidad principal de recuperación.

## Verificación realizada

- `bun run lint`: correcto.
- `bunx tsc --noEmit --skipLibCheck`: correcto.
- `bun run build`: correcto.
- `/api/health` local: HTTP 200 y proveedor Groq detectado con las variables del perfil de Windows.
- La comprobación histórica de Groq usó `llama-3.1-8b-instant`. El valor por defecto se migró el 13 de agosto de 2026 a `openai/gpt-oss-20b`, reemplazo oficial antes del cierre del modelo anterior el 16 de agosto. La nueva llamada remota queda pendiente de validación con una clave y presupuesto autorizados.

## Pendiente de producto

- La ruta `/api/chat` ya devuelve una respuesta local HTTP 200 cuando un proveedor remoto falla; el proveedor remoto queda identificado en `provider` cuando responde correctamente.
- Añadir moderación y autenticación opcional al foro.
- Añadir calendario exportable, notificaciones opt-in y pruebas E2E.
- Revisar enlaces vivos y licencias por país antes de presentarlos como recomendación legal.
