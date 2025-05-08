import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderOpen, MessageSquare } from 'lucide-react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-800/15 text-white shadow-md fixed w-full z-50 top-0 left-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-11 flex justify-between items-center">
        <span className="text-2xl md:text-4xl font-bold">Serralheria do João</span>

        {/* Menu para telas grandes */}
        <div className="hidden md:flex space-x-10 text-[1.1rem] items-center">
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
          aria-label="Abrir menu"
          className="md:hidden text-3xl focus:outline-none transition"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menu lateral para telas pequenas */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800 w-full px-6 pb-4`}>
        <Link to="/" className="block text-white py-3 border-b border-blue-700 hover:underline flex items-center gap-2">
          <Home size={20} /> Início
        </Link>
        <Link to="/portfolio" className="block text-white py-3 border-b border-blue-700 hover:underline flex items-center gap-2">
          <FolderOpen size={20} /> Portfólio
        </Link>
        <Link to="/form" className="block text-white py-3 hover:underline flex items-center gap-2">
          <MessageSquare size={20} /> Orçamento
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
