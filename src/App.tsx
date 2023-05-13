import React, {useState, useEffect} from 'react';
import { RootState } from './app/store';
import { playerOnePlayed, playerOneWin } from './features/playerOneSlice';
import { playerTwoPlayed, playerTwoWin } from './features/playerTwoSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { PlayState } from './app/dataType';


import { InputCheckBox } from './components/InputCheckBox';

function App() {
  const [pageViewportWidth, setPageViewportWidth] = useState(window.innerWidth);
  const [pageViewportHeight, setPageViewportHeight] = useState(window.innerHeight);

  const playerOne = useSelector((state: RootState) => state.playerOne);
  const playerTwo = useSelector((state: RootState) => state.playerTwo);
  const dispatch = useDispatch();

  useEffect(()=>{
      const handleWindowResize = () => {
          setPageViewportWidth(window.innerWidth);
          setPageViewportHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
    }, []);

  const handlePlayerOnePlayed = (playerOnePlay: PlayState) => {
    dispatch(playerOnePlayed(playerOnePlay));
  };

  const handlePlayerTwoPlayed = (playerTwoPlay: PlayState) => {
    dispatch(playerTwoPlayed(playerTwoPlay));
  };

  const handlePlayerOneWin = () => {
    dispatch(playerOneWin());
  };

  const handlePlayerTwoWin = () => {
    dispatch(playerTwoWin());
  };

  const panelSize = Math.min(Math.round(pageViewportHeight), Math.round(pageViewportWidth))*0.9;
  const defaultPlaygroundCellSpacing = 10;
  const playgroundStyle = {
    width: panelSize,
    height: panelSize,
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const playgroundColumnStyle = {
    width: Math.round(panelSize/3),
  };
  const cellSize = Math.round(panelSize/3) - defaultPlaygroundCellSpacing;
  const playgroundCellStyle = {
    height: cellSize,
    width: cellSize,
    fontSize: cellSize,
    justifyContent: 'center',
    alignContent: 'center',
  };

  return (
    <div className="App">
      <h1>Mon tic tac toe</h1>
      <div style={playgroundStyle}>
        <div className="form-playground-line" style={playgroundStyle}>
          <div className="form-playground-column" style={playgroundColumnStyle} >
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
          </div>
          <div className="form-playground-column" style={playgroundColumnStyle}>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
          </div>
          <div className="form-playground-column" style={playgroundColumnStyle}>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
