import { Container, Typography, Paper} from "@mui/material";

function PerfilUsuario() {

  return (

    <Container>

      <Typography
        variant="h4"
        gutterBottom
      >
        Perfil de Usuario
      </Typography>

      <Paper
        elevation={3}
        sx={{ padding: 3 }}
      >

        <Typography>
          Nombre: Valentina Madrigal
        </Typography>

        <Typography>
          Rol: Alumna
        </Typography>

        <Typography>
          Institución: Facultad de Ingeniería
        </Typography>

        <Typography>
          Carrera: Analista Programador Universitario
        </Typography>

      </Paper>

    </Container>

  );
}

export default PerfilUsuario;