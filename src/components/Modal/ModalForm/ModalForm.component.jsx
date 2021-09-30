import React from 'react';
import './ModalForm.styles.css';
import { Form } from '../../Form/Form.component';

/**
 * Props structure for ModalForm
 * 
 * modalIcon={}                         -  Takes an Icon from react-icons
 * modalContent={
 *    {
 *      modalHeader: ''                 -  Takes a string for the modal header 
 *      formContent: [                  -  Takes an array of objects for all form text boxes
 *          {
 *              key: '',                -  Takes a string
                type: '',               -  Takes a string on textArea or singleText 
                placeHolder: '',        -  Takes a string for input placeholder
                label: '',              -  Takes a string for input label
                handleChange: () => {}  -  Function to handle input change
 *          }
 *      ],
 *      buttonContent: [                -  Takes an array of objects for all button configuration
 *          {
 *              key: '',                -  Takes a string
                class: '',              -  Takes a string for button classname, will currently take 'google-btn' and 'form-btn'
                type: '',               -  Takes either 'button' or 'submit' 
                text: '',               -  Takes a string for button text
                icon: '',               -  Takes an Icon from react-icons
                handleClick: () => {}   -  Function to handle the button click
 *          }
 *      ]
 *    }
 * 
 * }
 */

export const ModalForm = ({ modalContent, modalIcon }) => {
    return (
        <div className="modal-form-wrapper">
            <div className="modal-form-header form-header">
                <div className="modal-header-wrapper">
                    <div className="modal-header-icon">
                        {modalIcon}
                    </div>
                    <h2 className="modal-header-text">
                        {modalContent.modalHeader}
                    </h2>
                </div>
            </div>
            <Form 
                formContent={modalContent.formContent} 
                buttonContent={modalContent.buttonContent}
            />
        </div>
    );
}