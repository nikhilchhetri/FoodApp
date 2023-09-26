import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
