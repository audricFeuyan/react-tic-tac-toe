import React, {useState, useEffect, FC} from 'react';
import '../style/InputCheckBox.module.css';

type InputCheckBoxProps = {
    playgroundCellStyle: object,
    border: boolean,
}

const defaultProps:InputCheckBoxProps = {
    playgroundCellStyle: {},
    border: false
}


export const InputCheckBox:FC<InputCheckBoxProps> = ({playgroundCellStyle, border}:InputCheckBoxProps) => {
    const [playgroundText, setPlaygroundText] = useState('');
    const [playgroundClicked, setPlaygroundClicked] = useState(false);


    const handleInputClicked = (event: React.MouseEvent<HTMLInputElement>) => {
        if(!playgroundClicked) {
            setPlaygroundText("X");
            setPlaygroundClicked(!playgroundClicked);
        } 
    }

    return(
        <input  style={playgroundCellStyle} data-index={1} value={playgroundText} type="text" readOnly onClick={handleInputClicked} className={border ? "bottom-top-border":""}/>
    );
};

InputCheckBox.defaultProps = defaultProps;