
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
              <PerfilUsuario />
              <ListaProyectos />
            </>
          }
        />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App;
