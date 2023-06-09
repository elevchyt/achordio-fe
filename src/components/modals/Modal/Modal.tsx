import { ModalContext } from "context/ModalContext";
import "./styles.scss";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import LoginForm from "components/form/LoginForm/LoginForm";
import RegisterForm from "components/form/RegisterForm/RegisterForm";

// Modal type determines the modal's layout, sizing & functionality
type PropsType = {
  modalType:
    | "empty"
    | "login"
    | "register"
    | "rating"
    | "chartVersions"
    | "collection";
};

const Modal = (props: PropsType) => {
  const { t } = useTranslation();
  const title = useRef<string>("Title");
  const buttonText = useRef<string>("OK");
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { isButtonDisabled, setIsButtonDisabled } = useContext(ModalContext);
  const { modalType, setModalType } = useContext(ModalContext);
  const bodyComponentRef = useRef<any>();

  // On component mount, set the desired modal body type from the props
  useEffect(() => {
    setModalType(props.modalType);
  }, [props.modalType]);

  // All components that can be rendered inside the modal's body must contain a submit() function!
  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      bodyComponentRef.current.submit();
    }
  };

  const modalBodyRender = () => {
    switch (modalType) {
      case "login":
        title.current = t("MODAL_TITLES.CONNECT");
        buttonText.current = t("MODAL.CONNECT");
        return (
          <>
            <LoginForm ref={bodyComponentRef} />
          </>
        );
      case "register":
        title.current = t("MODAL_TITLES.REGISTER");
        buttonText.current = t("MODAL.REGISTER");
        return (
          <>
            <RegisterForm ref={bodyComponentRef} />
          </>
        );
      case "rating":
        title.current = t("MODAL_TITLES.RATING");
        return <div className="Modal__ratingContainer">Rating</div>;
      case "chartVersions":
        title.current = t("MODAL_TITLES.CHART_VERSIONS");
        return (
          <div className="Modal__chartVersionContainer">Chart Versions</div>
        );
      case "collection":
        title.current = t("MODAL_TITLES.COLLECTION");
        return <div className="Modal__collectionContainer">Collection</div>;
    }
  };

  return (
    <>
      {isOpen
        ? createPortal(
            <div className="Modal">
              <motion.div
                className="Modal__window"
                initial={{ y: "-100vh" }}
                animate={{ y: "0" }}
                transition={{ type: "spring", stiffness: 80, duration: 0.5 }}
              >
                {/* The modal's title and close button */}
                <div className="Modal__header">
                  <div className="Modal__title">{title.current}</div>
                  <motion.div
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="Modal__closeButton"
                    whileHover={{ fill: "#fe3c3c", rotate: "-4deg" }}
                    whileTap={{ fill: "#acacac", scale: 0.9, rotate: "7deg" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40px"
                    >
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                  </motion.div>
                </div>

                {/* The contents of the modal are placed here */}
                <div className="Modal__body">{modalBodyRender()}</div>

                {/* The main button of the modal */}
                <motion.div
                  className={`Modal__footerButton ${
                    isButtonDisabled ? "Modal__footerButton--disabled" : ""
                  }`}
                  onClick={handleButtonClick}
                >
                  <div className="Modal__buttonText">{buttonText.current}</div>
                </motion.div>
              </motion.div>
              <div
                className="Modal__backdrop"
                onClick={() => {
                  setIsOpen(false);
                }}
              ></div>
            </div>,
            document.getElementById("modal-portal")!
          )
        : null}
    </>
  );
};

export default Modal;
