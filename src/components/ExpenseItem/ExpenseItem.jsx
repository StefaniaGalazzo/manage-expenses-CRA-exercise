import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitile] = useState(props.title);

  const clickHandler = () => {
    setTitile("Updated!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">{props.amount}€ </div>
      </div>
      {/* <button className="btn-update" onClick={clickHandler}>Update!</button> */}
    </Card>
  );
};

export default ExpenseItem;
