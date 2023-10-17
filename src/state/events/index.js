import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loader: false,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    // builder.addCase(eventsLogAuth, state => {
    //   state.currentUser = {};
    // });
  },
});

export default eventsSlice.reducer;
