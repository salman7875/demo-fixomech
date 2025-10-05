import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const FNBRangeSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Image with arrows */}
        <div className="relative">
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt="Hydraulic Nut Buster"
            className="w-full h-[475px] rounded-lg shadow-lg object-cover"
          />

          {/* Left Arrow */}
          <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-red-600 p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition">
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-red-600 p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">
            Hydraulic Nut Buster
          </h2>
          <h3 className="text-xl font-semibold mt-1">The FNB Range</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Hydraulic cylinder repair has never been easier! Fixomech Nutbuster,
            The FNB range is specifically engineered for the disassembly and
            tightening of piston nuts and cylinder glands. The system operates
            with two counteracting cylinders that generate a powerful cracking
            torque, while a high-speed turning motor provides rapid nut rotation
            during loosening or tightening.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 grid grid-cols-1 gap-4">
            {[
              "Suitable for all industries, mining, oil and gas, forestry, agriculture, construction",
              "Hard torque capacity for large applications",
              "Designed to disassemble and tighten piston nuts and cylinder glands",
              "Cost effective and a safe solution",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center border border-red-500 rounded-lg px-4 py-4 h-16 hover:bg-red-50 transition-all"
              >
                <CheckCircle className="text-red-600 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800 text-sm md:text-base font-semibold leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FNBRangeSection;
