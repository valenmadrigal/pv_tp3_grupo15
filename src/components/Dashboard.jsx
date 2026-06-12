import { Typography, Card, CardContent, Grid, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";

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
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Gestión de Proyectos Educativos
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.85 }}>
          Bienvenido al sistema de gestión. Aquí podés ver un resumen de tus proyectos.
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={3}>
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 3,
                }}
              >
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

    </Box>
  );
}

export default Dashboard;