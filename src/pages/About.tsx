
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="relative py-24 bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="À Propos de SnapEvent" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">À Propos de SnapEvent</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-playfair">Notre Histoire</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-gray-700 mb-6">
                  Fondé en 2010, SnapEvent est né d'une passion pour la création d'événements exceptionnels qui racontent des histoires uniques. Ce qui a commencé comme une petite agence boutique s'est transformé en une entreprise leader dans la planification d'événements de luxe, à laquelle font confiance des clients prestigieux du monde entier.
                </p>
                <p className="text-gray-700 mb-6">
                  Notre parcours a été façonné par un engagement envers l'excellence, la créativité et un service personnalisé. Avec chaque événement, nous avons affiné notre approche, élargi notre réseau et approfondi notre expertise dans la création d'expériences inoubliables.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, SnapEvent représente un symbole de sophistication et de fiabilité dans l'industrie événementielle, reconnu pour notre capacité à transformer des concepts en réalité avec précision et style.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Notre Histoire" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Notre Philosophie</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-8 text-lg">
                Chez SnapEvent, nous croyons que chaque événement doit être le reflet de son objectif, de son hôte et de son public. Notre philosophie repose sur trois principes fondamentaux:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">✨</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Excellence</h3>
                  <p className="text-gray-600">Nous recherchons la perfection dans chaque détail, du concept à l'exécution, en veillant à ce que chaque élément réponde aux normes les plus élevées.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">🎭</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Créativité</h3>
                  <p className="text-gray-600">Nous abordons chaque événement avec des perspectives nouvelles, des idées innovantes et des solutions uniques qui captivent et inspirent.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Partenariat</h3>
                  <p className="text-gray-600">Nous collaborons étroitement avec nos clients, en établissant des relations basées sur la confiance, la compréhension et une vision partagée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <TeamSection />
      </main>
      <Footer lang="fr" />
    </>
  );
};

export default About;
