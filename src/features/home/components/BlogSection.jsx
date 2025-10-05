const DATA = [
  {
    id: 1,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Blog</h2>
        <div className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {DATA.map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 snap-start">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-left font-semibold text-lg line-clamp-2">
          {data.title}
        </h3>
        <p className="text-left text-gray-600 text-sm line-clamp-3">
          {data.subtitle}
        </p>
        <button
          onClick={() => console.log("clicked")}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
