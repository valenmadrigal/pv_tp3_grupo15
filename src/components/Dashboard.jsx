import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Stack,
  Chip,
  Avatar,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
 
function Dashboard() {

  const stats = [
    {
      label: "Total de proyectos",
      value: 12,
      icon: <AssignmentIcon fontSize="large" />,
      color: "#6366f1",
      bg: "#eef2ff",
    },
    {
      label: "Proyectos en curso",
      value: 5,
      icon: <SchoolIcon fontSize="large" />,
      color: "#3b82f6",
      bg: "#dbeafe",
    },
    {
      label: "Completados",
      value: 4,
      icon: <CheckCircleIcon fontSize="large" />,
      color: "#22c55e",
      bg: "#dcfce7",
    },
    {
      label: "Pendientes",
      value: 3,
      icon: <PendingIcon fontSize="large" />,
      color: "#f59e0b",
      bg: "#fef3c7",
    },
  ];
 

  const breakdown = [
    { label: "En curso", value: 5, color: "#3b82f6" },
    { label: "Completados", value: 4, color: "#22c55e" },
    { label: "Pendientes", value: 3, color: "#f59e0b" },
  ];
  const totalProyectos = breakdown.reduce((acc, b) => acc + b.value, 0);
  const avanceGeneral = 75;
 
  const statusStyles = {
    "En curso": { color: "#3b82f6", bg: "#dbeafe" },
    Completado: { color: "#22c55e", bg: "#dcfce7" },
    Pendiente: { color: "#f59e0b", bg: "#fef3c7" },
  };
 
  const recentProjects = [
    { name: "Sistema de Biblioteca", status: "En curso", emoji: "📚", updated: "Hace 2 días" },
    { name: "Gestión Académica", status: "Completado", emoji: "💻", updated: "Hace 1 semana" },
    { name: "Inventario Escolar", status: "Pendiente", emoji: "🗂️", updated: "Hace 3 días" },
    { name: "Plataforma Educativa", status: "En curso", emoji: "🎓", updated: "Hoy" },
  ];
 
  return (
    <Box sx={{ p: 4, width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #6366f1, #4338ca)",
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          mb: 5,
          color: "white",
        }}
      >
        <SchoolIcon
          sx={{
            position: "absolute",
            right: -20,
            top: -30,
            fontSize: 240,
            opacity: 0.12,
            display: { xs: "none", md: "block" },
          }}
        />
        <Typography
          variant="overline"
          sx={{ opacity: 0.85, letterSpacing: 2, fontWeight: 600 }}
        >
          Panel general
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mt: 1, mb: 1.5, maxWidth: 560 }}
        >
          Gestión de Proyectos Educativos
        </Typography>
        <Typography
          variant="h6"
          sx={{ opacity: 0.85, fontWeight: 400, maxWidth: 520 }}
        >
          Bienvenido al sistema de gestión. Aquí podés ver un resumen de tus
          proyectos.
        </Typography>
      </Box>
 
      {/* Estadísticas principales */}
      <Grid container spacing={3}>
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}>
                <Box
                  sx={{
                    background: stat.bg,
                    color: stat.color,
                    borderRadius: 2,
                    p: 1.5,
                    display: "flex",
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color={stat.color}>
                    {stat.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
 
      {/* Avance general: ahora con visualización real, no solo un número */}
      <Card sx={{ borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", mt: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <TrendingUpIcon sx={{ color: "#8b5cf6" }} />
            <Typography variant="h6" fontWeight="bold">
              Avance General
            </Typography>
          </Stack>
 
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={avanceGeneral}
                  size={130}
                  thickness={4}
                  sx={{ color: "#8b5cf6" }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    {avanceGeneral}%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    completado
                  </Typography>
                </Box>
              </Box>
            </Grid>
 
            <Grid item xs={12} sm={8}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                Distribución de los {totalProyectos} proyectos activos
              </Typography>
 
              <Box
                sx={{
                  display: "flex",
                  height: 10,
                  borderRadius: 5,
                  overflow: "hidden",
                  bgcolor: "#f1f5f9",
                }}
              >
                {breakdown.map((b) => (
                  <Box
                    key={b.label}
                    sx={{
                      width: `${(b.value / totalProyectos) * 100}%`,
                      bgcolor: b.color,
                    }}
                  />
                ))}
              </Box>
 
              <Stack direction="row" spacing={3} sx={{ mt: 2, flexWrap: "wrap" }}>
                {breakdown.map((b) => (
                  <Stack direction="row" alignItems="center" spacing={1} key={b.label}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: b.color,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {b.label} <strong>{b.value}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
 
      {/* Proyectos recientes */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 5, mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Proyectos recientes
        </Typography>
      </Stack>
 
      <Card sx={{ borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <CardContent sx={{ p: 0 }}>
          {recentProjects.map((project, i) => {
            const style = statusStyles[project.status];
            return (
              <Box key={project.name}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    px: 3,
                    py: 2,
                    transition: "background-color 0.2s ease",
                    "&:hover": { backgroundColor: "#fafafa" },
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ bgcolor: style.bg, width: 40, height: 40 }}>
                      <span style={{ fontSize: 18 }}>{project.emoji}</span>
                    </Avatar>
                    <Box>
                      <Typography fontWeight={500}>{project.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Actualizado · {project.updated}
                      </Typography>
                    </Box>
                  </Stack>
 
                  <Chip
                    label={project.status}
                    size="small"
                    sx={{
                      bgcolor: style.bg,
                      color: style.color,
                      fontWeight: 600,
                    }}
                  />
                </Stack>
                {i < recentProjects.length - 1 && <Divider />}
              </Box>
            );
          })}
 
          <Divider />
          <Box sx={{ p: 1.5, display: "flex", justifyContent: "center" }}>
            <Button endIcon={<ArrowForwardIcon />} sx={{ textTransform: "none" }}>
              Ver todos los proyectos
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
 
export default Dashboard;
 