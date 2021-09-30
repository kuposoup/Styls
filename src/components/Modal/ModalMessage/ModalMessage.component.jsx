import React from 'react';
import { ALERT } from '../../../constants/constants';
import { Button } from '../../Button/Button.component';

/**
 * 
 * Modal Message Prop structure
 * 
 * modalIcon=''             -  Takes an Icon from react-icons
 * modalType=''             -  Currently takes a string of 'message', 'alert' or 'form'
 * modalContent={
 *      {
 *          header: '',     -  Takes a string for the header text
 *          text: '',       -  Takes a string for the body text
 *      }
 * }
 */

export const ModalMessage = ({ modalContent, modalIcon, modalType }) => {
    const headerType = () => modalType ? `${modalType}-header` : '';
    const btnType = () => modalType ? `${modalType}-btn` : ''

    return (
        <div className="modal-content-wrapper">
            <div className={`modal-header-wrapper ${headerType()}`}>
                <div className="modal-header-icon">
                    {modalIcon}
                </div>
                <h3 className="modal-header-text">
                    {modalContent?.header}
                </h3>
            </div>
            <div className="modal-content">
                {modalContent?.text}
            </div>
            <div className="modal-btn-wrapper"> 
                <div className="modal-btn">
                    <Button 
                        inputClassname={`${btnType()}`}
                        inputId="test"
                        buttonType="button"
                        buttonText="Ok"
                        handleOnClick={() => console.log('continue test')}
                    />
                </div>
                {modalType === ALERT &&
                    <div className="modal-btn">
                        <Button 
                            inputClassname={`${btnType()}`}
                            inputId="test"
                            buttonType="button"
                            buttonText="Cancel"
                            handleOnClick={() => console.log('cancel test')} 
                        />
                    </div>
                }
            </div>
        </div>
    );
}