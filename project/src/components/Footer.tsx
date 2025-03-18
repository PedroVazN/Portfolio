
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 border-t border-futuristic-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-orbitron font-bold glow-text">Pedro<span className="text-white">VazDev</span></a>
          </div>
          
          <div className="text-center mb-4 md:mb-0 md:text-left">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} | Todos os direitos reservados
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-futuristic-accent/20 text-futuristic-accent hover:bg-futuristic-accent hover:text-black transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
