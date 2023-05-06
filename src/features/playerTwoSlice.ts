import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState, PlayState } from '../app/dataType';


const initialState: PlayerState = {
    score: 0,
    playDuration: 0,
    actualPlayState: [],
    mark: "O"
};

export const playerTwoSlice = createSlice({
    name: 'playerTwo',
    initialState,
    reducers: {
        playerTwoWin: (state) => {
            state.score += 1;
        },
        playerTwoPlayed: (state, action: PayloadAction<PlayState>) => {
            state.playDuration += action.payload.duration;
            state.actualPlayState.push(action.payload.playPosition)
        }
    }
});

export const { playerTwoWin, playerTwoPlayed } = playerTwoSlice.actions;

export default playerTwoSlice.reducer;