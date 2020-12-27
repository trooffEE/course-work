import React from 'react';
import "./fix-styles.css";


const imageAndInterface = (props) => {
    return (Component) => {
        return (
        <div className="content-btn-img__container">
            <div className={`content-btn-img__img ${props.badImage ? "badImage-fix" : ""}`}>
                <img className="imgitelf" src={props.image} alt="icon to show" />
            </div>

            <div className="content-btn-img__btn">
                <Component {...props}/>
            </div>
        </div>);
    };
}

export default imageAndInterface;