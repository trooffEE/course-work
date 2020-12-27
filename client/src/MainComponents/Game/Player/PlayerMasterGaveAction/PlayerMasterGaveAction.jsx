import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';
import './PlayerMasterGaveAction.css';

const PlayerMasterGaveAction = ({q: action, name, room}) => {

    const [clicked, setClicked] = useState(false);
    const socket = useContext(SocketContext);

    useEffect(() => {
        if (clicked) {
            socket.emit('givingAnswer', { room, payload: true });
        }
    }, [clicked])

    return (
        <div className="fix-layout">
            <h1 className="basic-info__title">Мастер выбрал для вас действие!</h1>
            <ContentContainer title="Действие мастера">
                <p className="master-text">{action}</p>
            </ContentContainer>
            <Link to={`/game?role=player&game=4-1&name=${name}&room=${room}&q=${action}`}>
                <button className="btn btn-long" onClick={() => setClicked(true)}>Начать?</button>
            </Link>
        </div>
    );
}

export default PlayerMasterGaveAction;
