import { Eye, Target, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="gradient-text">Chazon</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nascemos da combinação de visão estratégica e execução criativa, 
            transformando desafios em oportunidades para nossos clientes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A <strong className="text-foreground">Chazon</strong> nasceu da necessidade de unir 
                <strong className="text-accent"> criatividade</strong>, 
                <strong className="text-accent"> tecnologia</strong> e 
                <strong className="text-accent"> estratégia</strong> em um só lugar.
              </p>
              <p>
                Começamos como um pequeno grupo de profissionais apaixonados por marketing 
                e tecnologia, determinados a entregar soluções que realmente fazem a diferença 
                na vida dos nossos clientes.
              </p>
              <p>
                Hoje, somos uma agência completa que atende desde pequenos empreendedores 
                até grandes empresas, sempre mantendo nosso foco na personalização e 
                nos resultados práticos.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="professional-card bg-gradient-primary text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">O Significado de "Chazon"</h4>
              <p className="text-primary-foreground/90 leading-relaxed">
                <strong>Chazon</strong> significa "visão profética" em hebraico. 
                Representa nossa capacidade de enxergar além do presente, 
                antecipando tendências e criando soluções inovadoras que 
                posicionam nossos clientes à frente da concorrência.
              </p>
              <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm font-medium">Visão • Estratégia • Futuro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="professional-card text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transformar negócios através de soluções criativas e tecnológicas 
              que geram resultados reais e sustentáveis para nossos clientes.
            </p>
          </div>

          {/* Vision */}
          <div className="professional-card text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional em marketing digital e tecnologia, 
              reconhecida pela inovação e pela excelência em resultados.
            </p>
          </div>

          {/* Values */}
          <div className="professional-card text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparência, inovação, compromisso com resultados e 
              relacionamentos duradouros baseados na confiança mútua.
            </p>
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Nossos Diferenciais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Criatividade</h4>
              <p className="text-sm text-muted-foreground">
                Soluções únicas e personalizadas para cada cliente
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Estratégia</h4>
              <p className="text-sm text-muted-foreground">
                Planejamento baseado em dados e insights de mercado
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent rounded text-accent-foreground flex items-center justify-center text-xs font-bold">A</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Automação</h4>
              <p className="text-sm text-muted-foreground">
                Tecnologia que otimiza processos e maximiza resultados
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Relacionamento</h4>
              <p className="text-sm text-muted-foreground">
                Parceria duradoura focada no crescimento mútuo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;