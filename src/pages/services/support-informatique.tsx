
import { ArrowLeft, Headphones, Clock, Users, Phone, MessageCircle, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const SupportInformatique = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  
  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true);
  };
  
  const features = [
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Support téléphonique",
      description: "Assistance immédiate par téléphone pour résoudre rapidement vos problèmes informatiques urgents."
    },
    {
      icon: <Laptop className="w-6 h-6 text-orange-500" />,
      title: "Télémaintenance",
      description: "Prise de contrôle à distance sécurisée pour diagnostiquer et résoudre les problèmes directement."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Support 24/7",
      description: "Disponibilité continue pour les interventions critiques et la résolution des urgences informatiques."
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Formation utilisateurs",
      description: "Formation et accompagnement de vos équipes pour une utilisation optimale de vos outils informatiques."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-500" />,
      title: "Support par chat",
      description: "Assistance en temps réel via notre plateforme de chat pour des réponses immédiates."
    },
    {
      icon: <Headphones className="w-6 h-6 text-orange-500" />,
      title: "Helpdesk dédié",
      description: "Service d'assistance technique centralisé avec suivi personnalisé de vos demandes."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-orange-500 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Informatique</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Bénéficiez d'une assistance technique professionnelle et réactive pour maintenir votre productivité au plus haut niveau.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={handleOpenQuoteForm}
                  >
                    Demander un devis
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Découvrir nos solutions
                  </Button>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Support informatique et assistance technique" 
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="inline-block px-4 py-1.5 mb-4 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
                  Nos services de support
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Une assistance <span className="text-orange-500">professionnelle</span> à votre écoute
                </h3>
                <p className="text-lg text-gray-600">
                  Notre équipe d'experts vous accompagne quotidiennement pour résoudre vos problèmes informatiques et optimiser vos performances.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimateOnScroll 
                  key={index}
                  animation="animate-fade-in" 
                  delay={`delay-${index * 100}`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-orange-50 p-3 rounded-full w-fit mb-6">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* Support Levels */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="inline-block px-4 py-1.5 mb-4 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
                  Niveaux de support
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Des solutions <span className="text-orange-500">adaptées</span> à vos besoins
                </h3>
                <p className="text-lg text-gray-600">
                  Choisissez le niveau de support qui correspond le mieux à votre entreprise et à vos exigences.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Support Essentiel",
                  description: "Assistance de base pour les problèmes courants",
                  features: ["Support par email", "Temps de réponse 24h", "Documentation en ligne", "FAQ complète"],
                  price: "À partir de 50 000 FCFA/mois"
                },
                {
                  title: "Support Professionnel",
                  description: "Assistance complète pour les entreprises",
                  features: ["Support téléphonique", "Temps de réponse 4h", "Télémaintenance", "Formation utilisateurs"],
                  price: "À partir de 150 000 FCFA/mois",
                  popular: true
                },
                {
                  title: "Support Premium",
                  description: "Assistance prioritaire 24/7",
                  features: ["Support 24/7", "Temps de réponse 1h", "Technicien dédié", "SLA garanti"],
                  price: "À partir de 300 000 FCFA/mois"
                }
              ].map((plan, index) => (
                <AnimateOnScroll 
                  key={index}
                  animation="animate-fade-in" 
                  delay={`delay-${index * 100}`}
                >
                  <div className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                    {plan.popular && (
                      <div className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                        Le plus populaire
                      </div>
                    )}
                    <h4 className="text-xl font-semibold mb-3">{plan.title}</h4>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-2xl font-bold text-orange-500 mb-6">{plan.price}</div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={handleOpenQuoteForm}
                    >
                      Choisir ce plan
                    </Button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll animation="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un support informatique fiable ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour découvrir comment notre équipe peut vous accompagner au quotidien.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={handleOpenQuoteForm}
              >
                Demander un devis
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Formulaire de devis */}
      <QuoteForm 
        open={quoteFormOpen} 
        onOpenChange={setQuoteFormOpen} 
        defaultService="Support informatique" 
      />
    </div>
  );
};

export default SupportInformatique;
