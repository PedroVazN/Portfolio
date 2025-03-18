
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-futuristic-darkBlue/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-orbitron font-bold glow-text">Pedro<span className="text-white">VazDev</span></a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="menu-item">Início</a>
          <a href="#about" className="menu-item">Sobre</a>
          <a href="#skills" className="menu-item">Habilidades</a>
          <a href="#projects" className="menu-item">Projetos</a>
          <a href="#contact" className="menu-item">Contato</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white hover:text-futuristic-accent transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-futuristic-background/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col space-y-6 text-center">
          <a href="#home" onClick={toggleMenu} className="text-xl menu-item">Início</a>
          <a href="#about" onClick={toggleMenu} className="text-xl menu-item">Sobre</a>
          <a href="#skills" onClick={toggleMenu} className="text-xl menu-item">Habilidades</a>
          <a href="#projects" onClick={toggleMenu} className="text-xl menu-item">Projetos</a>
          <a href="#contact" onClick={toggleMenu} className="text-xl menu-item">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
