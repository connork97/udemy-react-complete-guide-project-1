import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card'

function Expenses({ expenses }) {

    const renderExpenseItems = expenses.map((expense) => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    })

    return (
        <div className='expenses'>
            <ExpensesFilter />
            <Card className="expenses">
                {renderExpenseItems}
            </Card>
        </div>
    )
}

export default Expenses