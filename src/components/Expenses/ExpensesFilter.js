import React, { useEffect } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
useEffect(()=>{
  console.log("filter caleed");
},[])
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {props.yearsList.map((year)=>(<option key={year} value={year}>{year}</option>))}
         
          {/* <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option> */}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;