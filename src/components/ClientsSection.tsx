
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";

type ClientLogo = {
  name: string;
  logo: string;
  website: string;
  description?: string;
};

export default function ClientsSection() {
  const isMobile = useIsMobile();
  
  // Real client logos with their details
  const clients: ClientLogo[] = [
    {
      name: "Redal",
      logo: "/logos/redal.png",
      website: "https://www.redal.ma",
      description: "Leading utility provider in Morocco"
    },
    {
      name: "Renault",
      logo: "/logos/renault.svg",
      website: "https://www.renault.com",
      description: "Global automotive manufacturer"
    },
    {
      name: "Arabian Oud",
      logo: "/logos/arabian-oud.png",
      website: "https://www.arabianoud.com",
      description: "Largest Arabian fragrance retailer"
    },
    {
      name: "GITEX",
      logo: "/logos/gitex.png",
      website: "https://www.gitex.com",
      description: "Premier technology event in MENA region"
    },
    {
      name: "Jabra",
      logo: "/logos/jabra.svg",
      website: "https://www.jabra.com",
      description: "Global leader in audio and communication solutions"
    },
    {
      name: "HCP",
      logo: "/logos/hcp.png",
      website: "https://www.hcp.ma",
      description: "High Commission for Planning in Morocco"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Trusted By Leading Brands</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We're proud to have worked with these prestigious organizations to create unforgettable events.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <HoverCard key={index} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <a 
                  href={client.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-24 md:h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-4"
                  aria-label={`Visit ${client.name} website`}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </HoverCardTrigger>
              {!isMobile && (
                <HoverCardContent className="w-64 p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-lg">{client.name}</h4>
                    {client.description && (
                      <p className="text-sm text-muted-foreground">{client.description}</p>
                    )}
                    <p className="text-xs text-blue-600">Click to visit website</p>
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
