import Cursor from "@/components/Cursor";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CaseStudySection from "@/components/CaseStudySection";
import ScrollAnimations from "@/components/ScrollAnimations";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Cursor />
      <HomeSection />
      <ServicesSection />
      <ContactSection />
      <CaseStudySection />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
