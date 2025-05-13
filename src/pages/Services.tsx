
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  emoji: string;
};

const services: Service[] = [
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Create memorable corporate events that strengthen your brand, engage your audience, and achieve your business objectives. From executive retreats to product launches, we bring sophistication and strategic thinking to every corporate occasion.",
    features: [
      "Conferences and Conventions",
      "Executive Retreats",
      "Award Ceremonies",
      "Holiday Parties",
      "Team Building Events",
      "Annual Meetings"
    ],
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    emoji: "🏢"
  },
  {
    id: "government",
    title: "Government Ceremonies",
    description: "Execute formal government events with precision, respect for protocol, and appropriate grandeur. Our team understands the unique requirements of official ceremonies and ensures dignified, flawless occasions.",
    features: [
      "Diplomatic Receptions",
      "Official Inaugurations",
      "State Visits",
      "National Day Celebrations",
      "Award Presentations",
      "International Delegations"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvdmVybm1lbnQlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D",
    emoji: "🏛️"
  },
  {
    id: "weddings",
    title: "Luxury Weddings",
    description: "Transform your special day into an extraordinary celebration of love with our luxury wedding planning services. We create bespoke wedding experiences that reflect your unique story and exceed your expectations.",
    features: [
      "Destination Weddings",
      "Celebrity Weddings",
      "Cultural Ceremonies",
      "Luxury Reception Design",
      "VIP Guest Management",
      "Exclusive Venue Selection"
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    emoji: "💍"
  },
  {
    id: "launches",
    title: "Product & Store Launches",
    description: "Create buzz and impact with strategic product launches and store openings that capture attention and drive engagement. We craft experiences that showcase your brand and create lasting impressions.",
    features: [
      "Brand Activation Events",
      "Media Preview Events",
      "VIP Shopping Experiences",
      "Pop-up Installations",
      "Flagship Store Openings",
      "Fashion Shows"
    ],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    emoji: "🚀"
  },
  {
    id: "celebrity",
    title: "Celebrity Appearances",
    description: "Manage celebrity engagements with discretion, professionalism, and attention to detail. From logistics and security to media management, we ensure seamless experiences for high-profile individuals.",
    features: [
      "Celebrity Guest Coordination",
      "Security Planning",
      "Private Transportation",
      "Media Management",
      "VIP Hospitality",
      "Confidentiality Protocols"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    emoji: "⭐"
  },
  {
    id: "media",
    title: "Media & PR Coverage",
    description: "Amplify your event's impact with strategic media relations and PR coverage. We create compelling stories and secure meaningful media exposure that enhances your brand and extends your reach.",
    features: [
      "Press Conference Organization",
      "Media Relations Management",
      "Influencer Partnerships",
      "Content Creation",
      "Social Media Campaigns",
      "Post-Event PR Coverage"
    ],
    image: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZXNzJTIwY29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    emoji: "📸"
  }
];

const Services = () => {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="relative py-24 bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Our Services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Our Services</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
        
        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Comprehensive Event Solutions</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-700">
                At SnapEvent, we offer a complete range of luxury event planning services tailored to meet the unique needs of our distinguished clients. From initial concept to flawless execution, our team brings creativity, precision, and sophistication to every event we create.
              </p>
            </div>
          </div>
        </section>
        
        {/* Individual Services */}
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col lg:grid-cols-2' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h2 className="text-3xl font-bold mb-6 font-playfair">{service.title}</h2>
                  <div className="w-24 h-1 bg-gold mb-8"></div>
                  <p className="text-gray-700 mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gold mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-gold hover:bg-gold-dark text-white">
                      Inquire About This Service
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Create an Unforgettable Event?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              Contact us today to discuss your vision, and let our team of experts bring it to life with elegance and precision.
            </p>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
