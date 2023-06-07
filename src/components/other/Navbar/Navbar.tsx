import React from "react";
import "./styles.scss";
import Logo from "components/ui/Logo/Logo";
import LinkButton from "components/ui/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import Button from "components/ui/Button/Button";
import { useIsAuthenticated } from "react-auth-kit";

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
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

        {/* show profile info if authenticated */}
        {isAuthenticated() ? (
          <div className="Navbar__authenticatedContainer">
            <div className="Navbar__authButton">
              <Button type={"secondary"} text={t("NAVBAR.CREATE")} />
            </div>
            <div className="Navbar__dividerVertical"></div>
            <div className="Navbar__profileContainer"></div>
          </div>
        ) : (
          <div className="Navbar__unauthenticatedContainer">
            <div className="Navbar__authButtonsContainer">
              <div className="Navbar__authButton">
                <Button type={"secondary"} text={t("NAVBAR.CONNECT")} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Navbar__dividerHorizontal"></div>
    </div>
  );
};

export default Navbar;
