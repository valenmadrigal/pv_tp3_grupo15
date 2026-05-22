const proyectoService = (() => {
  
  let proyectos = [
    { id: 1, titulo: "Plataforma de Aprendizaje Virtual",   categoria: "Educación",      estado: "En progreso" },
    { id: 2, titulo: "Sistema de Gestión de Biblioteca",    categoria: "Administración", estado: "Completado"  },
    { id: 3, titulo: "App de Seguimiento Estudiantil",      categoria: "Tecnología",     estado: "Pendiente"   },
    { id: 4, titulo: "Portal de Recursos Docentes",         categoria: "Educación",      estado: "En progreso" },
    { id: 5, titulo: "Herramienta de Evaluación Online",    categoria: "Tecnología",     estado: "Pendiente"   },
    { id: 6, titulo: "Red de Colaboración Académica",       categoria: "Investigación",  estado: "Completado"  },
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