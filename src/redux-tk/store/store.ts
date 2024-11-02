import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './features/darkSlice'; // Ensure the reducer is imported correctly

export const store = configureStore({
  reducer: {
    isDarkMode: darkModeReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
