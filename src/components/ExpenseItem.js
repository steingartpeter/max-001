import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //console.log(props);

  return (
    <main className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.expense.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </main>
  );
}

export default ExpenseItem;
