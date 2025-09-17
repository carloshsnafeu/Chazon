import { ExternalLink, TrendingUp, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Fashion",
      description: "Desenvolvimento completo de loja virtual com integração de pagamentos e sistema de gestão.",
      category: "Desenvolvimento",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "E-commerce", "Design"],
      results: [
        { metric: "Conversões", value: "+300%" },
        { metric: "Vendas Online", value: "+250%" }
      ]
    },
    {
      title: "Campanha Igreja Local",
      description: "Estratégia completa de marketing digital para crescimento da comunidade e engajamento.",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop",
      tags: ["Social Media", "Tráfego Pago", "Branding"],
      results: [
        { metric: "Alcance", value: "+500%" },
        { metric: "Novos Membros", value: "+150%" }
      ]
    },
    {
      title: "App Delivery Restaurante",
      description: "Aplicativo mobile para delivery com sistema de pedidos e gestão de cardápio.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      tags: ["React Native", "Design UX", "Sistema"],
      results: [
        { metric: "Pedidos Online", value: "+400%" },
        { metric: "Satisfação", value: "95%" }
      ]
    },
    {
      title: "Infoprodutor Digital",
      description: "Identidade visual, landing pages e automação de marketing para lançamento de curso.",
      category: "Marketing & Design",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tags: ["Landing Page", "Automação", "Design"],
      results: [
        { metric: "Taxa Conversão", value: "12%" },
        { metric: "Faturamento", value: "+200%" }
      ]
    }
  ];

  const scrollToContato = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projetos" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que transformaram negócios e geraram 
            resultados extraordinários para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="professional-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="w-full"
                      onClick={scrollToContato}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="border-t border-border pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-lg font-bold text-accent">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Resultados que Comprovam nossa Excelência
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">+50</div>
              <p className="text-muted-foreground">Projetos Entregues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">+30</div>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">+3</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="professional-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                M
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Maria Silva</h4>
                <p className="text-sm text-muted-foreground">CEO, Fashion Store</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "A Chazon transformou completamente nosso e-commerce. Em 6 meses, 
              triplicamos nossas vendas online. Profissionalismo e resultado garantido!"
            </p>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="professional-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-accent-foreground font-bold">
                J
              </div>
              <div>
                <h4 className="font-semibold text-foreground">João Santos</h4>
                <p className="text-sm text-muted-foreground">Pastor, Igreja Local</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Estratégia de marketing excepcional! Nossa comunidade cresceu 150% 
              e o engajamento nas redes sociais aumentou significativamente."
            </p>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Pronto para ser nosso próximo case de sucesso?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos discutir como podemos transformar 
            sua visão em realidade com resultados comprovados.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContato}
            className="btn-hero text-lg px-8 py-4 font-semibold pulse-glow"
          >
            Iniciar Meu Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;