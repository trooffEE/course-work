import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sonic from '../../../../images/sonic.png';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import ImgAndInfoContainer from '../../../../StructureComponents/ImgAndInfoContainer/ImgAndInfoContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const PlayerDoingAction = ({action, name, room}) => {
    const [clicked, setClicked] = useState(false);

    const socket = useContext(SocketContext);

    useEffect(() => {
        if (clicked) {
            socket.emit('givingAction', { room, payload: true });
        }
    }, [clicked])
    
    return (
        <>
            <h1 className="basic-info__title">Отсчёт пошёл!!</h1>
            <div className="flex-2">
                <ContentContainer title="Действие мастера">
                    <p className="master-text">{action}</p>
                </ContentContainer>
                <ImgAndInfoContainer
                    img={sonic}
                    description="Осталось времени"
                    withTimer={true}
                    timeProp={50}
                    isSmall={true}
                />
            </div>
            <Link to={`/game?role=player&game=5&name=${name}&room=${room}`}>
                <button className="btn btn-long" onClick={() => setClicked(true)}>Выполнил действие!</button>
            </Link>
        </>
    );
}

export default PlayerDoingAction;
