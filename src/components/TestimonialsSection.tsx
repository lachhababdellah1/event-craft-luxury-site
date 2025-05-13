
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "SnapEvent turned our product launch into the talk of the industry. Their attention to detail and creativity exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Luxury Brand Co."
  },
  {
    quote: "Working with SnapEvent for our annual gala was a game-changer. They handled everything with professionalism and elegance.",
    author: "Michael Chen",
    position: "CEO",
    company: "Global Investments"
  },
  {
    quote: "The team at SnapEvent managed our governmental ceremony with precision and respect for protocol. Truly outstanding service.",
    author: "Ambassador Thomas",
    position: "Diplomat",
    company: "Foreign Ministry"
  },
  {
    quote: "Our store opening became an unforgettable event thanks to SnapEvent's innovative approach and flawless execution.",
    author: "Elena Petrovich",
    position: "Brand Director",
    company: "Fashion House"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-transparent">
            <CardContent className="text-center pt-6">
              <div className="text-gold text-4xl mb-6">"</div>
              <p className="text-xl mb-8 italic text-gray-300">
                {testimonials[currentIndex].quote}
              </p>
              <div className="mb-2 text-gold font-bold">
                {testimonials[currentIndex].author}
              </div>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </p>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              className="border-gold text-gold hover:bg-gold hover:text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
            >
              ←
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-gold' : 'bg-gray-600'}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={handleNext}
              className="border-gold text-gold hover:bg-gold hover:text-white rounded-full w-12 h-12 p-0 flex items-center justify-center"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
