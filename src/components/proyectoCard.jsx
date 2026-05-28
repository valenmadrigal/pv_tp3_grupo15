function ProyectoCard({ proyecto }) {

  const {
    titulo,
    categoria,
    estado,
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

    </div>

  )
}

export default ProyectoCard