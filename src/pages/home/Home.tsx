import "./styles.scss";
import { motion, useAnimate } from "framer-motion";
import graphicsHomeUrl from "assets/imgs/graphics-home.png";
import Button from "components/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [animateRef, animate] = useAnimate();

  const isMobileTest = false;

  // Fade out the current route before navigating to the next route
  const fadeAndNavigate = (route: string, durationSecs: number) => {
    const extraDelaySecs = 0.5;
    animate(animateRef.current, { opacity: 0 }, { duration: durationSecs });
    setTimeout(() => {
      navigate(route);
    }, (durationSecs + extraDelaySecs) * 1000);
  };

  return (
    <div className="Home" ref={animateRef}>
      <div
        className={`Home__headingContainer ${
          isMobileTest ? "Home__headingContainer--mobile" : ""
        }`}
      >
        <motion.h1
          className={`Home__title ${isMobileTest ? "Home__title--mobile" : ""}`}
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
          className={`Home__subtitle ${
            isMobileTest ? "Home__subtitle--mobile" : ""
          }`}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{
            delay: 2.6,
            type: "spring",
            bounce: 0.5,
            stiffness: 120,
          }}
        >
          {t("HOME.SUBTITLE")}
        </motion.h2>
      </div>
      <motion.div
        className={`Home__buttonSong ${
          isMobileTest ? "Home__buttonSong--mobile" : ""
        }`}
        initial={{ opacity: 0, scale: 1.2, visibility: "hidden" }}
        animate={{ opacity: 1, scale: 1, visibility: "visible" }}
        transition={{ delay: 4, type: "spring", bounce: 0.5, stiffness: 120 }}
      >
        <Button
          type={"primaryBig"}
          text={t("HOME.FIND_A_SONG")}
          isDisabled={false}
          functionality={() => {
            fadeAndNavigate("/songs", 1);
          }}
        />
      </motion.div>

      <motion.div
        className="Home__graphics"
        style={{ backgroundImage: `url(${graphicsHomeUrl})` }}
        initial={{ opacity: 0, scale: 1.1, y: "100vh" }}
        animate={{ opacity: 1, scale: 1, y: "0vh" }}
        transition={{
          delay: 0.2,
          type: "spring",
          bounce: 0.5,
          stiffness: 120,
          damping: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Home;
