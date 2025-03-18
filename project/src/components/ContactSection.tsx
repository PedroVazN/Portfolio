
import React from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would integrate with a backend service to handle the form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato, retornarei em breve.",
      duration: 5000,
    });

    // Reset the form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading relative inline-block">
            Entre em Contato
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-futuristic-accent to-futuristic-glow"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-futuristic-darkBlue/50 backdrop-blur-sm p-8 rounded-lg border border-futuristic-accent/20 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-bold mb-6 text-white">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-futuristic-background/80 border border-futuristic-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-futuristic-accent/50 text-white placeholder-gray-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-futuristic-background/80 border border-futuristic-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-futuristic-accent/50 text-white placeholder-gray-500"
                  placeholder="pedrovazndev@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-futuristic-background/80 border border-futuristic-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-futuristic-accent/50 text-white placeholder-gray-500"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-futuristic w-full py-3 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <a href="mailto:contato@exemplo.com" className="text-white hover:text-futuristic-accent transition-colors">
                      pedrovazndev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Telefone</h4>
                    <a href="wa.me/11962234936" className="text-white hover:text-futuristic-accent transition-colors">
                      +55 (11) 96223-4936
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Localização</h4>
                    <p className="text-white">
                      São Paulo, Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Redes Sociais</h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/PedroVazN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent hover:bg-futuristic-accent hover:text-black transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pedro-vaz-a38238296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-futuristic-accent/20 flex items-center justify-center text-futuristic-accent hover:bg-futuristic-accent hover:text-black transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg moving-border">
              <h3 className="text-lg font-bold mb-4 text-white">Vamos trabalhar juntos!</h3>
              <p className="text-gray-300">
                Estou disponível para trabalhos freelance, estágios e oportunidades de colaboração.
                Entre em contato para discutirmos seu projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
