import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setbuttonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const quantityOfCartItems = cartCtx.items.reduce((curQuantity, item) => {
    return curQuantity + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : " "
  }`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbuttonIsHighlighted(true);
    const timer = setTimeout(() => {
      setbuttonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items.length]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Checkout Already</span>
      <span className={classes.badge}>{quantityOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
