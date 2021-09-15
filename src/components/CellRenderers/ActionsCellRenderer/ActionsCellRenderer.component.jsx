import React from 'react';
import './ActionsCellRenderer.styles.css';

export const ActionCellRenderer = ({ content, api }) => {
    /* -------------- CRUD functions -------------- */
    const handleClick = (option) => {
        console.log(option)
    }
    return (
        <div className="action-content-wrapper">
            {content.map((option) => { 
                if (!option.id.includes('add')) {
                    return (
                        <div key={option.id} className="action-content" onClick={() => handleClick(option)} >
                            {option.icon}
                        </div>
                    )
                } return null;
            })}
        </div>
    )
}