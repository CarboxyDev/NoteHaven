import Head from "next/head";
import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import Filler from "../components/Filler";
import Navbar from "../components/Navbar";
import ReactSearchBox from "react-search-box";
import NoteCard from "../components/NoteCard";
import Footer from "../components/Footer";

export default function Browse() {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/note?count=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch notes");
        return res.json();
      })
      .then((notesData) => {
        setNotes(notesData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Browse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active={"notes"} />
          <Divider />
          <Filler height="h-16" />
          <h2
            id="browse-notes"
            className="mb-20 mr-auto font-secondary text-5xl font-semibold text-gray-700"
          >
            Browse notes
          </h2>
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
            {notes.length > 0 &&
              notes.map((note: any) => {
                const imageUrl =
                  "https://" +
                  note.cid +
                  ".ipfs.w3s.link/" +
                  note.originalFileName;
                return (
                  <NoteCard
                    key={note.id}
                    title={note.title}
                    description={note.description}
                    price={note.price}
                    author={note.author}
                    cid={note.cid}
                  />
                );
              })}
          </div>
          <Filler height="h-48" />
          <Footer />
        </div>
      </main>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <div></div>
    </>
  );
}
