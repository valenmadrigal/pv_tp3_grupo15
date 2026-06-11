import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";

function Dashboard() {
  return (
    <Container>

      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" gutterBottom>
        Bienvenido al sistema de Gestión de Proyectos Educativos.
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total de proyectos
              </Typography>

              <Typography variant="h4">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Proyectos en curso
              </Typography>

              <Typography variant="h4">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
}

export default Dashboard;