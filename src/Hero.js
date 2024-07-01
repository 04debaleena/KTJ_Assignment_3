import React from 'react';
import './Hero.css';
import heroImg from './expense_tracker.png';

export const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div>
                <h1>Welcome to Expense Tracker</h1>
                    <p>Worried about your expenses and can't keep a track of them? Here's our app to help you out.</p>
                </div>
                <div>
                    <img src={ heroImg } ></img>
                </div>
            </div>
        </section>
    );
}
