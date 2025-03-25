
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Link } from "react-router-dom";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">1. Introduction</h2>
                  <p>
                    Creative More Africa s'engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site.
                  </p>
                  <p className="mt-4">
                    En utilisant notre site, vous consentez aux pratiques décrites dans la présente politique de confidentialité.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">2. Collecte des données personnelles</h2>
                  <p>
                    Nous pouvons collecter les types d'informations suivants:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Informations que vous nous fournissez volontairement (nom, adresse e-mail, numéro de téléphone, etc.) lorsque vous nous contactez via notre formulaire de contact ou que vous vous inscrivez à notre newsletter.</li>
                    <li>Informations sur votre utilisation de notre site web, y compris votre adresse IP, votre navigateur, les pages que vous visitez, le temps que vous passez sur ces pages, et d'autres statistiques.</li>
                    <li>Informations collectées via des cookies et des technologies similaires.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">3. Utilisation des données</h2>
                  <p>
                    Nous utilisons vos données personnelles aux fins suivantes:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Pour vous fournir les services que vous avez demandés.</li>
                    <li>Pour répondre à vos demandes et questions.</li>
                    <li>Pour vous envoyer des informations importantes concernant notre site et nos services.</li>
                    <li>Pour vous envoyer des communications marketing (si vous y avez consenti).</li>
                    <li>Pour améliorer notre site web et nos services.</li>
                    <li>Pour assurer la sécurité de notre site.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">4. Partage des données personnelles</h2>
                  <p>
                    Nous ne vendons, n'échangeons ni ne transférons de quelque autre manière vos informations personnelles à des tiers sans votre consentement, sauf dans les cas suivants:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Avec des prestataires de services qui nous aident à exploiter notre site et à vous fournir nos services.</li>
                    <li>Si la loi l'exige ou dans le cadre d'une procédure judiciaire.</li>
                    <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos utilisateurs ou du public.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">5. Sécurité des données</h2>
                  <p>
                    Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Toutefois, aucun système de sécurité n'est infaillible, et nous ne pouvons garantir la sécurité absolue de vos données.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">6. Conservation des données</h2>
                  <p>
                    Nous conservons vos données personnelles aussi longtemps que nécessaire pour remplir les objectifs pour lesquels elles ont été collectées, à moins que la loi n'exige une période de conservation plus longue.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">7. Vos droits</h2>
                  <p>
                    Vous avez certains droits concernant vos données personnelles, notamment:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>Le droit d'accéder à vos données personnelles.</li>
                    <li>Le droit de rectifier vos données personnelles si elles sont inexactes ou incomplètes.</li>
                    <li>Le droit de demander la suppression de vos données personnelles dans certaines circonstances.</li>
                    <li>Le droit de limiter le traitement de vos données personnelles dans certaines circonstances.</li>
                    <li>Le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances.</li>
                    <li>Le droit à la portabilité des données dans certaines circonstances.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">8. Cookies</h2>
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoyé. Toutefois, certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement sans cookies.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">9. Modifications de notre politique de confidentialité</h2>
                  <p>
                    Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">10. Contact</h2>
                  <p>
                    Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante:
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

export default Confidentialite;
