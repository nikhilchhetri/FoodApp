import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
import CartContext from "../../store/cart-context";
const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <PiShoppingCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
