
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">1. Informations légales</h2>
                  <p>
                    Le site Creative More Africa est édité par la société Creative More Africa, entreprise spécialisée dans le développement web et les services digitaux.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Siège social : Pointe-Noire, République du Congo</li>
                    <li>Email : contact@creative-more-africa.com</li>
                    <li>Téléphone : +242 04 457 22 05</li>
                    <li>Directeur de la publication : Le Directeur Général de Creative More Africa</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">2. Hébergement</h2>
                  <p>
                    Le site Creative More Africa est hébergé par [Nom de l'hébergeur], dont le siège social est situé à [Adresse de l'hébergeur].
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">3. Propriété intellectuelle</h2>
                  <p>
                    L'ensemble des éléments constituant le site Creative More Africa (textes, graphismes, logiciels, images, photographies, sons, plans, logos, marques, etc.) sont la propriété exclusive de Creative More Africa ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Creative More Africa.
                  </p>
                  <p className="mt-4">
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions du code de la propriété intellectuelle.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">4. Liens hypertextes</h2>
                  <p>
                    Le site Creative More Africa peut contenir des liens hypertextes vers d'autres sites internet ou d'autres ressources disponibles sur Internet. Creative More Africa ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet. Creative More Africa ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
                  </p>
                  <p className="mt-4">
                    Les utilisateurs, les abonnés et les visiteurs du site internet Creative More Africa ne peuvent pas mettre en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable de Creative More Africa.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">5. Limitation de responsabilité</h2>
                  <p>
                    Creative More Africa ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site Creative More Africa, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                  <p className="mt-4">
                    Creative More Africa ne pourra également être tenue responsable des dommages indirects consécutifs à l'utilisation du site Creative More Africa.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">6. Droit applicable et juridiction compétente</h2>
                  <p>
                    Les présentes mentions légales sont régies par le droit congolais. En cas de litige, les tribunaux congolais seront seuls compétents.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">7. Contact</h2>
                  <p>
                    Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse : contact@creative-more-africa.com ou par téléphone au +242 04 457 22 05.
                  </p>
                </section>
              </div>
              
              <div className="mt-12">
                <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  ← Retour à l'accueil
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
