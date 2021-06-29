import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){

    // const [amount,setAmount]=useState(props.amount);
    
    // const clickHandler=()=>{
    //     setAmount("$500");
    // };
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expenseitem-reason">{props.reason}</div>
            <div className="expenseitem-amount">{props.amount}</div>
            {/* <button onClick={clickHandler}>Click</button> */}
        </Card>
    )

}

export default ExpenseItem;