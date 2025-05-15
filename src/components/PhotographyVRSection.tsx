
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Camera, Video, View } from "lucide-react";

type PhotographyLanguage = 'en' | 'fr';

type PhotographyProps = {
  lang?: PhotographyLanguage;
};

const translations = {
  en: {
    title: "Photography, Videography & 360° VR Experiences",
    description: "At Event Craft, we capture your moments with artistic precision and cinematic quality. Whether it's a luxury wedding, corporate event, or brand launch, our professional team ensures every detail is documented beautifully.",
    services: "Our Services Include:",
    cta: "Book a session or request a custom quote today!",
    tagline: "Let us tell your story through our lens.",
    cards: {
      photography: {
        title: "Professional Photography",
        description: "High-quality event photography that captures the essence and emotion of your special moments."
      },
      video: {
        title: "Cinematic Videography",
        description: "Professional video production that tells your story with cinematic quality and artistic direction."
      },
      vr: {
        title: "360° Virtual Reality",
        description: "Immersive VR experiences that allow guests to explore venues and events in interactive 3D."
      }
    }
  },
  fr: {
    title: "Photographie, Vidéographie & Expériences en RV à 360°",
    description: "Chez Event Craft, nous capturons vos moments avec une précision artistique et une qualité cinématographique. Qu'il s'agisse d'un mariage de luxe, d'un événement d'entreprise ou d'un lancement de marque, notre équipe professionnelle s'assure que chaque détail est magnifiquement documenté.",
    services: "Nos Services Comprennent:",
    cta: "Réservez une séance ou demandez un devis personnalisé dès aujourd'hui!",
    tagline: "Laissez-nous raconter votre histoire à travers notre objectif.",
    cards: {
      photography: {
        title: "Photographie Professionnelle",
        description: "Photographie d'événements de haute qualité qui capture l'essence et l'émotion de vos moments spéciaux."
      },
      video: {
        title: "Vidéographie Cinématographique",
        description: "Production vidéo professionnelle qui raconte votre histoire avec une qualité cinématographique et une direction artistique."
      },
      vr: {
        title: "Réalité Virtuelle à 360°",
        description: "Expériences immersives en RV qui permettent aux invités d'explorer les lieux et les événements en 3D interactif."
      }
    }
  }
};

export default function PhotographyVRSection({ lang = 'fr' }: PhotographyProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">{t.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 mb-8">
            {t.description}
          </p>
          
          <h3 className="font-bold text-xl mb-4">{t.services}</h3>
          <ul className="text-gray-700 mb-8 space-y-2 mx-auto max-w-lg text-left list-disc">
            <li>Photographie d'Événements de Luxe</li>
            <li>Vidéographie d'Événements Cinématographiques</li>
            <li>Couverture des Coulisses</li>
            <li>Séances Photo pour Marques et Produits</li>
            <li>Présentations Immobilières et de Lieux</li>
            <li>Expériences Immersives en Réalité Virtuelle à 360°</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photography Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <Camera size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">{t.cards.photography.title}</h3>
            <p className="text-gray-600 text-center">
              {t.cards.photography.description}
            </p>
            <div className="mt-6">
              <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Event Photography"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* Videography Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <Video size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">{t.cards.video.title}</h3>
            <p className="text-gray-600 text-center">
              {t.cards.video.description}
            </p>
            <div className="mt-6">
              <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                  alt="Event Videography"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* 360° VR Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <View size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">{t.cards.vr.title}</h3>
            <p className="text-gray-600 text-center">
              {t.cards.vr.description}
            </p>
            <div className="mt-6">
              <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582835233558-06c69a62c3e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="360° VR Experience"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-2xl text-gold font-playfair mb-6">✨ {t.tagline}</p>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold-dark text-white">
              📩 {t.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
