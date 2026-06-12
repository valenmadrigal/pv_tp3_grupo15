import { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Alert,
  Stack,
} from "@mui/material";


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
  <form onSubmit={handleSubmit}>
    <Stack spacing={2}>
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
        label="Título"
        name="titulo"
        placeholder="Nombre del proyecto"
        value={formulario.titulo}
        onChange={handleCampo}
        fullWidth
      />

      <TextField
        label="Categoría"
        name="categoria"
        placeholder="Ej: Educación"
        value={formulario.categoria}
        onChange={handleCampo}
        fullWidth
      />

      <TextField
        select
        label="Estado"
        name="estado"
        value={formulario.estado}
        onChange={handleCampo}
        fullWidth
      >
        <MenuItem value="Pendiente">
          Pendiente
        </MenuItem>

        <MenuItem value="En progreso">
          En progreso
        </MenuItem>

        <MenuItem value="Completado">
          Completado
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        type="submit"
      >
        + Agregar
      </Button>
    </Stack>
  </form>
 );
};

export default FormularioProyecto;
