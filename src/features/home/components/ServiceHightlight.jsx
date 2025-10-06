import IndustryIcon from "../../../assets/icons/Industry.png";
import TeamIcon from "../../../assets/icons/Team.png";
import CustomiseIcon from "../../../assets/icons/Customise.png";
import EcoIcon from "../../../assets/icons/Eco.png";

const SERVICES = [
  {
    id: 1,
    title: "Advanced Facilities",
    subtitle: "ohiweo hiwhiehwphwepp wjpoejpewjpewj pjpw ejp",
    icon: IndustryIcon,
  },
  {
    id: 2,
    title: "Dedicated R&D Team",
    subtitle: "ohiweo hiwhiehwphwepp wjpoejpewjpewj pjpw ejp",
    icon: TeamIcon,
  },
  {
    id: 3,
    title: "Customize & Precize Solutions",
    subtitle: "ohiweo hiwhiehwphwepp wjpoejpewjpewj pjpw ejp",
    icon: CustomiseIcon,
  },
  {
    id: 4,
    title: "Support & Sustainability",
    subtitle: "ohiweo hiwhiehwphwepp wjpoejpewjpewj pjpw ejp",
    icon: EcoIcon,
  },
];

const ServiceHightlight = () => {
  return (
    <section className="w-full py-16 bg-red-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {SERVICES.map((service) => {
          return <ServiceCard service={service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const { title, subtitle, icon } = service;
  return (
    <div className="bg-red-100 rounded-md shadow-lg p-6 flex flex-col justify-between border border-red-400 hover:shadow-xl transition-shadow duration-300">
      {/* Top row: Title and Icon */}
      <div className="flex items-start justify-between">
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className=" text-gray-600 text-sm">{subtitle}</p>
        </div>
        <div className="w-8 h-8 p-2 border flex items-center justify-center rounded-md">
          <img
            src={icon}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Learn More */}
      <div className="mt-6 text-right">
        <a
          href="#"
          className="text-black font-medium hover:underline flex items-center justify-end"
        >
          Learn More <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceHightlight;
