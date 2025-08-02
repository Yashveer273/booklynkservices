import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent backdrop-blur-sm z-50 px-6 md:px-12 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Left Arrow Icon (Logo) */}
        <div className="w-80 h-10 flex items-center justify-center">
          {/* <img src={logo} alt=""  className=' h-16 rounded-full'/> */}
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/src/assets/logo.png" // Replace with your actual image path
              alt="EZ Logo"
              style={{ height: "50px", marginRight: "8px" }} // Adjust as needed
            />
            <p className="text-white font-semibold">Book Lynk Services Pvt Ltd</p>
          </a>
        </div>

        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#ffffff] focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full px-10 py-3 flex items-center gap-10 shadow-xl">
            <a
              href="/#about"
              className="text-white text-base font-semibold hover:text-purple-200 transition-all"
            >
              About
            </a>
            <a
              href="/pricing"
              className="text-white text-base font-semibold hover:text-purple-200 transition-all"
            >
              Pricing Plan
            </a>
            <a
              href="/#services"
              className="text-white text-base font-semibold hover:text-purple-200 transition-all"
            >
              Services
            </a>
            <a
              href="/#features"
              className="text-white text-base font-semibold hover:text-purple-200 transition-all"
            >
              Portfolio
            </a>
            <a
              href="/#feedback"
              className="text-white text-base font-semibold hover:text-purple-200 transition-all"
            >
              Testimonials
            </a>
          </div>
        </div>

        {/* Let's Connect Button - Desktop */}
        <div className="hidden md:flex">
          <a
            href="/#connect"
            className="ml-auto bg-gradient-to-br from-cyan-500 to-indigo-500 text-white text-base font-semibold px-6 py-3 rounded-full shadow-xl hover:opacity-90 transition-all"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Navigation Items - Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-6 bg-gradient-to-br from-cyan-600 to-indigo-900 rounded-xl p-6 shadow-xl">
          <a
            href="/#about"
            className="text-white text-base font-semibold hover:text-purple-200 transition-all"
          >
            About
          </a>
          <a
            href="/pricing"
            className="text-white text-base font-semibold hover:text-purple-200 transition-all"
          >
            Pricing Plan
          </a>
          <a
            href="/#services"
            className="text-white text-base font-semibold hover:text-purple-200 transition-all"
          >
            Services
          </a>
          <a
            href="/#features"
            className="text-white text-base font-semibold hover:text-purple-200 transition-all"
          >
            Portfolio
          </a>
          <a
            href="/#feedback"
            className="text-white text-base font-semibold hover:text-purple-200 transition-all"
          >
            Testimonials
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
