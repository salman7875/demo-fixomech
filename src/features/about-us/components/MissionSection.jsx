import visionImg from "../../../assets/icons/Vision.png";
import missionImg from "../../../assets/icons/Mission.png";

const DATA = [
  {
    id: 1,
    icon: visionImg,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title: "Our Vision",
    subtitle:
      "To be the preferred service provider with our safe and reliable toolking available for all OEMs worldwide, We will strive to be the trusted brand within the industry and to serve the market to keep their construction machinery moving.",
  },
  {
    id: 2,
    icon: missionImg,
    image: "https://avatars.githubusercontent.com/u/78205495?v=4",
    title: "Our Mission",
    subtitle:
      "To be the preferred service provider with our safe and reliable toolking available for all OEMs worldwide, We will strive to be the trusted brand within the industry and to serve the market to keep their construction machinery moving.",
  },
];

const MissionSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4">
          {DATA.map((data) => (
            <MissionCard
              data={DATA[0]}
              pos={data.id % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionCard = ({ data, pos = "left" | "right" }) => {
  return (
    <div
      className={`w-full h-[272px] flex items-start gap-8 shadow-sm shadow-gray-400 rounded-md overflow-hidden ${
        pos === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="text-start p-4 flex-[3] space-y-4">
        <div className="h-10 w-10 p-2 bg-red-50 border border-red-600 rounded-md">
          <img src={data.icon} alt={data.title} className="h-full w-full" />
        </div>
        <h3 className="text-4xl font-semibold">
          {data.title.split(" ").at(0)}{" "}
          <span className="text-red-600">{data.title.split(" ").at(1)}</span>
        </h3>
        <p className="text-gray-600">{data.subtitle}</p>
      </div>
      <div className="right flex-[1]">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default MissionSection;
