
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Camera, Video, View } from "lucide-react";

export default function PhotographyVRSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Photography, Videography & 360° VR Experiences</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Event Craft, we capture your moments with artistic precision and cinematic quality. 
            Whether it's a luxury wedding, corporate event, or brand launch, our professional team ensures every detail is documented beautifully.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Photography Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <Camera size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">Luxury Event Photography</h3>
            <p className="text-gray-600 text-center">
              Professional photography capturing the essence and elegance of your special events.
            </p>
          </div>
          
          {/* Videography Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <Video size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">Cinematic Event Videography</h3>
            <p className="text-gray-600 text-center">
              Captivating video production telling your event's story with cinematic quality.
            </p>
          </div>
          
          {/* 360° VR Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gold flex justify-center">
              <View size={48} className="stroke-gold" />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3 text-center">360° Virtual Reality</h3>
            <p className="text-gray-600 text-center">
              Immersive experiences that allow your audience to explore venues and events virtually.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 font-playfair">Our Services Include:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Luxury Event Photography
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Cinematic Event Videography
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Behind-the-Scenes Coverage
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Brand and Product Shoots
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Real Estate & Venue Showcases
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">•</span> Immersive 360° Virtual Reality Experiences
            </li>
          </ul>
          
          <p className="mb-4 text-gray-600">
            Our cutting-edge 360° VR service gives your audience a chance to experience your event space or brand activation like never before — virtually and interactively.
          </p>
          
          <div className="text-center mt-8">
            <p className="text-lg mb-2 italic">✨ Let us tell your story through our lens.</p>
            <p className="mb-6">📩 Book a session or request a custom quote today!</p>
            
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
