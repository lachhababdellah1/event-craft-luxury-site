
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import TeamSection from "@/components/TeamSection";
import PhotographyVRSection from "@/components/PhotographyVRSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection lang="fr" />
        <AboutSection lang="fr" />
        <ServicesSection />
        <PhotographyVRSection />
        <GallerySection />
        <ClientsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactForm lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
};

export default Index;
