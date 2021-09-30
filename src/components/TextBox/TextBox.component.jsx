import React from 'react';
import './TextBox.styles.css';

export const TextBox = ({ inputId, inputClassname, placeHolder, value, handleOnChange }) => (
    <div className="txtbx-wrapper">
        <input 
            id={inputId} 
            className={`txtbx ${inputClassname || ''}`} 
            placeHolder={placeHolder}
            type="text"
            value={value}
            onChange={handleOnChange}
        />
    </div>
);