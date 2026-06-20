import {
  Typography,
  Box,
  Paper,
  Avatar,
  Divider,
  Chip,
  TextField,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditIcon from "@mui/icons-material/Edit";
 
function PerfilUsuario() {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
 

  const usuarioSeguro = {
    nombre: usuario?.nombre ?? "Invitado",
    dni: usuario?.dni ?? "Sin DNI",
    rol: usuario?.rol ?? "Sin rol asignado",
    institucion: usuario?.institucion ?? "No especificada",
    carrera: usuario?.carrera ?? "No especificada",
  };
 
  const [formulario, setFormulario] = useState(usuarioSeguro);
  const [editando, setEditando] = useState(false);
  const [error, setError] = useState(null);
  const [mensajeExito, setMensajeExito] = useState(null);
 
  useEffect(() => {
    setFormulario(usuarioSeguro);
    
  }, [usuario]);
 
  const datos = [
    { icon: <PersonIcon />, label: "Nombre", value: usuarioSeguro.nombre },
    { icon: <AssignmentIndIcon />, label: "DNI", value: usuarioSeguro.dni },
    { icon: <BadgeIcon />, label: "Rol", value: usuarioSeguro.rol },
    {
      icon: <BusinessIcon />,
      label: "Institución",
      value: usuarioSeguro.institucion,
    },
    { icon: <SchoolIcon />, label: "Carrera", value: usuarioSeguro.carrera },
  ];
 
  const handleCampo = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    setError(null);
    setMensajeExito(null);
  };
 
  const handleEditar = () => {
    setEditando(true);
    setError(null);
    setMensajeExito(null);
  };
 
  const handleCancelar = () => {
    setFormulario(usuarioSeguro);
    setEditando(false);
    setError(null);
    setMensajeExito(null);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!formulario.nombre.trim() || !formulario.rol.trim()) {
      setError("Por favor completá el nombre y el rol.");
      return;
    }
 
    actualizarPerfil({
      nombre: formulario.nombre.trim(),
      dni: formulario.dni.trim(),
      rol: formulario.rol.trim(),
      institucion: formulario.institucion.trim(),
      carrera: formulario.carrera.trim(),
    });
 
    setMensajeExito("Perfil actualizado correctamente.");
    setError(null);
    setEditando(false);
  };
 
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto", width: "100%" }}>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          borderRadius: 3,
          p: 5,
          mb: 4,
          color: "white",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            width: 90,
            height: 90,
            bgcolor: "white",
            color: "#6366f1",
            fontSize: 40,
            margin: "0 auto 16px",
          }}
        >
          {usuarioSeguro.nombre.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" fontWeight="bold">
          {usuarioSeguro.nombre}
        </Typography>
 
        <Chip
          label={usuarioSeguro.rol}
          sx={{
            mt: 1,
            bgcolor: "rgba(255,255,255,0.2)",
            color: "white",
            fontWeight: "bold",
          }}
        />
      </Box>
 
      {/* Datos */}
      <Paper
        elevation={3}
        sx={{ borderRadius: 3, p: 3, maxWidth: 600, margin: "0 auto", mb: 3 }}
      >
        {datos.map((item, i) => (
          <Box key={item.label}>
            <Box sx={{ display: "flex", gap: 2, py: 2 }}>
              <Box sx={{ color: "#6366f1" }}>{item.icon}</Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="body1" fontWeight="500">
                  {item.value}
                </Typography>
              </Box>
            </Box>
            {i < datos.length - 1 && <Divider />}
          </Box>
        ))}
      </Paper>
 
      {/* Editar perfil */}
      <Paper
        elevation={3}
        sx={{ borderRadius: 3, p: 3, maxWidth: 600, margin: "0 auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EditIcon sx={{ color: "#6366f1" }} />
            <Typography variant="h6" fontWeight="600">
              Actualizar perfil
            </Typography>
          </Box>
 
          {!editando && (
            <Button
              onClick={handleEditar}
              sx={{ textTransform: "none", color: "#6366f1" }}
            >
              Editar perfil
            </Button>
          )}
        </Box>
 
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {error && <Alert severity="error">{error}</Alert>}
            {mensajeExito && <Alert severity="success">{mensajeExito}</Alert>}
 
            <TextField
              label="Nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleCampo}
              fullWidth
              required
              disabled={!editando}
            />
 
            <TextField
              label="DNI"
              name="dni"
              value={formulario.dni}
              onChange={handleCampo}
              fullWidth
              required
              disabled={!editando}
            />
 
            <TextField
              label="Rol"
              name="rol"
              value={formulario.rol}
              onChange={handleCampo}
              fullWidth
              required
              disabled={!editando}
            />
 
            <TextField
              label="Institución"
              name="institucion"
              value={formulario.institucion}
              onChange={handleCampo}
              fullWidth
              required
              disabled={!editando}
            />
 
            <TextField
              label="Carrera"
              name="carrera"
              value={formulario.carrera}
              onChange={handleCampo}
              fullWidth
              required
              disabled={!editando}
            />
 
            {editando && (
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  onClick={handleCancelar}
                  sx={{ textTransform: "none" }}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: "#6366f1",
                    "&:hover": { bgcolor: "#4f46e5" },
                  }}
                >
                  Guardar cambios
                </Button>
              </Stack>
            )}
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
 
export default PerfilUsuario;