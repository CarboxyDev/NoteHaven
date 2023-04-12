const PoweredSection = () => {
  return (
    <>
      <div className="bg-blue banner flex h-80 items-center justify-center">
        <h2 className="rounded-2xl bg-white px-12 py-10 font-inter text-2xl font-semibold text-gray-700 sm:text-4xl">
          Powered by <span className="magic-text-static">IPFS</span> and{" "}
          <span className="magic-text-static">Filecoin</span>
        </h2>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="bg-blue banner flex min-h-[300px] items-center justify-center">
  //       <img
  //         src="/powered-graphic.png"
  //         alt="powered-by"
  //         className="h-[183px] w-[472px]"
  //       />
  //     </div>
  //   </>
  // );
};

export default PoweredSection;
