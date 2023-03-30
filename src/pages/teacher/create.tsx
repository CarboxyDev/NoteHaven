// @ts-ignore: Object is possibly 'null'.
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { toastError, toastSuccess } from "../../utils/misc";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async () => {
    const files = fileInputRef.current?.files;
    if (files?.length === 0) {
      return;
    }
    const formData: any = new FormData();
    formData.append("file", files![0] as Blob);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch((error) => {
        toastError(error.message);
        console.error(error);
      });
  };

  return (
    <div className="px-16 pt-20">
      <input
        type="file"
        onChange={uploadFile}
        ref={fileInputRef}
        name=""
        id=""
      />
      <button
        className="rounded-lg bg-blue-500 px-6 py-4 text-white active:scale-95"
        onClick={uploadFile}
      >
        Upload file
      </button>
      <ToastContainer />
    </div>
  );
}
