import type { GeneratedCourse } from './ciberseguridad';

/**
 * Manos Abiertas · contenido comunitario reutilizado de la Estación Windows.
 * No ejecuta comandos reales ni sustituye soporte técnico profesional.
 */
const windowsSeguroBasico: GeneratedCourse = {
  id: 'windows-seguro-basico',
  title: 'Windows sin miedo: práctica segura desde nivel usuario',
  description:
    'Aprende a reconocer herramientas comunes de Windows y a practicar acciones básicas sin modificar tu dispositivo. Un punto de partida claro para empleo, cursos y vida diaria.',
  level: 0,
  category: 'Alfabetización digital',
  language: 'es',
  estimatedMinutes: 75,
  objectives: [
    'Reconocer el propósito de un explorador de archivos, bloc de notas y calculadora.',
    'Entender que un simulador educativo no ejecuta acciones en el ordenador real.',
    'Practicar comandos de lectura y ayuda en un entorno controlado.',
    'Aplicar una rutina básica de organización y seguridad antes de cambiar archivos.',
  ],
  lessons: [
    {
      id: 'windows-seguro-01',
      courseId: 'windows-seguro-basico',
      title: 'El ordenador no se toca solo: qué es una práctica segura',
      level: 0,
      summary: 'Diferencia entre mirar, practicar y cambiar algo en tu equipo.',
      content:
        'Muchas herramientas de ordenador tienen nombres que suenan difíciles: CMD, PowerShell, Explorador de archivos o Administrador de tareas. Antes de usarlas en tu propio equipo conviene aprender en un simulador educativo. Un simulador se parece a una herramienta real, pero no cambia tus archivos, tus programas ni tu conexión. Sirve para leer, escribir ejemplos y perder el miedo con calma. La regla es sencilla: si no entiendes una acción, no la ejecutes en tu ordenador; practica primero, guarda una copia de tus documentos importantes y pide apoyo cuando un cambio pueda afectar a otras personas o a tu trabajo.',
      audio: true,
      sources: [],
      quiz: [
        {
          q: '¿Qué diferencia principal hay entre el simulador educativo y tu ordenador real?',
          options: [
            'El simulador puede borrar más archivos',
            'El simulador permite practicar sin ejecutar cambios reales en el equipo',
            'No hay ninguna diferencia',
            'El simulador sustituye una copia de seguridad',
          ],
          correct: 1,
          explain: 'La práctica guiada debe ser segura: el simulador imita acciones, pero no modifica el sistema real.',
        },
      ],
      xp: 20,
    },
    {
      id: 'windows-seguro-02',
      courseId: 'windows-seguro-basico',
      title: 'Tres herramientas para el día a día: archivos, notas y cálculos',
      level: 0,
      summary: 'Organiza una carpeta, escribe una nota clara y revisa una cuenta sencilla.',
      content:
        'El Explorador de archivos sirve para encontrar y ordenar documentos. El Bloc de notas sirve para escribir texto sencillo, como una lista de trámites, una contraseña que no debes guardar en texto abierto o un borrador de mensaje. La Calculadora sirve para revisar importes, fechas o cantidades; nunca sustituye una revisión profesional de una nómina, contrato o presupuesto. Empieza creando una carpeta con un nombre claro, por ejemplo “Documentos importantes”. Dentro, usa nombres que indiquen qué es el archivo y la fecha: “CV-2026”, “cita-medica-abril” o “recibo-alquiler-2026-03”. Antes de mover o borrar, comprueba el nombre dos veces.',
      audio: true,
      sources: [],
      quiz: [
        {
          q: '¿Cuál es un nombre de archivo más útil?',
          options: ['documento nuevo', 'final final de verdad', 'recibo-alquiler-2026-03', 'asdf'],
          correct: 2,
          explain: 'Un nombre claro permite encontrar el documento, entender qué contiene y saber de cuándo es.',
        },
      ],
      xp: 20,
    },
    {
      id: 'windows-seguro-03',
      courseId: 'windows-seguro-basico',
      title: 'Terminal educativa: leer antes de escribir',
      level: 1,
      summary: 'Conoce comandos didácticos de ayuda y listado sin ejecutar operaciones reales.',
      content:
        'Una terminal es una ventana donde se escriben instrucciones. Puede ser útil para aprender, pero en un ordenador real algunos comandos cambian archivos o configuraciones. Por eso la Estación Técnica separada utiliza ejemplos seguros. En CMD puedes empezar por “help” para pedir orientación, “dir” para ver un listado de ejemplo, “echo” para mostrar un texto y “whoami” para comprender el nombre de usuario de muestra. En PowerShell, “Get-Help” y “Get-ChildItem” cumplen una función parecida. En Manos Abiertas estos comandos son simulados: se muestran como práctica, no se envían a tu sistema. El objetivo es comprender palabras y pasos, no memorizar ni ejecutar instrucciones peligrosas.',
      audio: true,
      sources: [],
      quiz: [
        {
          q: '¿Con qué comando didáctico puedes empezar para pedir orientación en una terminal simulada?',
          options: ['help o Get-Help', 'borrar todo', 'formatear el disco', 'cambiar contraseñas de otras personas'],
          correct: 0,
          explain: 'Los comandos de ayuda explican opciones. En el entorno educativo se usan solo como ejemplo seguro.',
        },
      ],
      xp: 25,
    },
  ],
};

export default windowsSeguroBasico;
