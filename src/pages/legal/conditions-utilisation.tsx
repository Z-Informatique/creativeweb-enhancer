
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Link } from "react-router-dom";

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">1. Acceptation des conditions</h2>
                  <p>
                    En accédant et en utilisant le site web de Creative More Africa, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">2. Modifications des conditions</h2>
                  <p>
                    Creative More Africa se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement ces conditions. Votre utilisation continue du site après la publication des modifications constitue votre acceptation de ces modifications.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">3. Utilisation du site</h2>
                  <p>
                    Vous vous engagez à utiliser notre site conformément aux lois et réglementations applicables et d'une manière qui ne porte pas atteinte aux droits d'autrui ou ne restreint ou n'entrave pas l'utilisation et la jouissance du site par toute autre personne.
                  </p>
                  <p className="mt-4">
                    Vous ne devez pas:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Utiliser notre site d'une manière qui pourrait endommager, désactiver, surcharger ou compromettre le site ou interférer avec l'utilisation du site par d'autres parties.</li>
                    <li>Tenter d'accéder sans autorisation à des parties du site, à d'autres comptes ou à d'autres systèmes ou réseaux connectés au site.</li>
                    <li>Recueillir ou collecter des informations sur d'autres utilisateurs sans leur consentement.</li>
                    <li>Publier, télécharger ou distribuer tout contenu qui est illégal, diffamatoire, harcelant, obscène ou qui viole les droits de propriété intellectuelle d'autrui.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">4. Propriété intellectuelle</h2>
                  <p>
                    Tous les contenus, marques, logos, graphiques, photographies, images, textes et autres matériels présents sur ce site sont la propriété de Creative More Africa ou de ses concédants de licence et sont protégés par les lois sur la propriété intellectuelle.
                  </p>
                  <p className="mt-4">
                    Vous ne pouvez pas utiliser, reproduire, adapter, modifier, publier ou distribuer ces matériels sans l'autorisation écrite préalable de Creative More Africa.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">5. Liens vers d'autres sites</h2>
                  <p>
                    Notre site peut contenir des liens vers des sites web tiers. Ces liens sont fournis uniquement pour votre commodité. Creative More Africa n'a aucun contrôle sur le contenu de ces sites et n'assume aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques des sites tiers.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">6. Limitation de responsabilité</h2>
                  <p>
                    Dans toute la mesure permise par la loi, Creative More Africa ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser notre site.
                  </p>
                  <p className="mt-4">
                    Creative More Africa ne garantit pas que le site sera disponible sans interruption, en temps opportun, sécurisé ou sans erreur.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">7. Indemnisation</h2>
                  <p>
                    Vous acceptez d'indemniser et de dégager Creative More Africa, ses dirigeants, administrateurs, employés et agents de toute réclamation, dommage, obligation, perte, responsabilité, coût ou dette, et dépense (y compris, mais sans s'y limiter, les honoraires d'avocat) découlant de: (i) votre utilisation de notre site; (ii) votre violation de l'une de ces conditions; (iii) votre violation de tout droit d'un tiers, y compris, mais sans s'y limiter, tout droit d'auteur, de propriété ou de confidentialité.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">8. Loi applicable et juridiction</h2>
                  <p>
                    Ces conditions sont régies par et interprétées conformément aux lois de la République du Congo. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de la République du Congo.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">9. Contact</h2>
                  <p>
                    Si vous avez des questions concernant ces conditions, veuillez nous contacter à l'adresse suivante:
                  </p>
                  <p className="mt-4">
                    Email: contact@creative-more-africa.com<br />
                    Téléphone: +242 04 457 22 05<br />
                    Adresse: Pointe-Noire, République du Congo
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

export default ConditionsUtilisation;
