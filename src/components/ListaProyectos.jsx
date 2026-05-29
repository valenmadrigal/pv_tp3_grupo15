import { useState } from "react";
import proyectoService from "../service/proyectoservice";
import ProyectoCard from "./proyectoCard";

const ListaProyectos = () => {

  const [proyectos, setProyectos] =
    useState(proyectoService.obtenerProyectos());

  const [busqueda, setBusqueda] =
    useState("");

  const [nuevoProyecto, setNuevo] =
    useState({
      titulo: "",
      categoria: "",
      estado: "Pendiente"
    });

  const [mensaje, setMensaje] = useState(null);

  const mostrarMensaje = (texto, tipo = "exito") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(null), 4000);
  };

  const proyectosFiltrados = busqueda.trim()
    ? proyectoService.buscarProyecto(busqueda)
    : proyectos;

  const claseEstado = (estado) => {

    const mapa = {
      "Completado": "estado--completado",
      "En progreso": "estado--en-progreso",
      "Pendiente": "estado--pendiente",
    };

    return mapa[estado] ?? "";
  };

  const handleEliminar = (id) => {

    proyectoService.eliminarProyecto(id);

    setProyectos(
      proyectoService.obtenerProyectos()
    );
  };

  const handleCampo = (e) => {

    setNuevo({
      ...nuevoProyecto,
      [e.target.name]: e.target.value
    });
  };

  const handleAgregar = () => {

    if (
      !nuevoProyecto.titulo.trim() ||
      !nuevoProyecto.categoria.trim()
    ) {

      mostrarMensaje(
        "Por favor completá el título y la categoría.",
        "error"
      );

      return;
    }

    const proyecto = {

      id: Date.now(),

      titulo:
        nuevoProyecto.titulo.trim(),

      categoria:
        nuevoProyecto.categoria.trim(),

      estado:
        nuevoProyecto.estado,
    };

    proyectoService.agregarProyecto(proyecto);

    setProyectos(
      proyectoService.obtenerProyectos()
    );

    setNuevo({
      titulo: "",
      categoria: "",
      estado: "Pendiente"
    });

    mostrarMensaje("Proyecto agregado correctamente.", "exito");
  };

  return (

    <main className="main">

      {mensaje && (
        <p
          className={`mensaje mensaje--${mensaje.tipo}`}
          role="status"
        >
          {mensaje.texto}
        </p>
      )}

      <div className="form-agregar">

        <div className="form-agregar__grupo">

          <label htmlFor="titulo">
            Título
          </label>

          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Nombre del proyecto"
            value={nuevoProyecto.titulo}
            onChange={handleCampo}
          />

        </div>

        <div className="form-agregar__grupo">

          <label htmlFor="categoria">
            Categoría
          </label>

          <input
            id="categoria"
            name="categoria"
            type="text"
            placeholder="Ej: Educación"
            value={nuevoProyecto.categoria}
            onChange={handleCampo}
          />

        </div>

        <div className="form-agregar__grupo">

          <label htmlFor="estado">
            Estado
          </label>

          <select
            id="estado"
            name="estado"
            value={nuevoProyecto.estado}
            onChange={handleCampo}
          >

            <option value="Pendiente">
              Pendiente
            </option>

            <option value="En progreso">
              En progreso
            </option>

            <option value="Completado">
              Completado
            </option>

          </select>

        </div>

        <button
          className="btn btn--primario"
          onClick={handleAgregar}
        >
          ＋ Agregar
        </button>

      </div>

      <div className="controles">

        <div className="buscador">

          <span className="buscador__icono">
            🔍
          </span>

          <input
            className="buscador__input"
            type="text"
            placeholder="Buscar proyecto por título..."
            value={busqueda}
            onChange={(e) =>
              setBusqueda(e.target.value)
            }
          />

        </div>
         <span className="contador-proyectos"> 
          {proyectosFiltrados.length}
          {" "}proyecto(s) encontrado(s)
        </span>

      </div>

      <div className="proyectos-grilla">

        {proyectosFiltrados.length === 0 ? (

          <div className="sin-resultados">

            <span className="sin-resultados__icono">
              📭
            </span>

            No se encontraron proyectos.

          </div>

        ) : (

          proyectosFiltrados.map((proyecto) => (

            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              handleEliminar={handleEliminar}
              claseEstado={claseEstado}
            />

          ))

        )}

      </div>

    </main>
  );
};

export default ListaProyectos;