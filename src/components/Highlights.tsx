import dynamic from "next/dynamic";

const HighlightsComponents = dynamic(() => import("./HighlightsComponents"), {
  ssr: false,
});

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <HighlightsComponents />
      </div>
    </section>
  );
};

export default Highlights;
