import { HeroSectionLayout } from "../../../shared/components/layout/HeroSectionLayout";

const HeroSection = () => {
  return (
    <HeroSectionLayout>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
        About <span className="bg-red-600 px-2">Us</span>
      </h1>
    </HeroSectionLayout>
  );
};

export default HeroSection;
