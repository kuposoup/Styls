import React from 'react';
import './TextBox.styles.css';

export const TextBox = ({ inputId, inputClassname, value, handleOnChange }) => (
    <div className="txtbx-wrapper">
        <input 
            id={inputId} 
            className={`txtbx ${inputClassname}`} 
            type="text"
            value={value}
            onChange={handleOnChange}
        />
    </div>
);