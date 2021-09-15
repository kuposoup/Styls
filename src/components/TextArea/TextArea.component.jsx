import React from 'react';
import './TextArea.styles.css';

export const TextArea = ({ inputId, inputClassname, value, handleOnChange }) => (
    <div>
        <textarea 
            id={inputId} 
            className={`txtara ${inputClassname}`} 
            value={value} 
            onChange={handleOnChange}
        />
    </div>
);