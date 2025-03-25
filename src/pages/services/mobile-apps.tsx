
import { ArrowLeft, CheckCircle, Smartphone, Globe, Shield, Zap, Code, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";

const MobileApps = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      title: "Applications Natives",
      description: "Développement d'applications mobiles natives pour iOS et Android offrant des performances optimales et une expérience utilisateur fluide."
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Applications Cross-Platform",
      description: "Solutions cross-platform avec React Native et Flutter pour déployer rapidement sur plusieurs systèmes tout en maintenant une qualité native."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Sécurité Renforcée",
      description: "Implémentation des meilleures pratiques de sécurité pour protéger les données sensibles des utilisateurs et prévenir les vulnérabilités."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Performances Optimisées",
      description: "Optimisation des performances pour garantir des temps de chargement rapides et une utilisation efficace des ressources de l'appareil."
    },
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: "Intégration Backend",
      description: "Intégration transparente avec des API et services backend pour créer des applications connectées avec synchronisation des données."
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      title: "Analytics & Suivi",
      description: "Implémentation d'outils d'analyse pour suivre le comportement des utilisateurs et améliorer continuellement votre application."
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Développement d'Applications Mobiles</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transformez vos idées en applications mobiles performantes qui captiveront vos utilisateurs et propulseront votre entreprise vers de nouveaux sommets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Demander un devis
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Voir nos projets
                  </Button>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Développement d'applications mobiles" 
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
                  Nos services mobiles
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Des applications <span className="text-orange-500">performantes</span> pour tous vos besoins
                </h3>
                <p className="text-lg text-gray-600">
                  Nous développons des applications mobiles innovantes qui répondent aux besoins spécifiques de votre entreprise et de vos utilisateurs.
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
        
        {/* Process */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="inline-block px-4 py-1.5 mb-4 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
                  Notre processus
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  Comment nous créons votre <span className="text-orange-500">application mobile</span>
                </h3>
                <p className="text-lg text-gray-600">
                  Un processus éprouvé qui garantit des résultats exceptionnels et une application qui répond parfaitement à vos besoins.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="max-w-4xl mx-auto">
              {[
                { step: 1, title: "Analyse des besoins", description: "Nous commençons par comprendre vos objectifs commerciaux, votre public cible et vos exigences spécifiques." },
                { step: 2, title: "Conception UX/UI", description: "Nos designers créent des interfaces intuitives et attrayantes qui offrent une expérience utilisateur exceptionnelle." },
                { step: 3, title: "Développement", description: "Nos développeurs transforment les conceptions en code, en utilisant les technologies les plus adaptées à votre projet." },
                { step: 4, title: "Tests", description: "Nous testons rigoureusement l'application sur divers appareils pour garantir sa qualité et sa fiabilité." },
                { step: 5, title: "Déploiement", description: "Nous déployons votre application sur les stores et vous accompagnons dans son lancement." },
                { step: 6, title: "Maintenance", description: "Nous assurons le suivi et la maintenance continue pour garantir le bon fonctionnement de votre application." }
              ].map((item, index) => (
                <AnimateOnScroll 
                  key={index}
                  animation="animate-fade-in" 
                  delay={`delay-${index * 100}`}
                >
                  <div className="flex items-start mb-12 relative">
                    <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    
                    {index < 5 && (
                      <div className="absolute top-10 left-5 w-0.5 h-14 bg-orange-200"></div>
                    )}
                    
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre idée en application ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Demander un devis
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileApps;
