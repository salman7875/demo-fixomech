import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 md:py-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt="Logo"
            className="h-8 w-8"
          />
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`relative font-medium text-gray-700 hover:text-gray-900 transition-colors ${
                active === link ? "text-red-600" : ""
              }`}
            >
              {link}
              {active === link && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right: Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-white text-red-600 px-3 py-1.5 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition text-sm">
            Get Brochure
          </button>
          <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition text-sm">
            Contact Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link);
                  setIsOpen(false);
                }}
                className={`text-left font-medium text-gray-700 hover:text-gray-900 ${
                  active === link ? "text-red-600" : ""
                }`}
              >
                {link}
              </button>
            ))}
            <div className="flex flex-col space-y-2 mt-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Sign In
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
