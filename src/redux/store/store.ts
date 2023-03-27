import { configureStore } from '@reduxjs/toolkit';
import workspaceSlice from '../features/workspaceSlice';

export const store = configureStore({
    reducer: {
        reducer: workspaceSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;