import React from 'react';
import './TextArea.styles.css';

export const TextArea = ({ inputId, inputClassname, value, handleOnChange }) => (
    <div>
        <textarea 
            id={inputId} 
            className={`txt-area ${inputClassname || ''}`} 
            value={value} 
            onChange={handleOnChange}
        />
    </div>
);