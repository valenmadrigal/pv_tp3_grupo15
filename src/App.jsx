import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListaProyectos from './components/ListaProyectos'
import Header from './components/header'
import Footer from './components/footer'
import Nav  from './components/nav'
import "./css/styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Nav />
        <ListaProyectos />
        <Footer />
    </>
  )
}

export default App
