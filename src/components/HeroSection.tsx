import { motion } from "framer-motion";
import { ArrowSmallRightIcon } from "../utils/icons";
import Link from "next/link";

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
              <Link href="#get-started" className="peer" scroll={false}>
                <button className="duration-400 rounded-lg bg-primary px-10 py-4 font-medium text-white shadow shadow-primary/50 transition delay-200 ease-in hover:bg-primary-400 hover:shadow-md hover:shadow-primary-400/50">
                  Get started
                </button>
              </Link>
              <Link
                href="#features"
                scroll={false}
                className="ml-12 flex flex-row items-center transition-all  delay-200 duration-300 ease-in peer-hover:translate-x-8"
              >
                <button className="text-md font-semibold text-gray-500 hover:text-gray-700">
                  Learn more{" "}
                  <ArrowSmallRightIcon className="ml-2 inline h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.75, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <img
              src="/hero-graphic.png"
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
