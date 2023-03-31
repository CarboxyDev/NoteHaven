import { LinkIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import Divider from "../../components/Divider";
import Filler from "../../components/Filler";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { prisma } from "../../server/db/client";
import { useState } from "react";
import { cn } from "../../utils/misc";

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

    let author = await prisma.user.findUnique({
      where: {
        id: checkNote.authorId,
      },
    });

    if (!author) {
      throw new Error("Invalid author");
    }
    if (author) {
      author.password = "";
    }

    console.log(checkNote);
    console.log(author);
    return {
      props: {
        note: JSON.parse(JSON.stringify(checkNote)),
        author: JSON.parse(JSON.stringify(author)),
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

const Note = (props: { note: any; author: any }) => {
  const note = props.note;
  const author = props.author;
  const [favorite, setFavorite] = useState(false);

  const favoriteEvent = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <Head>
        <title>{note.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active={"notes"} />
          <Divider />
          <Filler height="h-16" />
          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-4 flex flex-col rounded-2xl border border-gray-200 bg-white px-18 py-10 shadow-sm">
              <h2
                id="note-title"
                className="mr-auto font-secondary text-5xl font-semibold leading-[60px] text-gray-700"
              >
                {note.title}
              </h2>

              <div className="mb-16 mt-16">
                <h3 className="text-xl font-semibold text-gray-600">
                  Description
                </h3>
                <p className="mr-16 mt-6 text-gray-500">{note.description}</p>
              </div>
              <h3 className="mb-6 text-xl font-semibold text-gray-600">
                Note attachment
              </h3>
              <div className="flex flex-row items-center gap-4 rounded-xl border border-yellow-300/30 bg-yellow-300/20 px-6 py-5 shadow-sm transition-colors delay-200 duration-300 ease-in-out hover:border-yellow-300/40 hover:bg-yellow-300/30">
                <LinkIcon className="h-10 w-10 text-yellow-400/80" />
                <Link
                  href={`https://${note.cid}.ipfs.dweb.link`}
                  target="_blank"
                >
                  <h3 className="break-all font-medium text-gray-700">
                    {note.cid.slice(0, 16)}
                    ...
                    {note.cid.slice(-16)}
                  </h3>
                </Link>
              </div>
            </div>
            <div className="col-span-2 flex flex-col rounded-2xl border border-gray-200 bg-white px-12 py-10 shadow-sm ">
              <div className="mb-12 flex items-center justify-center">
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${author.name}&size=100&radius=50`}
                  alt="author-image"
                  className="h-24 w-24 rounded-full"
                />
              </div>
              <Divider />
              <div className="my-8 text-lg">
                <p>
                  <span className="font-semibold text-gray-600">Author: </span>
                  <span className="text-gray-500">{author.name}</span>
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-gray-600">Price: </span>
                  <span className="text-gray-500">
                    {note.price === 0 ? "Free" : note.price}
                  </span>
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-gray-600">Upload: </span>
                  <span className="text-gray-500">
                    {note.createdAt.slice(0, 10)}
                  </span>
                </p>
              </div>
              <Divider />
              <div className="mt-8 w-full">
                <button
                  className={cn(
                    "duration-400 flex w-full flex-row items-center justify-center rounded-lg py-3 font-secondary text-lg font-medium text-white transition-colors delay-200 ease-in hover:bg-primary-600 active:scale-95",
                    favorite ? "bg-gray-600" : "bg-primary"
                  )}
                  onClick={favoriteEvent}
                >
                  {favorite ? "Unfavorite" : "Favorite"}
                </button>
              </div>
            </div>
          </div>
          <Filler height="h-48" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Note;
