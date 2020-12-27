import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const PlayerEndGame = ({room, name}) => {
    const [isAgain, setAgain] = useState(false);

    const socket = useContext(SocketContext);

    useEffect(() => {
        if (isAgain) {
            socket.emit('leaveRoom', { room, name })
        }
    }, [isAgain, room, name])

    return (
        !isAgain ?
        <div>
            <h1>Игра закончена, Вы были игроком</h1>
            <p>Мастер увидит Ваш ответ/действие. Если хотите снова сыграть нажмите на кнопку</p>
            <button className="btn btn-long" onClick={() => setAgain(true)}>Хочу ещё!</button>
        </div>
            : <Redirect to='/' />
    );
}

export default PlayerEndGame;
