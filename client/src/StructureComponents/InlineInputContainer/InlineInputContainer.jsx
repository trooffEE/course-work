import React, { useEffect, useState } from 'react';
import './InlineInputContainer.css';

const InlineInputContainer = ({title, placeholder, name, setNameCallback, setIdCallback}) => {
    const [text, setText] = useState("");
    if (name === 'name') {
        setNameCallback(text)
    }
    if (name === 'room') {
        setIdCallback(text)
    }
    return (
        <>
            <p className="textOfButtonContainer">{title}</p>
            <input className="input-inline" 
                   required={true}
                   minLength={2} 
                   name={name || 'whynot'} 
                   placeholder={placeholder} 
                   type="text" 
                   value={text} 
                   onChange={(e) => setText(e.target.value)} />
        </>
    );
}

export default InlineInputContainer;
