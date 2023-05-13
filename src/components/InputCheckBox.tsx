import React, {useState, useEffect, FC} from 'react';
import '../style/InputCheckBox.module.css';
import { EnumActualPlayer, PlayerState } from '../app/dataType';

import { useDispatch } from 'react-redux';
import { updateGameActualPlayer } from '../features/gameSlice';

type InputCheckBoxProps = {
    playgroundCellStyle: object,
    border: boolean,
    actualPlayerMark: string,
    playValue: number,
    actualPlayHandler: (playerMark: string, playerPlayedPosition: number) => void,
}

const defaultProps:InputCheckBoxProps = {
    playgroundCellStyle: {},
    border: false,
    actualPlayerMark: EnumActualPlayer.PlayerOne,
    playValue: 0,
    actualPlayHandler: () => {},
};


export const InputCheckBox:FC<InputCheckBoxProps> = ({playgroundCellStyle, border, actualPlayerMark, playValue, actualPlayHandler}:InputCheckBoxProps) => {
    const [playgroundText, setPlaygroundText] = useState('');
    const [playgroundClicked, setPlaygroundClicked] = useState(false);
    const dispatch = useDispatch();

    const handleInputClicked = (event: React.MouseEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.getAttribute("data-index"));
        
        if(!playgroundClicked) {
            let actualPlayPosition = event.currentTarget.getAttribute("data-index") ? Number(event.currentTarget.getAttribute("data-index")):0;
            setPlaygroundText(actualPlayerMark);
            dispatch(updateGameActualPlayer());
            actualPlayHandler(actualPlayerMark, actualPlayPosition);
            setPlaygroundClicked(!playgroundClicked);
        } 
    }

    return(
        <input  style={playgroundCellStyle} data-index={playValue} value={playgroundText} type="text" readOnly onClick={handleInputClicked} className={border ? "bottom-top-border":""}/>
    );
};

InputCheckBox.defaultProps = defaultProps;