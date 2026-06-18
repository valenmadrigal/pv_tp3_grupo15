import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

function ProyectoCard({ proyecto, handleEliminar, claseEstado }) {
  if (!proyecto) return null;

  const { titulo, categoria, estado, id } = proyecto;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {titulo}
        </Typography>

        <Typography>Categoría: {categoria}</Typography>

        <Typography className={claseEstado?.(estado)}>
          Estado: {estado}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, width: "100%" }}
        >
          <Button
            onClick={() => handleEliminar?.(id)}
            sx={{
              backgroundColor: "#dc3545",
              color: "white",
              borderRadius: "8px",
              padding: "4px 10px",
              "&:hover": {
                transform: "translateY(-3px)",
                opacity: 0.85,
                backgroundColor: "#dc3545",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            Eliminar
          </Button>

          <Button
            component={Link}
            to={`/proyectos/${id}`}
            sx={{
              backgroundColor: "#6366f1",
              color: "white",
              borderRadius: "8px",
              padding: "4px 10px",
              textDecoration: "none",
              "&:hover": {
                transform: "translateY(-3px)",
                opacity: 0.85,
                backgroundColor: "#6366f1",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            Ver detalle
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProyectoCard;
