import './App.css'
import Navbar from './Components/navbar/Navbar'
import Skills from './Components/skills/Skills'
import About from './Components/about/About'
import Proyectos from './Components/proyectos/Proyectos'
import Footer from './Components/footer/Footer'
import InfoContacto from './Components/infoContacto/InfoContacto'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <About />
        <Skills />
        <Proyectos />
        <InfoContacto />
      </div>
      <Footer />
    </div>
  )
}

export default App
