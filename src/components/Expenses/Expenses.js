import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from '../UI/Card'

const Expenses =(props) => {
  return (
    <Card className="expenses">
      {
        props.item.map((expense) => {
        const item = (
          <ExpenseItem
            id = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
        return item;
      })}
    </Card>
  );
}

export default Expenses;