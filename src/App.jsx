import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import 'boxicons'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Scrollup from './components/scrollup/Scrollup'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
      <Scrollup/>
      <Footer/>
    </>
  )
}

export default App
