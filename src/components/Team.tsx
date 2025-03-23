
import { AnimateOnScroll } from "@/utils/animations";

const teamMembers = [
  {
    name: "Alex Moukouri",
    role: "Fondateur & CEO",
    bio: "Expert en stratégie digitale avec plus de 15 ans d'expérience dans le développement de solutions technologiques innovantes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    name: "Marie Koulé",
    role: "Directrice UI/UX",
    bio: "Designer primée spécialisée dans la création d'interfaces utilisateur intuitives et esthétiques qui transforment l'expérience utilisateur.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    name: "Samuel Ndong",
    role: "Lead Developer",
    bio: "Développeur full-stack passionné par les technologies open-source et l'architecture de solutions évolutives pour les entreprises.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    name: "Fatou Diallo",
    role: "Responsable Formation",
    bio: "Experte en pédagogie numérique avec une approche innovante pour développer les compétences digitales adaptées au marché africain.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="animate-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="inline-block px-4 py-1.5 mb-4 bg-creative-100 rounded-full text-sm font-medium text-creative-800">
              Notre équipe
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Des talents <span className="text-creative-500">passionnés</span>
            </h3>
            <p className="text-lg text-gray-600">
              Découvrez les experts qui composent notre équipe multidisciplinaire et qui s'engagent chaque jour pour vous offrir des solutions digitales d'excellence.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-fade-in"
              delay={`delay-${index * 100}`}
              className="h-full"
            >
              <div className="h-full glass group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-creative-600">{member.role}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="animate-fade-in" className="mt-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe s'agrandit ! Passionné(e) par le numérique et l'innovation ? 
              <a href="#contact" className="text-creative-600 hover:text-creative-700 font-medium ml-1">
                Rejoignez-nous
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Team;
