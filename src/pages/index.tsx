import { type NextPage } from "next";
import Head from "next/head";
import CTASection from "../components/CTASection";
import Divider from "../components/Divider";
import FeatureSection from "../components/FeatureSection";
import Filler from "../components/Filler";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PoweredSection from "../components/PoweredSection";
import TestimonialSection from "../components/TestimonialSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NoteHaven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="mx-4 sm:mx-8 lg:mx-20 xl:mx-28">
          <Navbar active={"home"} />
          <Divider />
          <HeroSection />
          <Filler height="h-24" />
          <div
            id="full-width-container"
            className="-mx-4 sm:-mx-8 lg:-mx-20 xl:-mx-28"
          >
            <PoweredSection />
          </div>
          <Filler height="h-48" />
          <FeatureSection />
          <Filler height="h-48" />
          <div
            id="full-width-container"
            className="-mx-4 sm:-mx-8 lg:-mx-20 xl:-mx-28"
          >
            <CTASection
              heading="Excited? Get started today!"
              buttonText="Get started"
              backgroundImage="bg-custom-3"
            />
          </div>
          <Filler height="h-48" />
          <GetStarted />
          <Filler height="h-48" />
          <TestimonialSection />
          <Filler height="h-48" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
