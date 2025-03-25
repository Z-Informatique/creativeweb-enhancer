
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, CreditCard, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
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
                  Solutions <span className="text-orange-500">E-commerce</span> Complètes
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Transformez votre activité avec une boutique en ligne performante, sécurisée et adaptée à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Link to="/#contact">Demander un devis</Link>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos solutions e-commerce</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des boutiques en ligne sur mesure qui stimulent vos ventes et améliorent l'expérience client.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="animate-fade-in" delay="delay-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <ShoppingBag className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Boutiques personnalisées</h3>
                  <p className="text-gray-600 mb-5">
                    Des sites e-commerce sur mesure adaptés à votre marque et à vos produits.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Design unique
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Expérience d'achat fluide
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Fonctionnalités avancées
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <CreditCard className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Passerelles de paiement</h3>
                  <p className="text-gray-600 mb-5">
                    Intégration des solutions de paiement sécurisées adaptées à votre marché.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Multiples options de paiement
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Transactions sécurisées
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Paiements internationaux
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <BarChart className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Gestion et analytics</h3>
                  <p className="text-gray-600 mb-5">
                    Des outils puissants pour gérer votre inventaire et analyser vos performances.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Gestion des stocks
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Suivi des commandes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Rapports détaillés
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Les avantages de nos solutions e-commerce</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des boutiques en ligne qui transforment les visiteurs en clients fidèles.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10 text-orange-600" />,
                  title: "Sécurité avancée",
                  description: "Protection des données et transactions sécurisées pour vos clients."
                },
                {
                  icon: <Truck className="h-10 w-10 text-orange-600" />,
                  title: "Logistique intégrée",
                  description: "Solutions de livraison et suivi des commandes pour une gestion efficace."
                },
                {
                  icon: <ShoppingBag className="h-10 w-10 text-orange-600" />,
                  title: "Expérience d'achat optimisée",
                  description: "Parcours d'achat fluide pour maximiser les conversions."
                },
                {
                  icon: <BarChart className="h-10 w-10 text-orange-600" />,
                  title: "Analyses et optimisations",
                  description: "Outils d'analyse pour comprendre et améliorer vos performances."
                }
              ].map((item, index) => (
                <AnimateOnScroll key={index} animation="animate-fade-in" delay={`delay-${index * 100}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                    <div className="bg-orange-50 p-4 inline-flex rounded-xl mb-5">
                      {item.icon}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à lancer votre boutique en ligne ?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Link to="/#contact">Contactez notre équipe</Link>
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;
