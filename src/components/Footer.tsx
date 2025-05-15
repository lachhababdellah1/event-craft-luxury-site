
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

type FooterLanguage = 'en' | 'fr';

type FooterProps = {
  lang?: FooterLanguage;
};

const translations = {
  en: {
    description: "Creating unforgettable, luxury experiences for prestigious clients and brands.",
    quickLinks: "Quick Links",
    links: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      gallery: "Gallery",
      contact: "Contact Us"
    },
    services: "Services",
    serviceTypes: {
      corporate: "Corporate Events",
      government: "Government Ceremonies",
      wedding: "Luxury Weddings",
      product: "Product Launches",
      celebrity: "Celebrity Appearances"
    },
    contactUs: "Contact Us",
    rights: "All rights reserved."
  },
  fr: {
    description: "Création d'expériences de luxe inoubliables pour des clients et des marques prestigieux.",
    quickLinks: "Liens Rapides",
    links: {
      home: "Accueil",
      about: "À Propos",
      services: "Nos Services",
      gallery: "Galerie",
      contact: "Contact"
    },
    services: "Services",
    serviceTypes: {
      corporate: "Événements d'Entreprise",
      government: "Cérémonies Gouvernementales",
      wedding: "Mariages de Luxe",
      product: "Lancements de Produits",
      celebrity: "Apparitions de Célébrités"
    },
    contactUs: "Contactez-nous",
    rights: "Tous droits réservés."
  }
};

export default function Footer({ lang = 'fr' }: FooterProps) {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">
              <span>Snap</span>
              <span className="text-gold">Event</span>
            </h3>
            <p className="text-gray-300 mb-4">
              {t.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">{t.links.home}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">{t.links.about}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.links.services}</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">{t.links.gallery}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">{t.links.contact}</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">{t.services}</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.serviceTypes.corporate}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.serviceTypes.government}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.serviceTypes.wedding}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.serviceTypes.product}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">{t.serviceTypes.celebrity}</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">{t.contactUs}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold shrink-0" />
                <p className="text-gray-300">X4G6+R2J, Av. Al Menzeh, Rabat</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gold shrink-0" />
                <p className="text-gray-300">+212669-211924</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold shrink-0" />
                <p className="text-gray-300">abdou.lachhab@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SnapEvent. {t.rights}</p>
        </div>
      </div>
    </footer>;
}
