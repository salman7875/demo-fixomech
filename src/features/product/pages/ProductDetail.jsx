import { useLocation } from "react-router-dom";
import HeroSection from "../components/product-detail/HeroSection";
import { Header } from "../../../shared/components/ui/Header";

import GetQuote from "../../../shared/components/ui/GetQuote";
import Footer from "../../../shared/components/ui/Footer";
import { ProductOverview } from "../components/product-detail/ProductOverview";
import MoreProducts from "../components/product-detail/MoreProducts";

const ProductDetailPage = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <HeroSection id={location.pathname.split("/").at(-1)} />
      <ProductOverview />
      <MoreProducts />
      <GetQuote />
      <Footer />
    </div>
  );
};

export function ProductSpecsSection() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Benefits */}
          <div>
            <h3 className="text-red-600 font-semibold text-lg mb-3">
              Benefits for Cylinder Repair Shops
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                One-stop solution for disassembly, assembly, honing & Cylinder
                Testing.
              </li>
              <li>Space-saving design by integrating two machines into one.</li>
              <li>
                Reduced handling time – no need to transport barrels to a
                separate honing machine.
              </li>
              <li>Cost-effective – eliminates outsourcing for honing.</li>
              <li>
                Operator-friendly – quick setup, easy operation, and precise
                results.
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-red-600 font-semibold text-lg mb-3">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Integrated Honing Attachment –</strong> Perform honing
                operations directly on the repair bench.
              </li>
              <li>
                <strong>Versatile Honing Lengths –</strong> Options from 2
                meters to 5 meters, suitable for various cylinder sizes.
              </li>
              <li>
                <strong>Wide Diameter Range –</strong> Handles honing from Ø 90
                mm to Ø 450 mm with precision.
              </li>
              <li>
                <strong>Seamless Workflow –</strong> Clamp the barrel, adjust
                honing length, and start honing without shifting.
              </li>
              <li>
                <strong>Premium Surface Finish –</strong> Removes scratches and
                polishes internal diameter for longer cylinder life.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-red-600 font-semibold text-lg mb-3">
              Fixomech Cylinder Repair Bench with Built-In Honing Attachment
            </h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              A game-changer in hydraulic cylinder repair!
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fixomech introduces its first-ever Cylinder Repair Bench with
              integrated precision honing attachment — a revolutionary
              all-in-one solution for modern repair workshops.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This advanced design removes the need for a separate honing
              machine or outsourcing, allowing you to disassemble, assemble, and
              hone cylinders on the same bench — faster turnaround, lower costs,
              and unmatched efficiency.
            </p>
          </div>

          {/* Specification Table */}
          <div>
            <h4 className="text-red-600 font-semibold text-lg mb-3">
              Specification Table
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left text-gray-700">
                <thead className="bg-gray-100 text-gray-900">
                  <tr>
                    <th className="border px-4 py-2">Sr. No.</th>
                    <th className="border px-4 py-2">Bench Table Length</th>
                    <th className="border px-4 py-2">Honing Length</th>
                    <th className="border px-4 py-2">Honing Diameter Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      sr: 1,
                      length: "6 Meters",
                      honing: "2 Meters",
                      diameter: "Ø 90 mm – Ø 450 mm",
                    },
                    {
                      sr: 2,
                      length: "8 Meters",
                      honing: "3 Meters",
                      diameter: "Ø 90 mm – Ø 450 mm",
                    },
                    {
                      sr: 3,
                      length: "10 Meters",
                      honing: "4 Meters",
                      diameter: "Ø 90 mm – Ø 450 mm",
                    },
                    {
                      sr: 4,
                      length: "12 Meters",
                      honing: "5 Meters",
                      diameter: "Ø 90 mm – Ø 450 mm",
                    },
                  ].map((row) => (
                    <tr key={row.sr} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{row.sr}</td>
                      <td className="border px-4 py-2">{row.length}</td>
                      <td className="border px-4 py-2">{row.honing}</td>
                      <td className="border px-4 py-2">{row.diameter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold">
          Download Brochure
        </button>
      </div>
    </section>
  );
}

export default ProductDetailPage;
