import { Container } from '@mui/material';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/nav'
import PerfilUsuario from './components/PerfilUsuario'
import DetalleProyecto from './components/DetalleProyecto'
import Dashboard from './components/Dashboard'
import "./css/styles.css"
import { UsuarioProvider } from './context/UsuarioContext';

function App() {
  return (
    <UsuarioProvider>
      <Header />
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>

      <Footer />
    </UsuarioProvider>
  );
}

export default App;
