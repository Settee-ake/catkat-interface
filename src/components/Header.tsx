import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+66 2 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@intertrade.co.th</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Globe size={14} />
            <span>English | ไทย</span>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg font-bold text-xl">
              INTERTRADE
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">Contact Us</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">Services</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">About</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all mx-4 text-center">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;