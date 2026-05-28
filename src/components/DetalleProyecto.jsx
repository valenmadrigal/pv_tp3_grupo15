const DetalleProyecto = ({ descripcion, recursos, equipo }) => {

    return (
      <div className="detalle-proyecto">
  
        <h3>Descripción</h3>
        <p>{descripcion}</p>
  
        <h3>Recursos</h3>
        <ul>
          {recursos.map((recurso, index) => (
            <li key={index}>{recurso}</li>
          ))}
        </ul>
  
        <h3>Equipo</h3>
        <ul>
          {equipo.map((persona, index) => (
            <li key={index}>{persona}</li>
          ))}
        </ul>
  
      </div>
    );
  };
  
  export default DetalleProyecto;