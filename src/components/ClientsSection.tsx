
export default function ClientsSection() {
  // Use placeholder company names
  const clients = [
    { name: "Global Corp", logo: "GC" },
    { name: "Luxury Brand", logo: "LB" },
    { name: "Tech Innovators", logo: "TI" },
    { name: "Premier Hotels", logo: "PH" },
    { name: "Government Agency", logo: "GA" },
    { name: "Elite Fashion", logo: "EF" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Trusted By Leading Brands</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover-scale"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">
                {client.logo}
              </div>
              <span className="ml-3 text-gray-800 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
