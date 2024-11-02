import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface DarkState {
  value: boolean;
}

const initialState: DarkState = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: 'dark', 
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => state.isDarkMode.value;

export default darkModeSlice.reducer;
