import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const articles = [
    {
      title: "Como Aumentar o Engajamento nas Redes Sociais em 2024",
      excerpt: "Descubra as estratégias mais eficazes para criar conteúdo que realmente conecta com sua audiência e gera resultados.",
      category: "Social Media",
      readTime: "5 min",
      date: "15 Jan 2024",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      featured: true
    },
    {
      title: "ROI em Tráfego Pago: Como Medir e Otimizar",
      excerpt: "Aprenda a calcular e maximizar o retorno dos seus investimentos em campanhas pagas no Google e Meta Ads.",
      category: "Tráfego Pago",
      readTime: "7 min",
      date: "12 Jan 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Design que Converte: Princípios para Landing Pages",
      excerpt: "Os elementos essenciais de design que transformam visitantes em clientes e aumentam suas conversões.",
      category: "Design",
      readTime: "6 min",
      date: "10 Jan 2024",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Automação de Marketing: Guia Completo para Iniciantes",
      excerpt: "Como implementar automações que nutrem leads, economizam tempo e aumentam as vendas do seu negócio.",
      category: "Automação",
      readTime: "8 min",
      date: "08 Jan 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const scrollToContato = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Blog & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compartilhamos conhecimento e estratégias para ajudar seu negócio 
            a se destacar no mundo digital.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="professional-card overflow-hidden md:flex gap-8">
            <div className="md:w-1/2">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="mr-1 h-3 w-3" />
                Artigo em Destaque
              </Badge>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                {articles[0].title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {articles[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {articles[0].readTime} de leitura
                </div>
                <Badge variant="outline">{articles[0].category}</Badge>
              </div>
              
              <Button onClick={scrollToContato} className="btn-hero">
                Ler Artigo Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <div 
              key={article.title}
              className="professional-card group cursor-pointer"
              onClick={scrollToContato}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
              </div>

              {/* Article Content */}
              <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h4>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Categorias de Conteúdo
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Marketing Digital</h4>
              <p className="text-sm text-muted-foreground">
                Estratégias e tendências do marketing online
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Design & UX</h4>
              <p className="text-sm text-muted-foreground">
                Princípios de design que convertem
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tecnologia</h4>
              <p className="text-sm text-muted-foreground">
                Inovações e ferramentas digitais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Negócios</h4>
              <p className="text-sm text-muted-foreground">
                Crescimento e estratégias empresariais
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="professional-card bg-gradient-primary text-primary-foreground text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Receba Insights Exclusivos
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e receba conteúdos exclusivos, 
            dicas práticas e as últimas tendências do marketing digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button 
              variant="secondary"
              onClick={scrollToContato}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3"
            >
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-xs text-primary-foreground/70 mt-4">
            Prometemos não enviar spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;