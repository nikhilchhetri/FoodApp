import React from "react";
import mealImage from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodApp</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meal on table" />
      </div>
    </>
  );
};

export default Header;
