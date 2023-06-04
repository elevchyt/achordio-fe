import React from "react";
import "./styles.scss";
import Logo from "components/ui/Logo";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <Logo />
        </div>
        <div className="Navbar__menuItemsContainer">
          <div className="Navbar__menuItem"></div>
          <div className="Navbar__menuItem"></div>
          <div className="Navbar__menuItem"></div>
        </div>
        <div className="Navbar__authContainer"></div>
        <div className="Navbar__profileContainer"></div>
      </div>
      <div className="Navbar__divider"></div>
    </div>
  );
};

export default Navbar;
