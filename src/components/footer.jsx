import { Box, Typography } from "@mui/material";
 
function Footer() {
  const year = new Date().getFullYear();
 
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "rgba(255,255,255,0.7)",
        textAlign: "center",
        py: 2.5,
        mt: 6,
      }}
    >
      <Typography variant="body2">
        © {year} Gestión de Proyectos Educativos
      </Typography>
    </Box>
  );
}
 
export default Footer;
 