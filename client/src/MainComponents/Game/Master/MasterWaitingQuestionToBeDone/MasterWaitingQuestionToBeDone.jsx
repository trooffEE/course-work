import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import timeIcon from '../../../../images/time.png';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const MasterWaitingQuestionToBeDone = ({name, room}) => {
    const [success, setSuccess] = useState(false);
    const [payload, setPayload] = useState('');
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('SHOW_ANSWER', ({success, payload}) => {
            setPayload(payload);
            setSuccess(success);
        })
    }, [success, payload])
    console.log(success, payload);

    if (success) {
        return <Redirect to={`/game?role=master&game=4-1&name=${name}&room=${room}&a=${payload}`}/>
    }

    return (
        <ImgAndInfoContainer
            title="Мастер ожидает ответ от игрока"
            img={timeIcon}
            description="Мастер очень терпелив..."
            withTimer={true}
            timeProp={30}
        />
    );
}

export default MasterWaitingQuestionToBeDone;
