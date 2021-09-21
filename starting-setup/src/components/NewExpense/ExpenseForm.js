import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [hideForm, setHideForm] = useState(true);

  const toggleForm = () => {
    setHideForm(!hideForm);
  };

  const titleChangeHandler = (ev) => {
    setEnteredTitle(ev.target.value);
    // Alt - 1
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: ev.target.value,
    // });
    // Alt - 2
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: ev.target.value};
    // });
  };

  const amountChangeHandler = (ev) => {
    setEnteredAmount(ev.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: ev.target.value,
    // })
  };

  const dateChangeHandler = (ev) => {
    setEnteredDate(ev.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: ev.target.value,
    // })
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // empty contents after submit
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredAmount('');
    toggleForm();
  };

  if(hideForm) {
    return <button onClick={toggleForm}>Add New Expense</button>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggleForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
