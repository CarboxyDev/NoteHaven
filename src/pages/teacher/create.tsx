import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cn, sleep, toastError, toastSuccess } from "../../utils/misc";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Divider from "../../components/Divider";
import Filler from "../../components/Filler";
import Footer from "../../components/Footer";

export default function Create() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const uploadButtonRef = useRef<HTMLButtonElement>(null);

  const uploadFile = async () => {
    const files = fileInputRef.current?.files;
    if (files?.length === 0) {
      toastError("Please select a file");
      return;
    }
    const formData: any = new FormData();
    formData.append("file", files![0] as Blob);
    formData.append("title", titleInputRef.current?.value);
    formData.append("description", descriptionInputRef.current?.value);

    try {
      if (uploadButtonRef.current) {
        uploadButtonRef.current.disabled = true;
      }
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        toastSuccess(data.message);
        if (uploadButtonRef.current !== null) {
          uploadButtonRef.current.disabled = true;
        }

        await sleep(3000);

        window.location.href = "/teacher";
      } else {
        const error = await response.json();
        toastError(error.message);
        await sleep(2000);

        if (uploadButtonRef.current) {
          uploadButtonRef.current.disabled = false;
        }
      }
    } catch (error: any) {
      if (uploadButtonRef.current) {
        uploadButtonRef.current.disabled = false;
      }
      toastError(error);
    }
  };

  return (
    <>
      <Head>
        <title>Create note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active={"x"} />
          <Divider />
          <Filler height="h-16" />
          <div>
            <h2
              id="create-note"
              className="mb-10 mr-auto font-secondary text-5xl font-semibold text-gray-700"
            >
              Create note
            </h2>
            <div className="grid grid-cols-7 gap-12">
              <div className="col-span-4 flex flex-col rounded-2xl border border-gray-200 bg-white px-12 py-16 shadow-sm">
                <div className="mb-8 flex flex-col">
                  <span className="mb-4 ml-2 font-semibold text-gray-600">
                    Note title
                  </span>
                  <input
                    className="rounded-xl border border-gray-300 px-3 py-3 text-gray-500"
                    type="text"
                    name="title"
                    id="title"
                    ref={titleInputRef}
                  />
                </div>
                <div className="mb-8 flex flex-col">
                  <span className="mb-4 ml-2 font-semibold text-gray-600">
                    Note description
                  </span>
                  <textarea
                    className="min-h-[100px] rounded-xl border border-gray-300 px-3 py-3 text-gray-500"
                    name="description"
                    id="description"
                    ref={descriptionInputRef}
                  />
                </div>
                <div>
                  <span className="ml-2 font-semibold text-gray-600 ">
                    Attach note{" "}
                    <span className="font-normal text-gray-400">
                      (Max. 20MB)
                    </span>
                  </span>
                  <div className="mt-4">
                    <input
                      className={cn(
                        "block w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-3 text-gray-500 focus:outline-none",
                        "file:mr-2 file:rounded-2xl file:border-none file:bg-primary-300 file:bg-transparent file:px-2 file:font-medium file:text-gray-600"
                      )}
                      type="file"
                      onChange={uploadFile}
                      ref={fileInputRef}
                      name="note-file"
                      id="upload-note"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <button
                    className="w-full rounded-lg bg-primary px-10 py-4 font-semibold text-white transition-colors delay-200 duration-300 ease-out hover:bg-primary/80 active:scale-95 disabled:bg-primary/50"
                    onClick={uploadFile}
                    ref={uploadButtonRef}
                  >
                    Create note
                  </button>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-12 py-10 shadow-sm">
                <div className="magic-text font-secondary text-4xl font-semibold leading-relaxed">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <Filler height="h-48" />
          <Footer />
          <ToastContainer />
        </div>
      </main>
    </>
    // <div className="px-16 pt-20">

    // </div>
  );
}
