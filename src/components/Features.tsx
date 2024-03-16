import dynamic from "next/dynamic";

const FeaturesComponents = dynamic(() => import("./FeaturesComponents"), {
  ssr: false,
});

const Features = () => {
  return (
    <section className="common-padding h-full bg-zink relative overflow-hidden">
      <div className="screen-max-width">
        <FeaturesComponents />
      </div>
    </section>
  );
};

export default Features;
