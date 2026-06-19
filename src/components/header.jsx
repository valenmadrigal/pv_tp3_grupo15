import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Box, Typography, Avatar } from "@mui/material";
 
function Header() {
  const { usuario } = useContext(UsuarioContext);
 

  const nombre = usuario?.nombre ?? "Invitado";
  const rol = usuario?.rol ?? "Sin rol asignado";
  const inicial = nombre.charAt(0).toUpperCase();
 
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 3, md: 6 },
        py: 2,
        maxWidth: 1200,
        mx: "auto",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, whiteSpace: "nowrap" }}
      >
        Gestión de Proyectos Educativos
      </Typography>
 
      <Box display="flex" alignItems="center" gap={1.5}>
        <Avatar
          alt={nombre}
          sx={{ bgcolor: "#6366f1", fontWeight: "bold" }}
        >
          {inicial}
        </Avatar>
        <Box textAlign="right">
          <Typography variant="subtitle1" fontWeight="bold" lineHeight={1.2}>
            {nombre}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {rol}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
 
export default Header;
 