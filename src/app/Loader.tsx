const DotsLoader = () => (
  <div className="w-14 h-12 relative">
    <div className="size-2 absolute z-[1] rounded-full bg-white left-[15%] origin-[50%] circle-animation" />
    <div className="size-2 absolute z-[1] rounded-full bg-white origin-[50%] circle-animation left-[45%]" />
    <div className="size-2 absolute z-[1] rounded-full bg-white origin-[50%] circle-animation right-[15%] left-auto" />
    <div className="w-2 h-1 rounded-full bg-white absolute top-[35px] origin-[50%] left-[15%] blur-[1px] shadow-animation" />
    <div className="w-2 h-1 rounded-full bg-white absolute top-[35px] origin-[50%] left-[45%] blur-[1px] shadow-animation" />
    <div className="w-2 h-1 rounded-full bg-white absolute top-[35px] origin-[50%] blur-[1px] shadow-animation right-[15%] left-auto" />
  </div>
);

const Loader = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-y-4 fixed z-[10000000000] bg-black/30 backdrop-blur-sm px-2">
      <h2 className="flex items-center text-4xl max-[400px]:text-3xl max-[350px]:text-2xl max-[300px]:text-xl font-bold">
        Loading the data
        <DotsLoader />
      </h2>
      <h5 className="text-center">
        Please wait, This process might take a while.
      </h5>
    </section>
  );
};

export default Loader;
