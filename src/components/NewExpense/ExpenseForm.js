import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const handleUserInput = (event) => {
        const {name, value} = event.target
        setUserInput((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        }
        console.log(expenseData)
        onSaveExpenseData(expenseData)
    }
                
    return (
        <form onSubmit={handleFormSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={userInput.title}
                        onChange={handleUserInput}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number' name='amount' value={userInput.amount} min='0.01' step='0.01' onChange={handleUserInput} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' name='date' value={userInput.date} min='2019-01-01' max='2022-12-31' onChange={handleUserInput} />
                </div>
            </div>
            <div className='new-expense-actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm