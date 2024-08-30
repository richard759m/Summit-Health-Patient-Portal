import React from 'react';
import './Receipt.css';

function Receipt() {
  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <p>Date: 01/01/2024</p>
      <p>Amount: $50</p>
      <p>Description: Grocery</p>
    </div>
  );
}

export default Receipt;
