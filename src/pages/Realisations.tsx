
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User, Wrench, Globe, Smartphone, Database } from "lucide-react";
import ClientLogos from "@/components/ClientLogos";

const projects = [
  {
    id: 1,
    title: "Plateforme E-commerce Moderne",
    category: "E-commerce",
    client: "TechShop Africa",
    date: "2024",
    description: "Développement d'une plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et interface responsive.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: <Globe className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 2,
    title: "Application Mobile Banking",
    category: "Mobile",
    client: "FinanceSecure",
    date: "2024",
    description: "Application mobile bancaire sécurisée avec authentification biométrique et gestion des transactions en temps réel.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "API REST"],
    icon: <Smartphone className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 3,
    title: "Système de Gestion Hospitalière",
    category: "Web Application",
    client: "MediCare Center",
    date: "2023",
    description: "Système complet de gestion hospitalière avec module patients, planning médecins et gestion des stocks médicaux.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
    icon: <Database className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 4,
    title: "Infrastructure IT Complète",
    category: "Infrastructure",
    client: "Corporate Solutions",
    date: "2024",
    description: "Installation et configuration d'une infrastructure IT complète avec baies de brassage, serveurs et système de sauvegarde.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    technologies: ["Cisco", "Windows Server", "VMware", "Backup Solutions"],
    icon: <Wrench className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 5,
    title: "Site Vitrine Responsive",
    category: "Web Design",
    client: "Luxury Hotels",
    date: "2023",
    description: "Site vitrine élégant et responsive pour une chaîne d'hôtels de luxe avec système de réservation intégré.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Headless CMS"],
    icon: <Globe className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    category: "Data Visualization",
    client: "Data Insights Co",
    date: "2024",
    description: "Tableau de bord interactif pour l'analyse de données avec graphiques dynamiques et rapports personnalisés.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    icon: <Database className="h-5 w-5" />,
    link: "#"
  }
];

const categories = ["Tous", "E-commerce", "Mobile", "Web Application", "Infrastructure", "Web Design", "Data Visualization"];

const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-creative-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-orange-500">Réalisations</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos projets les plus marquants et les solutions innovantes que nous avons développées pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-creative-100 text-creative-800 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    Voir le projet
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Realisations;
