// src/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderOpen, MessageSquare } from 'lucide-react'; // Ícones importados

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-800 text-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto  py-6 flex justify-between items-center">
        <span className="text-4xl font-bold">Serralheria do João</span>

        {/* Menu para telas grandes */}
        <div className="hidden md:flex space-x-10 text-lg items-center">
          <Link to="/" className="hover:underline flex items-center gap-2">
            <Home size={22} /> Início
          </Link>
          <Link to="/portfolio" className="hover:underline flex items-center gap-2">
            <FolderOpen size={22} /> Portfólio
          </Link>
          <Link to="/form" className="hover:underline flex items-center gap-2">
            <MessageSquare size={22} /> Orçamento
          </Link>
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-3xl"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu lateral para telas pequenas */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800 p-4 text-lg`}>
        <Link to="/" className="block text-white py-2 hover:underline flex items-center gap-2">
          <Home size={20} /> Início
        </Link>
        <Link to="/portfolio" className="block text-white py-2 hover:underline flex items-center gap-2">
          <FolderOpen size={20} /> Portfólio
        </Link>
        <Link to="/form" className="block text-white py-2 hover:underline flex items-center gap-2">
          <MessageSquare size={20} /> Orçamento
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
