
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

type Service = {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Corporate Events",
    description: "Elevate your brand with sophisticated corporate events, conferences, and galas tailored to your company's objectives.",
    icon: "🏢",
    link: "/services#corporate"
  },
  {
    title: "Government Ceremonies",
    description: "Formal events and ceremonies for government institutions, ensuring protocol and prestige for official occasions.",
    icon: "🏛️",
    link: "/services#government"
  },
  {
    title: "Luxury Weddings",
    description: "Bespoke wedding experiences creating unforgettable celebrations of love with elegance and personalized touches.",
    icon: "💍",
    link: "/services#weddings"
  },
  {
    title: "Product & Store Launches",
    description: "Strategic product launches and store openings that generate buzz and create memorable brand experiences.",
    icon: "🚀",
    link: "/services#launches"
  },
  {
    title: "Celebrity Appearances",
    description: "Seamless coordination of celebrity engagements for your events, including logistics and security management.",
    icon: "⭐",
    link: "/services#celebrity"
  },
  {
    title: "Media & PR Coverage",
    description: "Comprehensive media relations and PR strategies ensuring maximum exposure for your events.",
    icon: "📸",
    link: "/services#media"
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
              <CardHeader className="pb-3">
                <div className="text-3xl mb-2">{service.icon}</div>
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
