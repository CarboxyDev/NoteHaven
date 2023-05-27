import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sleep } from "../utils/misc";
import { toastError, toastSuccess } from "../utils/misc";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitRef = useRef<HTMLButtonElement>(null);

  const login = async (e: any) => {
    e.preventDefault();
    if (submitRef.current) {
      submitRef.current.disabled = true;
    }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        toastSuccess(data.message);

        await sleep(2000);
        if (submitRef.current) {
          submitRef.current.disabled = false;
        }

        if (data.loginAs == "teacher") {
          router.push("/teacher");
        } else if (data.loginAs == "student") {
          router.push("/student");
        }
      } else {
        const error = await response.json();
        toastError(error.message);
        await sleep(2000);

        if (submitRef.current) {
          submitRef.current.disabled = false;
        }
      }
    } catch (error: any) {
      if (submitRef.current) {
        submitRef.current.disabled = false;
      }
      toastError(error.message);
    }
  };

  return (
    <>
      <div className="min-w-[360px] rounded-2xl border border-gray-200 bg-white px-8 py-16 shadow-sm sm:min-w-[440px] sm:px-12 xl:min-w-[480px]">
        <div className="flex flex-col">
          <p className="font-medium text-gray-600">Email address</p>
          <input
            type="email"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary focus:invalid:outline-red-400"
            required
            autoComplete="on"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col">
          <p className="font-medium text-gray-600">Password</p>
          <input
            type="password"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mt-8 h-12 w-full">
          <button
            className="flex h-full w-full items-center justify-center rounded-lg bg-primary font-semibold text-white transition-colors delay-100 ease-in hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-opacity-50"
            onClick={(e) => login(e)}
            ref={submitRef}
          >
            Sign in
          </button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default LoginForm;
