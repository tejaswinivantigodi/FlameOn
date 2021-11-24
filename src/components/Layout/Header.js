import { Fragment } from "react";
import classes from "./Header.module.css";
import resImage from "../../Assets/restaurant.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> FlameOn </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={resImage} alt="Restaurant" />
      </div>
    </Fragment>
  );
};
export default Header;
