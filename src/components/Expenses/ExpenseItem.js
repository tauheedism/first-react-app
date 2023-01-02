import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title
  // let id = props.id;

  const deleteHandler = () => 
  {
    console.log('delete')
  }
  const eventHandler = () => {
      title = "updated";
      console.log('Updated!');
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <ExpenseDetails amount={props.amount} title={title} />
      <button onClick={eventHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;