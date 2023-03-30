import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-16 mr-auto text-5xl font-semibold text-gray-700">
            Features that make us <span className="magic-text">stand out</span>
          </h2>
          <FeatureCard variant={"light"} />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
