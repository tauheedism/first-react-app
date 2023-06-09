import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // let id = props.id;

  const deleteHandler = () => {
    console.log("delete");
  };
  const eventHandler = () => {
    setTitle("$100");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <ExpenseDetails amount={props.amount} title={title} />
      <button onClick={eventHandler}>Change Title</button>
      {/* <button onClick={deleteHandler}>Delete Expense</button> */}
    </Card>
  );
};

export default ExpenseItem;
