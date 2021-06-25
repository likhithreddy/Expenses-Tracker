import './ExpenseItem.css'

function ExpenseItem(props){
    const ExpenseDate=new Date(2000,6,18);

    return(
        <div className="expense-item">
            <div className="expenseitem-date">{ExpenseDate.toISOString().slice(0,10)}</div>
            <div className="expenseitem-reason">{props.reason}</div>
            <div className="expenseitem-amount">{props.amount}</div>
        </div>
    )

}

export default ExpenseItem;