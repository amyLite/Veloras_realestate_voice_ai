import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import HowItWorks from './components/Howitworks'
import { AICallCard } from './components/AiCallCard'
import ContactFormCard from './components/LiveDemo'
import Integrations from './components/Integrations'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <AICallCard/>
    <ContactFormCard/>
    <HowItWorks/>
    <Integrations/>
    <Footer/>
    
    </>
  )
}

export default App
