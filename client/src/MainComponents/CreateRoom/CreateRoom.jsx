import React, { useState } from 'react';
import imageAndInterface from '../../HOCs/ImageAndInterface/ImageAndInterface';
import ContentContainer from '../../StructureComponents/ContentContainer/ContentContainer';
import masterIcon from '../../images/master.png'
import roomIcon from '../../images/room.png';
import InlineInputContainer from '../../StructureComponents/InlineInputContainer/InlineInputContainer';
import './CreateRoom.css';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
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
                                            title: "Как называть вас, мастер?",
                                            placeholder: "Имя",
                                            setNameCallback
                                        })(InlineInputContainer)
    const RoomMaster = imageAndInterface({ 
                                            name: "room",
                                            image: roomIcon,
                                            title: "Как называть комнату мастера?",
                                            placeholder: "Название комнаты",
                                            setIdCallback
                                        })(InlineInputContainer)


    const itemsToRender = [NameUser, RoomMaster];
                             
    return (
        <form onSubmit={(e) => e.preventDefault()} className="room-form">
            <ContentContainer title="Создание комнаты">
                {itemsToRender}
            </ContentContainer>
            <Link to={`/game?role=master&game=1&name=${name}&room=${id}`}>
                <button type='submit' disabled={!name || !id} className="btn btn-long">Готово</button>
            </Link>
        </form>
    );
}

export default CreateRoom;
