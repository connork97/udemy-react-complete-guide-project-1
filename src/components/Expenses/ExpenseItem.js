import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurace'    
    const expenseAmount = 294.67
    console.log(props)
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem