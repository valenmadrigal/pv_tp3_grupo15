import { Alert } from "@mui/material";

const RegistroActividad = ({ fecha }) => {

  if (!fecha) return null;

  const fechaFormateada =
    fecha.toLocaleDateString("es-AR");

  const horaFormateada =
    fecha.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit"
    });

  return (
    <Alert severity="info">
      Última actualización de la lista:{" "}
      {fechaFormateada} a las {horaFormateada} hs.
    </Alert>
  );
};

export default RegistroActividad;