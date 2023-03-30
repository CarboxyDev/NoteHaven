import Link from "next/link";
import HamburgerDropdown from "./HamburgerDropdown";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

const Navbar = () => {
  const navItems = [
    { name: "Browse", link: "/browse" },
    { name: "Features", link: "/features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About us", link: "#about-us" },
  ];
  return (
    <>
      <div className="flex h-24 flex-row items-center sm:h-32">
        <div className="flex flex-row items-center gap-x-3">
          <Link href="/">
            <img src="/generic-logo-1.png" className="h-12 w-12" alt="logo" />
          </Link>
          <h2 className="text-lg font-semibold text-slate-700">NoteHaven</h2>
        </div>
        <div className="ml-16 hidden list-none flex-row items-center gap-x-9 lg:flex">
          {navItems.map((item) => {
            return (
              <li
                key={uuidv4()}
                className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-700"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="ml-auto flex flex-row gap-x-8">
          <div className="hidden items-center justify-center sm:flex">
            <Button size="md" variant="outline">
              Sign up
            </Button>
          </div>

          <div className="lg:hidden">
            <HamburgerDropdown navItems={navItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
