import Footer from "../../../shared/components/ui/Footer";
import GetQuote from "../../../shared/components/ui/GetQuote";
import { Header } from "../../../shared/components/ui/Header";
import {
  IndustriesSection,
  ServiceHightlight,
  WhyFixoSection,
} from "../../home";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import OurCompanySection from "../components/OurCompanySection";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OurCompanySection />
      <WhyFixoSection />
      <ServiceHightlight />
      <IndustriesSection />
      <MissionSection />
      <GetQuote />
      <Footer />
    </>
  );
};

export default AboutUsPage;
