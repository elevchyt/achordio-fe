import "./styles.scss";
import Lottie from "lottie-react";
import spinnerRedAnimation from "assets/lottie/spinner.json";

type PropsType = {
  isLoading: boolean;
};

const Spinner = (props: PropsType) => {
  return (
    <div className="Spinner">
      {props.isLoading ? (
        <Lottie animationData={spinnerRedAnimation} loop={true} />
      ) : null}
    </div>
  );
};

export default Spinner;
