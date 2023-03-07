import React from "react";
import "./Navbar.scss";
import NavbarCollapseButton from "./NavbarCollapseButton";
import NavbarItems from "./NavbarItems";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-red-orange" role="navigation">
      <div className="container">
        <NavbarCollapseButton />
        <NavbarItems />
      </div>
    </nav>
  );
};

export default Navbar;
