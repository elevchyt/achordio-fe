import React from "react";
import "./styles.scss";
import Logo from "components/ui/Logo/Logo";
import LinkButton from "components/ui/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import Button from "components/ui/Button/Button";
import { useIsAuthenticated } from "react-auth-kit";
import Modal from "components/modals/Modal/Modal";

type PropsType = {
  openAuthModal: () => void;
};

const Navbar = (props: PropsType) => {
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
          <ul className="Navbar__menuItem">
            <LinkButton text={t("NAVBAR.NEWS")} link={"/news"} />
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
                <Button
                  type={"secondary"}
                  text={t("NAVBAR.CONNECT")}
                  functionality={props.openAuthModal}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Navbar__dividerHorizontal"></div>

      {/* <Modal modalType={"authentication"} buttonText={"Submit"} /> */}
    </div>
  );
};

export default Navbar;
