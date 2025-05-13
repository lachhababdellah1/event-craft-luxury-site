import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
type ContactLanguage = 'en' | 'fr';
type ContactProps = {
  lang?: ContactLanguage;
};
const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "We'd love to hear about your upcoming event",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    eventType: "Event Type",
    eventTypes: {
      corporate: "Corporate Event",
      government: "Government Ceremony",
      wedding: "Luxury Wedding",
      product: "Product Launch",
      celebrity: "Celebrity Appearance",
      other: "Other"
    },
    budget: "Budget Range",
    budgets: {
      b1: "$10,000 - $25,000",
      b2: "$25,000 - $50,000",
      b3: "$50,000 - $100,000",
      b4: "$100,000+"
    },
    message: "Event Details",
    messagePlaceholder: "Please share details about your event, including the date, location, and any specific requirements.",
    submit: "Submit Inquiry",
    success: "Thank you! We'll be in touch soon.",
    error: "Something went wrong. Please try again."
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Nous serions ravis d'en savoir plus sur votre prochain événement",
    name: "Nom Complet",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    eventType: "Type d'Événement",
    eventTypes: {
      corporate: "Événement d'Entreprise",
      government: "Cérémonie Gouvernementale",
      wedding: "Mariage de Luxe",
      product: "Lancement de Produit",
      celebrity: "Apparition de Célébrité",
      other: "Autre"
    },
    budget: "Fourchette Budgétaire",
    budgets: {
      b1: "10 000€ - 25 000€",
      b2: "25 000€ - 50 000€",
      b3: "50 000€ - 100 000€",
      b4: "100 000€+"
    },
    message: "Détails de l'Événement",
    messagePlaceholder: "Veuillez partager des détails sur votre événement, y compris la date, le lieu et toute exigence spécifique.",
    submit: "Envoyer la Demande",
    success: "Merci! Nous vous contacterons bientôt.",
    error: "Une erreur s'est produite. Veuillez réessayer."
  }
};
export default function ContactForm({
  lang = 'en'
}: ContactProps) {
  const t = translations[lang];
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Received",
        description: t.success
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        budget: "",
        message: ""
      });
    }, 1000);
  };
  return <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">{t.title}</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-gray-600 mb-12">
              {t.subtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-gold shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Luxury Avenue, Suite 500, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-gold shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-gray-600">abdou.lachhab@gmail.com</p>
                </div>
              </div>
              
              <div className="+212669211924">
                <Phone className="mr-4 h-6 w-6 text-gold shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-gray-600">+212669-211924</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    {t.name} <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {t.email} <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      {t.phone}
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-white" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block mb-2 text-sm font-medium">
                      {t.eventType} <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.eventType} onValueChange={value => handleSelectChange("eventType", value)} required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder={t.eventType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">{t.eventTypes.corporate}</SelectItem>
                        <SelectItem value="government">{t.eventTypes.government}</SelectItem>
                        <SelectItem value="wedding">{t.eventTypes.wedding}</SelectItem>
                        <SelectItem value="product">{t.eventTypes.product}</SelectItem>
                        <SelectItem value="celebrity">{t.eventTypes.celebrity}</SelectItem>
                        <SelectItem value="other">{t.eventTypes.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block mb-2 text-sm font-medium">
                      {t.budget}
                    </label>
                    <Select value={formData.budget} onValueChange={value => handleSelectChange("budget", value)}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder={t.budget} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-25k">{t.budgets.b1}</SelectItem>
                        <SelectItem value="25k-50k">{t.budgets.b2}</SelectItem>
                        <SelectItem value="50k-100k">{t.budgets.b3}</SelectItem>
                        <SelectItem value="100k+">{t.budgets.b4}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    {t.message} <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder={t.messagePlaceholder} className="bg-white" />
                </div>
                
                <Button type="submit" className="bg-gold hover:bg-gold-dark text-white w-full" disabled={loading}>
                  {loading ? "Submitting..." : t.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
}