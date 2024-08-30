import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div className="form-container">
      <h2>Add New Expense</h2>
      <form>
        <div className="input-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="input-group">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Amount</label>
          <input type="number" />
        </div>
        <button type="submit" className="button">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
