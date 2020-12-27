import React, {useEffect, useRef, useState} from 'react';
import './ContentContainer.css';

const ContentContainer = (props) => {
    const [style, setStyle] = useState({});
    
    const ref = useRef(null);
    useEffect(() => {
        setStyle({
            left: `calc(50% - ${ref.current.offsetWidth}px / 2)`,
            top: `calc(-${ref.current.offsetHeight}px - 14px)`,
        })
    }, []);
    
    return (
        <div className={`content-container ${props.noPadding ? 'no-padding' : ""}`}>
            <h3 className="content-container__title" ref={ref} style={style}>{props.title}</h3>
            {props.children}
        </div>
    );
}

export default ContentContainer;
