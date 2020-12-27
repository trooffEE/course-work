import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import askIcon from '../../../../images/ask.png';
import BlockInputContainer from '../../../../StructureComponents/BlockInputContainer/BlockInputContainer';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const MasterDecideQuestion = ({name, room}) => {
    const [value, setValue] = useState('');
    function parentCallback(value) {
        setValue(value);
    }

    const socket = useContext(SocketContext);

    const clickHandler = () => {
        console.log(value);
        socket.emit("masterWaiting", {room, status: 'SENDING_QUESTION', payload: value})
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} action="get" className="form">
            <h1 className="player-start-screen-title">Была выбрана правда!</h1>
            <ContentContainer title="Введите текст">
                <BlockInputContainer image={askIcon} name="decidedQuestion" parentCallback={parentCallback}/>
            </ContentContainer>
            <Link to={`/game?role=master&game=3-1&name=${name}&room=${room}`}>
                <button type="submit" className="btn btn-long" onClick={() => clickHandler()}>Отправить</button>
            </Link>
        </form>
    );
}

export default MasterDecideQuestion;
