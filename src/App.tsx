import React, {useState, useEffect} from 'react';
import { RootState } from './app/store';
import { playerOnePlayed, playerOneWin } from './features/playerOneSlice';
import { playerTwoPlayed, playerTwoWin } from './features/playerTwoSlice';
import { startParty } from './features/gameSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { EnumActualPlayer, PlayState, PlayerState} from './app/dataType';


import { InputCheckBox } from './components/InputCheckBox';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [pageViewportWidth, setPageViewportWidth] = useState(window.innerWidth);
  const [pageViewportHeight, setPageViewportHeight] = useState(window.innerHeight);
  const [showPlayModal, setShowPlayModal] = useState(true);

  const playerOne = useSelector((state: RootState) => state.playerOne);
  const playerTwo = useSelector((state: RootState) => state.playerTwo);
  const game = useSelector((state: RootState) => state.gamePlay);
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

  const handlePlayerOnePlayed = (playerOnePlayedPosition: number, duration: number) => {
    let actualPlayerOnePlay:PlayState = {
      playPosition: playerOnePlayedPosition,
      duration: 0
    };
    console.log({actualPlayerOnePlay});
    dispatch(playerOnePlayed(actualPlayerOnePlay));
  };

  const handlePlayerTwoPlayed = (playerTwoPlayedPosition: number, duration: number) => {
    let actualPlayerTwoPlay:PlayState = {
      playPosition: playerTwoPlayedPosition,
      duration: 0
    };
    console.log({actualPlayerTwoPlay});
    dispatch(playerTwoPlayed(actualPlayerTwoPlay));
  };

  const handleActualPlay = (playerMark: string, playerPlayedPosition: number) => {
    if(playerMark === EnumActualPlayer.PlayerOne){
      handlePlayerOnePlayed(playerPlayedPosition, 0);
    }else if(playerMark === EnumActualPlayer.PlayerTwo){
      handlePlayerTwoPlayed(playerPlayedPosition, 0);
    }
  };

  const handlePlayerOneWin = () => {
    dispatch(playerOneWin());
  };

  const handlePlayerTwoWin = () => {
    dispatch(playerTwoWin());
  };

  const handleClosePlayModal = () => {
    setShowPlayModal(false);
    console.log("Hide game play modal");
  };

  const handleStartGame = () => {
    console.log("Start a game");
    dispatch(startParty());
    handleClosePlayModal();
  };

  const panelSize = Math.min(Math.round(pageViewportHeight), Math.round(pageViewportWidth))*0.9;
  const defaultPlaygroundCellSpacing = 10;
  const defaultPlaygroundColumnSpacing = 4;
  const playgroundStyle = {
    width: panelSize,
    height: panelSize,
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const playgroundColumnStyle = {
    width: Math.round(panelSize/3) - defaultPlaygroundColumnSpacing,
  };
  const cellSize = Math.round(panelSize/3) - defaultPlaygroundColumnSpacing;
  const playgroundCellStyle = {
    height: cellSize,
    width: cellSize - defaultPlaygroundColumnSpacing,
    fontSize: cellSize - defaultPlaygroundCellSpacing,
    padding: defaultPlaygroundCellSpacing,
    justifyContent: 'center',
    alignContent: 'center',
  };
  const playgroundCentralCellStyle = {
    height: cellSize,
    width: cellSize,
    fontSize: cellSize - defaultPlaygroundCellSpacing,
    padding: defaultPlaygroundCellSpacing,
    justifyContent: 'center',
    alignContent: 'center',
  };

  return (
    <div className="App">
      <h1>React tic tac toe</h1>
      <Modal show={showPlayModal} onHide={handleClosePlayModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>React Tic-Tac-Toe</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={handleStartGame}>
            Start game
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex flex-row mt-3 mb-3 justify-content-evenly">
        <div>
          <span><strong className="text-decoration-underline">Party:</strong> {game.party}</span>
        </div>
        <div>
          <span><strong className="text-decoration-underline">Actual player:</strong> {game.actualPlayer}</span>
        </div>
        <div>
          <span className=""><strong className="text-decoration-underline">Step:</strong> {game.actualStep}</span>
        </div>
        <div>
          <span className="">
            <strong className="text-decoration-underline">Score(</strong>
            X:{game.playerOneWins} - O:{game.playerTwoWins}
            <strong className="text-decoration-underline">)</strong>
          </span>
        </div>
      </div>
      
      <div style={playgroundStyle}>
        <div className="form-playground-line" style={playgroundStyle}>
          <div className="form-playground-column right-border" style={playgroundColumnStyle} >
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={1} actualPlayHandler={handleActualPlay}/>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={true}  actualPlayerMark={game.actualPlayer} playValue={4} actualPlayHandler={handleActualPlay}/>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={7} actualPlayHandler={handleActualPlay} />
          </div>
          <div className="form-playground-column" style={playgroundColumnStyle}>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={2}  actualPlayHandler={handleActualPlay}/>
            <InputCheckBox playgroundCellStyle={playgroundCentralCellStyle} border={true} actualPlayerMark={game.actualPlayer} playValue={5} actualPlayHandler={handleActualPlay} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={8} actualPlayHandler={handleActualPlay} />
          </div>
          <div className="form-playground-column left-border" style={playgroundColumnStyle}>
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={3} actualPlayHandler={handleActualPlay} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={true} actualPlayerMark={game.actualPlayer} playValue={6} actualPlayHandler={handleActualPlay} />
            <InputCheckBox playgroundCellStyle={playgroundCellStyle} border={false} actualPlayerMark={game.actualPlayer} playValue={9} actualPlayHandler={handleActualPlay} />
          </div>
        </div>
      </div>
      <div>
        <p>
          PlayerOnePlayTrace: {playerOne.actualPlayState}
        </p>
        <p>
          PlayerTwoPlayTrace: {playerTwo.actualPlayState}
        </p>
      </div>
    </div>
  );
}

export default App;
