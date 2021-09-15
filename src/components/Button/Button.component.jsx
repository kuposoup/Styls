import React from 'react';
import './Button.styles.css';

export const Button = ({ buttonType, buttonText, handleOnClick, inputClassname, inputId, icon }) => (
    <div className="btn-wrapper">
        <button 
            id={inputId} 
            className={`btn ${inputClassname}`} 
            type={buttonType}
            onClick={handleOnClick}
        >
            {buttonText} 
            {icon}
        </button>
    </div>
);