import Head from "next/head";
import Divider from "../../components/Divider";
import Filler from "../../components/Filler";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { prisma } from "../../server/db/client";

export async function getServerSideProps(context: any) {
  const noteid = context.params.noteid;
  console.log("[SSR] /note/[noteid].tsx: noteid: ", noteid);
  try {
    const checkNote = await prisma.note.findUnique({
      where: {
        id: noteid,
      },
    });
    if (!checkNote) {
      throw new Error("Invalid note");
    }

    return {
      props: {
        note: JSON.parse(JSON.stringify(checkNote)),
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/browse",
      },
      props: {},
    };
  }
}

const Note = (props: { note: any }) => {
  const note = props.note;
  return (
    <>
      <Head>
        <title>{note.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active={""} />
          <Divider />
          <Filler height="h-16" />
          <div></div>
          <Filler height="h-40" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Note;
