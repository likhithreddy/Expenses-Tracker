import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expenseitem-reason">{props.reason}</div>
            <div className="expenseitem-amount">{props.amount}</div>
            
        </Card>
    )

}

export default ExpenseItem;