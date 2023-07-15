import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Expenses from '../Expenses/Expenses'

const NewExpense = ({ expenses, setExpenses }) => {

    const onSaveExpenseData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        setExpenses((prevState) => {
            return [expenseData, ...prevState]
        })
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
        </div>
    )
}

export default NewExpense