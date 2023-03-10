import React from "react";
import { NavbarButtonProps } from "../../types/props";
import NavbarButton from "./NavbarButton";

const buttons: Array<NavbarButtonProps> = [{ name: "Home", path: "/" }];

const NavbarItems: React.FC = () => {
  return (
    <div className="collapse navbar-collapse" id="main-navbar">
      <ul className="navbar-nav">
        {buttons.map((button) => (
          <NavbarButton
            name={button.name}
            path={button.path}
            key={button.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
