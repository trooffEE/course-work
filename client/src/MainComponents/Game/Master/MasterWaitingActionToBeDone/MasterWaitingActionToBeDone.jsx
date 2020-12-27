import React, { useContext, useEffect, useState } from 'react';
import "./MasterWaitingActionToBeDone.css";
import smileIcon from '../../../../images/smile.png';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';
import { Redirect } from 'react-router';

const MasterWaitingActionToBeDone = ({name, room}) => {
    const [success, setSuccess] = useState(false);
    const [payload, setPayload] = useState('');
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('SHOW_ACTION', ({ success, payload }) => {
            setPayload(payload);
            setSuccess(success);
        })
    }, [success, payload])

    if (success) {
        return <Redirect to={`/game?role=master&game=4-2&name=${name}&room=${room}&a=${payload}`} />
    }

    return (
            <ImgAndInfoContainer
                title="Игрок выполняет действие мастера..."
                img={smileIcon}
                description="Времени осталось:"
                withTimer={true}
                timeProp={50}
        />
    );
}

export default MasterWaitingActionToBeDone;
