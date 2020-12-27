import React, { useContext, useState } from 'react';
import ContentContainer from '../../../../StructureComponents/ContentContainer/ContentContainer';
import imageAndInterface from '../../../../HOCs/ImageAndInterface/ImageAndInterface';
import ButtonTextContainer from '../../../../StructureComponents/ButtonTextContainer/ButtonTextContainer';
import bruhIcon from '../../../../images/bruh.png';
import filmIcon from '../../../../images/film.png';
import './PlayerStartScreen.css';
import ErrorContainer from '../../../../UsefulComponents/Error/ErrorContainer';
import SocketContext from '../../../../UsefulComponents/SocketContext/SocketContext';

const PlayerStartScreen = ({name, room, error, errorStatus}) => {

    const [chosenButton, setChosen] = useState(0);

    const setChosenButton = (data) => {
        setChosen(data);
    } 
    const socket = useContext(SocketContext);

    if (chosenButton === 1) socket.emit('playerWaiting', {room, status: 'WAITING_ANSWER'})
    else if (chosenButton === 2) socket.emit('playerWaiting', {room, status: 'WAITING_ACTION' })

    if (errorStatus) {
        return <ErrorContainer error={error}/>;
    }

    const trueChoice = imageAndInterface({
                            title: "Честно ответить на заданный мастером вопрос",
                            buttonText: "Правда",
                            isButtonLong: false,
                            image: bruhIcon,
                            to: `/game?role=player&game=2-1&name=${name}&room=${room}`,
                            chose: 1,
                            setChosenButton,
                        })(ButtonTextContainer)

    const falseChoice = imageAndInterface({
                            title: "Благородно выполнить заданное мастером действие",
                            buttonText: "Действие",
                            isButtonLong: false,
                            image: filmIcon,
                            to: `/game?role=player&game=2-2&name=${name}&room=${room}`,
                            chose: 2,
                            setChosenButton
                        })(ButtonTextContainer)

    const itemsToRender = [trueChoice, falseChoice];
    return (
        <>
            <h1 className="player-start-screen-title">Вы игрок! Выберете действие!</h1>
            <ContentContainer title="Для себя" wrapCenter={false}>
                {itemsToRender}     
            </ContentContainer>
        </>
    );
}

export default PlayerStartScreen;
