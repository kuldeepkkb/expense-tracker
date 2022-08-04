import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [userInput,setUserInput]=useState({
        title:'',
        amount:'',
        date:''
    });
    const inputHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        // if(name==='date'){
        //     value= new Date(value);
        // }
        setUserInput((prev)=>{
           
           return{
            ...prev,
           [name]:value
           }
        })
    }
   const submitHandler=(e)=>{
    e.preventDefault();
    props.onSaveExpense(userInput);
    setUserInput({
        title:'',
        amount:'',
        date:''
    })
   }
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input onChange={inputHandler} value={userInput.title} name="title" type="text" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input onChange={inputHandler} value={userInput.amount} name="amount" type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input onChange={inputHandler} value={userInput.date} name="date" type="date" min="2019-01-01" max="2023-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

  )
}

export default ExpenseForm