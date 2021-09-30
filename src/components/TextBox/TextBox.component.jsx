import React from 'react';
import './TextBox.styles.css';

export const TextBox = ({ inputId, inputClassname, placeHolder, inputType, value, handleOnChange, isRequired }) => (
    <div className="txtbx-wrapper">
        <label>
            <input 
                id={inputId} 
                className={`txtbx slideRight ${inputClassname || ''}`} 
                placeholder={placeHolder}
                type={inputType}
                value={value}
                onChange={handleOnChange}
                required={isRequired}
            />
            <span></span>
        </label> 
    </div>
);