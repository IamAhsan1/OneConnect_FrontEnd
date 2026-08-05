import HeroSection from "@/components/about/HeroSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatisticsSection from "@/components/about/StatisticsSection";
import CTASection from "@/components/about/CTASection";
const AboutUs = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      <WhoWeAre />

      <MissionVision />

      <CoreValues />

      <WhyChooseUs />

      <StatisticsSection />

      <CTASection />
    </div>
  );
};

export default AboutUs;