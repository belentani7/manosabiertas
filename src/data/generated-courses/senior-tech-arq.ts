import type { GeneratedCourse } from './ciberseguridad';

const seniorTech: GeneratedCourse = {
  id: 'senior-tech-arquitectura-ingenieria',
  title: 'Senior Tech: proyectos, BIM abierto e IA práctica',
  description:
    'Actualiza tu flujo de trabajo profesional paso a paso: organiza proyectos, entiende BIM abierto, visualiza maquetas 3D exportadas de forma autorizada y prepara documentos y CV sin perder el valor de tu experiencia.',
  level: 1,
  category: 'Arquitectura, ingeniería y empleo',
  language: 'es',
  estimatedMinutes: 165,
  objectives: [
    'Distinguir entre archivos propietarios y formatos de intercambio abiertos.',
    'Preparar una exportación autorizada de un proyecto para visualización 3D local.',
    'Usar IA gratuita como apoyo de redacción, nunca como sustituto de criterio técnico.',
    'Traducir experiencia profesional en evidencias claras para CV y colaboración digital.',
  ],
  lessons: [
    {
      id: 'senior-tech-01',
      courseId: 'senior-tech-arquitectura-ingenieria',
      title: 'Nivel usuario: del archivo cerrado al formato que se puede compartir',
      level: 1,
      summary:
        'Aprende a pedir y guardar una exportación del proyecto que permita revisarlo sin entregar licencias ni alterar el original.',
      content:
        'Muchos programas de ingeniería y arquitectura guardan el trabajo en formatos propios. Eso no significa que el proyecto esté bloqueado para siempre. La práctica correcta es conservar siempre el archivo original y solicitar o crear una copia de intercambio autorizada. Para maquetas 3D y web, los formatos habituales son GLB/glTF, OBJ o STL. Para información BIM, el formato de intercambio abierto recomendado es IFC. Antes de compartir, elimina datos personales, verifica que tienes permiso para usar el archivo y confirma que una exportación no sustituye la revisión del original por quien dirige el proyecto. Una copia visual sirve para explicar, aprender y coordinar; no certifica cálculos, mediciones ni cumplimiento normativo.',
      audio: true,
      sources: [
        {
          title: 'buildingSMART International: Industry Foundation Classes (IFC)',
          url: 'https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/',
          license: 'Creative Commons / estándar abierto',
        },
        {
          title: 'Khronos: glTF overview',
          url: 'https://www.khronos.org/gltf/',
          license: 'documentación pública',
        },
      ],
      quiz: [
        {
          q: '¿Qué debes conservar antes de crear una copia para visualizar un proyecto?',
          options: [
            'Solo una captura de pantalla',
            'El archivo original y una copia de intercambio autorizada',
            'Únicamente el modelo convertido',
            'Nada, el visor guarda todo automáticamente',
          ],
          correct: 1,
          explain: 'La copia de intercambio no sustituye al archivo original ni a la trazabilidad profesional del proyecto.',
        },
        {
          q: '¿Qué formato abierto está orientado al intercambio de información BIM?',
          options: ['IFC', 'Una foto JPG', 'Un archivo temporal del navegador', 'Un documento de texto sin datos'],
          correct: 0,
          explain: 'IFC es un estándar abierto y neutral respecto al proveedor para descripciones digitales de activos construidos.',
        },
      ],
      xp: 30,
    },
    {
      id: 'senior-tech-02',
      courseId: 'senior-tech-arquitectura-ingenieria',
      title: 'Maqueta 3D local: abrir, girar y explicar sin subir el proyecto',
      level: 1,
      summary:
        'Usa el visor local de Manos Abiertas con una exportación GLB, OBJ o STL para revisar una maqueta sin enviar el archivo a un tercero.',
      content:
        'Una maqueta digital puede ayudar a explicar un espacio, un conjunto de piezas o una propuesta a personas que no usan software especializado. En Manos Abiertas el visor trabaja en el navegador: eliges un archivo compatible desde tu dispositivo y el archivo no se envía a la plataforma. Empieza con una copia pequeña y no sensible. Comprueba el nombre, la escala y la orientación antes de presentarla. Si el modelo contiene información de obra, direcciones, nombres o detalles de seguridad, prepara una versión de demostración. El visor es una ayuda de comunicación y aprendizaje; una persona competente debe confirmar cualquier decisión técnica, presupuesto, medición o cumplimiento.',
      audio: true,
      sources: [
        {
          title: 'Three.js: Editor and import/export formats',
          url: 'https://threejs.org/editor/',
          license: 'MIT',
        },
        {
          title: 'Blender Manual: Importing and Exporting Files',
          url: 'https://docs.blender.org/manual/en/latest/files/import_export/index.html',
          license: 'documentación pública',
        },
      ],
      quiz: [
        {
          q: '¿Para qué sirve principalmente una maqueta abierta en un visor local?',
          options: [
            'Certificar automáticamente una obra',
            'Explicar y revisar una representación del proyecto con seguridad',
            'Sustituir una dirección facultativa',
            'Calcular precios sin revisar datos',
          ],
          correct: 1,
          explain: 'La visualización apoya la comunicación; no reemplaza comprobación profesional ni documentos contractuales.',
        },
        {
          q: '¿Qué buena práctica aplica antes de abrir un archivo de proyecto?',
          options: [
            'Subir el original sin comprobar permisos',
            'Preparar una copia autorizada y retirar datos sensibles si procede',
            'Borrar el original',
            'Usar solo capturas sin revisar escala',
          ],
          correct: 1,
          explain: 'La protección de datos, el permiso de uso y la conservación del original son pasos esenciales.',
        },
      ],
      xp: 30,
    },
    {
      id: 'senior-tech-03',
      courseId: 'senior-tech-arquitectura-ingenieria',
      title: 'IA gratuita para borradores técnicos con revisión humana',
      level: 1,
      summary:
        'Convierte tu experiencia en borradores más claros de actas, memorias, listas de verificación y mensajes profesionales.',
      content:
        'La IA puede ordenar ideas y acelerar un primer borrador, pero no conoce por sí sola el estado real de una obra, las condiciones del contrato ni la normativa aplicable. Pide siempre una estructura, declara el contexto que sí puedes compartir y elimina datos confidenciales. Después revisa cifras, referencias, nombres y responsabilidades. Una buena fórmula es: objetivo, público, datos confirmados, tono, límite y revisión. Por ejemplo: “Redacta una lista de comprobación para revisar una exportación IFC; no inventes normativa y marca todo dato que deba verificar un profesional”. El resultado será más útil si tu experiencia dirige la herramienta, no al revés.',
      audio: true,
      sources: [
        {
          title: 'INCIBE: Ciudadanía y buenas prácticas de ciberseguridad',
          url: 'https://www.incibe.es/ciudadania',
          license: 'público',
        },
      ],
      quiz: [
        {
          q: '¿Cuál es el papel correcto de una IA en un informe técnico?',
          options: [
            'Decidir sola si el proyecto cumple la normativa',
            'Preparar un borrador que un profesional revisa y valida',
            'Copiar datos confidenciales en cualquier servicio',
            'Sustituir una visita o medición real',
          ],
          correct: 1,
          explain: 'La IA puede apoyar la redacción y organización, pero la responsabilidad y validación siguen siendo humanas.',
        },
      ],
      xp: 30,
    },
    {
      id: 'senior-tech-04',
      courseId: 'senior-tech-arquitectura-ingenieria',
      title: 'CV senior híbrido: experiencia, herramientas y evidencias',
      level: 1,
      summary:
        'Presenta experiencia de dirección, coordinación y criterio técnico junto con nuevas prácticas digitales verificables.',
      content:
        'Un perfil senior no necesita competir por ser el más rápido usando una interfaz. Tiene valor por su criterio, la gestión de riesgos, la relación con equipos, la capacidad de explicar decisiones y la experiencia acumulada. Actualiza el CV con un bloque de “herramientas en aprendizaje activo” y otro de “evidencias”: una maqueta no sensible, una lista de comprobación, una mejora de proceso o una formación completada. Es preferible declarar “nivel usuario en visualización BIM abierta” que afirmar dominio sin evidencia. Tu experiencia es el centro; las herramientas digitales demuestran que puede compartirse y actualizarse.',
      audio: true,
      sources: [
        {
          title: 'Europass: crea tu CV',
          url: 'https://europa.eu/europass/es/create-europass-cv',
          license: 'público',
        },
      ],
      quiz: [
        {
          q: '¿Qué es más sólido para un CV actualizado?',
          options: [
            'Afirmar conocimientos sin ejemplos',
            'Mostrar experiencia y una evidencia real de aprendizaje digital',
            'Eliminar toda experiencia anterior',
            'Usar palabras técnicas que no sabes explicar',
          ],
          correct: 1,
          explain: 'La combinación de trayectoria y evidencias concretas transmite competencia de forma honesta y verificable.',
        },
      ],
      xp: 30,
    },
  ],
};

export default seniorTech;
