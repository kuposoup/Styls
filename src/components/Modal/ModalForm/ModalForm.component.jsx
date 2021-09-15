import React from 'react';
import { Form } from '../../Form/Form.component';

export const ModalForm = ({ modalContent, modalHeader, isOpen, setIsOpen }) => {
    
    const handleCancel = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-header">
                {modalHeader}
            </div>
            <Form 
                formContent={modalContent} 
                hasCancel
                handleCancel={handleCancel}
            />
        </div>
    );
}