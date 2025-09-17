import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContato = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSobre = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-8 border border-primary-foreground/20">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
            Inovação • Criatividade • Resultados
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos
            <span className="block gradient-text">
              Visões em Realidade
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Somos a <strong>Chazon</strong>, uma agência que une criatividade, automação e estratégia 
            para entregar soluções práticas e personalizadas em marketing digital e tecnologia.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm md:text-base">Social Media</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm md:text-base">Design Estratégico</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm md:text-base">Tráfego Pago</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm md:text-base">Desenvolvimento</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContato}
              className="btn-hero pulse-glow text-lg px-8 py-4 font-semibold group"
            >
              Vamos fazer acontecer?
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToSobre}
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm px-8 py-4 font-medium group"
            >
              <Play className="mr-2 h-5 w-5" />
              Conheça nossa história
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm mb-4">
              Confiado por empresas e empreendedores de diversos setores
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-primary-foreground/50 text-sm">+50 Projetos</div>
              <div className="w-px h-6 bg-primary-foreground/30"></div>
              <div className="text-primary-foreground/50 text-sm">+30 Clientes</div>
              <div className="w-px h-6 bg-primary-foreground/30"></div>
              <div className="text-primary-foreground/50 text-sm">+3 Anos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;