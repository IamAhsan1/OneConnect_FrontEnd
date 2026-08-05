import HeroSection from "@/components/contact/HeroSection";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import FAQSection from "@/components/contact/FAQSection";
import MapSection from "@/components/contact/MapSection";
import CTASection from "@/components/contact/CTASection";

const ContactUs = () => {
  return (
    <main>
      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <OfficeLocations />
      <FAQSection />
      <MapSection />
      <CTASection />
    </main>
  );
};

export default ContactUs;