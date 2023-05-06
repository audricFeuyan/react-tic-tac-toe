import React, {useState, useEffect} from 'react';
import { RootState } from './app/store';
import { playerOnePlayed, playerOneWin } from './features/playerOneSlice';
import { playerTwoPlayed, playerTwoWin } from './features/playerTwoSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { PlayState } from './app/dataType';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
  const playgroundStyle = {
    width: panelSize,
    height: panelSize,
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const playgroundCellStyle = {
    height: Math.round(panelSize/3),
    width: Math.round(panelSize/3),
    justifyContent: 'center',
    alignContent: 'center',
  };

  return (
    <div className="App">
      <h1>Mon tic tac toe</h1>
      <div style={playgroundStyle}>
        <Form className="form-playground">
          <Row className="form-playground-line">
            <Col className="form-playground-column">
              <Form.Check aria-label="option 1" style={playgroundCellStyle} />
              <Form.Check aria-label="option 1" style={playgroundCellStyle} />
              <Form.Check aria-label="option 1" style={playgroundCellStyle} />
            </Col>
            <Col className="form-playground-column">
              <Form.Check aria-label="option 1"/>
              <Form.Check aria-label="option 1" />
              <Form.Check aria-label="option 1" />
            </Col>
            <Col className="form-playground-column">
              <Form.Check aria-label="option 1" />
              <Form.Check aria-label="option 1" />
              <Form.Check aria-label="option 1" />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default App;
