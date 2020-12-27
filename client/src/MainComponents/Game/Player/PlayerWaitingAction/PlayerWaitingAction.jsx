import React, { useContext, useEffect, useState } from 'react';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import timeIcon from '../../../../images/time.png';
import { Redirect } from 'react-router';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const PlayerWaitingAction = ({name, room}) => {
    const [success, setSuccess] = useState(false);
    const [payloadOuter, setPayload] = useState('');
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('RECEIVED_ACTION', ({ success, payload }) => {
            setPayload(payload);
            setSuccess(success);
        });
    }, [payloadOuter, success])

    if (success) {
        return <Redirect to={`/game?role=player&game=3-2&name=${name}&room=${room}&q=${payloadOuter}`} />
    }

    return (
        <ImgAndInfoContainer
            title="Ждём пока мастер придумает для Вас действие..."
            description="Терпеливо ждём..."
            img={timeIcon}
        />
    );
}

export default PlayerWaitingAction;
