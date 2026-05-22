import { useState } from "react"

import {obtenerProyectos,agregarProyecto,eliminarProyecto,buscarProyecto} from "../service/proyectoservice"

function ListaProyectos() {

  const [proyectos, setProyectos] =
    useState(obtenerProyectos())

  const handleEliminar = (id) => {

    eliminarProyecto(id)

    setProyectos(obtenerProyectos())
  }

  const handleBuscar = (e) => {

    const texto = e.target.value

    if (texto === "") {

      setProyectos(obtenerProyectos())

    } else {

      setProyectos(buscarProyecto(texto))

    }
  }

  const handleAgregar = () => {

    const nuevoProyecto = {

      id: Date.now(),
      titulo: "Nuevo Proyecto",
      categoria: "Web",
      estado: "Activo"

    }

    agregarProyecto(nuevoProyecto)

    setProyectos(obtenerProyectos())
  }

  return (

    <div className="contenedor-proyectos">

      <h2>Lista de Proyectos</h2>

      <input
        type="text"
        placeholder="Buscar proyecto"
        onChange={handleBuscar}
      />

      <button onClick={handleAgregar}>
        Agregar Proyecto
      </button>

      {
        proyectos.map((proyecto) => (

          <div
            key={proyecto.id}
            className="card"
          >

            <h3>{proyecto.titulo}</h3>

            <p>
              Categoría: {proyecto.categoria}
            </p>

            <p>
              Estado: {proyecto.estado}
            </p>

            <button
              onClick={() =>
                handleEliminar(proyecto.id)
              }
            >
              Eliminar
            </button>

          </div>

        ))
      }

    </div>

  )
}

export default ListaProyectos