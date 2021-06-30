import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredReason,setEnteredReason]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const reasonChangeHandler=(event)=>{
        setEnteredReason(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            reason: enteredReason,
            amount: "$"+enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredReason('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Reason</label>
                <input type="text" value={enteredReason} onChange={reasonChangeHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.1" step="0.1" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2020-01-01" max="2022-06-30" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense_submit">
            <button type="submit">Add Expense</button>
        </div>

    </form>
};

export default ExpenseForm;