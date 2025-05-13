
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type TeamMember = {
  name: string;
  position: string;
  bio: string;
  emoji: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Lachhab Abdellah",
    position: "Founder & Owner",
    bio: "Visionary leader with 15+ years in photography, film direction, and luxury event production.",
    emoji: "🧑‍💼",
    photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Soukaina Amrani",
    position: "Creative Director",
    bio: "Expert in transforming ideas into captivating visual experiences. Designs events with style, emotion, and impact.",
    emoji: "🎨",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Mohammed Sousi",
    position: "Digital Marketing Specialist",
    bio: "Drives online campaigns, influencer strategy, and brand presence for top-tier events.",
    emoji: "📱",
    photo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Hajar Rochdi",
    position: "Content Strategist",
    bio: "Crafts compelling event narratives and manages storytelling across media platforms.",
    emoji: "✍️",
    photo: "https://images.unsplash.com/photo-1598550473160-52c0b2a0ff9a?w=400&h=400&auto=format&fit=crop&q=80"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At SnapEvent, our strength lies in the passion and expertise of our team. Together, we create unforgettable experiences that reflect elegance, precision, and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6">
                  <Avatar className="h-32 w-32 border-2 border-gold">
                    {member.photo ? (
                      <AvatarImage src={member.photo} alt={member.name} />
                    ) : (
                      <AvatarFallback className="text-4xl">{member.emoji}</AvatarFallback>
                    )}
                  </Avatar>
                </div>
                <h3 className="font-playfair font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
