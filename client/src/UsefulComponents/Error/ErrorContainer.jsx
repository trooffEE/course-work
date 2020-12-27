import React, { useState } from 'react';
import LongButton from '../../PrimitiveComponents/LongButton/LongButton';

const ErrorContainer = ({error}) => {
    const [chosenButton, setChosenButton] = useState(true);

    return (
        <>
            <h1>{error.error}</h1>
            <LongButton to="/" text="Вернуться на стартовый экран" chose={1} setChosenButton={setChosenButton}/>
        </>
    );
}

export default ErrorContainer;
