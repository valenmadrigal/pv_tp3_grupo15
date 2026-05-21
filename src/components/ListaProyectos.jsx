import { useState } from "react";

function ListaProyectos() {

  const [proyectos] = useState([
    {
      id: 1,
      titulo: "Sistema Escolar",
      categoria: "Educación",
      estado: "En progreso"
    },

    {
      id: 2,
      titulo: "Página Web",
      categoria: "Diseño",
      estado: "Finalizado"
    }
  ]);

  return (
    <div>
      <h2>Lista de Proyectos</h2>

      {proyectos.map((proyecto) => (
        <div key={proyecto.id}>

          <h3>{proyecto.titulo}</h3>

          <p>Categoría: {proyecto.categoria}</p>

          <p>Estado: {proyecto.estado}</p>

        </div>
      ))}
    </div>
  );
}

export default ListaProyectos;