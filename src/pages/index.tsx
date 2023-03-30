import { type NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NoteHaven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active={"home"} />
          <HeroSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
