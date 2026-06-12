import { Typography, Box, Paper, Avatar, Divider, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";

function PerfilUsuario() {

  const datos = [
    { icon: <PersonIcon />, label: "Nombre", value: "Valentina Madrigal" },
    { icon: <BadgeIcon />, label: "Rol", value: "Alumna" },
    { icon: <BusinessIcon />, label: "Institución", value: "Facultad de Ingeniería" },
    { icon: <SchoolIcon />, label: "Carrera", value: "Analista Programador Universitario" },
  ];

  return (
    <Box sx={{ p: 4, width: "100%" }}>

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
          V
        </Avatar>
        <Typography variant="h4" fontWeight="bold">
          Valentina Madrigal
        </Typography>
        <Chip
          label="Alumna"
          sx={{ mt: 1, bgcolor: "rgba(255,255,255,0.2)", color: "white", fontWeight: "bold" }}
        />
      </Box>

      {/* Datos */}
      <Paper elevation={3} sx={{ borderRadius: 3, p: 3, maxWidth: 600, margin: "0 auto" }}>
        {datos.map((item, i) => (
          <Box key={i}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 2 }}>
              <Box sx={{ color: "#6366f1" }}>{item.icon}</Box>
              <Box>
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

    </Box>
  );
}

export default PerfilUsuario;