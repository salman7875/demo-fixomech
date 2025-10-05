const url = "https://avatars.githubusercontent.com/u/78205495?v=4";

export const HeroSectionLayout = ({ children, bgUrl = url }) => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center text-white py-24 sm:py-28 md:py-36"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {children}
    </section>
  );
};
