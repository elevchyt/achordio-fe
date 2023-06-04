import "./styles.scss";
import logoImageUrl from "assets/imgs/achordio-logo.png";

const Logo = () => {
  return (
    <div
      className="Logo"
      style={{ backgroundImage: `url(${logoImageUrl})` }}
    ></div>
  );
};

export default Logo;
