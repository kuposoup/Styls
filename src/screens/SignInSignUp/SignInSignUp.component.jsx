import React from "react";
import { Modal } from "../../components/Modal/Modal.component";
import './SignInSignUp.styles.css';

export const SignInSignUp = ({ formConfig }) => {
    return (
        <div className="modal sign-in-sign-up-form">
            <Modal 
                modalType="form" 
                modalContent={formConfig} 
            />
                <div className="sign-in-sign-up-link-wrapper">
                {
                    (formConfig.forgotPasswordLink && formConfig.forgotPasswordText) && (
                        <a className="sign-in-sign-up-link" href={formConfig.forgotPasswordLink}>
                            {formConfig.forgotPasswordText}
                        </a>
                    )
                }
                <a className="sign-in-sign-up-link" href={formConfig.redirectLink}>
                    {formConfig.redirectLinkText}
                </a>
            </div>
        </div>
    )
}