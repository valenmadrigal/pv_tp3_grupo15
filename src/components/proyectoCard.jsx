import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";

function ProyectoCard({
  proyecto,
  handleEliminar,
  claseEstado
}) {

  if (!proyecto) return null;

  const {
    titulo,
    categoria,
    estado,
    id
  } = proyecto;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>

        <Typography variant="h5" gutterBottom>
          {titulo}
        </Typography>

        <Typography>
          Categoría: {categoria}
        </Typography>

        <Typography className={claseEstado?.(estado)}>
          Estado: {estado}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: 2 }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => handleEliminar?.(id)}
          >
            Eliminar
          </Button>

          <Button
            variant="outlined"
            onClick={() => console.log(`Ver detalle del proyecto ${id}`)}
          >
            Ver detalle
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
}

export default ProyectoCard;