import React, { useEffect, useState } from "react";

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
      <div className="px-16 pt-20">
        {notes.length > 0 &&
          notes.map((note: any) => {
            const imageUrl =
              "https://" + note.cid + ".ipfs.w3s.link/" + note.originalFileName;
            return (
              <div
                key={note.id}
                className="mb-4 rounded-lg bg-white p-4 shadow-md"
              >
                <h2 className="text-xl font-bold">{note.title}</h2>
                <p className="mt-4 text-gray-600">{note.description}</p>
                <img
                  alt="note-image"
                  className="h-50 w-72 object-contain"
                  src={imageUrl}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
