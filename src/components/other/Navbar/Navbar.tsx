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
  const [isUserOptionsMenuOpen, setIsUserOptionsMenuOpen] =
    useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserOptionsMenu = () => {
    setIsUserOptionsMenuOpen(!isUserOptionsMenuOpen);
  };

  const isMobileTest = false;

  const profileOptionVariants = {
    hover: { x: 4 },
    click: { x: 12 },
  };

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
              <div className="Navbar__profileContainer">
                <motion.svg
                  className="Navbar__profileOptionButton"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
                </motion.svg>
                <motion.svg
                  className="Navbar__profileOptionButton"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
                </motion.svg>
                <div className="Navbar__profileDetailsContainer">
                  <div className="Navbar__username">kwstakis2011</div>
                  <div className="Navbar__ratingContainer">
                    <svg
                      className="Navbar__ratingIcon"
                      width="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" />
                    </svg>
                    <div className="Navbar__rating">3.2/5</div>
                  </div>
                </div>
                <div className="Navbar__userAvatar">
                  <motion.svg
                    className="Navbar__optionsToggleIcon"
                    onClick={toggleUserOptionsMenu}
                    width="22"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileTap={{ y: 1 }}
                  >
                    <path d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z" />
                  </motion.svg>
                </div>
              </div>

              {/* profile options dropdown */}
              {isUserOptionsMenuOpen ? (
                <motion.div
                  className="Navbar__profileOptionsDropdown"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="Navbar__optionContainer"
                    variants={profileOptionVariants}
                    whileTap="click"
                    whileHover="hover"
                  >
                    <div className="Navbar__optionIcon">
                      <svg
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
                      </svg>
                    </div>
                    <div className="Navbar__optionText">
                      {t("NAVBAR.MY_PROFILE")}
                    </div>
                  </motion.div>
                  <div className="Navbar__optionsDivider"></div>
                  <motion.div
                    className="Navbar__optionContainer"
                    variants={profileOptionVariants}
                    whileTap="click"
                    whileHover="hover"
                  >
                    <div className="Navbar__optionIcon">
                      <svg
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.401-.615a.75.75 0 0 1 .85.174 9.792 9.792 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.381 1.381 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826 9.797 9.797 0 0 1-2.204 3.792.75.75 0 0 1-.848.175l-1.407-.617a1.38 1.38 0 0 0-1.926 1.114l-.169 1.526a.75.75 0 0 1-.572.647 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.168-1.524a1.382 1.382 0 0 0-1.926-1.11l-1.406.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.204-3.796.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.271-.826 9.793 9.793 0 0 1 2.204-3.792.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65c.717-.159 1.45-.243 2.201-.252ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                      </svg>
                    </div>
                    <div className="Navbar__optionText">
                      {t("NAVBAR.SETTINGS")}
                    </div>
                  </motion.div>
                  <div className="Navbar__optionsDivider"></div>
                  <motion.div
                    className="Navbar__optionContainer"
                    variants={profileOptionVariants}
                    whileTap="click"
                    whileHover="hover"
                  >
                    <div className="Navbar__optionIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 512 512"
                      >
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                      </svg>
                    </div>
                    <div className="Navbar__optionText">
                      {t("NAVBAR.LOGOUT")}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
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
