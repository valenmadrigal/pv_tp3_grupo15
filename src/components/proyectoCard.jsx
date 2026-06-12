import { Link } from "react-router-dom";

function ProyectoCard({
  proyecto,
  handleEliminar,
  claseEstado
}) {

  const {
    titulo,
    categoria,
    estado,
    id
  } = proyecto;

  return (
    <div className="card">

      <h3>{titulo}</h3>

      <p>
        Categoría: {categoria}
      </p>

      <p className={claseEstado(estado)}>
        Estado: {estado}
      </p>

      <div className="acciones">

        <button 
          className="btn eliminar"
          onClick={() => handleEliminar(id)}
        >
          Eliminar
        </button>

        <Link 
          className="btn detalle"
          to={`/proyectos/${id}`}
        >
          Ver detalle
        </Link>

      </div>

    </div>
  );
}

export default ProyectoCard;