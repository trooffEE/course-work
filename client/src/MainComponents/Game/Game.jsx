import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import MasterDecideAction from './Master/MasterDecideAction/MasterDecideAction';
import MasterDecideQuestion from './Master/MasterDecideQuestion/MasterDecideQuestion';
import MasterStartScreen from './Master/MasterStartScreen/MasterStartScreen';
import MasterWaitingQuestionToBeDone from './Master/MasterWaitingQuestionToBeDone/MasterWaitingQuestionToBeDone';
import PlayerMasterGaveAction from './Player/PlayerMasterGaveAction/PlayerMasterGaveAction';
import PlayerMasterGaveQuestion from './Player/PlayerMasterGaveQuestion/PlayerMasterGaveQuestion';
import PlayerStartScreen from './Player/PlayerStartScreen/PlayerStartScreen';
import PlayerWaitingAction from './Player/PlayerWaitingAction/PlayerWaitingAction';
import PlayerWaitingQuestion from './Player/PlayerWaitingQuestion/PlayerWaitingQuestion';
import MasterWaitingActionToBeDone from './Master/MasterWaitingActionToBeDone/MasterWaitingActionToBeDone';
import PlayerDoingAction from './Player/PlayerDoingAction/PlayerDoingAction';
import PlayerEndGame from './Player/PlayerEndGame/PlayerEndGame';
import MasterShowPlayerAnswer from './Master/MasterShowPlayerAnswer/MasterShowPlayerAnswer';
import MasterShowPlayerActionStatus from './Master/MasterShowPlayerActionStatus/MasterShowPlayerActionStatus';
import MasterEndGame from './Master/MasterEndGame/MasterEndGame';
import io from 'socket.io-client';
import SocketContext from '../../UsefulComponents/SocketContext/SocketContext';

let socket;

//

const Game = ({ location}) => {
    const [role, setRole] = useState('');
    const [game, setGame] = useState('');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [q, setQ] = useState('');
    const [a, setA] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    const [error, setError] = useState({});

    const ENDPOINT = 'localhost:5000'; 

    useEffect(() => {
        socket = io(ENDPOINT);
    }, [ENDPOINT])
    
    useEffect(() => {
        let {role, game, name, room, q, a} 
            = queryString.parse(location.search);
        setName(name);
        setGame(game);
        setRole(role);
        setRoom(room);
        setQ(q);
        setA(a);

        socket.emit('game', { name, room, game, role }, (error) => {
            setErrorStatus(true);
            setError(error);
        });
    }, [ENDPOINT, location.search]);

    if (role === 'player') {
        switch (game) {
            case '1':
                return (
                <SocketContext.Provider value={socket}>
                    <PlayerStartScreen error={error} errorStatus={errorStatus} name={name} room={room}/>
                </SocketContext.Provider>);
            case '2-1': 
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerWaitingQuestion name={name} room={room} />
                    </SocketContext.Provider>);
            case '2-2':
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerWaitingAction name={name} room={room} />
                    </SocketContext.Provider>)
            case '3-1':
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerMasterGaveQuestion name={name} room={room} q={q}/>
                    </SocketContext.Provider>)
            case '3-2':
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerMasterGaveAction name={name} room={room} q={q}/>
                    </SocketContext.Provider>)
            case '4-1':
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerDoingAction action={q} name={name} room={room} />
                    </SocketContext.Provider>)
            case '5':
                return (
                    <SocketContext.Provider value={socket}>
                        <PlayerEndGame room={room} name={name}/>
                    </SocketContext.Provider>)
            default:
                break;
        }
    } else if (role === "master") {
        switch (game) {
            case '1':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterStartScreen name={name} room={room} error={error} errorStatus={errorStatus} />
                    </SocketContext.Provider>)
            case '2-1':
                return  (
                    <SocketContext.Provider value={socket}>
                        <MasterDecideQuestion name={name} room={room} />
                    </SocketContext.Provider>)
            case '2-2':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterDecideAction name={name} room={room} />
                    </SocketContext.Provider>)
            case '3-1':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterWaitingQuestionToBeDone name={name} room={room} />
                    </SocketContext.Provider>)
            case '3-2':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterWaitingActionToBeDone name={name} room={room} />
                    </SocketContext.Provider>)
            case '4-1':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterShowPlayerAnswer name={name} room={room} a={a}/>
                    </SocketContext.Provider>)
            case '4-2':    
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterShowPlayerActionStatus name={name} room={room} />
                    </SocketContext.Provider>)
            case '5':
                return (
                    <SocketContext.Provider value={socket}>
                        <MasterEndGame room={room} name={name}/>
                    </SocketContext.Provider>)   
            default:
                break;
        }
    }
    return null;
}

export default Game;
