import React from 'react';
import { FcGoogle } from "react-icons/fc"

export const signUpConfig = {
    key: 'signup',
    redirectLink: '/signIn',
    redirectLinkText: 'Already have an account? Sign In!',
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
            key: 'username',
            type: 'text',
            placeHolder: 'Enter Username',
            label: 'Username',
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
            text: 'Sign Up',
            handleClick: () => console.log('test')
        }
    ]
}

export const signInConfig = {
    key: 'signin',
    modalHeader: 'Sign In',
    redirectLink: '/signup',
    redirectLinkText: 'Dont have an account? Sign up now!',
    forgotPasswordLink: '/forgotpassword',
    forgotPasswordText: 'Forgot your password?',
    formContent: [
        {
            key: 'username',
            type: 'text',
            placeHolder: 'Enter Username',
            label: 'Username',
            handleChange: (e) => console.log(e.target.value)
        },
        {
            key: 'password',
            type: 'password',
            placeHolder: 'Enter Password',
            label: 'Password',
            handleChange: (e) => console.log(e.target.value)
        },
    ],
    buttonContent: [
        {
            key: 'google-btn',
            class: 'google-btn',
            type: 'button',
            text: 'Sign In With Google',
            icon: <FcGoogle />,
            handleClick: () => console.log('test')
        },
        {
            key: 'submit-btn',
            class: 'form-btn',
            type: 'submit',
            text: 'Sign In',
            handleClick: () => console.log('test')
        }
    ]
}