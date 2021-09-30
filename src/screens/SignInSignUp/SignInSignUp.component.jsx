import React from "react";
import { Modal } from "../../components/Modal/Modal.component";
import './SignInSignUp.styles.css';
import { signUpConfig } from "./SignInSignUpConfig";

export const SignInSignUp = () => {
    return (
        <div className="modal">
            <Modal 
                modalType="form" 
                modalContent={signUpConfig} 
            />
        </div>
    )
}