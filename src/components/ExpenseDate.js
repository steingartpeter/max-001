import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //<nn>
  // Add helper contants to make JSX more readable
  //</nn>
  const month = props.date.toLocaleString("hu-HU", { month: "short" });
  const day = props.date.toLocaleString("hu-HU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
