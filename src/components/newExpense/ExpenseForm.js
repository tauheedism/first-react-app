import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            onChange={titleHandler}
            type="text"
            name="title"
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            onChange={dateHandler}
            type="date"
            name="date"
            min="2019-01-19"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
