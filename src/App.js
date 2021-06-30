import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const dummy_expenses=[
    {reason:"Car Insurance", amount: "$295.6", date: new Date(2020,3,27)},
    {reason:"College Fee", amount: "$2970", date: new Date(2020,7,30)},
    {reason:"Earbuds", amount: "$105", date: new Date(2020,4,22)},
    {reason:"Phone", amount: "$849", date: new Date(2020,4,22)}
  ];

  const [expenses,setExpenses]=useState(dummy_expenses);

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=>{
      return([expense, ...prevExpenses])
    })
  }
  return (
    <div className="App">
      <nav><b>EXPENSES TRACKER</b></nav>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
