import React from 'react';
import Button from '../../PrimitiveComponents/Buttons/Button';
import LongButton from '../../PrimitiveComponents/LongButton/LongButton';
import "./ButtonTextContainer.css";


const ButtonTextContainer = ({ title, buttonText, isButtonLong, to, setChosenButton, chose}) => {
    return (
        <>
            <p className="textOfButtonContainer">{title}</p>

            {isButtonLong ? <LongButton text={buttonText} to={to} chose={chose} setChosenButton={setChosenButton} /> :
                            <Button text={buttonText} to={to} chose={chose} setChosenButton={setChosenButton}/>}
        </>
    );
}

export default ButtonTextContainer;
