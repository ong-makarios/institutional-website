import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  href: string;
  current: boolean;
};

const composeClassName = (...classes: Array<string>) => classes.join(" ");

const NavbarButton: React.FC<Props> = ({ name, href, current }) => {
  return (
    <Disclosure>
      <Disclosure.Button
        as="button"
        key={name}
        className={composeClassName(
          current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        )}
        aria-current={current ? "page" : undefined}
      >
        <NavLink to={href}>{name}</NavLink>
      </Disclosure.Button>
    </Disclosure>
  );
};

export default NavbarButton;
