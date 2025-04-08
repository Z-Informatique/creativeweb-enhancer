
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Lock, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const WebApplications = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  
  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Applications Web <span className="text-orange-500">Performantes</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Nous développons des applications web robustes, évolutives et adaptées à vos besoins spécifiques.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={handleOpenQuoteForm}
                  >
                    Demander un devis
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    <Link to="/portfolio">Voir nos réalisations</Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos solutions d'applications web</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des applications web personnalisées qui améliorent l'efficacité de votre entreprise et servent vos objectifs.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll animation="animate-fade-in" delay="delay-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Database className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Systèmes de gestion</h3>
                  <p className="text-gray-600 mb-5">
                    Des applications de gestion sur mesure pour automatiser vos processus métier.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Gestion de projets
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      CRM personnalisés
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      ERP sur mesure
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Cloud className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Applications SaaS</h3>
                  <p className="text-gray-600 mb-5">
                    Développement de plateformes SaaS évolutives pour servir vos clients.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Architecture multi-tenant
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Modèles d'abonnement
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Évolutivité cloud
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Applications progressives (PWA)</h3>
                  <p className="text-gray-600 mb-5">
                    Des applications qui fonctionnent sur tous les appareils, même hors ligne.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Expérience mobile optimisée
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Fonctionnalités hors ligne
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Installation sans app store
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-400">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Lock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Intégrations & API</h3>
                  <p className="text-gray-600 mb-5">
                    Connexion de vos systèmes et applications pour un écosystème numérique cohérent.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Développement d'API RESTful
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Intégration de services tiers
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Synchronisation de données
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies modernes</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous utilisons les dernières technologies pour créer des applications performantes et évolutives.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
                { name: "Node.js", logo: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" },
                { name: "MongoDB", logo: "https://www.mongodb.com/assets/images/global/leaf.svg" },
                { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
                { name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.svg" },
                { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" },
                { name: "PostgreSQL", logo: "https://www.postgresql.org/media/img/about/press/elephant.png" },
                { name: "Docker", logo: "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" }
              ].map((tech, index) => (
                <AnimateOnScroll key={index} animation="animate-fade-in" delay={`delay-${index * 50}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                    <img src={tech.logo} alt={tech.name} className="h-12 mb-4 object-contain" />
                    <h3 className="font-medium text-gray-700">{tech.name}</h3>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre projet d'application web ?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={handleOpenQuoteForm}
                >
                  Contactez notre équipe
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Formulaire de devis */}
      <QuoteForm 
        open={quoteFormOpen} 
        onOpenChange={setQuoteFormOpen} 
        defaultService="Applications Web" 
      />
    </div>
  );
};

export default WebApplications;
