import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const onSaveExpenseData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
}

export default NewExpense