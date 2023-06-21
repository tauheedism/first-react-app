import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // if (props.items.length === 1) {
  //   return [
  //     props.items.map((expense) => {
  //       const item = (
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       );
  //       return item;
  //     }),
  //     <h4 className="expenses-list__fallback">Add more Expenses</h4>,
  //   ];
  // }

  if (props.items.length === 0) {
    return <h4 className="expenses-list__fallback">Found No Expenses</h4>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        const item = (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
        return item;
      })}
    </ul>
  );
};

export default ExpensesList;
