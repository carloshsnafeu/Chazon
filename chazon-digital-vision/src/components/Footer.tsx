import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" }
  ];

  const services = [
    "Gestão de Social Media",
    "Design Estratégico",
    "Tráfego Pago",
    "Desenvolvimento Web",
    "Desenvolvimento Mobile",
    "Consultoria Digital"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">Chazon</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transformamos visões em realidade através de marketing digital e tecnologia inovadora.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contato@chazon.com.br" className="hover:text-accent transition-colors">
                  contato@chazon.com.br
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="https://wa.me/5511999999999" className="hover:text-accent transition-colors">
                  +55 (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#servicos")}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Conecte-se Conosco</h3>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/chazonagencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/chazonagencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/chazonagencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@chazonagencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20">
              <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
              <p className="text-xs text-primary-foreground/80 mb-3">
                Receba dicas e insights exclusivos
              </p>
              <button
                onClick={() => scrollToSection("#blog")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium py-2 px-4 rounded-md transition-colors"
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="md:flex justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-primary-foreground/80">
                © {currentYear} Chazon Agência Digital. Todos os direitos reservados.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                CNPJ: 00.000.000/0001-00 | Desenvolvido com ❤️ pela Chazon
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end gap-6 text-xs text-primary-foreground/80">
              <button 
                onClick={() => scrollToSection("#contato")}
                className="hover:text-accent transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => scrollToSection("#contato")}
                className="hover:text-accent transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 pulse-glow"
        title="Fale conosco no WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;