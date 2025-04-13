// src/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-700 text-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold">Serralheria do João</span>

        {/* Menu para telas grandes */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/portfolio" className="hover:underline">Portfólio</Link>
          <Link to="/form" className="block text-white hover:underline">Orçamento</Link>
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu lateral para telas pequenas */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800 p-4`}>
        <Link to="/" className="block text-white py-2 hover:underline">Início</Link>
        <Link to="/portfolio" className="block text-white py-2 hover:underline">Portfólio</Link>
        <Link to="/form" className="block text-white py-2 hover:underline">Orçamento</Link>
      </div>
    </nav>
  );
}

export default NavBar;
