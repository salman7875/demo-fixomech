import Footer from "../../../shared/components/ui/Footer";
import GetQuote from "../../../shared/components/ui/GetQuote";
import { Header } from "../../../shared/components/ui/Header";
import {
  IndustriesSection,
  ServiceHightlight,
  WhyFixoSection,
} from "../../home";
import HeroSection from "../components/HeroSection";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyFixoSection />
      <ServiceHightlight />
      <IndustriesSection />
      <GetQuote />
      <Footer />
    </>
  );
};

export default AboutUsPage;
