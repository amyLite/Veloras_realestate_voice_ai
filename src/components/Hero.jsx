import React from "react";
import Navbar from "./Navbar";
import phone from '../assets/phone.svg'
import Cal from "@calcom/embed-react";

const Hero = () => {
  return (
    <div>
      {/* CHANGED: Adjusted responsive padding (py-12 to py-24) */}
      <section className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-12 md:py-24 overflow-hidden">
        
        {/* Badge - CHANGED: Ensured inline-block so it wraps beautifully */}
        <p className="mt-3 mb-3 px-4 py-1 inline-block text-gray-100 max-w-xl text-xs sm:text-sm bg-gradient-to-r from-gray-800 to-gray-600 border border-cyan-500 rounded-xl tracking-wider font-semibold">
          AI ISA FOR REAL ESTATE TEAMS
        </p>

        {/* Heading - CHANGED: text-3xl on mobile scaling up to text-6xl on desktop, hid <br /> on mobile */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold leading-tight max-w-4xl px-2">
          The Fastest Agent <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">Wins</span> <br className="hidden sm:inline" /> We Make Sure It's You.
        </h1>

        {/* Subtitle - CHANGED: Responsive font scaling text-base to text-lg */}
        <p className="mt-5 text-gray-400 max-w-lg text-base sm:text-lg px-4">
          Every buyer and seller inquiry is called, qualified, and booked in under <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-semibold">30 seconds</span> — before another agent gets the chance.
        </p>

        {/* Buttons Section - CHANGED: flex-col on mobile (full width), flex-row on desktop */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          <button
            onClick={() =>
              window.open("https://cal.com/amarinder-singh-ojundk/realtor-demo", "_blank")
            }
            className="cursor-pointer w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 hover:from-gray-800 hover:to-blue-600 font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] transition duration-300 ease-in-out flex items-center gap-2"
          >
            Book a Demo
          </button>

          <div className="w-full sm:w-auto rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-pulse">
            <a href="#livedemo" className="block w-full h-full">
              <button className="cursor-pointer w-full sm:w-auto justify-center px-10 py-3 rounded-full bg-black text-white font-medium flex items-center">
                <img src={phone} className='h-5 mr-2' alt="phone icon"/>Listen recording
              </button>
            </a>
          </div>
        </div>

        {/* Feature List - CHANGED: Organized into a clean 2x2 grid on mobile/tablet, single row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mt-16 md:mt-20 text-xs sm:text-sm font-medium text-gray-300 px-4">
          <p className="flex items-center gap-2"><span className="text-cyan-500 font-bold">✓</span> Calls every new lead in under 30s</p>
          <p className="flex items-center gap-2"><span className="text-cyan-500 font-bold">✓</span> Sounds like a trained ISA</p>
          <p className="flex items-center gap-2"><span className="text-cyan-500 font-bold">✓</span> Qualifies buyers & sellers</p>
          <p className="flex items-center gap-2"><span className="text-cyan-500 font-bold">✓</span> Books appointments automatically</p>
        </div>

      </section>
    </div>
  )
}

export default Hero;