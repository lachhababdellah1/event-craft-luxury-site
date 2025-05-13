
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1627244714766-94a90d517967?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGV2ZW50fGVufDB8fDB8fHww",
    alt: "Corporate Gala",
    category: "Corporate"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z292ZXJubWVudCUyMGNlcmVtb255fGVufDB8fDB8fHww",
    alt: "Government Ceremony",
    category: "Government"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Luxury Wedding",
    category: "Wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    alt: "Product Launch",
    category: "Launch"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    alt: "Celebrity Event",
    category: "Celebrity"
  },
  {
    src: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZXNzJTIwY29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Media Event",
    category: "Media"
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our showcase of prestigious events we've crafted for our distinguished clients around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button className="bg-gold hover:bg-gold-dark text-white px-8">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
