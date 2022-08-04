import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (prop) => {
  const getExpenseData=(expenseData)=>{


    prop.newexpensehandler(expenseData)
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpense={getExpenseData}/>
    </div>
  )
}

export default NewExpense