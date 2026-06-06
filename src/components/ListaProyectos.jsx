import { useState } from "react";
import proyectoService from "../service/proyectoservice";
import ProyectoCard from "./proyectoCard";
import FormularioProyecto from "./FormularioProyecto";

const ListaProyectos = () => {

  const [proyectos, setProyectos] =
    useState(proyectoService.obtenerProyectos());

  const [busqueda, setBusqueda] =
    useState("");

  const [mensaje, setMensaje] = useState(null);

  const [ultimaActualizacion, setUltimaActualizacion] =
    useState(null);

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

    setUltimaActualizacion(new Date());
  };

  const handleAgregarProyecto = (proyecto) => {

    proyectoService.agregarProyecto(proyecto);

    setProyectos(
      proyectoService.obtenerProyectos()
    );

    setUltimaActualizacion(new Date());

    mostrarMensaje(
      "Proyecto agregado correctamente.",
      "exito"
    );
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

      <FormularioProyecto onAgregar={handleAgregarProyecto} />

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