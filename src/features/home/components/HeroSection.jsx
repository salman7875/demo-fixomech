import { HeroSectionLayout } from "../../../shared/components/layout/HeroSectionLayout";

const HeroSection = () => {
  return (
    <HeroSectionLayout bgUrl="https://avatars.githubusercontent.com/u/78205495?v=4">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-7xl mx-auto">
        <p className="text-sm md:text-base italic text-gray-300 mb-3">
          “Trusted globally for precision, innovation, and reliability”
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          YOUR TRUSTED MANUFACTURER FOR ALL HYDRAULIC CYLINDER
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-4 bg-red-600 px-3 py-1 inline-block">
          DISASSEMBLY, REPAIR, TESTING AND HONING SOLUTIONS
        </h2>

        <div className="mt-8">
          <button className="border border-red-600 text-white hover:bg-red-600 transition-all px-6 py-2 rounded-md font-medium">
            Contact Now
          </button>
        </div>
      </div>
    </HeroSectionLayout>
  );
};

export default HeroSection;
