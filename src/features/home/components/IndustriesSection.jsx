import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Marine",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
  {
    title: "Agriculture",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
  {
    title: "Construction",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
  {
    title: "Oil & Gas",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
  {
    title: "Mining",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
  {
    title: "Forestry",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium text-gray-800">
          Industries <span className="font-semibold text-black">We Serve</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
            <IndustryCard {...industries[0]} />
            <IndustryCard {...industries[1]} />
          </div>

          {/* Big full-width card */}
          <div className="md:col-span-3">
            <IndustryCard {...industries[2]} big />
          </div>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="col-span-3">
            <IndustryCard {...industries[3]} big />
          </div>
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
            <div>
              <IndustryCard {...industries[4]} />
            </div>
            <div>
              <IndustryCard {...industries[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ title, image, big }) => {
  return (
    <div
      className={`relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
        big ? "h-64 md:h-72" : "h-52 md:h-56"
      }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Icon */}
      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-red-600">
        <ArrowUpRight size={20} />
      </div>
    </div>
  );
};

export default IndustriesSection;
