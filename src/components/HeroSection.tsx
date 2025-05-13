
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type HeroLanguage = 'en' | 'fr';

type HeroProps = {
  lang?: HeroLanguage;
};

const translations = {
  en: {
    tagline: "Crafting Unforgettable Moments",
    description: "Luxury event planning for prestigious brands, government institutions, and VIP occasions",
    cta: "Get a Quote"
  },
  fr: {
    tagline: "Créer des Moments Inoubliables",
    description: "Organisation d'événements de luxe pour des marques prestigieuses, des institutions gouvernementales et des occasions VIP",
    cta: "Demander un Devis"
  }
};

export default function HeroSection({ lang = 'en' }: HeroProps) {
  const t = translations[lang];
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2187&auto=format&fit=crop" 
          alt="Luxury Event" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight ${loaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span>{t.tagline}</span>
          </h1>
          <p 
            className={`text-lg md:text-xl mb-8 text-gray-200 ${loaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            {t.description}
          </p>
          <div 
            className={`${loaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg">
                {t.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
