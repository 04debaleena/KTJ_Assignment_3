import React, { useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Balance } from './Balance';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id != id));
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container">
        <section id="home">
          <div className="content">
            <AddTransaction addTransaction={addTransaction} />
            <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
          </div>
          <Balance transactions={transactions} />
        </section>
      </div>
    </div>
  );
}

export default App;

