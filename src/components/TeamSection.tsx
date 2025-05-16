
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
type TeamMember = {
  name: string;
  position: string;
  bio: string;
  emoji: string;
  photo?: string;
};
const team: TeamMember[] = [{
  name: "Lachhab Abdellah",
  position: "Founder & Owner",
  bio: "Visionary leader with 15+ years in photography, film direction, and luxury event production.",
  emoji: "🧑‍💼",
  photo: "/lovable-uploads/4fc95dbe-c60f-47cc-ad4b-06b0fb84a582.png"
}, {
  name: "Soukaina Amrani",
  position: "Creative Director",
  bio: "Expert in transforming ideas into captivating visual experiences. Designs events with style, emotion, and impact.",
  emoji: "🎨",
  photo: "/lovable-uploads/8fb518f3-5859-49f9-bfd5-837e37d00e9b.png"
}, {
  name: "Mohammed Sousi",
  position: "Digital Marketing Specialist",
  bio: "Drives online campaigns, influencer strategy, and brand presence for top-tier events.",
  emoji: "📱",
  photo: "/lovable-uploads/e10d7fec-5be8-4c89-a080-4e787163742b.png"
}, {
  name: "Hajar Rochdi",
  position: "Content Strategist",
  bio: "Crafts compelling event narratives and manages storytelling across media platforms.",
  emoji: "✍️",
  photo: "/lovable-uploads/3d48b27c-1d2b-4dda-b2c8-c90e4d958a91.png"
}];
export default function TeamSection() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Team</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At SnapEvent, our strength lies in the passion and expertise of our team. Together, we create unforgettable experiences that reflect elegance, precision, and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6">
                  <Avatar className="h-32 w-32 border-2 border-gold">
                    {member.photo ? <AvatarImage src={member.photo} alt={member.name} className="" /> : <AvatarFallback className="text-4xl">{member.emoji}</AvatarFallback>}
                  </Avatar>
                </div>
                <h3 className="font-playfair font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
}
