import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  extraReducers: builder => {},
});

export default notificationSlice.reducer;
