import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowSmallRightIcon } from "../utils/icons";

// NOTE: This is a section and not a component so it'll probably have very little modularity

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-none grid-rows-2 gap-x-8 gap-y-6 pt-32 lg:grid-cols-2 lg:grid-rows-none">
        <div className="mx-3 mt-6 flex flex-col sm:mx-0">
          <div className="mx-auto sm:max-w-lg lg:max-w-none">
            <h1 className="font-secondary text-3xl font-bold text-gray-700 lg:text-4xl xl:text-5xl">
              Transforming education with the{" "}
              <span className="magic-text transition-colors duration-300 ease-linear hover:text-primary-500">
                power of web3
              </span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-500">
              NoteHaven harnesses the power of IPFS to create a decentralized
              interface for sharing notes around the world.
            </p>
            <div className="mt-24 flex flex-row">
              <Button size="lg" variant="default" font="semibold">
                Get started
              </Button>
              <button className="text-md ml-8 flex flex-row items-center font-semibold text-gray-500 hover:text-gray-700">
                Learn more <ArrowSmallRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
            }}
          >
            <img
              src="/generic-hero-image-1.png"
              alt="hero-image"
              className="lg: mx-auto w-[456px] lg:mx-0 lg:ml-auto lg:w-[342px] xl:w-[456px]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
