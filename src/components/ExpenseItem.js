import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 21);
  const expenseTitle = "Car insurance - 2";
  const expemnseAMount = 299.99;
  console.log(props);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <main className="expense-item">
      <div className="expense-item__date">
        {props.item.date.toLocaleString()}
      </div>
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </main>
  );
}

export default ExpenseItem;
