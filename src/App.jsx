import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import "./css/styles.css";

import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';

import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import PerfilUsuario from './components/PerfilUsuario';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;