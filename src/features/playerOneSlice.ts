import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState, PlayState } from '../app/dataType';

const initialState: PlayerState = {
    score: 0,
    playDuration: 0,
    actualPlayState: [],
    mark: "X"
};

export const playerOneSlice = createSlice({
    name: 'playerOne',
    initialState,
    reducers: {
        playerOneWin: (state) => {
            state.score += 1;
        },
        playerOnePlayed: (state, action: PayloadAction<PlayState>) => {
            state.playDuration += action.payload.duration;
            state.actualPlayState.push(action.payload.playPosition)
        }
    }
});

export const { playerOneWin, playerOnePlayed } = playerOneSlice.actions;

export default playerOneSlice.reducer;