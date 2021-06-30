import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    return(
        <Card className="expenses">
            {props.items.map((expense) => (<ExpenseItem reason={expense.reason} amount={expense.amount} date={expense.date}/>))}
        </Card>
    )
}

export default Expenses;