import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-green-500 mr-2" />
            <span className="text-xl font-bold text-gray-800">SaviBot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-500 transition-colors">Recursos</a>
            <a href="#benefits" className="text-gray-700 hover:text-green-500 transition-colors">Benefícios</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-500 transition-colors">Depoimentos</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-500 transition-colors">Planos e Preços</a>
            <a href="#faq" className="text-gray-700 hover:text-green-500 transition-colors">FAQ</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="text-gray-700 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#cta"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;