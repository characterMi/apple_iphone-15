import dynamic from "next/dynamic";

const HeroComponents = dynamic(() => import("./HeroComponents"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="w-full nav-height bg-black relative">
      <HeroComponents />
    </section>
  );
};

export default Hero;
