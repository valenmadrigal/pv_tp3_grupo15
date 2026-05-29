import DetalleProyecto from "./DetalleProyecto";
function ProyectoCard({ proyecto }) {

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    recursos,
    equipo,
    id
  } = proyecto

  return (

    <div className="card">

      <h3>{titulo}</h3>

      <p>
        Categoría: {categoria}
      </p>

      <p>
        Estado: {estado}
      </p>

      <button>
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

  )
}

export default ProyectoCard