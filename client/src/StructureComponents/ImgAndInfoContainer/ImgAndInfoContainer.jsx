import React, { useState, useEffect } from 'react';
import "./ImgAndInfoContainer.css"

const ImgAndInfoContainer = ({ title, img, description, withTimer, timeProp, isSmall}) => {
    const [time, setTimer] = useState(0);

    useEffect(() => {
        if (withTimer === undefined) {
            return;
        }
        
        let remainingTime = timeProp;
        let loop = setInterval(() => {
                console.log(remainingTime);
                setTimer(remainingTime--)
                if (remainingTime === -1) clearInterval(loop);
        }, 1000);

        return () => {
            clearInterval(loop)
        }
    }, []);


    return (
        <div className="basic-info__container">
            {title ? <h2 className="basic-info__title">{title}</h2> : null}
            <div className={`${isSmall ? "basic-img__container-small" : "basic-img__container"}`}>
                <img src={img} alt="icon to show" />
            </div>
            <h3 className={`${isSmall ? "basic-info__desc-small" : "basic-info__desc"}`}>{description} {withTimer ? `${time} c` : ""}</h3>
        </div>
    );
}

export default ImgAndInfoContainer;
