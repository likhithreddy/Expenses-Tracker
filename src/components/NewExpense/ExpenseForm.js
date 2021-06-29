import './ExpenseForm.css';

function ExpenseForm(){
    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Reason</label>
                <input type="text" />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1"/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2022-06-30"/>
            </div>
        </div>
        <div className="new-expense_submit">
            <button type="submit">Add Expense</button>
        </div>

    </form>
};

export default ExpenseForm;