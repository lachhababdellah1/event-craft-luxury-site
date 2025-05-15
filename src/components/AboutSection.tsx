import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type AboutLanguage = 'en' | 'fr';

type AboutProps = {
  lang?: AboutLanguage;
};

const translations = {
  en: {
    title: "About SnapEvent",
    description1: "For over a decade, SnapEvent has been at the forefront of luxury event planning, creating unforgettable experiences for prestigious clients worldwide. Our reputation for excellence and attention to detail has made us the preferred choice for government institutions, famous brands, and high-profile individuals.",
    description2: "We combine creativity with precision, transforming your vision into a flawless reality. From concept development to execution, our team of experts handles every aspect of your event with professionalism and discretion.",
    description3: "Our commitment to perfection and our extensive network of premium vendors allow us to deliver extraordinary events that reflect your unique brand and objectives.",
    cta: "Learn More About Us"
  },
  fr: {
    title: "À Propos de SnapEvent",
    description1: "Depuis plus de dix ans, SnapEvent est à l'avant-garde de la planification d'événements de luxe, créant des expériences inoubliables pour des clients prestigieux du monde entier. Notre réputation d'excellence et notre attention aux détails ont fait de nous le choix privilégié des institutions gouvernementales, des marques célèbres et des personnalités de haut rang.",
    description2: "Nous combinons créativité et précision pour transformer votre vision en une réalité impeccable. Du développement du concept à l'exécution, notre équipe d'experts gère chaque aspect de votre événement avec professionnalisme et discrétion.",
    description3: "Notre engagement envers la perfection et notre vaste réseau de fournisseurs premium nous permettent de réaliser des événements extraordinaires qui reflètent votre marque et vos objectifs uniques.",
    cta: "En Savoir Plus Sur Nous"
  }
};

export default function AboutSection({ lang = 'fr' }: AboutProps) {
  const t = translations[lang];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">{t.title}</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-gray-700 mb-6">
              {t.description1}
            </p>
            <p className="text-gray-700 mb-6">
              {t.description2}
            </p>
            <p className="text-gray-700 mb-8">
              {t.description3}
            </p>
            <Link to="/about">
              <Button className="bg-black hover:bg-gray-800 text-white">
                {t.cta}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Corporate Event" 
                className="rounded-lg shadow-lg hover-scale mb-4 h-40 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D" 
                alt="Conference" 
                className="rounded-lg shadow-lg hover-scale h-72 object-cover w-full"
              />
            </div>
            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Luxury Wedding" 
                className="rounded-lg shadow-lg hover-scale h-72 object-cover w-full mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1643778594627-bea0ccc29b86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D" 
                alt="Product Launch" 
                className="rounded-lg shadow-lg hover-scale h-40 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
