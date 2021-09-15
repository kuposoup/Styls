import React from 'react';
import './TextBox.styles.css';

export const TextBox = ({ textBoxType, inputId, inputClassname, value }) => (
    <div className="txtbx-wrapper">
        <input 
            id={inputId} 
            className={`txtbx ${inputClassname}`} 
            type={textBoxType} 
            value={value}
        />
    </div>
);