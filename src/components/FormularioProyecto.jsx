import { useState } from "react";

const ESTADO_INICIAL = {
  titulo: "",
  categoria: "",
  estado: "Pendiente",
};

const FormularioProyecto = ({ onAgregar }) => {
  const [formulario, setFormulario] = useState(ESTADO_INICIAL);
  const [error, setError] = useState(null);

  const handleCampo = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formulario.titulo.trim() || !formulario.categoria.trim()) {
      setError("Por favor completá el título y la categoría.");
      return;
    }

    const proyecto = {
      id: Date.now(),
      titulo: formulario.titulo.trim(),
      categoria: formulario.categoria.trim(),
      estado: formulario.estado,
    };

    onAgregar(proyecto);
    setFormulario(ESTADO_INICIAL);
    setError(null);
  };

  return (
    <form className="form-agregar" onSubmit={handleSubmit}>
      {error && (
        <p className="mensaje mensaje--error" role="status">
          {error}
        </p>
      )}

      <div className="form-agregar__grupo">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          placeholder="Nombre del proyecto"
          value={formulario.titulo}
          onChange={handleCampo}
        />
      </div>

      <div className="form-agregar__grupo">
        <label htmlFor="categoria">Categoría</label>
        <input
          id="categoria"
          name="categoria"
          type="text"
          placeholder="Ej: Educación"
          value={formulario.categoria}
          onChange={handleCampo}
        />
      </div>

      <div className="form-agregar__grupo">
        <label htmlFor="estado">Estado</label>
        <select
          id="estado"
          name="estado"
          value={formulario.estado}
          onChange={handleCampo}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
        </select>
      </div>

      <button className="btn btn--primario" type="submit">
        ＋ Agregar
      </button>
    </form>
  );
};

export default FormularioProyecto;
