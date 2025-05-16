
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { AspectRatio } from "@/components/ui/aspect-ratio"

type Service = {
  title: string;
  description: string;
  icon: string;
  link: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Corporate Events",
    description: "Elevate your brand with sophisticated corporate events, conferences, and galas tailored to your company's objectives.",
    icon: "🏢",
    link: "/services#corporate",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Government Ceremonies",
    description: "Formal events and ceremonies for government institutions, ensuring protocol and prestige for official occasions.",
    icon: "🏛️",
    link: "/services#government",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Luxury Weddings",
    description: "Bespoke wedding experiences creating unforgettable celebrations of love with elegance and personalized touches.",
    icon: "💍",
    link: "/services#weddings",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Product & Store Launches",
    description: "Strategic product launches and store openings that generate buzz and create memorable brand experiences.",
    icon: "🚀",
    link: "/services#launches",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Celebrity Appearances",
    description: "Seamless coordination of celebrity engagements for your events, including logistics and security management.",
    icon: "⭐",
    link: "/services#celebrity",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Media & PR Coverage",
    description: "Comprehensive media relations and PR strategies ensuring maximum exposure for your events.",
    icon: "📸",
    link: "/services#media",
    image: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of event planning services tailored to meet the unique needs of our prestigious clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute top-3 left-3 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link} className="text-gold font-medium flex items-center group-hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-gold hover:bg-gold-dark text-white px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
