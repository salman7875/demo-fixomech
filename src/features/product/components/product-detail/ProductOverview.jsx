import { useState } from "react";
import checkImg from "../../../../assets/icons/Check.png";

export function ProductOverview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200 mb-8">
        {["Overview", "Specs", "Downloads"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`
              px-6 py-3 text-sm font-medium border-b-2 transition-all
              ${
                activeTab === tab.toLowerCase()
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:text-red-500"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Section */}
          <div className="space-y-4">
            <img
              src="https://avatars.githubusercontent.com/u/78205495?v=4"
              alt="Product"
              className="rounded-lg border"
            />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-14 rounded-md border overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-400"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/78205495?v=4"
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Product <span className="text-red-500">Description</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The FIXOMECH F-CRTH is meticulously engineered...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Refer to the chart below to see the full range...
            </p>
            <p className="text-gray-700 leading-relaxed">
              You can rest assured that they have been rigorously tested...
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Versatile Cylinder Repair",
                "Precision & Efficiency",
                "CE-Certified Safety",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center border border-red-500 rounded-lg px-4 py-4 h-16 hover:bg-red-50 transition-all"
                >
                  <img
                    src={checkImg}
                    alt="Check png"
                    className="h-5 w-5 shrink-0  mr-3"
                  />
                  <span className="text-gray-800 text-sm md:text-base font-semibold leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "specs" && (
        <div className="text-center text-gray-600">Specs content here...</div>
      )}
      {activeTab === "downloads" && (
        <div className="text-center text-gray-600">
          Downloads content here...
        </div>
      )}
    </div>
  );
}
