import React, { useState } from 'react';
import './BlockInputContainer.css';

const BlockInputContainer = ({ image, name, parentCallback}) => {
    const [value, setValue] = useState('');

    return (
        <div className="BlockInput">
            <div className="blockInput-img-container">
                <img src={image} alt="image to show"/>
            </div>

            <textarea name={name} value={value} onChange={(e) => {
                setValue(e.target.value);
                parentCallback(e.target.value);
                }} className="textarea" ></textarea>
        </div>
    );
}

export default BlockInputContainer;
