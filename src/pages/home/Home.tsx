import Patterns from "components/graphics/Patterns/Patterns";
import "./styles.scss";
import { motion } from "framer-motion";
import graphicsHomeUrl from "assets/imgs/graphics-home.png";
import Button from "components/ui/Button/Button";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className="Home__headingContainer">
        <motion.h1
          className="Home__title"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            type: "spring",
            bounce: 0.3,
            stiffness: 50,
          }}
        >
          ACHORDIO
        </motion.h1>
        <motion.h2
          className="Home__subtitle"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.6, type: "spring", bounce: 0.5, stiffness: 120 }}
        >
          {t("HOME.SUBTITLE")}
        </motion.h2>
      </div>
      <motion.div
        className="Home__buttonSong"
        initial={{ opacity: 0, scale: 1.2, visibility: "hidden" }}
        animate={{ opacity: 1, scale: 1, visibility: "visible" }}
        transition={{ delay: 4, type: "spring", bounce: 0.5, stiffness: 120 }}
      >
        <Button type={"primaryBig"} text={t("HOME.FIND_A_SONG")} />
      </motion.div>

      <Patterns />
      <motion.div
        className="Home__graphics"
        style={{ backgroundImage: `url(${graphicsHomeUrl})` }}
        initial={{ opacity: 0, scale: 1.1, y: "100vh" }}
        animate={{ opacity: 1, scale: 1, y: "0vh"  }}
        // transition={{ delay: 0.2, ease: "linear", duration: 0.2 }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.5, stiffness: 120, damping: 20 }}
      ></motion.div>
    </div>
  );
};

export default Home;
