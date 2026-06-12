
import { Container } from '@mui/material';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import './css/styles.css'
import PerfilUsuario from './components/PerfilUsuario'
import DetalleProyecto from './components/DetalleProyecto'
import ListaProyectos from './components/ListaProyectos'
import Dashboard from './components/Dashboard'
import "./css/styles.css"

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
      </Routes>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>


      <Footer />
    </>
  )

}


export default App;
