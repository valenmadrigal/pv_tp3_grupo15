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

      <button onClick={() => handleEliminar(id)}>
        Eliminar
      </button>

      <button>
        Ver detalle
      </button>

    </div>
  );
}

export default ProyectoCard;