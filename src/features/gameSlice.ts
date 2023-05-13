import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, PlayState, EnumActualPlayer } from '../app/dataType';

const initialState: GameState = {
    party: 0,
    actualPlayer: EnumActualPlayer.PlayerOne,
    totalPartyDuration: 0,
    playerOneWins: 0,
    playerTwoWins: 0,
    actualStep:0,
};

export const gameSlice = createSlice({
    name: 'gamePlay',
    initialState,
    reducers: {
        startParty: (state) => {
            state.party += 1;
        },
        updateGameActualPlayer: (state) => {
            state.actualStep += 1;
            if(state.actualPlayer === EnumActualPlayer.PlayerOne) 
                state.actualPlayer = EnumActualPlayer.PlayerTwo;
            else 
                state.actualPlayer = EnumActualPlayer.PlayerOne;
        }
    }
});

export const { startParty, updateGameActualPlayer } = gameSlice.actions;

export default gameSlice.reducer;