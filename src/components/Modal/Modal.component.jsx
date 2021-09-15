import React from 'react';
import { ALERT, FORM, MESSAGE } from '../../constants/constants';
import { ModalAlert } from './ModalAlert/ModalAlert.component';
import { ModalForm } from './ModalForm/ModalForm.component';
import { ModalMessage } from './ModalMessage/ModalMessage.component';

export const Modal = ({ modalContent, modalType }) => {
    const renderModal = () => {
        switch(modalType) {
            case FORM:
                return (
                    <ModalForm 
                        modalContent={modalContent}
                    />
                );
            case MESSAGE:
                return (
                    <ModalMessage 
                        modalContent={modalContent}
                    />
                );
            case ALERT:
                return (
                    <ModalAlert 
                        modalContent={modalContent}
                    />
                );
        }
    }

    return (
        <div className="modal-wrapper">
            {renderModal()}
        </div>
    )
}