
import { AnimateOnScroll } from "@/utils/animations";
import { Globe, Layout, Server, Gift, Users, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Développement Web",
    description: "Création de sites web modernes, réactifs et accessibles adaptés à tous les appareils avec une attention particulière à l'expérience utilisateur.",
    icon: <Globe className="h-6 w-6 text-creative-500" />,
    link: "/services/web-development"
  },
  {
    title: "Design UI/UX",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques qui optimisent l'engagement et améliorent la satisfaction des utilisateurs.",
    icon: <Layout className="h-6 w-6 text-creative-500" />,
    link: "/services/ui-ux-design"
  },
  {
    title: "Solutions E-commerce",
    description: "Développement de plateformes e-commerce complètes avec gestion des stocks, paiements sécurisés et expérience d'achat optimisée.",
    icon: <Gift className="h-6 w-6 text-creative-500" />,
    link: "/services/e-commerce"
  },
  {
    title: "Applications Web",
    description: "Création d'applications web performantes et évolutives, intégrant les dernières technologies pour répondre à vos besoins spécifiques.",
    icon: <Server className="h-6 w-6 text-creative-500" />,
    link: "/services/web-applications"
  },
  {
    title: "Applications Mobiles",
    description: "Développement d'applications mobiles natives et cross-platform pour iOS et Android, offrant des expériences utilisateur fluides et performantes.",
    icon: <Smartphone className="h-6 w-6 text-creative-500" />,
    link: "/services/mobile-apps"
  },
  {
    title: "Formations digitales",
    description: "Programmes de formation personnalisés pour développer les compétences numériques de vos équipes et maximiser votre présence en ligne.",
    icon: <Users className="h-6 w-6 text-creative-500" />,
    link: "/services/trainings"
  },
  {
    title: "Gestion de données",
    description: "Solutions de gestion et d'analyse de données pour transformer vos informations en insights stratégiques et avantages concurrentiels.",
    icon: <Database className="h-6 w-6 text-creative-500" />,
    link: "/services/data-management"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="animate-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="inline-block px-4 py-1.5 mb-4 bg-creative-100 rounded-full text-sm font-medium text-creative-800">
              Nos services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Solutions digitales <span className="text-orange-500">sur mesure</span>
            </h3>
            <p className="text-lg text-gray-600">
              Nous offrons une gamme complète de services numériques pour accompagner votre développement et répondre à vos besoins spécifiques avec excellence et créativité.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-fade-in"
              delay={`delay-${(index % 3) * 100}`}
              className="h-full"
            >
              <div className="h-full neu p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-creative-100 p-3 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Link to={service.link} className="mt-6 text-orange-500 hover:text-orange-600 inline-flex items-center font-medium">
                  En savoir plus
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
