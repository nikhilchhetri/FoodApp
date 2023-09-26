import React from "react";
import classes from "./HeaderCartButton.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
const HeaderCartButton = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <PiShoppingCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
