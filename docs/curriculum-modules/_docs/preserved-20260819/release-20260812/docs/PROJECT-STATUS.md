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
- `npx tsc --noEmit --skipLibCheck` y `npm run build`: correctos tras la auditoría de enlaces.

## Auditoría de enlaces (agosto 2026)

Detalle completo en `docs/BROKEN-LINKS-AUDIT.md`.

- **Completada: 0 URLs con HTTP 404 en todo el proyecto** (escaneo GET paralelo de 986 URLs únicas de `resources.ts` y `rights-guide.ts`).
- Corregidas 194 URLs rotas: 4 en `open-source-hub.ts`, 17 en `external-courses.ts`, 140 en `resources.ts`, 33 en `rights-guide.ts`.
- `external-courses.ts` limpio: 81 URLs únicas verificadas, 0 rotas (los 403/timeouts de canva y Google Actívate eran bloqueos anti-bot, no enlaces muertos).
- Miríadax cerró en 2025 sin sucesor: los 10 cursos `mx-*` se remapearon a equivalentes de Coursera verificados y el provider del helper `m()` pasó a `Coursera`.
- SEPE y UNED rediseñaron sus portales: se actualizaron 15 cursos SEPE y 5 UNED a las URLs vigentes.
- Rediseños gubernamentales (sanidad, justicia, migraciones, SEPE, AEAT, BOE, comunidades autónomas) mapeados con agentes paralelos + verificación HTTP 200; 7 entradas sin equivalente se eliminaron (DELETE).
- 233 falsos positivos restantes: 403 anti-bot, timeouts y redirects; no son enlaces muertos.
- Validación final: `npx tsc --noEmit --skipLibCheck` limpio y `npm run build` OK.
- `/api/health` local: HTTP 200 y proveedor Groq detectado con las variables del perfil de Windows.
- La API directa de Groq respondió con el modelo ligero `llama-3.1-8b-instant`.

## Fuentes canónicas y DRIVE (reglas de trabajo)

- **Código fuente**: este directorio (`Documents\01_PROYECTOS\manos-abiertas-release-20260812`) es la copia canónica de trabajo. Rama `feat/cv-studio-courses-20260812`.
- **DRIVE** (`C:\Users\USER\Videos\DRIVE\01_PROYECTOS\voice-bot-saas` y el resto del árbol): es la sincronización local de Google Drive y se trata **solo lectura**. Para editar contenido que vive en DRIVE hay que pausar antes el cliente con `Get-Process GoogleDriveFS | Suspend-Process` y reanudarlo al terminar, o editar en el canon y luego sincronizar.
- **Assets compartidos** (`VoiceForge` y demás bajo DRIVE): son fuente de verdad para fotos/audio de otros proyectos; nunca borrar ni renombrar desde este proyecto.
- **DUCK**: canon en `Desktop\DUCK-A-GEMA-1-LAB`.

## Pendiente de producto

- La ruta `/api/chat` ya devuelve una respuesta local HTTP 200 cuando un proveedor remoto falla; el proveedor remoto queda identificado en `provider` cuando responde correctamente.
- Añadir moderación y autenticación opcional al foro.
- Añadir calendario exportable, notificaciones opt-in y pruebas E2E.
- Revisar enlaces vivos y licencias por país antes de presentarlos como recomendación legal.
