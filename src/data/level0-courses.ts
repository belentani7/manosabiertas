// Manos Abiertas - Cursos Nivel 0: Alfabetización Digital para adultos 40+
// Diseñados para personas que NUNCA han usado un ordenador o lo usan con dificultad
// Enfoque: paso a paso, sin tecnicismos, con emojis y lenguaje cotidiano

export interface Level0Course {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  level: 0 | 1 | 2;
  targetAge: string;
  duration: string;
  lessons: Level0Lesson[];
}

export interface Level0Lesson {
  id: string;
  title: string;
  duration: string;
  emoji: string;
  content: string;
  steps: string[];
  tip: string;
  encouragement: string;
  practice?: string;
}

export const LEVEL0_COURSES: Level0Course[] = [
  {
    id: 'nivel0-ordenador',
    title: 'Mi Primer Ordenador',
    description: 'Para personas que nunca han tocado un ordenador o tienen miedo de romper algo. Empezamos desde encenderlo.',
    emoji: '🖥️',
    color: 'from-emerald-400 to-teal-500',
    level: 0,
    targetAge: '40+ años, sin experiencia',
    duration: '2 horas total',
    lessons: [
      {
        id: 'n0-1',
        title: 'Encender y apagar el ordenador',
        duration: '15 min',
        emoji: '🔌',
        content: `¡Hola! 👋 Bienvenido/a a tu primera clase de ordenador.

No te preocupes, no puedes romper nada. Vamos a empezar por lo más básico: encender y apagar el ordenador.

El ordenador es como una televisión con cerebro. Tiene una pantalla (como la TV), un teclado (como el del móvil pero más grande) y un ratón (para señalar cosas en la pantalla).`,
        steps: [
          'Busca el botón de encendido. Suele ser un botón redondo en la caja del ordenador (no en la pantalla). A veces tiene este símbolo: ⏻',
          'Púlsalo una vez. No lo mantengas pulsado, solo un toque.',
          'Espera. El ordenador tarda 1-2 minutos en encenderse. Verás imágenes en la pantalla, como cuando enciendes la TV.',
          'Cuando veas una imagen con iconos (cuadraditos con dibujos), ¡ya está encendido! 🎉',
          'Para apagar: busca el botón "Inicio" (abajo a la izquierda, es un logo de Windows o un círculo). Haz clic en "Apagar".',
        ],
        tip: 'Si el ordenador no enciende, comprueba que el cable de corriente está enchufado a la pared. Como una lámpara.',
        encouragement: '¡Lo estás haciendo genial! Mucha gente mayor aprende esto cada día. No hay prisa.',
        practice: 'Enciende y apaga el ordenador 3 veces. Cada vez será más fácil.',
      },
      {
        id: 'n0-2',
        title: 'El ratón: señalar y hacer clic',
        duration: '20 min',
        emoji: '🖱️',
        content: `El ratón 🖱️ es como tu dedo en la pantalla. Lo mueves por la mesa y una flechita se mueve por la pantalla.

Hay dos cosas que haces con el ratón:
1. **Mover**: desliza el ratón por la mesa. La flecha se mueve igual que tu mano.
2. **Hacer clic**: pulsas el botón izquierdo una vez. Como pulsar el botón del móvil.`,
        steps: [
          'Agarra el ratón con la mano. El cable hacia arriba (si tiene cable).',
          'Coloca el dedo índice sobre el botón izquierdo (el de la izquierda).',
          'Mueve el ratón por la mesa. Mira cómo la flecha se mueve en la pantalla.',
          'Lleva la flecha hasta un icono (un cuadradito con dibujo) en la pantalla.',
          'Pulsa el botón izquierdo una vez. Esto se llama "hacer clic".',
          'Si haces dos clics rápidos (clic, clic), se llama "doble clic" y abre cosas.',
        ],
        tip: 'Si el ratón no se mueve bien, comprueba que está sobre una superficie lisa. Una hoja de papel funciona.',
        encouragement: '¡El ratón es lo más difícil al principio! Si te cuesta, es normal. Practica 5 minutos al día y en una semana serás un/a experto/a.',
        practice: 'Mueve el ratón hasta cada esquina de la pantalla. Haz clic en cada icono que veas.',
      },
      {
        id: 'n0-3',
        title: 'El teclado: escribir letras',
        duration: '20 min',
        emoji: '⌨️',
        content: `El teclado ⌨️ es como el de tu móvil, pero con más teclas y más grandes.

Las teclas más importantes:
- Las letras del alfabeto (A, B, C...)
- La barra espaciadora (la barra larga de abajo) - para dejar espacios
- La tecla "Enter" o "Intro" - para confirmar algo, como el OK del móvil
- La tecla "Borrar" o "Retroceso" (con una flecha ←) - para borrar lo que escribiste`,
        steps: [
          'Busca la tecla "A". Está a la izquierda del teclado.',
          'Púlsala una vez. Verás que aparece una "a" en la pantalla.',
          'Busca la barra espaciadora (la más larga, abajo del todo). Púlsala para hacer un espacio.',
          'Escribe tu nombre completo.',
          'Si te equivocas, usa la tecla "Borrar" (←) para borrar la última letra.',
          'Pulsa "Enter" cuando termines.',
        ],
        tip: 'No mires el teclado. Intenta recordar dónde está cada letra. Al principio cuesta, pero poco a poco lo harás sin pensar.',
        encouragement: 'Escribir en el ordenador es como aprender a escribir a mano. Al principio es lento, pero luego vas rápido. ¡No te rindas!',
        practice: 'Escribe el nombre de toda tu familia. Luego bórralo y escríbelo otra vez.',
      },
      {
        id: 'n0-4',
        title: 'Ventanas: abrir, cerrar y mover',
        duration: '15 min',
        emoji: '🪟',
        content: `En el ordenador, las cosas se abren en "ventanas" 🪟. Como las ventanas de casa, pero en la pantalla.

Cada programa (como Word, o el navegador de internet) se abre en una ventana. Puedes tener varias ventanas abiertas a la vez.`,
        steps: [
          'Abre algo haciendo doble clic en un icono.',
          'Verás que aparece un rectángulo en la pantalla. ¡Eso es una ventana!',
          'Arriba a la derecha hay tres botones: ─ (minimizar), ▢ (maximizar) y ✕ (cerrar).',
          'Haz clic en ─ : la ventana se esconde. No se borra, solo se guarda.',
          'Haz clic en ▢ : la ventana se hace grande (toda la pantalla) o pequeña.',
          'Haz clic en ✕ : la ventana se cierra. Como colgar el teléfono.',
        ],
        tip: 'Si una ventana se cierra por accidente, no pasa nada. Solo vuelve a hacer doble clic en el icono para abrirla otra vez.',
        encouragement: 'Manejar ventanas es como cocinar varios platos a la vez. Cada uno en su fuego. ¡Tú puedes!',
        practice: 'Abre 3 ventanas. Cierra una. Maximiza otra. Minimiza la tercera.',
      },
      {
        id: 'n0-5',
        title: 'Archivos y carpetas',
        duration: '20 min',
        emoji: '📁',
        content: `Los archivos 📄 son como papeles. Las carpetas 📁 son como carpetas de papel reales: sirven para guardar papeles dentro.

En el ordenador guardas cosas: documentos de texto, fotos, música. Todo eso son "archivos". Y los guardas en "carpetas" para encontrarlos después.`,
        steps: [
          'Busca el icono de una carpeta amarilla. Suele estar en el escritorio o en "Inicio".',
          'Haz doble clic para abrirla. Verás lo que hay dentro.',
          'Para crear una carpeta nueva: haz clic con el botón derecho del ratón en un espacio vacío.',
          'Selecciona "Nueva" → "Carpeta". Aparecerá una carpeta amarilla nueva.',
          'Escribe un nombre (ej: "Mis fotos") y pulsa Enter.',
          '¡Ya tienes tu primera carpeta! 🎉',
        ],
        tip: 'Pon nombres claros a las carpetas: "Facturas 2024", "Fotos nietos", "Recetas". Así encontrarás todo rápido.',
        encouragement: 'Organizar archivos es como organizar tu casa. Al principio cuesta, pero luego todo es más fácil de encontrar.',
        practice: 'Crea 3 carpetas: una para documentos, una para fotos y una para música.',
      },
      {
        id: 'n0-6',
        title: 'Conectar a Internet por primera vez',
        duration: '15 min',
        emoji: '🌐',
        content: `Internet 🌐 es como una biblioteca mundial gigante. Desde tu ordenador puedes ver páginas de todo el mundo.

Para conectarte necesitas:
1. Una conexión a Internet (WiFi o cable)
2. Un "navegador" (el programa que abre las páginas web)`,
        steps: [
          'Busca el icono del navegador. Puede ser: Google Chrome (un círculo de colores), Edge (una "e" azul) o Firefox (un zorro alrededor del mundo).',
          'Haz doble clic para abrirlo.',
          'Arriba verás una barra larga. Ahí escribes dónde quieres ir.',
          'Escribe: google.com y pulsa Enter.',
          '¡Verás la página de Google! Es como el índice de la biblioteca.',
          'Ahora puedes escribir lo que buscas en el recuadro del centro.',
        ],
        tip: 'Si no tienes Internet, llama a tu compañía de teléfono. Te pueden instalar WiFi en casa por unos 30-40€ al mes.',
        encouragement: '¡Ya estás en Internet! 🎉 Acabas de conectarte con todo el mundo. Esto es solo el principio.',
        practice: 'Abre el navegador y esscribe google.com. Busca "recetas de paella".',
      },
    ],
  },
  {
    id: 'nivel0-movil',
    title: 'Descubre tu Móvil',
    description: 'Tu móvil Android o iPhone puede hacer mucho más que llamadas. Aprende a usar WhatsApp, hacer fotos y más.',
    emoji: '📱',
    color: 'from-blue-400 to-cyan-500',
    level: 0,
    targetAge: '40+ años, uso básico del móvil',
    duration: '2 horas total',
    lessons: [
      {
        id: 'm0-1',
        title: 'Conocer tu móvil: botones y pantalla',
        duration: '15 min',
        emoji: '📱',
        content: `Tu móvil 📱 es un pequeño ordenador que cabe en la mano. Tiene:

- **Pantalla táctil**: la tocas con el dedo para usarlo. No hace falta presionar fuerte, un toque suave basta.
- **Botón de encendido**: normalmente en el lado derecho. Para encender/apagar la pantalla.
- **Botón de volumen**: en el lado izquierdo. Para subir/bajar el sonido.
- **Cámara**: en la parte de atrás. Para hacer fotos.`,
        steps: [
          'Pulsa el botón de encendido una vez. Se enciende la pantalla.',
          'Desliza el dedo hacia arriba (desde abajo) para desbloquear.',
          'Verás "iconos" (cuadraditos con dibujos). Cada uno es una aplicación (app).',
          'Para abrir una app, tócala con el dedo. Como pulsar un botón del ascensor.',
          'Para volver a la pantalla principal, pulsa el botón redondo de abajo (o desliza hacia arriba).',
        ],
        tip: 'Si la pantalla se apaga mientras la miras, es normal. Ahorra batería. Pulsa el botón de encendido para volver a verla.',
        encouragement: '¡El móvil es tu mejor herramienta! Con práctica, lo usarás tan bien como tus hijos o nietos.',
        practice: 'Enciende el móvil 5 veces. Abre y cierra 3 aplicaciones diferentes.',
      },
      {
        id: 'm0-2',
        title: 'WhatsApp: enviar mensajes y fotos',
        duration: '25 min',
        emoji: '💬',
        content: `WhatsApp 💬 es la aplicación más usada en España. Sirve para:
- Enviar mensajes de texto (como SMS pero gratis)
- Enviar fotos
- Hacer llamadas y videollamadas
- Crear grupos (familia, trabajo, vecinos)

El símbolo de WhatsApp es un teléfono verde con un auricular. 📱`,
        steps: [
          'Busca el icono verde de WhatsApp en tu móvil. Tócalo para abrirlo.',
          'Verás una lista de "chats" (conversaciones). Si no tienes ninguno, no pasa nada.',
          'Para escribir a alguien: pulsa el botón verde con un lápiz (abajo a la derecha).',
          'Elige un contacto de tu agenda. Si no tienes contactos, primero añade el número en la agenda del móvil.',
          'Escribe tu mensaje en la barra de abajo (donde dice "Escribe un mensaje").',
          'Pulsa el botón verde de enviar (una flecha de papel). ¡Mensaje enviado! 🎉',
          'Para enviar una foto: pulsa el icono de la cámara 📷, elige una foto y envíala.',
        ],
        tip: 'Los ticks (✓) indican si tu mensaje llegó: 1 ✓ = enviado, 2 ✓ = entregado, 2 ✓ azules = leído.',
        encouragement: 'WhatsApp es como escribir una carta, pero instantánea. ¡Mantente en contacto con tu familia!',
        practice: 'Envía un mensaje "Hola, estoy aprendiendo a usar el móvil" a un familiar o amigo.',
      },
      {
        id: 'm0-3',
        title: 'Hacer fotos y vídeos',
        duration: '20 min',
        emoji: '📷',
        content: `Tu móvil tiene una cámara 📷. Puedes hacer fotos y vídeos como con una cámara de fotos, pero más fácil.

Las fotos se guardan en la "galería" o "fotos" del móvil. Es como un álbum de fotos digital.`,
        steps: [
          'Busca el icono de la cámara 📷 en tu móvil. Tócalo.',
          'Verás la imagen de la cámara. Apunta a lo que quieres fotografiar.',
          'Pulsa el botón redondo grande (abajo del todo). ¡Click! 📸',
          'La foto se guarda automáticamente.',
          'Para ver tus fotos: busca el icono de "Galería" o "Fotos" (suele ser una flor o un cuadrado con montañas).',
          'Para hacer un vídeo: desliza el botón de "Foto" a "Vídeo" y pulsa el botón rojo para grabar.',
        ],
        tip: 'Si la foto sale oscura, toca la pantalla donde hay más luz. El móvil ajustará automáticamente.',
        encouragement: '¡Las fotos son recuerdos! Haz fotos de tu familia, tus viajes y tu vida. No borres nada, todo es valioso.',
        practice: 'Haz 5 fotos: una de tu casa, una de la calle, una de tu comida, una tuya y una de un objeto que te guste.',
      },
      {
        id: 'm0-4',
        title: 'Llamadas y videollamadas',
        duration: '15 min',
        emoji: '📞',
        content: `Puedes llamar por teléfono 📞 como siempre, pero también puedes hacer **videollamadas**: ver a la persona mientras hablas. ¡Como estar en la misma habitación!

Para videollamadas puedes usar:
- WhatsApp (la más fácil)
- Google Duo
- FaceTime (solo iPhone)`,
        steps: [
          'Abre WhatsApp y entra en un chat.',
          'Pulsa el icono de teléfono 📞 (arriba a la derecha) para una llamada normal.',
          'O pulsa el icono de cámara 📹 para una videollamada.',
          'La otra persona tiene que contestar. Cuando lo haga, la verás en la pantalla.',
          'Para colgar, pulsa el botón rojo de teléfono.',
        ],
        tip: 'Las videollamadas gastan datos de Internet. Si tienes WiFi en casa, úsala para no gastar datos.',
        encouragement: '¡Ver la cara de tus seres queridos aunque estén lejos es mágico! La tecnología acerca a las personas.',
        practice: 'Haz una videollamada a un familiar o amigo. Dile: "¡Estoy aprendiendo a usar el móvil!"',
      },
      {
        id: 'm0-5',
        title: 'Descargar aplicaciones (apps)',
        duration: '15 min',
        emoji: '📥',
        content: `Las "apps" 📱 son programas para tu móvil. Como los programas del ordenador, pero más pequeños.

Hay apps para todo: bancos, noticias, recetas, ejercicio, idiomas...

Para descargar apps necesitas:
- En Android: la "Play Store" (icono de un triángulo de colores)
- En iPhone: el "App Store" (icono azul con una A)`,
        steps: [
          'Abre la Play Store o App Store.',
          'Arriba hay una barra de búsqueda. Tócala y escribe lo que buscas (ej: "banco Santander").',
          'Verás una lista de apps. Toca la que quieras.',
          'Pulsa "Instalar" o "Obtener".',
          'Espera a que se descargue (verás un círculo girando).',
          'Cuando termine, pulsa "Abrir". ¡Listo! 🎉',
        ],
        tip: 'Solo descarga apps de la Play Store o App Store. No descargues nada de mensajes o páginas raras. Puede ser un virus.',
        encouragement: '¡Hay millones de apps! Empieza por las que necesites: tu banco, WhatsApp, Google Maps. Una a una.',
        practice: 'Descarga una app útil: Google Maps, tu banco, o una app de noticias.',
      },
    ],
  },
  {
    id: 'nivel0-internet',
    title: 'Internet Sin Miedo',
    description: 'Aprende a navegar por Internet de forma segura: buscar en Google, leer noticias, comprar online sin peligro.',
    emoji: '🌐',
    color: 'from-violet-400 to-purple-500',
    level: 0,
    targetAge: '40+ años, uso básico de Internet',
    duration: '2 horas total',
    lessons: [
      {
        id: 'i0-1',
        title: 'Buscar en Google como un profesional',
        duration: '20 min',
        emoji: '🔍',
        content: `Google 🔍 es como un bibliotecario que lo sabe todo. Le preguntas algo y te da respuestas.

Pero hay que saber preguntar bien. Aquí te enseño los trucos.`,
        steps: [
          'Abre el navegador (Chrome, Edge o Firefox).',
          'Escribe google.com en la barra de arriba.',
          'En el recuadro del centro, escribe lo que buscas. Ej: "recetas de lentejas".',
          'Pulsa Enter. Verás una lista de páginas con la respuesta.',
          'La primera respuesta suele ser la mejor. Haz clic en el título azul para abrirla.',
          'Si no te gusta, vuelve atrás (flecha ← del navegador) y prueba otra.',
        ],
        tip: 'Cuanto más específico seas, mejor. "Recetas de lentejas rápidas para 2 personas" es mejor que solo "lentejas".',
        encouragement: '¡Google responde a todo! Si tienes una duda, búscala. Nadie nace sabiendo, todos aprendemos buscando.',
        practice: 'Busca 3 cosas: 1) El teléfono de tu ayuntamiento 2) Una receta que te guste 3) El horario de tu médico',
      },
      {
        id: 'i0-2',
        title: 'Correo electrónico: tu dirección digital',
        duration: '25 min',
        emoji: '📧',
        content: `El correo electrónico 📧 (o "email") es como el correo de toda la vida, pero instantáneo y gratis.

Necesitas una dirección de email para casi todo hoy en día:
- Para pedir cita médica
- Para registrarte en webs
- Para recibir facturas
- Para trabajar

La dirección de email tiene este formato: tu.nombre@gmail.com`,
        steps: [
          'Ve a gmail.com en tu navegador.',
          'Pulsa "Crear cuenta".',
          'Escribe tu nombre y apellidos.',
          'Elige tu dirección de email. Ej: maria.gonzalez@gmail.com',
          'Pon una contraseña que recuerdes. Apúntala en un papel.',
          'Pulsa "Siguiente" hasta terminar.',
          '¡Ya tienes email! 🎉',
        ],
        tip: 'Tu contraseña debe tener: 8+ letras, un número y una mayúscula. Ej: Madrid2024! Apúntala en un papel y guárdalo seguro.',
        encouragement: 'El email es tu dirección en Internet. Con él puedes hacer trámites, pedir citas y mucho más. ¡Esencial!',
        practice: 'Crea tu email. Luego envíate un email a ti mismo con el asunto "Mi primer email".',
      },
      {
        id: 'i0-3',
        title: 'Seguridad online: no te engañen',
        duration: '20 min',
        emoji: '🛡️',
        content: `En Internet, como en la vida, hay personas buenas y personas malas. Pero si sigues estas reglas, estarás seguro/a 🛡️:

1. Nunca des tus contraseñas a nadie
2. No abras correos de desconocidos
3. No hagas clic en enlaces raros
4. Desconfía de "premios" y "ofertas increíbles"
5. Si algo te parece sospechoso, no lo abras`,
        steps: [
          'REGLA 1: Tu contraseña es como la llave de casa. No se la des a nadie.',
          'REGLA 2: Si recibes un email que dice "¡Has ganado 1 millón!", es FALSO. Bórralo.',
          'REGLA 3: Si un email te pide tus datos del banco, es UN ENGAÑO (phishing). Ningún banco los pide por email.',
          'REGLA 4: Antes de comprar online, mira que la web tenga un candado 🔒 en la barra del navegador.',
          'REGLA 5: Si no estás seguro/a de algo, pregunta a alguien de confianza.',
        ],
        tip: 'Los estafadores usan la urgencia: "¡Tienes 24 horas o perderás tu cuenta!". Si te presionan, desconfía.',
        encouragement: 'La seguridad es como ponerle llave a la puerta de casa. Con这些 hábitos, estarás protegido/a.',
        practice: 'Revisa tus emails. ¿Hay alguno sospechoso? Si lo hay, no lo abras y bórralo.',
      },
      {
        id: 'i0-4',
        title: 'Leer noticias y buscar información',
        duration: '15 min',
        emoji: '📰',
        content: `Internet tiene todas las noticias del mundo 📰. Puedes leer:
- Noticias de España y tu ciudad
- El tiempo meteorológico
- Resultados deportivos
- Salud y consejos
- Trámites del gobierno`,
        steps: [
          'Para noticias: escribe en Google "noticias España" o entra en rtve.es, elmundo.es, elpais.com',
          'Para el tiempo: busca "tiempo Madrid" (o tu ciudad) en Google. Verás la previsión de 7 días.',
          'Para trámites: entra en sede.administracionpublica.gob.es para trámites del gobierno.',
          'Para salud: busca "sanidad [tu comunidad]" para pedir cita médica online.',
        ],
        tip: 'No creas todo lo que lees en Internet. Las webs oficiales del gobierno (.gob.es) son fiables. Las redes sociales pueden tener noticias falsas.',
        encouragement: 'Estar informado/a es un derecho. Internet te da acceso a toda la información del mundo, gratis.',
        practice: 'Busca la previsión del tiempo para tu ciudad para los próximos 7 días.',
      },
      {
        id: 'i0-5',
        title: 'Comprar online sin miedo',
        duration: '20 min',
        emoji: '🛒',
        content: `Comprar por Internet 🛒 es fácil y seguro si sabes cómo:

- Amazon: la tienda más grande del mundo
- Mercadona online: compra el súper desde casa
- Vinted: ropa de segunda mano
- Booking: reservar hoteles

Solo necesitas tu tarjeta bancaria y saber dónde comprar.`,
        steps: [
          'Entra en la web donde quieres comprar (ej: amazon.es).',
          'Busca el producto en la barra de búsqueda.',
          'Cuando lo encuentres, pulsa "Añadir al carrito" (icono de un carrito 🛒).',
          'Cuando termines de comprar, pulsa "Finalizar pedido".',
          'Introduce tu dirección de entrega.',
          'Paga con tu tarjeta. Mira que la web tenga el candado 🔒 en la barra.',
          '¡Recibirás tu compra en casa en 2-3 días! 📦',
        ],
        tip: 'Compara precios antes de comprar. El mismo producto puede costar diferente en varias webs. Usa Google Shopping.',
        encouragement: 'Comprar online es como ir al supermercado sin salir de casa. Útil para días de lluvia o si no puedes caminar.',
        practice: 'Entra en amazon.es y busca algo que necesites. No hace falta que lo compres, solo practica buscar.',
      },
    ],
  },
  {
    id: 'nivel0-oficina',
    title: 'Oficina Básica para el Trabajo',
    description: 'Word y Excel desde cero, para personas que necesitan estas herramientas para trabajar pero nunca las han usado.',
    emoji: '💼',
    color: 'from-amber-400 to-orange-500',
    level: 1,
    targetAge: '40+ años, buscando empleo',
    duration: '3 horas total',
    lessons: [
      {
        id: 'o0-1',
        title: 'Word: escribir tu primer documento',
        duration: '25 min',
        emoji: '📄',
        content: `Word 📄 es como un cuaderno digital. Escribes en él cartas, currículums, notas... cualquier texto.

Es la herramienta más usada en oficinas. Si buscas trabajo, necesitas saber usar Word.`,
        steps: [
          'Abre Word. Busca el icono azul con una "W" en tu ordenador.',
          'Verás una hoja blanca. Como un folio en blanco.',
          'Haz clic en la hoja y empieza a escribir. Las letras aparecen donde está el cursor (la rayita que parpadea).',
          'Para cambiar el tamaño de letra: arriba hay un número (11 o 12). Cámbialo a 14 para que sea más grande.',
          'Para poner negrita: selecciona el texto (arrastra el ratón sobre él) y pulsa el botón "N" de arriba.',
          'Para guardar: pulsa "Archivo" → "Guardar como" → elige dónde guardarlo → ponle nombre → "Guardar".',
        ],
        tip: 'Guarda tu trabajo cada 5 minutos. Si se va la luz, no pierdes lo que escribiste. Pulsa Ctrl + S (o Cmd + S en Mac).',
        encouragement: 'Word es como escribir a mano, pero mejor. Puedes borrar sin tachar, mover cosas y corregir errores. ¡Tú puedes!',
        practice: 'Escribe una carta de 3 líneas a alguien. Pon algunas palabras en negrita. Guárdala como "Mi primera carta".',
      },
      {
        id: 'o0-2',
        title: 'Excel: tu primera tabla',
        duration: '30 min',
        emoji: '📊',
        content: `Excel 📊 es como un cuaderno cuadriculado. Sirve para:
- Hacer listas (de la compra, de gastos, de clientes)
- Calcular números (sumar, restar, multiplicar)
- Hacer presupuestos

Parece difícil, pero es fácil si empiezas por lo básico. Lo usan contables, administrativos y comerciales.`,
        steps: [
          'Abre Excel. Icono verde con una "X".',
          'Verás cuadraditos. Cada cuadradito se llama "celda". Es como una casilla.',
          'Haz clic en el primer cuadradito (A1) y escribe: "Producto".',
          'En el siguiente (B1) escribe: "Precio".',
          'En C1 escribe: "Cantidad".',
          'En D1 escribe: "Total".',
          'Debajo de Producto escribe: "Pan". Debajo de Precio: "1,50". Debajo de Cantidad: "3".',
          'En D2 (el Total) escribe: =B2*C2 y pulsa Enter. ¡Excel calcula 4,50 automáticamente! 🎉',
        ],
        tip: 'El símbolo = al principio le dice a Excel "quiero que calcules algo". Sin el =, Excel no calcula.',
        encouragement: 'Excel parece un monstruo, pero es tu mejor amigo para los números. Empieza por listas simples y ve subiendo.',
        practice: 'Haz una tabla con 5 productos de la compra. Calcula el total de cada uno y la suma final.',
      },
      {
        id: 'o0-3',
        title: 'Imprimir documentos',
        duration: '15 min',
        emoji: '🖨️',
        content: `Imprimir 🖨️ es pasar lo que ves en la pantalla a papel. Necesitas una impresora conectada al ordenador.

Se imprime desde casi cualquier programa: Word, Excel, páginas web, fotos.`,
        steps: [
          'Abre el documento que quieres imprimir.',
          'Pulsa "Archivo" → "Imprimir" (o Ctrl + P).',
          'Verás una ventana. Comprueba que dice tu impresora arriba.',
          'Elige cuántas copias quieres (normalmente 1).',
          'Pulsa "Imprimir".',
          'La impresora empezará a sacar el papel. ¡Espera a que termine! 📄',
        ],
        tip: 'Antes de imprimir, comprueba que hay papel en la impresora y que tiene tinta/tóner.',
        encouragement: 'Imprimir es fácil. Lo difícil es decidir qué imprimir. ¡No imprimas cosas que no necesites!',
        practice: 'Escribe algo en Word e imprímelo. Si no tienes impresora, practica el proceso Ctrl+P y cancela.',
      },
    ],
  },
  {
    id: 'nivel1-linux',
    title: 'Linux sin Miedo',
    description: 'Aprende a orientarte, organizar archivos, instalar aplicaciones y usar una terminal de práctica en un escritorio Linux.',
    emoji: '🐧',
    color: 'from-slate-600 to-emerald-600',
    level: 1,
    targetAge: 'Personas que ya usan ratón y teclado',
    duration: '2 horas y 15 minutos',
    lessons: [
      {
        id: 'linux-1',
        title: 'Conocer el escritorio Linux',
        duration: '20 min',
        emoji: '🖥️',
        content: `Linux es un sistema operativo, igual que Windows o Android. Distribuciones como Linux Mint y Ubuntu preparan el escritorio, las aplicaciones y las actualizaciones para que puedas usarlos juntos.

Los nombres y colores pueden cambiar, pero casi todos los escritorios tienen un menú de aplicaciones, un panel, un área de notificaciones y una carpeta personal.`,
        steps: [
          'Localiza el menú de aplicaciones. Puede llamarse Menú, Actividades o Mostrar aplicaciones.',
          'Abre el gestor de archivos y reconoce tu Carpeta personal.',
          'Busca el área de red, sonido, batería y apagado.',
          'Abre una aplicación y practica minimizarla, maximizarla y cerrarla.',
          'Vuelve al escritorio sin apagar el equipo.',
        ],
        tip: 'Practica primero en el simulador de Herramientas. La simulación no instala ni modifica nada en tu ordenador.',
        encouragement: 'Ya conoces la lógica principal: menú, ventanas, archivos y estado. El aspecto cambia; la idea permanece.',
        practice: 'Abre el simulador Linux, entra en Actividades y localiza Archivos, Terminal y Configuración.',
      },
      {
        id: 'linux-2',
        title: 'Archivos, carpetas y memoria USB',
        duration: '25 min',
        emoji: '📁',
        content: `Tu Carpeta personal guarda Documentos, Descargas, Imágenes y otras carpetas. Una memoria USB aparece como una unidad externa y debe expulsarse antes de retirarla.

Linux distingue mayúsculas y minúsculas: "CV.pdf" y "cv.pdf" pueden ser dos archivos diferentes.`,
        steps: [
          'Abre la Carpeta personal y crea una carpeta llamada Practica-Linux.',
          'Dentro, crea las carpetas Documentos, Fotos y Copias.',
          'Copia un archivo de prueba y pégalo en Copias.',
          'Renombra la copia con una fecha clara, por ejemplo CV-2026-08.pdf.',
          'Si conectas una memoria USB, usa Expulsar antes de retirarla.',
        ],
        tip: 'No uses la Papelera como archivo. Organiza primero y vacíala solo cuando hayas revisado lo que contiene.',
        encouragement: 'Copiar, mover y renombrar son las mismas habilidades que ya conoces de otros sistemas.',
        practice: 'Crea la estructura Practica-Linux/Documentos/Copias y mueve un archivo de prueba entre carpetas.',
      },
      {
        id: 'linux-3',
        title: 'Aplicaciones y alternativas libres',
        duration: '25 min',
        emoji: '🧰',
        content: `La tienda o gestor de software permite buscar aplicaciones desde una fuente central. Para tareas habituales puedes usar Firefox, LibreOffice, VLC, GIMP o aplicaciones web.

Instala solo desde la tienda del sistema o la web oficial del proyecto. Revisa el nombre del desarrollador y los permisos antes de aceptar.`,
        steps: [
          'Abre la tienda o gestor de software.',
          'Busca LibreOffice y lee su descripción sin instalar todavía.',
          'Comprueba el nombre, la fuente, el tamaño y los permisos disponibles.',
          'Busca una aplicación ya instalada desde el menú y añádela a favoritos.',
          'Aprende a cerrarla y a quitarla de favoritos sin desinstalarla.',
        ],
        tip: 'Una aplicación gratuita no necesita claves descargadas desde foros ni instaladores de sitios desconocidos.',
        encouragement: 'Elegir una fuente segura es más importante que memorizar dónde está cada botón.',
        practice: 'Haz una lista de tres tareas y una alternativa libre para cada una: escribir, editar imágenes y reproducir vídeo.',
      },
      {
        id: 'linux-4',
        title: 'Terminal segura para principiantes',
        duration: '30 min',
        emoji: '⬛',
        content: `La terminal permite escribir instrucciones. No hace falta usarla para todo, pero conocer comandos de lectura ayuda a comprender el sistema.

Empieza con comandos que solo muestran información. Lee cada instrucción antes de ejecutarla y evita copiar comandos que pidan privilegios si no entiendes su efecto.`,
        steps: [
          'Abre el simulador Terminal dentro de Herramientas.',
          'Escribe ayuda y pulsa Enter.',
          'Ejecuta fecha para ver una respuesta.',
          'Ejecuta listar para reconocer una lista de carpetas y archivos.',
          'Escribe limpiar para reiniciar la pantalla de práctica.',
        ],
        tip: 'La terminal de Manos Abiertas es una simulación local. Sus comandos no llegan al sistema operativo real.',
        encouragement: 'La terminal deja de intimidar cuando practicas primero con instrucciones pequeñas y comprensibles.',
        practice: 'Completa la secuencia ayuda, fecha, listar y limpiar en el simulador.',
      },
      {
        id: 'linux-5',
        title: 'Actualizaciones, contraseñas y copias',
        duration: '35 min',
        emoji: '🛡️',
        content: `Mantener el sistema actualizado corrige errores y problemas de seguridad. Una contraseña de administración autoriza cambios importantes; no la compartas ni la escribas en mensajes.

Antes de una actualización grande o de cambiar de sistema, guarda una copia de tus documentos importantes en otra unidad fiable.`,
        steps: [
          'Abre el gestor de actualizaciones desde el menú.',
          'Lee la lista y confirma que la conexión y la batería son suficientes.',
          'Cierra documentos abiertos antes de iniciar cambios importantes.',
          'Copia tus documentos esenciales en una unidad separada y verifica que se abren.',
          'Reinicia solo cuando el sistema lo solicite y no interrumpas una actualización en curso.',
        ],
        tip: 'Una copia existe cuando puedes abrirla desde el destino. Ver un icono o una barra completa no basta.',
        encouragement: 'Actualizar con calma y comprobar las copias convierte una tarea técnica en una rutina segura.',
        practice: 'Diseña una lista de cinco archivos importantes y dónde guardarías una segunda copia verificable.',
      },
    ],
  },
];

export function getLevel0Stats() {
  const totalLessons = LEVEL0_COURSES.reduce((acc, c) => acc + c.lessons.length, 0);
  return { courses: LEVEL0_COURSES.length, lessons: totalLessons };
}

console.log('Level 0 courses:', LEVEL0_COURSES.length, 'lessons:', getLevel0Stats().lessons);
