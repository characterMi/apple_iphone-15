import dynamic from "next/dynamic";

const ModelComponents = dynamic(() => import("./ModelComponents"), {
  ssr: false,
});

const Model = () => {
  return (
    <section className="common-padding">
      <ModelComponents />
    </section>
  );
};

export default Model;
