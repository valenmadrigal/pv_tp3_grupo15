const proyectoService = (() => {

  let proyectos = [
    {
      id: 1,
      titulo: "Plataforma de Aprendizaje Virtual",
      categoria: "Educación",
      estado: "En progreso",
      descripcion: [
        "Esta plataforma tiene como objetivo centralizar los contenidos educativos de la facultad en un entorno digital accesible para docentes y alumnos. Permite la carga de materiales, la asignación de tareas y el seguimiento del progreso académico de cada estudiante en tiempo real.",
        "El sistema está diseñado para adaptarse a distintas modalidades de cursado, tanto presencial como remota, integrando herramientas de comunicación y evaluación que facilitan la interacción entre los distintos actores del proceso educativo.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Documentación técnica",  url: "https://drive.google.com/file/plataforma-doc" },
        { tipo: "Drive",  label: "Carpeta del proyecto",   url: "https://drive.google.com/drive/plataforma" },
        { tipo: "GitHub", label: "Repositorio",            url: "https://github.com/equipo1/plataforma-virtual" },
      ],
      equipo: [
        { nombre: "Ana García",    rol: "Líder de proyecto" },
        { nombre: "Lucas Pérez",   rol: "Desarrollador frontend" },
        { nombre: "Sofía Molina",  rol: "Desarrolladora backend" },
        { nombre: "Mateo Ruiz",    rol: "Diseñador UX/UI" },
      ],
    },
    {
      id: 2,
      titulo: "Sistema de Gestión de Biblioteca",
      categoria: "Administración",
      estado: "Completado",
      descripcion: [
        "El sistema permite administrar el catálogo completo de la biblioteca universitaria, incluyendo el registro de ejemplares, el control de préstamos y devoluciones, y la gestión de usuarios habilitados. Automatiza procesos que antes se realizaban de forma manual, reduciendo errores y tiempos de espera.",
        "Cuenta con un módulo de búsqueda avanzada que permite filtrar por autor, título, categoría y disponibilidad, además de un panel de reportes que facilita la toma de decisiones por parte del personal administrativo.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Manual de usuario",      url: "https://drive.google.com/file/biblioteca-manual" },
        { tipo: "Drive",  label: "Carpeta del proyecto",   url: "https://drive.google.com/drive/biblioteca" },
        { tipo: "GitHub", label: "Repositorio",            url: "https://github.com/equipo2/gestion-biblioteca" },
      ],
      equipo: [
        { nombre: "Valentina López", rol: "Líder de proyecto" },
        { nombre: "Tomás Herrera",   rol: "Desarrollador fullstack" },
        { nombre: "Camila Díaz",     rol: "Analista funcional" },
      ],
    },
    {
      id: 3,
      titulo: "App de Seguimiento Estudiantil",
      categoria: "Tecnología",
      estado: "Pendiente",
      descripcion: [
        "Esta aplicación está orientada a hacer un seguimiento integral del rendimiento académico de los estudiantes, registrando asistencias, calificaciones y alertas de riesgo de abandono. El objetivo es brindar información oportuna a los tutores y directivos para que puedan intervenir a tiempo.",
        "La app incluye un módulo de notificaciones automáticas que avisa a los estudiantes sobre fechas de exámenes, entrega de trabajos y reuniones de tutoría, fomentando una mayor participación y compromiso con la carrera.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Propuesta del proyecto", url: "https://drive.google.com/file/seguimiento-propuesta" },
        { tipo: "Drive",  label: "Carpeta del proyecto",   url: "https://drive.google.com/drive/seguimiento" },
        { tipo: "GitHub", label: "Repositorio",            url: "https://github.com/equipo3/seguimiento-estudiantil" },
      ],
      equipo: [
        { nombre: "Nicolás Torres",  rol: "Líder de proyecto" },
        { nombre: "Agustín Flores",  rol: "Desarrollador mobile" },
        { nombre: "Lorena Castro",   rol: "Diseñadora UX/UI" },
        { nombre: "Emilia Vargas",   rol: "Tester QA" },
      ],
    },
    {
      id: 4,
      titulo: "Portal de Recursos Docentes",
      categoria: "Educación",
      estado: "En progreso",
      descripcion: [
        "El portal centraliza todos los recursos pedagógicos disponibles para los docentes de la facultad: guías didácticas, plantillas de planificación, materiales de capacitación y normativas vigentes. Cada docente cuenta con un perfil personalizado desde el cual puede acceder y compartir contenidos.",
        "Se contempla la integración con el sistema de gestión académica existente para mantener sincronizada la información de las asignaturas y los docentes asignados a cada una, evitando la duplicación de datos y simplificando la administración.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Especificación funcional", url: "https://drive.google.com/file/portal-spec" },
        { tipo: "Drive",  label: "Carpeta del proyecto",     url: "https://drive.google.com/drive/portal-docentes" },
        { tipo: "GitHub", label: "Repositorio",              url: "https://github.com/equipo4/portal-docentes" },
      ],
      equipo: [
        { nombre: "Martina Romero",  rol: "Líder de proyecto" },
        { nombre: "Franco Silva",    rol: "Desarrollador frontend" },
        { nombre: "Julieta Medina",  rol: "Desarrolladora backend" },
      ],
    },
    {
      id: 5,
      titulo: "Herramienta de Evaluación Online",
      categoria: "Tecnología",
      estado: "Pendiente",
      descripcion: [
        "Esta herramienta permite a los docentes crear y administrar evaluaciones en línea con distintos tipos de preguntas: opción múltiple, verdadero/falso, respuesta corta y desarrollo. El sistema corrige automáticamente las preguntas cerradas y notifica los resultados al finalizar el tiempo asignado.",
        "Incorpora mecanismos antifraude como la aleatorización de preguntas y opciones, la detección de cambio de pestaña y el registro de actividad durante el examen, garantizando la integridad académica en entornos de evaluación remota.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Casos de uso",          url: "https://drive.google.com/file/evaluacion-casos" },
        { tipo: "Drive",  label: "Carpeta del proyecto",  url: "https://drive.google.com/drive/evaluacion" },
        { tipo: "GitHub", label: "Repositorio",           url: "https://github.com/equipo5/evaluacion-online" },
      ],
      equipo: [
        { nombre: "Sebastián Ríos",  rol: "Líder de proyecto" },
        { nombre: "Carla Mendoza",   rol: "Desarrolladora fullstack" },
        { nombre: "Diego Navarro",   rol: "Especialista en seguridad" },
        { nombre: "Paula Suárez",    rol: "Analista funcional" },
      ],
    },
    {
      id: 6,
      titulo: "Red de Colaboración Académica",
      categoria: "Investigación",
      estado: "Completado",
      descripcion: [
        "La red conecta a docentes e investigadores de distintas facultades para facilitar la colaboración en proyectos de investigación conjuntos. Cada usuario puede publicar convocatorias, unirse a grupos de trabajo y compartir avances en un espacio colaborativo centralizado.",
        "El sistema incluye un repositorio de publicaciones académicas vinculado a los proyectos activos, permitiendo que los resultados de las investigaciones queden disponibles para la comunidad universitaria y contribuyan al conocimiento colectivo de la institución.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Informe final",         url: "https://drive.google.com/file/red-informe" },
        { tipo: "Drive",  label: "Carpeta del proyecto",  url: "https://drive.google.com/drive/red-colaboracion" },
        { tipo: "GitHub", label: "Repositorio",           url: "https://github.com/equipo6/red-colaboracion" },
      ],
      equipo: [
        { nombre: "Andrea Morales",  rol: "Líder de proyecto" },
        { nombre: "Roberto Jiménez", rol: "Desarrollador backend" },
        { nombre: "Lucía Fernández", rol: "Diseñadora UX/UI" },
        { nombre: "Hernán Aguirre",  rol: "Tester QA" },
      ],
    },
    {
      id: 7,
      titulo: "Campus Virtual Interactivo",
      categoria: "Educación",
      estado: "En progreso",
      descripcion: [
        "El campus virtual ofrece aulas digitales con videoconferencia integrada, pizarra colaborativa y grabación de clases para que los estudiantes puedan repasar el contenido en cualquier momento.",
        "Incluye un módulo de asistencia automática vinculado al calendario académico y reportes de participación para que los docentes identifiquen rápidamente a quienes necesitan apoyo adicional.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Manual de implementación", url: "https://drive.google.com/file/campus-manual" },
        { tipo: "Drive",  label: "Carpeta del proyecto",     url: "https://drive.google.com/drive/campus-virtual" },
        { tipo: "GitHub", label: "Repositorio",              url: "https://github.com/equipo7/campus-virtual" },
      ],
      equipo: [
        { nombre: "Valentina Madrigal", rol: "Líder de proyecto" },
        { nombre: "Jesús Cabrera",      rol: "Desarrollador frontend" },
        { nombre: "Camila Romero",      rol: "Desarrolladora backend" },
      ],
    },
    {
      id: 8,
      titulo: "Sistema de Reservas de Aulas",
      categoria: "Administración",
      estado: "Pendiente",
      descripcion: [
        "Permite reservar aulas, laboratorios y espacios comunes de la facultad mediante un calendario en línea, evitando superposiciones y centralizando la gestión de horarios.",
        "Los administrativos pueden definir reglas de uso, bloquear fechas especiales y generar reportes de ocupación para optimizar el uso de los espacios disponibles.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Requerimientos funcionales", url: "https://drive.google.com/file/reservas-req" },
        { tipo: "Drive",  label: "Carpeta del proyecto",       url: "https://drive.google.com/drive/reservas-aulas" },
        { tipo: "GitHub", label: "Repositorio",                url: "https://github.com/equipo8/reservas-aulas" },
      ],
      equipo: [
        { nombre: "Lorena Suruguay", rol: "Líder de proyecto" },
        { nombre: "Yesica Arias",    rol: "Analista funcional" },
        { nombre: "Jesús Cabrera",   rol: "Desarrollador fullstack" },
      ],
    },
    {
      id: 9,
      titulo: "Observatorio de Indicadores Educativos",
      categoria: "Investigación",
      estado: "Completado",
      descripcion: [
        "Consolida indicadores de rendimiento, retención y empleabilidad de egresados en tableros interactivos para apoyar la toma de decisiones institucionales.",
        "Los datos se actualizan periódicamente desde fuentes internas y permiten comparar cohortes, carreras y modalidades de cursado con filtros configurables.",
      ],
      recursos: [
        { tipo: "PDF",    label: "Informe de resultados",  url: "https://drive.google.com/file/observatorio-informe" },
        { tipo: "Drive",  label: "Carpeta del proyecto",   url: "https://drive.google.com/drive/observatorio" },
        { tipo: "GitHub", label: "Repositorio",            url: "https://github.com/equipo9/observatorio-educativo" },
      ],
      equipo: [
        { nombre: "Valentina Madrigal", rol: "Líder de proyecto" },
        { nombre: "Lorena Suruguay",    rol: "Analista de datos" },
        { nombre: "Camila Romero",      rol: "Desarrolladora backend" },
        { nombre: "Yesica Arias",       rol: "Diseñadora UX/UI" },
      ],
    },
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    proyectos = [...proyectos, nuevoProyecto];
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    const termino = texto.toLowerCase().trim();
    return proyectos.filter((p) => p.titulo.toLowerCase().includes(termino));
  };

  return { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto };
})();

export default proyectoService;