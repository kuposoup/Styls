import React from 'react';
import { FaGoogle } from "react-icons/fa"

export const dummyFormData = {
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
        }
    ],
    buttonContent: [
        {
            key: 'google-btn',
            class: 'google-btn',
            type: 'button',
            text: 'Sign Up With Google',
            icon: <FaGoogle />,
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

// inputId={`${button.key}-cancel-btn`} 
// inputClassname={`form-cancel-btn btn ${button.class}`}
// buttonType={button.type} 
// buttonText={button.text} 
// handleOnClick={button.handleClick}

export const dummyModalMessageData = {
    header: 'Test Header',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' 
        + 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}