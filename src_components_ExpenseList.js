import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  return (
    <div className="list-container">
      <h2>Expense List</h2>
      <div className="expense-item">
        <h3>Grocery</h3>
        <span>$50</span>
      </div>
      <div className="expense-item">
        <h3>Electricity Bill</h3>
        <span>$120</span>
      </div>
    </div>
  );
}

export default ExpenseList;
