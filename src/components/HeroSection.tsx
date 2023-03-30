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
            <h1 className="text-3xl font-bold text-gray-700 lg:text-4xl xl:text-5xl">
              This is a{" "}
              <span className="transition-colors duration-300 ease-linear hover:text-primary-500">
                great headline
              </span>{" "}
              in two lines
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This will be some secondary text which will convey a lengthy yet
              brief message and assure the visitor of what the product&apos;s
              pros are as well as its qualities.
            </p>
            <div className="mt-15 flex flex-row">
              <Button size="xl" variant="default">
                Get started
              </Button>
              <button className="text-md ml-8 flex flex-row items-center font-semibold text-gray-700 hover:text-primary">
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
