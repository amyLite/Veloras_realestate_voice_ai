import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/realtorlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="px-4 lg:px-10 mx-auto flex justify-between items-center">

        {/* Logo */}
        <img src={logo} className="h-9" alt="logo" />

        {/* Desktop Menu */}
        <div className="desktop-nav gap-2 items-center">
          <div className="flex space-x-6 items-center navtext">
            <a href="#about" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              About
            </a>

            <a href="#howitworks" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              How it works
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              Pricing
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              FAQs
            </a>

            <div className="text-gray-300 text-lg">|</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-bold cursor-pointer text-gray-100 max-w-xl bg-gradient-to-r from-gray-800 to-gray-600 border border-gray-500 hover:border-gray-200 px-4 py-2 rounded-xl transition duration-300 ease-in-out">
              Book a Demo
            </button>

            <button className="text-sm cursor-pointer text-black bg-white border border-gray-200 font-bold hover:bg-gray-300 px-4 py-2 rounded-xl transition duration-300 ease-in-out">
              <a href="#livedemo">Try Rezora</a>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        {/* FIX 1: Uncommented the conditional icons and removed the text "X" */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu text-white flex items-center justify-center p-2 rounded-xl hover:bg-slate-800/50 transition focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Wrapper */}
      <div
        className={`pt-2 mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* FIX 2: Changed bg-white to bg-slate-900 and border-gray-100 to border-slate-800 */}
        <div className="mx-4 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-lg shadow-2xl p-5">
          <div className="flex flex-col gap-4">

            {/* Changed mobile paths to reflect your desktop layout for alignment */}
            <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition duration-200 ease-in-out">
              About
            </a>

            <a href="#howitworks" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition duration-200 ease-in-out">
              How it Works
            </a>

            <a href="#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition duration-200 ease-in-out">
              Pricing
            </a>

            <a href="#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition duration-200 ease-in-out">
              FAQs
            </a>

            {/* Actions Panel - Updated to fit dark UI and match Hero section theme */}
            <div className="border-t border-slate-800 pt-4 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://cal.com/amarinder-singh-ojundk/realtor-demo", "_blank");
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-neutral-950 py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/10"
              >
                Book a Demo
              </button>

              <a href="#livedemo" onClick={() => setIsOpen(false)} className="w-full">
                <button className="w-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-100 py-3 rounded-xl font-semibold text-sm transition">
                  Try Rezora
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;