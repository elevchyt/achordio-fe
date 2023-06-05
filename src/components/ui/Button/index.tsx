import { motion } from "framer-motion";
import "./styles.scss";

type PropsType = {
  type: "primary" | "secondary";
  text: string;
};

const Button = (props: PropsType) => {
  return (
    <div className="Button">
      {props.type == "primary" ? (
        <motion.button
          className="Button__primary"
          whileHover={{ color: "#fe3c3c", backgroundColor: "#ffffff" }}
          transition={{ duration: 0.2 }}
        >
          {props.text}
        </motion.button>
      ) : (
        <motion.button
          className="Button__secondary"
          whileHover={{ color: "#ffffff", backgroundColor: "#fe3c3c" }}
          transition={{ duration: 0.2 }}
        >
          {props.text}
        </motion.button>
      )}
    </div>
  );
};

export default Button;
