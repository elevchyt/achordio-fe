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
        <div className="Modal">
          <div className="Modal__window">
            <div className="Modal__header">
              <div className="Modal__title">Σύνδεση</div>
              <motion.div
                className="Modal__closeButton"
                whileHover={{ rotate: "180deg" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="46px"
                >
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </motion.div>
            </div>

            <div className="Modal__body">
              Consectetur ex elit culpa voluptate tempor dolore officia mollit
              ullamco commodo mollit incididunt.
            </div>
          </div>

          <div className="Modal__backdrop"></div>
        </div>,
        document.getElementById("modal-portal")!
      )}
    </>
  );
};

export default Modal;
