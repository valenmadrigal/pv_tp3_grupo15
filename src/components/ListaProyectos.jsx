import { useState, useEffect, useRef } from "react";
import RegistroActividad from "./RegistroActividad";
import proyectoService from "../service/proyectoservice";
import ProyectoCard from "./proyectoCard";
import FormularioProyecto from "./FormularioProyecto";
import {
  Alert,
  TextField,
  Grid
} from "@mui/material";

const ListaProyectos = () => {

  const [proyectos, setProyectos] =
    useState(proyectoService.obtenerProyectos());

  const [busqueda, setBusqueda] =
    useState("");

  const [mensaje, setMensaje] = useState(null);

  const [ultimaActualizacion, setUltimaActualizacion] =
    useState(null);

  const esPrimerRender = useRef(true);

  const mostrarMensaje = (texto, tipo = "exito") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(null), 4000);
  };

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }
    setUltimaActualizacion(new Date());
  }, [proyectos]);

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

  const handleAgregarProyecto = (proyecto) => {

    proyectoService.agregarProyecto(proyecto);

    setProyectos(
      proyectoService.obtenerProyectos()
    );

    mostrarMensaje(
      "Proyecto agregado correctamente.",
      "exito"
    );
  };

  return (

    <main className="main">

      {mensaje && (
       <Alert severity="success" sx={{ mb: 2 }}>
        {mensaje.texto}
      </Alert>
      )}

      <FormularioProyecto onAgregar={handleAgregarProyecto} />

      <div className="controles">

        <div className="buscador">

          <span className="buscador__icono">
            🔍
          </span>

        <TextField
           label="Buscar proyecto"
           placeholder="Buscar proyecto por título..."
           value={busqueda}
           onChange={(e) =>
             setBusqueda(e.target.value)
          }
          fullWidth
        />

        </div>

        <span className="contador-proyectos">
          {proyectosFiltrados.length}
          {" "}proyecto(s) encontrado(s)
        </span>

      </div>

    <Grid container spacing={2} sx={{ mt: 2 }}>

  {proyectosFiltrados.length === 0 ? (

    <Grid size={12}>
      <Alert severity="info">
        No se encontraron proyectos.
      </Alert>
    </Grid>

  ) : (

    proyectosFiltrados.map((proyecto) => (

      <Grid
        key={proyecto.id}
        size={{ xs: 12, md: 6 }}
      >
        <ProyectoCard
          proyecto={proyecto}
          handleEliminar={handleEliminar}
          claseEstado={claseEstado}
        />
      </Grid>

    ))

  )}

</Grid>

      <RegistroActividad fecha={ultimaActualizacion} />

    </main>
  );
};

export default ListaProyectos;