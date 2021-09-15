import React, { useState } from 'react';
import scissors from '../../assets/scissors.svg';
import navigationOptions from '../../config/navigation/navigaion-config'
import './PageHeader.styles.css';

export const PageHeader = () => {
    const [navOptions] = useState(navigationOptions)
    
    const renderLogo = () => (
        <div className="head-logo-wrapper">
            <img className="head-logo" src={scissors} alt="logo" />
        </div>
    )
    const renderOptions = () => (
        <>
            {navOptions.map((option) => (
                <div key={option.key} className="head-lnk-wrapper">
                    <a href={option.url} className="head-lnk">
                        {option.text}
                    </a>
                </div>
            ))}
        </>
    )
    return (
        <div className="head-wrapper">
            {renderLogo()}
            {renderOptions()}
        </div>
    )
}