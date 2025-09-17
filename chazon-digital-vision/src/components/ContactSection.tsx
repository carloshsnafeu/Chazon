import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const message = `Olá! Vim do site da Chazon.

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Empresa:* ${formData.company}
*Serviço de Interesse:* ${formData.service}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      action: () => window.open("https://wa.me/5511999999999", "_blank")
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@chazon.com.br",
      action: () => window.location.href = "mailto:contato@chazon.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      action: null
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 9h às 18h",
      action: null
    }
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para transformar suas ideias em realidade. 
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="professional-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Solicite seu Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sua empresa"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Social Media">Gestão de Social Media</option>
                  <option value="Design">Design Estratégico</option>
                  <option value="Tráfego Pago">Tráfego Pago</option>
                  <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                  <option value="Desenvolvimento Mobile">Desenvolvimento Mobile</option>
                  <option value="Consultoria">Consultoria Estratégica</option>
                  <option value="Pacote Completo">Pacote Completo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button type="submit" className="btn-hero w-full text-lg py-3">
                <Send className="mr-2 h-5 w-5" />
                Enviar via WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="professional-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Outras Formas de Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.title}
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors ${
                      contact.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={contact.action || undefined}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.title}</h4>
                      <p className="text-muted-foreground">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="professional-card bg-gradient-primary text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">
                Resposta Rápida Garantida!
              </h4>
              <p className="text-primary-foreground/90 mb-4">
                Respondemos todos os contatos em até 2 horas durante o horário comercial. 
                Para urgências, use nosso WhatsApp.
              </p>
              <Button 
                variant="secondary"
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Direto
              </Button>
            </div>

            {/* FAQ Quick */}
            <div className="professional-card">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-foreground text-sm">Qual o prazo médio de entrega?</h5>
                  <p className="text-xs text-muted-foreground">Varia de 15 a 60 dias, dependendo da complexidade do projeto.</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm">Fazem contratos mensais?</h5>
                  <p className="text-xs text-muted-foreground">Sim! Oferecemos planos mensais para gestão e manutenção.</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm">Atendem todo o Brasil?</h5>
                  <p className="text-xs text-muted-foreground">Sim, trabalhamos 100% remoto e atendemos todo território nacional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;