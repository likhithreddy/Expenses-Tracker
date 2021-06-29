import './ExpenseDate.css';

function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const date=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear()

    return (
        <div className="expenseitem-date">
            <div className="expenseitem-date_month">{month}</div>
            <div className="expenseitem-date_year">{year}</div>
            <div className="expenseitem-date_date">{date}</div>
        </div>

    )
}

export default ExpenseDate;