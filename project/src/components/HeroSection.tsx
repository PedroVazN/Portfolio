
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = '';
    
    // Animate each letter
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = 'inline-block';
      span.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
      span.style.transitionDelay = `${index * 0.05}s`;
      
      titleRef.current?.appendChild(span);
      
      // Trigger animation after a short delay
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pb-16 pt-24">
      <div className="absolute inset-0 z-0">
        {/* Gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-futuristic-blue/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-futuristic-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-futuristic-accent animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Olá, sou
          </h2>
          
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow-glow">
            Pedro Vaz
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Desenvolvedor <span className="glow-text">Full Stack</span> focado em criar experiências digitais inovadoras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a href="#projects" className="btn-futuristic">
              Ver Projetos
            </a>
            <a href="#contact" className="btn-futuristic">
              Entrar em Contato
            </a>
          </div>
        </div>
        
        <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-futuristic-accent hover:text-white transition-colors animate-bounce">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
