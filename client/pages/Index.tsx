import { useState } from "react";
import HeroFrame from "@/components/HeroFrame";
import ServicesSection from "@/components/ServicesSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Index() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-yellow-400 selection:text-black">
      {/* 
        HeroFrame now plays automatically and takes 100vh.
      */}
      <HeroFrame onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* 
        Services Section with Interactive Bubbles 
      */}
      <ServicesSection onContactClick={() => setIsContactModalOpen(true)} />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <Footer />
    </div>
  );
}
