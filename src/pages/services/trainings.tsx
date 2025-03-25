
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Compass, FileText, UserCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Trainings = () => {
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
                  Formations <span className="text-orange-500">Digitales</span> Innovantes
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Développez les compétences numériques de votre équipe avec nos formations sur mesure adaptées au marché africain.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Link to="/#contact">Demander un devis</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    <Link to="/portfolio">Voir nos programmes</Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos programmes de formation</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des formations adaptées à tous les niveaux et à tous les besoins, animées par des experts du secteur numérique.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimateOnScroll animation="animate-fade-in" delay="delay-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Compass className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transformation Digitale</h3>
                  <p className="text-gray-600 mb-5">
                    Accompagnez votre entreprise dans sa transition numérique avec des formations adaptées.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Stratégie digitale
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Outils collaboratifs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Marketing digital
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <BookOpen className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Développement Web</h3>
                  <p className="text-gray-600 mb-5">
                    Maîtrisez les langages et technologies du développement web moderne.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      HTML, CSS, JavaScript
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Frameworks modernes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Développement back-end
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Marketing Digital</h3>
                  <p className="text-gray-600 mb-5">
                    Développez votre présence en ligne et boostez vos ventes avec le marketing digital.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Réseaux sociaux
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      SEO / SEA
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Content marketing
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-400">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Design UI/UX</h3>
                  <p className="text-gray-600 mb-5">
                    Créez des interfaces utilisateur attrayantes et des expériences utilisateur optimales.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Principes de design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Outils de design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Prototypage
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-fade-in" delay="delay-500">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="bg-orange-100 p-3 inline-flex rounded-xl mb-5">
                    <UserCheck className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Gestion de projet digital</h3>
                  <p className="text-gray-600 mb-5">
                    Gérez efficacement vos projets digitaux avec les méthodologies les plus avancées.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Méthodes agiles
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Outils collaboratifs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      Gestion d'équipe
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre approche pédagogique</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une méthode d'apprentissage pratique et adaptée au contexte africain, conçue pour des résultats concrets.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="h-10 w-10 text-orange-600" />,
                  title: "Formation pratique",
                  description: "Nos formations sont conçues pour être immédiatement applicables dans votre contexte professionnel."
                },
                {
                  icon: <Users className="h-10 w-10 text-orange-600" />,
                  title: "Formateurs experts",
                  description: "Des professionnels expérimentés qui partagent leur expertise du terrain et des meilleures pratiques."
                },
                {
                  icon: <Compass className="h-10 w-10 text-orange-600" />,
                  title: "Suivi personnalisé",
                  description: "Un accompagnement adapté à vos besoins spécifiques pour assurer une mise en application réussie."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à développer vos compétences digitales ?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                  Contactez-nous pour discuter de vos besoins de formation et découvrir nos programmes personnalisés.
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

export default Trainings;
