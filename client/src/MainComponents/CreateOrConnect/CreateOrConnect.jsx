import React, { useState } from 'react';
import ButtonTextContainer from '../../StructureComponents/ButtonTextContainer/ButtonTextContainer';
import ContentContainer from '../../StructureComponents/ContentContainer/ContentContainer';
import roomNameIcon from "../../images/add-room-name.png";
import roomIdIcon from '../../images/room-id.png';
import imageAndInterface from '../../HOCs/ImageAndInterface/ImageAndInterface';

const CreateOrConnect = () => {
    const [chosenButton, setChosenButton] = useState(0);

    const ButtonTextContainerCreateRoom = imageAndInterface({ 
                                                    image: roomNameIcon,
                                                    title: "Сотворить игру",
                                                    buttonText: "Создать комнату",
                                                    isButtonLong: true,
                                                    to: '/create-room',
                                                    chose: 1,
                                                    setChosenButton
                                                })(ButtonTextContainer)

    const ButtonTextContainerJoinRoom = imageAndInterface({ 
                                                    image: roomIdIcon,
                                                    title: "Вас попопросят ввести ID",
                                                    buttonText: "Присоединиться к комнате",
                                                    isButtonLong: true,
                                                    to: '/join',
                                                    badImage: true,
                                                    chose: 2,
                                                    setChosenButton
                                                })(ButtonTextContainer)
    
    const itemsToRender = [ButtonTextContainerCreateRoom, ButtonTextContainerJoinRoom];

    return (
        <ContentContainer title="Что вы хотите сделать?">
            {itemsToRender}
        </ContentContainer>
    );
}

export default CreateOrConnect;
