import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

export const WhyFixoSection = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl  mb-8">
          Why <span className="font-semibold">Fixomech</span>
        </h2>

        <div className="relative mb-10">
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt="Featured Product"
            className="rounded-xl w-full object-cover h-[300px] md:h-[400px] lg:h-[350px]"
          />
          <span className="absolute top-4 left-4 bg-gray-400/70 text-white text-xs px-3 py-1 rounded-md">
            Feature Product
          </span>
          <button className="absolute top-4 right-4 bg-white text-red-600 p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition">
            <ArrowUpRight size={18} />
          </button>
          <div className="absolute bottom-4 left-4 p-2 space-y-2 text-left">
            <p className="text-white">
              Engineering innovation for precision, reliadbility and
              sustainability
            </p>

            <button className="text-gray-100 text-sm inline-flex items-center gap-1">
              Learn more <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
