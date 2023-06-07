import { motion } from "framer-motion";
import "./styles.scss";

type PropsType = {
  type: "primary" | "secondary";
  text: string;
  functionality?: () => void;
};

const Button = (props: PropsType) => {
  return (
    <div className="Button">
      {props.type === "primary" ? (
        <motion.button
          className="Button__primary"
          whileHover={{
            color: "#fe3c3c",
            backgroundColor: "#ffffff",
            scale: 1.05,
            boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{
            color: "#fe3c3c",
            backgroundColor: "#ebebeb",
            borderColor: "#fe3c3c",
            scale: 1.0,
            boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.2 }}
          onClick={props.functionality}
        >
          {props.text}
        </motion.button>
      ) : (
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
      )}
    </div>
  );
};

export default Button;
