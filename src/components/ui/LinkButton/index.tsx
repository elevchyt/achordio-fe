import { motion } from "framer-motion";
import "./styles.scss";

type PropsType = {
  text: string;
  link: string;
};

const LinkButton = (props: PropsType) => {
  const redirect = () => {
    window.location.href = props.link;
  };

  const linkVariants = {
    hover: { y: -4, color: "#fe3c3c" },
  };

  return (
    <motion.li className="LinkButton" onClick={redirect} whileHover="hover">
      <motion.a
        className="LinkButton__link"
        href={props.link}
        variants={linkVariants}
        transition={{ type: "spring", stiffness: 320 }}
      >
        {props.text}
      </motion.a>
    </motion.li>
  );
};

export default LinkButton;
