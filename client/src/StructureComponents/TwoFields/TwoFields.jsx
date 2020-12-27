import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LongButton from '../../PrimitiveComponents/LongButton/LongButton';
import SocketContext from '../../UsefulComponents/SocketContext/SocketContext';
import ContentContainer from '../ContentContainer/ContentContainer';
import './TwoFields.css';

const TwoFields = ({ title, nameEditableField, btnText, question, fieldFirstTitle, fieldSecondTitle, name, room}) => {
    const [value, setValue] = useState('');
    const [clicked, setClicked] = useState(false);
    
    const socket = useContext(SocketContext);

    useEffect(() => {
        if (clicked) {
            socket.emit('givingAnswer', {room, payload: value});
        }
    }, [clicked])

    return (
        <div className="fix-layout">
            <h1 className="basic-info__title">{title}</h1>
            <div className="two-fields">
                <ContentContainer title={fieldFirstTitle} noPadding={true}>
                    <div className="field-1">
                        {question}
                    </div>
                </ContentContainer>
                <ContentContainer title={fieldSecondTitle} noPadding={true}>
                    <textarea className="field-2" required={true} minLength={2} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ответ пишите тут.." name={nameEditableField} id=""></textarea>
                </ContentContainer>
            </div>
            <Link to={`/game?role=player&game=5&name=${name}&room=${room}`}>
                <button className="btn btn-long" onClick={() => setClicked(true)}>{btnText}</button>
            </Link>
            {/* <LongButton text={btnText} to={`/game?role=player&game=5&name=${name}&room=${room}`}
                chose={1} setChosenButton={callbackParent}/> */}
        </div>
    );
}

export default TwoFields;
