import patternsImageUrl from "assets/imgs/patterns.png";
import "./styles.scss";

const Patterns = () => {
  return (
    <div
      className="Patterns"
      style={{ backgroundImage: `url(${patternsImageUrl})` }}
    ></div>
  );
};

export default Patterns;
