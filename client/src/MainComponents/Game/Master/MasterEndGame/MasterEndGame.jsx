import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const MasterEndGame = ({room, name}) => {
    const [isAgain, setAgain] = useState(false);

    const socket = useContext(SocketContext);

    useEffect(() => {
        if (isAgain) {
            socket.emit('leaveRoom', {room, name})
        }
    }, [isAgain, room, name])

    return (
        !isAgain ?
            <div>
                <h1>Игра закончена, Вы были мастером</h1>
                <p>Если хотите снова сыграть нажмите на кнопку</p>
                <button className="btn btn-long" onClick={() => setAgain(true)}>Хочу ещё!</button>
            </div>
            : <Redirect to='/' />
    );
}

export default MasterEndGame;
