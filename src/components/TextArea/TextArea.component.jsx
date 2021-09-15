import React from 'react';
import './TextArea.styles.css';

export const TextArea = ({ inputId, inputClassname, value }) => (
    <div>
        <textarea 
            id={inputId} 
            className={`txtara ${inputClassname}`} 
            value={value} 
        />
    </div>
);