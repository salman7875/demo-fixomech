export default function GetQuote() {
  return (
    <section className="py-16 mb-8 bg-white">
      <div className="text-center mb-10 space-y-8">
        <div>
          <h6>Get in touch now, to</h6>
          <h2 className="text-3xl font-semibold text-gray-800">
            GET A QUOTE, WITHIN{" "}
            <span className="font-semibold text-black">24 HOURS</span>
          </h2>
        </div>

        <button className="border border-red-600 text-black hover:bg-red-600 transition-all px-6 py-2 rounded-md font-medium">
          Contact Now
        </button>
      </div>
    </section>
  );
}
