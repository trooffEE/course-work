import React from 'react';
import TwoFields from '../../../../StructureComponents/TwoFields/TwoFields';

const PlayerMasterGaveQuestion = ({name, room, q}) => {
    return (
        <TwoFields 
            title="Мастер задал вам вопрос!"
            fieldFirstTitle="Вопрос мастера"
            fieldSecondTitle="Ваш ответ"
            question={q}
            nameEditableField="answer"
            btnText="Я ответил"
            name={name}
            room={room}
        />
    );
}

export default PlayerMasterGaveQuestion;
