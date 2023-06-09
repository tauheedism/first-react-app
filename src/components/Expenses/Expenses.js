import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  const [filteredYear, setSelectedYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filtered = props.item.filter(
    (ele) => ele.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items = {filtered}/>
      </Card>
    </div>
  );
};

export default Expenses;