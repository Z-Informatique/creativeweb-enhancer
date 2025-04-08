
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const WebDevelopment = () => {
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
                  Développement Web <span className="text-orange-500">Professionnel</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Nous créons des sites web et des applications performants, esthétiques et adaptés à vos besoins spécifiques.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos expertises en développement web</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous maîtrisons les technologies les plus récentes pour créer des expériences web exceptionnelles.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="animate-fade-in" delay="delay-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sites Vitrine</h3>
                  <p className="text-gray-600 mb-5">
                    Des sites élégants et responsifs qui présentent efficacement votre entreprise, vos produits et vos services.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Design sur mesure
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Optimisé pour le SEO
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Compatible mobile
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Code className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Applications Web</h3>
                  <p className="text-gray-600 mb-5">
                    Des applications web interactives et dynamiques qui offrent une expérience utilisateur optimale.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Interfaces réactives
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Architectures modernes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Sécurité renforcée
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Server className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Solutions E-commerce</h3>
                  <p className="text-gray-600 mb-5">
                    Des boutiques en ligne performantes et sécurisées pour vendre vos produits et services.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Gestion des stocks
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Paiement sécurisé
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Analytics de vente
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre méthode de travail</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Un processus clair et transparent pour concrétiser votre projet web.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analyse",
                  description: "Nous étudions vos besoins et objectifs pour définir la meilleure stratégie."
                },
                {
                  step: "02",
                  title: "Conception",
                  description: "Nous créons des maquettes et prototypes pour visualiser le résultat final."
                },
                {
                  step: "03",
                  title: "Développement",
                  description: "Nous développons votre projet avec les technologies les plus adaptées."
                },
                {
                  step: "04",
                  title: "Livraison",
                  description: "Nous déployons, testons et optimisons votre site ou application."
                }
              ].map((item, index) => (
                <AnimateOnScroll key={index} animation="animate-fade-in" delay={`delay-${index * 100}`}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-5">
                      <span className="text-xl font-bold text-orange-600">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à lancer votre projet web ?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                  Contactez-nous dès aujourd'hui pour discuter de votre vision et obtenir un devis personnalisé.
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
        defaultService="Développement Web" 
      />
    </div>
  );
};

export default WebDevelopment;
