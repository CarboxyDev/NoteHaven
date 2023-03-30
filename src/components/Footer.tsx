import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-6 py-12 sm:px-28">
        <div className="h-px bg-gray-200"></div>
        <div className="mt-10 flex flex-row items-center justify-center leading-6">
          <img
            src="/generic-logo-1.png"
            alt="brand-logo"
            className="h-8 w-8"
          ></img>
          <h3 className="ml-3 font-semibold text-slate-900">NoteHaven</h3>
          <span className="ml-2 rounded border border-gray-300 px-3 py-1 text-xs font-semibold tracking-wider text-gray-300 transition-colors delay-150 ease-in-out hover:border-emerald-400 hover:bg-emerald-400 hover:text-white">
            BETA
          </span>
        </div>
        <div className="mt-5 flex justify-center text-sm font-light leading-6 text-slate-500">
          © 2023 CarboxyDev Inc. All rights reserved.
        </div>
        <div className="mt-14 hidden list-none flex-row items-center justify-center gap-x-4 text-sm text-slate-600 sm:flex">
          <li className="rounded-md px-2 py-1  hover:bg-slate-50 hover:text-slate-700">
            <Link href="/">Home</Link>
          </li>
          <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
          <li className="rounded-md px-2 py-1 hover:bg-slate-50 hover:text-slate-700">
            <Link href="/notes">Notes</Link>
          </li>
          <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
          <li className="rounded-md px-2 py-1 hover:bg-slate-50 hover:text-slate-700">
            <Link href="/login">Login</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
