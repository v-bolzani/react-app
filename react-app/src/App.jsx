import React, { useState } from "react";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1", title: "Smartwatch", amount: 347.99, date: new Date(2023, 3, 16),
  },
  { 
    id: "e2", title: "TV 4K", amount: 3998.09, date: new Date(2023, 2, 23), 
  },
  {
    id: "e3", title: "Headphone", amount: 194.67, date: new Date(2022, 7, 26),
  },
  {
    id: "e4", title: "Tablet", amount: 450, date: new Date(2021, 10, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );

  /*
  return React.createElement (
    'div',
    {},
    React.createElement('h2', {}, "Lets get started!"),
    React.createElement(Expenses, { items: "Expenses" })
  ); 
  */
}

export default App;