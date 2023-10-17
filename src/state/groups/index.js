import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  groups: [],
};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  extraReducers: builder => {},
});

export default groupSlice.reducer;
