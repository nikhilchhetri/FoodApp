import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: "amount" + id,
          type: "text",
          min: "1",
          max: "2",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ADD</button>
      {!amountIsValid && <p>Enter valid number</p>}
    </form>
  );
};

export default MealItemForm;
