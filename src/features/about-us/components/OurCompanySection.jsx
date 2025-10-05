import globImg from "../../../assets/icons/Glob.png";
import IndustryImg from "../../../assets/icons/Industry.png";
import checkImg from "../../../assets/icons/Check.png";

const DATA = [
  {
    id: 1,
    image: globImg,
    title: "Global Operations",
    subtitle:
      "Out network spans multiple countries ensuring localized expertise wherever we operate.",
  },
  {
    id: 1,
    image: IndustryImg,
    title: "Innovation & Technology",
    subtitle:
      "Out network spans multiple countries ensuring localized expertise wherever we operate.",
  },
  {
    id: 1,
    image: checkImg,
    title: "Customer-Centric Approach",
    subtitle:
      "Out network spans multiple countries ensuring localized expertise wherever we operate.",
  },
];

const OurCompanySection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          OUR <span className="font-bold">COMPANY</span>
        </h2>

        <p>
          We are dedicated to delivering innovative solutions that drive success
          for our clients. With a global presence and a commitment to
          excellence, we're leading the way in cutting-edge technology and
          customer satisfaction
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {DATA.map((data) => (
            <CompanyCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyCard = ({ data }) => {
  return (
    <div className="p-4 space-y-4 border border-red-600 rounded-md">
      <div className="h-10 w-10 p-2 mx-auto bg-red-50 border border-red-600 rounded-md">
        <img src={data.image} alt={data.title} className="h-full w-full" />
      </div>
      <h3 className="font-semibold">{data.title}</h3>
      <p className="text-sm">{data.subtitle}</p>
    </div>
  );
};

export default OurCompanySection;
