import {createSlice} from '@reduxjs/toolkit';
import {INITIAL_LANGUAGE} from 'assets/locales';

const initialState = {
  ...INITIAL_LANGUAGE,
};

export const intlSlice = createSlice({
  name: 'intl',
  initialState,
  reducers: {
    setIntl: state => {
      state = {...state.payload};
    },
  },
});

export default intlSlice.reducer;
