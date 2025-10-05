import { Header } from "../../../shared/components/ui/Header";
import FNBRangeSection from "../components/FnbRangeSection";
import HeroSection from "../components/HeroSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import WhyFixoSection from "../components/WhyFixoSection";
import IndustriesSection from "../components/IndustriesSection";
import FooterSection from "../../../shared/components/ui/Footer";
import GetQuote from "../../../shared/components/ui/GetQuote";
import ServiceHightlight from "../components/ServiceHightlight";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FNBRangeSection />
      <FeaturedProductsSection />
      <WhyFixoSection />
      <ServiceHightlight />
      <IndustriesSection />
      <GetQuote />
      <FooterSection />
    </div>
  );
};

export default HomePage;
