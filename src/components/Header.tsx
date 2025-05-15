
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

type LanguageType = 'en' | 'fr';

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    quote: 'Get a Quote'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    gallery: 'Galerie',
    contact: 'Contact',
    quote: 'Demander un Devis'
  }
};

export default function Header() {
  const [lang, setLang] = useState<LanguageType>('fr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[lang];
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair tracking-tight">
            <span className="text-black">Snap</span>
            <span className="text-gold">Event</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium underline-animation">{t.home}</Link>
          <Link to="/about" className="font-medium underline-animation">{t.about}</Link>
          <Link to="/services" className="font-medium underline-animation">{t.services}</Link>
          <Link to="/gallery" className="font-medium underline-animation">{t.gallery}</Link>
          <Link to="/contact" className="font-medium underline-animation">{t.contact}</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="rounded-full px-4 border-gold text-gold hover:bg-gold hover:text-white"
            onClick={toggleLanguage}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </Button>
          <Button className="bg-gold hover:bg-gold-dark text-white">
            {t.quote}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b animate-fade-in">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-4">
            <Link to="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>{t.home}</Link>
            <Link to="/about" className="py-2" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
            <Link to="/services" className="py-2" onClick={() => setMobileMenuOpen(false)}>{t.services}</Link>
            <Link to="/gallery" className="py-2" onClick={() => setMobileMenuOpen(false)}>{t.gallery}</Link>
            <Link to="/contact" className="py-2" onClick={() => setMobileMenuOpen(false)}>{t.contact}</Link>
            
            <div className="flex items-center gap-4 pt-2">
              <Button 
                variant="outline" 
                className="rounded-full px-4 border-gold text-gold hover:bg-gold hover:text-white"
                onClick={toggleLanguage}
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </Button>
              <Button className="bg-gold hover:bg-gold-dark text-white">
                {t.quote}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
