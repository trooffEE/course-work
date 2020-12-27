import React from 'react';
import { Link } from 'react-router-dom';
import './LongButton.css';

const LongButton = ({ text, to, setChosenButton, chose}) => {

    if (to === undefined) {
        return <button className="btn btn-long">{text}</button>
    }
    return (
        <Link to={to}>
            <button className="btn btn-long" onClick={() => setChosenButton(chose)}>{text}</button>
        </Link>
    );
}

export default LongButton;
