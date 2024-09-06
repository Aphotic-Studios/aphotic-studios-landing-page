import React from "react";
import "./Header.css";

const Header = () => {
  const [showMenuButton, setShowMenuButton] = React.useState(false);

  const handleClick = () => {
    setShowMenuButton((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="#">
              <img src="your-logo.png" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-gray-600 focus:outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden bg-white shadow-md absolute top-16 left-0 w-full ${
          showMenuButton ? "" : "hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-4">
          <a href="#home" className="block text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="block text-gray-600 hover:text-blue-600">
            About
          </a>
          <a
            href="#services"
            className="block text-gray-600 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-600 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
