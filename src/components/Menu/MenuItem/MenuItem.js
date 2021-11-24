import { useContext } from "react";
import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.css";
import CartContext from "../../../store/cart-context";
const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `₹${props.price.toFixed(2)}`;
  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    <li className={classes.menu}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MenuItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuItem;
