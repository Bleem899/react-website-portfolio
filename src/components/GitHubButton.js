import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primarys', 'btn--outlines'];

const SIZES = ['btn--mediums', 'btn--larges'];

export const GitHubButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='https://github.com/Bleem899' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};