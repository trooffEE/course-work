import React, { useState } from 'react';
import ContentContainer from '../../StructureComponents/ContentContainer/ContentContainer';
import masterIcon from '../../images/master.png';
import keyboardIcon from '../../images/keyboard.png';
import InlineInputContainer from '../../StructureComponents/InlineInputContainer/InlineInputContainer';
import imageAndInterface from '../../HOCs/ImageAndInterface/ImageAndInterface';
import LongButton from '../../PrimitiveComponents/LongButton/LongButton';
import { Link } from 'react-router-dom';

const JoinRoom = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const setNameCallback = (name) => {
        setName(name);
    };

    const setIdCallback = (id) => {
        setId(id);
    };

    const NameUser = imageAndInterface({
        name: "name",
        image: masterIcon,
        title: "Как называть вас, мастер",
        placeholder: "Имя",
        setNameCallback,
        key: 1
    })(InlineInputContainer);

    const IdRoom = imageAndInterface({
        name: "room",
        image: keyboardIcon,
        title: "Введите ID комнаты, к которой вы хотите подключиться",
        placeholder: "ID", 
        badImage: true,
        setIdCallback,
        key: 2
    })(InlineInputContainer);

    const itemsToRender = [NameUser, IdRoom];
    return (
        <form onSubmit={(e) => e.preventDefault()} className="room-form">
            <ContentContainer title="Присоединение к комнате">
                {itemsToRender}
            </ContentContainer>
            <Link to={`/game?role=player&game=1&name=${name}&room=${id}`}>
                <button type='submit' className="btn btn-long">Готово</button>
            </Link>
        </form>
    );
}

export default JoinRoom;
