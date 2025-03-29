import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Instrek</span>
            <span className="text-2xl font-bold text-gray-800">Technologies</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 font-medium">Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 font-medium">About</a>
            <a href="#strengths" className="text-gray-800 hover:text-indigo-600 font-medium">Strengths</a>
            <a href="#services" className="text-gray-800 hover:text-indigo-600 font-medium">Services</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 text-gray-800 hover:text-indigo-600">Home</a>
            <a href="#about" className="block py-2 text-gray-800 hover:text-indigo-600">About</a>
            <a href="#strengths" className="block py-2 text-gray-800 hover:text-indigo-600">Strengths</a>
            <a href="#services" className="block py-2 text-gray-800 hover:text-indigo-600">Services</a>
            <a href="#contact" className="block py-2 text-gray-800 hover:text-indigo-600">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;