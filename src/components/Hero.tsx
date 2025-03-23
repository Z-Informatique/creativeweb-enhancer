
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Lightbulb, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-creative-50 to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-grid"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 bg-creative-100 rounded-full animate-fade-in">
              <span className="text-sm font-medium text-creative-800">
                Créations numériques | Innovation | Excellence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-slow">
              <span className="block">Transformez vos idées</span>
              <span className="text-creative-500">en réalités numériques</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Chez Creative More Africa, nous créons des solutions digitales innovantes qui propulsent les entreprises vers leur avenir numérique, en conjuguant créativité et expertise technique.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button className="bg-creative-600 hover:bg-creative-700 text-white px-8 py-6 h-auto shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-creative-300 text-creative-700 hover:text-creative-800 hover:bg-creative-50 px-8 py-6 h-auto transition-all duration-300">
                Contactez-nous
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-creative-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Floating cards */}
            <div className="glass p-6 rounded-2xl absolute left-0 top-0 lg:top-5 w-64 shadow-xl animate-float">
              <div className="flex items-center mb-3">
                <div className="bg-creative-100 p-2 rounded-xl">
                  <Lightbulb className="h-6 w-6 text-creative-600" />
                </div>
                <h3 className="font-semibold ml-3">Solution créative</h3>
              </div>
              <p className="text-sm text-gray-600">Des idées innovantes pour résoudre vos défis digitaux</p>
            </div>
            
            <div className="glass p-6 rounded-2xl absolute right-0 top-1/3 w-64 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center mb-3">
                <div className="bg-creative-100 p-2 rounded-xl">
                  <Code className="h-6 w-6 text-creative-600" />
                </div>
                <h3 className="font-semibold ml-3">Expertise technique</h3>
              </div>
              <p className="text-sm text-gray-600">Un savoir-faire éprouvé en développement</p>
            </div>
            
            <div className="glass p-6 rounded-2xl absolute left-1/4 bottom-0 lg:bottom-10 w-64 shadow-xl animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center mb-3">
                <div className="bg-creative-100 p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-creative-600" />
                </div>
                <h3 className="font-semibold ml-3">Performances</h3>
              </div>
              <p className="text-sm text-gray-600">Rapidité et excellence pour votre transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
