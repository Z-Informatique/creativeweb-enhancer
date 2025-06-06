
import { ArrowLeft, Wrench, Shield, Clock, Settings, Server, HardDrive, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const MaintenanceInformatique = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  
  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true);
  };
  
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Maintenance préventive",
      description: "Interventions programmées pour prévenir les pannes et optimiser les performances de votre système informatique."
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      title: "Maintenance curative",
      description: "Diagnostic et réparation rapide des pannes pour minimiser les temps d'arrêt et restaurer la productivité."
    },
    {
      icon: <Server className="w-6 h-6 text-orange-500" />,
      title: "Installation de baies informatiques",
      description: "Conception, installation et configuration professionnelle de baies de brassage et d'infrastructure réseau."
    },
    {
      icon: <HardDrive className="w-6 h-6 text-orange-500" />,
      title: "Mise à jour système",
      description: "Installation des dernières mises à jour de sécurité et optimisation des performances système."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Sécurisation",
      description: "Audit de sécurité, mise en place de pare-feu et protection contre les menaces informatiques."
    },
    {
      icon: <Monitor className="w-6 h-6 text-orange-500" />,
      title: "Surveillance continue",
      description: "Monitoring 24/7 de votre infrastructure pour détecter et prévenir les problèmes potentiels."
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Maintenance Informatique</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Assurez la performance et la fiabilité de votre infrastructure informatique avec nos services de maintenance préventive et curative.
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Maintenance informatique et installation de baies" 
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
                  Nos services de maintenance
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Une infrastructure <span className="text-orange-500">fiable</span> et performante
                </h3>
                <p className="text-lg text-gray-600">
                  Nous maintenons votre système informatique en parfait état de fonctionnement pour garantir la continuité de votre activité.
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
        
        {/* Installation Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="inline-block px-4 py-1.5 mb-4 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
                  Installation spécialisée
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Installation de <span className="text-orange-500">baies informatiques</span>
                </h3>
                <p className="text-lg text-gray-600">
                  Conception et installation professionnelle de votre infrastructure réseau avec des baies de brassage sur mesure.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimateOnScroll animation="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Installation de baies informatiques" 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 text-white p-2 rounded-full shrink-0">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Conception sur mesure</h4>
                      <p className="text-gray-600">Étude de vos besoins et conception d'une solution adaptée à votre infrastructure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 text-white p-2 rounded-full shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Installation professionnelle</h4>
                      <p className="text-gray-600">Montage et câblage des baies selon les normes en vigueur pour une performance optimale.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 text-white p-2 rounded-full shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tests et validation</h4>
                      <p className="text-gray-600">Vérification complète du fonctionnement et formation de vos équipes.</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll animation="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une maintenance informatique fiable ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour un audit gratuit de votre infrastructure et un devis personnalisé.
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
        defaultService="Maintenance informatique" 
      />
    </div>
  );
};

export default MaintenanceInformatique;
