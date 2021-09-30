import React from 'react';
import './Modal.styles.css';
import { ALERT, FORM, MESSAGE} from '../../constants/constants';
import { ModalForm } from './ModalForm/ModalForm.component';
import { ModalMessage } from './ModalMessage/ModalMessage.component';
import { FiAlertTriangle, FiBell, FiList } from 'react-icons/fi';

export const Modal = ({ modalContent, modalType }) => {
    const renderModal = () => {
        switch(modalType) {
            case FORM:
                return (
                    <ModalForm 
                        modalType={modalType}
                        modalIcon={<FiList />}
                        modalContent={modalContent}
                    />
                );
            case MESSAGE:
                return (
                    <ModalMessage 
                        modalType={modalType}
                        modalIcon={<FiBell />}
                        modalContent={modalContent}
                    />
                );
            case ALERT:
                return (
                    <ModalMessage
                        modalType={modalType}
                        modalIcon={<FiAlertTriangle />}
                        modalContent={modalContent}
                    />
                );
            default: 
                    return null
                    
        }
    }

    return (
        <div className="modal-wrapper">
            {renderModal()}
        </div>
    )
}