import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  let allYearsList= props.items.map((expense) => {
    let dateObj=new Date(expense.date);
    return dateObj.getFullYear().toString();
  });
 const yearsList=allYearsList.filter((year,index,array)=>(array.indexOf(year)===index));
  
  const filteredExpenses = props.items.filter((expense) => {
    let dateObj=new Date(expense.date);
    return dateObj.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} yearsList={yearsList}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    
  
    </Card>
  );
}

export default Expenses;