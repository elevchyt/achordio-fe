import React, { useContext, useState } from "react";
import "./styles.scss";
import Logo from "components/ui/Logo/Logo";
import LinkButton from "components/ui/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import Button from "components/ui/Button/Button";
import { useIsAuthenticated } from "react-auth-kit";
import Modal from "components/modals/Modal/Modal";
import { ModalContext } from "context/ModalContext";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { modalType, setModalType } = useContext(ModalContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobileTest = true;

  return (
    <div className={`Navbar ${isMobileTest ? "Navbar--mobile" : ""}`}>
      {!isMobileTest ? (
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
                <Button
                  type={"secondary"}
                  text={t("NAVBAR.CREATE")}
                  isDisabled={false}
                />
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
                    isDisabled={false}
                    functionality={() => {
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="Navbar__container">
          <div className="Navbar__logo">
            <Logo />
          </div>
          <motion.svg
            className="Navbar__mobileMenuButton"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="32px"
            onClick={toggleMobileMenu}
            initial={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.85, opacity: 0.4 }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </motion.svg>
          {isMobileMenuOpen ? (
            <nav className="Navbar__menuItemsContainer Navbar__menuItemsContainer--mobile">
              <ul
                className="Navbar__menuItem--mobile"
                onClick={toggleMobileMenu}
              >
                <LinkButton text={t("NAVBAR.SONGS")} link={"/songs"} />
              </ul>
              <ul
                className="Navbar__menuItem--mobile"
                onClick={toggleMobileMenu}
              >
                <LinkButton text={t("NAVBAR.ARTISTS")} link={"/artists"} />
              </ul>
              <ul
                className="Navbar__menuItem--mobile"
                onClick={toggleMobileMenu}
              >
                <LinkButton text={t("NAVBAR.NEWS")} link={"/news"} />
              </ul>
            </nav>
          ) : null}
          {isMobileMenuOpen ? (
            <div
              className="Navbar__mobileMenuBackdrop"
              onClick={toggleMobileMenu}
            ></div>
          ) : null}
        </div>
      )}
      {!isMobileTest ? <div className="Navbar__dividerHorizontal"></div> : null}

      {isOpen ? <Modal modalType={"login"} /> : null}
    </div>
  );
};

export default Navbar;
