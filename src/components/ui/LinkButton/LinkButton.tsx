import { motion } from "framer-motion";
import "./styles.scss";
import { Link } from "react-router-dom";
import { redirect } from "utils/genericUtils";
import { useNavigate } from "react-router-dom";

type PropsType = {
  text: string;
  link: string;
};

const LinkButton = (props: PropsType) => {
  const navigate = useNavigate();

  const linkVariants = {
    hover: { y: -4, color: "#fe3c3c" },
    click: { y: 4, scale: 0.8 },
  };

  return (
    <motion.li
      className="LinkButton"
      onClick={() => {
        navigate(props.link);
      }}
      whileTap="click"
      whileHover="hover"
    >
      <motion.a className="LinkButton__link" variants={linkVariants}>
        {props.text}
      </motion.a>
    </motion.li>
  );
};

export default LinkButton;
