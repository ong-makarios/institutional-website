import React from "react";
import { Link } from "react-router-dom";
import "./NavbarButton.scss";
import { NavbarButtonProps } from "../../types/props";

const NavbarButton: React.FC<NavbarButtonProps> = ({ name, path }) => {
  return (
    <li className="nav-item navbar-item" key={name}>
      <Link to={path} className="nav-link t-white-alabaster">
        {name}
      </Link>
    </li>
  );
};

export default NavbarButton;
