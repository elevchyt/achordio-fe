import React from "react";
import Navbar from "./Navbar";

const NavbarVM = () => {
  const openAuthModal = () => {
    console.log("OPEN AUTH MODAL!");
  };

  return <Navbar openAuthModal={openAuthModal} />;
};

export default NavbarVM;
