import { Container } from '@mui/material';
import './App.css';
import ListaProyectos from './components/ListaProyectos';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import "./css/styles.css";
import PerfilUsuario from './components/PerfilUsuario';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Nav />
      <PerfilUsuario />
      <ListaProyectos />
      <Footer />
    </Container>
  );
}

export default App;
