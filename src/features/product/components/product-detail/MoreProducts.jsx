import arrowImg from "../../../../assets/icons/Arrow.png";

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
  {
    id: 4,
    title: "Cylinder Honing Station",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    category: "Hydraulic Repair",
  },
  {
    id: 5,
    title: "Cylinder Honing Station",
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    category: "Hydraulic Repair",
  },
];

const MoreProducts = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Featured <span className="text-red-600 font-bold">Products</span>
        </h2>

        {/* Horizontal Scroll Wrapper */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 snap-center bg-white rounded-xl shadow-sm border hover:shadow-lg transition relative pt-4 pb-8 w-[280px] sm:w-[300px] md:w-[320px]"
            >
              {/* Image Section */}
              <div className="relative p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[100px] object-contain mx-auto"
                />
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="absolute top-4 right-4 bg-white text-red-600 p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition"
                >
                  <img src={arrowImg} alt="arrow" className="h-full w-full" />
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

export default MoreProducts;
