
import React from 'react';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading relative inline-block">
            Sobre Mim
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-futuristic-accent to-futuristic-glow"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="relative group" 
            data-aos="fade-right"
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden moving-border">
              <div className="w-full h-full bg-gradient-to-br from-futuristic-darkBlue/80 to-futuristic-background/80 p-6 flex items-center justify-center">
                
                <div className="relative w-64 h-64 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-futuristic-accent to-futuristic-glow opacity-20 blur-md animate-pulse-glow"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-futuristic-accent relative z-10">
                    <div className="w-full h-full bg-futuristic-darkBlue flex items-center justify-center text-7xl font-bold text-futuristic-accent">
                     <img src="https://avatars.githubusercontent.com/u/126263134?v=4" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4 text-white">Quem sou eu</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e interfaces futuristas. 
              Com 18 anos, já acumulo experiência em diversas tecnologias modernas e estou constantemente 
              buscando aprender e evoluir no mundo da programação.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-white">Formação Técnica</h4>
                  <p className="text-gray-300">
                    Curso técnico em Analíse Desenvolvimento de Sistemas, onde obtive conhecimentos fundamentais em lógica de programação,
                    desenvolvimento web e mobile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-white">Cursando Superior</h4>
                  <p className="text-gray-300">
                    Atualmente cursando Superior de Tecnologia em Analíse Desenvolvimento de Sistemas, aprofundando meus conhecimentos teóricos e práticos 
                    em desenvolvimento de software, algoritmos e estruturas de dados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-white">Experiência</h4>
                  <p className="text-gray-300">
                    Trabalho em projetos pessoais e acadêmicos, desenvolvendo aplicações web e mobile 
                    com foco em usabilidade e experiência do usuário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
