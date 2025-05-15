import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const translations = {
  en: {
    title: "Event Gallery",
    subtitle: "Browse through our collection of prestigious events we've organized for our distinguished clients. Each event represents our commitment to excellence and attention to detail.",
    all: "All",
    corporate: "Corporate",
    government: "Government",
    wedding: "Weddings",
    launch: "Launches",
    celebrity: "Celebrity",
    media: "Media",
    portfolio: "Our Portfolio"
  },
  fr: {
    title: "Galerie d'Événements",
    subtitle: "Parcourez notre collection d'événements prestigieux que nous avons organisés pour nos clients distingués. Chaque événement représente notre engagement envers l'excellence et l'attention aux détails.",
    all: "Tous",
    corporate: "Entreprise",
    government: "Gouvernement",
    wedding: "Mariages",
    launch: "Lancements",
    celebrity: "Célébrité",
    media: "Médias",
    portfolio: "Notre Portfolio"
  }
};

const galleryItems: GalleryItem[] = [
  // Corporate Events
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Annual Corporate Gala",
    category: "corporate"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Executive Conference",
    category: "corporate"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    alt: "Tech Industry Summit",
    category: "corporate"
  },
  
  // Government Events
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z292ZXJubWVudCUyMGNlcmVtb255fGVufDB8fDB8fHww",
    alt: "Diplomatic Ceremony",
    category: "government"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "International Summit",
    category: "government"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582835233558-06c69a62c3e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Government Award Ceremony",
    category: "government"
  },
  
  // Weddings
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Luxury Beach Wedding",
    category: "wedding"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Elegant Garden Ceremony",
    category: "wedding"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Historic Castle Wedding",
    category: "wedding"
  },
  
  // Product Launches
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1643778594627-bea0ccc29b86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Fashion Brand Launch",
    category: "launch"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    alt: "Tech Product Reveal",
    category: "launch"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvd3Jvb218ZW58MHx8MHx8fDA%3D",
    alt: "Luxury Store Opening",
    category: "launch"
  },
  
  // Celebrity Events
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    alt: "Celebrity Charity Gala",
    category: "celebrity"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlZCUyMGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Red Carpet Event",
    category: "celebrity"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D",
    alt: "VIP Private Party",
    category: "celebrity"
  },
  
  // Media Events
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZXNzJTIwY29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Press Conference",
    category: "media"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBzaG9vdHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Brand Photoshoot",
    category: "media"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNzJTIwY29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Media Coverage Event",
    category: "media"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const t = translations.fr;
  
  const filteredGallery = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="relative py-24 bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D" 
              alt={t.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">{t.title}</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 font-playfair">{t.portfolio}</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-700">
                {t.subtitle}
              </p>
              
              {/* Category Tabs */}
              <Tabs defaultValue="all" className="mt-10">
                <TabsList className="grid grid-cols-3 md:grid-cols-7 bg-gray-100">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setActiveCategory("all")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.all}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="corporate" 
                    onClick={() => setActiveCategory("corporate")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.corporate}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="government" 
                    onClick={() => setActiveCategory("government")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.government}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="wedding" 
                    onClick={() => setActiveCategory("wedding")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.wedding}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="launch" 
                    onClick={() => setActiveCategory("launch")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.launch}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="celebrity" 
                    onClick={() => setActiveCategory("celebrity")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.celebrity}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="media" 
                    onClick={() => setActiveCategory("media")}
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    {t.media}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg h-64">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
};

export default Gallery;
