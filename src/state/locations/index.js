import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  groups: [],
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: builder => {},
});

export default locationsSlice.reducer;
