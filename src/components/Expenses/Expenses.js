import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filtered = props.item.filter(
    ele => {return ele.date.getFullYear().toString() === filteredYear
    });
  console.log(filtered);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filtered.map((expense) => {
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
      </Card>
    </div>
  );
};

export default Expenses;
