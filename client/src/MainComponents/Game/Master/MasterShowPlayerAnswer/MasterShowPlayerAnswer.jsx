import React, { useState } from 'react';
import LongButton from '../../../../PrimitiveComponents/LongButton/LongButton';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import './MasterShowPlayerAnswer.css'

const MasterShowPlayerAnswer = ({name, room, a: answer}) => {
    const [chosenButton, setChosenButton] = useState(0);
    return (
        <>
            <h1 className="basic-info__title">Ответ на Ваш вопрос</h1>
            <ContentContainer title="Ответ">
                <p className="better-text">{answer}</p>         
            </ContentContainer>
            <LongButton text="Ясно" to={`/game?role=master&game=5&name=${name}&room=${room}`} setChosenButton={setChosenButton} chose={1}/>
        </>
    );
}

export default MasterShowPlayerAnswer;
