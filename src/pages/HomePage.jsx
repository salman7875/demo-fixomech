import FeaturedProductsSection from "../components/core/home/FeaturedProductsSection";
import { FNBRangeSection } from "../components/core/home/FnbRangeSection";
import { HeroSection } from "../components/core/home/HeroSection";
import { WhyFixoSection } from "../components/core/home/WhyFixoSection";
import { Header } from "../components/ui/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FNBRangeSection />
      <FeaturedProductsSection />
      <WhyFixoSection />
    </div>
  );
};
