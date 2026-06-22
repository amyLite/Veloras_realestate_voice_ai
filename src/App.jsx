import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
  return (
    <Router>
      {/* Navbar stays at the top of every single page */}
      <Navbar />

      <Routes>
        {/* Main Home Page Route */}
        <Route 
          path="/" 
          element={
            <>

                <Hero/>

                <AudioPlayBox/>

                <AICallCard/>

                <HowItWorks/>

                <Integrations/>

            </>
          } 
        />

        {/* Standalone Audio Clip Route */}
        <Route 
          path="/audioclip" 
          element={
            <div className="py-20 bg-neutral-950 min-h-[80vh] flex items-center justify-center">
              <AudioPlayBox />
            </div>
          } 
        />
      </Routes>

      {/* Footer stays at the bottom of every single page */}
      <Footer />
    </Router>
  )
}

export default App