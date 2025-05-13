
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="relative py-24 bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Contact Us</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-200 h-96 rounded-lg relative overflow-hidden">
                {/* Placeholder for map - would typically use Google Maps or similar */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Visit Our Office</h3>
                    <p className="text-gray-600">123 Luxury Avenue, Suite 500, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
