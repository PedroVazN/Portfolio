
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Maximize } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  fullDescription?: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Correto Edvar",
      description: "Plataforma para armazenamento e exibição de imóveis de um corretor em São Paulo",
      image: "project/src/images/projet1.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCss", "TypeScript"],
      githubLink: "https://github.com/PedroVazN/Portfolio_Edvar",
      liveLink: "https://www.corretoredvar.com.br",
      fullDescription: "O Corretor Edvar é uma plataforma imobiliária desenvolvida com React e TypeScript, integrada a um backend em Node.js hospedado na Vercel. Permite o cadastro de imóveis com até 30 imagens, exibição de 9 destaques na página inicial e uma página detalhada para cada imóvel. Conta com filtros de busca, um botão na navbar para cadastro e um sistema otimizado para experiência do usuário. O projeto visa facilitar a compra, venda e aluguel de imóveis com um design responsivo e escalável. "
    },
    {
      id: 2,
      title: "Admplan",
      description: "Plataforma para gestão de condomínios",
      image: "gradient-2",
      category: "web",
      technologies: ["React", "Node.js", "Tailwind", "TypeScript"],
      githubLink: "https://github.com/PedroVazN/Portoflio_LuisCarlos",
      liveLink: "https://admplan.vercel.app",
      fullDescription: "O AdmPlan facilita a vida do síndico profissional, garantindo eficiência e organização, para colocar a empresa no mercado, passando mais confiança para possíveis compradores 🚀"
    },
    {
      id: 3,
      title: "Boteco do Gordinho",
      description: "Cardápio Digtal",
      image: "gradient-3",
      category: "web",
      technologies: ["React.js", "TailwindCss", "Node.js", "TypeScript"],
      githubLink: "https://github.com/PedroVazN/Boteco_Gordinho_VN",
      liveLink: "https://boteco-gordinho.vercel.app",
      fullDescription: "O Boteco do Gordinho conta com um cardápio digital interativo, permitindo que clientes visualizem os pratos e bebidas de forma prática e intuitiva. A plataforma facilita pedidos, exibe preços atualizados e oferece uma experiência moderna e ágil no atendimento."
    },
    {
      id: 4,
      title: "Econverse",
      description: "Plataforma para Teste Vaga Front-End",
      image: "gradient-4",
      category: "web",
      technologies: ["React", "Sass", "TypeScript"],
      githubLink: "https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr",
      liveLink: "https://teste-vaga-front-end-jr-tan.vercel.app",
      fullDescription: "Este é um projeto de teste para a vaga de Desenvolvedor Front-End na Econverse. A aplicação é construída com React e TypeScript, utiliza SCSS para estilização e implementa funcionalidades comocarrossel, modal de detalhes e layout responsivo."
    },
    {
      id: 5,
      title: "SENAIFLIX",
      description: "Aplicativo de Streaming",
      image: "gradient-5",
      category: "backend",
      technologies: ["Java"],
      githubLink: "https://github.com/PedroVazN/SENAIFLIX",
      fullDescription: "SENAIFlix - Aplicativo de Streaming O SENAIFlix é um aplicativo de streaming de filmes e séries desenvolvido em Java. Ele permite aos usuários escolherem entre diferentes gêneros de filmes, selecionar títulos específicos e realizar a assinatura de planos de streaming."
    },
    {
      id: 6,
      title: "Site de Portfólio",
      description: "Site pessoal com animações avançadas e design responsivo",
      image: "gradient-6",
      category: "web",
      technologies: ["React", "GSAP", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
      fullDescription: "Site de portfólio pessoal com design futurista, animações avançadas e totalmente responsivo. Desenvolvido com React e Tailwind CSS para a interface, e GSAP para criar animações fluidas e interativas. Inclui modo escuro, filtragem de projetos e formulário de contato."
    }
  ];
  
  const filters = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'backend', name: 'Backend' },
    { id: 'game', name: 'Jogos' }
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading relative inline-block">
            Meus Projetos
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-futuristic-accent to-futuristic-glow"></span>
          </h2>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-futuristic-accent text-black font-medium'
                  : 'bg-futuristic-darkBlue text-gray-300 hover:bg-futuristic-accent/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-futuristic-darkBlue/40 backdrop-blur-sm border border-futuristic-accent/20 hover:border-futuristic-accent transition-all duration-500 animate-slide-up opacity-0"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Project Image/Background */}
              <div className={`h-48 bg-gradient-to-br ${getGradientByIndex(project.image)} w-full transition-transform duration-500 group-hover:scale-105`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm">
                    <Code size={40} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-futuristic-accent/20 text-futuristic-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-futuristic-accent hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    <Maximize size={16} />
                    <span>Detalhes</span>
                  </button>
                  
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-futuristic-accent transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-futuristic-accent transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={open => !open && setSelectedProject(null)}>
        <DialogContent className="bg-futuristic-darkBlue/95 backdrop-blur-xl border-futuristic-accent/30 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-orbitron">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-gray-300">
              {selectedProject?.category.charAt(0).toUpperCase() + selectedProject?.category.slice(1)} Project
            </DialogDescription>
          </DialogHeader>
          
          <div className={`h-48 bg-gradient-to-br ${selectedProject && getGradientByIndex(selectedProject.image)} w-full rounded-md overflow-hidden mb-4`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm">
                <Code size={40} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-200">{selectedProject?.fullDescription}</p>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="text-sm px-3 py-1 rounded-full bg-futuristic-accent/20 text-futuristic-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              {selectedProject?.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-futuristic flex items-center gap-2"
                >
                  <Github size={16} />
                  Código Fonte
                </a>
              )}
              {selectedProject?.liveLink && (
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-futuristic flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Demo ao Vivo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// Helper function to get different gradients for each project
function getGradientByIndex(gradient: string): string {
  const gradients = {
    'gradient-1': 'from-blue-500 to-indigo-600',
    'gradient-2': 'from-cyan-400 to-blue-500',
    'gradient-3': 'from-indigo-500 to-purple-600',
    'gradient-4': 'from-blue-400 to-teal-500',
    'gradient-5': 'from-purple-500 to-blue-600',
    'gradient-6': 'from-teal-400 to-cyan-500',
  };
  
  return gradients[gradient as keyof typeof gradients] || 'from-futuristic-accent to-futuristic-glow';
}

export default ProjectsSection;
