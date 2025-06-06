
import { AnimateOnScroll } from "@/utils/animations";

const clients = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  },
  {
    name: "InnovateHub",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  },
  {
    name: "DataSystems",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  },
  {
    name: "CloudTech",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  },
  {
    name: "DigitalFlow",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  },
  {
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=120&h=60&fit=crop"
  }
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Ils nous font confiance
            </h2>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="animate-fade-in" delay="delay-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 group transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-semibold text-sm group-hover:text-orange-500 transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="animate-fade-in" delay="delay-400">
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Plus de <span className="font-semibold text-orange-500">50+ entreprises</span> nous font confiance
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClientLogos;
