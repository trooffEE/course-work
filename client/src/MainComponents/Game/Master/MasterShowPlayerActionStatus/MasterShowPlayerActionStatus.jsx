import React, { useState } from 'react';
import LongButton from '../../../../PrimitiveComponents/LongButton/LongButton';

const MasterShowPlayerActionStatus = ({name, room}) => {
    const [chosenButton, setChosenButton] = useState(0);
    return (
        <>
            <h1>Ваше действие было выполнено...</h1>
            <LongButton text="Конец игры" to={`/game?role=master&game=5&name=${name}&room=${room}`} setChosenButton={setChosenButton} chose={1}/>
        </>
    );
}

export default MasterShowPlayerActionStatus;
