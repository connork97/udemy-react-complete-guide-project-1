import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card'

function Expenses({ expenses }) {

    const [filterYear, setFilterYear] = useState('all')

    const renderExpenseItems = expenses.map((expense) => {
        if (filterYear === 'all') {
            return (
                <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            )
        }
        else if (expense.date.getFullYear() == filterYear) {
            return (
                <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            )
        }
    })

    return (
        <div className='expenses'>
            <ExpensesFilter 
                filterYear={filterYear}
                setFilterYear={setFilterYear} 
            />
            <Card className="expenses">
                {renderExpenseItems}
            </Card>
        </div>
    )
}

export default Expenses