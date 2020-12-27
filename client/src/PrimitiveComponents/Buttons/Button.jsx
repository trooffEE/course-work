import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to, setChosenButton, chose}) => {

    if (to === undefined) {
        return <button className="btn">{text}</button>
    }
    return (
        <Link to={to}>
            <button className="btn" onClick={() => setChosenButton(chose)}>{text}</button>
        </Link>
    );
}

export default Button;
