
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/utils/animations";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Cookies</h1>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">1. Qu'est-ce qu'un cookie ?</h2>
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou téléphone portable lors de votre visite sur notre site. Il nous permet de vous reconnaître lorsque vous revenez sur notre site et de stocker certaines informations sur vos préférences.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">2. Comment utilisons-nous les cookies ?</h2>
                  <p>
                    Notre site utilise des cookies pour diverses raisons:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li><strong>Cookies essentiels:</strong> Ces cookies sont nécessaires au fonctionnement de notre site. Ils vous permettent par exemple de vous connecter à des zones sécurisées de notre site ou d'utiliser un panier d'achat.</li>
                    <li><strong>Cookies analytiques/de performance:</strong> Ces cookies nous permettent de reconnaître et de compter le nombre de visiteurs et de voir comment les visiteurs naviguent sur notre site. Cela nous aide à améliorer le fonctionnement de notre site, par exemple en nous assurant que les utilisateurs trouvent facilement ce qu'ils recherchent.</li>
                    <li><strong>Cookies de fonctionnalité:</strong> Ces cookies sont utilisés pour vous reconnaître lorsque vous revenez sur notre site. Ils nous permettent de personnaliser notre contenu pour vous, de vous saluer par votre nom et de mémoriser vos préférences (par exemple, votre choix de langue ou de région).</li>
                    <li><strong>Cookies de ciblage:</strong> Ces cookies enregistrent votre visite sur notre site, les pages que vous avez visitées et les liens que vous avez suivis. Nous utiliserons ces informations pour rendre notre site et la publicité qui y est affichée plus pertinents pour vos intérêts.</li>
                  </ul>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">3. Types de cookies que nous utilisons</h2>
                  <table className="min-w-full border border-gray-300 mt-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nom du cookie</th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Finalité</th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-b border-gray-300">_ga</td>
                        <td className="px-6 py-4 border-b border-gray-300">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                        <td className="px-6 py-4 border-b border-gray-300">2 ans</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 border-b border-gray-300">_gid</td>
                        <td className="px-6 py-4 border-b border-gray-300">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                        <td className="px-6 py-4 border-b border-gray-300">24 heures</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-gray-300">_gat</td>
                        <td className="px-6 py-4 border-b border-gray-300">Utilisé par Google Analytics pour limiter le taux de demandes</td>
                        <td className="px-6 py-4 border-b border-gray-300">1 minute</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 border-b border-gray-300">cookieconsent_status</td>
                        <td className="px-6 py-4 border-b border-gray-300">Utilisé pour se souvenir de votre préférence concernant les cookies</td>
                        <td className="px-6 py-4 border-b border-gray-300">1 an</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">4. Comment gérer les cookies ?</h2>
                  <p>
                    La plupart des navigateurs web vous permettent de contrôler la plupart des cookies via les paramètres de votre navigateur. Pour en savoir plus sur les cookies, y compris comment voir quels cookies ont été définis et comment les gérer et les supprimer, visitez <a href="https://www.allaboutcookies.org" className="text-orange-600 hover:text-orange-700">www.allaboutcookies.org</a>.
                  </p>
                  <p className="mt-4">
                    Pour désactiver Google Analytics sur votre navigateur, visitez <a href="https://tools.google.com/dlpage/gaoptout" className="text-orange-600 hover:text-orange-700">https://tools.google.com/dlpage/gaoptout</a>.
                  </p>
                  <p className="mt-4">
                    Notez que si vous choisissez de désactiver les cookies, certaines parties de notre site pourraient ne pas fonctionner correctement.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">5. Cookies tiers</h2>
                  <p>
                    Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous n'avons pas le contrôle sur ces cookies. Ces services tiers comprennent, par exemple, les réseaux sociaux, les services d'analyse comme Google Analytics, et les vidéos intégrées via YouTube.
                  </p>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">6. Modifications de notre politique en matière de cookies</h2>
                  <p>
                    Nous pouvons mettre à jour notre politique en matière de cookies de temps à autre. Toute modification sera publiée sur cette page. Cette politique a été mise à jour pour la dernière fois le [date].
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">7. Contact</h2>
                  <p>
                    Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à l'adresse suivante:
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

export default Cookies;
