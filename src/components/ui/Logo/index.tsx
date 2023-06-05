import "./styles.scss";
import logoImageUrl from "assets/imgs/achordio-logo.png";
import { motion } from "framer-motion";
import { redirect } from "utils/genericUtils";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      whileTap={{ y: 4, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
      className="Logo"
      style={{ backgroundImage: `url(${logoImageUrl})` }}
      onClick={() => {
        redirect("/");
      }}
    ></motion.div>
  );
};

export default Logo;
