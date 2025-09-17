import { Share2, Palette, TrendingUp, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media",
      description: "Gestão completa de redes sociais com criação de conteúdo estratégico, engajamento e crescimento orgânico.",
      features: [
        "Criação de conteúdo",
        "Gestão de comunidades",
        "Estratégia de crescimento",
        "Relatórios de performance"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Design Estratégico",
      description: "Design que comunica, converte e fortalece sua marca com identidade visual consistente e impactante.",
      features: [
        "Identidade visual",
        "Material gráfico",
        "UX/UI Design",
        "Branding completo"
      ],
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads, Facebook e Instagram Ads para maximizar ROI e conversões.",
      features: [
        "Google Ads",
        "Meta Ads",
        "Otimização de conversão",
        "Relatórios detalhados"
      ],
      color: "bg-green-500"
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Soluções web e mobile personalizadas com tecnologia moderna, performance e experiência do usuário.",
      features: [
        "Sites institucionais",
        "E-commerce",
        "Aplicativos mobile",
        "Sistemas personalizados"
      ],
      color: "bg-orange-500"
    }
  ];

  const scrollToContato = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em marketing digital e tecnologia, 
            personalizadas para as necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="professional-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                onClick={scrollToContato}
              >
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Como Trabalhamos
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Diagnóstico</h4>
              <p className="text-sm text-muted-foreground">
                Analisamos seu negócio e identificamos oportunidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">Estratégia</h4>
              <p className="text-sm text-muted-foreground">
                Criamos um plano personalizado para seus objetivos
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Execução</h4>
              <p className="text-sm text-muted-foreground">
                Implementamos as soluções com qualidade e agilidade
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">Otimização</h4>
              <p className="text-sm text-muted-foreground">
                Monitoramos e otimizamos continuamente os resultados
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar novos patamares de sucesso.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContato}
            className="btn-hero text-lg px-8 py-4 font-semibold"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;