
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/utils/animations";
import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Innovation continue et veille technologique",
    "Approche centrée sur les besoins du client",
    "Équipe multidisciplinaire de talents africains",
    "Qualité et excellence dans chaque projet",
    "Solutions sur mesure et personnalisées",
    "Expertise locale avec vision internationale"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-creative-100 rounded-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-creative-100 rounded-xl"></div>
              
              <div className="relative z-10 neu overflow-hidden rounded-2xl h-[500px] flex items-center justify-center p-8 text-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-creative-800">
                    Notre vision
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Contribuer à l'essor du numérique en Afrique en formant la prochaine génération de talents et en créant des solutions digitales innovantes qui répondent aux défis spécifiques du continent.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Chez Creative More Africa, nous croyons que la technologie doit être au service de l'humain, accessible à tous, et facteur de développement durable.
                  </p>
                  <div className="mt-8">
                    <Button className="bg-creative-500 hover:bg-creative-600 text-white px-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      Notre histoire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="animate-fade-in-right">
            <div>
              <h2 className="inline-block px-4 py-1.5 mb-4 bg-creative-100 rounded-full text-sm font-medium text-creative-800">
                À propos de nous
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Une expertise africaine <span className="text-creative-500">au service de l'innovation</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Fondée en 2017, Creative More Africa est une entreprise spécialisée dans les solutions digitales innovantes et la formation aux métiers du numérique. Notre mission est de contribuer activement à la transformation digitale des organisations en Afrique, en proposant des services de haute qualité et en développant les compétences locales.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-creative-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold text-creative-600 mb-1">300+</div>
                  <p className="text-sm text-gray-600">Projets réalisés</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold text-creative-600 mb-1">150+</div>
                  <p className="text-sm text-gray-600">Clients satisfaits</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold text-creative-600 mb-1">500+</div>
                  <p className="text-sm text-gray-600">Personnes formées</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold text-creative-600 mb-1">10+</div>
                  <p className="text-sm text-gray-600">Pays couverts</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
