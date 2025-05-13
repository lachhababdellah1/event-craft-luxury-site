
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
              alt="About SnapEvent" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">About SnapEvent</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-playfair">Our Story</h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
                <p className="text-gray-700 mb-6">
                  Founded in 2010, SnapEvent emerged from a passion for creating exceptional events that tell unique stories. What began as a small boutique agency has grown into a leading luxury event planning company trusted by prestigious clients worldwide.
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey has been shaped by a commitment to excellence, creativity, and personalized service. With each event, we've refined our approach, expanded our network, and deepened our expertise in crafting unforgettable experiences.
                </p>
                <p className="text-gray-700">
                  Today, SnapEvent stands as a symbol of sophistication and reliability in the event industry, known for our ability to transform concepts into reality with precision and style.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Our Story" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Our Philosophy</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-8 text-lg">
                At SnapEvent, we believe that every event should be a reflection of its purpose, its host, and its audience. Our philosophy is built on three core principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">✨</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Excellence</h3>
                  <p className="text-gray-600">We pursue perfection in every detail, from concept to execution, ensuring each element meets the highest standards.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">🎭</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Creativity</h3>
                  <p className="text-gray-600">We approach each event with fresh perspectives, innovative ideas, and unique solutions that captivate and inspire.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl text-gold mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">Partnership</h3>
                  <p className="text-gray-600">We collaborate closely with our clients, building relationships based on trust, understanding, and shared vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <TeamSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
