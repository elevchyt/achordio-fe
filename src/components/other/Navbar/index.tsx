import React from "react";
import "./styles.scss";
import Logo from "components/ui/Logo";
import LinkButton from "components/ui/LinkButton";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <Logo />
        </div>
        <nav className="Navbar__menuItemsContainer">
          <ul className="Navbar__menuItem">
            <LinkButton text={t("NAVBAR.SONGS")} link={"/songs"} />
          </ul>
          <ul className="Navbar__menuItem">
            <LinkButton text={t("NAVBAR.ARTISTS")} link={"/artists"} />
          </ul>
        </nav>
        {/* <div className="Navbar__authContainer"></div>
        <div className="Navbar__profileContainer"></div> */}
      </div>
      <div className="Navbar__divider"></div>
    </div>
  );
};

export default Navbar;
