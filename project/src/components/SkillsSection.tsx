
import React, { useState } from 'react';
import { Code, Database, Terminal, Layout, Cpu, Monitor } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Todas', icon: <Terminal /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout /> },
    { id: 'backend', name: 'Backend', icon: <Database /> },
    { id: 'languages', name: 'Linguagens', icon: <Code /> },
    { id: 'tools', name: 'Ferramentas', icon: <Cpu /> },
  ];
  
  const skills: Skill[] = [
    { name: 'HTML5', level: 100, category: 'frontend', icon: <Code /> },
    { name: 'CSS3', level: 85, category: 'frontend', icon: <Code /> },
    { name: 'JavaScript', level: 95, category: 'languages', icon: <Code /> },
    { name: 'React', level: 95, category: 'frontend', icon: <Code /> },
    { name: 'TypeScript', level: 90, category: 'languages', icon: <Code /> },
    { name: 'Node.js', level: 90, category: 'backend', icon: <Database /> },
    { name: 'Express', level: 85, category: 'backend', icon: <Database /> },
    { name: 'MongoDB', level: 90, category: 'backend', icon: <Database /> },
    { name: 'SQL', level: 90, category: 'backend', icon: <Database /> },
    { name: 'Git', level: 85, category: 'tools', icon: <Terminal /> },
    { name: 'Figma', level: 80, category: 'tools', icon: <Monitor /> },
    { name: 'TailwindCSS', level: 90, category: 'frontend', icon: <Code /> },
  ];
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading relative inline-block">
            Minhas Habilidades
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-futuristic-accent to-futuristic-glow"></span>
          </h2>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-futuristic-accent text-black font-medium'
                  : 'bg-futuristic-darkBlue text-gray-300 hover:bg-futuristic-accent/20'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-futuristic-darkBlue/50 backdrop-blur-sm p-6 rounded-lg border border-futuristic-accent/20 hover:border-futuristic-accent transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-futuristic-accent/20 text-futuristic-accent">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full h-3 bg-futuristic-darkBlue rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-futuristic-accent to-futuristic-glow group-hover:animate-pulse-glow transition-all duration-1000 ease-out origin-left"
                  style={{ 
                    width: '0%', 
                    animation: `growBar 1.5s ease-out forwards ${index * 0.1}s`
                  }}
                ></div>
              </div>
              
              <div className="mt-2 text-right">
                <span className="text-futuristic-accent font-medium">{skill.level}%</span>
              </div>
              
              <style>{`
                @keyframes growBar {
                  from { width: 0%; }
                  to { width: ${skill.level}%; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
