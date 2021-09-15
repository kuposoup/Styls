import React from 'react';
import './Button.styles.css';

export const Button = ({ buttonText, onClick, inputClassname, inputId, icon }) => (
    <div className="btn-wrapper">
        <button 
            id={inputId} 
            className={`btn ${inputClassname}`} 
            onClick={onClick}
        >
            {buttonText} 
            {icon}
        </button>
    </div>
);