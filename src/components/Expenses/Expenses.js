import React, { useState } from 'react';

import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'

function Expenses({ expenses }) {

    const [filterYear, setFilterYear] = useState('all')

    let filteredExpenses
    if (filterYear === 'all') filteredExpenses = expenses
    else filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filterYear)

    return (
        <div className='expenses'>
            <Card className="expenses">
                <ExpensesFilter 
                    filterYear={filterYear}
                    setFilterYear={setFilterYear} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses