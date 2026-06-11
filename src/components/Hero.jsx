import React from "react";
import Navbar from "./Navbar";
import phone from '../assets/phone.svg'
import Cal from "@calcom/embed-react";

const Hero = () => {
  return (
    <div>
          <section className="relative flex flex-col items-center justify-center text-center text-white px-6 py-15 overflow-hidden">
      
      {/* Text */}
      <p className="mt-3 mb-3 px-4 text-gray-100 max-w-xl text-sm bg-linear-65 from-gray-800 to-gray-600 border border-cyan-500 rounded-xl">
      AI ISA FOR REAL ESTATE TEAMS
      </p>
      <h1 className="text-6xl text-white font-bold leading-tight">
      The Fastest Agent <span className="bg-gradient-to-r from-blue-500  to-cyan-500 bg-clip-text text-transparent font-bold">Wins</span> <br /> We Make Sure It's You.
      </h1>
      <p className="mt-5 text-gray-400 max-w-lg text-lg">
      Every buyer and seller inquiry is called, qualified, and booked in under <span className="bg-gradient-to-r from-blue-500  to-cyan-500 bg-clip-text text-transparent font-semibold">30 seconds</span> —before another agent gets the chance.
      </p>

      {/* Get Started Button */}
      <div className="items-center flex gap-4">
      <button
         onClick={() =>
          window.open("https://cal.com/amarinder-singh-ojundk/realtor-demo", "_blank")
        }
       className="cursor-pointer mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 hover:from-gray-800 hover:to-blue-600 transition flex items-center gap-2 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out">
        Book a Demo
      </button>
      <div className="mt-10 inline-block rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-white-500 bg-[length:200%_200%] animate-pulse">
      <a href="#livedemo"><button className="cursor-pointer px-10 py-3 rounded-full bg-black text-white font-medium flex item-center">
  <img src={phone} className='h-5 mt-1 mr-2'/>Try Live Call
  </button></a>
</div>

      </div>
      <div className="item-center flex gap-8 mt-20 text-gray-100 text-gray-300">
        <p><span className="text-cyan-500">✓</span> Calls every new lead in under 30s</p>
        <p><span className="text-cyan-500">✓</span> Sounds like a trained ISA</p>
        <p><span className="text-cyan-500">✓</span> Qualifies buyers & sellers</p>
        <p><span className="text-cyan-500">✓</span> Books appointments automatically</p>
      </div>

    </section>
    </div>
  )
}

export default Hero

