const DetalleProyecto = ({ descripcion, recursos, equipo }) => {

  return (
    <div className="detalle-proyecto">

      <h3>Descripción</h3>

      {descripcion.map((texto, index) => (
        <p key={index}>{texto}</p>
      ))}

      <h3>Recursos</h3>

      <ul>
        {recursos.map((recurso, index) => (
          <li key={index}>
            <strong>{recurso.tipo}:</strong> {recurso.label}
          </li>
        ))}
      </ul>

      <h3>Equipo</h3>

      <ul>
        {equipo.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.rol}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DetalleProyecto;