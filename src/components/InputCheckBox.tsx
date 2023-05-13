import React, {useState, useEffect, FC} from 'react';
import '../style/InputCheckBox.module.css';

type InputCheckBoxProps = {
    playgroundCellStyle: object,
}

const defaultProps:InputCheckBoxProps = {
    playgroundCellStyle: {},
}


export const InputCheckBox:FC<InputCheckBoxProps> = ({playgroundCellStyle}:InputCheckBoxProps) => {
    const [playgroundText, setPlaygroundText] = useState('');
    const [playgroundClicked, setPlaygroundClicked] = useState(false);


    const handleInputClicked = (event: React.MouseEvent<HTMLInputElement>) => {
        if(!playgroundClicked) {
            setPlaygroundText("X");
            setPlaygroundClicked(!playgroundClicked);
        } 
    }

    return(
        <div style={playgroundCellStyle}>
            <input  style={playgroundCellStyle} data-index={1} value={playgroundText} type="text" readOnly onClick={handleInputClicked} />
        </div>
    );
};

InputCheckBox.defaultProps = defaultProps;