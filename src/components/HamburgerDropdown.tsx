import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import type { HamburgerDropdownProps } from "../types/props";
import { v4 as uuidv4 } from "uuid";

// TODO: Animate the hamburger menu icon when opening or closing the dropdown
// TODO: Animate the Dropdown Content for entry and exit

const HamburgerDropdown = (props: HamburgerDropdownProps) => {
  const { navItems } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        <RadixDropdownMenu.Trigger className="h-12 w-12 text-gray-600">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content
            collisionPadding={{ right: 16 }}
            className="mt-1 flex max-w-xs flex-col rounded-2xl bg-neutral-800 px-5 py-3 shadow-md"
          >
            {navItems.map((item: { name: string; link: string }) => {
              return (
                <span
                  key={uuidv4()}
                  className="my-1 flex flex-col items-center justify-center self-start"
                >
                  <RadixDropdownMenu.Item className="rounded-md px-2 py-2 font-medium text-gray-100 hover:bg-neutral-700">
                    <Link href={item.link}>{item.name}</Link>
                  </RadixDropdownMenu.Item>
                </span>
              );
            })}
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </>
  );
};

export default HamburgerDropdown;
