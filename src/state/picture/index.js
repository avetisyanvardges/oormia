import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pics: [],
};

export const pictureSlice = createSlice({
  name: 'picture',
  initialState,
  extraReducers: builder => {},
});

export default pictureSlice.reducer;
