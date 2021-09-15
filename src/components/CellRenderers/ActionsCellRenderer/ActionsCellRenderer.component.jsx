import React from 'react';
import './ActionsCellRenderer.styles.css';

export const ActionCellRenderer = (props) => {
    /* -------------- CRUD functions -------------- */
    const handleClick = () => {
       const rowId = props.data;
       console.log(rowId)
    }
    return (
        <div className="action-content-wrapper">
            {props.content.map((option) => { 
                if (!option.id.includes('add')) {
                    return (
                        <div key={option.id} className="action-content" onClick={handleClick} >
                            {option.icon}
                        </div>
                    )
                } return null;
            })}
        </div>
    )
}