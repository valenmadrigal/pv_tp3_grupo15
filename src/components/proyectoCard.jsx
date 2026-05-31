<<<<<<< HEAD
function ProyectoCard({
  proyecto,
  handleEliminar,
  claseEstado
}) {
=======
import DetalleProyecto from "./DetalleProyecto";
function ProyectoCard({ proyecto }) {
>>>>>>> 52f8af245981f82da0a7d06a03fcc2940e433b06

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    recursos,
    equipo,
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

      <button onClick={() => handleEliminar(id)}>
        Eliminar
      </button>

      <button>
        Ver detalle
      </button>
      <DetalleProyecto 
      descripcion={descripcion}
      recursos={recursos}
      equipo={equipo}
      />

    </div>
  );
}

export default ProyectoCard;