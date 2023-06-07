import "./styles.scss";
import logoImageUrl from "assets/imgs/achordio-logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      whileTap={{ y: 4, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
      className="Logo"
      style={{ backgroundImage: `url(${logoImageUrl})` }}
      onClick={() => {
        navigate("/");
      }}
    ></motion.div>
  );
};

export default Logo;
