import Link from "next/link";
import HamburgerDropdown from "./HamburgerDropdown";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { cn } from "../utils/misc";

interface NavbarProps {
  active: String;
  CTAButton?: any;
}

const Navbar = (props: NavbarProps) => {
  const { active, CTAButton } = props;
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Notes", link: "/browse" },
    { name: "Login", link: "/login" },
    { name: "Testimonials", link: "/#testimonials" },
  ];

  return (
    <>
      <div className="flex h-24 flex-row items-center sm:h-32">
        <div className="flex flex-row items-center gap-x-3">
          <Link href="/">
            <img src="/generic-logo-1.png" className="h-12 w-12" alt="logo" />
          </Link>
          <h2 className="font-secondary text-lg font-semibold text-slate-800">
            NoteHaven
            <span className="ml-2 rounded border border-gray-300 px-3 py-1 text-xs font-semibold tracking-wider text-gray-300 transition-colors delay-150 ease-in-out hover:border-emerald-400 hover:bg-emerald-400 hover:text-white">
              BETA
            </span>
          </h2>
        </div>
        <div className="ml-16 hidden list-none flex-row items-center gap-x-4 lg:flex">
          {navItems.map((item) => {
            return (
              <Link href={item.link} scroll={false}>
                <li
                  key={uuidv4()}
                  className={cn(
                    "rounded-md px-5 py-3 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-700",
                    active.toLowerCase() == item.name.toLowerCase()
                      ? "font-semibold text-slate-700"
                      : ""
                  )}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </div>
        <div className="ml-auto flex flex-row gap-x-6">
          <div className="hidden items-center justify-center sm:flex">
            {!CTAButton && (
              <Link href="/teacher">
                <Button size="md" variant="outline-neutral">
                  Share notes
                </Button>
              </Link>
            )}
            {CTAButton && (
              <Link href={CTAButton.link}>
                <Button size="md" variant="outline-neutral">
                  {CTAButton.text}
                </Button>
              </Link>
            )}
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
