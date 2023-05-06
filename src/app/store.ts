import { configureStore } from '@reduxjs/toolkit';
import playerOneSlice from '../features/playerOneSlice';
import playerTwoSlice from '../features/playerTwoSlice';

export const store = configureStore({
    reducer: {
        playerOne: playerOneSlice,
        playerTwo: playerTwoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
