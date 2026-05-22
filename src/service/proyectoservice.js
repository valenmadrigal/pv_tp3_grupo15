let proyectos = [

  {
    id: 1,
    titulo: "Sistema Escolar",
    categoria: "Educación",
    estado: "En progreso"
  },

  {
    id: 2,
    titulo: "Página Web",
    categoria: "Diseño",
    estado: "Finalizado"
  },

  {
    id: 3,
    titulo: "App de Cursos",
    categoria: "Educación",
    estado: "Activo"
  },

  {
    id: 4,
    titulo: "Gestión de Alumnos",
    categoria: "Sistema",
    estado: "Pendiente"
  },

  {
    id: 5,
    titulo: "Portal Docente",
    categoria: "Web",
    estado: "Activo"
  }

]

const obtenerProyectos = () => {
  return [...proyectos]
}

const agregarProyecto = (nuevoProyecto) => {
  proyectos.push(nuevoProyecto)
}

const eliminarProyecto = (id) => {

  proyectos = proyectos.filter(
    proyecto => proyecto.id !== id
  )

}

const buscarProyecto = (texto) => {

  return proyectos.filter(
    proyecto =>
      proyecto.titulo
        .toLowerCase()
        .includes(texto.toLowerCase())
  )

}

export {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto
}