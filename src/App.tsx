import React from 'react';
import { RootState } from './app/store';
import { playerOnePlayed, playerOneWin } from './features/playerOneSlice';
import { playerTwoPlayed, playerTwoWin } from './features/playerTwoSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { PlayState } from './app/dataType';

function App() {
  const playerOne = useSelector((state: RootState) => state.playerOne);
  const playerTwo = useSelector((state: RootState) => state.playerTwo);
  const dispatch = useDispatch();

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
  

  console.log(playerOne);
  console.log(playerTwo);
  return (
    <div className="App">
      <h1>Mon tic tac toe</h1>
    </div>
  );
}

export default App;
