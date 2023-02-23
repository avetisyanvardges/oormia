import {createSlice} from '@reduxjs/toolkit';
import {DarkTheme, LightTheme} from 'assets/Theme';

const initialState = {
  theme: {...LightTheme},
};

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    darkMode: state => {
      state.theme = {...DarkTheme};
    },
    lightMode: () => ({...initialState}),
  },
});

export const {darkMode, lightMode} = themeSlice.actions;
export default themeSlice.reducer;
