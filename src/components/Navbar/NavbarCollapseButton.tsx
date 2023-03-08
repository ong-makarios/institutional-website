import React from "react";

const NavbarCollapseButton: React.FC = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-navbar"
      aria-controls="main-navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default NavbarCollapseButton;
