import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import AiChatBot from './components/AiChatBot'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {

  return (
    <div className='total_body'>
      <Header/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
