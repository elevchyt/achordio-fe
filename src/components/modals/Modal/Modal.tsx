import "./styles.scss";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

// Modal type determines the modal's layout, sizing & functionality
type PropsType = {
  modalType: "authentication" | "rating" | "chartVersions" | "collection";
  buttonText: string;
};

const Modal = (props: PropsType) => {
  return (
    <>
      {createPortal(
        <div className="Modal"></div>,
        document.getElementById("modal-portal")!
      )}
    </>
  );
};

export default Modal;
