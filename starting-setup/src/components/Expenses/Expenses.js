import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("data here", selectedYear);
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  /** Conditonal rendering Alt-2 */
  let expenseContent = <p>No Expense found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  /** END conditional rendering Alt-2 */
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      { // Conditional Rendering Alt - 1
      /* {filteredExpenses.length === 0 && <p>No Expense found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      {expenseContent}
    </Card>
  );
}

export default Expenses;
