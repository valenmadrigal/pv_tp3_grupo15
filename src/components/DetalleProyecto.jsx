import { Link, useParams } from "react-router-dom";
import proyectoService from "../service/proyectoservice";

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectoService.obtenerProyectoPorId(id);

  if (!proyecto) {
    return (
      <main className="main">
        <p>Proyecto no encontrado.</p>
        <Link to="/">Volver al listado</Link>
      </main>
    );
  }

  const {
    titulo,
    categoria,
    estado,
    descripcion = [],
    recursos = [],
    equipo = [],
  } = proyecto;

  return (
    <main className="main">
      <div className="detalle-proyecto">
        <Link to="/">← Volver al listado</Link>

        <h2>{titulo}</h2>
        <p>Categoría: {categoria}</p>
        <p>Estado: {estado}</p>

        <h3>Descripción</h3>
        {descripcion.length > 0 ? (
          descripcion.map((texto, index) => <p key={index}>{texto}</p>)
        ) : (
          <p>Sin descripción disponible.</p>
        )}

        <h3>Recursos</h3>
        {recursos.length > 0 ? (
          <ul>
            {recursos.map((recurso, index) => (
              <li key={index}>
                <strong>{recurso.tipo}:</strong>{" "}
                {recurso.url ? (
                  <a href={recurso.url} target="_blank" rel="noreferrer">
                    {recurso.label}
                  </a>
                ) : (
                  recurso.label
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin recursos disponibles.</p>
        )}

        <h3>Equipo</h3>
        {equipo.length > 0 ? (
          <ul>
            {equipo.map((persona, index) => (
              <li key={index}>
                {persona.nombre} - {persona.rol}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin equipo asignado.</p>
        )}
      </div>
    </main>
  );
};

export default DetalleProyecto;
