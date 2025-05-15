
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  emoji: string;
};

const services: Service[] = [
  {
    id: "corporate",
    title: "Événements d'Entreprise",
    description: "Créez des événements d'entreprise mémorables qui renforcent votre marque, engagent votre public et atteignent vos objectifs commerciaux. Des retraites pour cadres aux lancements de produits, nous apportons sophistication et réflexion stratégique à chaque occasion d'entreprise.",
    features: [
      "Conférences et Conventions",
      "Retraites pour Dirigeants",
      "Cérémonies de Remise de Prix",
      "Soirées de Fin d'Année",
      "Événements de Team Building",
      "Réunions Annuelles"
    ],
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    emoji: "🏢"
  },
  {
    id: "government",
    title: "Cérémonies Gouvernementales",
    description: "Exécutez des événements gouvernementaux formels avec précision, respect du protocole et grandeur appropriée. Notre équipe comprend les exigences uniques des cérémonies officielles et garantit des occasions dignes et irréprochables.",
    features: [
      "Réceptions Diplomatiques",
      "Inaugurations Officielles",
      "Visites d'État",
      "Célébrations de la Fête Nationale",
      "Remises de Décorations",
      "Délégations Internationales"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D",
    emoji: "🏛️"
  },
  {
    id: "weddings",
    title: "Mariages de Luxe",
    description: "Transformez votre jour spécial en une célébration extraordinaire de l'amour avec nos services de planification de mariage de luxe. Nous créons des expériences de mariage sur mesure qui reflètent votre histoire unique et dépassent vos attentes.",
    features: [
      "Mariages de Destination",
      "Mariages de Célébrités",
      "Cérémonies Culturelles",
      "Conception de Réception de Luxe",
      "Gestion des Invités VIP",
      "Sélection de Lieux Exclusifs"
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    emoji: "💍"
  },
  {
    id: "launches",
    title: "Lancements de Produits & Magasins",
    description: "Créez du buzz et de l'impact avec des lancements stratégiques de produits et des ouvertures de magasins qui captent l'attention et suscitent l'engagement. Nous élaborons des expériences qui mettent en valeur votre marque et créent des impressions durables.",
    features: [
      "Événements d'Activation de Marque",
      "Événements d'Avant-Première pour les Médias",
      "Expériences de Shopping VIP",
      "Installations Éphémères",
      "Ouvertures de Magasins Phares",
      "Défilés de Mode"
    ],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    emoji: "🚀"
  },
  {
    id: "celebrity",
    title: "Apparitions de Célébrités",
    description: "Gérez les engagements des célébrités avec discrétion, professionnalisme et attention aux détails. De la logistique et la sécurité à la gestion des médias, nous assurons des expériences fluides pour les personnes de haut profil.",
    features: [
      "Coordination des Invités Célébrités",
      "Planification de la Sécurité",
      "Transport Privé",
      "Gestion des Médias",
      "Hospitalité VIP",
      "Protocoles de Confidentialité"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    emoji: "⭐"
  },
  {
    id: "media",
    title: "Couverture Médiatique & RP",
    description: "Amplifiez l'impact de votre événement avec des relations médiatiques stratégiques et une couverture RP. Nous créons des histoires captivantes et assurons une exposition médiatique significative qui valorise votre marque et étend votre portée.",
    features: [
      "Organisation de Conférences de Presse",
      "Gestion des Relations Médias",
      "Partenariats avec des Influenceurs",
      "Création de Contenu",
      "Campagnes sur les Réseaux Sociaux",
      "Couverture RP Post-Événement"
    ],
    image: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZXNzJTIwY29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    emoji: "📸"
  }
];

const Services = () => {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="relative py-24 bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Nos Services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Nos Services</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Solutions Événementielles Complètes</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-700">
                Chez SnapEvent, nous offrons une gamme complète de services de planification d'événements de luxe adaptés aux besoins uniques de nos clients distingués. Du concept initial à l'exécution impeccable, notre équipe apporte créativité, précision et sophistication à chaque événement que nous créons.
              </p>
            </div>
          </div>
        </section>
        
        {/* Individual Services */}
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col lg:grid-cols-2' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h2 className="text-3xl font-bold mb-6 font-playfair">{service.title}</h2>
                  <div className="w-24 h-1 bg-gold mb-8"></div>
                  <p className="text-gray-700 mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gold mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-gold hover:bg-gold-dark text-white">
                      Demander des Informations
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Prêt à Créer un Événement Inoubliable?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              Contactez-nous dès aujourd'hui pour discuter de votre vision, et laissez notre équipe d'experts la concrétiser avec élégance et précision.
            </p>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-6">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
};

export default Services;
