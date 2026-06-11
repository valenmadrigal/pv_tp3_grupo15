import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import ListaProyectos from './components/ListaProyectos'
import DetalleProyecto from './components/DetalleProyecto'
import "./css/styles.css"


function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<ListaProyectos />} />
          <Route path="/dashboard" element={<ListaProyectos />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          {/* Cuando creen las views, descomentar estas: */}
          {/* <Route path="/perfil" element={<PerfilUsuario />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App