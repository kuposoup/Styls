import React from 'react';
import './ModalForm.styles.css';
import { Form } from '../../Form/Form.component';

export const ModalForm = ({ modalContent, modalIcon }) => {

    return (
        <div className="modal-form-wrapper">
            <div className="modal-form-header form-header">
                <div className="modal-header-wrapper">
                    <div className="modal-header-icon">
                        {modalIcon}
                    </div>
                    <h3 className="modal-header-text">
                        {modalContent.modalHeader}
                    </h3>
                </div>
            </div>
            <Form 
                formContent={modalContent.formContent} 
                buttonContent={modalContent.buttonContent}
            />
        </div>
    );
}