import { motion } from "framer-motion";
import "./styles.scss";

type PropsType = {
  type: "primary" | "secondary" | "primaryBig";
  text: string;
  functionality?: () => void;
};

const Button = (props: PropsType) => {
  const renderButton = () => {
    switch (props.type) {
      case "primary":
        return (
          <motion.button
            className="Button__primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 1.0,
              boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            onClick={props.functionality}
          >
            {props.text}
          </motion.button>
        );
      case "secondary":
        return (
          <motion.button
            className="Button__secondary"
            whileHover={{
              color: "#ffffff",
              backgroundColor: "#fe3c3c",
              scale: 1.05,
              boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              color: "#ffffff",
              backgroundColor: "#fe3c3c",
              borderColor: "#fe3c3c",
              scale: 1.0,
              boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            onClick={props.functionality}
          >
            {props.text}
          </motion.button>
        );
      case "primaryBig":
        return (
          <motion.button
            className="Button__primaryBig"
            whileHover={{
              scale: 1.05,
              boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 1.0,
              boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.2 }}
            onClick={props.functionality}
          >
            {props.text}
          </motion.button>
        );
    }
  };

  return <div className="Button">{renderButton()}</div>;
};

export default Button;
