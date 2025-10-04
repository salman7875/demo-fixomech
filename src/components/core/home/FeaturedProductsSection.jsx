import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

const FeaturedProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hydraulic Cylinder Repair", "Hydraulic Repair"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Featured <span className="text-red-600 font-bold">Products</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl border text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Large Image */}
        <div className="relative mb-10">
          <img
            src="https://avatars.githubusercontent.com/u/78205495?v=4"
            alt="Featured Product"
            className="rounded-xl w-full object-cover h-[300px] md:h-[400px] lg:h-[250px]"
          />
          <span className="absolute top-4 left-4 bg-gray-400/70 text-white text-xs px-3 py-1 rounded-md">
            Feature Product
          </span>
          <button className="absolute bottom-4 left-4 bg-white text-red-600 p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition">
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition relative pt-4 pb-8"
            >
              {/* Image Section */}
              <div className="relative p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[100px] object-contain mx-auto"
                />
                <button className="absolute top-4 right-4 bg-white text-red-600 p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Floating Title */}
              <div
                className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 
             bg-red-600 text-white text-sm font-medium py-2 px-4 
             rounded-xl shadow-md w-max"
              >
                {product.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
