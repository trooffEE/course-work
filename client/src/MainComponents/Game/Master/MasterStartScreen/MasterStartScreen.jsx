import React, { useContext, useState } from 'react';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import timeIcon from "../../../../images/time.png";
import ErrorContainer from '../../../../UsefulComponents/Error/ErrorContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';
import { Redirect } from 'react-router';

const MasterStartScreen = ({error, errorStatus, name, room}) => {
    const [isQuestion, setIsQuestion] = useState(null);
    const socket = useContext(SocketContext);
    
    socket.on('MASTER_WAITING', ({ isQuestion}) => {
        setIsQuestion(isQuestion);
    })

    if (errorStatus) {
        return <ErrorContainer error={error} />;
    }

    if (isQuestion === true) {
        return <Redirect to={`/game?role=master&game=2-1&name=${name}&room=${room}`}/>
    } 
    else if (isQuestion === false) {
        return <Redirect to={`/game?role=master&game=2-2&name=${name}&room=${room}`}/>
    }

    return (
        <ImgAndInfoContainer
            title="Вы - мастер!"
            description="Ждём пока жертва мастера выберет что делать..."
            img={timeIcon}
        />
    );
}

export default MasterStartScreen;
