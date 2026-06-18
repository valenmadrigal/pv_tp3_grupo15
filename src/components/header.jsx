import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Box, Typography, Avatar } from "@mui/material";

function header() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <Typography variant="h4">Gestion de Proyectos educativos</Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Avatar>{usuario.nombre.charAt(0)}</Avatar>
        <Box textAlign="right">
          <Typography variant="subtitle1" fontWeight="bold">
            {usuario.nombre}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {usuario.rol}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default header;