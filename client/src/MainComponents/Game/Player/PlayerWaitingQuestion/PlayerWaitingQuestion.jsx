import React, { useContext, useEffect, useState } from 'react';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import timeIcon from '../../../../images/time.png';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';
import { Redirect } from 'react-router';

const PlayerWaitingQuestion = ({name, room}) => {
    const [success, setSuccess] = useState(false);
    const [payloadOuter, setPayload] = useState('');
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('RECEIVED_QUESTION', ({ success, payload }) => {
            setPayload(payload);
            setSuccess(success);
        });
    }, [payloadOuter, success])

    if (success) {
        return <Redirect to={`/game?role=player&game=3-1&name=${name}&room=${room}&q=${payloadOuter}`} />
    }

    return (
        <ImgAndInfoContainer
            title="Ждём пока мастер придумает для Вас вопрос..."
            description="Мастер, видимо, придумывает каверзный вопрос..."
            img={timeIcon}
        />
    );
}

export default PlayerWaitingQuestion;
