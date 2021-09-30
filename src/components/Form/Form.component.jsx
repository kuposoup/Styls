import React from 'react';
import './Form.styles.css'
import { TEXT_AREA } from '../../constants/constants';
import { TextArea } from '../TextArea/TextArea.component';
import { TextBox } from '../TextBox/TextBox.component';
import { Button } from '../Button/Button.component';

export const Form = ({ formContent, buttonContent, handleSubmit}) => {
    const renderFormContent = () => (
        <div className="form-content-wrapper">
            {formContent.map((content) => {
                if (content.type === TEXT_AREA) {
                    return (
                        <div key={content.key} className="form-txt-area-wrapper">
                            <div className="label-txt">
                                {content?.label}
                            </div>
                            <TextArea 
                                inputId={`${content.key}`}
                                inputClassname="form-txt-area"
                                placeHolder={content?.placeHolder}
                                value={content?.value}
                                handleOnChange={content?.handleChange}
                            />
                        </div>
                    )
                } return (
                    <div key={content.key} className="form-txt-box-wrapper">
                        <div className="label-txt">
                            {content?.label}:
                        </div>
                        <TextBox 
                            inputId={`${content.key}`}
                            inputClassname="form-txt-box"
                            placeHolder={content?.placeHolder}
                            inputType={content.type}
                            value={content?.value}
                            handleOnChange={content?.handleChange}
                            isRequired
                        />
                    </div>
                )
            })}
        </div>
    );

    const renderFormButtons = () => (
        <div className="form-btn-wrapper">
            {buttonContent.map((button) => (
                <div key={button.key} className="modal-btn">
                    <Button 
                        inputId={`${button.key}-cancel-btn`} 
                        inputClassname={`form-cancel-btn btn ${button.class}`}
                        buttonType={button.type} 
                        buttonText={button.text} 
                        handleOnClick={button.handleClick}
                        buttonIcon={button?.icon}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                {renderFormContent()}
                {renderFormButtons()}
            </form>
        </div>
    )
}