import { motion } from "framer-motion";
import "./styles.scss";
import { redirect } from "utils/genericUtils";

type PropsType = {
  text: string;
  link: string;
};

const LinkButton = (props: PropsType) => {
  const linkVariants = {
    hover: { y: -4, color: "#fe3c3c" },
    click: { y: 4, scale: 0.8 },
  };

  return (
    <motion.li
      className="LinkButton"
      onClick={() => {
        redirect(props.link, 500);
      }}
      whileTap="click"
      whileHover="hover"
    >
      <motion.a
        className="LinkButton__link"
        href={props.link}
        variants={linkVariants}
      >
        {props.text}
      </motion.a>
    </motion.li>
  );
};

export default LinkButton;
