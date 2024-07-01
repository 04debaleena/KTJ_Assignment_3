import React from 'react';
import { Transaction } from './Transaction';

export const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="history">
      <h2 id="expenses-list"><i>Expenses List</i></h2>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}>
            {transaction.text} <span>Rs. {transaction.amount} on {transaction.date}</span>

          </li>
        ))}
      </ul>
      </div>
  );
}


