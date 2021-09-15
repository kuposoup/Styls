import React from 'react';
import { TEXT_AREA } from '../../constants/constants';
import { TextArea } from '../TextArea/TextArea.component';
import { TextBox } from '../TextBox/TextBox.component';
import { Button } from '../Button/Button.component';

export const Form = ({ inputId, formContent, hasCancel, handleCancel }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const renderFormContent = () => (
        <div className="form-content-wrapper">
            {formContent.map((content) => {
                if (content.type === TEXT_AREA) {
                    return (
                        <div key={content.key} className="form-txt-area-wrapper">
                            <label>
                                {content?.label}
                                <TextArea 
                                    inputId={`${content.key}`}
                                    inputClassname="form-txt-area"
                                    placeHolder={content?.placeHolder}
                                    value={content?.value}
                                    handleOnChange={content?.handleChange}
                                />
                            </label>
                        </div>
                    )
                } return (
                    <div key={content.key} className="form-txt-box-wrapper">
                        <TextBox 
                            inputId={`${content.key}`}
                            inputClassname="form-txt-box"
                            placeHolder={content?.placeHolder}
                            value={content?.value}
                            handleOnChange={content?.handleChange}
                        />
                    </div>
                )
            })}
        </div>
    );

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                {renderFormContent()}
                <div className="form-btn-wrapper">
                    {hasCancel && (
                        <Button 
                            inputId={`${inputId}-cancel-btn`} 
                            inputClassname="form-cancel-btn btn" 
                            buttonType="button" 
                            buttonText="Cancel" 
                            handleOnClick={handleCancel}
                        />
                    )}
                    <Button 
                        inputId={`${inputId}-submit-btn`} 
                        inputClassname="form-submit-btn btn" 
                        buttonType="submit" 
                        buttonText="Submit" 
                    />
                </div>
            </form>
        </div>
    )
}