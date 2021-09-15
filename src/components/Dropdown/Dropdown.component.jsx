import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button.component';
import './Dropdown.styles.css';

export const Dropdown = ({ inputId, inputClassname, mainText, content, icon }) => {
    const wrapperRef = useRef(null);
    const [isOpen, setisOpen] = useState(false);

    const handleOpenDropdown = () => {
        setisOpen(!isOpen)
    };

    const useOutsideAlerter = (ref, isOpen) => {
        useEffect(() => {
            function handleClickOutside(event) {

                if (isOpen && ref.current && !ref.current.contains(event.target)) {
                    handleOpenDropdown()                }
            }
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, isOpen]);
    };

    useOutsideAlerter(wrapperRef, isOpen);

    const renderDropdownContent = () => (
        <div className={"dropdown-content-wrapper"}>
            {content.map((item) => (
                <div key={item.id} className="dropdown-content-item" onClick={item.onClick}>
                    <span className="dropdown-content-icon">{item.icon}</span>
                    <span className="dropdown-content-text">{item.text}</span>
                </div>
            ))}
        </div>
    )

    return (
        <div className="dropdown-wrapper" ref={wrapperRef}>
            <Button 
                buttonText={mainText} 
                handleOnClick={handleOpenDropdown} 
                inputClassname={`${inputClassname} ${isOpen ? 'active' : ''}`} 
                inputId={inputId} icon={icon}
            />
            {isOpen && renderDropdownContent()}
        </div>
    )
}