import { motion } from "framer-motion";
import "./styles.scss";
import { NavLink } from "react-router-dom";
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
      variants={linkVariants}
      whileTap="click"
      whileHover="hover"
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? "LinkButton__link--active" : "LinkButton__link"
        }
        to={props.link}
      >
        {props.text}
      </NavLink>
    </motion.li>
  );
};

export default LinkButton;
