import React from 'react';
import { FcGoogle } from "react-icons/fc"

export const signUpConfig = {
    modalHeader: "Sign Up",
    formContent: [
        {
            key: 'firstName',
            type: 'text',
            placeHolder: 'Enter First Name',
            label: 'First Name',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'lastName',
            type: 'text',
            placeHolder: 'Enter Last Name',
            label: 'Last Name',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'phoneNumber',
            type: 'text',
            placeHolder: 'Enter Phone Number',
            label: 'Phone Number',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'email',
            type: 'text',
            placeHolder: 'Enter Email',
            label: 'Email',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'password',
            type: 'password',
            placeHolder: 'Enter Password',
            label: 'Password',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'passwordConfirm',
            type: 'password',
            placeHolder: 'Confirm Password',
            label: 'Confirm Password',
            handleChange: (e) => console.log(e.target.value)
        },
    ],
    buttonContent: [
        {
            key: 'google-btn',
            class: 'google-btn',
            type: 'button',
            text: 'Sign Up With Google',
            icon: <FcGoogle />,
            handleClick: () => console.log('test')
        },
        {
            key: 'cancel-btn',
            class: 'form-btn',
            type: 'button',
            text: 'Cancel',
            handleClick: () => console.log('test')
        },
        {
            key: 'submit-btn',
            class: 'form-btn',
            type: 'submit',
            text: 'Submit',
            handleClick: () => console.log('test')
        }
    ]
}
