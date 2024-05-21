import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h--4 p-4 ">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center mr-4 text-white font-bold text-xl"
        >
          <img className="w-10" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex sm:items-center">
          <Link
            to="/"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            Our Services
          </Link>
          <Link
            to="/hexa"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            Auxzon Hexa
          </Link>
          <Link
            to="/careers"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-{#05253B} hover:text-gray-200 transition duration-300 mx-4"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block sm:hidden text-black focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
            : "hidden"
        } sm:hidden`}
      >
        <Link
          to="/"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          About us
        </Link>
        <Link
          to="/services"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          Our Services
        </Link>
        <Link
          to="/hexa"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          Auxzon Hexa
        </Link>
        <Link
          to="/careers"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          Careers
        </Link>
        <Link
          to="/contact"
          className="block text-black text-2xl font-semibold mb-4"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
