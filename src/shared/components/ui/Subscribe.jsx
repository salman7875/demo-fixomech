export default function Subscribe() {
  return (
    <div className="bg-red-300 absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] max-w-5xl rounded-xl">
      <div
        className="rounded-xl p-6 md:p-10 shadow-lg text-center text-white"
        style={{
          backgroundImage: "url('/assets/polygon-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-lg md:text-2xl font-semibold mb-6">
          Subscribe to our NEWSLETTER
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            readOnly
            className="w-full sm:w-[70%] px-4 py-3 rounded-md bg-transparent border border-white/70 placeholder-white text-white focus:outline-none"
          />
          <button className="px-8 py-3 bg-[#e02424] hover:bg-[#c71c1c] text-white font-medium rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
