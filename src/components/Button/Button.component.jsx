import React from 'react';
import './Button.styles.css';

export const Button = ({ buttonType, buttonText, handleOnClick, inputClassname, inputId, buttonIcon }) => (
    <div className="btn-wrapper">
        <button 
            id={inputId} 
            className={`btn ${inputClassname || ''}`} 
            type={buttonType}
            onClick={handleOnClick}
        >
            {buttonIcon && (
                <div className="btn-icon">
                    {buttonIcon}
                </div>
            )}
            <div className="btn-text">
                {buttonText} 
            </div>
        </button>
    </div>
);