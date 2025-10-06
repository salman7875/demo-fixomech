import { HeroSectionLayout } from "../../../../shared/components/layout/HeroSectionLayout";

const products = [
  {
    id: 1,
    title: "Nut Buster (FNB-65000)",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    category: "Hydraulic Cylinder Repair",
  },
  {
    id: 2,
    title: "Hydraulic Cylinders (FVPS)",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    category: "Hydraulic Cylinder Repair",
  },
  {
    id: 3,
    title: "Cylinder Honing Station",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    category: "Hydraulic Repair",
  },
];

const HeroSection = ({ id }) => {
  const data = products.find((p) => p.id == id);
  console.log(data);

  return (
    <HeroSectionLayout bgUrl="https://avatars.githubusercontent.com/u/78205495?v=4">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center px-4 max-w-7xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          {data.title}
        </h1>
        <h4 className="text-xl">{data.category}</h4>
      </div>
    </HeroSectionLayout>
  );
};

export default HeroSection;
