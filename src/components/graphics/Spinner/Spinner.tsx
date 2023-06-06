import "./styles.scss";
import Lottie from "lottie-react";
import spinnerRedAnimation from "assets/lottie/spinner.json";

const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="Spinner__backdrop"></div>
      <Lottie animationData={spinnerRedAnimation} loop={true} />
    </div>
  );
};

export default Spinner;
