import { motion } from "framer-motion";
import "./styles.scss";

type PropsType = {
  type: "primary" | "secondary" | "primaryBig";
  text: string;
  isDisabled: boolean;
  functionality?: () => void;
};

const Button = (props: PropsType) => {
  const renderButton = () => {
    switch (props.type) {
      case "primary":
        return (
          <motion.button
            className={`Button__primary ${
              props.isDisabled ? "Button--disabled" : ""
            }`}
            whileHover={
              !props.isDisabled
                ? {
                    scale: 1.05,
                    boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            whileTap={
              !props.isDisabled
                ? {
                    scale: 1.0,
                    boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            transition={{ duration: 0.2 }}
            onClick={!props.isDisabled ? props.functionality : () => {}}
          >
            {props.text}
          </motion.button>
        );
      case "secondary":
        return (
          <motion.button
            className={`Button__secondary ${
              props.isDisabled ? "Button--disabled" : ""
            }`}
            whileHover={
              !props.isDisabled
                ? {
                    color: "#ffffff",
                    backgroundColor: "#fe3c3c",
                    scale: 1.05,
                    boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            whileTap={
              !props.isDisabled
                ? {
                    color: "#ffffff",
                    backgroundColor: "#fe3c3c",
                    borderColor: "#fe3c3c",
                    scale: 1.0,
                    boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            transition={{ duration: 0.2 }}
            onClick={!props.isDisabled ? props.functionality : () => {}}
          >
            {props.text}
          </motion.button>
        );
      case "primaryBig":
        return (
          <motion.button
            className={`Button__primaryBig ${
              props.isDisabled ? "Button--disabled" : ""
            }`}
            whileHover={
              !props.isDisabled
                ? {
                    scale: 1.05,
                    boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            whileTap={
              !props.isDisabled
                ? {
                    scale: 1.0,
                    boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
                  }
                : {}
            }
            transition={{ duration: 0.2 }}
            onClick={!props.isDisabled ? props.functionality : () => {}}
          >
            {props.text}
          </motion.button>
        );
    }
  };

  return <div className="Button">{renderButton()}</div>;
};

export default Button;
