import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'
import './App.css'
import HowItWorks from './components/HowItWorks.jsx'
import { AICallCard } from './components/AiCallCard.jsx'
import ContactFormCard from './components/LiveDemo.jsx'
import Integrations from './components/Integrations.jsx'
import Footer from './components/Footer.jsx'
import AudioPlayBox from './components/AudioPlay.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <AudioPlayBox/>
    <AICallCard/>
    <HowItWorks/>
    <Integrations/>
    <Footer/>
    
    </>
  )
}

export default App
