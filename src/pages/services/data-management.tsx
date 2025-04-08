
import { ArrowLeft, Database, BarChart, Lock, Search, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const DataManagement = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  
  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true);
  };
  
  const features = [
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: "Intégration de données",
      description: "Centralisation et intégration de données provenant de sources diverses pour une vue unifiée de votre activité."
    },
    {
      icon: <Search className="w-6 h-6 text-orange-500" />,
      title: "Analyse prédictive",
      description: "Utilisation d'algorithmes avancés pour analyser les tendances et prévoir les comportements futurs."
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      title: "Visualisation de données",
      description: "Création de tableaux de bord interactifs et de graphiques pour faciliter la compréhension et l'interprétation des données."
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "Sécurité des données",
      description: "Mise en place de protocoles de sécurité robustes pour protéger vos données sensibles contre les menaces."
    },
    {
      icon: <Server className="w-6 h-6 text-orange-500" />,
      title: "Infrastructure évolutive",
      description: "Conception d'architectures de données évolutives pour accompagner la croissance de votre entreprise."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Automatisation des processus",
      description: "Automatisation des flux de travail liés aux données pour gagner en efficacité et réduire les erreurs."
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestion et Analyse de Données</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transformez vos données en insights stratégiques pour prendre des décisions éclairées et obtenir un avantage concurrentiel.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Gestion et analyse de données" 
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
                  Nos services de données
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Des solutions <span className="text-orange-500">intelligentes</span> pour exploiter vos données
                </h3>
                <p className="text-lg text-gray-600">
                  Nous vous aidons à tirer le meilleur parti de vos données pour alimenter votre croissance et optimiser vos performances.
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
        
        {/* Case Studies */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="inline-block px-4 py-1.5 mb-4 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
                  Études de cas
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Comment nos solutions <span className="text-orange-500">transforment</span> les entreprises
                </h3>
                <p className="text-lg text-gray-600">
                  Découvrez comment nous avons aidé nos clients à exploiter la puissance de leurs données pour atteindre leurs objectifs.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Optimisation des opérations pour une entreprise logistique",
                  description: "Nous avons aidé une entreprise à réduire ses coûts opérationnels de 25% grâce à l'analyse de données et l'optimisation des itinéraires.",
                  image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                  title: "Prévision des ventes pour un détaillant multinational",
                  description: "Notre système de prévision a permis à un détaillant d'améliorer la précision de ses prévisions de 40%, réduisant ainsi les stocks excédentaires.",
                  image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              ].map((case_study, index) => (
                <AnimateOnScroll 
                  key={index}
                  animation="animate-fade-in" 
                  delay={`delay-${index * 200}`}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={case_study.image} 
                      alt={case_study.title} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-8">
                      <h4 className="text-xl font-semibold mb-4">{case_study.title}</h4>
                      <p className="text-gray-600 mb-4">{case_study.description}</p>
                      <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
                        Lire l'étude complète
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à exploiter la puissance de vos données ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en gestion et analyse de données.
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
        defaultService="Gestion de données" 
      />
    </div>
  );
};

export default DataManagement;
