import React, { useState } from 'react';

export const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (amount == '') {
      setShowPopup(true);
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date
    }

    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setCategory('');
    setDate('');
    setShowPopup(false);
  }

  return (
    <div id="expense-add">
      <h2 id="add-expense">Add your transactions</h2>
      <h4><i><b>AMOUNT</b> is a mandatory field</i></h4>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Details <i>(if any)</i></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter details" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date" />
        </div>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter mode of payment" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Amount not filled. Please click 'continue' to fill the amount.</p>
          <button onClick={() => setShowPopup(false)}>Continue</button>
        </div>
      )}
    </div>
  );
}
