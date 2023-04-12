const PoweredSection = () => {
  return (
    <>
      <div className="bg-blue banner flex h-80 items-center justify-center">
        <h2 className="rounded-2xl bg-white px-12 py-10 font-inter text-2xl font-semibold text-gray-700 shadow-md transition delay-200 duration-300 hover:bg-slate-100 sm:text-4xl">
          Powered by <span className="magic-text-static">IPFS</span> and{" "}
          <span className="magic-text-static">Filecoin</span>
        </h2>
      </div>
    </>
  );
};

export default PoweredSection;
