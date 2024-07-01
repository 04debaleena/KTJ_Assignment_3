import React, { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h2 className="navbar-brand">Expense Tracker</h2>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className="options"><a href="#home">Home</a></li>
            <li className="options"><a href="#add-expense">Add Expense</a></li>
            <li className="options"><a href="#expenses-list">Expenses List</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}


