import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExp=[
 {
   id: 'e1',
   title: 'Toilet Paper',
   amount: 94.12,
   date: new Date(2020, 7, 14),
 },
 { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
 {
   id: 'e3',
   title: 'Car Insurance',
   amount: 294.67,
   date: new Date(2021, 2, 28),
 },
 {
   id: 'e4',
   title: 'New Desk (Wooden)',
   amount: 450,
   date: new Date(2021, 5, 12),
 },
];
const App = () => {
  const [expenses,setExpenses]=useState(initialExp)
  const getData=()=>{
    axios.get('http://localhost:80/api/getallexpenses',{
      headers: {
      'Content-Type': 'application/json'
      }})
    .then((response)=>{
      console.log(response.data.data);
      setExpenses(response.data.data)
    })
    .catch((error)=>{console.log(error)})
  }
  useEffect(()=>{
    getData();
  },[])


  const newExpenseHandler=(expenseData)=>{
    fetch('http://localhost:80/api/newexpense',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(expenseData)
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        getData();
    }
    )
    .catch((err)=>console.log(err));
    // setExpenses((preval)=>{return [expenseData,...expenses]})
  }

  return (
    <div>
      <NewExpense newexpensehandler={newExpenseHandler}/>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;