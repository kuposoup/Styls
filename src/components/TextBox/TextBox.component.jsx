import React from 'react';
import './TextBox.styles.css';

export const TextBox = ({ inputId, inputClassname, placeHolder, value, handleOnChange }) => (
    <div className="txtbx-wrapper">
        <label>
            <input 
                id={inputId} 
                className={`txtbx slideRight ${inputClassname || ''}`} 
                placeholder={placeHolder}
                type="text"
                value={value}
                onChange={handleOnChange}
            />
            <span></span>
        </label> 
    </div>
);