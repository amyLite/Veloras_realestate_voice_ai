import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/realtorlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="px-4 lg:px-10 mx-auto flex justify-between items-center">

        {/* Logo */}
        {/* <h3 className="text-2xl font-bold text-white">Realtor</h3> */}
        <img src={logo} className="h-11"/>

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
            <button className="text-sm font-bold cursor-pointer text-gray-100 max-w-xl bg-linear-65 from-gray-800 to-gray-600 border border-gray-500 hover:border-gray-200 px-4 py-2 rounded-xl transition delay-50 duration-300 ease-in-out">
              Book a Demo
            </button>

            <button className="text-sm cursor-pointer text-black bg-white border border-gray-200 font-bold hover:bg-gray-300 px-4 py-2 rounded-xl transition delay-50 duration-300 ease-in-out">
              <a href="#livedemo">Try Rezora</a>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu text-white text-lg"
        >
          {/* {isOpen ? <X size={28} /> : <Menu size={28} />} */}
          X
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
  className={`pt-4 mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
        <div className="mx-4 rounded-2xl border border-gray-100 bg-white shadow-lg p-5">
          <div className="flex flex-col gap-5">

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              Blog
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              How it Works
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              Pricing
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out">
              FAQs
            </a>

            <div className="border-t pt-5 flex flex-col gap-3">
              <button className="bg-violet-500 text-white py-3 rounded-xl font-semibold">
                Book a Demo
              </button>

              <button className="border border-gray-200 py-3 rounded-xl font-semibold">
                Try Rezora
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;