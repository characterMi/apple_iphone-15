import dynamic from "next/dynamic";

const HowItWorksComponents = dynamic(() => import("./HowItWorksComponents"), {
  ssr: false,
});

const HowItWorks = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <HowItWorksComponents />
      </div>
    </section>
  );
};

export default HowItWorks;
