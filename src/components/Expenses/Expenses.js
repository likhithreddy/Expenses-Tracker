import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    return(
        <Card className="expenses">
            <ExpenseItem reason={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem reason={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem reason={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItem reason={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        </Card>
    )
}

export default Expenses;