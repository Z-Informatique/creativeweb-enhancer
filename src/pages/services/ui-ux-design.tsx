
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Monitor, PenTool, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import { useState } from "react";

const UiUxDesign = () => {
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
                  Design UI/UX <span className="text-orange-500">Innovant</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Nous créons des interfaces utilisateur esthétiques et intuitives qui transforment l'expérience de vos utilisateurs.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos services de design UI/UX</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des interfaces qui allient esthétique, ergonomie et performances pour une expérience utilisateur optimale.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimateOnScroll animation="animate-fade-in" delay="delay-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <PenTool className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Design d'interface</h3>
                  <p className="text-gray-600 mb-5">
                    Création d'interfaces élégantes et modernes qui reflètent l'identité de votre marque.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Identité visuelle
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Systèmes de design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Iconographie personnalisée
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Layers className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expérience utilisateur</h3>
                  <p className="text-gray-600 mb-5">
                    Conception d'expériences intuitives centrées sur les besoins de vos utilisateurs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Architecture de l'information
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Parcours utilisateur
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Tests d'utilisabilité
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Design Responsive</h3>
                  <p className="text-gray-600 mb-5">
                    Interfaces adaptées à tous les appareils pour une expérience cohérente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Mobile-first design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Adaptabilité multi-écrans
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Performance optimisée
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-400">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Monitor className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Prototypage</h3>
                  <p className="text-gray-600 mb-5">
                    Création de prototypes interactifs pour visualiser et tester votre produit.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Wireframes détaillés
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Prototypes interactifs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Itérations basées sur feedback
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre approche en design</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une méthode centrée sur l'utilisateur pour créer des interfaces qui répondent à vos objectifs.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  title: "Recherche",
                  description: "Comprendre vos utilisateurs, votre marché et vos objectifs."
                },
                {
                  step: "02",
                  title: "Idéation",
                  description: "Exploration de concepts et solutions créatives."
                },
                {
                  step: "03",
                  title: "Design",
                  description: "Création d'interfaces visuellement attrayantes et fonctionnelles."
                },
                {
                  step: "04",
                  title: "Prototypage",
                  description: "Tests et validation des concepts avec des prototypes interactifs."
                },
                {
                  step: "05",
                  title: "Implémentation",
                  description: "Collaboration avec les développeurs pour une intégration parfaite."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre interface utilisateur ?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                  Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons améliorer l'expérience de vos utilisateurs.
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
        defaultService="Design UI/UX" 
      />
    </div>
  );
};

export default UiUxDesign;
