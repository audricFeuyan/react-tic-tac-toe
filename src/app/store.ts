import { configureStore } from '@reduxjs/toolkit';
import playerOneSlice from '../features/playerOneSlice';
import playerTwoSlice from '../features/playerTwoSlice';
import gameSlice from '../features/gameSlice';

export const store = configureStore({
    reducer: {
        playerOne: playerOneSlice,
        playerTwo: playerTwoSlice,
        gamePlay: gameSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
