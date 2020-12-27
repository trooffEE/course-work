import React, { useContext, useState } from 'react';
import BlockInputContainer from '../../../../StructureComponents/BlockInputContainer/BlockInputContainer';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import joystickIcon from '../../../../images/joystick.png';
import "./MasterDecideAction.css"
import { Link } from 'react-router-dom';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const MasterDecideAction = ({name, room}) => {
    const [value, setValue] = useState('');
    function parentCallback(value) {
        setValue(value);
    }

    const socket = useContext(SocketContext);

    const clickHandler = () => {
        socket.emit("masterWaiting", { room, status: 'SENDING_ACTION', payload: value })
    }

    return (
        <div className="form">
            <h1 className="player-start-screen-title">Было выбрано действие!</h1>
            <ContentContainer title="Введите текст">
                <BlockInputContainer image={joystickIcon} name="decidedAction" parentCallback={parentCallback}/>
            </ContentContainer>
            <Link to={`/game?role=master&game=3-2&name=${name}&room=${room}`}>
                <button type="submit" className="btn btn-long" onClick={() => clickHandler()}>Отправить</button>
            </Link>
        </div>
    );
}

export default MasterDecideAction;
