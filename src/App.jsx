import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import ListaProyectos from './components/ListaProyectos'
import DetalleProyecto from './components/DetalleProyecto'
import PerfilUsuario from './components/PerfilUsuario'
import Dashboard from './components/Dashboard'
import "./css/styles.css"

function App() {
  return (
    <>
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
    </>
  )
}

export default App